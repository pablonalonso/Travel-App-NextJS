import { PEOPLE_URL } from "@/constants"
import { url } from "inspector"
import Image from "next/image"

type campProps = {
  backgroundImage: string
  title: string
  subtitle: string
  peopleJoined: string
}

const Site = ({ backgroundImage, title, subtitle, peopleJoined }: campProps) => {
  return(
    <div className={` min-w-[800px] rounded-2xl ${backgroundImage} `} >
      <div className=" p-5 h-full flex flex-col items-start justify-between">
        <div className="flex gap-3">
          <div className="btn_green rounded-full p-4">
            <Image
            src={"folded-map.svg"}
            alt=""
            width={25}
            height={25}
            />
          </div>
          <div className="text-white">
              <h4 className="font-bold">{title}</h4>
              <p>{subtitle}</p>
            </div>
        </div>

        <div className="flex gap-5  text-white">
          <div className="flex -space-x-2">
            { PEOPLE_URL.map((url) => (
            <Image
            key={url}
            src={url}
            alt=""
            width={30}
            height={30}
            />
          ))}
          </div>
          <p className="font-bold">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="relative lg:mb-20">
        <div className='relative container  mx-auto lg:px-14 h-[500px] py-5 flex gap-5 hide-scrollbar overflow-x-auto'>
          <Site 
            backgroundImage="img-1"
            title="Miami"
            subtitle="Florida, United States"
            peopleJoined="+75 people joined"
          />
          <Site 
            backgroundImage="img-2"
            title="Vancouver"
            subtitle="British Columbia, Canada"
            peopleJoined="+50 people joined"
          />
        </div>
        <div className="relative mx-5 sm:mx-auto flex flex-col gap-6 max-h-[400px]  max-w-[500px] btn_green lg:absolute lg:top-[60%]   lg:left-[700px] p-8 rounded-2xl">
          <h4 className="text-center xl-text-left text-3xl xl:text-4xl"><strong>Feeling Lost</strong> And Not Knowing The Way?</h4>
          <p> Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That&apos;s why we are here for those of you who want to start an adventure</p>

        </div>
    </section>
    
  )
}

export default Camp