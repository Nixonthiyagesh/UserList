import UserCard from "./UserCard";
import "./UserCards.css";
import CircularProgress from "@material-ui/core/CircularProgress";


const UserCards = ({ data }) => {
  return (
    <div className="grid">
      <h1>UserList</h1>
      {/* UserCards for maping the UserCard component */}
      {data?data.map((data) => (
        <UserCard
          key={data.id}
          imgSrc={data.avatar}
          firstName={data.first_name}
          id={data.id}
        />
      )):<CircularProgress/>}
    </div>
  );
};

export default UserCards;
