import "./Profile.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="p-container">
      <div>
        <img className="p-image" src={image} alt={name} />
        <p className="p-name">{name}</p>
        <p className="p-tag">@{tag}</p>
        <p className="p-location">{location}</p>
      </div>

      <ul>
        <li className="p-attribute">
          <span>Followers</span>
          <span className="p-stats">{stats.followers}</span>
        </li>
        <li className="p-attribute">
          <span>Views</span>
          <span className="p-stats">{stats.views}</span>
        </li>
        <li className="p-attribute">
          <span>Likes</span>
          <span className="p-stats">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
