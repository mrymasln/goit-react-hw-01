import ProfileCss from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className={ProfileCss.profile}>
        <div className={ProfileCss.description}>
          <img src={image} alt={name} className={ProfileCss.avatar} />
          <p className={ProfileCss.ProfileName}>{name}</p>
          <p className={ProfileCss.ProfileTag}>@{tag}</p>
          <p className={ProfileCss.ProfileLocation}>{location}</p>
        </div>

        <ul className={ProfileCss.ProfileStats}>
          <li className={ProfileCss.ProfileItem}>
            <span>Followers</span>
            <span className={ProfileCss.ProfileNumber}>{followers}</span>
          </li>
          <li className={ProfileCss.ProfileItem}>
            <span>Views</span>
            <span className={ProfileCss.ProfileNumber}>{views}</span>
          </li>
          <li className={ProfileCss.ProfileItem}>
            <span>Likes</span>
            <span className={ProfileCss.ProfileNumber}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
