import React, { useState } from "react"
import {
  IoMdMenu,
  IoMdArrowBack,
  IoIosDownload,
  IoIosHeart,
  IoMdColorPalette,
} from "react-icons/io"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
const Menu = ({ nextColor, download, back }) => {
  const [state, setState] = useState(false)
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
          <TwitterShareButton
            title="Check out my work details"
            url="https://github.com/batin/badger"
            hashtags={["desktime", "badger"]}
            // via="https://github.com/batin/badger"
            className="menuItem"
          >
            <TwitterIcon round size={30} />
          </TwitterShareButton>
          <FacebookShareButton
            quote="Check out my work details"
            url="https://github.com/batin/badger"
            className="menuItem"
          >
            <FacebookIcon round size={30} />
          </FacebookShareButton>
          <LinkedinShareButton
            title="Check out my work details"
            url="https://github.com/batin/badger"
            source="badger"
            className="menuItem"
          >
            <LinkedinIcon round size={30} />
          </LinkedinShareButton>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

export default Menu
