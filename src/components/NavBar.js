import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const arrayLinks = links.map(link => {
    return <a href={`#${link}`} key={link.length}>{link}</a>
  })

  return <nav>{arrayLinks}</nav>;
}

export default NavBar;
