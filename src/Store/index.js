// export const initialData = {
//     tasks: {
//         "t1": {id: "t1" , content: 'task 1'},
//         "t2": {id: "t2" , content: 'task 2'},
//         "t3": {id: "t3" , content: 'task 3'},
//     },
//     columns: {
//         "c1": {
//             id: "c1",
//             title: "To do",
//             taskIds: ["t1", "t2", "t3"],
//         },
//         "c2": {
//             id: "c2",
//             title: "In progress",
//             taskIds: [],
//         },
//         "c3": {
//             id: "c3",
//             title: "completed",
//             taskIds: [],
//         }
//     },
//     columnOrder: ["c1","c2","c3"]
// }
import {configureStore} from "@reduxjs/toolkit";
import {tasks} from "./Slices/tasks";
import {columns} from "./Slices/columns";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        tasks: tasks.reducer,
        columns: columns.reducer,
    }
})
setupListeners(store.dispatch);
