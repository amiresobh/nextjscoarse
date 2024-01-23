import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <h2>خطای 404</h2>
        <p> متاسفانه صفحه ای که به دنبال آن هستید وجود ندارد </p>
        <Link href='/'> بازگشت به صفحه نخست </Link>
    </div>
  )
}

export default NotFound