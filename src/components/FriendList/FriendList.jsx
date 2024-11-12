import FriendsListItem from "./FriendListItem";
import "./FriendList.css";

export default function FriendsList({ friends }) {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="friend-item" key={friend.id}>
          <FriendsListItem friendData={friend} />
        </li>
      ))}
    </ul>
  );
}
