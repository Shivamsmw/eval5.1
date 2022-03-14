import React from "react";
import { useState } from "react";
const Wishlist = () => {
    const [arr, setArr] = useState([]);
    const handle = e => {
        e.preventDefault();
        let a = e.target.elements.wish.value + "\n";
        let array = [...arr, a];
        setArr(array);
        e.target.elements.wish.value = "";
    };
    return ( <
        div className = "header" >
        <
        h1 > Wishlist < /h1>{" "} <
        form onSubmit = { handle } >
        <
        input type = "text"
        name = "wish" / >
        <
        button type = "submit" > ADD < /button>{" "} <
        /form>{" "} <
        div >
        <
        h3 > { arr.join("\n") } < /h3>{" "} <
        /div>{" "} <
        /div>
    );
};
export default Wishlist;