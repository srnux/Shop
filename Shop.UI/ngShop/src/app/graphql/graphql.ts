import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `DateTime` scalar type represents a date and time. `DateTime` expects
   * timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
 */
  DateTime: any,
  Decimal: any,
  /** 
 * The `Date` scalar type represents a year, month and day in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
 */
  Date: any,
  /** 
 * The `DateTimeOffset` scalar type represents a date, time and offset from UTC.
   * `DateTimeOffset` expects timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
 */
  DateTimeOffset: any,
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
  Seconds: any,
  /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
  Milliseconds: any,
};



/** Alternative path for the content item */
export type AliasPart = {
   __typename?: 'AliasPart',
  alias?: Maybe<Scalars['String']>,
};

/** the alias part of the content item */
export type AliasPartInput = {
  /** the alias of the content item is equal to */
  alias?: Maybe<Scalars['String']>,
  /** the alias of the content item is not equal to */
  alias_not?: Maybe<Scalars['String']>,
  /** the alias of the content item is in collection */
  alias_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the alias of the content item is not in collection */
  alias_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the alias of the content item contains the string */
  alias_contains?: Maybe<Scalars['String']>,
  /** the alias of the content item does not contain the string */
  alias_not_contains?: Maybe<Scalars['String']>,
  /** the alias of the content item starts with the string */
  alias_starts_with?: Maybe<Scalars['String']>,
  /** the alias of the content item does not start with the string */
  alias_not_starts_with?: Maybe<Scalars['String']>,
  /** the alias of the content item ends with the string */
  alias_ends_with?: Maybe<Scalars['String']>,
  /** the alias of the content item does not end with the string */
  alias_not_ends_with?: Maybe<Scalars['String']>,
};

/** Represents a Article. */
export type Article = ContentItem & {
   __typename?: 'Article',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Content stored as HTML. */
  htmlBody?: Maybe<HtmlBodyPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** The permalinks for your content item. */
  path: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
  /** Text field */
  subtitle?: Maybe<Scalars['String']>,
};

export type ArticleOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Article content item filters */
export type ArticleWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ArticleWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ArticleWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ArticleWhereInput>>>,
  /** the path of the content item to filter is equal to */
  path?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is not equal to */
  path_not?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is in collection */
  path_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter is not in collection */
  path_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter contains the string */
  path_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not contain the string */
  path_not_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter starts with the string */
  path_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not start with the string */
  path_not_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter ends with the string */
  path_ends_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not end with the string */
  path_not_ends_with?: Maybe<Scalars['String']>,
};

/** Custom URLs (permalinks) for your content item. */
export type AutoroutePart = {
   __typename?: 'AutoroutePart',
  /** The permalinks for your content item. */
  path: Scalars['String'],
};

/** the custom URL part of the content item */
export type AutoroutePartInput = {
  /** the path of the content item to filter is equal to */
  path?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is not equal to */
  path_not?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is in collection */
  path_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter is not in collection */
  path_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter contains the string */
  path_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not contain the string */
  path_not_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter starts with the string */
  path_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not start with the string */
  path_not_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter ends with the string */
  path_ends_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not end with the string */
  path_not_ends_with?: Maybe<Scalars['String']>,
};

/** A BagPart allows to add content items directly within another content item */
export type BagPart = {
   __typename?: 'BagPart',
  /** the content items */
  contentItems?: Maybe<Array<Maybe<ContentItem>>>,
};


/** A BagPart allows to add content items directly within another content item */
export type BagPartContentItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

/** Represents a Blockquote. */
export type Blockquote = ContentItem & {
   __typename?: 'Blockquote',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** Text field */
  quote?: Maybe<Scalars['String']>,
  render?: Maybe<Scalars['String']>,
};

export type BlockquoteOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Blockquote content item filters */
export type BlockquoteWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<BlockquoteWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<BlockquoteWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<BlockquoteWhereInput>>>,
};

