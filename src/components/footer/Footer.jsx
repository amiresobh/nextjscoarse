import React from 'react'
import Image from 'next/image'
import Logo from '@/app/assets/imgaes/logo.png'
const Footer = () => {
  return (
    <div className='flex justify-between items-center mt-10 bg-SoftTextColor rounded-t-xl px-10'> 
      <div>
        <p className='font-EstedadBold'>
          کلیه حقوق این وب سایت متعلق به مرکز طب کار آیین می باشد.
        </p>
      </div>
      <div>
        <Image src={Logo} width={50} height={50}/>
      </div>
    </div>
  )
}

export default Footer