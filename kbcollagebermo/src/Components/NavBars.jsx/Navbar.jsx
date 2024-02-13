import SubNav from "./SubNav";
import TobNav from "./TobNav";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const handleShowDialog = () => {
    document.getElementById("sidebar").showModal();
  };

  const handleCloseDialog = () => {
    document.getElementById("sidebar").close();
  };
  const sidebarStyle = {
    width: "250px",
    height: "100%",
    backgroundColor: "#fff",
    color: "red",
    position: "fixed",
    top: "0",
    right: "0",
    paddingTop: "20px",
    overflowY: "auto",
    transition: "0.5s, right 0.5s",
  };

  const listItemStyle = {
    padding: "10px 20px",
    borderBottom: "1px solid #ffa500",
    cursor: "pointer",
    color: "#303f92",
  };
  const logo_cont = {
    width: "32%",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  const logostyle = {
    width: "100%",
  };
  const col_name = {
    fontSize: "10px",
    fontWeight: "bold",
    marginTop: "5px",
  };
  return (
    <div>
      <TobNav />
      <Nav className="main_nav">
        <nav>
          <div className="nav_logo">
            <div className="logo_container">
              <RouterLink to="/">
                {" "}
                <img
                  src="https://kbcollegebermo.ac.in/images/logo.png"
                  className="log_image"
                  alt="collage-logo"
                />{" "}
              </RouterLink>
            </div>

            <div className="collage_name">
              <h3 className="name">
                K.B. COLLEGE, BERMO
                <br />
                <span className="text_collage">
                  A Constituent Unit of B.B.M.K. University, Dhanbad
                </span>
              </h3>
            </div>
          </div>

          <div className="menu_button" onClick={handleShowDialog}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          <div className="content_links">
            <RouterLink to="/">
              <p>Home</p>
            </RouterLink>
            <p>Departments</p>
            <p>Admission</p>
            <p>Course</p>
            <p>Academics</p>
            <p>Life@Campus</p>
            <p>Gallery</p>
          </div>
        </nav>
      </Nav>
      <SubNav />

      <dialog id="sidebar">
        <div className="sidebar" style={sidebarStyle}>
          <RouterLink to="/">
            <div style={logo_cont}>
              <img
                style={logostyle}
                src="https://kbcollegebermo.ac.in/images/logo.png"
              />{" "}
              <p style={col_name}> K.B. COLLEGE, BERMO</p>
            </div>
          </RouterLink>

          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li onClick={handleCloseDialog} style={listItemStyle}>
              X
            </li>
            <RouterLink to="/">
              <li style={listItemStyle}>Home</li>
            </RouterLink>
            <li style={listItemStyle}>Gallery</li>
            <li style={listItemStyle}>Academics</li>
            <li style={listItemStyle}>Gallery</li>
            <li style={listItemStyle}>Academics</li>
            <li style={listItemStyle}>Gallery</li>
            <li style={listItemStyle}>Academics</li>
            <li style={listItemStyle}>Gallery</li>
            <li style={listItemStyle}>Academics</li>
            <li style={listItemStyle}>About</li>
            <li style={listItemStyle}>Contact</li>
          </ul>
        </div>
      </dialog>
    </div>
  );
}

const Nav = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  nav {
    width: 95%;
    margin: auto;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav .nav_logo {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  nav .logo_container {
    width: 22%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav .logo_container img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    border-radius: 100%;
  }

  .text_collage {
    font-size: 12px;
  }

  .collage_name .name {
    color: #303f92;
  }
  .collage_name .name span {
    color: #a61d37;
  }
  nav .content_links {
    display: flex;
    align-items: center;
    width: 55%;
    justify-content: space-between;
    gap: 5px;
  }
  nav .content_links p {
    font-weight: 600;
    font-size: 18px;
    color: #0a1347;
    padding: 18px 15px;
    cursor: pointer;
  }
  nav .content_links p:hover {
    border: 1px solid #0a1347;
    padding: 4px 12px;
  }
  .menu_button {
    display: none;
    cursor: pointer;
  }
  .menu_button:hover {
    background-color: rgb(195, 194, 194);
  }

  @media screen and (min-width: 100px) and (max-width: 450px) {
    nav .content_links {
      display: none;
    }
    .menu_button {
      display: block;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 999px) {
    nav .content_links {
      display: none;
    }
    .menu_button {
      display: block;
    }
  }
`;
