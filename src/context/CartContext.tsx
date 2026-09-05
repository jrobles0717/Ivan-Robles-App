import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface CartLineItem {
  /** Unique per product + size, used as the React key and for updates */
  key: string;
  productId: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  /** Present only for real Shopify products — required to build a real checkout */
  shopifyVariantId?: string;
}

interface CartContextValue {
  items: CartLineItem[];
  addItem: (item: Omit<CartLineItem, "quantity">, quantity?: number) => void;
  updateQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  totalQuantity: number;
  subtotal: number;
  /** True only if every line item came from the real Shopify catalog */
  isCheckoutEligible: boolean;
  /** Drawer open state lives here so any component (nav icon, mobile bar) can trigger it */
  isDrawerOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const STORAGE_KEY = "irob-cart";

const CartContext = createContext<CartContextValue | null>(null);

function loadInitialItems(): CartLineItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartLineItem[]) : [];
  } catch {
    return [];
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartLineItem[]>(loadInitialItems);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openCart = () => setDrawerOpen(true);
  const closeCart = () => setDrawerOpen(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage unavailable (private browsing, etc.) — cart just won't persist
    }
  }, [items]);

  const addItem: CartContextValue["addItem"] = (item, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((line) => line.key === item.key);
      if (existing) {
        return prev.map((line) =>
          line.key === item.key
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const updateQuantity = (key: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((line) => line.key !== key)
        : prev.map((line) => (line.key === key ? { ...line, quantity } : line))
    );
  };

  const removeItem = (key: string) => {
    setItems((prev) => prev.filter((line) => line.key !== key));
  };

  const clear = () => setItems([]);

  const totalQuantity = items.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = items.reduce(
    (sum, line) => sum + line.price * line.quantity,
    0
  );
  const isCheckoutEligible =
    items.length > 0 && items.every((line) => Boolean(line.shopifyVariantId));

  const value = useMemo(
    () => ({
      items,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      totalQuantity,
      subtotal,
      isCheckoutEligible,
      isDrawerOpen,
      openCart,
      closeCart,
    }),
    [items, totalQuantity, subtotal, isCheckoutEligible, isDrawerOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
