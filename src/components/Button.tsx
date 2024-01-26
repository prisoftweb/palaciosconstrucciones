interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
import button from '@/app/sass/components/_button.module.scss';


export default function Button({children, ...props}:Props){
  return(
    <button className="group text-white bg-blue-950 hover:bg-blue-500 flex 
        items-center justify-center space-x-2 rounded-full border px-5 py-2 
        text-2xl transition-colors w-52" {...props}>
      {children}
    </button>
      // <div className={`${button.button__normal} `} {...props}>
      //       <a                            
      //       className={`${button.button__text}`}
      //       href="/about"              
      //       >
      //         {children}
      //       </a>
      //   </div>
    // <button className={`${button.button__text}`} {...props}>
    //   {children}
    // </button>
  )
}