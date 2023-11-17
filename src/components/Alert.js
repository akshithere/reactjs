import React from 'react'

function Alert(props) {
  const capitalise = (word)=>{
    let lower = word.toLowerCase();
    let upper = lower.toUpperCase();
     return upper.charAt(0) + lower.slice(1);
      }
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong> {capitalise(props.alert.type)} </strong> {props.alert.msg}

</div>
  )
}

export default Alert
