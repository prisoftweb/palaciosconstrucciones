"use client"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState} from "react";
// import { createCompany, updateCompany, createCompanyLogo, updateCompanyLogo } from "@/app/api/companies/route";
// import { useRouter } from "next/navigation";

export default function FormContact({token, company}: 
        {token:string, company: any}){

  const [file, setFile] : any = useState();

//   const router = useRouter();

  let nameC = ''; 
  let emailC = ''; 
  let phoneC = ''; 
  let addressC = '';

  if(company !== ''){
    nameC = company.name;
    emailC = company.email;
    phoneC = company.phoneNumber? company.phoneNumber : '';
    addressC = company.address;
  }

  const formikPass = useFormik({
    initialValues: {
      name: nameC,
      email: emailC,
      phone: phoneC,
      address: addressC,
    }, 
    validationSchema: Yup.object({
      name: Yup.string()
                  .required('El nombre es obligatorio'),
      email: Yup.string()
                  .required('El email es obligatorio'),
      phone: Yup.string()
                  .required('El telefono es obligatorio'),
      address: Yup.string()
                  .required('La direccion es obligatoria'),
    }),
    
    onSubmit: async valores => {            
      const {email, name, address, phone} = valores;
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('address', address);
      formData.append('logo', file);
      formData.append('phoneNumber', phone);

      const companyData = {
        name,
        email,
        address,
        phoneNumber: phone
        // phoneNumber: {
        //   "type": "trabajo",
        //   phone
        // },
      }
      
      if(company === ''){
        // try {
        //   if(file){
        //     let res = await createCompanyLogo(formData, token);
        //     if(res === 201){
        //       showToastMessage(`Compañia creada exitosamente!`);
        //       setTimeout(() =>{
        //         router.push('/companies')
        //         //window.location.reload();
        //       }, 1000)
        //       setTimeout(() =>{
        //         window.location.reload();
        //       }, 2500)
        //     }else{
        //       showToastMessageError(res.toString());
        //     }
        //   }else{
        //     let res = await createCompany(token, companyData);
        //     if(res === 201) {
        //       showToastMessage(`Compañia creada exitosamente!`);
        //       setTimeout(() =>{
        //         router.push('/companies')
        //       }, 1000)
        //       setTimeout(() => {
        //         window.location.reload();
        //       }, 2500);
        //     } else {
        //       showToastMessageError(res.toString());
        //     }
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
      }else{
        // try {
        //   if(file){
        //     let res = await updateCompanyLogo(token, company._id, formData);
        //     if(res === 200){
        //       showToastMessage(`Compañia actualizada exitosamente!`);
        //       setTimeout(() =>{
        //         router.push('/companies')
        //       }, 1000)
        //       setTimeout(() => {
        //         window.location.reload();
        //       }, 2500);
        //     }else{
        //       showToastMessageError(res.toString());
        //     }
        //   }else{
        //     let res = await updateCompany(token, company._id, JSON.stringify(companyData));
        //     if(res === 200){
        //       showToastMessage(`Compañia actualizada exitosamente!`);
        //       setTimeout(() =>{
        //         router.push('/companies')
        //       }, 2000)
        //       setTimeout(() => {
        //         window.location.reload();
        //       }, 2500);
        //     } else {
        //       showToastMessageError(res.toString());
        //     }
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
      }                            
    },       
  });

  return(
    <>      
      <form className="bg-white rounded shadow-md sm:px-8 pt-6 pb-8" 
        onSubmit={formikPass.handleSubmit}>
        <div className="flex justify-center flex-wrap">
          <div className="w-full sm:w-1/2 min-w-max px-1 sm:px-5">
            <div className="mb-4 text-gray-700">
              <label className="block text-sm font-medium text-gray-500" htmlFor="name">
                Nombre
              </label>
              <input 
                className="shadow appearance-none border rounded w-full mt-2 py-4 px-3 text-base text-gray-500 leading-tight font-sans font-ligth focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Nombre empresa"
                autoFocus
                value={formikPass.values.name}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}>
              </input>
            </div>
            {formikPass.touched.name && formikPass.errors.name ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{formikPass.errors.name}</p>
              </div>
            ) : null}
            <div className="mb-4 text-gray-700">
              <label className="block text-sm font-medium text-gray-500" htmlFor="email">
                Email
              </label>
              <input 
                className="shadow appearance-none border rounded w-full mt-2 py-4 px-3 text-base text-gray-500 leading-tight font-sans font-ligth focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="email@empresa.com"
                value={formikPass.values.email}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}>
              </input>
            </div>
            {formikPass.touched.email && formikPass.errors.email ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{formikPass.errors.email}</p>
              </div>
            ) : null}
            
          </div>
          <div className="w-full sm:w-1/2 min-w-max px-1 sm:px-5">
          <div className="mb-4 text-gray-700">
              <label className="block text-sm font-medium text-gray-500" htmlFor="phone">
                Telefono
              </label>
              <input 
                className="shadow appearance-none border rounded w-full mt-2 py-4 px-3 text-base text-gray-500 leading-tight font-sans font-ligth focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="444 4444 444"
                value={formikPass.values.phone}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}>
              </input>
            </div>
            {formikPass.touched.phone && formikPass.errors.phone ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{formikPass.errors.phone}</p>
              </div>
            ) : null}
            <div className="mb-4 text-gray-700">
              <label className="block text-sm font-medium text-gray-500" htmlFor="address">
                Comentarios
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-4 px-3 mt-2 text-base text-gray-500 leading-tight font-sans font-ligth focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="calle #?? colonia"
                value={formikPass.values.address}
                onChange={formikPass.handleChange}
                onBlur={formikPass.handleChange}>
              </input>
            </div>
            {formikPass.touched.address && formikPass.errors.address ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{formikPass.errors.address}</p>
              </div>
            ) : null}            
          </div>
        </div>        
      </form>
    </>
  )
}