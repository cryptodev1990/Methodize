import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "../../css/Navbar.css";
import { CgProfile } from "react-icons/cg";
import { GrAddCircle } from "react-icons/gr";
const TopNavBarHome = () => {
  const { setAuth, setEmail, setUserId } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    setAuth(null);
    setEmail(null);
    setUserId(null);
  };
  return (
    <div className="top-nav-bar-container" style={{}}>
      <div
        className="top-nav-bar-left"
        style={{ display: "flex", flexDirection: "column" }}
      ></div>
      <div className="top-nav-bar-middle"></div>
      <div className="top-nav-bar-right" style={{}}>
        <div>Search</div>
        <div>
          <GrAddCircle style={{ fontSize: "24px" }} />
        </div>
        <div>
          <CgProfile style={{ fontSize: "24px" }} />
        </div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default TopNavBarHome;
