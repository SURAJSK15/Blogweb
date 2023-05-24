import React, { useEffect, useState } from 'react';
import Product from '../Componets/Product';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';


function PaginationComp() {

  const [data, setData] = useState([]);
  const [showpage, setShowpage] = useState(6);
  const numbers = Math.ceil(data.length / showpage);
  const [counter, setCounter] = useState(1);
  const [noButton, setButtons] = useState(numbers);
  const [page, setPagenation] = useState({

    start: 0, end: showpage

  })

  useEffect(() => {
    const value = showpage * counter;
    onPageChange(value - showpage, value);
  }, [counter])

  const onPageChange = (prev, next) => {
    setPagenation({ start: prev, end: next })
  }

  const onButtonclick = (type) => {

    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      }
      else {
        setCounter(counter - 1)
      }
    }
    else if (type === "next") {
      if (numbers === counter) {
        setCounter(counter);

      }

      else {
        setCounter(counter + 1)
      }
    }


  };



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (page) => {
    // Make API request here
    // Adjust the API endpoint and query parameters for pagination as per your API design

    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'GET'
    })

      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <>
    <div className="main-pagenation-bg">
      <div className="blog-heading">
        <h2>Our Blogs</h2>
      </div>

        <Container>
      <Row>
        {data.slice(page.start, page.end).map((value) => {
          return (
            <Product
              id={value.id}
              title={value.title}
              body={value.body}
            />

          );
        }
        )}
      </Row>


      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item">
            <NavLink className="page-link"  onClick={() => onButtonclick("prev")}>Previous</NavLink>
          </li>
          {
            new Array(numbers).fill("").map((key,index) => {
              return(
               
<li className="page-item"> <a className={`${index + 1 == counter ? "active" : null} `} onClick={() => setCounter(index + 1)}> {index + 1}  </a> </li>
        
        
              )
            })
          }
          
          <li className="page-item">
            <NavLink className="page-link" href="#"  onClick={() => onButtonclick("next")}>Next</NavLink>
          </li>
        </ul>
      </nav>

      

      


      {/* <div className='d-flex justify-content-between'>
        <button className='btn btn-primary'
          onClick={() => onButtonclick("prev")}
        // disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{counter} {numbers}</span>
        <button className='btn btn-primary'
          onClick={() => onButtonclick("next")}
        >
          Next
        </button>
      </div> */}

    </Container >
    </div>
    </>
  );
}

export default PaginationComp;
