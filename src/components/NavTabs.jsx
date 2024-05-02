import { Link, useLocation } from 'react-router-dom';

// Exports my navbar which will link the user to each page, referenced activity 23 for this 
export default function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <h1 className='mt-3 mb-4 text-center'>ian wolfe</h1>
    <ul className="nav nav-tabs justify-content-center">
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </Link>
      </li>
    </ul>
    </div>
  );
}