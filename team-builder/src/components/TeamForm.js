import React, {useState} from "react"

const TeamForm = props=>{
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChange = e=>{
        setMember({... member, [e.target.name]: e.target.value})
    }

    return (
      <form>

          <label htmlFor = "name">Name</label>
          <input
          id = "name"
          type = "text"
          name = "name"
          onChange = {handleChange}
          />

          <label htmlFor = "email">Email</label>
          <input 
            id = "email"
            type = "text"
            name = "email"
            onChange = {handleChange}
            />

<label htmlFor = "role">Role</label>
          <input 
            id = "role"
            type = "text"
            name = "role"
            onChange = {handleChange}
            />

      </form>
    )
}
export default TeamForm;
