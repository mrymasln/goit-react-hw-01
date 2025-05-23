import FriendListItemCss from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={FriendListItemCss.friendList}>
      <img
        className={FriendListItemCss.friendListImg}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={FriendListItemCss.friendListName}>{name}</p>
      <p
        className={`${FriendListItemCss.isOnline} ${
          isOnline ? FriendListItemCss.online : FriendListItemCss.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
