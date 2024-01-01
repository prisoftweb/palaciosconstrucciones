import Link from "next/link"

export default function ImageLink({href, photo}: {href:string, photo:string}){
  return(
    <Link href={href}>
      <div>
        <img src={photo} alt="image" className="w-full" />
      </div>
    </Link>
  )
}