import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"
import { IoIosSearch } from 'react-icons/io'
import "./index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
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
          `https://desktime.com/api/v2/json/employee?apiKey=${apikey}`
        )
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
        <div className="content">
          <div className="info row text-center">
            <h4 className="col-6">Name:</h4>{" "}
            <p className="col-6">{res?.name}</p>
            <h4 className="col-6">Desktime:</h4>{" "}
            <p className="col-6">{Math.floor(res?.desktimeTime / 60)}min.</p>
            <h4 className="col-6">Productivity:</h4>{" "}
            <p className="col-6">{res?.productivity?.toFixed(1)}%</p>
            <h4 className="col-6">Efficiency:</h4>{" "}
            <p className="col-6">{res?.efficiency?.toFixed(2)}%</p>
          </div>
            <h4 className='text-center mt-3'>Most used apps:</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {
                mostUsedApps.map(app => {
                  return (
                    <div className='mostUsedApp col-8'>
                    <p>{app.name}</p>
                  </div> 
                  )
                })
              }
            </div>
        </div>
      ) : (
        <div />
      )}
    </Layout>
  )
}

export default IndexPage
