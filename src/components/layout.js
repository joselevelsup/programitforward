import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import { rhythm, scale } from "../utils/typography"

const BlogImage = () => {
	const data = useStaticQuery(graphql`
			query BlogImageQuery{
				blogIcon: file(absolutePath: { regex: "/blogIcon.png/"}) {
					childImageSharp {
						fixed(width: 800, height: 200){
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		`)
	return (
		<Image fixed={data.blogIcon.childImageSharp.fixed} />
	)
}

class Layout extends React.Component {
	render() {
    const { children } = this.props
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
					<Link to={`/`}>
						<BlogImage />
					</Link>
				</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout

