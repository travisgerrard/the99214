import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        I was watching The Art of Doing Science and Engineering videos on
        youtube and was thinking about how it relates to my profession, being a
        doctor. The thoughts I had slipped away, as always. Then I had a new
        thought, why not write your thoughts down. I'm only half sarcastic.
        Anyway, this site is the result of the above thoughts.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