/** Represents a Blog. */
export type Blog = ContentItem & {
   __typename?: 'Blog',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Content stored as HTML. */
  htmlBody?: Maybe<HtmlBodyPart>,
  /** MediaField */
  image?: Maybe<MediaField>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  /** Represents a collection of content items. */
  list?: Maybe<ListPart>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** The permalinks for your content item. */
  path: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type BlogOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** Represents a Blog Post. */
export type BlogPost = ContentItem & {
   __typename?: 'BlogPost',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** MediaField */
  image?: Maybe<MediaField>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  /** Content stored as Markdown. You can also query the HTML interpreted version of Markdown. */
  markdownBody?: Maybe<MarkdownBodyPart>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** The permalinks for your content item. */
  path: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
  /** Text field */
  subtitle?: Maybe<Scalars['String']>,
};

export type BlogPostOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the BlogPost content item filters */
export type BlogPostWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<BlogPostWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<BlogPostWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<BlogPostWhereInput>>>,
  /** the path of the content item to filter is equal to */
  path?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is not equal to */
  path_not?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is in collection */
  path_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter is not in collection */
  path_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter contains the string */
  path_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not contain the string */
  path_not_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter starts with the string */
  path_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not start with the string */
  path_not_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter ends with the string */
  path_ends_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not end with the string */
  path_not_ends_with?: Maybe<Scalars['String']>,
};

/** the Blog content item filters */
export type BlogWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<BlogWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<BlogWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<BlogWhereInput>>>,
  /** the path of the content item to filter is equal to */
  path?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is not equal to */
  path_not?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is in collection */
  path_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter is not in collection */
  path_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter contains the string */
  path_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not contain the string */
  path_not_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter starts with the string */
  path_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not start with the string */
  path_not_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter ends with the string */
  path_ends_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not end with the string */
  path_not_ends_with?: Maybe<Scalars['String']>,
};

/** Represents a Button. */
export type Button = ContentItem & {
   __typename?: 'Button',
  /** The author of the content item */
  author: Scalars['String'],
  button?: Maybe<ButtonPart>,
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  formElement?: Maybe<FormElementPart>,
  formInputElement?: Maybe<FormInputElementPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type ButtonOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

export type ButtonPart = {
   __typename?: 'ButtonPart',
  text?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** the Button content item filters */
export type ButtonWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ButtonWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ButtonWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ButtonWhereInput>>>,
};

/** Represents a link to the parent content item, and the order that content item is represented. */
export type ContainedPart = {
   __typename?: 'ContainedPart',
  listContentItemId: Scalars['String'],
  order: Scalars['Int'],
};

/** the list part of the content item */
export type ContainedPartInput = {
  /** the content item id of the parent list of the content item to filter is equal to */
  listContentItemId?: Maybe<Scalars['ID']>,
  /** the content item id of the parent list of the content item to filter is not equal to */
  listContentItemId_not?: Maybe<Scalars['ID']>,
  /** the content item id of the parent list of the content item to filter is in collection */
  listContentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item id of the parent list of the content item to filter is not in collection */
  listContentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
};

/** Represents a Container. */
export type Container = ContentItem & {
   __typename?: 'Container',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** A FlowPart allows to add content items directly within another content item */
  flow?: Maybe<FlowPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type ContainerOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Container content item filters */
export type ContainerWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ContainerWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ContainerWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ContainerWhereInput>>>,
};

export type ContentItem = {
  author: Scalars['String'],
  contentItemId: Scalars['String'],
  contentItemVersionId: Scalars['String'],
  contentType: Scalars['String'],
  createdUtc?: Maybe<Scalars['DateTime']>,
  displayText?: Maybe<Scalars['String']>,
  latest: Scalars['Boolean'],
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  owner: Scalars['String'],
  published: Scalars['Boolean'],
  publishedUtc?: Maybe<Scalars['DateTime']>,
};

export type ContentPickerField = {
   __typename?: 'ContentPickerField',
  /** content item ids */
  contentItemIds?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the content items */
  contentItems?: Maybe<Array<Maybe<ContentItem>>>,
};


export type ContentPickerFieldContentItemIdsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type ContentPickerFieldContentItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};





