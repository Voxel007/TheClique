// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,

  prettier,
  //tseslint.configs.strict,
  //tseslint.configs.stylistic,
);
