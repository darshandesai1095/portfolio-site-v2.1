import React, { useState } from "react";
import MenuBurger from "../MenuBurger/MenuBurger";
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../redux/features/GIFPlaybackSlice'
import "./Menu.css"
import navigate from "../functions/navigate";

const Menu = () => {

    const playbackSelected = useSelector((state) => state.GIFPlayback.value.playback)
    const dispatch = useDispatch()

    const [menuClicked, setMenuClicked] = useState(false)
    const toggleMenu = () => {
        setMenuClicked(prev => !prev)
    }

    return (
        <div className="menu__parent">
            <div className="menu">

                <MenuBurger menuClicked = {menuClicked}
                            toggleMenu = {toggleMenu}
                />

                {
                    playbackSelected ?

                    // <div className="menu__items" onClick={() => dispatch(toggle(""))}>
                    //     <p className="menu__item_gif visible" >CLOSE GIF</p>
                    // </div>

                    <div className="menu__items">
                        <p className="menu__item hidden" onClick={(e) => navigate(e,"home")}>HOMEPAGE</p>
                        <p className="menu__item hidden" onClick={(e) => navigate(e,"about")}>ABOUT</p>
                        <p className="menu__item_gif visible" onClick={() => dispatch(toggle(""))}>CLOSE GIF</p>
                        <p className="menu__item hidden" onClick={(e) => navigate(e,"skills")}>SKILLS</p>
                        <p className="menu__item hidden" onClick={(e) => navigate(e,"contact")}>CONTACT</p>
                    </div>

                    :

                    <div className="menu__items">
                        <p className={`menu__item ${!menuClicked ? "hidden" : "visible"}`} onClick={(e) => navigate(e,"home")}>HOMEPAGE</p>
                        <p className={`menu__item ${!menuClicked ? "hidden" : "visible"}`} onClick={(e) => navigate(e,"about")}>ABOUT</p>
                        {
                            menuClicked ? 
                                <p className="menu__item visible" onClick={(e) => navigate(e,"projects")}>PROJECTS</p> 
                                    : 
                                <p className="menu__text" onClick={toggleMenu} id="menu__text">MENU</p>
                        }
                        <p className={`menu__item ${!menuClicked ? "hidden" : "visible"}`} onClick={(e) => navigate(e,"skills")}>SKILLS</p>
                        <p className={`menu__item ${!menuClicked ? "hidden" : "visible"}`} onClick={(e) => navigate(e,"contact")}>CONTACT</p>
                    </div>
                }

            </div>
        </div>
    )
}

export default Menu