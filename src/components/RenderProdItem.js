import React from 'react';

const RenderProdItem = (props) => {
    return (
        <div key={props.items.id}>
            {props.items.title}
        </div> 
    )
}
export { RenderProdItem }