interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{}

export default function TextArea({...props}:Props){
  return(
    <textarea {...props} 
      className='shadow appearance-none border rounded w-full py-4 px-3 mt-2 
        text-2xl text-gray-900 leading-tight font-sans font-ligth 
        focus:outline-none focus:shadow-outline resize-none overflow-hidden' 
    />
  )
}