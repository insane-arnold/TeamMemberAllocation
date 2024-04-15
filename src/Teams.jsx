import {useContext} from 'react';
import DataContext from './context/DataContext';

const Teams = () => {

  const { selectedTeam, handleTeanSelectionChange } = useContext(DataContext);
  
  return (
    <div className="col-6">
      <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeanSelectionChange}>
        <option value="TeamA">Team A</option>
        <option value="TeamB">Team B</option>
        <option value="TeamC">Team C</option>
        <option value="TeamD">Team D</option>
      </select>
    </div>
  )

}

export default Teams;