import { type Linter } from "eslint";

const flatConfig: Linter.Config[] = [
  {
    rules: {
      eqeqeq: ["error", "always", { null: "ignore" }],
      indent: ["error", 2],
      "no-tabs": "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];

export { flatConfig };
