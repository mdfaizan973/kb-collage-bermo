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

          {/* <div className="content">
            <div className="image_logos">
              <img
                src="https://kbcollegebermo.ac.in/images/bbmku.png"
                alt="logo"
              />
            </div>
            <div className="image_logos">
              {" "}
              <img
                src="https://kbcollegebermo.ac.in/images/bbmku.png"
                alt="logo"
              />
            </div>
          </div> */}

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
    width: 55%;
    justify-content: space-between;
  }
  nav .content_links p {
    font-weight: bold;
    font-weight: 600;
    font-size: 16px;
    color: #303f92;
    padding: 18px 15px;
    cursor: pointer;
  }

  @media screen and (min-width: 100px) and (max-width: 450px) {
    nav .content_links {
      display: none;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 999px) {
    nav .content_links {
      display: none;
    }
  }
`;
