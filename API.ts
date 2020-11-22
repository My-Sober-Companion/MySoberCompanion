/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCheckinInput = {
  id?: string | null,
  userid: string,
  location: string,
  checkinTime: string,
};

export type ModelCheckinConditionInput = {
  userid?: ModelIDInput | null,
  location?: ModelStringInput | null,
  checkinTime?: ModelStringInput | null,
  and?: Array< ModelCheckinConditionInput | null > | null,
  or?: Array< ModelCheckinConditionInput | null > | null,
  not?: ModelCheckinConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCheckinInput = {
  userid?: string | null,
  location?: string | null,
  checkinTime?: string | null,
};

export type DeleteCheckinInput = {
  id?: string | null,
};

export type ModelCheckinFilterInput = {
  userid?: ModelIDInput | null,
  location?: ModelStringInput | null,
  checkinTime?: ModelStringInput | null,
  and?: Array< ModelCheckinFilterInput | null > | null,
  or?: Array< ModelCheckinFilterInput | null > | null,
  not?: ModelCheckinFilterInput | null,
};

export type CreateCheckinMutationVariables = {
  input: CreateCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type CreateCheckinMutation = {
  createCheckin:  {
    __typename: "Checkin",
    id: string,
    userid: string,
    location: string,
    checkinTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCheckinMutationVariables = {
  input: UpdateCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type UpdateCheckinMutation = {
  updateCheckin:  {
    __typename: "Checkin",
    id: string,
    userid: string,
    location: string,
    checkinTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCheckinMutationVariables = {
  input: DeleteCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type DeleteCheckinMutation = {
  deleteCheckin:  {
    __typename: "Checkin",
    id: string,
    userid: string,
    location: string,
    checkinTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCheckinQueryVariables = {
  id: string,
};

export type GetCheckinQuery = {
  getCheckin:  {
    __typename: "Checkin",
    id: string,
    userid: string,
    location: string,
    checkinTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCheckinsQueryVariables = {
  filter?: ModelCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCheckinsQuery = {
  listCheckins:  {
    __typename: "ModelCheckinConnection",
    items:  Array< {
      __typename: "Checkin",
      id: string,
      userid: string,
      location: string,
      checkinTime: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCheckinSubscription = {
  onCreateCheckin:  {
    __typename: "Checkin",
    id: string,
    userid: string,
    location: string,
    checkinTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCheckinSubscription = {
  onUpdateCheckin:  {
    __typename: "Checkin",
    id: string,
    userid: string,
    location: string,
    checkinTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCheckinSubscription = {
  onDeleteCheckin:  {
    __typename: "Checkin",
    id: string,
    userid: string,
    location: string,
    checkinTime: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