/** The widget alignment. */
export enum FlowAlignment {
  /** Left alignment. */
  Left = 'Left',
  /** Center alignment. */
  Center = 'Center',
  /** Right alignment. */
  Right = 'Right',
  /** Justify alignment. */
  Justify = 'Justify'
}

export type FlowMetadata = {
   __typename?: 'FlowMetadata',
  alignment?: Maybe<FlowAlignment>,
  size?: Maybe<Scalars['Int']>,
};

/** A FlowPart allows to add content items directly within another content item */
export type FlowPart = {
   __typename?: 'FlowPart',
  /** The widgets. */
  widgets?: Maybe<Array<Maybe<ContentItem>>>,
};

/** Represents a Form. */
export type Form = ContentItem & {
   __typename?: 'Form',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** A FlowPart allows to add content items directly within another content item */
  flow?: Maybe<FlowPart>,
  form?: Maybe<FormPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type FormElementPart = {
   __typename?: 'FormElementPart',
  id?: Maybe<Scalars['String']>,
};

export type FormInputElementPart = {
   __typename?: 'FormInputElementPart',
  name?: Maybe<Scalars['String']>,
};

export type FormOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

export type FormPart = {
   __typename?: 'FormPart',
  action?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  workflowTypeId?: Maybe<Scalars['String']>,
};

/** the Form content item filters */
export type FormWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<FormWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<FormWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<FormWhereInput>>>,
};

/** Content stored as HTML. */
export type HtmlBodyPart = {
   __typename?: 'HtmlBodyPart',
  /** the HTML content */
  html?: Maybe<Scalars['String']>,
};

export type Image = {
   __typename?: 'Image',
  /** Text field */
  caption?: Maybe<Scalars['String']>,
  /** MediaField */
  media?: Maybe<MediaField>,
};

export type ImageOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Image content item filters */
export type ImageWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ImageWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ImageWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ImageWhereInput>>>,
};

/** Represents a Image. */
export type ImageWidget = ContentItem & {
   __typename?: 'ImageWidget',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Represents a Image. */
  image?: Maybe<Image>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type ImageWidgetOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the ImageWidget content item filters */
export type ImageWidgetWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ImageWidgetWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ImageWidgetWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ImageWidgetWhereInput>>>,
};

