/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onCreateApplication(filter: $filter) {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onUpdateApplication(filter: $filter) {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication(
    $filter: ModelSubscriptionApplicationFilterInput
  ) {
    onDeleteApplication(filter: $filter) {
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
export const onCreateTile = /* GraphQL */ `
  subscription OnCreateTile($filter: ModelSubscriptionTileFilterInput) {
    onCreateTile(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTile = /* GraphQL */ `
  subscription OnUpdateTile($filter: ModelSubscriptionTileFilterInput) {
    onUpdateTile(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTile = /* GraphQL */ `
  subscription OnDeleteTile($filter: ModelSubscriptionTileFilterInput) {
    onDeleteTile(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
