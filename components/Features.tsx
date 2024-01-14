import { FEATURES } from "@/constants"
import Image from "next/image"

type itemProps = {
  title: string
  icon: string
  description: string
}

const Item = ({title, icon, description}: itemProps) => {
  return(
    <div className="flex flex-col items-start">
      <div className="bg-green-600 p-3 rounded-full">
        <Image
        src={icon}
        alt=""
        width={30}
        height={30}
        />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  )
}

const Features = () => {
  return (
    <section className='container px-20  mx-auto'>
      <div className=' lg:relative top-10 flex justify-center py-10'>
        <h1 className='font-bold text-5xl whitespace-nowrap'>Our Features</h1>
        <br />
        <div>
          <Image
            src={"camp.svg"}
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className='flex items-end flex-col lg:flex-row lg:items-center '>
        <Image
        src={"/phone.png"}
        alt=""
        width={300}
        height={300}
        className="rotate-0 lg:rotate-12"
        />

        <ul className="grid items-start md:grid-cols-2 p-5 gap-5">
          { FEATURES.map( feature => (
            <Item
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              key={feature.title}
            />
          ))}
        </ul>
  
      </div>
    </section>
  )
}

export default Features