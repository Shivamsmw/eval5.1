import React from "react";
import { useState } from "react";

function Vegetables() {
    const [tomato, set1] = useState(10);
    const [potato, set2] = useState(8);
    const [carrot, set3] = useState(5);
    const [onion, set4] = useState(7);
    const Tomato_add = () => {
        set1(tomato + 1);
    };
    const Tomato_del = () => {
        set1(tomato - 1);
    };
    const Potato_add = () => {
        set2(potato + 1);
    };
    const Potato_del = () => {
        set2(potato - 1);
    };
    const Carrot_add = () => {
        set3(carrot + 1);
    };
    const Carrot_del = () => {
        set3(carrot - 1);
    };
    const Onion_add = () => {
        set4(onion + 1);
    };
    const Onion_del = () => {
        set4(onion - 1);
    };
    return ( <
        div >
        <
        h1 > Tomatoes: { tomato }
        Kgs < /h1> <button onClick={Tomato_add}>+</button > { " " } <
        button onClick = { Tomato_del } > - < /button>{" "} <
        div >
        <
        h1 > Potatoes: { potato }
        Kgs < /h1>{" "} <
        button onClick = { Potato_add } > + < /button>{" "} <
        button onClick = { Potato_del } > - < /button>{" "} <
        /div>{" "} <
        div >
        <
        h1 > Carrots: { carrot }
        Kgs < /h1>{" "} <
        button onClick = { Carrot_add } > + < /button>{" "} <
        button onClick = { Carrot_del } > - < /button>{" "} <
        /div>{" "} <
        div >
        <
        h1 > Onions: { onion }
        Kgs < /h1> <button onClick={Onion_add}> + </button > { " " } <
        button onClick = { Onion_del } > - < /button>{" "} <
        /div>{" "} <
        /div>
    );
}
export default Vegetables;