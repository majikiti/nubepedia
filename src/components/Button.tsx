import { css } from "@emotion/react"
import { ReactNode } from "react"

export default function Button({
  children,
  ...props
}: {
  children: ReactNode
}) {
  return (
    <button
      css={css`
        font-size: 1rem;
        color: #1D9BF0;
        border: 1px solid #CFD9DE;
        background: white;
        padding: 10px;
        border-radius: 18px;
        margin: 0.5rem;
        :hover {
          background: #E8F5FD;
        }
      `}
      {...props}>
      {children}
    </button>
  )
}
