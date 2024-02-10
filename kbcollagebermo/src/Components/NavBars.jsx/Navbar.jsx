import TobNav from "./TobNav";
import styled from "styled-components";
export default function Navbar() {
  return (
    <div>
      <TobNav />
      <P>There will be Main_Navbar</P>
    </div>
  );
}

const P = styled.p`
  text-align: center;
  color: red;
  font-size: 24px;
  font-weight: bold;
`;
