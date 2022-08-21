import React from 'react'
import { Link } from 'react-router-dom'

const Title = ({title,subtitle}) => {
    return (
        <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">{subtitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title