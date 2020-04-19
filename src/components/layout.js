import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children, colorState }) => {
  return (
    <>
      <div className={`layout coloredBackground${colorState}`} id="layout">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
