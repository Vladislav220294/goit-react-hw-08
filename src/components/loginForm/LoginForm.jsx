import styles from "./LoginForm.module.css"
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";

const initialValues = {
  
  email: "",
  password: "",
};

export default function LoginForm() {
    const ContactkSchema = Yup.object().shape({
        
        email: Yup.string()
      .email("Please enter a valid email!")
      .required("Required"),
        password:  Yup.string().min(8, "Must be min 8 chars").max(50, "Must be max 50 chars").required("Required"),
    });
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
        actions.resetForm();
    }
    return (
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactkSchema}>
      <Form className={styles.form}>
        
        <label htmlFor="email">Email</label>
        <Field type="text" name="email" id="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">Password</label>
        <Field type="text" name="password" id="password" />
        <ErrorMessage name="password"  />
        <button className={styles.button} type="submit">
          Login
        </button>
      </Form>
    </Formik>
    )
}