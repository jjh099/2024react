import React, { useEffect, useState } from "react";
import "./assets/css/tStyle.scss";
import axios from "axios";
import { getUser } from "./api/api";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const user = await axios.getUser();
        setUserData("useeffect " + user.user);
        console.log(user.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    callApi();
  }, []);
  console.log(userData);

  return;
  <div>
    {userData?.map(function (item, idx) {
      return <li>{item.email}</li>;
    })}
  </div>;
}
export default App;
