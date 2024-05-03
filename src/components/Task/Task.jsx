import styles from "./Task.module.css";
import {Draggable} from "react-beautiful-dnd";
import React from "react";

const Task = ({task, index}) => {
  return (
      <div className={`${styles.list} `}>
          <Draggable draggableId={`${task.id}`} index={index} key={task.id}>
              {(provided, snapshot) => (
                  <div className={snapshot.isDragging ? `${styles.task} taskItem list-group-item ${styles.dragging}`: `${styles.task} taskItem list-group-item`}
                       ref={provided.innerRef}
                       {...provided.draggableProps}
                       {...provided.dragHandleProps}
                  >
                      {task.content}
                  </div>
              )}
          </Draggable>
      </div>
  )
}

export default Task