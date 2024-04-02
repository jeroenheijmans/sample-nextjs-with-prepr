import { type NextRequest } from "next/server";

import { GetSearchResults } from "@/queries/get-search-results";
import getClient from "@/services/apollo-client";

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const { data } = await getClient().query({
    query: GetSearchResults,
    variables: { query },
  });
  return Response.json(data.ContentItems);
}
