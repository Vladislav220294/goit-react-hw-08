import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";
import {fetchContacts, addContact, deleteContact} from './operations'
import { selectFilter } from "../filters/selectors";
import { selectContacts } from "../contacts/selectors";
import { logOut } from "../auth/operations";

// export const selectContacts = (state) => state.contacts.items;
// export const selectIsLoading = (state) => state.contacts.loading;
// export const selectIsError = (state) => state.contacts.error;
// export const selectFilteredContacts = (state) => {
//     const contacts = selectContacts(state);
//     const filter = selectFilter(state);
//     return Array.isArray(contacts) ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : [];
// }
export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    return Array.isArray(contacts) ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : [];
})

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [
    
        ],
        loading: false,
    error: false
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(addContact.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
        }).addCase(addContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(deleteContact.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter(item =>item.id !== action.payload.id)
        }).addCase(deleteContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(logOut.fulfilled, (state) => {
            state.items = []
        })
    }
});
export default contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const addContact = createAction('contacts/addContact') 
// export const deleteContact = createAction('contacts/deleteContact')

// const initialState = {
//         items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]
//     }
// export  function contactsSlice (state=initialState, action) {
//     switch (action.type) {
//         case 'contacts/addContact':
            
//             return {
//                 ...state,
                
//                     items: [...state.items, action.payload]
                
//             };
//         case 'contacts/deleteContact':
            
//             return {
//                 ...state,
                
//                     items: state.items.filter(item=> item.id !== action.payload)
                
//             };
        
            
    
//         default:
//             return state;
//     }
// }