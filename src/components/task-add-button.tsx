import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TaskSection from "./task-section";

export type TaskSectionType = {
  id :number,
  name :string,
  tasks : []
}

export type TaskType = {
  id :number,
  sectionName :string,
  memo :string,
  isFocusMemo :boolean,
  isChecked :boolean,
  isFavorite :boolean
}

function SectionAddButton() {

  const [taskSectionList,setTaskSection] = useState<TaskSectionType[]>([]);
  let copyList  = [...taskSectionList];

  const addSection = () =>{
    // state配列に直接値をpushできないのでコピーの配列を作成し、そこに新たに要素を追加、コピーした配列をstateの配列へ変更。
    copyList.push({id:copyList.length,name:"",tasks:[]})
    setTaskSection(copyList);
  }

  const changeSectionName = (id :number,sectionName :string)=>{
    copyList[id].name = sectionName;
    copyList[id].tasks.forEach((task :TaskType)=>{
      task.sectionName = sectionName;
    })
    setTaskSection(copyList);

  }
  const removeSection = (id :number) =>{
    copyList.splice(id,1);
    setTaskSection(copyList);

  }
  const addTask = (id :number) =>{
    let taskList  :TaskType[]=  copyList[id].tasks;
   taskList.push({
      id: taskList.length,
      sectionName :copyList[id].name,
      memo :"",
      isFocusMemo :false,
      isChecked :false,
      isFavorite :false
    });
    setTaskSection(copyList);

  }
  const toggleCheck = (e :any,taskId :number,sectionId :number)=>{
    let task :TaskType= copyList[sectionId].tasks[taskId]; 
    if(task.isChecked){
      task.isChecked = false;
      e.currentTarget.classList.remove("text-red-500")
    }else{
      task.isChecked = true;
      e.currentTarget.classList.add("text-red-500")
    }
    setTaskSection(copyList);
  }
  const toggleFocusMemo = (e :any,taskId :number,sectionId :number)=>{
    let task :TaskType= copyList[sectionId].tasks[taskId]; 
    if(task.isFocusMemo){
      task.isFocusMemo = false;
      e.currentTarget.classList.remove("text-lime-400")
    }else{
      task.isFocusMemo = true;
      e.currentTarget.classList.add("text-lime-400")
    }
    
    setTaskSection(copyList);
  }
  const toggleFavorite = (e :any,taskId :number,sectionId :number)=>{
    let task :TaskType= copyList[sectionId].tasks[taskId]; 
    if(task.isFavorite){
      task.isFavorite = false;
      e.currentTarget.classList.remove("text-yellow-400")
    }else{
      task.isFavorite = true;
      e.currentTarget.classList.add("text-yellow-400")
    }
    setTaskSection(copyList);
  }
  const removeTask = (taskId :number,sectionId :number) => {
    let task :TaskType= copyList[sectionId].tasks[taskId]; 
    if(!task.isFavorite){
      copyList[sectionId].tasks.splice(taskId,1); 
      setTaskSection(copyList);
    }
  }
  const setMemo = (e :any,taskId :number,sectionId :number) =>{
    let task :TaskType= copyList[sectionId].tasks[taskId]; 
    task.memo = e.target.value;
  }

  return (
    <div>
    <button onClick={addSection} className="bg-indigo-700 font-semibold text-white py-2 px-4 m-3 rounded" type="button" > <FontAwesomeIcon  icon={faPlus} /> ADD SECTION</button>
    <TaskSection  taskSection = {taskSectionList}
    changeSectionName = {changeSectionName}
    removeSection = {removeSection}
    addTask = {addTask}
    toggleCheck = {toggleCheck}
    toggleFavorite = {toggleFavorite}
    toggleFocusMemo = {toggleFocusMemo}
    removeTask = {removeTask}
    setMemo = {setMemo}
    />
   
    </div>

  )
}

export default SectionAddButton;