import styled from "styled-components";
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
        <div className="college_links1">2</div>
        <div className="college_links2">3</div>
        <div className="college_links3">4</div>
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
    border: 1px solid white;
    width: 23%;
    padding-top: 40px;
    text-align: center;
  }
  .college_links2 {
    border: 1px solid white;
    width: 23%;
    padding-top: 40px;
    text-align: center;
  }
  .college_links3 {
    border: 1px solid white;
    width: 23%;
    padding-top: 40px;
    text-align: center;
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
  @media screen and (min-width: 100px) and (max-width: 450px) {
    footer {
      display: flex;
      flex-direction: column;
    }
    footer .college_logo,
    .college_links1,
    .college_links2,
    .college_links3 {
      width: 100%;
    }
  }
`;
