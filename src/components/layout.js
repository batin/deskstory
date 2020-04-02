import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
      <div className='container layout'>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
