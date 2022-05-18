import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import Form from "./Form/Form";
import classes from './Main.module.css'
import CreatePostsContainer from "./CreatePosts/CreatePostsContainer";
import {AppStateType, store} from "../../Redux/Redux-store";


const Main = () => {

    return (
        <main className={classes.main}>
            <HeaderLogo/>
            <Form/>
            <CreatePostsContainer />
        </main>
    );
};

export default Main;