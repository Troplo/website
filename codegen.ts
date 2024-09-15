/*
 * Copyright (c) 2024. Matthew Nichols. SAT Project - FlowForms. This contains the code for the FlowForms project.
 */

import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:24007/graphql",
  documents: ["graphql/**/*.ts"],
  generates: {
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
    "./gql/": {
      preset: "client",
      config: {
        useTypeImports: true
      }
    }
  }
}

export default config
