import React from "react";
import PostCard from "../PostCard";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

function Blog(props: { posts: any[] }) {
  const { posts } = props;

  return (
    <>
      <section className={styles.blogsContainer}>
        <article className={styles.headingSection}>
          <span className={styles.the_blog}>The blog</span>
          <p>
            Writings <br />
            <b>from our team</b>
          </p>
          <span className={styles.gradientLine}></span>
          <p className={styles.sub}>
            The latest industry news, interviews, technologies, and resources.
          </p>
        </article>

        <div className={styles.latestPost}>
          <figure>
            <Image
              alt={posts[0]["node"]?.title || "image"}
              src={posts[0]["node"]?.featuredImage?.url || ""}
              height={500}
              width={320}
            />
          </figure>
          <article>
            <Link href={`/blogs/${posts[0]["node"]?.slug}`}>
              <h4 className={styles.title} style={{ textDecoration: "none" }}>
                {posts[0]["node"]?.title || ""}
              </h4>
            </Link>
            <p className={styles.excerpt}>
              {posts[0]["node"]?.excerpt || ""}
              <Link href={`/blogs/${posts[0]["node"]?.slug}`}>
                {" "}
                ...Read More
              </Link>
            </p>
          </article>{" "}
        </div>

        <div className={styles.postsContainer}>
          {posts.length > 1
            ? posts?.slice(1)?.map((post: any, index: number) => {
                return (
                  <div key={post?.node?.title}>
                    <PostCard post={post?.node} key={post?.node?.title} />
                  </div>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
}

export default Blog;
