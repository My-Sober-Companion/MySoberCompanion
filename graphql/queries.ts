/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCheckin = /* GraphQL */ `
  query GetCheckin($id: ID!) {
    getCheckin(id: $id) {
      id
      time
      location
      createdAt
      updatedAt
    }
  }
`;
export const listCheckins = /* GraphQL */ `
  query ListCheckins(
    $filter: ModelCheckinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheckins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
