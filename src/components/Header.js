import React, { useState, useRef, useEffect } from 'react';
import './Components.css'
const Header = props => {
    const wrapperRef = useRef(null);
    const [search, setSearch] = useState("")
    const [clickOn, setClickOn] = useState(false)

    const changeSearch = text => setSearch(text.target.value)
    const clickSearch = () => setClickOn(true)

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setClickOn(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    return (
        <div className="body">
            <div className="alignItemss">
                <div className="divLeft">
                    <a href="/#"><img src="https://www.pngkit.com/png/full/257-2579960_logo-sahibinden.png" alt="Logo" className="logoImg" /></a>
                </div>
                <a href="/#" >
                    <div ref={wrapperRef} className="divLeftSearch">
                        <input className={clickOn === false ? "divSearch" : "divSearchTrue"} type="text" onChange={changeSearch} onClick={clickSearch} placeholder="Kelime, İlan no veya mağaza adı ile ara" />
                        <img src="https://psikopress.com/wp-content/uploads/2019/01/magnifying-glass-1976105_960_720.png" alt="SearchIcon" className={clickOn === false ? "searchImg" : "searchImgTrue"} onClick={()=>props.searchItem(search)} />
                    </div>
                    <div className="divRight divFree">
                        <div className="aFreeButton">
                            <span className="aFreeText">Ücretsiz İlan Ver</span>
                        </div>
                    </div>
                </a>
                <div className="divRight divSignUp">
                    <a href="/#">
                        <span className="signIn-UpText">Üye Ol</span>
                    </a>
                </div>
                <div className="divRight divSignIn">
                    <a href="/#">
                    <span className="signIn-UpText">Giriş Yap</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export { Header }