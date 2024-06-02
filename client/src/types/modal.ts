import {ReactElement} from "react";

export interface IModal {
    setModalActive: (active: boolean) => void;
    children: ReactElement
}


