import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image";
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "./index.css";

class BlogIndex extends React.Component {
  render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;
		const posts = data.allMarkdownRemark.edges;
		const blogImages = data.allFile.nodes;
		console.log(blogImages);
		console.log(posts);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title || node.fields.slug
					return (
						<div className="flexContainer" key={node.fields.slug}>
							{
								blogImages[i] &&
								<div>
									<Image fixed={blogImages[i].childImageSharp.fixed} />
								</div>
							}
							<div>
								<article >
									<header>
										<h3
											style={{
												marginBottom: rhythm(1 / 4),
											}}
										>
											<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
												{title}
											</Link>
										</h3>
										<small>{node.frontmatter.date}</small>
									</header>
									<section>
										<p
											dangerouslySetInnerHTML={{
												__html: node.frontmatter.description || node.excerpt,
											}}
										/>
									</section>
								</article>
							</div>
						</div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
						description
						indexImage
          }
        }
      }
    }
		allFile(filter: {absolutePath: {regex: "/blogImages/"}}) {
			nodes {
				childImageSharp {
					fixed(width: 120) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
  }
`
