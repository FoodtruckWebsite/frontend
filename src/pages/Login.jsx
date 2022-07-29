import React, { useState, useEffect } from 'react'

const Login = () => {

  return (
    <div>
    <header>Log In</header>
    <form>
        <div>
            <input type="username" placeholder="Username" name="username"/>
        </div>
        <div>
            <input type="password" placeholder="Password" name="pw"/>
        </div>
        <div >
            <button>Log In</button>&nbsp;&nbsp;&nbsp;
        </div>
    </form>
      </div>
  )
}

export default Login