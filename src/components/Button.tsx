interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

export default function Button({children, ...props}:Props){
  return(
    <button className="group text-white bg-blue-950 hover:bg-blue-500 flex 
        items-center justify-center space-x-2 rounded-full border px-5 py-2 
        text-sm md:text-2xl transition-colors w-36 lg:w-52" {...props}>
      {children}
    </button>
  )
}