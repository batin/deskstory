import React from "react"
import PropTypes from "prop-types"
import "../styles/card.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
// https://www.npmjs.com/package/react-circular-progressbar

const Card = ({
  name,
  desktime,
  productivity,
  efficiency,
  mostUsedApps,
  atWorkTime,
  group,
}) => {
  return (
    <div className="myCard">
      <div className="profilePic">
        <div className="ppBorder">
          <p>👽</p>
        </div>
      </div>
      <div className="nameTag">
        <div className="ntBorder">
          <h5 className="card-title name">
            {name} / {group}
          </h5>
        </div>
      </div>
      <div className="chart">
        <div className="d-flex w-100 mt-2 text-center">
          <div className="d-flex flex-column">
            <CircularProgressbar
              className="circler p-3"
              value={productivity}
              text={`${productivity}%`}
              strokeWidth={5}
            />
            <p className="title">Productivity</p>
          </div>
          <div className="d-flex flex-column">
            <CircularProgressbar
              className="circler p-3 green"
              value={efficiency}
              text={`${efficiency}%`}
              strokeWidth={5}
            />
            <p className="title">Efficiency</p>
          </div>
        </div>
      </div>
      <div className="d-flex w-100">
        <div className="ml-3 mr-3 nameTag">
          <div className="ntBorder">
            <h5 className="card-title">{desktime}</h5>
          </div>
          <p className="title pt-2">Desk Time</p>
        </div>
        <div className="ml-3 mr-3 nameTag">
          <div className="ntBorder">
            <h5 className="card-title">{atWorkTime}</h5>
          </div>
          <p className="title pt-2">Time At Work</p>
        </div>
      </div>
      <div className="container mostUsedApps d-flex w-100 flex-column">
        <p className="title py-2 mx-auto">Most Used Apps</p>
        {mostUsedApps.map((app, key) => {
          return (
            <div key={key}>
              <p>{app.name}</p>
              {console.log(app.duration / 100)}
              <div class="progress" style={{ width: `${app.duration % 100}` }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: `${app.duration % 100}` }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.node.isRequired,
  desktime: PropTypes.node.isRequired,
  productivity: PropTypes.node.isRequired,
  efficiency: PropTypes.node.isRequired,
  mostUsedApps: PropTypes.array.isRequired,
}

export default Card