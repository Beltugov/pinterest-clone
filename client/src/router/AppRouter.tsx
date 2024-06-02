import React, {Suspense, useEffect} from "react";

import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import {authRoutes, routes} from "./routes";
import Header from "../container/Header/Header";
import {useTypeDispatch} from "../hooks/useTypeDispatch";
import {useTypeSelector} from "../hooks/useTypeSelector";
import Loading from "../components/Loading/Loading";
import {authUser} from "../store/action/userAction";

const AppRouter = () => {
    const dispatch = useTypeDispatch()
    const user = useTypeSelector((state) => state.userReducer)
    const token = localStorage.getItem("UserToken")
    const location = useLocation();

    useEffect(() => {
        dispatch(authUser(token))
    }, [user.isAuth, location])

    return (
        <Routes>
            {token
                ? authRoutes.map(({path, Component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <div>
                                <Suspense fallback={<Loading/>}>
                                    <Header/>
                                    <Component/>
                                </Suspense>
                            </div>
                        }
                    />
                ))
                : routes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))}

            <Route path="/*" element={<Navigate to={"/"}/>}/>
        </Routes>
    );
};

export default AppRouter;
