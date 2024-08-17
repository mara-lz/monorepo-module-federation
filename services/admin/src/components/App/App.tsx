import React,{useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {deepmerge} from '@packages/shared/src/utils/deepMerge'
import {UserCard} from "@packages/shared/src/components/UserCard";

export const App =()=> {
    deepmerge();
    return (
        <div>
            <h1>ADMIN MODULE</h1>
            <Outlet/>
            <UserCard username={'FROM ADMIN'}/>
        </div>
    )
};