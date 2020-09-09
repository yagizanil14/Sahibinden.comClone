import React, {useContext} from 'react';
import "./Components.css"
import {Link} from "react-router-dom";
import {ProductContext} from '../context/ProductContext'

const RenderProdItem = (props) => {
    var backgroundColor = true;
    const context = useContext(ProductContext)
    return (
        <div>
            {props.data.length > 0 ?
                props.data.map(e => {
                    backgroundColor === true ? backgroundColor = false : backgroundColor = true
                    return (
                        <Link to={`/Product/${e.id}`} key={e.id} onClick={()=>context.getID(e.id)}>
                            <div className={backgroundColor === true ? "divProdTrue" : "divProdFalse"} key={e.id}>
                                <div className="divProd divProdImg">
                                    <img src={e.image} alt="prodImg" className="prodImg" />
                                </div>
                                <div className="divProd divProdTitle">
                                    <span className="divProdSpan">{e.title}</span>
                                </div>
                                <div className="divProd divProdPrice">
                                    <span className="divProdSpan">{e.price}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
                : null}
        </div>
    )
}
export { RenderProdItem }