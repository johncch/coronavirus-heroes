import React from "react"
import { css } from "@emotion/core"

const Row = ({ children }) => (
  <div
    css={css`
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      flex: 1 1 250px;
      padding: 0 1em;
      min-height: 100%;
      &:last-child {
        border-right: 0;
      }
    `}
  >
    {children}
  </div>
)

export default Row
