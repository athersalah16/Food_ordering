'use client';
import {} from 'react'
import { useParams } from 'next/navigation';
import { useMenuContex } from '@/app/contex/useContex';
function page() {
  const {id} = useParams();
  const {menuData} = useMenuContex()
  
  return (
    
    <div>
      Burger
    </div>
  )
}

export default page
