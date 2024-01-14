import Image from "next/image"
import Button from "./Button"

const App = () => {
  return (
    <section className='lg:container overflow-hidden lg:rounded-3xl pattern-image lg:h-[500px] mx-auto p-20'>
      <div className=' h-full flex flex-col lg:flex-row '>
        <div className='h-full flex-1 flex  justify-center items-center'>
          <div className="flex flex-col gap-5 text-white text-left">
            <h2 className="text-5xl font-bold">Get For Free Now</h2>
            <p>Available on iOS and android, download now!</p>
            <div className="flex gap-5">
              <Button
                type="button"
                title="App Store"
                icon="apple.svg"
                variant="btn_white"
              />
              <Button
                type="button"
                title="Android"
                icon="android.svg"
                variant="btn_transparent"
              />
            </div>
          </div>
        </div>
        <div className='h-full flex-1 flex justify-center items-center pt-20'>
          <Image
            src={"/phones.png"}
            alt=""
            width={350}
            height={500}
          />
        </div>


      </div>

    </section>
  )
}

export default App