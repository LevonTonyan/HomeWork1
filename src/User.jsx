import React from 'react'

const User = (props) => {

    return (
      <div className='greething'>
             <h1>Welcome dear {props.user}!!!!</h1>
      </div>
   
  )
}

export default User