import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image";
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
						twitter,
						instagram,
						github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
				Written by <strong>{author}</strong>. I'm a Self taught Developer who has done Game Programming then pivoted to Web Development using powerful frameworks/libraries such as Angular and React. I approach everyday as a chance to improve my programming skills, to learn new frameworks, and to challenge myself.
				<br />
				<a href={`https://twitter.com/${social.twitter}`}>
					<IconContext.Provider value={{color: "black", size: "2em"}}>
						<FaTwitter />
					</IconContext.Provider>
				</a>
				{" "}
				<a href={`https://instagram.com/${social.instagram}`}>
					<IconContext.Provider value={{color: "black", size: "2em"}}>
						<FaInstagram />
					</IconContext.Provider>
				</a>
				{" "}
				<a href={`https://github.com/${social.github}`}>
					<IconContext.Provider value={{color: "black", size: "2em"}}>
						<FaGithub />
					</IconContext.Provider>
				</a>
      </p>
    </div>
  )
}

export default Bio
