import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className='flex container mx-auto  px-20 pt-5 justify-between items-center'>
      <Image src={"hilink-logo.svg"} alt="" width={100} height={50}/>
      <ul className="hidden lg:flex justify-around p-5 w-full">
        { NAV_LINKS.map( link => (
          <Link href={link.href} key={link.key} className="hover:font-bold transition-all">{link.label}</Link>
        ))}
      </ul>
      <div className="hidden lg:flex">
        <Button
        type="button"
        title="Log In"
        icon="user.svg"
        variant="btn_dark_green"
        />
      </div>
      <div className="flex lg:hidden">
        <Image src={"menu.svg"} alt="" height={25} width={25}/>
      </div>
    </nav>
  )
}

export default Navbar