import React from 'react'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Link from 'next/link';

type columnProps = {
  title: string;
  children: React.ReactNode;
}

const Column = ({title, children}: columnProps) => {
  return(
    <div>
      <h4 className='pb-3 font-bold text-center'>{title}</h4>
      <span className='text-gray-500'>
        {children}
      </span>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='flex flex-col items-center  lg:flex-row gap-6 container mx-auto px-20 py-20'>
      <div>
        <Image
          src={"hilink-logo.svg"}
          alt=''
          width={75}
          height={50}
        />
      </div>
      <div className='flex flex-col items-center lg:items-start gap-5 lg:flex-row w-full justify-evenly'>
        { FOOTER_LINKS.map( column => (
          <Column title={column.title} key={column.title}>
              <ul className='flex-col flex gap-2'>
                { column.links.map( link => (
                  <Link href={"#"} key={link}>{link}</Link>
                ))}
              </ul>
          </Column>
          ))}

        <Column title={FOOTER_CONTACT_INFO.title}>
            <ul className='flex flex-col gap-2 items-center'>
              { FOOTER_CONTACT_INFO.links.map( (link, index) => (
                <Link key={index} href={"#"}>{link.label}: <span className='font-bold text-black'>{link.value}</span></Link>
              ))}
            </ul>
        </Column>

        <Column title={SOCIALS.title}>
            <ul className='flex flex-row lg:flex-col gap-2'>
              { SOCIALS.links.map( (link, index) => (
                <Image src={link} key={index} alt='' width={25} height={25}/>
              ) )}
            </ul>
        </Column>
      </div>
    </footer>
  )
}

export default Footer