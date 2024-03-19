import { useNavigate, useParams } from "react-router-dom"
import { useGetPostByidQuery } from "../../shared/api/getPosts"
import Button from "../../shared/ui/button/button"

const PostPage = () => {
  const { postId } = useParams()
  const { data } = useGetPostByidQuery(postId)
  const nav = useNavigate()
  console.log(postId)

  return (
    <section className="flex flex-col items-center  gap-2 p-4 justify-center">
      {data && (
        <>
          <p className="font-medium">{data?.title}</p>
          <div className="flex gap-2 items-center">
            <p>{data?.body}</p>
            <span>
              <Button
                onClick={() => {
                  nav("/")
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
