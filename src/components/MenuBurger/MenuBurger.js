import React, { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import "./MenuBurger.css"
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../redux/features/GIFPlaybackSlice'

const MenuBurger = (props) => {

    const [menuClicked, setMenuClicked] = useState(false)
    const dispatch = useDispatch()
    const playbackSelected = useSelector((state) => state.GIFPlayback.value.playback)

    const determineToggleType = () => {
        if (playbackSelected) {
            return dispatch(toggle(""))
        }
        return props.toggleMenu()
    }

    return (
        <div className="menu__icon" onClick={determineToggleType}>

            {
                props.menuClicked || playbackSelected ? 

                <div className={`menu__close ${menuClicked ? "hide" : "show"}`}>
                    <CancelIcon style={{fill: `${playbackSelected ? "#ff0a54" : "#495057"}`}}/>
                </div>

                :

                <div className={`menu__burger ${!menuClicked ? "show" : "hide"}`}>
                    <div className="burger__spacer"></div>
                    <div className="burger__top"></div>
                    <div className="burger__middle"></div>
                    <div className="burger__bottom"></div>
                </div>

            }



        </div>

    )
}

export default MenuBurger