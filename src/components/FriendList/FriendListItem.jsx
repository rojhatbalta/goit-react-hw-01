export default function FriendsListItem({ friendData }) {
  return (
    <>
      <img src={friendData.avatar} alt={friendData.name} width="48" />
      <p className="friend-name">{friendData.name}</p>
      <p className={`${friendData.isOnline ? "online" : "offline"}`}>{`${
        friendData.isOnline ? "Online" : "Offline"
      }`}</p>
    </>
  );
}
