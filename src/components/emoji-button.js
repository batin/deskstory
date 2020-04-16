import React from "react"
import PropTypes from "prop-types"

const EmojiButton = ({ text, parentCallback }) => {
  return (
    <button onClick={() => parentCallback(true)} className="emoji-button">
      {text}
    </button>
  )
}

EmojiButton.propTypes = {
  parentCallback: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired,
}

export default EmojiButton
