import React, { useState, useRef, useContext } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"
import { AuthContext } from "../components/context"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { navigate } from "gatsby"
import EmojiButton from "../components/emoji-button"
import { IoIosHeart } from "react-icons/io"

const IndexPage = () => {
  const [apikey, setApikey] = useState("")
  const [date, setDate] = useState(new Date())
  const [emoji, setEmoji] = useState("⏳")
  const userContext = useContext(AuthContext)
  const apiKeyInput = useRef()
  const compare = (a, b) => {
    return b.duration - a.duration
  }

  const handleApps = data => {
    let apps = []
    const keys = Object.keys(data.apps)
    keys.forEach(app => {
      const sites = Object.keys(data.apps[app])
      sites.forEach(site => {
        apps = [...apps, data.apps[app][site]]
      })
    })
    if (apps.length === 0) {
      return null
    } else {
      apps = apps.sort(compare)
      return apps.slice(0, 4)
    }
  }

  const fetchDesktimeData = async () => {
    let d = [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2),
      ("0" + date.getDate()).slice(-2),
    ].join("-")
    if (apikey !== "") {
      try {
        const result = await axios.get(
          `https://desktime.com/api/v2/json/employee?apiKey=${apikey}&date=${d}`
        )
        return result.data
      } catch (err) {
        console.log(err)
      }
    }
  }

  const setGlobalObject = async () => {
    try {
      var response = await fetchDesktimeData()
      if (response) {
        const data = {
          name: response.name,
          group: response.group,
          efficiency: response.efficiency,
          productivity: response.productivity,
          desktimeTime: response.desktimeTime,
          atWorkTime: response.atWorkTime,
          mostUsedApps: handleApps(response),
        }
        userContext.setDesktimeData(data)
        userContext.setEmoji(emoji)
        navigate("/badges")
      } else {
        apiKeyInput.current.className =
          apiKeyInput.current.className + " input-error"
      }
    } catch (err) {
      console.log("Error occured while setting global object!", err)
    }
  }

  const isItEmpty = (event, limit) => {
    if (event.target.value.length < limit) {
      if (!event.target.className.includes("input-error")) {
        event.target.className = event.target.className + " input-error"
      }
    } else {
      event.target.className = event.target.className.replace("input-error", "")
    }
  }
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="date" onClick={onClick}>
      {value}
    </button>
  )
  return (
    <Layout colorState={"4"}>
      <Seo title="Home" />
      <a
        href="https://github.com/batin/deskstory"
        target="_blank"
        rel="noopener noreferrer"
        className="menu menuItem ease"
      >
        <IoIosHeart className="icon" />
      </a>
      <div className="home">
        <div className="top d-flex flex-column justify-content-center align-items-center">
          <EmojiButton
            id="selectedEmoji"
            text={emoji}
            disabled
            parentCallback={() => setEmoji(emoji)}
          />
          <div className="key mt-5">
            <input
              type="text"
              className={"search-input"}
              placeholder="API KEY"
              value={apikey}
              onChange={e => setApikey(e.target.value)}
              onBlur={event => isItEmpty(event, 10)}
              ref={apiKeyInput}
            />
          </div>
          <a
            className="where pb-4 pt-2"
            href="https://desktime.com/app/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHERE IS MY API KEY ?
          </a>
          <DatePicker
            disabledKeyboardNavigation
            id="datePicker"
            className="date"
            selected={date}
            onChange={date => setDate(date)}
            customInput={<ExampleCustomInput />}
          />
        </div>
        <div className="bottom">
          <div className="container emojis pt-2 d-flex flex-column justify-content-center align-items-center align-content-center">
            <div className="row m-2 mt-4">
              <div className="col-3">
                <EmojiButton text="🙂" parentCallback={() => setEmoji("🙂")} />
              </div>
              <div className="col-3">
                <EmojiButton text="💀" parentCallback={() => setEmoji("💀")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😍" parentCallback={() => setEmoji("😍")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😘" parentCallback={() => setEmoji("😘")} />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <EmojiButton text="👽" parentCallback={() => setEmoji("👽")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😎" parentCallback={() => setEmoji("😎")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😈" parentCallback={() => setEmoji("😈")} />
              </div>
              <div className="col-3">
                <EmojiButton text="🤑" parentCallback={() => setEmoji("🤑")} />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <EmojiButton text="😀" parentCallback={() => setEmoji("😀")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😆" parentCallback={() => setEmoji("😆")} />
              </div>
              <div className="col-3">
                <EmojiButton text="👨🏼‍💻" parentCallback={() => setEmoji("👨🏼‍💻")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😇" parentCallback={() => setEmoji("😇")} />
              </div>
            </div>
            <button onClick={setGlobalObject} className="next-button">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
