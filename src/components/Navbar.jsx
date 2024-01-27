import React from 'react'
import styles from '../styles/style'
import { useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav className='w-full flex justify-between py-2 px-5 z-10 shadow-md items-center'>
      <h1 className='text-2xl font-bold cursor-pointer' onClick={()=> {navigate('/')}}>palette <span className=' font-semibold text-3xl text-blue-700'>Pro</span> </h1>
      <button 
      className={`${styles.button}`}
      onClick={()=> {navigate('/login')}}
      
      >Login</button>
    </nav>
  )
}

export default Navbar