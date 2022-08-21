import React, { useState, useEffect } from 'react'
import blogDb from "../../../pages/BlogPage/blogdb";
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import PopularPosts from '../../PopularPosts/PopularPosts';
import ReactHtmlParser from 'react-html-parser';


const Blog = () => {
    let { blogId } = useParams();
    const [blog, setblog] = useState(blogDb()[blogId]);

    if (!blog) return null;
    return (
        <>
        <Header />
            <div className="container top-nn">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12 mb-5">
                                <div className="single-blog-item">
                                    <h2 className="mb-4 text-md">{blog.TITLE}</h2>
                                    <div className="blog-item-meta mb-3">
                                        <span className="text-black text-capitalize mr-3"><i className="icofont-boy mr-2"></i> {blog.Author}</span>
                                        <span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-2"></i> {new Date().toISOString().slice(0, 10)}</span>
                                    </div>
                                    <img src={blog.IMAge} alt="" className="img-fluid" />
                                    <div className="blog-item-content mt-5">
                                        <p>
                                            {ReactHtmlParser(blog.BRIEF)}
                                        </p>
                                        <div className="mt-5 clearfix">
                                            <ul className="float-right list-inline">
                                                <li className="list-inline-item"> <a href={blog.TITLE_url}>Read From Source</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <PopularPosts />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Blog