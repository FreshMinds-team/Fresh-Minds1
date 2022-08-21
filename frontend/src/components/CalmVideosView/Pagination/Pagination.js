import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate,currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="col-lg-12 col-md-12">
      <nav className="pagination py-2 d-inline-block">
        <div className="nav-links">
        {pageNumbers.map((number,index) => {
          if (currentPage !== number){
            return(
              <a key={index} onClick={() => paginate(number)} className='page-numbers'>
            {number}
          </a>
            )
          }else{
            return(
              <span aria-current="page" className="page-numbers current">{number}</span>
            )
          }
        })}
          
        </div>
      </nav>
    </div>
  )
}

export default Pagination