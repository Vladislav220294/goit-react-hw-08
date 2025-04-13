import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
// import {deleteContact} from "../../redux/contactsSlice"
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
     const dispatch = useDispatch();
    return (
        <div className={styles.block}>
            <ul className={styles.list}>
        <li>{contact.name}</li>
        <li>{contact.number}</li>
            </ul>
            <button className={styles.button} onClick={()=> dispatch(deleteContact(contact.id))}>Delete</button>
</div>
    )
}