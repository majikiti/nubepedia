import { css } from "@emotion/react"
import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

import Button from "~/components/Button"
import Layout from "~/components/Layout"
import { tempPostAtom } from "~/libs/atoms"

function PostButton({ children, ...props }) {
  return (
    <button
      css={css`
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        padding: 10px 2rem;
        margin: 5px auto;
        border: none;
        border-radius: 30px;
        background: #1D9BF0;
        :hover {
          background: #1A8CD8;
        }
      `}
      {...props}>
      {children}
    </button>
  )
}

export default function PostPage() {
  const { register, handleSubmit } = useForm()
  const [, setTempPost] = useAtom(tempPostAtom)
  const router = useRouter()

  const onSubmit = ({ body }) => {
    const post = {
      authorName: "名無しの権兵衛",
      text: body,
    }
    console.log(post)
    setTempPost(posts => [post, ...posts])
    router.push("/")
  }

  return (
    <Layout>
      <p
      css={css`
        padding-left: 1rem;
        color: #0F1419;
        font-weight: bold;
      `}
    >
      New Kichitwi
    </p>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div
      css={css`
        margin: 0 1.5rem;
        text-align: right;
      `}
    >
        <textarea
          css={css`
            border: 2px solid #E4E7EA;
            min-height: 16rem;
            resize: none;
            font-size: 1rem;
            padding: 0.5rem;
            width: 100%;
            font-family: Segoe UI;
            border-radius: 0.4em; 
            :focus {
              border: 2px solid #1D9BF0;
              border-radius: 0.4em; 
              outline: none; 
            }
          `}
          placeholder="✍️( ՞ةڼ◔)"
          {...register("body")}
        />
          <PostButton>Post</PostButton>
      </div>
      </form>
    </Layout>
  )
}
