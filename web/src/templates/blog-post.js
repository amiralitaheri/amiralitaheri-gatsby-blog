import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'
import SimpleReactLightbox from "simple-react-lightbox";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      language
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      tags
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error'/>}
      {post && <SEO title={post.title || 'Untitled'}
                    description={toPlainText(post._rawExcerpt)}
                    image={post.mainImage}
                    keywords={post.tags}
      />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors}/>
        </Container>
      )}
      <SimpleReactLightbox>
        {post && <BlogPost {...post} />}
      </SimpleReactLightbox>
    </Layout>
  )
}

export default BlogPostTemplate
