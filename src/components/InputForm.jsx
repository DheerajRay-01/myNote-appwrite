import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
// import { addNotes ,deleteNote} from '../store/noteSlice'
import RTE from './RTE'
import { useNavigate } from 'react-router-dom'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
// import conf from '../conf'
import service from '../Appwrite/config'

function InputForm({post}) {
// console.log("post in edit:",post?.title || "fefe")
// console.log(post.content);
const dispatch = useDispatch()
const navigate = useNavigate()
const userData = useSelector(state=> state.auth.userData)

  
const {handleSubmit,register,reset ,getValues,setValue} = useForm({
  defaultValues:{
    title:"",
    content:""
  }
})

useEffect(() => {
  if (post) {

    setValue("title", post.title); 
    setValue("content", post.content);
  }
}, [post, setValue]);

const handleAddNote =  (data)=>{
  if(post){
      // console.log("there is a post for edit", post.$id);
      try {
        const updatePost =  service.editPost(
            post.$id,
            data.title,
            data.content,
            new Date().toLocaleDateString() // Assuming you want to update the date
        );
    
        if (updatePost) {
            console.log("Post updated successfully:", updatePost);
            toastr.success("Note Edited..", "Edited");
            navigate("/all-notes");
        }
    } catch (error) {
        console.error("Error updating post:", error);
        toastr.error("Failed to update the post. Please try again.", "Error");
    }
    
      
  }else{
    try {
      if(data && data.content){
        // console.log(userData);
            const newPost = service.createPost(
            data.title || "Untitled Note",
            data.content,
            userData.$id,
            new Date().toLocaleDateString(),
          )
          if(newPost){
            console.log("this is new post",newPost);
            toastr.success("Note Added successfully!","Added")
            reset() 
          }
      }
    } catch (error) {
      console.error("Error Creating post:", error);
      toastr.error("Failed to Creating the post. Please try again.", "Error");
    }
}

  }




  return (
    <div>
        <form onSubmit={handleSubmit(handleAddNote)}
        className='p-2'>
      <div
      className='flex justify-around m-3 '
      >

        <input 
        type="text" 
        placeholder='Title'
        className='p-3 rounded-md border-blue-950 border-2  w-full mx-1'
        {...register("title"  )}
        />
         <button type='submit' className='rounded-md bg-gray-800 hover:bg-gray-700 px-2 py-1 w-20 text-white'>Add</button>
        </div>

     
          <RTE 
          // className='w-1/2'
          onChange={(content) => setValue("content", content)}  // Register editor content with react-hook-form
          defaultValue={post?.content || getValues("content")}  
        />
      
 

       
        </form>    
    </div>

  )
}

export default InputForm