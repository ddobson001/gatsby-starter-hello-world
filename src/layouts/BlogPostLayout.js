import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import SEO from '../components/SEO';
import innertext from 'innertext';
const BlogPostLayout = ({data}) => {
    const post = data.wordpressPost;
  return (
    <div>
        <SEO
        title={innertext(post.title)}
        description={innertext(post.excerpt)}
        image={post.featured_media.source_url}
        keywords={post.categories.map(res => res.name).join(', ')}
        
        />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
    <h1 dangerouslySetInnerHTML={{__html: post.title}} />
    <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPostLayout

export const query = graphql`
  query($slug: String!) {
    {
        wordpressPost(slug: {eq: "solidity-tutorial"}) {
        content
          title
          featured_media {
            source_url
          }
          categories {
            name
          }
          excerpt
        }
      }
      
`
