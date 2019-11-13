import React, {useState} from 'react';

import './App.css';
import TeamForm from "./components/TeamForm"

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1,
      name: 'Anthony',
      email: 'anthony.lopez@gmail.com',
      role: 'Full-Stack Engineer'
    }
    ])

    const addNewTeamMember = teamMembers => {
      const newTeamMember = {
        id: Date.now(),
        name: teamMembers.name,
        role: teamMembers.role
      }
      setTeamMembers([...teamMembers, newTeamMember])

    }
  

  return (
    <div className="App">
      <TeamForm addNewTeamMember = {addNewTeamMember}/>
    </div>
  );
}

export default App;
