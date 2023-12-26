import { request, gql } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

const graphqlAPI =
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT === undefined
    ? ""
    : process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const GET = async (_request: NextRequest, { params }: any) => {
  const blogId = params.blogId;
  try {
    const query = gql`
      query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
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
          content {
            raw
          }
        }
      }
    `;
    const result: any = await request(graphqlAPI, query, {
      slug: blogId,
    });
    return NextResponse.json({
      data: result.post,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 400,
      }
    );
  }
};
