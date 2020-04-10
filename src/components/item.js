import React from "react"
import { css } from "@emotion/core"

const Item = ({ name, birth, death, location, details, source }) => (
  <div
    id={`${name
      .toLowerCase()
      .split(" ")
      .join("-")}`}
    css={css`
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      text-align: center;
      box-sizing: border-box;

      &:last-child {
        border-bottom: 0;
      }

      &:target:before {
        content: " ";
        display: block;
        height: 150px;
        margin-top: -150px;
        visibility: hidden;
      }
    `}
  >
    <div
      css={css`
        padding: 1rem;
      `}
    >
      <h3>{name}</h3>
      <p>
        {birth || "?"}–{death}
      </p>
      <p>{details}</p>
      <p>{location}</p>
      {source ? (
        <p
          css={css`
            font-size: 0.8em;
          `}
        >
          <a href={source}>[source]</a>
        </p>
      ) : null}
    </div>
  </div>
)

export default Item
