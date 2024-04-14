import {Link} from 'react-router-dom';

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/GroupedTeamMembers'>Teams</Link>

        </li>
      </ul>
    </nav>
  )

}

export default Nav;