/** Represents a Input. */
export type Input = ContentItem & {
   __typename?: 'Input',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  formElement?: Maybe<FormElementPart>,
  formInputElement?: Maybe<FormInputElementPart>,
  input?: Maybe<InputPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type InputOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

export type InputPart = {
   __typename?: 'InputPart',
  defaultValue?: Maybe<Scalars['String']>,
  placeholder?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** the Input content item filters */
export type InputWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<InputWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<InputWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<InputWhereInput>>>,
};

/** Represents a Label. */
export type Label = ContentItem & {
   __typename?: 'Label',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  formElement?: Maybe<FormElementPart>,
  label?: Maybe<LabelPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type LabelOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

export type LabelPart = {
   __typename?: 'LabelPart',
  for?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['String']>,
};

/** the Label content item filters */
export type LabelWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<LabelWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<LabelWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<LabelWhereInput>>>,
};

export type Layer = {
   __typename?: 'Layer',
  /** The description of the layer. */
  description: Scalars['String'],
  /** The name of the layer. */
  name: Scalars['String'],
  /** The rule that activates the layer. */
  rule: Scalars['String'],
  /** The widgets for this layer. */
  widgets?: Maybe<Array<Maybe<LayerWidget>>>,
};


export type LayerWidgetsArgs = {
  status?: Maybe<Status>
};

export type LayerWidget = {
   __typename?: 'LayerWidget',
  /** The position of the widget in the zone. */
  position?: Maybe<Scalars['Decimal']>,
  /** Whether to render the widget's title. */
  renderTitle?: Maybe<Scalars['Boolean']>,
  /** A widget on this layer. */
  widget?: Maybe<ContentItem>,
  /** The name of the widget's zone. */
  zone?: Maybe<Scalars['String']>,
};

export type LinkField = {
   __typename?: 'LinkField',
  /** the text of the link */
  text?: Maybe<Scalars['String']>,
  /** the url of the link */
  url?: Maybe<Scalars['String']>,
};

/** Represents a Link Menu Item. */
export type LinkMenuItem = ContentItem & MenuItem & {
   __typename?: 'LinkMenuItem',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  linkMenuItem?: Maybe<LinkMenuItemPart>,
  menuItemsList?: Maybe<MenuItemsListPart>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type LinkMenuItemOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

export type LinkMenuItemPart = {
   __typename?: 'LinkMenuItemPart',
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

/** the LinkMenuItem content item filters */
export type LinkMenuItemWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<LinkMenuItemWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<LinkMenuItemWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<LinkMenuItemWhereInput>>>,
};

/** Represents a Liquid Page. */
export type LiquidPage = ContentItem & {
   __typename?: 'LiquidPage',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** The permalinks for your content item. */
  path: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type LiquidPageOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the LiquidPage content item filters */
export type LiquidPageWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<LiquidPageWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<LiquidPageWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<LiquidPageWhereInput>>>,
  /** the path of the content item to filter is equal to */
  path?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is not equal to */
  path_not?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is in collection */
  path_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter is not in collection */
  path_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter contains the string */
  path_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not contain the string */
  path_not_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter starts with the string */
  path_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not start with the string */
  path_not_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter ends with the string */
  path_ends_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not end with the string */
  path_not_ends_with?: Maybe<Scalars['String']>,
};

/** Represents a Liquid. */
export type LiquidWidget = ContentItem & {
   __typename?: 'LiquidWidget',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type LiquidWidgetOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the LiquidWidget content item filters */
export type LiquidWidgetWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<LiquidWidgetWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<LiquidWidgetWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<LiquidWidgetWhereInput>>>,
};

/** Represents a collection of content items. */
export type ListPart = {
   __typename?: 'ListPart',
  /** the content items */
  contentItems?: Maybe<Array<Maybe<ContentItem>>>,
};


/** Represents a collection of content items. */
export type ListPartContentItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

/** Content stored as Markdown. You can also query the HTML interpreted version of Markdown. */
export type MarkdownBodyPart = {
   __typename?: 'MarkdownBodyPart',
  /** the HTML representation of the markdown content */
  html?: Maybe<Scalars['String']>,
  /** the markdown value */
  markdown?: Maybe<Scalars['String']>,
};

/** Content stored as Markdown. You can also query the HTML interpreted version of Markdown. */
export type MarkdownField = {
   __typename?: 'MarkdownField',
  /** the HTML representation of the markdown content */
  html?: Maybe<Scalars['String']>,
  /** the markdown value */
  markdown?: Maybe<Scalars['String']>,
};

export type MediaAsset = {
   __typename?: 'MediaAsset',
  /** The date and time in UTC when the asset was last modified. */
  lastModifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The length of the file. */
  length: Scalars['Int'],
  /** The name of the asset. */
  name: Scalars['String'],
  /** The url to the asset. */
  path?: Maybe<Scalars['String']>,
};

export type MediaField = {
   __typename?: 'MediaField',
  /** the media paths */
  paths?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the absolute urls of the media items */
  urls?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type MediaFieldPathsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};


export type MediaFieldUrlsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>
};

/** Represents a Menu. */
export type Menu = ContentItem & {
   __typename?: 'Menu',
  /** Alternative path for the content item */
  alias?: Maybe<AliasPart>,
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  menuItemsList?: Maybe<MenuItemsListPart>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type MenuItem = {
  menuItemsList?: Maybe<MenuItemsListPart>,
};

export type MenuItemsListPart = {
   __typename?: 'MenuItemsListPart',
  /** The menu items. */
  menuItems?: Maybe<Array<Maybe<MenuItem>>>,
};

export type MenuOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Menu content item filters */
export type MenuWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<MenuWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<MenuWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<MenuWhereInput>>>,
  /** the alias part of the content item */
  alias?: Maybe<AliasPartInput>,
};


/** the order by direction */
export enum OrderByDirection {
  /** orders content items in ascending order */
  Asc = 'ASC',
  /** orders content items in descending order */
  Desc = 'DESC'
}

/** Represents a Page. */
export type Page = ContentItem & {
   __typename?: 'Page',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** A FlowPart allows to add content items directly within another content item */
  flow?: Maybe<FlowPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** The permalinks for your content item. */
  path: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type PageOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Page content item filters */
export type PageWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<PageWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<PageWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<PageWhereInput>>>,
  /** the path of the content item to filter is equal to */
  path?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is not equal to */
  path_not?: Maybe<Scalars['String']>,
  /** the path of the content item to filter is in collection */
  path_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter is not in collection */
  path_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the path of the content item to filter contains the string */
  path_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not contain the string */
  path_not_contains?: Maybe<Scalars['String']>,
  /** the path of the content item to filter starts with the string */
  path_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not start with the string */
  path_not_starts_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter ends with the string */
  path_ends_with?: Maybe<Scalars['String']>,
  /** the path of the content item to filter does not end with the string */
  path_not_ends_with?: Maybe<Scalars['String']>,
};

/** Represents a Paragraph. */
export type Paragraph = ContentItem & {
   __typename?: 'Paragraph',
  /** The author of the content item */
  author: Scalars['String'],
  /** Html field */
  content?: Maybe<Scalars['String']>,
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type ParagraphOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Paragraph content item filters */
export type ParagraphWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ParagraphWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ParagraphWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ParagraphWhereInput>>>,
};

export type Query = {
   __typename?: 'Query',
  /** Represents a Article. */
  article?: Maybe<Array<Maybe<Article>>>,
  /** Represents a Blog. */
  blog?: Maybe<Array<Maybe<Blog>>>,
  /** Represents a Blog Post. */
  blogPost?: Maybe<Array<Maybe<BlogPost>>>,
  /** Content items are instances of content types, just like objects are instances of classes. */
  contentItem?: Maybe<ContentItem>,
  /** Represents a Image. */
  image?: Maybe<Array<Maybe<Image>>>,
  /** Represents a Liquid Page. */
  liquidPage?: Maybe<Array<Maybe<LiquidPage>>>,
  /** Media assets are items that are part of your media library. */
  mediaAssets?: Maybe<Array<Maybe<MediaAsset>>>,
  /** Represents a Menu. */
  menu?: Maybe<Array<Maybe<Menu>>>,
  /** Represents a Page. */
  page?: Maybe<Array<Maybe<Page>>>,
  recentBlogPosts?: Maybe<Array<Maybe<BlogPost>>>,
  searchBlogPosts?: Maybe<Array<Maybe<BlogPost>>>,
  /** Site layers define the rules and zone placement for widgets. */
  siteLayers?: Maybe<Array<Maybe<Layer>>>,
};


export type QueryArticleArgs = {
  where?: Maybe<ArticleWhereInput>,
  orderBy?: Maybe<ArticleOrderByInput>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  status?: Maybe<Status>
};


export type QueryBlogArgs = {
  where?: Maybe<BlogWhereInput>,
  orderBy?: Maybe<BlogOrderByInput>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  status?: Maybe<Status>
};


export type QueryBlogPostArgs = {
  where?: Maybe<BlogPostWhereInput>,
  orderBy?: Maybe<BlogPostOrderByInput>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  status?: Maybe<Status>
};


export type QueryContentItemArgs = {
  contentItemId: Scalars['String']
};


export type QueryImageArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  status?: Maybe<Status>
};


