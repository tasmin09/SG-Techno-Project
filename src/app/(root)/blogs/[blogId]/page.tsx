import React from "react";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const getBlogById = async (blogId: string) => {
  try {
    const posts = await fetch(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/blogs/${blogId}`,
      {
        next: { revalidate: 0 },
      }
    );
    const data = await posts.json();

    return data;
  } catch (error) {
    return new Error("Something went wrong");
  }
};

async function blogSlugPage(props: { params: { blogId: string } }) {
  const {
    params: { blogId },
  } = props;

  let blogData = await getBlogById(blogId);

  if (blogData instanceof Error) {
    return notFound();
  }

  return <BlogPost post={blogData?.data} />;
}

export default blogSlugPage;
