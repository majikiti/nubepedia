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
        color: #1d9bf0;
        border: 1px solid #cfd9de;
        background: white;
        padding: 10px;
        border-radius: 18px;
        margin: 0.5rem;
        :hover {
          background: #e8f5fd;
        }
      `}
      {...props}>
      {children}
    </button>
  )
}
