import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ friendData }) => {
  return (
    <>
      <img src={friendData.avatar} alt={friendData.name} width="48" />
      <p className={styles.friendName}>{friendData.name}</p>
      <p
        className={`${friendData.isOnline ? styles.online : styles.offline}`}
      >{`${friendData.isOnline ? "Online" : "Offline"}`}</p>
    </>
  );
};

FriendListItem.propTypes = {
  friendData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
