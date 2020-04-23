import React, { useState } from "react"
import {
  IoMdMenu,
  IoMdArrowBack,
  IoIosDownload,
  IoIosHeart,
  IoMdColorPalette,
} from "react-icons/io"

const Menu = ({ nextColor, download, back, show }) => {
  const [state, setState] = useState(false)
  return (
    <div className={show ? "menu" : "menu d-none"}>
      <div
        onClick={() => {
          setState(!state)
        }}
        className="menuItem d-flex justify-content-center align-items-center"
      >
        <IoMdMenu className="icon" />
      </div>
      <div style={{ opacity: state ? 0 : 1 }}>
        <div onClick={() => back(true)} className="menuItem">
          <IoMdArrowBack className="icon" />
        </div>
        <div
          onClick={() => {
            nextColor(true)
          }}
          className="menuItem"
        >
          <IoMdColorPalette className="icon" />
        </div>
        <a
          href="https://github.com/batin/deskstory"
          target="_blank"
          rel="noopener noreferrer"
          className="menuItem"
        >
          <IoIosHeart className="icon" />
        </a>
        <div
          onClick={() => {
            download(true)
          }}
          className="menuItem"
        >
          <IoIosDownload className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Menu
