import React,{useState} from 'react'
import { RenderProdItem, TSGComp } from './'

const ProductsComp = props => {
    const [click,setClick]=useState("Tüm İlanlar")

    const selectTSG = text => setClick(text)
    return (
        <div>
            <div className="prodCompTsg">
                <TSGComp title="Tüm İlanlar" clickTSG={selectTSG} Click={click} />
            </div>
            <div className="prodCompTsg">
                <TSGComp title="Sahibinden" clickTSG={selectTSG} Click={click}/>
            </div>
            <div className="prodCompTsg">
                <TSGComp title="Mağazadan" clickTSG={selectTSG} Click={click}/>
            </div>
            <div className="productsBody">
                <RenderProdItem data={props.data} />
            </div>
        </div>
    )
}
export { ProductsComp }