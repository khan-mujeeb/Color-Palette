import React from 'react'
import styles from '../styles/style'
import { useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav className='w-full flex justify-between py-2 px-5 z-10 shadow-md items-center'>
      <h1 className='cursor-pointer' onClick={()=> {navigate('/')}}>Palette</h1>
      <button 
      className={`${styles.button}`}
      onClick={()=> {navigate('/login')}}
      
      >Login</button>
    </nav>
  )
}

export default Navbar