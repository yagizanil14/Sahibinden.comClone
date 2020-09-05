import React from 'react';
import "./Components.css"

const RenderProdItem = (props) => {
    var backgroundColor = true;
    return (
        <div>
            {props.data.length > 0 ?
                props.data.map(e => {
                    backgroundColor === true ? backgroundColor = false : backgroundColor = true
                    return (
                        <a href="/#">
                            <div className={backgroundColor === true ? "divProdTrue" : "divProdFalse"} key={e.id}>
                                <div className="divProd divProdImg">
                                    <img src="https://www.balikligol.com/images/haberler/44071.jpg" alt="prodImg" className="prodImg" />
                                </div>
                                <div className="divProd divProdTitle">
                                    <span className="divProdSpan">{e.title}</span>
                                </div>
                                <div className="divProd divProdPrice">
                                    <span className="divProdSpan">{e.price}</span>
                                </div>
                            </div>
                        </a>
                    )
                })
                : null}
        </div>
    )
}
export { RenderProdItem }