import {createSlice} from "@reduxjs/toolkit";
const initialState = [
    {id: "1", title: "to do", taskIds: ["1","2","3"]},
    {id: "2", title: "in progress", taskIds: []},
    {id: "3", title: "completed", taskIds: []},
]
export const columns = createSlice({
    name: "columns",
    initialState,
    reducers: {
        reorderTask: (state, action) => {
            const { id, taskIds } = action.payload;
            const columnToUpdate = state.find(column => column.id === id);

            if (columnToUpdate) {
                columnToUpdate.taskIds = taskIds;
            }
        },
        moveBetweenColumns: (state, action) => {
            const { start: {id: startId, taskIds: startTaskIds}, finish: {id: finishId, taskIds: finishIds} } = action.payload;
            const columnToUpdateStart = state.find(column => column.id === startId);

            if (columnToUpdateStart) {
                columnToUpdateStart.taskIds = startTaskIds;
            }
            const columnToUpdateFinish = state.find(column => column.id === finishId);

            if (columnToUpdateFinish) {
                columnToUpdateFinish.taskIds = finishIds;
            }
        },
        addTaskToColumn: (state,action) => {
          const column = state.find(e => e.id === "1")
            if (column) {
                column.taskIds.push(action.payload);
            }
        }
    }
})


export const {reorderTask, moveBetweenColumns, addTaskToColumn} = columns.actions
export default columns.reducer