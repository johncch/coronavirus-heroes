import React from "react"
import { css } from "@emotion/core"
import ghLogo2x from "../assets/GitHub-Mark-64px.png"

const Header = ({ children }) => (
  <div
    css={css`
      position: sticky;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      top: 0;
      background: rgba(255, 255, 255, 0.92);
      color: black;
      text-align: center;
      padding: 1.3rem 1rem;
      font-size: 1.3em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    `}
  >
    <div
      css={css`
        flex: 1 1 auto;
        margin-left: 36px;
      `}
    >
      {children}
    </div>
    <a
      css={css`
        flex: 0 0 24px;
        margin-left: 1rem;
      `}
      href="https://github.com/johncch/coronavirus-heroes"
    >
      <img
        css={css`
          float: right;
          width: 24px;
          height: 24px;
          margin-bottom: 0;
          &:hover {
            opacity: 0.6;
          }
        `}
        src={ghLogo2x}
        srcSet={`${ghLogo2x} 2x`}
        alt="github"
      />
    </a>
  </div>
)

export default Header
