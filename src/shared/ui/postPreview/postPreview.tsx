import { FC } from "react"
import { PostProps } from "../../../entities/post/model/post"
import Button from "../button/button"
import { useNavigate } from "react-router-dom"

const PostPreview: FC<PostProps> = ({ post }) => {
  const navigate = useNavigate()
  return (
    <section
      className="post grid grid-flow-col gap-2 justify-self-start justify-center items-center"
      key={post.id}>
      <span className="post__number font-medium">{post.id}.</span>
      <p className="post__title font-medium">{post.title} |</p>
      <div className="flex items-center gap-2">
        <p className="post__body">
          {post.body.length > 80 ? post.body.slice(0, 80) + "..." : post.body}
        </p>
        {post.body.length > 80 ? (
          <>
            <Button
              onClick={() => {
                navigate(`/${post.id}`)
              }}>
              Подробно
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}

export default PostPreview
