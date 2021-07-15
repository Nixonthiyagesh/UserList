import UserCard from "./UserCard";
import "./UserCards.css";

const UserCards = ({ data }) => {
  return (
    <div className="grid">
      <h1>UserList</h1>
      {data?.map((data) => (
        <UserCard
          key={data.id}
          imgSrc={data.avatar}
          firstName={data.first_name}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default UserCards;
