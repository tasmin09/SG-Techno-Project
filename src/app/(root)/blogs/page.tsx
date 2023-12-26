import React from "react";
import Blog from "@/components/Blog";

const blogData = [
  {
    node: {
      author: {
        bio: "Test user1",
        name: "Adit Shrivastava",
        id: "clkw0jpue0by80bo5zsnt9bge",
      },
      categories: [{ name: "Category2", slug: "catergory2" }],
      createdAt: "2023-08-13T15:27:35.837478+00:00",
      excerpt:
        "Mobile technology and smart devices are here to stay. We can all vouch for it, canâ€™t we? It is a fact that we cannot imagine our lives without them. We use mobile devices for almost everything today â€“ from buying groceries to watching movies. Mobile app testing has become the need of the hour. Letâ€™s see how it is done",
      featuredImage: {
        url: "https://media.graphassets.com/n2Nx8ETSnS9IiX5DyFOw",
      },
      slug: "guideto4",
      title:
        "Here is a complete guide to testing mobile applications with our 30+ in-depth mobile app testing tutorials:",
    },
  },
  {
    node: {
      author: {
        bio: "Test user1",
        name: "Adit Shrivastava",
        id: "clkw0jpue0by80bo5zsnt9bge",
      },
      categories: [{ name: "Category2", slug: "catergory2" }],
      createdAt: "2023-08-13T15:27:35.837478+00:00",
      excerpt:
        "Mobile technology and smart devices are here to stay. We can all vouch for it, canâ€™t we? It is a fact that we cannot imagine our lives without them. We use mobile devices for almost everything today â€“ from buying groceries to watching movies. Mobile app testing has become the need of the hour. Letâ€™s see how it is done",
      featuredImage: {
        url: "https://media.graphassets.com/n2Nx8ETSnS9IiX5DyFOw",
      },
      slug: "guideto4",
      title:
        "Here is a complete guide to testing mobile applications with our 30+ in-depth mobile app testing tutorials:",
    },
  },
  {
    node: {
      author: {
        bio: "Test user1",
        name: "Adit Shrivastava",
        id: "clkw0jpue0by80bo5zsnt9bge",
      },
      categories: [{ name: "Category2", slug: "catergory2" }],
      createdAt: "2023-08-13T15:27:35.837478+00:00",
      excerpt:
        "Mobile technology and smart devices are here to stay. We can all vouch for it, canâ€™t we? It is a fact that we cannot imagine our lives without them. We use mobile devices for almost everything today â€“ from buying groceries to watching movies. Mobile app testing has become the need of the hour. Letâ€™s see how it is done",
      featuredImage: {
        url: "https://media.graphassets.com/n2Nx8ETSnS9IiX5DyFOw",
      },
      slug: "guideto4",
      title:
        "Here is a complete guide to testing mobile applications with our 30+ in-depth mobile app testing tutorials:",
    },
  },
  {
    node: {
      author: {
        bio: "Test user1",
        name: "Adit Shrivastava",
        id: "clkw0jpue0by80bo5zsnt9bge",
      },
      categories: [{ name: "Category2", slug: "catergory2" }],
      createdAt: "2023-08-13T15:27:35.837478+00:00",
      excerpt:
        "Mobile technology and smart devices are here to stay. We can all vouch for it, canâ€™t we? It is a fact that we cannot imagine our lives without them. We use mobile devices for almost everything today â€“ from buying groceries to watching movies. Mobile app testing has become the need of the hour. Letâ€™s see how it is done",
      featuredImage: {
        url: "https://media.graphassets.com/n2Nx8ETSnS9IiX5DyFOw",
      },
      slug: "guideto4",
      title:
        "Here is a complete guide to testing mobile applications with our 30+ in-depth mobile app testing tutorials:",
    },
  },
];

const getBlogs = async () => {
  try {
    const posts = await fetch(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/blogs`,
      {
        next: { revalidate: 0 },
      }
    );
    const data = await posts.json();
    return {
      ...data,
      message: "Data successfully fetched",
    };
  } catch (error) {
    return new Error("Failed to fetch data");
  }
};

const blogPage = async () => {
  let posts = await getBlogs();

  posts = posts && posts?.data?.length ? posts.data : blogData;

  return <Blog posts={posts} />;
};

export default blogPage;
