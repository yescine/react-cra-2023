import React from 'react'

interface Props {
  children?:React.ReactNode
}

const Content = (props: Props) => {
  return (
    <div style={{padding:"0.1rem",marginTop:"0.1rem", border:"3px dashed blue"}}>
      <h1>App Footer</h1>
      {props.children}
    </div>
  )
}

export default Content
