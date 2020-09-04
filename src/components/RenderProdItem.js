import React from 'react';

const RenderProdItem = (props) => {
    return (
        <div>
             {props.data.length > 0 ?
                props.data.map(e => {
                    return (
                        <div key={e.id}>
                            <div className="divProd">
                                <img src="https://www.balikligol.com/images/haberler/44071.jpg" alt="prodImg" className="prodImg" />
                            </div>
                            <div className="divProd">
                                <span>{e.title}</span>
                                <span>{e.price}</span>
                            </div>
                        </div>
                    )
                })
                : null}
        </div>
    )
}
export { RenderProdItem }