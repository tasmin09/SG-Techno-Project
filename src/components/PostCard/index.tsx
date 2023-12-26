import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const PostCard = (props: { post: any; width?: string }) => {
  const { post } = props;
  return (
    <div className={styles.postCard}>
      <figure>
        <Image
          alt={post?.title || "image"}
          src={post?.featuredImage?.url || ""}
          height={350}
          width={350}
        />
      </figure>
      <article>
        {" "}
        <Link href={`/blogs/${post.slug}`}>
          <h4 className={styles.title} style={{ textDecoration: "none" }}>
            {post?.title || ""}
          </h4>
        </Link>
        <p className={styles.excerpt}>
          {post?.excerpt || ""}
          <Link href={`/blogs/${post.slug}`}> ...Read More</Link>
        </p>
      </article>
    </div>
  );
};

export default PostCard;
