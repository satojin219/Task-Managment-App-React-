import { TaskType } from "./task-add-button";
import { TextareaAutosize, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faFileAlt, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
function TaskItem(props: any) {
  const tasks = props.tasks;
  const sectionId = props.sectionId;

  return (
    <div className="columns-1">
      {
        tasks.map((task: TaskType,taskId :number) =>
           

          <div key={task.id} className="mx-3 bg-zinc-50 my-5 p-3 drop-shadow-md">
            <TextField fullWidth label="Title" id="fullWidth" />

            <div className="my-2 text-xs text-gray-500 font-bold">Section Name: {task.sectionName}</div>

            <div className="my-2 text-xs text-gray-500 font-bold">Memo: </div>

            {task.isFocusMemo ?
            <textarea placeholder="メモを記入して下さい"
            style={{ width: 200 }}
            onChange={(event) => props.handleTextare(event,taskId,sectionId)}></textarea>
           : <div className="my-2 text-sm text-gray-700 font-bold">{task.memo}</div>}


            <div className="d-felx justify-content-end">
              <div className="py-3 mr-1 flex justify-end">

                <button onClick={(event) => props.handleFocusMemo(event, taskId, sectionId)}>
                  <FontAwesomeIcon className="mx-1" icon={faFileAlt} size="sm" />
                </button>
                <button onClick={(event) => props.handleCheck(event, taskId, sectionId)}>
                  <FontAwesomeIcon className="mx-1 " icon={faCheck} size="sm" />
                </button>

                <button onClick={(event) => props.handleFavorite(event, taskId, sectionId)}>
                  <FontAwesomeIcon className="mx-1" icon={faStar} size="sm" />
                </button>

                <button onClick={() => props.handleRemoveTask(taskId, sectionId)}>
                  <FontAwesomeIcon className="mx-1 hover:text-blue-500" icon={faTrash} size="sm" />
                </button>

              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default TaskItem;