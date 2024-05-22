import React from "react";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskPropsType>
    removeTask: (id: number)=> void
}

export type TaskPropsType = {
    id: number,
    title: string,
    isDone: boolean
}
export const Todolist = (props:TodolistPropsType) => {
    const onClickHandler = (id: number) => {
        props.removeTask(id)
    }
   return (<div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                    return (
                        <li>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={()=>onClickHandler(task.id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
        </div>)
}