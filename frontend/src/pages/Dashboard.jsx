import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Goalform from '../components/Goalform'

function Dashboard() {

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect (() => {
    if(!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
    <section className="heading">
      <h2>Welcome {user && user.name}</h2>
      <p>Goals Dashboard</p>
    </section>
    <Goalform />
    </>
  )
}

export default Dashboard
