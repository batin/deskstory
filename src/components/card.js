import React from 'react'
import PropTypes from 'prop-types'
import '../styles/card.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
// https://www.npmjs.com/package/react-circular-progressbar

const Card = ({ name, desktime, productivity, efficiency, mostUsedApps, atWorkTime, group }) => {
  return (
    <div className='myCard'>
      <div className='profilePic'>
        <div className='ppBorder'>
          <p>👽</p>
        </div>
      </div>
      <div className='nameTag'>
        <div className='ntBorder'>
          <h5 className='card-title'>{name} / {group}</h5>
        </div>
      </div>
      <div className='chart'>
        <div className='d-flex w-100 mt-2 text-center'>
          <div className='d-flex flex-column'>
            <div className='a'>
              <div className='b'>
                <svg
                  class='progress-ring'
                  width='75'
                  height='75'
                >
                  <defs>
                    <filter id='dropshadow' x='-40%' y='-40%' width='180%' height='180%' filterUnits='userSpaceOnUse'>
                      <feGaussianBlur stdDeviation='3' />
                      <feOffset dx='5' dy='5' result='offsetblur' />
                      <feOffset dx='-5' dy='-5' result='offsetblur' />
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in='SourceGraphic' />
                        <feMergeNode in='SourceGraphic' />
                      </feMerge>
                    </filter>
                  </defs>
                  <circle
                    class='progress-ring__circle'
                    stroke-width='2'
                    fill='transparent'
                    r='35'
                    cx='50%'
                    cy='50%'
                    style={{ filter: 'url(#dropshadow)' }}
                  />

                </svg>
                <div className='c'>
                  <div className='d'>
                      %65
                  </div>
                </div>
              </div>

            </div>
            {/* <CircularProgressbar className='circler p-3' value={productivity} text={`${productivity}%`} strokeWidth={5} /> */}
            <p className='title'>Productivity</p>
          </div>
          <div className='d-flex flex-column'>
            <CircularProgressbar className='circler p-3' value={efficiency} text={`${efficiency}%`} strokeWidth={5} />
            <p className='title'>Efficiency</p>
          </div>
        </div>
      </div>
      <div className='d-flex w-100'>
        <div className='ml-3 mr-3 nameTag'>
          <div className='ntBorder'>
            <h5 className='card-title'>{desktime}</h5>
          </div>
          <p className='title pt-2'>Desk Time</p>
        </div>
        <div className='ml-3 mr-3 nameTag'>
          <div className='ntBorder'>
            <h5 className='card-title'>{atWorkTime}</h5>
          </div>
          <p className='title pt-2'>Time At Work</p>
        </div>
      </div>
      <div className='container mostUsedApps d-flex w-100 flex-column'>
        <p className='title py-2'>Most Used Apps</p>
        {mostUsedApps.map((app, key) => {
          return (
            <div key={key}>
              <p>{app.name}</p>
              <div class='progress mt-2 w-100'>
                <div class='progress-bar' role='progressbar' style={{ width: '100%' }} aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' />
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
  mostUsedApps: PropTypes.array.isRequired
}

export default Card
