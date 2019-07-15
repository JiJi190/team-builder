import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";

function App() {
  const [teamInfo, setTeamInfo] = useState([])
  return (
    <>
      <Form teamInfo={teamInfo}/>
    </>
  );
}

export default App;
