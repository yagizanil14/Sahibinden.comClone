import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import axios from 'axios'
import "./App.css"

const ItemPage = props => {
    const [data, setData] = useState([])
    const context = useContext(ProductContext)

    useEffect(() => {
        getData(context.id)
    }, [context.id])

    const getData = async (id) => {
        try {
            const datas = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setData(datas.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="itemPBody">
            {console.log(data)}
            <div>
                <span className="itemPTitle">{data.title}</span>
            </div>
            <hr />
            <div className="itemPProdImgDiv">
                <img src={data.image} alt="productImg" className="itemPProdImg" />
            </div>
            <div className="itemPProdDesDiv">
                <span className="itemPPrice">{data.price}</span>
                <span className="itemPCategory">{data.category}</span>
            </div>
            <hr />
            <div className="itemPDescDiv">
                <span className="itemPDesc">{data.description}</span>
            </div>
        </div>
    )
}
export { ItemPage }