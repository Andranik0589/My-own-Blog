import React from 'react'

import NavBar from './NavBar'


const LayOut = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default LayOut