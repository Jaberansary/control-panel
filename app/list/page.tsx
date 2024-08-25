"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Menu from "../components/Menu";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function ListPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <main className="flex">
      <Menu />
      <div className="flex-1 p-4">
        <h2>Posts</h2>
        <ul>
          {data?.map((post) => (
            <li key={post.id} className="mb-2">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
