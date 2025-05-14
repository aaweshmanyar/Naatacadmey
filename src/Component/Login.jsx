import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Mail, KeyRound } from "lucide-react"
import Logo from "../../public/Images/naatacademylogo.png"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Retrieve saved user credentials from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      // Successful login
      localStorage.setItem("isLoggedIn", "true")
      navigate("/dashboard")
    } else {
      alert("Invalid credentials. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex justify-center">
          <div className="relative h-16 w-16">
            <img src={Logo} alt="Company Logo" className="object-contain h-full w-full" />
          </div>
        </div>

        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-semibold">Welcome!</h1>
          <p className="text-gray-700">Please Login to Access your Account.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center rounded-full border border-gray-300 px-4 py-2">
              <Mail className="mr-2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-none bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center rounded-full border border-gray-300 px-4 py-2">
              <KeyRound className="mr-2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-green-500 py-3 text-white transition-colors hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
