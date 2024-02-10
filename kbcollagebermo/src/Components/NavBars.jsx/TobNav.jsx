import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

import styled from "styled-components";
export default function TobNav() {
  return (
    <Nav>
      <nav className="main_top_nav">
        <div className="email_phone">
          <p className="collage_name">
            -- Official Website of K.B. College, Bermo
          </p>
          <p className="email"> Email: principalbermo@gmail.com</p>
          <p className="phome">Call +91 8092129391</p>
        </div>
        <div className="social_media_icons">
          <p className="fa">
            <BsFacebook />
          </p>
          <p className="tw">
            <BsTwitter />
          </p>
          <p className="li">
            <BsLinkedin />
          </p>
          <p className="in">
            <BsInstagram />
          </p>
          <p className="register">Register</p>
        </div>
      </nav>
    </Nav>
  );
}
const Nav = styled.nav`
  background-color: #ff7900;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 6px;
    justify-content: space-around;
  }

  nav div p {
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .email_phone {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    justify-content: space-between;
    align-items: center;
  }
  .collage_name {
    color: rgb(109, 109, 109);
  }
  .social_media_icons {
    display: flex;
    flex-wrap: wrap;
    width: 18%;
    justify-content: space-between;
    align-items: center;
  }
  .social_media_icons .register {
    border: 1px solid white;
    padding: 4px 12px;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    .email_phone {
      display: none;
    }
    .social_media_icons {
      width: 90%;
      margin: auto;
    }
  }
`;
