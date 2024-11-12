import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <main className="mt-10 mx-10 h-screen">
        <section className="bg-[#f9f8f6]">
          <header className="flex item-center justify-between bg-[#A29875] px-6 py-4 ">
            <h1 className="font text-4xl text-left pl-3 text-[#FFFFFF] 
            ">MANZZARI</h1>
          </header>
          <div className="flex items-center justify-between mx-auto max-w-5xl p-4">
            <div className="max-w-md leading-relexed h-full w-full">
              <h2 className="text-2xl text-[#000000] size-[60%]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h2>
                <p className="text-[#A29875] mb-4 mt-3 w-[400px] ">
                  An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                </p>
                <button className="px-6 py-2 mt-3 bg-[#b3a07d] text-white rounded hover:bg-[#a58f6c] transition">
                  Explore Now
                </button>
              </div>
              <div className=" flex-1 relative max-w-sm">
                <Image 
                  src="/Image/rs-group-wrap ⏵ rs-group (1).svg"
                  alt="Model showcasing jewelry"
                  width={300} 
                  height={400} 
           
                />
              </div>
          </div>
        </section>
       </main>
    </div>
  )
}

export default Header
