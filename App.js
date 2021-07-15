import axios from "./axios";
import "./App.css";
import { useEffect, useState } from "react";
import UserCards from "./Components/UserCards";
import { useDarkMode } from "./customHook";
import Toggle from "./Components/Toggle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function App() {
  const [user, setUser] = useState([]);
  const [theme, themeToggler] = useDarkMode();
  const [pageNo, setPageNo] = useState(1);
  // const themeMode = theme === "light" ? "light" : darkTheme;

  useEffect(() => {
    const fetchUser = async () => {
      const fetchData = await axios.get(`?page=${pageNo}`);
      const result = await fetchData.data;
      setUser(result);
      console.log(result);
    };
    fetchUser();
  }, [pageNo]);
  console.log("check", user);

  const handlePageClick = (page) => {
    setPageNo(page);
    console.log("page", pageNo);
  };
  return (
    <div className="app" data-theme={theme}>
      <Toggle theme={theme} themeToggler={themeToggler} />
      <div className="container">
        <UserCards data={user.data} />
      </div>
      <div className="pagination-container">
        <Pagination
          className="user-pagination"
          total={user.total}
          onChange={handlePageClick}
          current={pageNo}
          showTitle={false}
        />
      </div>
    </div>
  );
}

export default App;
