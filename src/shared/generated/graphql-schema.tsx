import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Academy = {
  __typename?: 'Academy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
};

export type AcademyCreateInput = {
  name: Scalars['String'];
  owner: UserCreateNestedOneWithoutAcademyInput;
};

export type AcademyWhereUniqueInput = {
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type Knowledge = {
  __typename?: 'Knowledge';
  academyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type KnowledgeCreateInput = {
  academyId?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  title: Scalars['String'];
};

export type KnowledgeWhereUniqueInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  title?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['Float']>;
};

export enum Language {
  English = 'ENGLISH',
  Spanish = 'SPANISH'
}

export type LoginOutput = {
  __typename?: 'LoginOutput';
  access_token: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAcademy: Academy;
  createKnowledge: Knowledge;
  createReview: Review;
  createTicket: Ticket;
  createUser: User;
  login: LoginOutput;
  signup: User;
};


export type MutationCreateAcademyArgs = {
  data: AcademyCreateInput;
};


export type MutationCreateKnowledgeArgs = {
  data: KnowledgeCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateTicketArgs = {
  data: TicketCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationSignupArgs = {
  data: SignUpInput;
};

export type Query = {
  __typename?: 'Query';
  academy: Academy;
  knowledge: Knowledge;
  review: Review;
  ticket: Ticket;
  user: User;
};


export type QueryAcademyArgs = {
  where: AcademyWhereUniqueInput;
};


export type QueryKnowledgeArgs = {
  where: KnowledgeWhereUniqueInput;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryTicketArgs = {
  where: TicketWhereUniqueInput;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  owner?: Maybe<User>;
  ticket?: Maybe<Ticket>;
  ticketId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
};

export type ReviewCreateInput = {
  comment: Scalars['String'];
  ticketId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type ReviewWhereUniqueInput = {
  comment?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  uuid: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  owner?: Maybe<User>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
};

export type TicketCreateInput = {
  description: Scalars['String'];
  knowledgeId: Scalars['Float'];
  title: Scalars['String'];
  userId: Scalars['Float'];
};

export type TicketWhereUniqueInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  title?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  language?: Maybe<Language>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type UserCreateNestedOneWithoutAcademyInput = {
  connect: UserWhereUniqueInput;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null } };


export const UserDocument = gql`
    query user {
  user {
    id
    uuid
    email
    firstName
    lastName
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;