/*
 * Copyright (c) 2024. Matthew Nichols. SAT Project - FlowForms. This contains the code for the FlowForms project.
 */

import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:24007/graphql",
  documents: [
    "src/**/*.graphql.ts",
    "src/**/*.mutation.ts",
    "src/**/*.query.ts",
    "src/**/*.fragment.ts",
    "src/**/*.subscription.ts"
  ],
  generates: {
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
    "./src/gql/": {
      preset: "client",
      config: {
        useTypeImports: true
      }
    }
  }
}

export default config
