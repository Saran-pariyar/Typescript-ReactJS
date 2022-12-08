
// type ButtonProps = {
//     it returns nothing so we made it void and will give it an event in parent component
//this will be used for any kind of event...
//     handleClick : () => void

import React from "react"


// }
//to be more specific and only used for button click
type ButtonProps = {
    //we can be more specific by saying it's a button click
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void

}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.handleClick}>Click</button>
    )
}

export default Button