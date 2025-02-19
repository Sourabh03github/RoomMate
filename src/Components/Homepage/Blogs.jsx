import React, { useState, useEffect } from "react";
import { urlFor, client } from "./../../client";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "post"] | order(_createdAt desc)[0..1]';

    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-[#102a42] text-3xl font-semibold sm:text-4xl">
            Read some of our Latest Blogs.
          </p>
          <p>
            Read our latest blog posts for informative articles on mattresses,
            pillows, bedding accessories and many more...
          </p>
        </div>
        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {posts.map((item, index) => (
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                  <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Blog Post
                </span>
                <span className="text-sm">
                  {new Date(item.publishedAt).toDateString()}
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                <Link to={`/blogs/${item.slug.current}`}>{item.title}</Link>
              </h2>
              <p className="mb-5 font-light text-gray-500 ">{item.metaData}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="font-medium ">Roommates mattresses</span>
                </div>
                <Link
                  to={`/blogs/${item.slug.current}`}
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600  hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
