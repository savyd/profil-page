import React from "react"
import {Helmet} from "react-helmet"

const Head = ({ title, children }) => {
    return (
        <Helmet title={title}>
            {children}
        </Helmet>
    )
}

export default Head