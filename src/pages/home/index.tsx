import { useEffect, useState } from "react";
import { useGetPostsQuery } from "../../shared/api/getPosts";
import { Post } from "../../entities/post/model/post";

const HomePage = () => {
  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetPostsQuery(page);
  const posts = data ?? [];
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };
    document.addEventListener("scroll", onScroll);
    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id} className="rounded border-black border-2">
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
