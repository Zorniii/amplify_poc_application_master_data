/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      id
      name
      description
      bcal
      applicationSurveyFile
      applicationSurveyCompletionDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listApplications = /* GraphQL */ `
  query ListApplications(
    $filter: ModelApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        bcal
        applicationSurveyFile
        applicationSurveyCompletionDate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTile = /* GraphQL */ `
  query GetTile($id: ID!) {
    getTile(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTiles = /* GraphQL */ `
  query ListTiles(
    $filter: ModelTileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
