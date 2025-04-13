import { configureStore} from "@reduxjs/toolkit";
import contactsSlice from '../redux/contacts/slice';
import filterstsSlice from './filters/slice';
import authSlice from './auth/slice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER } from "redux-persist";
// import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
    key: 'user_token',
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(authPersistConfig, authSlice)

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filters: filterstsSlice,
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor =persistStore(store)

// const initialState = {
//     contacts: {
//         items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]
//     },
//     filters: {
//         name: ""
//     }
// };
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'contacts/addContact':
            
//             return {
//                 ...state,
//                 contacts: {
//                     items: [...state.contacts.items, action.payload]
//                 }
//             };
//         case 'contacts/deleteContact':
            
//             return {
//                 ...state,
//                 contacts: {
//                     items: state.contacts.items.filter(item=> item.id !== action.payload)
//                 }
//             };
//         case 'filters/changeFilter':
//             return {
//                 ...state,
//                 filters: {
//                     name:  action.payload
//                 }
//             };
            
    
//         default:
//             return state;
//     }
    
// }
