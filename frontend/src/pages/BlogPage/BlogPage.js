import React from 'react'
import Blogs from '../../components/Blog/Blogs'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const BlogPage = () => {
  window.scrollTo(0, 0)
  return (
    <div>
        <Header />
        <Blogs />
        <Footer />
    </div>
  )
}

export default BlogPage