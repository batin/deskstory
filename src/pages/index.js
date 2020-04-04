import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"
import { IoIosSearch } from 'react-icons/io'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"
import ReactCardCarousel from "react-card-carousel";
import Card from '../components/card'
import useAxios from 'axios-hooks'
 
const IndexPage = () => {
  const [apikey, setApikey] = useState("")
  const [res, setRes] = useState(null)
  const [mostUsedApps, setMostUsedApps] = useState([]);

  const  compare = (a, b) =>  {
    return b.duration - a.duration;
  }
  
  const handleApps = (data) => {
    let apps = []
    const keys = Object.keys(data.apps)
    keys.map(app => {
      const sites = Object.keys(data.apps[app])
      sites.map(site => {
        apps = [...apps, data.apps[app][site]]
      })
      apps = apps.sort(compare)
      setMostUsedApps(apps.slice(0,4))
    })
  }
  
  const hadleChange = async () => {
    if (apikey !== "") {
      try {
        setRes(null)
        const result = await axios.get(
          `https://desktime.com/api/v2/json/employee?apiKey=${apikey}&date=2020-04-03`
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
  }, [apikey])

  return (
    <Layout>
      <Seo title="Home" />
      <div className="content">
        <div className="text-center">
          <h1>The Badger</h1>
        </div>
        <div className="form mt-4 d-flex justify-content-center">
          <div className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Enter Your API Key"
              value={apikey}
              onChange={e => setApikey(e.target.value)}
              />
              <div className="search__icon">
                <IoIosSearch />
              </div>          
          </div>
        </div>
        <a
          className="where"
          href="https://desktime.com/app/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Where is it?
        </a>
      </div>
      {res?.name ? (
        <div className="w-100 h-100 carousel" >
          <ReactCardCarousel  
          // autoplay autoplay_speed={2500}
          >
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + 'min.'}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + 'min.'}
              mostUsedApps={mostUsedApps}
            />
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + 'min.'}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + 'min.'}
              mostUsedApps={mostUsedApps}
            />
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + 'min.'}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + 'min.'}
              mostUsedApps={mostUsedApps}
            />
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + 'min.'}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + 'min.'}
              mostUsedApps={mostUsedApps}
            />
            <Card
              name={res?.name}
              desktime={Math.floor(res?.desktimeTime / 60) + 'min.'}
              productivity={res?.productivity?.toFixed(1)}
              efficiency={res?.efficiency?.toFixed(2)}
              group={res?.group}
              atWorkTime={Math.floor(res?.atWorkTime / 60) + 'min.'}
              mostUsedApps={mostUsedApps}
            />

          </ReactCardCarousel>
        </div>
      ) : (
        <div />
      )}
    </Layout>
  )
}

export default IndexPage
