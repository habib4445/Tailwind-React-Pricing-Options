import React from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "Contact", path: "/contact" }
];



const NavBar = () => {
    return (
    <nav>
<ul className="flex">
    {navLinks.map(route => (
        <li key={route.id} className="mr-10">
            <a href={route.path}>{route.name}</a>
        </li>
    ))}
</ul>



        {/* <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul> */}
    </nav>
    )
}
export default NavBar;