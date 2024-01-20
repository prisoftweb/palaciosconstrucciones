//import { getSliders } from "@/app/api/RouteSliders";
import { getSlidersBySegement } from "@/app/api/RouteSliders";
import ViewSlider from "@/components/sliders/ViewSlider";

export default async function Slider({segment}: {segment:string}){
  
  let sliders;
  try {
    sliders = await getSlidersBySegement(segment);
    if(typeof(sliders) !== 'string'){
      if(sliders.length > 0){
        return(
          <>          
            <ViewSlider sliders={sliders} />
          </>
        )
      }else{
        return <></>
      }    
    }else{
      return <h1 className="text-center text-red-500">{sliders}</h1>
    }
  } catch (error) {
    return <h1 className=" text-center text-red-500">Error al consulta sliders</h1>
  }
}