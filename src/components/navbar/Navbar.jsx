import React from 'react'
import Links from './Links'

const Navbar = () => {
  return (
    <div className='bg-ActiveColor rounded-3xl flex py-5 px-3'>
        <div>Logo</div>
        <div className='text-WhiteTextColor font-EstedadLight' >
            <Links className=''/>
        </div>

    </div>
  )
}

export default Navbar