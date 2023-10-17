import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/addCoffee">Add Coffee</NavLink>
    </div>
  );
};

export default Header;
