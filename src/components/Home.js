import axios from 'axios'
import React, { useEffect, useState } from 'react'



function Home(props) {



  const [data, setData] = useState([])

  const getProductsAPI = async () => {


    try {
      const getProduct = await axios.get("https://captain-json-server.onrender.com/products");
      // console.log("hellllllllloooo", getProduct.data)
      setData(getProduct.data)
    }

    catch (error) {
      console.log(error)
    }


  }

  useEffect(() => {
    getProductsAPI()

  }, [])






  return (
    <>


      <div className="card-container">
        {data.map((item) => {
          return < div className='card' >
            <div className="image-box"><img src={item.img} alt="" /></div>
            <div className="content-box">
              <h3 className='title'>{item.title}</h3>
              <p className="decs">{item.description}</p>
              <span className="price">{item.price}</span>
              <button onClick={() => props.addToCartHandler({ img:item.img, title:item.title , description: item.description, price: item.price, id:item.id ,amount:item.amount})} className="add">Add to cart</button>
            </div>
          </div>


        })
        }
      </div >










    </>
  )
}

export default Home