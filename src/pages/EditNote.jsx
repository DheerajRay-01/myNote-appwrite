import React, { useState,useEffect   } from 'react'
import InputForm from '../components/InputForm'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service from '../Appwrite/config'
function EditNote() {

  const postID = useParams("id").id;
  const [post , setPost] = useState({})
  
  
  useEffect(()=>{
    console.log(postID);
    
    const fetchPostData = async () => {
      try {
          const postData = await service.getPost(postID); // Fetch post data
          setPost(postData); // Update state
        
      } catch (error) {
          console.error("Error fetching post data:", error);
      }
    }
    fetchPostData();
  },[postID])

  // console.log("Fetched Post:", post);

  return (
    <div>
      <InputForm post={post}/>
    </div>
  )
}

export default EditNote