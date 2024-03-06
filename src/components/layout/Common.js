import React, { useState } from 'react'
import Header from '../common/header/Header'
import Sidebar from '../common/sidebar/Sidebar'

export default ({ children }) => {

    return (
        <div>
            
                <Sidebar />
            <div className='wrapper-main'>
            <Header />
                    {children}
                </div>
            </div>
    )
}