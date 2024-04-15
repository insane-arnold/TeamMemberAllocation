import {useState} from 'react';
import {useContext} from 'react';
import DataContext from './context/DataContext';

const GroupedTeamMembers = () => {

  const {employees, selectedTeam, setTeam} = useContext(DataContext);
  
  const [teamMembers,setTeamMembers] = useState(()=>{
      let teamMemberMap = new Map();

      employees.forEach((employee) =>{
        if(teamMemberMap.has(employee.teamName)){
          teamMemberMap.get(employee.teamName).push(employee);
        }else{
          teamMemberMap.set(employee.teamName,[employee]);
        }
      });
      return teamMemberMap;
    });
  
  const [uncollapseList,setUncollapseList] = useState([selectedTeam]);

  function handleCollapseonClick(event){
    let tempList = [];
    const clickedTeam = event.currentTarget.querySelector("#cardHeader").textContent;
    if(!uncollapseList.includes(clickedTeam)){
      tempList.push(clickedTeam);
      setTeam(clickedTeam)
    }
    setUncollapseList(tempList); 
  }
  
  return (
    <main className="container">
      {
        Array.from(teamMembers.entries()).map(([team, employees])=>(
          <div key={team} className="card mt-2 mb-2" onClick={handleCollapseonClick} style={{cursor: "pointer"}}>
            <div className="card-header">
              <h5 id="cardHeader" className="mb-0">{team}</h5>
            </div>
            <div className={uncollapseList.includes(team) ? "": "collapse"}>
              {employees.map((employee)=>{
                return (
                  <div key={employee.id} className="card-body">
                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                    <p className="card-text text-center">
                      <b>Designation:</b> {employee.designation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          
        ))
      }
    </main>
  );
};

export default GroupedTeamMembers;
