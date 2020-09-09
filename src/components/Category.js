import React from 'react'
import "./Components.css"

const Category = props => {
    return (
        <div>
            <div className="divLeft divCategory ">
                <div className="divLeft">
                    <img src="https://cdn6.aptoide.com/imgs/7/5/4/754fde5091033f439b23d642b4ea3b23_icon.png" alt="shoppingCard" className="cardImg" />
                    <a href="#/" onClick={()=>{props.getProd()}}>
                    <div className="divShopping">
                        <span className="divShoppingText">{props.Category.title}</span>
                        <span> ({props.categoryLenght})</span>
                    </div>
                    </a>
                </div>
            </div>
            {props.Category.Categorys.map((e, index) => {
                return (
                    <li className="categoryMargin" key={index} onClick={() => props.selectCategory(e)}>
                        <a href="/#" className="categoryLink">
                            {e}
                        </a>
                    </li>
                )
            })}
        </div>
    )
}
export { Category }