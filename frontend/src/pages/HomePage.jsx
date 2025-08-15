import {useState} from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUi from '../components/RateLimitedUi'

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(flase)

  return (
    <div className='min-h-screen'>
      <Navbar/>

      {isRateLimited && <RateLimitedUi/>}
    </div>
  )
}

export default HomePage
