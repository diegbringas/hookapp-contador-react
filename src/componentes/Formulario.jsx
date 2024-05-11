import { useEffect, useRef, useState } from "react"
import { useForm } from "../hooks/useForm"

export const Formulario = () => {

    const focusRef = useRef()

    console.log(focusRef)

    const initialForm =   {
      username: '',
      email:'',
      password: ''
}
    const {formState, userName,email,password, onInputChange} = useForm(initialForm) 


    const onSubmit = (event) => {
      event.preventDefault()
      console.log(formState)
    }

    useEffect(() => {
      focusRef.current.focus()
      }, [])
    
   

  return (
    
    <form onSubmit={onSubmit}>

      <div className="mb-3">
        <label htmlFor="userName" className="form-label">Username</label>
        <input 
          type="text" 
          className="form-control" 
          name="username" 
          placeholder="enter your username"
          value={userName}
          onChange={onInputChange}
        />
      </div>  

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input 
          ref ={focusRef}
          type="email" 
          className="form-control" 
          name="email"
          placeholder="enter your email"
          value={email}
          onChange={onInputChange}    
        />
      </div>
  
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
          ref = {focusRef}
          type="password" 
          className="form-control" 
          name="password" 
          placeholder="enter your password"
          value={password}
          onChange={onInputChange}
        />
      </div>
 
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
