import { useEffect, useState } from "react"
import { useGetPostsQuery } from "../../shared/api/getPosts"
import { IPost } from "../../entities/post/model/post"
import PostPreview from "../../shared/ui/postPreview/postPreview"

const HomePage = () => {
  const [page, setPage] = useState(0)
  const { data, isFetching } = useGetPostsQuery(page)
  const posts = data ?? []

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1)
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [page, isFetching])

  return (
    <>
      <div id="posts" className="posts grid gap-4 my-4  justify-items-start justify-center">
        {posts.map((post: IPost, index:number) => (
          <PostPreview post={post} key={index} />
        ))}
      </div>
    </>
  )
}

export default HomePage
