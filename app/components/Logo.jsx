
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = ({textColor}) => {
    const router = useRouter()
  return (
    <div className={`uppercase cursor-pointer ${textColor}`} onClick={()=>router.push("/")}>Dronicx Auto</div>
  )
}

export default Logo