import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query ($itemPageInput: paginateItemsInput!) {
    paginateItems(itemPageInput: $itemPageInput) {
      cursor
      data {
        id
        merchantId
        name
        shopifyId
        description
        currency
        imageUrl
        itemVariants {
          id
          sku
          name
          shopifyId
          merchantSku
          merchantId
          itemId
          isEnabled
          imageUrl
          price
          weight
          createdAt
          lastModified
          deletedAt
        }
        createdAt
        lastModified
      }
    }
  }
`;
