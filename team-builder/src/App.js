import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";

function App() {
  const [teamInfo, setTeamInfo] = useState([{name: 'Blair', email: 'blairreynolds4@gmail.com', role: 'intern'}])

  const addMember = (member) =>{
    setTeamInfo([...teamInfo, member])
  }

  return (
    <>
      {teamInfo.map(member => <TeamMember member={member}/>)}
      <Form teamInfo={teamInfo} addMember={addMember}/>
    </>
  );
}

export default App;
