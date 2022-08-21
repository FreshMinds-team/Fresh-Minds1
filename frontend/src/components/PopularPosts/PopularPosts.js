import React, { useState } from 'react'
import blogDb from "../../pages/BlogPage/blogdb";
import { Link } from 'react-router-dom';

const PopularPosts = () => {
    const [blogs, setblogs] = useState(blogDb());

    return (
        <div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
            <div className="sidebar-widget latest-post mb-3">
                <h5>Popular News</h5>
                {
                  blogs.slice(0,5).map((news, index) => {
                    return (
                <div className="py-2">
                    <h6 className="my-2"><Link to={"/redirect/" + news.id}>{news.TITLE}</Link></h6>
                </div>
                    )}
                )}
            </div>

        </div>
    )
}

export default PopularPosts