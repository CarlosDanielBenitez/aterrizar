import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import './styles.css';

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            civilStatus: '',
            dni: '',
            message: '',
        },
        validationSchema: yup.object({
            name: yup.string().required('El nombre es obligatorio'),
            email: yup
                .string()
                .email('El correo electrónico no es válido')
                .required('El correo electrónico es obligatorio'),
            phoneNumber: yup.string().required('El número de celular es obligatorio'),
            civilStatus: yup.string().required('El estado civil es obligatorio'),
            dni: yup.string().required('El DNI es obligatorio'),
            message: yup.string().required('El mensaje es obligatorio'),
        }),
        onSubmit: (values) => {
            console.log('Datos enviados:', values);
            
            Swal.fire({
                icon: 'success',
                title: '¡Formulario enviado!',
                text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
            });
            formik.resetForm();
        },
    });

    return (
        <div className="contact-form">
            <h2>Contacto</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
              
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ingresa tu nombre"
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name && <div className="error">{formik.errors.name}</div>}
                </div>
                <div className="form-group">
                 
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ingresa tu correo electrónico"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </div>
                <div className="form-group">
                 
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Ingresa tu número de celular"
                        {...formik.getFieldProps('phoneNumber')}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber && <div className="error">{formik.errors.phoneNumber}</div>}
                </div>
                <div className="form-group">
          
                    <input
                        type="text"
                        id="civilStatus"
                        name="civilStatus"
                        placeholder="Ingresa tu estado civil"
                        {...formik.getFieldProps('civilStatus')}
                    />
                    {formik.touched.civilStatus && formik.errors.civilStatus && <div className="error">{formik.errors.civilStatus}</div>}
                </div>
                <div className="form-group">
             
                    <input
                        type="text"
                        id="dni"
                        name="dni"
                        placeholder="Ingresa tu DNI"
                        {...formik.getFieldProps('dni')}
                    />
                    {formik.touched.dni && formik.errors.dni && <div className="error">{formik.errors.dni}</div>}
                </div>
                <div className="form-group">
              
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Escribe tu mensaje aquí"
                        rows="4"
                        {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message && <div className="error">{formik.errors.message}</div>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
