interface Props extends React.LabelHTMLAttributes<HTMLLabelElement>{}
export default function Label({children, ...props}: Props){
  return(
    <label {...props} className="block text-2xl font-medium text-gray-900">
      {children}
    </label>
  )
}