import React from 'react'
import {Row, Container} from 'react-bootstrap'
import BlogCards from './BlogCards'

function Blog() {
  return (
    <div className="blog d-flex flex-column align-items-center justify-content-center">
      <Container>
      <div className="mb-3">
        <h2 className="blog-title bold">Recent Blogs</h2>
      </div>
      <div>
        <BlogCards />
      </div>
      </Container>
    </div>
  )
}

export default Blog