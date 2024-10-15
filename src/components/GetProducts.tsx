import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";
function GetProducts() {
  interface PaginateItemsInput {
    isAsc: boolean;
    limit: number;
    afterCursor?: string | null;
    beforeCursor?: string | null;
    merchantId?: number | null;
    name?: string | null;
    sku?: string | null;
  }

  const itemPageInput: PaginateItemsInput = {
    isAsc: true,
    limit: 42,
    afterCursor: null,
    beforeCursor: null,
    merchantId: 42,
    name: null,
    sku: null,
  };

  const { error, loading, data } = useQuery(LOAD_PRODUCTS, {
    variables: { itemPageInput },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>GetProducts</div>;
}

export default GetProducts;
