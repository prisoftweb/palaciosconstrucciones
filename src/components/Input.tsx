interface Props extends React.InputHTMLAttributes<HTMLInputElement>{}

export default function Input({...props}:Props){
  return(
    <input {...props} 
      className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-500 leading-tight text-2xl font-medium focus:ring-1 focus:ring-blue-600"
    />
  )
}