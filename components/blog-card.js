import React from "react";
import Link from "@/components/link";
import Image from "next/image";

const BlogCard = ({ data }) => {
  const imageUrl = data?.fields?.image?.fields?.file?.url;
  const title = data?.fields?.title?.content[0]?.content[0]?.value;
  const desc = data?.fields?.descText?.content[0]?.content[0].value;
  const date = data?.fields?.date;
  const author = data?.fields?.author?.content[0]?.content[0].value;
  const url = "https:" + imageUrl;
  const sysId = data?.sys?.id;
  const xyx = `https:${imageUrl}`;

  return (
    <div className="blog_share_box">
      <div className="bl_share_img">
        <Image
          loader={() => xyx}
          src={
            xyx
              ? xyx
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png"
          }
          alt={title}
          width={60}
          height={60}
          layout="responsive"
        />
        <span className="blog_date">{date}</span>
      </div>
      <div className="blog_share_details">
        <Link
          href={`/blogExplanation/${sysId}`}
          as={`/blogExplanation/${sysId}`}
        >
          <span className="comment_author">
            by {author} - {"3"} Comments
          </span>
          <h1>{title}</h1>
        </Link>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