export type QueryLiquidPageArgs = {
  where?: Maybe<LiquidPageWhereInput>,
  orderBy?: Maybe<LiquidPageOrderByInput>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  status?: Maybe<Status>
};


export type QueryMediaAssetsArgs = {
  path?: Maybe<Scalars['String']>,
  includeSubDirectories?: Maybe<Scalars['Boolean']>
};


export type QueryMenuArgs = {
  where?: Maybe<MenuWhereInput>,
  orderBy?: Maybe<MenuOrderByInput>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  status?: Maybe<Status>
};


export type QueryPageArgs = {
  where?: Maybe<PageWhereInput>,
  orderBy?: Maybe<PageOrderByInput>,
  first?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  status?: Maybe<Status>
};


export type QueryRecentBlogPostsArgs = {
  parameters?: Maybe<Scalars['String']>
};


export type QuerySearchBlogPostsArgs = {
  parameters?: Maybe<Scalars['String']>
};

/** Represents a Raw Html. */
export type RawHtml = ContentItem & {
   __typename?: 'RawHtml',
  /** The author of the content item */
  author: Scalars['String'],
  /** Html field */
  content?: Maybe<Scalars['String']>,
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type RawHtmlOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the RawHtml content item filters */
export type RawHtmlWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<RawHtmlWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<RawHtmlWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<RawHtmlWhereInput>>>,
};


