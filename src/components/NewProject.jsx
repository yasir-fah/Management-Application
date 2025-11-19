import Input from "./Input.jsx";

import { useRef, useState } from "react";
 

function NewProject({importProjectData, cancelProject}) {

  const [projectId, setProjectId] = useState(0);

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    // 1- save new entry like this form:
    const newEntry = {
      id: projectId,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    }


    // 2- validate from data:
  if(newEntry.title === ""){
      alert("title can't be empty !");
      return;
    }
    if(newEntry.description === null || newEntry.description.length <= 4){
      alert("description can't be empty & length should be above 4");
      return;
    }
    if(newEntry.dueDate === "") {
      alert("due date can't be empty");
      return;
    }

    // 3- increment entry's id each time:
    setProjectId(current => ++current);

    // 4- take the result to app component:
    importProjectData(newEntry);

  }

  return (
    <div className="w-[35rem] mt-16"  >
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button  onClick={cancelProject} className="text-stone-800 hover:text-red-800 ">Cancel</button></li>
        <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
      </menu>
      <div className="">
        <Input ref={title} label='title'/>
        <Input ref={description} label='description' isTextarea={true}/>
        <Input ref={dueDate} label='due date' type="date"/>
      </div>
    </div>
  )
}

export default NewProject;