import { fetchContacts } from '../../redux/contacts/operations.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { selectContacts, selectIsLoading, selectIsError } from '../../redux/contacts/selectors.js'
import ContactForm from '../../components/contactform/ContactForm.jsx'
import SearchBox from '../../components/searchbox/SearchBox.jsx'
import ContactList from '../../components/contactlist/ContactList.jsx'
import Loader from '../../components/loader/Loader.jsx';


export default function ContactsPage() {
     const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
    const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchContacts()) }, [
dispatch
  ])
    return (
        <div>
  <h1>Phonebook</h1>
        <ContactForm  />
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <p>error</p>}
        {contacts.length >0 && <ContactList  />}
</div>
    )
}