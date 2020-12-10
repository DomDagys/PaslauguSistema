import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function Register({ history }) {
    const initialValues = {
        gender: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        role: ''
    };

    const validationSchema = Yup.object().shape({
        gender: Yup.string()
            .required('Pasirinkite lytį'),
        role: Yup.string()
            .required('Pasirinkite rolę'),
        firstName: Yup.string()
            .required('Įveskite vardą'),
        lastName: Yup.string()
            .required('Įveskite pavardę'),
        email: Yup.string()
            .email('El.Paštas blogo formato, turi būti pvz. sis@gmail.com')
            .required('Įveskite el.paštą'),
        password: Yup.string()
            .min(6, 'Slaptažodį turi sudaryti ne mažiau 6 simboliai')
            .required('Įveskite slaptažodį'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Slaptažodžiai turi sutapti')
            .required('Dar kartą įveskite slaptažodį'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Privalote sutikti su taisyklėm')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.register(fields)
            .then(() => {
                alertService.success('Registracija beveik baigta, patikrinkite savo el.paštą, kad ją užbaigtumėte! ', { keepAfterRouteChange: true });
                history.push('login');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h3 className="card-header">Registracija</h3>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>Jūsų vardas</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>Jūsų pavardė</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>El.Paštas</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                                <label>Kuo norite būti sistemoje?</label>
                                <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="User">Vartotojas</option>
                                    <option value="FreeLancer">Freelanceris</option>
                                    <option value="Both">Noriu būti ir freelanceris ir vartotojas</option>
                                </Field>
                                <ErrorMessage name="role" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label>Lytis</label>
                                <Field name="gender" as="select" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="man">Vyras</option>
                                    <option value="woman">Moteris</option>
                                    <option value="nzn">Kita</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                            </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Slaptažodis</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label>Pakartokite slaptažodį</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="form-check-label">Sutinku su taisyklėm</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Registruotis
                            </button>
                            <Link to="login" className="btn btn-link">Atšaukti</Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export { Register }; 