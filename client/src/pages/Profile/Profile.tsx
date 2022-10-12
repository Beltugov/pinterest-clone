import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import MyButton from "../../components/MyButton/MyButton";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-info">
        <div className="profile-info__avatar">
          <Avatar letter={"A"} width={50} />
        </div>
        <div className="profile-info__name">A</div>
        <div className="profile-info__nickname">s</div>
        <MyButton className={"simple-btn grey"}>Изменить профиль</MyButton>
      </div>
    </div>
  );
};

export default Profile;
