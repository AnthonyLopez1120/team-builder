import React, {useState} from 'react';

import './App.css';
import TeamForm from "./components/TeamForm"
import Team from './components/Team'

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { 
      name: 'Anthony',
      email: 'anthony.lopez@gmail.com',
      role: 'Full-Stack Engineer'
    }
    ])

    const addNewTeamMember = person => {
      const newTeamMember = {
        id: Date.now(),
        name: person.name,
        email:person.email,
        role: person.role
      }
      setTeamMembers([...teamMembers, newTeamMember])

    }
  

  return (
    <div className="App">
      <TeamForm addNewTeamMember = {addNewTeamMember}/>
      <Team team = {teamMembers}/>
    </div>
  );
}

export default App;
