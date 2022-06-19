const dotenv = require("dotenv");
const { resolve } = require("path");
const { cwd } = require("process");

dotenv.config({
  path: resolve(cwd(), ".env.local"),
});

/** @type {import('@graphql-codegen/cli').LoadCodegenConfigOptions} */
module.exports = {
  schema: [
    {
      [`${process.env.HASURA_GRAPHQL_ENDPOINT}/v1/graphql`]: {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    "./graphql/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        fetcher: "fetch",
      },
      hooks: {
        afterOneFileWrite: ["npx prettier --write"],
      },
    },
    "./graphql/graphql.schema.json": {
      plugins: ["introspection"],
      hooks: {
        afterOneFileWrite: ["npx prettier --write"],
      },
    },
  },
};
