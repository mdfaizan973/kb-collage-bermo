import TobNav from "./TobNav";
import styled from "styled-components";
export default function Navbar() {
  return (
    <div>
      <TobNav />
      <Nav className="main_nav">
        <nav>
          <div className="nav_logo">
            <div className="logo_container">
              <img
                src="https://kbcollegebermo.ac.in/images/logo.png"
                className="log_image"
                alt="collage-logo"
              />
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

          <div className="menu_button">
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
            <p href="#">Home</p>
            <p href="#">Departments</p>
            <p href="#">Admission</p>
            <p href="#">Course</p>
            <p href="#">Academics</p>
            <p href="#">Life@Campus</p>
            <p href="#">Gallery</p>
          </div>
        </nav>
      </Nav>
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
