import React, { useState } from 'react'
import ImageUploader from 'react-images-upload';
import axios from 'axios'

const AddProduct = props => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDesc] = useState("")
    const [image, setImage] = useState([])
    const [category, setCategory] = useState()

    const getTitle = text => setTitle(text.target.value)
    const getDesc = text => setDesc(text.target.value)
    const getPrice = text => setPrice(text.target.value)
    const getCategory = text => setCategory(text)
    const getImg = img => setImage(img[0].name)

    const addProduct = async() => {
        try{
            const prod = await axios.post('https://fakestoreapi.com/products',{
                body:JSON.stringify(
                    {
                        title: title,
                        price: price,
                        description: description,
                        image: image,
                        category: category
                    }
                )
            }) 
            console.log(prod)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            <input type="text" onChange={getTitle} placeholder="İlan Başlığı Giriniz" />
            <input type="text" onChange={getDesc} placeholder="İlan Açıklaması Giriniz" />
            <input type="text" onChange={getPrice} placeholder="Ürün Fiyatını Giriniz" />
            <select onChange={(event) => getCategory(event.target.value)} className="selectSort" name="sort">
                <option value="men clothing">Men Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women clothing">Women Clothing</option>
            </select>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={getImg}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <button onClick={addProduct}>Kaydet</button>
        </div>
    )
}
export { AddProduct }