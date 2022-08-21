import React, { useState, useEffect } from 'react'
import blogDb from "../../pages/BlogPage/blogdb";
import Pagination from './Pagination/Pagination'
import { Link } from 'react-router-dom';
import './Blog.css'
import PopularPosts from '../PopularPosts/PopularPosts';

const Blogs = () => {
  const [blogs, setblogs] = useState(blogDb());
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5);  

  useEffect(() => {    
      window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!blogs) return null;

  return (
    <section className="section blog-wrap less-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div>
                {
                  currentBlogs.map((blog, index) => {
                    return (
                      <div key={index} className="col-lg-12 col-md-12 mb-5">
                        <div className="blog-item">
                          <div className="blog-thumb">
                            <div className="blog-item-meta mb-3 mt-4">
                              <h2 className="mt-3 mb-3"><Link to={"/news/" + blog.id}>{blog.TITLE}</Link></h2>
                            </div>
                            <img src={blog.IMAge} alt="" className="img-fluid " />
                          </div>
                          <div className="blog-item-content">
                            <div className="blog-item-meta mb-3 mt-4">
                              <span className="text-black text-capitalize mr-3"><i className="icofont-boy mr-2"></i> {blog.Author}</span>
                              <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-2"></i> {new Date().toISOString().slice(0, 10)}</span>
                            </div>
                            <p className="mb-4">{`${blog.BRIEF.substring(0, 250)}...`} <Link to={"/news/" + blog.id}>Read More <i className="icofont-simple-right ml-2 "></i></Link></p>                            
                          </div>
                          
                        </div>
                      </div>
                    )
                  }
                  )}</div>
              <Pagination
                postsPerPage={blogsPerPage}
                currentPage = {currentPage}
                totalPosts={blogs.length}
                paginate={paginate}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <PopularPosts />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs