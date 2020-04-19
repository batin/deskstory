import React, { useContext, useEffect, useState } from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../components/context"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
// import puppeteer from "puppeteer"

const Badges = () => {
  const userContext = useContext(AuthContext)
  const [colorState, setColorState] = useState(0)
  useEffect(() => {
    if (!userContext?.user?.emoji) {
      navigate("/")
    }
  }, [])

  const nextColor = () => {
    setColorState((colorState + 1) % 3)
  }

  const download = async () => {
    // try {
    //   let browser = await puppeteer.launch({ headless: false })
    //   let page = await browser.newPage()
    //   await page.goto("http://localhost:8000/")
    //   await page.screenshot({ path: "./image.jpg", type: "jpeg" })
    //   await page.close()
    //   await browser.close()
    // } catch (err) {
    //   console.log(err)
    // }
  }

  return (
    <Layout colorState={colorState}>
      <SEO title="Badges For Your Instagram Story" />
      <Menu
        back={() => navigate("/")}
        nextColor={nextColor}
        download={download}
      />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="profileInfo d-flex flex-column align-items-center justify-content-center">
          <div className="pp d-flex align-items-center justify-content-center">
            <p>{userContext.user.emoji}</p>
          </div>
          <div className="userInfo mt-3">
            <p>
              {userContext.user.desktimeData.name +
                " / " +
                userContext.user.desktimeData.group}
            </p>
          </div>
        </div>
        <div className="desktimeInfoContainer d-flex flex-column align-items-center justify-content-center">
          <div className="row my-2">
            <div className="d-flex flex-column align-items-center justify-content-center mr-4">
              <p>Desktime</p>
              <div className="desktimeBadge d-flex align-items-center justify-content-center">
                <p className={`text ${"coloredText" + colorState}`}>
                  {Math.floor(
                    userContext.user.desktimeData.desktimeTime / 3600
                  ) +
                    "H " +
                    Math.floor(
                      (userContext.user.desktimeData.desktimeTime / 60) % 60
                    ) +
                    "M"}
                </p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center ml-4">
              <p>Time At Work</p>
              <div className="timeAtWorkBadge d-flex align-items-center justify-content-center">
                <p className={`text ${"coloredText" + colorState}`}>
                  {Math.floor(userContext.user.desktimeData.atWorkTime / 3600) +
                    "H " +
                    Math.floor(
                      (userContext.user.desktimeData.atWorkTime / 60) % 60
                    ) +
                    "M"}
                </p>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="d-flex flex-column align-items-center justify-content-center mr-4">
              <p>Productivity</p>
              <div className="productivityBadge d-flex align-items-center justify-content-center">
                <p className={`text ${"coloredText" + colorState}`}>
                  {userContext.user?.desktimeData?.productivity?.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center ml-4">
              <p>Efficiency</p>
              <div className="efficiencyBadge d-flex align-items-center justify-content-center">
                <p className={`text ${"coloredText" + colorState}`}>
                  {userContext.user?.desktimeData?.efficiency?.toFixed(1)}%
                </p>
              </div>
            </div>
          </div>
        </div>
        {userContext.user?.desktimeData?.mostUsedApps ? (
          <div className="mostUsedApps ">
            <div className="title">
              <p>Most Used Apps</p>
            </div>
            <div className="mostUsedAppsContainer">
              {userContext.user?.desktimeData?.mostUsedApps?.map((app, key) => {
                return (
                  <div key={key} className="app p-1 px-3">
                    <p className={`appName ${"coloredText" + colorState}`}>
                      {app.name}
                    </p>
                    <div
                      className={`progressBar ${"coloredBackground" +
                        colorState}`}
                      role="progressbar"
                      style={{ width: `${(4 - key) * 25 + "%"}` }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <p>
                        {(Math.floor(app.duration / 3600) > 0
                          ? Math.floor(app.duration / 3600) + "H "
                          : false) +
                          Math.floor((app.duration / 60) % 60) +
                          "M"}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          false
        )}
      </div>
    </Layout>
  )
}

export default Badges
