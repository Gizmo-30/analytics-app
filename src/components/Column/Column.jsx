import React from 'react'
import styles from './Column.module.css'
import {Card, CardBody, CardHeader, CardTitle, ListGroup, ListGroupItem} from "reactstrap";
import {Droppable} from "react-beautiful-dnd";
import Task from "../Task/Task";
import NewTask from "../NewTask/NewTask";
const Column = ({column, tasks, uniqueKey}) => {
  return (
    <Card className={`${styles.column} card-chart`}>
        <CardHeader>
            <h5 className="card-category">steps</h5>
            <CardTitle tag="h3">
                {column.title}
            </CardTitle>
        </CardHeader>
        <CardBody className={`${styles.cardBody} `}>
            <Droppable droppableId={column.id} key={uniqueKey}>
                {(provided, snapshot) => (
                    <div className={`${styles.list} list-group 
                        ${snapshot.isDraggingOver ? `${styles.dragOver} dragOver`  : ''}
                    `}
                         ref={provided.innerRef}
                         {...provided.droppableProps}
                    >
                        {column.id === '1' ? <NewTask />: null}
                        {tasks.map((task,index) => <Task task={task} index={index} key={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </CardBody>
    </Card>
  )
}

export default Column