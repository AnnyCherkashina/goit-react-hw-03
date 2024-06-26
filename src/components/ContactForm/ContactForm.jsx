import { Form, Formik, Field, ErrorMessage } from "formik"
import { nanoid } from "nanoid";
import * as Yup from "yup"
import s from "./ContactForm.module.css"



function ContactForm({ addContact }) {

    const initialValues = {
        name: '',
        number: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
        number: Yup.number().min(100, 'Too short').required('Required'),
    })

    const onSubmit = (data, options) => {
        addContact({ ...data, id: nanoid() })
        options.resetForm()
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className={s.form}>
                <label>
                    Name
                    <Field type='text' name='name' placeholder='Enter name...' />
                    <ErrorMessage component='span' name='name' />
                </label>
                <label>
                    Number
                    <Field type='number' name='number' placeholder='Enter number...' />
                    <ErrorMessage component='span' name='number' />
                </label>
                <button className={s.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm