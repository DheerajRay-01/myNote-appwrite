import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cards from "./Cards";
import service from "../Appwrite/config";

function AllNotes() {
  // const noteArr = useSelector((state) => state.notes.notesArr);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [noteArr, setNoteArr] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const posts = await service.getPosts(userData.$id);
        setNoteArr(posts.documents);
      } catch (error) {
        console.error("Error fetching posts data:", error);
      }
    };

    fetchNotes();
  }, [userData,noteArr]);

  // const handleDelete = (id) => {
  //   setNoteArr((prevNotes) => prevNotes.filter((note) => note.$id !== id));
  // };



  return (
    <div className="w-full h-[100vh] overflow-y-scroll bg-[#CBDCEB]">
      <ul>
        {noteArr.length === 0 ? (
          <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md text-center">
            <p className="font-semibold text-lg bg-yellow-100">
              No todos available
            </p>
            <p className="bg-yellow-100">Please add a Notes to get started!</p>
          </div>
        ) : (
          noteArr.map((note) => (
            <li key={note.$id}>
              <Cards
                id={note.$id}
                title={note.title}
                content={note.content}
                date={note.date}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AllNotes;

// export const fetchNote = async () => {
//   try {
//     const posts = await service.getPosts(userData.$id);
//     setNoteArr(posts.documents);
//   } catch (error) {
//     console.error("Error fetching posts data:", error);
//   }
// };
