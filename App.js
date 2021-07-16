import axios from "./axios";
import "./App.css";
import { useEffect, useState } from "react";
import UserCards from "./Components/UserCards";
import { useDarkMode } from "./customHook";
import Toggle from "./Components/Toggle";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [user, setUser] = useState([]);
  const [theme, themeToggler] = useDarkMode(); // used a custom hook
  const [pageNo, setPageNo] = useState(1); // Page number is using to change the page in api
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchUser = async () => {
      const fetchData = await axios.get(`?page=${pageNo}`); //fetching data feom the api with pageNo state
      const result = await fetchData.data;
      setUser(result);
    };
    fetchUser();
    setIsLoading(false);
  }, [pageNo,user]);

  const handlePageClick = (page) => {
    //Handler for pagination to set the page number to setPageNo state
    setPageNo(page);
  };
  return (
    <div className="app" data-theme={theme}>
      {!isLoading ? (
        <div>
          <Toggle theme={theme} themeToggler={themeToggler} />{" "}
          {/* Sending prop
          values to Toggle Component */}
          <div className="container">
            <UserCards data={user.data} />
            {/* Sending prop values to UserCards Component */}
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
      ) : (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default App;
