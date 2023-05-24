import React from 'react'
import Col from "react-bootstrap/Col";

function Product(props) {
  return (
    <>
    <Col lg={4} md={6}>
        <div className="blog-card-bg">
            <div className="blog main-content">
                <div className="main-user-id">
                    <h5>Blog No <span>{props.id}</span></h5>
                </div>
                <div className="blog-title">
                    <h6>{props.title}</h6>
                </div>

                <div className="main-blog-content">
                    <p>{props.body}</p>
                </div>
            </div>
        </div>
        </Col>

        
    </>
  )
}

export default Product


