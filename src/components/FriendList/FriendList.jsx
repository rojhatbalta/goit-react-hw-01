import PropTypes from "prop-types";
import FriendsListItem from "./FriendListItem.jsx";
import styles from "./FriendList.module.css";

export default function FriendsList({ friends }) {
  console.log(friends);
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.friendItem} key={friend.id}>
          <FriendsListItem friendData={friend} />
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
