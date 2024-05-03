import React, {useState} from 'react'
// import Column from "../Column/Column";
// import styles from './Board.module.css'
// import {Col, Row} from "reactstrap";
// import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
// import {initialData} from "../../Store";
// import task from "../Task/Task";
import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from "reactstrap";
import {DragDropContext} from "react-beautiful-dnd";
import Column from "../Column/Column";
import {moveBetweenColumns, reorderTask} from "../../Store/Slices/columns";

const Board = () => {

    const {tasks: stateTasks, columns: stateColumns} = useSelector((state) => state)
    const dispatch = useDispatch()

    const onDragEnd = result => {
        const {destination, source, draggableId} = result

        if(!destination) {
            return
        }
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const column = stateColumns.find(e => e.id === source.droppableId)


        const start = stateColumns.find(e => e.id === source.droppableId)
        const finish = stateColumns.find(e => e.id === destination.droppableId)
        if(start === finish) {
            const newTasksIds = Array.from(column.taskIds)
            newTasksIds.splice(source.index, 1)
            newTasksIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...column,
                taskIds: newTasksIds,
            }

            dispatch(reorderTask(newColumn))
            return
        }

        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTasksIds = Array.from(finish.taskIds)
        finishTasksIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTasksIds,
        }

        const newState = {
            start: newStart,
            finish: newFinish
        }
        dispatch(moveBetweenColumns(newState))

    }
  return (
          <Row>
            <DragDropContext onDragEnd={onDragEnd}>
              {stateColumns.map((column, index) => {
                  const tasks = column.taskIds.map(taskIds => stateTasks.find(e => e.id === taskIds))
                  return <Col key={index} style={{display: "flex", flexDirection: "column"}}><Column uniqueKey={column.id} column={column} tasks={tasks}/></Col>
              })}
            </DragDropContext>
          </Row>
  )
}


export default Board