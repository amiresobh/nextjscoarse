import { add_post_action, delete_post_action } from '@/lib/actions'
import React from 'react'

const Test = () => {
  return (
    <div>
        <form action={delete_post_action}>
            {/* <input type='text' placeholder='تیتر' name='title'/>
            <input type='text' placeholder='متن پست' name='description' /> */}
            <input type='text' placeholder='آدرس پست'  name='slug'/>
            {/* <input type='text' placeholder='شماره کاربر' name='userId' /> */}
            <button >انتشار</button>

        </form>
    </div>
  )
}

export default Test