/** Represents a Select. */
export type Select = ContentItem & {
   __typename?: 'Select',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  formElement?: Maybe<FormElementPart>,
  formInputElement?: Maybe<FormInputElementPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type SelectOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the Select content item filters */
export type SelectWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<SelectWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<SelectWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<SelectWhereInput>>>,
};

/** publication status */
export enum Status {
  /** published content item version */
  Published = 'PUBLISHED',
  /** draft content item version */
  Draft = 'DRAFT',
  /** the latest version, either published or draft */
  Latest = 'LATEST',
  /** all historical versions */
  All = 'ALL'
}

/** Represents a Text Area. */
export type TextArea = ContentItem & {
   __typename?: 'TextArea',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  formElement?: Maybe<FormElementPart>,
  formInputElement?: Maybe<FormInputElementPart>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
  textArea?: Maybe<TextAreaPart>,
};

export type TextAreaOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

export type TextAreaPart = {
   __typename?: 'TextAreaPart',
  defaultValue?: Maybe<Scalars['String']>,
  placeholder?: Maybe<Scalars['String']>,
};

/** the TextArea content item filters */
export type TextAreaWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<TextAreaWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<TextAreaWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<TextAreaWhereInput>>>,
};

/** Represents a Validation. */
export type Validation = ContentItem & {
   __typename?: 'Validation',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
  validation?: Maybe<ValidationPart>,
};

export type ValidationOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

export type ValidationPart = {
   __typename?: 'ValidationPart',
  for?: Maybe<Scalars['String']>,
};

/** Represents a Validation Summary. */
export type ValidationSummary = ContentItem & {
   __typename?: 'ValidationSummary',
  /** The author of the content item */
  author: Scalars['String'],
  /** Content item id */
  contentItemId: Scalars['String'],
  /** The content item version id */
  contentItemVersionId: Scalars['String'],
  /** Type of content */
  contentType: Scalars['String'],
  /** The date and time of creation */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** The display text of the content item */
  displayText?: Maybe<Scalars['String']>,
  /** Is the latest version */
  latest: Scalars['Boolean'],
  metadata?: Maybe<FlowMetadata>,
  /** The date and time of modification */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** The owner of the content item */
  owner: Scalars['String'],
  /** Is the published version */
  published: Scalars['Boolean'],
  /** The date and time of publication */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  render?: Maybe<Scalars['String']>,
};

