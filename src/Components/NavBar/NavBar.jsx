import React, { useState } from "react";
import { Menu } from "lucide-react";


const links=[
    
]
const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "Contact", path: "/contact" }
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
const links =[]
  return (
    <nav className="flex justify-between mx-10">
      <span className="flex" onClick={() => setOpen(!open)}>
        {
      
          open ?

         <X className="md:hidden"></X> : 
         <Menu className="md:hidden"></Menu>}
        <h3 className="ml-4">My Navbar</h3>
      </span>

      <ul className="flex">
        {navLinks.map((route) => (
          <li key={route.id} className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>

      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;