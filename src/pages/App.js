import React, {useEffect,useState} from 'react';
import axios from 'axios'
import {RenderProdItem, Header} from '../components'

const App = () => {
  const [data, setData]=useState([])
  useEffect(()=>{
    getProducts()
  },[])
  const getProducts = async() => {
    try{
      const prod = await axios.get("https://fakestoreapi.com/products")
      console.log(prod.data)
      setData(prod.data)
    }catch(e){
      console.log(e)
    }
  }

  const sortCategory = async(text) => {
    console.log(text)
    try{
      let getCategory = await axios.get(`https://fakestoreapi.com/products/category/${text}`)
      console.log(getCategory)
    }catch(e){
      console.log(e)
    }
  }
 
  return (
    <div style={{padding:0, margin:0}}>
      <Header searchItem={sortCategory}/>
      {data.length > 0 ? 
      data.map(e=>{
        return(
          <li key={e.id}>
            <RenderProdItem items={e}/>
          </li>
        )
      })
      :null}
    </div>
  );
}

export default App;
