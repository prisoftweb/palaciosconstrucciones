interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{}
export default function Label({children, ...props}: Props){
  return(
    <label {...props} className="block text-sm md:text-2xl font-medium text-gray-500">
      {children}
    </label>
  )
}