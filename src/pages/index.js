import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "../components/header"
import Row from "../components/row"
import Item from "../components/item"

const renderStuff = (numCols, data) => {
  let cols = [...Array(numCols)].map(() => [])
  const allHeroes = data.allDataYaml.edges[1].node.people
  allHeroes.forEach((child, i) =>
    cols[i % cols.length].push(<Item {...child} />)
  )
  return cols.map(item => <Row>{item}</Row>)
}

export default ({ data }) => {
  const ref = React.useRef()
  const [numCols, setNumCols] = React.useState(3)
  const resizeHandler = () => {
    let w = ref.current?.offsetWidth
    if (w) {
      setNumCols(Math.floor(w / 300))
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", resizeHandler)
    resizeHandler()
    return () => {
      window.removeEventListener("resize", resizeHandler)
    }
  })

  return (
    <React.Fragment>
      <Header>
        We honor the heroes who gave their life in the Coronavirus Crisis.
      </Header>
      <div
        ref={ref}
        css={css`
          flex-grow: 1;
          overflow: scroll;
          display: grid;
          padding: 0 1em;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        `}
      >
        {renderStuff(numCols, data)}
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allDataYaml {
      edges {
        node {
          people {
            name
            birth
            death
            details
            location
            source
          }
        }
      }
    }
  }
`
