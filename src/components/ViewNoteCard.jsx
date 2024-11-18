import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useDispatch } from "react-redux";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import service from "../Appwrite/config";
import { MdOutlineDelete , MdEditNote,MdOutlineDateRange} from "react-icons/md";
import { LuCopy } from "react-icons/lu";

function ViewNoteCard() {
  const postID = useParams("id").id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const noteRef = useRef(null);
  const [postData , setPostData] = useState({})
  
  
  useEffect(()=>{
    const fetchPostData = async () => {
      try {
          const post = await service.getPost(postID); // Fetch post data
          setPostData(post); // Update state
          // console.log("Fetched Post:", post); // Log fetched post
      } catch (error) {
          console.error("Error fetching post data:", error);
      }
    }
    fetchPostData();
  },[postID])

  const handleCopy = () => {
    if (noteRef.current) {
      const content = noteRef.current.textContent;
      navigator.clipboard.writeText(content);
      toastr.success("Text Copied successfully", "Copy");
    }
  };

  const handleDelete =  () => {
    const deletePost =  service.deletePost(postID)           
   if(deletePost){
    // console.log("delete", deletePost);
    toastr.success("Note Deleted !", postData.title);
    navigate("/all-notes");
   }
  }

  const handleEdit = () => {
    navigate(`/edit/${postID}`);
  };

  return (
    <div className="">
      <div className="md:max-w-[70%] min-h-[70vh] my-8 mx-auto bg-blue-100 rounded-lg shadow-lg p-6 mt-6 ">
        <div className="head flex justify-between items-center px-2">
          <p className="text-sm text-gray-500 mb-4 flex gap-2"><MdOutlineDateRange className="text-xl"/> {postData.date}</p>

          <div className="button gap-3 flex justify-center">
          <button
            onClick={handleEdit}
          >
            <MdEditNote className="text-2xl  hover:text-red-900" />
          </button>

          <button
            className=""
            onClick={handleDelete}
          >
           <MdOutlineDelete  className="text-xl hover:text-red-900" />
          </button>
            <button
              onClick={handleCopy}
            >
             <LuCopy className="text-lg hover:text-red-900"/>
            </button>
          </div>
        </div>

        <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-2">
          {postData.title}
        </h2>


        <div
          className="text-gray-700 leading-relaxed text-left"
          dangerouslySetInnerHTML={{ __html: postData.content }}
          ref={noteRef}
        />
      </div>
    </div>
  );
}

export default ViewNoteCard;
