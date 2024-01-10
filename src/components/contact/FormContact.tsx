"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect} from "react";
import Input from '../Input';
import Label from '../Label';
import FormikErrors from '../FormikErrors';
import Button from '../Button';
import { createComment } from '@/app/api/RouteContacts';

export default function FormContact(){

  //const [file, setFile] : any = useState();
  
  const [bandMessage, setBandMessage] = useState<boolean>(false);
  const [message, setMessage]= useState<string>('');
  const formikPass = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      comments: '',
    }, 
    validationSchema: Yup.object({
      name: Yup.string()
                  .required('El nombre es obligatorio'),
      email: Yup.string()
                  .required('El email es obligatorio'),
      phone: Yup.string()
                  .required('El telefono es obligatorio'),
      comments: Yup.string()
                  .required('El comentario es obligatorio'),
    }),
    
    onSubmit: async valores => {            
      const {email, name, comments, phone} = valores;
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('comments', comments);
      //formData.append('logo', file);
      formData.append('phoneNumber', phone);

      const commentsData = {
        name,
        email,
        message: comments,
        phone
      }
      try {
        const res = await createComment(commentsData);
        if(typeof(res)==='string'){
          setMessage(res);
          setBandMessage(true);
        }else{
          setMessage('Mensaje enviado, nosotros nos pondremos en contacto con usted');
          setBandMessage(true);
        }
      } catch (error) {
        setMessage('Lo sentimos ocurrio un problema al enviar su mensaje!');
        setBandMessage(true);
      }                            
    },       
  });

  useEffect(() => {
    setInterval(() => {
      setBandMessage(false);
      setMessage('')
    }, 4000)
    
  }, [bandMessage])

  return(
    <>      
      <form className="bg-white rounded shadow-md sm:px-8 pt-6 pb-8" 
        onSubmit={formikPass.handleSubmit}>
          {bandMessage? <h1 className='text-xl text-green-500'>{message}</h1>: ''}
        <div className="flex justify-center flex-wrap">
          <div className="w-full lg:w-1/2 min-w-max px-1 sm:px-5">
            <div className="mb-4 text-gray-700">
              <Label htmlFor='name' >Nombre</Label>
              <Input id='name' type='text' placeholder='Deja tu nombre' 
                value={formikPass.values.name}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}
              />
            </div>
            {formikPass.touched.name && formikPass.errors.name ? (
              <FormikErrors error={formikPass.errors.name} />
            ) : null}
            <div className="mb-4 text-gray-700">
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='tucorreo@dominio.com'
                value={formikPass.values.email}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}
              />
            </div>
            {formikPass.touched.email && formikPass.errors.email ? (
              <FormikErrors error={formikPass.errors.email}/>
            ) : null}
          </div>
          <div className="w-full lg:w-1/2 min-w-max px-1 sm:px-5">
            <div className="mb-4 text-gray-700">
              <Label htmlFor='phone'>Telefono</Label>
              <Input id='phone' type='text' placeholder='444 4444 444' 
                value={formikPass.values.phone}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}
              />
            </div>
            {formikPass.touched.phone && formikPass.errors.phone ? (
              <FormikErrors error={formikPass.errors.comments} />
            ) : null}
            <div className="mb-4 text-gray-700">
              <Label htmlFor='comments'>Comentarios</Label>
              <textarea name="comments" id="comments"
                className='shadow appearance-none border rounded w-full py-4 px-3 mt-2 
                  text-base md:text-2xl text-gray-500 leading-tight font-sans font-ligth 
                  focus:outline-none focus:shadow-outline resize-none overflow-hidden'
                placeholder="Dejanos tus comentarios"
                value={formikPass.values.comments}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}
              />
            </div>
            {formikPass.touched.comments && formikPass.errors.comments ? (
              <FormikErrors error={formikPass.errors.comments} />
            ) : null}            
          </div>
        </div>
        <div className='flex justify-center mt-5'><Button type='submit'>Enviar</Button></div>
      </form>
    </>
  )
}