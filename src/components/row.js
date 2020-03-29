import React from "react"
import { css } from "@emotion/core"

const Row = ({ children }) => (
  <div
    css={css`
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      padding: 0 1em;
      &:last-child {
        border-right: 0;
      }
    `}
  >
    {children}
  </div>
)

export default Row
