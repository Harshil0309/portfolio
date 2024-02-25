import { useMediaQuery } from "react-responsive";
import "./Device.css";
const Device = (Home) => {
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
  }
  return <Home />;
};

export default Device;
