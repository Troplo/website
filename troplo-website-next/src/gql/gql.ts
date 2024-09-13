/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Announcements($input: AnnouncementsInput!) {\n    announcements(input: $input) {\n      id\n      title\n      description\n      createdAt\n      updatedAt\n      banner\n      bannerText\n      bannerExpiry\n      bannerType\n      flowinityUserId\n    }\n  }\n": types.AnnouncementsDocument,
    "\n  query StatusPage {\n    status {\n      name\n      status\n    }\n  }\n": types.StatusPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Announcements($input: AnnouncementsInput!) {\n    announcements(input: $input) {\n      id\n      title\n      description\n      createdAt\n      updatedAt\n      banner\n      bannerText\n      bannerExpiry\n      bannerType\n      flowinityUserId\n    }\n  }\n"): (typeof documents)["\n  query Announcements($input: AnnouncementsInput!) {\n    announcements(input: $input) {\n      id\n      title\n      description\n      createdAt\n      updatedAt\n      banner\n      bannerText\n      bannerExpiry\n      bannerType\n      flowinityUserId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query StatusPage {\n    status {\n      name\n      status\n    }\n  }\n"): (typeof documents)["\n  query StatusPage {\n    status {\n      name\n      status\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;