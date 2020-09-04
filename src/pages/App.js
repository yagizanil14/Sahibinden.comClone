import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ProductsComp, Header, Category } from '../components'
import "./App.css"

const App = () => {
  const [data, setData] = useState([])
  const [category] = useState({ title: "İkinci El Ve Sıfır Alışveriş", Categorys: ["men clothing", "jewelery", "electronics", "women clothing"] })
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    try {
      const prod = await axios.get("https://fakestoreapi.com/products")
      console.log(prod.data)
      setData(prod.data)
    } catch (e) {
      console.log(e)
    }
  }

  const sortCategory = async (text) => {
    console.log(text)
    try {
      let getCategory = await axios.get(`https://fakestoreapi.com/products/category/${text}`)
      console.log(getCategory)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Header searchItem={sortCategory} />
      <div className="bodyApp">
        <img src="https://omeryoluk.com/wp-content/uploads/2020/03/banner-reklam-nas%C4%B1l-haz%C4%B1rlan%C4%B1r.jpg" alt="banner" className="bannerImg" />
        <div className="divLeft">
          <Category Category={category} selectCategory={sortCategory} categoryLenght={data.length} />
        </div>
        <div className="divLeft divProducts">
          <ProductsComp data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
