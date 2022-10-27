import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksStateType = {
    [todoListId: string]: TaskType[]
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Butter", isDone: true},
            {id: v1(), title: "Meet", isDone: false},
            {id: v1(), title: "Fish", isDone: false},
            {id: v1(), title: "Cheese", isDone: false},
        ]
    });


    function removeTask(id: string, todoListID: string) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(t => t.id != id)});
    }

    function addTask(title: string, todoListID: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListID]: [task, ...tasks[todoListID]]});
    }

    function changeStatus(taskId: string, isDone: boolean, todoListID: string) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].map(s => s.id === taskId ? {...s, isDone: isDone} : s)})
    }

    function changeTodoListFilter(value: FilterValuesType, todoListID: string) {
        setTodolists(todolists.map(tl => tl.id === todoListID ? {...tl, filter: value} : tl));
    }

    const todoListComponents = todolists.map(tl => {
        let tasksForTodolist = tasks[tl.id];
        if (tl.filter === "active") {
            tasksForTodolist = tasks[tl.id].filter(t => !t.isDone);
        }
        if (tl.filter === "completed") {
            tasksForTodolist = tasks[tl.id].filter(t => t.isDone);
        }
        return <Todolist
            key={tl.id}
            title={tl.title}
            todoListID={tl.id}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeTodoListFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
        />
    })
    return (
        <div className="App">
            {todoListComponents}
        </div>
    );
}

export default App;
