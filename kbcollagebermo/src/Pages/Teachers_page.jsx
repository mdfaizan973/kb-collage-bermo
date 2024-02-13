import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";

export default function Teachers_page() {
  const teacher_Details = [
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/02b404ca-4325-4e8f-8cfe-0e07e0cb314f.jpg",
      name: "Dr. K. P. Sinha",
      position: "Principal",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/993f43e9-5ab5-47aa-9a11-ca18cd6fff96.jpg",
      name: "Prof. Laxmi Narayan",
      position: "H.o.D - Dept. of Physics",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/e1db6e34-c7b4-476e-99cb-2a4934e85c2d.jpg",
      name: "Prof. Gopal Prajapati",
      position: "H.o.D - Dept. of Chemistry",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/a42b6393-e81c-4971-9b05-c0c81c93b36b.jpg",
      name: "Prof. D. P. Kushwaha",
      position: "H.o.D - Dept. of BCA",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/db108d22-7d0f-4510-90f3-b21033c9891a.jpg",
      name: "Prof. Snajay Kumar Das",
      position: "Department of B.B.A",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/359e9713-ae9d-4d25-a47c-4c2bbdced1de.jpg",
      name: "Dr. Alisha Vandana Lakra",
      position: "H.o.D. - Dept.of English",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/94fb80bc-acbb-4186-8479-2c62b528ac0f.jpg",
      name: "Dr.  Neela Purnima Tirkey",
      position: "H.o.D. - Dept.of Political Science",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/204c6464-ce73-470c-aaae-7bd9f4f8f8f7.jpg",
      name: "Dr.  Madhura Kerketta",
      position: "H.o.D. - Dept.of Hindi",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/09d0b508-d71d-4d1d-a94d-294a9a49749f.jpg",
      name: "Dr.  Sajan Bharti",
      position: "H.o.D. - Dept.of Sociology",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/2e70b03c-993b-44c8-a9c8-638d5ac939d9.jpg",
      name: "Dr.  Arun Kumar Roy Mahato",
      position: "H.o.D. - Dept.of Zoology",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/af31c4b3-f572-4ef8-8690-911396969419.jpg",
      name: "Dr.  R. P. P. Singh",
      position: "H.o.D. - Dept.of Commerce",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/b557881e-093a-41a9-a591-73faa0f60708.jpg",
      name: "Prof.  Nitin Chetan Tigga",
      position: "H.o.D. - Dept.of Economics",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/a32971d6-2769-429b-a800-65d6d9ef4193.jpg",
      name: "Dr.  Prabhakar Kumar",
      position: "H.o.D. - Dept.of Psychology",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/713a80c1-707b-4a04-91e6-8d62ff5f9c92.jpg",
      name: "Prof.  Manohar Manjhi",
      position: "H.o.D. - Dept.of History",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/0e7eb1f4-e039-48c8-a03a-874ee92562a4.jpg",
      name: "Prof.  Amit Kumar Ravi",
      position: "Dept. of History",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/73ac9298-1a6d-4dea-ab8c-f6b102f4ac67.jpg",
      name: "Dr.  Vyas Kumar",
      position: "Dept. of History",
    },
    {
      image:
        "https://kbcollegebermo.ac.in/images/faculty/d8d5b0a7-a3c9-4444-bef2-409f7853c9e3.jpg",
      name: "Dr.  Basudeo Prajapati",
      position: "Dept. of Political Science",
    },
  ];
  return (
    <DIV>
      <div className="main_container">
        <div className="heading">
          <h1>Meet Our Team</h1>
          <p className="paragraph">
            Empowering Minds, Inspiring Futures: Introducing Our Stellar College
            Team!
          </p>
        </div>
        <div className="image_container">
          {teacher_Details.map((ele, i) => (
            <div className="card" key={i}>
              <img src={ele.image} alt="Faculty Image" />
              <h2 className="name">
                {ele.name} <br />
                <abbr title="LinkedIn profile">
                  <BsLinkedin />
                </abbr>
                <br /> <span>{ele.position}</span>
              </h2>
            </div>
          ))}
        </div>{" "}
        {/**/}
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  background-color: #e6e3e377;
  .main_container {
    width: 90%;
    margin: 50px auto;
    text-align: center;
  }
  .heading {
    padding: 20px;
  }
  .heading h1 {
    font-size: 2.3rem;
  }
  .heading .paragraph {
    font-size: 1.2rem;
  }
  .image_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    padding: 2px;
  }
  .card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: auto;
    display: block;
  }

  .name {
    padding: 10px;
    text-align: center;
    font-size: 18px;
    color: white;
    background-color: #303f92;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
  .name span {
    font-size: 14px;
    color: red;
  }
  .more_button {
    padding: 10px;
  }
  .more_button button {
    padding: 10px 20px;
    background-color: #a34658;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-weight: bold;
  }

  @media screen and (min-width: 100px) and (max-width: 450px) {
    .image_container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .card {
      width: 160px;
    }
    .name {
      font-size: 12px;
      padding: 8px;
    }
    .name span {
      font-size: 10px;
    }
    .heading {
      padding: 15px;
    }
    .heading h1 {
      font-size: 1.8rem;
    }
    .heading .paragraph {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 451px) and (max-width: 1050px) {
    .image_container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      width: 250px;
    }
    .heading {
      padding: 15px;
    }
    .heading h1 {
      font-size: 1.8rem;
    }
    .heading .paragraph {
      font-size: 1rem;
    }
    .name {
      font-size: 14px;
      padding: 8px;
    }
    .name span {
      font-size: 11px;
    }
  }
`;
