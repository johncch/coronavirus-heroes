import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "../components/header"
import Row from "../components/row"
import Item from "../components/item"

const colWidth = 250
const padding = 20

const renderItems = (numCols, data) => {
  let cols = [...Array(numCols)].map(() => [])
  let allHeroes = []
  for (let node of data.allDataYaml.nodes) {
    allHeroes = allHeroes.concat(node.people)
  }
  allHeroes.forEach((child, i) =>
    cols[i % cols.length].push(<Item key={i} {...child} />)
  )
  return cols.map((item, i) => <Row key={i}>{item}</Row>)
}

export default ({ data }) => {
  const ref = React.useRef()
  const [numCols, setNumCols] = React.useState(3)
  const resizeHandler = () => {
    let w = ref.current?.clientWidth - 2 * padding
    if (w) {
      setNumCols(Math.floor(w / colWidth))
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
        We honor the healthcare heroes who gave their life in the Coronavirus
        Pandemic in 2020
      </Header>
      <div
        ref={ref}
        css={css`
          flex-grow: 1;
          overflow: visible;
          display: grid;
          padding: 0 ${padding}px;
          justify-content: center;
          grid-template-columns: repeat(auto-fill, minmax(${colWidth}px, 1fr));
        `}
      >
        {renderItems(numCols, data)}
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allDataYaml {
      nodes {
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
`
