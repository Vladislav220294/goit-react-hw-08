import {  createAction, createSlice } from "@reduxjs/toolkit";

// export const selectFilter = (state) => state.filters.name;

const filtersSlice  = createSlice({
    name: 'filters',
    initialState: {
        name: ""
    },
    reducers: {
        changeFilter: (state, action) => { 
            state.name= action.payload
            // return {
            //     ...state,
                
            //         name:  action.payload
                
            // };
        }
    }
});
export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
// export const changeFilter = createAction('filters/changeFilter');

// const initialState = {
//     name: ""
// };
// export function filterstsSlice (state=initialState, action) {
//     switch (action.type) {
//         case 'filters/changeFilter':
//             return {
//                 ...state,
                
//                     name:  action.payload
                
//             };
        
            
    
//         default:
//             return state;
//     }
// }