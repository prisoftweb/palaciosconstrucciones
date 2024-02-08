interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{}
export default function Label({children, ...props}: Props){
  return(
    <label {...props} className="focus-visible after:content-['*'] after:ml-0.5 after:text-red-500 block text-2xl font-medium text-slate-700">
      {children}
    </label>
  )
}