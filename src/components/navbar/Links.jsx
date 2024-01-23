import React from 'react'
import Link from 'next/link'


const Links = ({className}) => {
    const links = [
        {
            title: 'خانه',
            path: '/'
        },
        {
            title: 'خدمات',
            path: '/services'
        },
        {
            title: 'نوبت دهی آنلاین',
            path: '/schedule'
        },
        {
            title: 'اخبار و مقالات',
            path: '/blog'
        },
        {
            title: 'آموزش ها',
            path: '/learnings'
        },
        {
            title: 'فرم ها',
            path: '/forms'
        },
        {
            title: 'درباره ما',
            path: '/about'
        },
        {
            title: 'تماس با ما',
            path: '/contact'
        },
    ]
  return (
    <div className={className}>
        {links.map((link, index) => {
            return(
                <Link className='mx-6' href={link.path} key={index}> {link.title} </Link>
            )
        })}
    </div>
  )
}

export default Links