import React from 'react'

const Welcome = ({personName,className}) => {
  return (
   <span className={"font-medium text-2xl md:text-3xl"+" "+className}>{"🙌"+personName+" عزیز خوش امدی "}</span>
  )
}

export default Welcome
