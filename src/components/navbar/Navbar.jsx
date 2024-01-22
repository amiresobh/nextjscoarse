import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <div>Logo</div>
        <div>
            <Link href="/about"> درباره ما </Link>
            <Link href="/contact"> تماس با ما </Link>
            <Link href="/"> خانه </Link>
        </div>

    </div>
  )
}

export default Navbar