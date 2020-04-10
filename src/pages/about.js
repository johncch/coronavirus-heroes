import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import SEO from "../components/seo"

const renderItems = data => {
  let articles = []
  for (let node of data.allDataYaml.nodes) {
    if (node.articles) {
      articles = articles.concat(node.articles)
    }
  }
  return articles.map((item, i) => {
    return (
      <li key={i}>
        <a href={item.url}>{item.title}</a>{" "}
        <span
          css={css`
            opacity: 0.6;
          `}
        >
          [{item.source}]
        </span>
      </li>
    )
  })
}

export default ({ data }) => (
  <div
    css={css`
      max-width: 720px;
      margin: 0 auto;
      padding: 20px;
    `}
  >
    <SEO />
    <p>
      <a href="/">Back to the list</a>
    </p>
    <h1>About Coronavirus Heroes</h1>
    <p>In memoriam: healthcare workers who have died of COVID-19.</p>
    <p>
      Our front line healthcare workers, the everyday heroes we rely on to care
      for us in our time of need, are themselves at great risk of contracting
      COVID-19 in the line of duty. The risk has been exacerbated by the
      shortage of Personal Protective Equipment (PPE) at the front lines. We
      want to honor the fallen heroes who have lost their lives fighting this
      pandemic, while highlighting the severity of the situation to call for
      action to provide adequate supplies of PPE to the front lines with utmost
      urgency.
    </p>
    <p>Read more in news sources:</p>
    <ul
      css={css`
        li {
          margin-bottom: 1em;
        }
      `}
    >
      {renderItems(data)}
    </ul>
  </div>
)

export const query = graphql`
  query {
    allDataYaml {
      nodes {
        articles {
          title
          url
          source
        }
      }
    }
  }
`
