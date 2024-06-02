import React from "react";
import "./Avatar.scss";

interface IAvatar {
    img?: string;
    letter: string;
    width: number;
}

const Avatar = ({img, letter, width}: IAvatar) => {
    return (
        <div className="avatar">
            {img ? (
                <img className="avatar__img" src={img} alt="Avatar" width={width}/>
            ) : (
                <span className="avatar__letter">{letter}</span>
            )}
        </div>
    );
};

export default Avatar;
