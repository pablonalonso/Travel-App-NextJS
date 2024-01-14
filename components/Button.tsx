import Image from 'next/image'
import React from 'react'

type buttonProps = {
  type: "button"
  title: string
  icon?: string
  variant: string
  full?: boolean
}

const Button = ({type, title, icon, variant}: buttonProps) => {
  return (
    <button type={type} className={`flex justify-center items-center gap-3 px-8 py-4 rounded-2xl cursor-pointer ${variant}`}>
      { icon && <Image src={icon} alt='' width={25} height={25}/>}
      <label className='whitespace-nowrap font-bold'>{title}</label>
    </button>
  )
}

export default Button