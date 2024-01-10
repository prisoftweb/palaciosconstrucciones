import { FormikErrors } from "formik";

export default function FormikErrors({error}: {error:any}){
  return(
    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
      <p>{error}</p>
    </div>
  )
}