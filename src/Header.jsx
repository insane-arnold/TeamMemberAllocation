import {useContext} from 'react';
import DataContext from './context/DataContext';

const Header = () => {

  const {employees, selectedTeam} = useContext(DataContext);
  const teamCount = employees.filter((employee) => employee.teamName === selectedTeam).length;
  
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Menber Allocation</h1>
          <h3>{selectedTeam} has {teamCount} {(teamCount>1) ? "members":"member"}</h3>
        </div>
      </div>
    </header>
  )
  
}

export default Header;