export type ModalType = "login" | "registration";

export interface IModal {
  type: ModalType;
  setType: (type: ModalType) => void;
  setModalActive: (active: boolean) => void;
}
