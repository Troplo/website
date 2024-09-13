/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Announcement = {
  __typename?: 'Announcement';
  banner: Scalars['String']['output'];
  bannerExpiry: Scalars['String']['output'];
  bannerText: Scalars['String']['output'];
  bannerType: BannerType;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  flowinityUserId: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AnnouncementsInput = {
  banner?: InputMaybe<Scalars['Boolean']['input']>;
  /** The page number. Ignored if banner is true. */
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** The type of the banner */
export enum BannerType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning'
}

export type Query = {
  __typename?: 'Query';
  announcements: Array<Announcement>;
  information: Scalars['String']['output'];
  status: Array<StatusMonitor>;
};


export type QueryAnnouncementsArgs = {
  input: AnnouncementsInput;
};

/** The status of the monitor */
export enum Status {
  Down = 'DOWN',
  Maintenance = 'MAINTENANCE',
  Pending = 'PENDING',
  Up = 'UP'
}

export type StatusMonitor = {
  __typename?: 'StatusMonitor';
  name: Scalars['String']['output'];
  status: Status;
};

export type AnnouncementsQueryVariables = Exact<{
  input: AnnouncementsInput;
}>;


export type AnnouncementsQuery = { __typename?: 'Query', announcements: Array<{ __typename?: 'Announcement', id: string, title: string, description: string, createdAt: string, updatedAt: string, banner: string, bannerText: string, bannerExpiry: string, bannerType: BannerType, flowinityUserId: number }> };

export type StatusPageQueryVariables = Exact<{ [key: string]: never; }>;


export type StatusPageQuery = { __typename?: 'Query', status: Array<{ __typename?: 'StatusMonitor', name: string, status: Status }> };


export const AnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Announcements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"announcements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"banner"}},{"kind":"Field","name":{"kind":"Name","value":"bannerText"}},{"kind":"Field","name":{"kind":"Name","value":"bannerExpiry"}},{"kind":"Field","name":{"kind":"Name","value":"bannerType"}},{"kind":"Field","name":{"kind":"Name","value":"flowinityUserId"}}]}}]}}]} as unknown as DocumentNode<AnnouncementsQuery, AnnouncementsQueryVariables>;
export const StatusPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StatusPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<StatusPageQuery, StatusPageQueryVariables>;