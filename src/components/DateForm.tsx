"use client"
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import Button from './Button';
import { FaXmark } from 'react-icons/fa6';
import Modal from './Modal';

interface IValues {
    nom: string;
    prénom: string;
    téléphone: string;
    email: string;
    soin: string;
    message: string;
    disponibilités: string
}

function DateForm() {

    const [isVisible, setIsVisible] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const initialValues = {
        nom: "",
        prénom: "",
        téléphone: "",
        email: "",
        soin : "",
        message: "",
        disponibilités: ""
    }

    const validationSchema = Yup.object({
        nom: Yup.string().required('Le nom est requis'),
        prénom: Yup.string().required('Le prénom est requis'),
        téléphone: Yup.string()
            .matches(/^[0-9]+$/, 'Le numéro de téléphone ne peut contenir que des chiffres')
            .length(10, 'Votre numéro doit contenir les 10 chiffres')
            .required('Le téléphone est requis'),
        email: Yup.string().email('Email invalide').required('L\'email est requis'),
        soin: Yup.string().required('Le soin est requis'),
        message: Yup.string().required('Le message est requis'),
        disponibilités: Yup.string().required('Les disponibilités sont requises'),
    });

    const handleSubmit = async (values: IValues, { resetForm }: { resetForm: () => void }) => {
       
        const response = await fetch('/api/sendEmail', {
            method: "POST",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(values)
        })
        const data = await response.json();
        setIsModal(!isModal)
        resetForm();
        return data
    }

  return (
<div className="relative">
    <Button
        to="/eft#form"
        description="Prendre un rendez vous"
        onClick={(e) => {
            setIsVisible(!isVisible);
            e.preventDefault();
        }}
    />
    {isModal && 
        <Modal>Votre demande de rendez-vous a bien été prise en compte</Modal>
    }
    {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative sm:w-[40vw] w-[90vw] max-h-[80vh] sm:max-h-[90vh] bg-secondary_color sm:rounded-2xl rounded-lg border-2 border-slate-800 p-8 pt-12 overflow-y-auto shadow-lg">
                <FaXmark
                    className="absolute right-4 top-4 text-[1.5rem] cursor-pointer z-10"
                    onClick={() => setIsVisible(!isVisible)}
                />
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className="flex flex-col gap-5 justify-center items-center lg:px-[10vw]">
                        <div className="flex flex-col gap-2 w-[100%] ">
                            <label htmlFor="nom" className="text-center">Entrez votre nom</label>
                            <Field type="text" name="nom" className="px-2 py-1 rounded-lg shadow-lg" />
                            <ErrorMessage name="nom" component="div" className="text-red-600 font-semibold font-oldStandard" />
                        </div>

                        <div className="flex flex-col gap-2 w-[100%]">
                            <label htmlFor="prénom" className="text-center">Entrez votre prénom</label>
                            <Field type="text" name="prénom" className="px-2 py-1 rounded-lg shadow-lg" />
                            <ErrorMessage name="prénom" component="div" className="text-red-600 font-semibold font-oldStandard" />
                        </div>

                        <div className="flex flex-col gap-2 w-[100%]">
                            <label htmlFor="téléphone" className="text-center">Entrez votre numéro de téléphone</label>
                            <Field type="text" name="téléphone" className="px-2 py-1 rounded-lg shadow-lg" />
                            <ErrorMessage name="téléphone" component="div" className="text-red-600 font-semibold font-oldStandard" />
                        </div>

                        <div className="flex flex-col gap-2 w-[100%]">
                            <label htmlFor="email" className="text-center">Entrez votre email</label>
                            <Field type="email" name="email" className="px-2 py-1 rounded-lg shadow-lg" />
                            <ErrorMessage name="email" component="div" className="text-red-600 font-semibold font-oldStandard" />
                        </div>

                        <div className="flex flex-col gap-2 w-[100%]">
                            <label htmlFor="soin" className="text-center">Quel type de soin desirez vous ?</label>
                            <Field as="select" name="soin" className="px-2 py-1 rounded-lg shadow-lg">
                                <option value="">Selectionnez un soin</option>
                                <option value="eft">E.F.T</option>
                                <option value="Fleurs de bach">Fleurs de bach</option>
                                <option value="Massage holistique">Massage holistique</option>
                                <option value="Soin energétique">Soin energétique</option>
                            </Field>
                            <ErrorMessage name="soin" component="div" className="text-red-600 font-semibold font-oldStandard" />
                        </div>

                        <div className="flex flex-col gap-2 w-[100%]">
                            <label htmlFor="message" className="text-center">Votre message</label>
                            <Field as="textarea" name="message" className="px-2 py-1 rounded-lg shadow-lg" />
                            <ErrorMessage name="message" component="div" className="text-red-600 font-semibold font-oldStandard" />
                        </div>

                        <div className="flex flex-col gap-2 w-[100%]">
                            <label htmlFor="disponibilités" className="text-center">Vos disponibilités</label>
                            <Field as="textarea" name="disponibilités" className="px-2 py-1 rounded-lg shadow-lg" />
                            <ErrorMessage name="disponibilités" component="div" className="text-red-600 font-semibold font-oldStandard" />
                        </div>

                        <button type="submit" className="mt-10 px-6 py-2 rounded-2xl bg-slate-500 font-bold shadow-lg">Valider</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )}
</div>


  )
}

export default DateForm