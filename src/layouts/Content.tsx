import React from 'react'

interface Props {
  children:React.ReactNode
}

const Content = (props: Props) => {
  return (
    <div style={{padding:"2rem", border:"5px dashed black", height:"50vh"}}>
      {props.children}
    </div>
  )
}

export default Content