export type ValidationSummaryOrderByInput = {
  contentItemId?: Maybe<OrderByDirection>,
  contentItemVersionId?: Maybe<OrderByDirection>,
  contentType?: Maybe<OrderByDirection>,
  displayText?: Maybe<OrderByDirection>,
  published?: Maybe<OrderByDirection>,
  latest?: Maybe<OrderByDirection>,
  createdUtc?: Maybe<OrderByDirection>,
  modifiedUtc?: Maybe<OrderByDirection>,
  publishedUtc?: Maybe<OrderByDirection>,
  owner?: Maybe<OrderByDirection>,
  author?: Maybe<OrderByDirection>,
};

/** the ValidationSummary content item filters */
export type ValidationSummaryWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ValidationSummaryWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ValidationSummaryWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ValidationSummaryWhereInput>>>,
};

/** the Validation content item filters */
export type ValidationWhereInput = {
  /** content item id is equal to */
  contentItemId?: Maybe<Scalars['ID']>,
  /** content item id is not equal to */
  contentItemId_not?: Maybe<Scalars['ID']>,
  /** content item id is in collection */
  contentItemId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** content item id is not in collection */
  contentItemId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is equal to */
  contentItemVersionId?: Maybe<Scalars['ID']>,
  /** the content item version id is not equal to */
  contentItemVersionId_not?: Maybe<Scalars['ID']>,
  /** the content item version id is in collection */
  contentItemVersionId_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the content item version id is not in collection */
  contentItemVersionId_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>,
  /** the display text of the content item is equal to */
  displayText?: Maybe<Scalars['String']>,
  /** the display text of the content item is not equal to */
  displayText_not?: Maybe<Scalars['String']>,
  /** the display text of the content item is in collection */
  displayText_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item is not in collection */
  displayText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the display text of the content item contains the string */
  displayText_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item does not contain the string */
  displayText_not_contains?: Maybe<Scalars['String']>,
  /** the display text of the content item starts with the string */
  displayText_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not start with the string */
  displayText_not_starts_with?: Maybe<Scalars['String']>,
  /** the display text of the content item ends with the string */
  displayText_ends_with?: Maybe<Scalars['String']>,
  /** the display text of the content item does not end with the string */
  displayText_not_ends_with?: Maybe<Scalars['String']>,
  /** the date and time of creation is equal to */
  createdUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is not equal to */
  createdUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is in collection */
  createdUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is not in collection */
  createdUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of creation is greater than */
  createdUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is greater than or equal */
  createdUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than */
  createdUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of creation is less than or equal */
  createdUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is equal to */
  modifiedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is not equal to */
  modifiedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is in collection */
  modifiedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is not in collection */
  modifiedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of modification is greater than */
  modifiedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is greater than or equal */
  modifiedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than */
  modifiedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of modification is less than or equal */
  modifiedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is equal to */
  publishedUtc?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is not equal to */
  publishedUtc_not?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is in collection */
  publishedUtc_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is not in collection */
  publishedUtc_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>,
  /** the date and time of publication is greater than */
  publishedUtc_gt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is greater than or equal */
  publishedUtc_gte?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than */
  publishedUtc_lt?: Maybe<Scalars['DateTime']>,
  /** the date and time of publication is less than or equal */
  publishedUtc_lte?: Maybe<Scalars['DateTime']>,
  /** the owner of the content item is equal to */
  owner?: Maybe<Scalars['String']>,
  /** the owner of the content item is not equal to */
  owner_not?: Maybe<Scalars['String']>,
  /** the owner of the content item is in collection */
  owner_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item is not in collection */
  owner_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the owner of the content item contains the string */
  owner_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item does not contain the string */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** the owner of the content item starts with the string */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not start with the string */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** the owner of the content item ends with the string */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** the owner of the content item does not end with the string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item is equal to */
  author?: Maybe<Scalars['String']>,
  /** the author of the content item is not equal to */
  author_not?: Maybe<Scalars['String']>,
  /** the author of the content item is in collection */
  author_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item is not in collection */
  author_not_in?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** the author of the content item contains the string */
  author_contains?: Maybe<Scalars['String']>,
  /** the author of the content item does not contain the string */
  author_not_contains?: Maybe<Scalars['String']>,
  /** the author of the content item starts with the string */
  author_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not start with the string */
  author_not_starts_with?: Maybe<Scalars['String']>,
  /** the author of the content item ends with the string */
  author_ends_with?: Maybe<Scalars['String']>,
  /** the author of the content item does not end with the string */
  author_not_ends_with?: Maybe<Scalars['String']>,
  /** OR logical operation */
  OR?: Maybe<Array<Maybe<ValidationWhereInput>>>,
  /** AND logical operation */
  AND?: Maybe<Array<Maybe<ValidationWhereInput>>>,
  /** NOT logical operation */
  NOT?: Maybe<Array<Maybe<ValidationWhereInput>>>,
};

