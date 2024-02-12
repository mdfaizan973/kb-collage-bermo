import styled from "styled-components";
export default function Vision() {
  return (
    <DIV>
      <div className="banner_contaner">
        <img src="https://i.ibb.co/hYd5swF/ollere.png" />
        <div className="content_text">
          <p>Vision</p>
          <h1>Our Vision</h1>
          <p>
            Vision is the roots of education so that the purpose of an
            institution &quot;All round Development&quot; of the student can be
            fulfilled. Higher education for learners is a continuous
            progression, it aims to develop, expand and nurture the capability
            of learners for personal enrichment and progress. Our aim is to
            polish, filter and refine the inherent qualities among the learners
            for overall development and to be a valuable citizen of the nation
            with knowledge and skill.
          </p>
        </div>
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  .banner_contaner {
    position: relative;
    width: 95%;
    height: 70vh;
    margin: 70px auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 15px;
    overflow: hidden;
    opacity: 0.8;
    background-color: black;
  }

  .banner_contaner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
    color: white;
  }
  .content_text h1 {
    font-size: 3.5rem;
    margin: 10px;
  }
  .content_text p {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    .banner_contaner {
      height: 99%;
      margin-top: 30px;
    }
    .content_text {
      width: 90%;
    }
    .content_text h1 {
      font-size: 1.5rem;
    }
    .content_text p {
      font-size: 0.8rem;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 1050px) {
    .banner_contaner {
      height: 99%;
      margin-top: 30px;
    }
    .content_text {
      width: 90%;
    }
    .content_text h1 {
      font-size: 1.8rem;
    }
    .content_text p {
      font-size: 1rem;
    }
  }
`;
