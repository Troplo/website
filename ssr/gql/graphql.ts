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
  Date: { input: any; output: any; }
};

export type Announcement = {
  __typename?: 'Announcement';
  banner: Scalars['String']['output'];
  bannerExpiry?: Maybe<Scalars['Date']['output']>;
  bannerText?: Maybe<Scalars['String']['output']>;
  bannerType?: Maybe<BannerType>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  flowinityUser?: Maybe<FlowinityUser>;
  flowinityUserId: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  /** Resolvable URL to an image */
  image: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
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

export type FlowinityUser = {
  __typename?: 'FlowinityUser';
  avatar?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  announcement?: Maybe<Announcement>;
  announcements: Array<Announcement>;
  information: Scalars['String']['output'];
  status: Array<StatusMonitor>;
};


export type QueryAnnouncementArgs = {
  id: Scalars['String']['input'];
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

export type AnnouncementQueryVariables = Exact<{
  announcementId: Scalars['String']['input'];
}>;


export type AnnouncementQuery = { __typename?: 'Query', announcement?: { __typename?: 'Announcement', id: string, title: string, description: string, content?: string | null, createdAt: any, updatedAt: any, bannerExpiry?: any | null, image: string, flowinityUser?: { __typename?: 'FlowinityUser', username: string, avatar?: string | null } | null } | null };

export type AnnouncementsQueryVariables = Exact<{
  input: AnnouncementsInput;
}>;


export type AnnouncementsQuery = { __typename?: 'Query', announcements: Array<{ __typename?: 'Announcement', id: string, title: string, description: string, createdAt: any, updatedAt: any, image: string, banner: string, bannerText?: string | null, bannerExpiry?: any | null, bannerType?: BannerType | null, flowinityUserId: number }> };

export type StatusPageQueryVariables = Exact<{ [key: string]: never; }>;


export type StatusPageQuery = { __typename?: 'Query', status: Array<{ __typename?: 'StatusMonitor', name: string, status: Status }> };


export const AnnouncementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Announcement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"announcementId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"announcement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"announcementId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bannerExpiry"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"flowinityUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<AnnouncementQuery, AnnouncementQueryVariables>;
export const AnnouncementsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Announcements"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AnnouncementsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"announcements"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"banner"}},{"kind":"Field","name":{"kind":"Name","value":"bannerText"}},{"kind":"Field","name":{"kind":"Name","value":"bannerExpiry"}},{"kind":"Field","name":{"kind":"Name","value":"bannerType"}},{"kind":"Field","name":{"kind":"Name","value":"flowinityUserId"}}]}}]}}]} as unknown as DocumentNode<AnnouncementsQuery, AnnouncementsQueryVariables>;
export const StatusPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StatusPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<StatusPageQuery, StatusPageQueryVariables>;