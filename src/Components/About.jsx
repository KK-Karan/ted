import React from "react"
import ReactPlayer from 'react-player'

const About =  () => {
  return(
    <div>
    <div className="pt-[10rem] flex justify-center shrink bg-gradient-to-r from-[#ed4343] via-[#efa45f] to-[#ea193c]">
    <ReactPlayer url="https://www.youtube.com/watch?v=N-l1xtCMnpw&ab_channel=TEDxTalks" controls/>
    </div>
     <p className=" text-6xl flex justify-center  pt-[2rem] bg-[#1c2123] align-center pb-[2rem] font-bold text-[questrial] text-[#fff3f3]">WHO WE ARE</p>
  </div>
  )
}

export default About