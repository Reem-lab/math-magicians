import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];
  return (
    <nav className="navBar">
      <h1>Math Magicians</h1>
      <ul className="ul-links">
        {Links.map((link) => (
          <li key={link.id} className="li-links">
            <NavLink to={link.path} className="links" activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
