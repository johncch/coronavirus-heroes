import React from "react"
import { css } from "@emotion/core"

const Header = ({ children }) => (
  <div
    css={css`
      background: white;
      color: black;
      text-align: center;
      padding: 1.5rem 2rem;
      font-size: 1.3em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    `}
  >
    {children}
  </div>
)

export default Header
