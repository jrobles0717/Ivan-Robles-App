// types.ts
export interface OptionType {
  value: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  country: OptionType | null;
  referral: OptionType | null;
}

export interface FormErrors {
  name?: string;
  email?: string;
  country?: string;
  referral?: string;
}
