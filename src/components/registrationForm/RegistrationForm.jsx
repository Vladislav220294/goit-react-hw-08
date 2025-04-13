import styles from "./RegistrationForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {register} from "../../redux/auth/operations"

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  
    const ContactkSchema = Yup.object().shape({
        name: Yup.string().min(3, "Must be min 3 chars").max(50, "Must be max 50 chars").required("Required"),
        email: Yup.string()
      .email("Please enter a valid email!")
      .required("Required"),
        password:  Yup.string().min(8, "Must be min 8 chars").max(50, "Must be max 50 chars").required("Required"),
    });
    const dispatch = useDispatch()
  const handleSubmit = (values, actions) => {
      dispatch(register(values))
        actions.resetForm();
    }
    return (
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactkSchema}>
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field  type="text" name="name" id="name"/>
        <ErrorMessage name="name" />
        <label htmlFor="email">Email</label>
        <Field type="text" name="email" id="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">Password</label>
        <Field type="text" name="password" id="password" />
        <ErrorMessage name="password"  />
        <button className={styles.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
    )
}