import React from 'react'

export const Nav = (props) => {
    return (
        <nav>
            <h1>Hello {props.userName} Your Favorite language is: {props.favLang} and your from: {props.hometown}</h1>
        </nav>
    )
}
