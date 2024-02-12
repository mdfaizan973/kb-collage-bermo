import styled from "styled-components";

export default function CollegeBranch() {
  const Branches = [
    {
      image: "https://kbcollegebermo.ac.in/images/courses01.jpg",
      head: "Library",
      para: "A comprehensive library with a vast collection of books, journals, e-resources, and study spaces for research and study....",
    },
    {
      image: "https://kbcollegebermo.ac.in/images/courses02.jpg",
      head: "Computer Lab",
      para: "Tech-equipped lab facilitates computer learning, aiding students in acquiring digital skills and exploring innovation.",
    },
    {
      image: "https://kbcollegebermo.ac.in/images/courses03.jpg",
      head: "Scince Lab",
      para: "Science lab supports hands-on learning, research, and discovery, aiding students in understanding scientific concepts effectively.",
    },
    {
      image: "https://kbcollegebermo.ac.in/images/courses04.jpg",
      head: "Cafeteria",
      para: "Relaxed cafeteria providing nourishing meals in a welcoming environment, fostering social interaction and relaxation for students and staff alike...",
    },
  ];
  return (
    <DIV>
      <div className="main_container">
        {Branches.map((ele, i) => (
          <div className="card" key={i}>
            <div className="image_cont">
              <img src={ele.image} />
            </div>
            <div className="text_cont">
              <h3>{ele.head}</h3>
              <p>
                {ele.para} <a href="">View More - </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  margin-top: 50px;
  .main_container {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
  }
  .image_cont {
    width: 30%;
    height: 100%;
    padding: 5px;
  }
  .image_cont img {
    border-radius: 10px;
    width: 100%;
  }
  .text_cont {
    width: 70%;
    padding: 10px;
  }
  .text_cont p {
    line-height: 1.5;
    margin-top: 5px;
  }

  @media screen and (min-width: 100px) and (max-width: 500px) {
    .main_container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .image_cont img {
      width: 100%;
    }
    .text_cont h3 {
      font-size: 0.7rem;
    }
    .text_cont p {
      font-size: 10px;
    }
  }
  @media screen and (min-width: 501px) and (max-width: 1050px) {
    .main_container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .image_cont img {
      width: 100%;
    }
    .text_cont h3 {
      font-size: 1.3rem;
    }
    .text_cont p {
      font-size: 1rem;
    }
  }
`;
