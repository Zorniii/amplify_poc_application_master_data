/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createApplication = /* GraphQL */ `
  mutation CreateApplication(
    $input: CreateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    createApplication(input: $input, condition: $condition) {
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
export const updateApplication = /* GraphQL */ `
  mutation UpdateApplication(
    $input: UpdateApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    updateApplication(input: $input, condition: $condition) {
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
export const deleteApplication = /* GraphQL */ `
  mutation DeleteApplication(
    $input: DeleteApplicationInput!
    $condition: ModelApplicationConditionInput
  ) {
    deleteApplication(input: $input, condition: $condition) {
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
export const createTile = /* GraphQL */ `
  mutation CreateTile(
    $input: CreateTileInput!
    $condition: ModelTileConditionInput
  ) {
    createTile(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTile = /* GraphQL */ `
  mutation UpdateTile(
    $input: UpdateTileInput!
    $condition: ModelTileConditionInput
  ) {
    updateTile(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTile = /* GraphQL */ `
  mutation DeleteTile(
    $input: DeleteTileInput!
    $condition: ModelTileConditionInput
  ) {
    deleteTile(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
