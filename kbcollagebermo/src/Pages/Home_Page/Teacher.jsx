import styled from "styled-components";
export default function Teacher() {
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
                {ele.name} <br /> <span>{ele.position}</span>
              </h2>
            </div>
          ))}
        </div>
        <div className="more_button">
          <button>View More -</button>
        </div>
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
    display: flex;
    gap: 15px;
    justify-content: space-around;
    padding: 20px;
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
