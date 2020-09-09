import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ProductsComp, Header, Category } from '../components'
import { ItemPage, AddProduct } from './'
import {ProductContext} from '../context/ProductContext'
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => {
  const [data, setData] = useState([])
  const [id,setId]=useState()
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
      setData(getCategory.data)
    } catch (e) {
      console.log(e)
    }
  }

  const getID = (id) => setId(id)

  const select = async (text) => {
    try {
      const descAndAsc = await axios.get(`https://fakestoreapi.com/products?sort=${text}`)
      console.log(descAndAsc.data)
      setData(descAndAsc.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ProductContext.Provider value={{getID, id}}>
    <Router>
      <div>
        <Header searchItem={sortCategory} />
        <div className="bodyApp">
          <img src="https://omeryoluk.com/wp-content/uploads/2020/03/banner-reklam-nas%C4%B1l-haz%C4%B1rlan%C4%B1r.jpg" alt="banner" className="bannerImg" />
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <div className="divLeft">
                    <Category Category={category} selectCategory={sortCategory} getProd={getProducts} categoryLenght={data.length} />
                  </div>
                  <div className="divLeft divProducts">
                    <ProductsComp selectDA={select} data={data} />
                  </div>
                </div>
              )
            }}
          />
          <Route
            path="/Product/:code"
            component={() => <ItemPage />}
          />
          <Route 
          path="/addProduct"
          component={()=> <AddProduct/>}
          />
        </div>
      </div>
    </Router>
    </ProductContext.Provider>
  );
}


export { App };
