import React from 'react'

const Contact = (props) => {
    setTimeout(()=>{
        props.history.push('/about')
    }, 2000);
  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </div>
  )
}

export default Contact