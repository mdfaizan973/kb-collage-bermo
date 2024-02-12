import About_college from "./About_college";
import CollegeBranch from "./CollegeBranch";
import CourseOffer from "./CourseOffer";
import Crausal from "./Crausal";
import Principal from "./Principal";
import Teacher from "./Teacher";
import Vision from "./Vision";

export default function Page_Landing() {
  return (
    <div>
      <Crausal />
      <Principal />
      <Teacher />
      <CourseOffer />
      <Vision />
      <About_college />
      <CollegeBranch />
    </div>
  );
}
