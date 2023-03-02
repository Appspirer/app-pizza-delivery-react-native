import React from "react";
import location from '../assets/svgs/location.svg'
import home from '../assets/svgs/home.svg'
import home_focus from '../assets/svgs/home_focus.svg'
import cart from '../assets/svgs/cart.svg'
import cart_focus from '../assets/svgs/cart_focus.svg'
import compass from '../assets/svgs/compass.svg'
import compass_focus from '../assets/svgs/compass_focus.svg'
import menu from '../assets/svgs/menu.svg'
import menu_focus from '../assets/svgs/menu_focus.svg'
import search from '../assets/svgs/search.svg'
import search_focus from '../assets/svgs/search_focus.svg'
import avatar from '../assets/svgs/avatar.svg'
import star_red from '../assets/svgs/star_red.svg'
import star_gray from '../assets/svgs/star_gray.svg'
import check from '../assets/svgs/check.svg'
import back from '../assets/svgs/back.svg'
import filter from '../assets/svgs/filter.svg'
import heart from '../assets/svgs/heart.svg'
import back_w from '../assets/svgs/back_w.svg'

const SVGs = {
    location,
    home,
    home_focus,
    cart,
    cart_focus,
    compass,
    compass_focus,
    menu,
    menu_focus,
    search,
    search_focus,
    avatar,
    star_red,
    star_gray,
    check,
    back,
    filter,
    heart,
    back_w
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}