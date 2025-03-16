import React from 'react'

const Welcome = ({personName,className=""}) => {
  return (
   <span className={"select-none font-medium text-xl md:text-3xl"+" "+className}>{"🙌"+personName+" عزیز خوش امدی "}</span>
  )
}

export default Welcome
