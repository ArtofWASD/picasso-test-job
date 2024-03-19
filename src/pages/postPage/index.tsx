import { useNavigate, useParams } from "react-router-dom"
import { useGetPostByidQuery } from "../../shared/api/getPosts"
import Button from "../../shared/ui/button/button"

const PostPage = () => {
  const { postId } = useParams()
  const { data } = useGetPostByidQuery(postId)
  const nav = useNavigate()
  return (
    <section className="postPage flex flex-col items-center  gap-2 p-4 justify-center">
      {data && (
        <>
          <p className="postPage__title font-medium">{data?.title}</p>
          <div className="postPage__body flex gap-2 items-center">
            <p>{data?.body}</p>
            <span>
              <Button
                onClick={() => {
                  nav(-1)
                }}>
                "Назад"
              </Button>
            </span>
          </div>
        </>
      )}
    </section>
  )
}

export default PostPage
