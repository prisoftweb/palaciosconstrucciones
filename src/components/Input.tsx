interface Props extends React.InputHTMLAttributes<HTMLInputElement>{}

export default function Input({...props}:Props){
  return(
    <input {...props} 
      className="shadow appearance-none border rounded w-full mt-2 py-4 px-3 
        text-base md:text-2xl text-gray-500 leading-tight font-sans font-ligth 
        focus:outline-none focus:shadow-outline" 
    />
  )
}