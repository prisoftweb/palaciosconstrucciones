import ImageStyle from '@/app/sass/layout/_imagentitulotextocard.module.scss'
import font from '@/app/sass/base/_typography.module.scss'
import icontitutext from "@/app/sass/components/_iconotitulotexto.module.scss";
import util from "@/app/sass/base/_utilities.module.scss";

export default function Card({text1, text2, image}: 
                          {text1:string, text2:string, image:string}){
  return(
    <>
      <div className={`${ImageStyle.imagentitulotextocard} ${util.u_margin_bottom_md}`} >
        <img
          className={`${icontitutext.iconotitulotexto__imagen} ${util.u_margin_bottom_sm} rounded-full`}
          src={image}
          alt={text1}
        />        
        <p className={`${font.heading2_card} ${util.u_margin_bottom_sm}`}>{text1}</p>
        <p className={`${font.heading3_card} ${util.u_margin_bottom_sm}`}>{text2}</p>
      </div>
    </>
  )
}