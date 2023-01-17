import logo from './logo.svg';
import './App.css';
import {useState} from "react";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

function App() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const tasksAssigned = {
    a1: [1,],
    a2: [],
    a3: []
  };

  const [teams, setTeams] = useState(
      {
        team1: {members: [{name: "a1",  tasks: [], priority: 1}, {name: "a2", tasks: [], priority: 2}, {name: "a3", tasks: [], priority: 5}, {name: "a4", tasks: [], priority: 7}], count: 0},
        team2: {members: [{name: "b1",  tasks: [], priority: 1}, {name: "b2", tasks: [], priority: 2}, {name: "b3",  tasks: [], priority: 5}, {name: "b4",  tasks: [], priority: 7}], count: 0},
      }
  )
  // const teams = {
  //   team1: {members: [{a1: {tasks: [], priority: 1}}, {a2: {tasks: [], priority: 2}}, {a3: {tasks: [], priority: 5}}, {a4: {tasks: [], priority: 7}}], count: 0},
  //   team2: {members: [{b1: {tasks: [], priority: 1}}, {b2: {tasks: [], priority: 2}}, {b3: {tasks: [], priority: 5}}, {b4: {tasks: [], priority: 7}}], count: 0},
  // }const teams = {
  //   team1: {members: [{a1: {tasks: [], priority: 1}}, {a2: {tasks: [], priority: 2}}, {a3: {tasks: [], priority: 5}}, {a4: {tasks: [], priority: 7}}], count: 0},
  //   team2: {members: [{b1: {tasks: [], priority: 1}}, {b2: {tasks: [], priority: 2}}, {b3: {tasks: [], priority: 5}}, {b4: {tasks: [], priority: 7}}], count: 0},
  // }

  const createTeams = () => {
    // some logic to create teams object in which members are arranged acooring to priority
  }

  const assignToMember = (team, task) => {
    let teamObj = {...teams};
    const selectedTeamItem = teamObj[team];
    let memberNumber = (selectedTeamItem.count) % selectedTeamItem.members.length;
    console.log(selectedTeamItem, selectedTeamItem.members, selectedTeamItem.members[memberNumber], selectedTeamItem.members[memberNumber]["tasks"]);
    selectedTeamItem.members[memberNumber].tasks.push(task);
    selectedTeamItem.count++;
    setTeams(teamObj);
    console.log(teamObj);
  }

  const renderTeams = () => {
    return Object.keys(teams).map(key => {
      return key;
    })
  }

  const _onSelect = (team ) => {
    setSelectedTeam(team.value);
    assignToMember(team.value, Math.floor(Math.random()*10));
  }
  return (
    <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <div style={{width: "300px"}}>
        <Dropdown options={renderTeams()} onChange={_onSelect} value={selectedTeam} placeholder="Select a team" />
        <p>Current team: {JSON.stringify(teams)}</p>
      </div>
    </div>
  );
}

export default App;
