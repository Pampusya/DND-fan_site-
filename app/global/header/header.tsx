import { NavLink, useLocation } from "react-router";
import { useLayoutEffect, useRef, useState } from "react";
import "./header_style.scss";

export function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const location = useLocation(); // Keep this to trigger the effect

  useLayoutEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLAnchorElement>("a.active");
    
    if (activeLink) {
      const navRect = navRef.current?.getBoundingClientRect();
      if (navRect) {
        setUnderlineStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        });
      }
    }
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="logo-text">DND (FAN SITE)</div>
      <nav className="main-nav" ref={navRef}>
        <NavLink to="/">MAIN</NavLink>
        <NavLink to="/test">CREATE</NavLink>
        <div className="underline" style={underlineStyle}></div>
      </nav>
      <div className="auth-links">
        <NavLink  to="/signup">SIGN UP</NavLink>
        <NavLink  to="/signin">SIGN IN</NavLink>
      </div>
    </header>
  );
}