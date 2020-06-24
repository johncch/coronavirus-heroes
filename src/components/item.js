import React from "react"
import { css } from "@emotion/core"

const yFormatter = new Intl.DateTimeFormat("en", { year: "numeric" })
const mFormatter = new Intl.DateTimeFormat("en", { month: "short" })
const dFormatter = new Intl.DateTimeFormat("en", { day: "2-digit" })

const formatDate = dateStr => {
  if (dateStr) {
    const yearOnly = dateStr.length <= 4
    const date = new Date(dateStr)
    if (isNaN(date)) {
      console.debug(`unparsed date: ${dateStr}`)
      return dateStr
    }
    const year = yFormatter.format(date)

    if (yearOnly) {
      return year
    }
    const month = mFormatter.format(date)
    const d = dFormatter.format(date)
    const output = `${month} ${d}, ${year}`
    return output
  }
  return ""
}

const Item = ({ name, birth, death, location, details, source }) => {
  return (
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
        {birth || death ? (
          <p>
            {formatDate(birth)}–{formatDate(death)}
          </p>
        ) : null}
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
}

export default Item
