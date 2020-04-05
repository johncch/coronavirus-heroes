import React from "react"
import { css } from "@emotion/core"

const Header = ({ children }) => (
  <div
    css={css`
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.92);
      color: black;
      text-align: center;
      padding: 1.3rem 1rem;
      font-size: 1.25em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    `}
  >
    {children}
  </div>
)

export default Header
