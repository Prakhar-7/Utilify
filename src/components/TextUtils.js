import React from 'react'
import { Link } from 'react-router-dom'

function TextUtils(props) {

  return (
    <div className="text-center">
        <Link className="navbar-brand" to="/"><div style={{fontSize: 200, color: props.mode === 'dark'?'white':'#042743'}}>TextUtils</div><div style={{fontSize: 30, color: props.mode === 'dark'?'white':'#042743'}}>TextUtils is the utility which can be used to manipulate your text in the way you want.</div><button type="button" className="btn btn-secondary my-5">Click here</button></Link>
    </div>
  )
}

export default TextUtils
