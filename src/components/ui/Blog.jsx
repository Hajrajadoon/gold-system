import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Replace with your backend API
    axios.get("/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded mt-6">
      <h2 className="text-xl font-bold mb-2">Latest Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-4">
          <h3 className="font-semibold">{blog.title}</h3>
          <p className="text-sm text-gray-600">{blog.date}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
