import React, {useState} from 'react'
import styles from './NewTask.module.css'
import {Button, Form, Input, Label} from "reactstrap";
import { BiSolidSend } from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../../Store/Slices/tasks";
import { v4 as uuidv4 } from 'uuid';
import {addTaskToColumn} from "../../Store/Slices/columns";

const NewTask = () => {
    const dispatch = useDispatch()
    const stateTasks = useSelector(state => state.tasks)
    const [state, setState] = useState('')
    const Onsubmit = (e) => {
        e.preventDefault()
        const id = uuidv4()

        dispatch(addTask({id: id, content: state}))
        setState('')
        dispatch(addTaskToColumn(id))
    }
    return (
        <Form className={`${styles.parent} newTask`} onSubmit={Onsubmit}>
            {/*<Button className={`${styles.button} newTasks__button`} type="button">New Task...</Button>*/}
            <Label  htmlFor="input" className={`${styles.label} newTasks__label`}>
                <Input type="text" id="input" className={`${styles.input}  newTask__input ${state ? styles.active : ''}`}
                       value={state}
                       placeholder="New Task..."
                       onChange={(e) => setState(e.target.value)}
                />
                <Button className={`${styles.send} ${styles.button} newTasks__send_button`}
                        type="submit" onClick={(e) => Onsubmit(e)}
                        disabled={!state}
                ><BiSolidSend /></Button>
            </Label>
        </Form>
    )
}

export default NewTask