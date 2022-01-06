
import { TaskSectionType } from "./task-add-button";
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  TaskItem  from "./task-item"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TaskSection(props: any) {
  const taskSectionList = props.taskSection;

  const handleChangeName = (index:number,value:any) =>{
    props.changeSectionName(index,value);
    console.log(taskSectionList)
  }
  const handleRemoveSection = (id :number) =>{
    props.removeSection(id);
    console.log(taskSectionList)
  }
  const handleAddTask = (id :number) =>{
    props.addTask(id);
    console.log(taskSectionList)

  };
  const handleCheck = (e :any,taskId :number,sectionId :number) =>{
    props.toggleCheck(e,taskId,sectionId);
  }
  const handleFavorite = (e :any,taskId :number,sectionId :number) =>{
    props.toggleFavorite(e,taskId,sectionId);
  }
  const handleFocusMemo = (e :any,taskId :number,sectionId :number) =>{
    props.toggleFocusMemo(e,taskId,sectionId);
  }
  const handleRemoveTask = (taskId :number,sectionId :number) =>{
    props.removeTask(taskId,sectionId)
  }
  const handleTextare = (e :any,taskId :number,sectionId :number) =>{
    props.setMemo(e,taskId,sectionId)
  }
  

  return (
    <div className="flex items-start overflow-x-auto w-auto">
      {      
        taskSectionList.map((section: TaskSectionType,index :number) => (
          <div key={section.id} className="w-64 m-3 bg-zinc-100 p-2 drop-shadow-lg rounded">
            <TextField fullWidth label="SectionName" id="fullWidth" onChange ={(event)=> handleChangeName(index,event.target.value)}/>

              <TaskItem tasks={section.tasks}
              sectionId ={section.id}
              handleCheck = {handleCheck}
              handleFavorite = {handleFavorite}
              handleFocusMemo = {handleFocusMemo}
              handleRemoveTask = {handleRemoveTask}
              handleTextare = {handleTextare}
              />

            <div className="m-3 px-3  flex justify-between">
              <button className="plus" onClick={() =>{
                handleAddTask(index);
              }}>
                <FontAwesomeIcon className="hover:text-red-600" icon={faPlus} size="lg"/>
              </button>
              <button className="trash" onClick={() => {
                handleRemoveSection(index);
              }}>
                <FontAwesomeIcon className="hover:text-blue-700" icon={faTrash} size="lg"/>
              </button>
            </div>
          </div>
        ))
      }
    </div>
      )
  
}


export default TaskSection;