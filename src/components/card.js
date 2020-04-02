import React from 'react'
import PropTypes from 'prop-types'
import '../styles/card.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
// https://www.npmjs.com/package/react-circular-progressbar

const Card = ({ name, desktime, productivity, efficiency, mostUsedApps }) => {
  return (
    <div className='myCard'>
      <div className='profilePic'>
        <div className='ppBorder'>
          <p>👽</p>
        </div>
      </div>
      <div className='nameTag'>
        <div className='ntBorder'>
          {/* <h5 className='card-title'>{name}</h5> */}
          <h5 className='card-title'>Furkan Demirturk / Developer</h5>
        </div>
      </div>
      <div className='chart'>
        <div className='d-flex w-100 mt-4'>
          <CircularProgressbar className='circler p-3' value={productivity} text={`${productivity}%`} strokeWidth={5} />
          <CircularProgressbar className='circler p-3' value={efficiency} text={`${efficiency}%`} strokeWidth={5} />
        </div>
      </div>
      <div className='d-flex w-100 h-100'>
        <div className='ml-3 mr-3 nameTag'>
          <div className='ntBorder'>
            <h5 className='card-title'>{desktime}</h5>
          </div>
        </div>
        <div className='ml-3 mr-3 nameTag'>
          <div className='ntBorder'>
            <h5 className='card-title'>{desktime}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.node.isRequired,
  desktime: PropTypes.node.isRequired,
  productivity: PropTypes.node.isRequired,
  efficiency: PropTypes.node.isRequired
  // mostUsedApps: PropTypes.array.isRequired
}

export default Card
