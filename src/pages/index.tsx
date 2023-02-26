import { css } from "@emotion/react"
import { useAtom } from "jotai"
import { GetServerSideProps } from "next"

import Button from "~/components/Button"
import Layout from "~/components/Layout"
import { tempPostAtom } from "~/libs/atoms"
import { getPosts, Post } from "~/models/Post"

type Props = {
  posts: Post[]
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const posts = await getPosts({}, 10)
  return { props: { posts } }
}

function PostPreview({ text, authorName }) {
  return (
    <div
      css={css`
        display: flex;
        margin: 0.5rem;
        padding: 0.5rem;
        flex-direction: column;
        border-radius: 0.5rem;
        border-top: 2px black;
        background: #f7f9f9;
      `}>
      <span css={css``}>{authorName}</span>
      <hr
        css={css`
          margin: 0;
        `}
      />
      <p
        css={css`
          font-size: 1.2rem;
        `}>
        <pre>
          {text}
        </pre>
      </p>
      <div>
        <Button onClick={() => navigator.clipboard.writeText(text)}>
          Copy
        </Button>
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}><Button>
          Tweet
        </Button></a>
      </div>
      
    </div>
  )
}

export default function IndexPage({ posts }: Props) {
  const [tempPosts] = useAtom(tempPostAtom)

  return (
    <Layout>
      <p
        css={css`
          font-size: 1rem;
          padding: 0 1rem;
        `}>
        投稿一覧
      </p>
      {tempPosts.map((post, i) => (
        <PostPreview key={i} {...post} />
      ))}
    </Layout>
  )
}
