import React from "react";

const blogs = [
  {
    title: "Blockchain in Gold Trading",
    date: "2025-11-11",
    summary: "Learn how blockchain secures gold trading with transparency and real-time tracking."
  },
  {
    title: "NFTs Backed by Gold",
    date: "2025-11-10",
    summary: "NFTs can now represent real gold ownership on the blockchain."
  },
  {
    title: "Investing in Gold via Crypto",
    date: "2025-11-09",
    summary: "How crypto investors are entering the gold market securely."
  }
];

export default function Blog() {
  return (
    <div className="bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4">Latest Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className="border-b pb-2">
            <h3 className="text-xl font-bold">{blog.title}</h3>
            <p className="text-gray-500 text-sm">{blog.date}</p>
            <p>{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
