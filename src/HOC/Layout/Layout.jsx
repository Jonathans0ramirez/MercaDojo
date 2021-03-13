import React from 'react'
import './Layout.sass'

const Layout = ({ children }) => {
    return (
        <>
            <div className={'layoutTitle'}>
                <span className="layoutHam">≡</span> MercaDojo
            </div>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
