# Ivan Robles App — Claude Guidelines

## Branch Workflow

**Siempre trabajar en la rama `claude`.** Nunca hacer cambios directamente en `main`.

1. Todos los cambios se desarrollan en la rama `claude`
2. El dueño del proyecto (jrobles0717) revisa y valida los cambios
3. Solo después de su aprobación se hace merge a `main`

```bash
# Verificar que estás en la rama correcta antes de empezar
git checkout claude

# Para subir cambios a la rama claude en GitHub
git push origin claude
```

## Stack

- **Framework:** React + TypeScript + Vite
- **Hosting:** Netlify
- **Estilos:** CSS / Tailwind (verificar en proyecto)

## Reglas generales

- No hacer commits directamente a `main`
- No subir archivos `.env` — ya está en `.gitignore` y removido del tracking
- Pedir confirmación antes de hacer `git push` o cualquier acción destructiva
