import { useState, useContext, useEffect } from "react"
import {  useHistory } from "react-router-dom"
import FirebaseContext from "../context/firebase"

export default function Login() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [emailAddress,  setEmailAddress] =  useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState("")
  const isInvalid = password === '' || emailAddress === ''

  const handleLogin = () => {}

  useEffect (() => {
    document.title = "Login - ChatScape"
  }, [])

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <p> by the order peaky fucking blinders!</p>
    </div>
  )
}