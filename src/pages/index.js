import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"
import { IoIosSearch } from "react-icons/io"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import ReactCardCarousel from "react-card-carousel"
import Card from "../components/card"
import Card2 from "../components/card2"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Link } from "gatsby"
import EmojiButton from "../components/emoji-button"

const IndexPage = () => {
  const [apikey, setApikey] = useState("")
  const [res, setRes] = useState(null)
  const [mostUsedApps, setMostUsedApps] = useState([])
  const [date, setDate] = useState(new Date())
  const [emoji, setEmoji] = useState("⏳")
  const compare = (a, b) => {
    return b.duration - a.duration
  }

  const handleApps = data => {
    let apps = []
    const keys = Object.keys(data.apps)
    keys.map(app => {
      const sites = Object.keys(data.apps[app])
      sites.map(site => {
        apps = [...apps, data.apps[app][site]]
      })
      apps = apps.sort(compare)
      setMostUsedApps(apps.slice(0, 4))
    })
  }

  const hadleChange = async () => {
    let d = [
      date.getFullYear(),
      ("0" + (date.getMonth() + 1)).slice(-2),
      ("0" + date.getDate()).slice(-2),
    ].join("-")
    console.log(d)
    if (apikey !== "") {
      try {
        setRes(null)
        const result = await axios.get(
          `https://desktime.com/api/v2/json/employee?apiKey=${apikey}&date=${d}`
        )
        console.log(result)
        setRes(result.data)
        handleApps(result.data)
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    hadleChange()
  }, [apikey, date])

  return (
    <Layout>
      <Seo title="Home" />
      <div className="home">
        <div className="top d-flex flex-column justify-content-center align-items-center">
          <EmojiButton text={emoji} parentCallback={() => setEmoji("i")} />
          <div className="key mt-5">
            <input
              type="text"
              className="search-input"
              placeholder="API KEY"
              value={apikey}
              onChange={e => setApikey(e.target.value)}
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
            className="date"
            selected={date}
            onChange={date => setDate(date)}
          />
        </div>
        <div className="bottom">
          <div className="container emojis pt-2 d-flex flex-column justify-content-center align-items-center">
            <div className="row m-2 mt-5">
              <div className="col-3">
                <EmojiButton text="🙂" parentCallback={() => setEmoji("🙂")} />
              </div>
              <div className="col-3">
                <EmojiButton text="🥰" parentCallback={() => setEmoji("🥰")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😍" parentCallback={() => setEmoji("😍")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😘" parentCallback={() => setEmoji("😘")} />
              </div>
            </div>
            <div className="row m-2 mt-4">
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
            <div className="row m-2 mt-4">
              <div className="col-3">
                <EmojiButton text="😀" parentCallback={() => setEmoji("😀")} />
              </div>
              <div className="col-3">
                <EmojiButton text="😆" parentCallback={() => setEmoji("😆")} />
              </div>
              <div className="col-3">
                <EmojiButton text="☺️" parentCallback={() => setEmoji("☺️")} />
              </div>
              <div className="col-3">
                <EmojiButton
                  isActive
                  text="😇"
                  parentCallback={() => setEmoji("😇")}
                />
              </div>
            </div>
            <Link className="next-button" to="/badges">
              NEXT
            </Link>
          </div>
        </div>
      </div>
      {/* {res?.name ? (
        <div className="w-100 h-100 carousel">
          <ReactCardCarousel
          // autoplay autoplay_speed={2500}
          >
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + "min."}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + "min."}
              mostUsedApps={mostUsedApps}
            />
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + "min."}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + "min."}
              mostUsedApps={mostUsedApps}
            />
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + "min."}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + "min."}
              mostUsedApps={mostUsedApps}
            />
            <Card2
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + "min."}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + "min."}
              mostUsedApps={mostUsedApps}
            />
            <Card2
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + "min."}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + "min."}
              mostUsedApps={mostUsedApps}
            />
          </ReactCardCarousel>
        </div>
      ) : (
        <div />
      )} */}
    </Layout>
  )
}

export default IndexPage
