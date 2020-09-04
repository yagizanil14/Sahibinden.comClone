import React from 'react'

const TSGComp = props => {
    return (
        <a className="tsgLink" href="/#">
            <div className={props.Click === props.title ? "tsgDiv" : "tsgDivFalse"} onClick={() => props.clickTSG(props.title)}>
                <div className="tsgSpanDiv">
                    <span className={props.Click === props.title ? "tsgSpan" : "tsgSpanFalse"}>{props.title}</span>
                </div>
            </div>
        </a>
    )
}
export { TSGComp }