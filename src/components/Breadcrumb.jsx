import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = () => {


  return (
    <nav className='text-sm text-gray-600 flex items-center flex-wrap gap-2'>
        <Link to={'/'} className='hover:underline'>Home</Link>
        <FaChevronRight className='text-xs' />
         <Link  className='hover:underline'>product</Link>

    </nav>
  )
}

export default Breadcrumb;