import Image from "next/image"

const Guide = () => {
  return (
    <section className="mb-10">
      <div className='flex flex-col lg:flex-row justify-between container px-20'>
        <div className="flex flex-col  flex-1 p-10">
          <Image
          src={"camp.svg"}
          alt=""
          width={30}
          height={30}
          />
          <p className="text-center lg:text-left font-bold text-green-600">WE ARE HERE FOR YOU</p>
          <h3 className="text-center lg:text-left text-5xl font-bold">Guide You To Easy Path</h3>
        </div>
        <div className="flex items-end flex-1 p-10 text-gray-500">
          <p>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>
      
      <div className="flex items-start p-5 boat-image  container lg:mx-auto rounded-3xl h-[350px]  max-w-[1200px] overflow-hidden ">
        <div className="flex bg-white rounded-2xl p-3">
          <Image
            src={"meter.svg"}
            alt=""
            width={20}
            height={50}
          />
          <div className="flex flex-col justify-between pl-2">
            <div>
              <div className="flex gap-6">
                <p>Destination</p>
                <p className="font-bold text-green-600">48 minutes</p>
              </div>
              <p className="font-bold">Aguas Calientes</p>
            </div>
            <div>
              <p>Start Track</p>
              <p className="font-bold">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default Guide