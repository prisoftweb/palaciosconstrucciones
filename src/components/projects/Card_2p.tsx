export default function Card_2p({styleDiv, styleP1, styleP2, text1, text2}: 
                          {styleDiv:string, styleP1:string, styleP2:string
                          text1:string, text2:string}){
  return (
    <div className={styleDiv}>
      <p className={styleP1}>{text1}</p>
      <p className={styleP2}>{text2}</p>
    </div>
  )
}