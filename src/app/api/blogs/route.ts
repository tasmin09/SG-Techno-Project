import { request, gql } from "graphql-request";
import { NextResponse } from "next/server";

const graphqlAPI =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT === undefined
    ? ""
    : process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const GET = async () => {
  try {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
    const result: any = await request(graphqlAPI, query);
    return NextResponse.json({
      data: result.postsConnection.edges,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 400,
      }
    );
  }
};
