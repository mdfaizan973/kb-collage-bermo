import CourseOffer from "./CourseOffer";
import Crausal from "./Crausal";
import Principal from "./Principal";
import Teacher from "./Teacher";

export default function Page_Landing() {
  return (
    <div>
      <Crausal />
      <Principal />
      <Teacher />
      <CourseOffer />
    </div>
  );
}
