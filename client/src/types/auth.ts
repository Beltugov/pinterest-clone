export interface IAuth {
    authType: "registration" | "login",
    setAuthType: (type: IAuth["authType"]) => void,
    authTypeObj: object
}