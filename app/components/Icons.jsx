import React from 'react'
// Setup icons and All Nav Bar 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import UserIcon from './UserIcon';
import Link from 'next/link';
function Icons() {
  return (
    <div className=" cursor-pointer flex items-center gap-4">
     <Link href="/menu">
        <FontAwesomeIcon className="hover:text-orange-600" icon={faSearch} />
      </Link>
      <Link href="/cart">
        <FontAwesomeIcon className="hover:text-orange-600" icon={faShoppingCart} />
      </Link>

      <UserIcon />
    </div>
  )
}

export default Icons
