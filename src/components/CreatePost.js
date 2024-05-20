import React, { useState, useHistory } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';


const CreatePost = () => {
  
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title: title,
      
      description: description,
      thumbnail: thumbnail,
    };

    

  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
  ];

  return (
    <div>
  <Nav/>
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>

        <form className="create-post_form" onSubmit={handleSubmit}>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus /><br /><br />



          <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} className='descBox' /><br /><br />

          

          <button type="submit" className='btn-primary'>Create</button>
        </form>

        {/* Add code here to display a message or redirect to a new page after submitting the form. */}

      </div>
    </section>
    <Footer/>
    </div>
  )
}
export default CreatePost;