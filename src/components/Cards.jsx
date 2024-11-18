import React from "react";
import { useNavigate, Link } from "react-router-dom";
import service from "../Appwrite/config";
import toastr from "toastr";
import { MdOutlineDelete, MdEditNote, MdOutlineDateRange ,MdOutlineRemoveRedEye} from "react-icons/md";

function Cards({ id, title, content, date }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    const deletePost = service.deletePost(id);
    if (deletePost) {
      // onDelete(id)
      console.log("delete", deletePost);
      toastr.success("Note Deleted!", title);
      // navigate("/all-notes");
    }
  };

  return (
    
      <div className="flex md:w-[80%] md:flex-row gap-5 flex-col h-fit my-4 p-4 rounded-lg border-2 border-gray-300 mx-auto bg-[#f4f7fb] shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="left md:w-[70%] flex flex-col justify-center px-4">
          <div className="title font-mono font-extrabold text-2xl text-gray-800 md:text-left md:pl-5 border-b-2  py-3 border-gray-500">
            {title}
          </div>
        </div>

        <div className="right md:w-[30%] flex flex-col justify-between items-center p-2">
          <div className="button flex items-center justify-around w-full gap-3">
          <button
              onClick={()=>navigate(`/view-note/${id}`)}
              className="p-2 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors duration-300"
            >
              <MdOutlineRemoveRedEye className="text-3xl hover:text-white" />
            </button>
            <button
              onClick={handleEdit}
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300"
            >
              <MdEditNote className="text-3xl hover:text-white" />
            </button>

            <button
              onClick={handleDelete}
              className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors duration-300"
            >
              <MdOutlineDelete className="text-3xl hover:text-white" />
            </button>
          </div>

          {/* Date Display */}
          <div className="date text-lg text-gray-600 mt-2 flex items-center gap-2">
            <MdOutlineDateRange className="text-gray-600" />
            <span>{date}</span>
          </div>
        </div>
      </div>
  );
}

export default Cards;
