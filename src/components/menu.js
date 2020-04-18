import React, { useState } from "react"
import {
  IoMdMenu,
  IoMdArrowBack,
  IoIosDownload,
  IoIosHeart,
  IoMdColorPalette,
} from "react-icons/io"

const Menu = ({ nextColor, download, back }) => {
  const [state, setState] = useState(true)
  return (
    <div className="menu">
      <div
        onClick={() => {
          setState(!state)
        }}
        className="menuItem d-flex justify-content-center align-items-center"
      >
        <IoMdMenu />
      </div>
      {state ? (
        <div>
          <div onClick={() => back(true)} className="menuItem">
            <IoMdArrowBack />
          </div>
          <div
            onClick={() => {
              download(true)
            }}
            className="menuItem"
          >
            <IoIosDownload />
          </div>
          <div
            onClick={() => {
              nextColor(true)
            }}
            className="menuItem"
          >
            <IoMdColorPalette />
          </div>
          <a
            href="https://github.com/batin/badger"
            target="_blank"
            rel="noopener noreferrer"
            className="menuItem"
          >
            <IoIosHeart />
          </a>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

export default Menu
