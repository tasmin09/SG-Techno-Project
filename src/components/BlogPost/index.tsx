import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

function BlogPost(props: { post: any }) {
  const { post } = props;

  return (
    <section className={styles.blogPostContainer}>
      <figure>
        <Image
          src={post?.featuredImage?.url || ""}
          alt="featured"
          width="600"
          height="500"
        />
      </figure>

      <div className={styles.detailsContainer}>
        <div className={styles.authorDetails}>
          <figure>
            <Image
              src={post?.featuredImage?.url || "https://picsum.photos/200"}
              alt="featured"
              width={80}
              height={80}
            />
          </figure>
          <p>{post?.author?.name || ""}</p>
        </div>

        <article>
          <h2>{post?.title || ""}</h2>
          {post?.content?.raw?.children?.length ? (
            post?.content?.raw?.children?.map((item: any, index: number) => (
              <p key={index}>{item?.children[0]?.text || ""}</p>
            ))
          ) : (
            <p>{post?.excerpt || ""}</p>
          )}
        </article>
      </div>
    </section>
  );
}

export default BlogPost;
