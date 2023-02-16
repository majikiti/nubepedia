import { css } from "@emotion/react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import Button from "~/components/Button"

function Logo() {
  return (
    <div>
      <span>Nubepedia</span>
    </div>
  )
}

export default function Header() {
  const { data: session } = useSession()

  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #eff3f4;
        padding: 0.8rem;
        font-size: 2rem;
        font-family: Times New Roman;
        color: #0f1419;
      `}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        {session ? (
          <Button onClick={signOut}>ログアウト</Button>
        ) : (
          <Button onClick={signIn}>ログイン</Button>
        )}
      </div>
    </header>
  )
}
