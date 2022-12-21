import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './createPost_page.css'
const INSTACLONE_API='https://instaclone-backened-api.onrender.com/api/posts'
function CreatePost(){
    const [imgFile, setImgFile]= useState()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
	const [response, setResponse] = useState()
	// const [flag, setFlag] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image',imgFile)
        formData.append('name',name)
        formData.append('location',location)
        formData.append('description',description)
		//useEffect(()=>{fetch("https://instaclone-backened-api.onrender.com/api/posts").then((res)=>res.json()).then((data)=>{setPosts(data);console.log(posts)}).catch((e)=>console.log(e))},[])
        //useEffect(()=>{fetch('https://instaclone-backened-api.onrender.com/api/posts', {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{setResponse(data);console.log(data)}).catch((e)=>console.log(e))},[]);	
		await fetch(INSTACLONE_API, {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{setResponse(data);console.log(data);}).catch((e)=>console.log(e))
        navigate('/postview')
	}
    return (
        <div>
            <header>
                <div className="div-left">
                    <div>
                    <img src='./assets/icon.png' alt='logo'/>
                    </div>
                    <div>
                    <h1>instaclone</h1>
                    </div>
                </div>
                <div className="div-right">
                    <Link to='/postView'><img className="flex-right" src='./assets/camera_icon.png' alt='cameraIcon'/></Link>
                </div>
            </header>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                <input type='file' name='image' onChange={(e)=> {setImgFile(e.target.files[0])}} accept='image/*'/>
                </div>
                <div>
                    <div>
                <input type='text' placeholder="Author" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                <input type='text' placeholder="Location" name='location' value={location} onChange={(e)=>setLocation(e.target.value)}/>
                </div>
                </div>
                <div>
                <input type='text' placeholder="Description" name='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <input type='submit' value="Post"/>
            </form>
			{/* {flag&&<div>File Uploaded Successfully and its url is {response.PostImage}</div>} */}
			
        </div>
    )
}

export default CreatePost;