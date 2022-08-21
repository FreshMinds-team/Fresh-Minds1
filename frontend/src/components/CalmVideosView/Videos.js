import React, { useState, useEffect } from 'react'
import Pagination from './Pagination/Pagination'
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube';
import './video.css'
import PopularPosts from '../PopularPosts/PopularPosts'
const Videos = ({videos}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(5);  

  const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    const _onReady = (e) => {
      e.target.pauseVideo();
    }

  useEffect(() => {
      window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  // Get current videos
  const indexOfLastvideo = currentPage * videosPerPage;
  const indexOfFirstvideo = indexOfLastvideo - videosPerPage;
  const currentvideos = videos.slice(indexOfFirstvideo, indexOfLastvideo);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (!videos) return null;

  return (
    <section className="section blog-wrap less-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div>
                {
                  currentvideos.map((video, index) => {
                    return (
                      <div key={index} className="col-lg-12 col-md-12 mb-5">
                        <div className="blog-item">
                          <div className="blog-thumb">
                            <div className="blog-item-meta mb-3 mt-4">
                              <h3 className="mt-3 mb-3"><a>{video.Name}</a></h3>
                            </div>
                            <YouTube className='img-fluid' videoId={video.Youtube_Id} opts={opts} onReady={_onReady} />;
                          </div>
                        </div>
                      </div>
                    )
                  }
                  )}</div>
              <Pagination
                postsPerPage={videosPerPage}
                currentPage = {currentPage}
                totalPosts={videos.length}
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

export default Videos