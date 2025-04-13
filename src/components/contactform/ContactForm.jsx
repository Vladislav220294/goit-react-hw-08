import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styles from "./ContactForm.module.css"
import { useDispatch, useSelector } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
    const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();
  // const contacts = useSelector((state) => state.contacts.items);
const ContactkSchema = Yup.object().shape({
    name: Yup.string().min(3, "Must be min 3 chars").max(50, "Must be max 50 chars").required("Required"),
    number: Yup.number().min(3, "Must be min 3 numbers").required("Required"),
      
  });

    const handleSubmit = (values, actions) => {
        const newContact = {
      // id: nanoid(),
      name: values.name,
      number: values.number,
      };
      dispatch(addContact(newContact));
        
        actions.resetForm()
    }
    return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={ContactkSchema}>
      <Form className={styles.form}>
        <label htmlFor={nameId}>Name</label>
        <Field  type="text" name="name" id={nameId} />
        <ErrorMessage name="name" />
        <label htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage name="number"  />
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}