import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, content });
        setContent("");
        setTitle("");
    };

    return (
        <div>
            <Nav />
            <nav className="navbar">
                <Link to="/" className="logo">
                    <h2>MyBlog</h2>
                </Link>

                <div>
                    <button className="createPostBtn logOut">Log out</button>
                </div>
            </nav>
            <main className="main">
                <h2 className="heading">Create post</h2>
                <form className="createPost_form" onSubmit={handleSubmit}>
                    <label htmlFor="title" className="label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="createPost_title"
                        id="title"
                        name="title"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="content" className="label">
                        Content
                    </label>
                    <textarea
                        rows={10}
                        className="createPost_content"
                        value={content}
                        required
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button className="createPostBtn submitBtn" type="submit">
                        Create Post
                    </button>
                </form>
            </main>
        </div>
    );
};

export default CreatePost;