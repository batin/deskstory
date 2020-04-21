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
      {state ? (
        <div>
          <div onClick={() => back(true)} className="menuItem">
            <IoMdArrowBack className="icon" />
          </div>
          <div
            onClick={() => {
              download(true)
            }}
            className="menuItem"
          >
            <IoIosDownload className="icon" />
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
            href="https://github.com/batin/badger"
            target="_blank"
            rel="noopener noreferrer"
            className="menuItem"
          >
            <IoIosHeart className="icon" />
          </a>
          {/* <TwitterShareButton
            title="Check out my work details "
            url={new Image(image.split(",")[1])}
            hashtags={["desktime", "badger"]}
            // via="https://github.com/batin/badger"
            imageURL={image}
            className="menuItem"
          >
            <TwitterIcon round size={30} />
          </TwitterShareButton>
          <FacebookShareButton
            quote={`Check out my work details`}
            imageURL={image}
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
          </LinkedinShareButton> */}
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

export default Menu
