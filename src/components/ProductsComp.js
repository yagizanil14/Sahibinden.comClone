import React, { useState } from 'react'
import { RenderProdItem, TSGComp } from './'

const ProductsComp = props => {
    const [TSG] = useState(["Tüm İlanlar", "Sahibinden", "Mağazadan"])
    const [click, setClick] = useState("Tüm İlanlar")
    const selectTSG = text => setClick(text)
    return (
        <div className="productsbod">
            <div className="divRight divMBottom">
                <select onChange={(event)=>props.selectDA(event.target.value)} className="selectSort" name="sort">
                    <option value="desc">Tarihe Göre Azalan</option>
                    <option value="desc">Fiyata Göre Azalan</option>
                    <option value="asc">Fiyata Göre Artan</option>
                </select>
            </div>
            {TSG.map((e, index) => {
                return (
                    <div key={index} className="prodCompTsg">
                        <TSGComp title={e} clickTSG={selectTSG} Click={click} />
                    </div>
                )
            })}
            <div className="productsBody">
                <div className="productsHeadImg">
                    <span className="productsHeadSpan">Resim</span>
                </div>
                <div className="productsHeadTitle">
                    <span className="productsHeadSpan">İlan Başlığı</span>
                </div>
                <div className="productsHeadPrice">
                    <span className="productsHeadSpan" >Fiyat</span>
                </div>
                <RenderProdItem data={props.data} />
            </div>
        </div>
    )
}
export { ProductsComp }