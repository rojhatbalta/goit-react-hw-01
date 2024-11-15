import PropTypes from "prop-types";
import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.profileImage} src={image} alt={name} />
        <p className={styles.profileName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.profileList}>
        <li className={styles.profileAttribute}>
          <span>Followers</span>
          <span className={styles.profileStats}>{stats.followers}</span>
        </li>
        <li className={styles.profileAttribute}>
          <span>Views</span>
          <span className={styles.profileStats}>{stats.views}</span>
        </li>
        <li className={styles.profileAttribute}>
          <span>Likes</span>
          <span className={styles.profileStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
