import React, {useState} from "react"

const TeamForm = props=>{
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handleChange = e=>{
        setMember({...member, [e.target.name]: e.target.value})
    }

    const submitForm = e =>{
        e.preventDefault();
        props.addNewTeamMember(member)
        setMember({
            name: "",
            email: "",
            role: ""
        })
    }

    return (
      <form onSubmit ={submitForm}>

          <label htmlFor = "name">Name</label>
          <input
          id = "name"
          type = "text"
          name = "name"
          onChange = {handleChange}
          value = {member.name}
          />

          <label htmlFor = "email">Email</label>
          <input 
            id = "email"
            type = "text"
            name = "email"
            onChange = {handleChange}
            value = {member.email}
            />

          <label htmlFor = "role">Role</label>
          <input 
            id = "role"
            type = "text"
            name = "role"
            onChange = {handleChange}
            value = {member.value}
            />
         <button type = 'submit'>Add</button>         

      </form>
    )
}
export default TeamForm;
