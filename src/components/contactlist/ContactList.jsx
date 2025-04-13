import styles from "./ContactList.module.css";
import Contact from '../contact/Contact.jsx'
import { useSelector } from "react-redux";
import {  selectFilteredContacts } from "../../redux/contacts/slice.js";
// import { selectFilter } from "../../redux/filtersSlice.js";


export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    // const filter = useSelector(selectFilter)
    // const visibleContacts = Array.isArray(contacts) ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : []; 
    return (
        <ul className={styles.list}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
</ul>
    )
}