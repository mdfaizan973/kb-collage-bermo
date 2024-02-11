import styled from "styled-components";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <DIV>
      <footer>
        <div className="college_logo">
          <img
            src="https://kbcollegebermo.ac.in/images/logo-white.png"
            alt="logo"
          />
          <div className="college_names">
            <h1>K.B. College, Bermo </h1>
            <h2>A Constituent Unit of B.B.M.K. University,Dhanbad</h2>
            <h3>NAAC ACCREDITED GRADE B</h3>
          </div>
        </div>
        <div className="college_links1">
          {/* <h3>Quick Links</h3> */}
          <ul className="college_links1-links">
            <li>Quick Links</li>

            <li>Notice</li>
            <li>Syllabus</li>
            <li>Admission List</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Contact us</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="college_links2">
          {/* <h3>Useful Link</h3> */}
          <ul className="college_links1-links">
            <li>Useful Link</li>
            <li>BBMKU</li>
            <li>UGC</li>
            <li>Chancellor Portal</li>
            <li>MHRD</li>
            <li>AISHE</li>
            <li>E-Kalyan</li>
            <li>Admid Card/ Result BBMKU</li>
          </ul>
        </div>
        <div className="college_links3">
          <ul className="college_links3-links">
            <li>Contact Us</li>

            <li>P.O. : Jarangdih, Dist. : Bokaro - 829113 (Jharkhand)</li>
            <li>Phone : +91 8092129391</li>
            <li>Email : principalbermo@gmail.com</li>
            <div className="social_media">
              <p>
                <BsFacebook />
              </p>
              <p>
                <BsInstagram />
              </p>
              <p>
                <BsLinkedin />
              </p>
              <p>
                <BsTwitter />
              </p>
            </div>
          </ul>
        </div>
      </footer>
      <div className="footer">
        <div className="copyright">
          <p>
            ©Copyright 2024 K.B. College, Bermo All Rights Reserved <br />
            <span>
              Design & Developed By -
              <span className="developer">
                <i>Md Faizan</i>
              </span>
            </span>
          </p>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  footer {
    height: 55vh;
    width: 99%;
    margin: 40px auto auto auto;
    color: white;
    background-color: #ff7900;
    border-radius: 50px 50px 0 0;
    display: flex;
    justify-content: space-around;
  }
  .college_logo {
    width: 23%;
    text-align: center;
    padding-top: 40px;
  }
  .college_links1 {
    width: 23%;
    padding-top: 40px;
    text-align: start;
  }
  .college_links2 {
    width: 23%;
    padding-top: 40px;
    text-align: start;
  }
  .college_links3 {
    width: 23%;
    padding-top: 40px;
    text-align: start;
  }
  .copyright {
    width: 99%;
    height: 15vh;
    margin: auto;
    color: white;
    background-color: #fd8821;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
  }
  .developer {
    font-weight: 700;
    color: red;
  }
  .college_names h2 {
    font-size: 1.1rem;
    margin: 10px 0;
  }
  .college_names h3 {
    color: red;
  }
  /* footer_links */

  .college_links1-links {
    width: 50%;
    margin: auto;
  }
  .college_links1-links li:nth-child(1) {
    font-size: 1.4rem;
  }
  .college_links1-links li {
    list-style: none;
    line-height: 2.3;
    font-size: 1.1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    cursor: pointer;
    position: relative; /* Needed for absolute positioning of the ::after pseudo-element */
  }

  .college_links1-links li::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease;
  }

  .college_links1-links li:hover::after {
    width: 100%;
  }

  /*  */
  .college_links3-links {
    width: 70%;
    margin: auto;
  }
  .college_links3-links li {
    list-style: none;
    cursor: pointer;
    line-height: 2.4;
    font-size: 1rem;
    font-weight: bold;
  }

  .college_links3-links li:hover {
    color: red;
    transition: 0.7s ease;
  }
  .college_links3-links li:nth-child(1) {
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
  }
  .social_media {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .social_media p:hover {
    color: red;
    cursor: pointer;
    transition: 0.7s ease;
  }
  /*  */
  @media screen and (min-width: 100px) and (max-width: 450px) {
    footer {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    footer .college_logo,
    .college_links1,
    .college_links2,
    .college_links3 {
      width: 100%;
    }
    .college_links1-links li {
      line-height: 1.8;
      font-size: 1rem;
    }
  }
`;
