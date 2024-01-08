import { getSlider, getSliders } from "@/app/api/RouteSliders";
import ViewSlider from "@/components/sliders/ViewSlider";

export default async function Slider(){
  
  // const id = params.id;  
  const token = '';
  let sliders;
  try {
    sliders = await getSliders(token);
    if(typeof(sliders) !== 'string'){
      // const index = sliders.findIndex((slider:any) => slider._id === id);
      const  index = 0;
      return(
        <>          
          <ViewSlider sliders={sliders} token={token} indexStart={index} />
        </>
      )    
    }else{
      return <h1 className="text-center text-red-500">{sliders}</h1>
    }
  } catch (error) {
    return <h1 className=" text-center text-red-500">Error al consulta sliders</h1>
  }
}