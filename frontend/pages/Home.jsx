import React from 'react'


const Home = () => {
  return (
    
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div class="container px-10">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px] space-y-10">
                <h1 className="text-[36px] leading-[46px] font-[700] md:text-[60px] md:leading-[70px]"> We help patients live a longer, healthier life
                </h1>          

                <p className="text_para w-[800px]">
                
"Empowering over 1,000 individuals to realize their optimal health and wellness, we stand as a beacon of transformative care in the medical field. Our unwavering commitment to your health goals is at the heart of our mission. With a dedicated team of experienced healthcare professionals, we have been instrumental in guiding our patients on a journey toward vitality and well-being. Your health is our priority, and we take pride in being a trusted partner on your path to a healthier, happier life. Welcome to a medical experience designed to inspire, support, and lead you towards a brighter, healthier future."
                </p>

                <button className='p-4 rounded-2xl bg-blue-600 text-white'>
                  Request an appointment
                </button>
              </div>

              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[50px]">
              <div className="lg:w-1/3 md:w-full text-center">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-yellow-500 rounded-full block mt-[-14px]" />
              </div>


              <div className="lg:w-1/3 md:w-full text-center">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-teal-500 rounded-full block mt-[-14px]" />
              </div>

              <div className="lg:w-1/3 md:w-full text-center">
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg-leading-[54px] font-[700]">
                  30+
                </h2>
                <span className="w-[100px] h-2 bg-purple-500 rounded-full block mt-[-14px]" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home