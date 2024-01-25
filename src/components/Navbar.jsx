import React from 'react'
import styles from '../styles/style'
import { useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <navbar className='w-full flex justify-between py-2 px-5 z-10 shadow-md items-center'>
      <h1 className='cursor-pointer' onClick={()=> {navigate('/')}}>Palette</h1>
      <button 
      className={`${styles.button}`}
      onClick={()=> {navigate('/login')}}
      
      >Login</button>
    </navbar>
  )
}

export default Navbar