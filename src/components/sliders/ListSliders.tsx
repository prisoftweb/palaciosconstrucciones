import { getSliders } from "@/app/api/RouteSliders";
import ViewSlider from "@/components/sliders/ViewSlider";

export default async function Slider(){
  
  let sliders;
  try {
    sliders = await getSliders();
    if(typeof(sliders) !== 'string'){
      return(
        <>          
          <ViewSlider sliders={sliders} />
        </>
      )    
    }else{
      return <h1 className="text-center text-red-500">{sliders}</h1>
    }
  } catch (error) {
    return <h1 className=" text-center text-red-500">Error al consulta sliders</h1>
  }
}