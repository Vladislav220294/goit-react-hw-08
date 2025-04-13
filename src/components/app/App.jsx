
// import ContactForm from '../contactform/ContactForm.jsx'
// import SearchBox from '../searchbox/SearchBox.jsx'
// import ContactList from '../contactlist/ContactList.jsx'
import * as React from 'react';
import { Route, Routes } from "react-router";
import { lazy, Suspense, useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchContacts } from '../../redux/contacts/operations.js'
import Loader from '../loader/Loader.jsx'
// import {selectContacts, selectIsLoading, selectIsError} from '../../redux/contacts/selectors.js'
// import HomePage from '../../pages/HomePage/HomePage.jsx'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx'
// import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage.jsx'
// import LoginPage from '../../pages/LoginPage/LoginPage.jsx'
// import ContactsPage from '../../pages/ContactsPage/ContactsPage.jsx'
import Layout from '../layout/Layout.jsx'
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';
import RestrictedRoute from "../RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute.jsx"

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));




function App() {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  const isRefresh = useSelector(selectIsRefreshing)
  const dispatch = useDispatch()
  useEffect(() => {dispatch(refreshUser()) }, [
dispatch
  ])
  
  return isRefresh ? (<strong>Getting gata user, please wait...</strong>) : (
    <>
      {/* <div>
  <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <p>error</p>}
        {contacts.length >0 && <ContactList  />}
</div> */}
      
      <Layout>
        
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts"/>} />
            <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts"/>}/>
            
          
            <Route path='/contacts' element={<PrivateRoute component={<ContactsPage/> } redirectTo='/login'/>   } />
          <Route path='*' element={<NotFoundPage/> } />
</Routes>
      </Suspense>
      </Layout>
    
    </>
  )
}

export default App
