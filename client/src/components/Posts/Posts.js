import React from "react";
import Post from "./Post/Post";
import useStyles from './styles'
const classes = useStyles();
const Posts = () => {
    const classes = useStyles();
    return (
        <>
        <h1>Posts</h1>
        <Post />
        </>
    );
}

export default Posts