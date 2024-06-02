import React from "react";
import {IModal} from "../../types/modal";
import "./Modal.scss";
import MyButton from "../MyButton/MyButton";
import close from "../../assets/close.svg";

const Modal: React.FC<IModal> = ({setModalActive, children}) => {

    return (
        <div className="modal-wrapper" onMouseDown={() => setModalActive(false)}>
            <div
                className="modal"
                onMouseDown={(event) => event.stopPropagation()}>
                <div className="modal__close-btn">
                    <MyButton
                        className={"round-btn"}
                        onClick={() => setModalActive(false)}>
                        <img src={close} alt={"close"} width={24}/>
                    </MyButton>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Modal;
