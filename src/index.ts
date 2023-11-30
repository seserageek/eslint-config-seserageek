import { type Linter } from "eslint";

const config: Linter.Config = {
  rules: {
    eqeqeq: ["error", "always", { null: "ignore" }],
    indent: ["error", 2],
    "no-tabs": "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};

export default config;
