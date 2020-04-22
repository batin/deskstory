import React from "react"
import PropTypes from "prop-types"

const EmojiButton = ({ text, parentCallback }) => {
  return (
    <button
      role="button"
      onClick={() => parentCallback(true)}
      className="emoji-button"
    >
      <span role="img" aria-describedby="Select your emoji" aria-label="emoji">
        {text}
      </span>
    </button>
  )
}

EmojiButton.propTypes = {
  parentCallback: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired,
}

export default EmojiButton
