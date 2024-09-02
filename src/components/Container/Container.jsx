import { NavLink, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import About from "../About/About";
import Contact from "../Contact/Contact";
import { useTheme } from "../Context";
import Error from "../Error/Error";
import Homepage from "../Homepage/Homepage";
import User from "../User/User";
import Users from "../Users/Users";

function Container() {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div>
        <a
          href="#"
          id="btnTheme"
          className={`float-start theme-btn-${theme}`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <FontAwesomeIcon icon={faMoon} />
        </a>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeElementNew" : undefined
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeElement" : undefined
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeElement" : undefined
                }
                to="/users"
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeElement" : undefined
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default Container;