export type BlogPostsQueryVariables = {};


export type BlogPostsQuery = (
  { __typename?: 'Query' }
  & { blogPost: Maybe<Array<Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'path' | 'subtitle' | 'displayText' | 'owner' | 'publishedUtc'>
    & { markdownBody: Maybe<(
      { __typename?: 'MarkdownBodyPart' }
      & Pick<MarkdownBodyPart, 'markdown'>
    )>, image: Maybe<(
      { __typename?: 'MediaField' }
      & Pick<MediaField, 'urls'>
    )> }
  )>>> }
);

export type CurrentBlogQueryVariables = {
  urlPath?: Maybe<Scalars['String']>
};


export type CurrentBlogQuery = (
  { __typename?: 'Query' }
  & { blogPost: Maybe<Array<Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'path' | 'subtitle' | 'displayText' | 'owner' | 'publishedUtc'>
    & { image: Maybe<(
      { __typename?: 'MediaField' }
      & Pick<MediaField, 'urls'>
    )>, markdownBody: Maybe<(
      { __typename?: 'MarkdownBodyPart' }
      & Pick<MarkdownBodyPart, 'markdown'>
    )> }
  )>>> }
);

export type SearchQueryQueryVariables = {
  parameters?: Maybe<Scalars['String']>
};


export type SearchQueryQuery = (
  { __typename?: 'Query' }
  & { searchBlogPosts: Maybe<Array<Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'subtitle' | 'displayText' | 'path'>
    & { image: Maybe<(
      { __typename?: 'MediaField' }
      & Pick<MediaField, 'urls'>
    )> }
  )>>> }
);

export const BlogPostsDocument = gql`
    query BlogPosts {
  blogPost {
    path
    subtitle
    displayText
    owner
    publishedUtc
    markdownBody {
      markdown
    }
    image {
      urls
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BlogPostsGQL extends Apollo.Query<BlogPostsQuery, BlogPostsQueryVariables> {
    document = BlogPostsDocument;
    
  }
export const CurrentBlogDocument = gql`
    query currentBlog($urlPath: String) {
  blogPost(where: {path: $urlPath}) {
    path
    subtitle
    displayText
    owner
    publishedUtc
    image {
      urls
    }
    markdownBody {
      markdown
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CurrentBlogGQL extends Apollo.Query<CurrentBlogQuery, CurrentBlogQueryVariables> {
    document = CurrentBlogDocument;
    
  }
export const SearchQueryDocument = gql`
    query searchQuery($parameters: String) {
  searchBlogPosts(parameters: $parameters) {
    subtitle
    displayText
    path
    image {
      urls
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchQueryGQL extends Apollo.Query<SearchQueryQuery, SearchQueryQueryVariables> {
    document = SearchQueryDocument;
    
  }