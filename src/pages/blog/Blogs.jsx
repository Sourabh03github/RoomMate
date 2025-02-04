import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { PortableText } from "@portabletext/react";

import { useParams } from "react-router-dom";
import { RichTextComponent } from "../../Components/RichTextComponent";

const BlogPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

    client.fetch(query).then((data) => {
      setPost(data);
    });
  }, []);
  return (
    <>
      <div>
        <div className=" py-6 md:py-10 px-6">
          <div className="mx-auto max-w-4xl">
            <div className="">
              <h1 className="pt-5 text-xl md:text-4xl font-extrabold text-gray-900 m-auto">
                {post.title}
              </h1>

              <br />
              <span className="block pt-1 font-body text-xl  text-grey-30">
                {new Date(post.publishedAt).toDateString()}
              </span>
            </div>
            {/* <img
              className="bg-no-repeat bg-cover  col-span-full lg:col-span-4"
              src={urlFor(post.mainImage).url()}
              alt={post.title}
            /> */}
            <div className="prose max-w-none pt-8">
              <PortableText
                // Pass in block content straight from Sanity.io
                value={post.body}
                components={RichTextComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
