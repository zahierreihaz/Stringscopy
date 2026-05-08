## Fluent Design References

- Always refer to the **Fluent 2 guidelines**:
  [https://fluent2.microsoft.design/](https://fluent2.microsoft.design/)

## Packages & Dependencies

### Core UI Libraries

- Use React components from 9.46.2 version:
  [https://www.npmjs.com/package/@fluentui/react-components](https://www.npmjs.com/package/@fluentui/react-components)
- Use icons from:
  [https://www.npmjs.com/package/@fluentui/react-icons](https://www.npmjs.com/package/@fluentui/react-icons)

### Framework Dependencies

- Ensure the following dependencies exist in `package.json` (must be under **dependencies**, not **peerDependencies**):
  - `"react": "^18.2.0"`
  - `"react-dom": "^18.2.0"`

- **Keep ONLY these dependencies in `package.json`. datepicker-compat & timepicker-compat are conditional. Remove all other dependencies:**

```json
"dependencies": {
  "@fluentui/react-components": "9.46.2",
  "@fluentui/react-datepicker-compat": "^0.6.21",
  "@fluentui/react-icons": "^2.0.316",
  "@fluentui/react-timepicker-compat": "^0.4.27",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Build Tooling

- Ensure the following dev dependency exists in `package.json`:
  - `"vite": "6.4.2"`

## Application Setup

- Always wrap the application in a `FluentProvider` using `webLightTheme`.
- Keep structure in `app.tsx`.
- Keep logic/hooks in `hooks.ts`.
- **Create and use a `strings/strings.ts` file for all text strings.**
- All user feedback messages must be centralized under a structured “feedback” model, separating error and success states. The structure must support scalability for additional message types (e.g., warning, info) and future localization.

## Typography & Styling

- Create `useStyles.tsx` under the **Styles** folder.
- Store base styling in `useStyles.tsx`.
- **Strictly no inline styling.**
- Use only Fluent UI `makeStyles` layout utilities, spacing, and tokens for **all spacing and colors**.
- Standardize and only keep necessary styling in `useStyles.tsx`.
- Import and prioritize **Fluent UI typography presets**. Please use `<Body1>`, `<Caption1>`, etc. for standard typography.
- For custom typography, use this template: `<Text className={styles.header}>Custom Device</text>`.
- For **Subtle buttons**, use the **Body1** typography preset for the button text.
- When using flex, please specify flex direction: `row` | `row-reverse` | `column` | `column-reverse`.
- **IF component breakpoints is needed, please prioritize @media css first.**

## Restrictions & Validation

- **DO NOT** use Radix UI (`@radix-ui`) components.
- **DO NOT** use Lucide icons.
- **DO NOT** use Tailwind utility classes for layout.
- **IF component behavior or structure needs to change, please verify with me first if javascript is needed.**
- Always validate that the generated code follows the **Fluent UI codebase conventions**.

## Build & Project Configuration

### Required Scripts

- Ensure the following script is included in `package.json`:
  - `"dev": "vite"`

### Entry Points

- The project **must include** the following entry point files:
  - `index.html`
  - `main.tsx`

- Ensure `main.tsx` is properly connected to `index.html` as the application entry.

### Cleanup & Removal Rules

- Delete the following files and folders:
  - `/src/app/components/ui/` (entire folder)
  - `/src/styles/tailwind.css`

- In `vite.config.ts`:
  - Remove: `import tailwindcss from '@tailwindcss/vite'`
  - Remove `tailwindcss()` from the plugins array

- In `src/styles/index.css`:
  - Remove: `@import './tailwind.css';`

  ###