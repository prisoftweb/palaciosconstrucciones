import ImageStyle from '@/app/sass/layout/_imagentitulotextocard.module.scss'
import font from '@/app/sass/base/_typography.module.scss'

export default function Card({text1, text2, image}: 
                          {text1:string, text2:string, image:string}){
  return(
    <>
      <div className={`${ImageStyle.imagentitulotextocard}`} >
        <img src={image} alt="icono" className={`${ImageStyle.imagentitulotextocard__imagen}`} />
        <p className={`${font.heading2_card} mt-5`}>{text1}</p>
        <p className={`${font.heading3_card} mt-5`}>{text2}</p>
      </div>
    </>
  )
}