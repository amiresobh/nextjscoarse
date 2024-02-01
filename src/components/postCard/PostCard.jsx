import React from 'react'
import Image from 'next/image'

const PostCard = () => {
  return (
    <div>
        <div>
            <div>
                <Image src='@/' alt='Blog_Image' fill/>
            </div>
            <span className=''>1402.01.01 </span>
        </div>
        <div></div>
    </div>
  )
}

export default PostCard