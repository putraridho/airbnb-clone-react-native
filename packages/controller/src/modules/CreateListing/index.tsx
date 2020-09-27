import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import gql from "graphql-tag";
import { useEffect, useState } from "react";

import {
  CreateListingMutation,
  CreateListingMutationVariables,
} from "../../schemaTypes";

export const CREATE_LISTING_MUTATION = gql`
  mutation CreateListingMutation(
    $name: String!
    $category: String!
    $description: String!
    $price: Int!
    $beds: Int!
    $guests: Int!
    $latitude: Float!
    $longitude: Float!
    $amenities: [String!]!
  ) {
    createListing(
      input: {
        name: $name
        category: $category
        description: $description
        price: $price
        beds: $beds
        guests: $guests
        latitude: $latitude
        longitude: $longitude
        amenities: $amenities
      }
    )
  }
`;
