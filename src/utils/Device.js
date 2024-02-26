import { useMediaQuery } from "react-responsive";
import "./Device.css";
import NavBar2 from "../components/NavBar2/NavBar2";
import NavBar from "../components/NavBar";
const Device = () => {
  const Mobile = useMediaQuery({
    query: "(max-width:900px)",
  });

  if (Mobile) {
    return (
      <div className="main-page">
        <p className="error">
          Coming Soon for Mobile. Until then use Desktop!!
        </p>
      </div>
    );

    // return <NavBar2/>
  }
  return <NavBar />;
};

export default Device;
