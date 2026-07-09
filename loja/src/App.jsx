
import './App.css'
import { FormLogin } from './components/Form-login'
import { useState } from 'react'

function App() {

  const fakeApi = {
    name: 'teste',
    password: '123'
  }

  const [formData, setFormData] = useState({
    name: '',
    password: ''
  })

  function verifyFormData() {
    if (formData.name.trim() === fakeApi.name && formData.password.trim() === fakeApi.password) {
      alert('Login successful!')
      return true
    } else {
      alert('Invalid username or password.')
      return false
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    

    alert("form submitted")
    alert(`Username: ${formData.name}, Password: ${formData.password}`)
    verifyFormData()
  }


  return (
    <div className="app-wrapper">
      <div className="login-card">
        <div className="login-card__header">
          <h1>Create Account</h1>
          <p>Complete the form below to get started.</p>
        </div>
        <FormLogin formData={formData} setFormData={setFormData} handlerSubmit={handlerSubmit} />
      </div>
    </div>
  )
}

export default App
