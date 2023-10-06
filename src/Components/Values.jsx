import React from "react"
import image from '../img/download3.png'
import image2 from '../img/TEDX.png'
import image3 from '../img/download4.png'

const Values =  () => {
  return(
    <div className="flex  justify-center pt-[2rem] flex-column gap-2 flex-wrap min-[1159px]:gap-0">

    <div className="md:flex flex-row">
     <div className=" bg-[#1c2123] text-white w-[24rem] h-[16rem] pt-[2rem] pl-[2rem]">
          <p className="text-4xl font-[Poppins] pb-[2rem]">Our Mission</p>
          <p className="max-w-[20rem] font-[Poppins] text-lg"> TED is on a mission to discover and spread ideas that spark imagination, embrace possibility and catalyze impact. </p>
     </div>
     <div className="w-[24rem] h-[16rem]">
          <img src={image3}></img>
     </div>
     </div>

     <div className="min-[1159px]:flex flex-row">
     <div className="w-[24rem] h-[16rem]">
          <img src={image}></img>
     </div>
     <div className=" bg-[#1c2123] text-white w-[24rem] h-[16rem] pt-[2rem] pl-[2rem]">
          <p className="text-4xl font-[Poppins] pb-[2rem]">Our Organization</p>
          <p className="max-w-[20rem] font-[Poppins] text-lg"> TED Conferences, LLC is an American-Canadian non-profit media organization that posts international talks online for free. </p>
     </div>
     </div>

     <div className="min-[1159px]:flex flex-row">
     <div className=" bg-[#1c2123] text-white w-[24rem] h-[16rem] pt-[2rem] pl-[2rem]">
          <p className="text-4xl font-[Poppins] pb-[2rem]">What is TEDx</p>
          <p className="max-w-[20rem] font-[Poppins] text-lg"> TEDx are independent events similar to TED in presentation. They can be organized by anyone who obtains a free license from TED. </p>
     </div>
     <div className="w-[24rem] h-[16rem]">
          <img src={image2}></img>
     </div>
     </div>
     
        
    </div>
  )
}

export default Values