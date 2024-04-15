import TeamMemberCard from "./TeamMemberCard";
import {useContext} from 'react';;
import DataProvider from "./context/DataContext";

const TeamMembers = () => {

  const {employees} = useContext(DataProvider);
  
  return (
    employees.map((employee) => (
        <TeamMemberCard key={employee.id} employee={employee} />
    ))  
  )

}

export default TeamMembers;