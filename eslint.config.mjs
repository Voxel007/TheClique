import react from "eslint-plugin-react"; 
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  //tseslint.configs.strict,
  //tseslint.configs.stylistic,

  // React & Hooks plugin configuration
  // react.configs.recommended,
  // reactHooks.configs.recommended,

  // Flat config for plugins: define plugins as an object
  {
    plugins: {
      react: react,
      "react-hooks": reactHooks,
    },
  },

  prettier,
);
