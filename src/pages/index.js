import React, { useState } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import axios from 'axios'

const IndexPage = () => {
  const [apikey, setApikey] = useState('')

  const hadleChange = async () => {
    if (apikey !== '') {
      const res = await axios.get(`https://desktime.com/api/v2/json/employee?apiKey=${apikey}&id=190586&date=2020-04-01`)
      console.log(res)
    }
  }

  hadleChange()

  return (
    <Layout>
      <Seo title='Home' />
      <div className='container'>
        <h1>Api key:</h1>
        <a href='https://desktime.com/app/api'>Where is it?</a>
        <input value={apikey} onChange={e => setApikey(e.target.value)} />
        {apikey === '' ? <div /> : <p>check log pls</p>}
      </div>
    </Layout>
  )
}

export default IndexPage
