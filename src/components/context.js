import React, { useReducer, createContext } from "react"

const initialState = {
  user: {
    desktimeData: {},
    emoji: null,
  },
}

const AuthContext = createContext({
  user: {
    desktimeData: {},
    emoji: null,
  },
  setDesktimeData: data => {},
  setEmoji: data => {},
})

function authReducer(state, action) {
  switch (action.type) {
    case "setDesktimeData": {
      return {
        ...state,
        user: {
          ...state.user,
          desktimeData: action.payload,
        },
      }
    }
    case "setEmoji": {
      return {
        ...state,
        user: {
          ...state.user,
          emoji: action.payload,
        },
      }
    }
    default: {
      return state
    }
  }
}
function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  function setDesktimeData(data) {
    dispatch({
      type: "setDesktimeData",
      payload: data,
    })
  }
  function setEmoji(data) {
    dispatch({
      type: "setEmoji",
      payload: data,
    })
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, setDesktimeData, setEmoji }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }
