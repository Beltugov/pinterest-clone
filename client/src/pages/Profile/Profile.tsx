import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import MyButton from "../../components/MyButton/MyButton";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {IUser} from "../../types/user";
import "./Profile.scss"

const Profile = () => {
    const user: IUser | null = useTypeSelector(({userReducer}) => userReducer.user)

    return (
        <div className="profile">
            <div className="profile-info">
                <div className="profile-info__avatar">
                    <Avatar letter={user?.nickname[0] || "A"} width={50}/>
                </div>
                <div className="profile-info__nickname">{user?.nickname || "firstName"}</div>
                <MyButton className={"simple-btn grey"}>Изменить профиль</MyButton>
            </div>
            <div className="profile-pins">
                <div className="profile-pins-group">
                    <div className="profile-pins-group__created">Созданные</div>
                    <div className="profile-pins-group__saved">Сохраненные</div>
                </div>
                <div className="profile-pins-action">
                    <MyButton className={"round-btn profile-pins-action__filter-btn grey"}>f</MyButton>
                    <MyButton className={"round-btn profile-pins-action__create-btn grey"}>+</MyButton>
                </div>
                <div className="profile-pins__boards"></div>
                <div className="profile-pins__list">

                </div>
            </div>
        </div>
    );
};

export default Profile;
