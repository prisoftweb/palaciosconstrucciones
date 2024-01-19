import axios from "axios";

export async function getSliders(){
  
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders`;
  
  let sliders;
  try {
    sliders = await axios.get(url);
    if(sliders.status===200) return sliders.data.data.data;
    return sliders.statusText;
  } catch (error) {
    return 'Ocurrio un problema al consultar sliders';
  }  
}

export async function getSlidersBySegement(segment:string){
  
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders/getSliderBySegment/${segment}`;
  
  let sliders;
  try {
    sliders = await axios.get(url);
    if(sliders.status===200) return sliders.data.data.data;
    return sliders.statusText;
  } catch (error) {
    return 'Ocurrio un problema al consultar sliders';
  }  
}

export async function getSlider(auth_token: string, id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders/${id}`;

  try {
    const slider = await axios.get(url, {
      headers: {
        Authorization: `bearer ${auth_token}`,
      }
    })
  
    if(slider.status === 200){
      return slider;
    }
    return 'Error al obtener slider..';
  } catch (error) {
    return 'Ocurrio un error al obtener slider..';
  }
  
  
  
}

export async function createSlider(dataSlider: any, auth_token: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders`;

  const slider = await axios.post(url, JSON.stringify(dataSlider), {
    headers: {
      'Authorization': `bearer ${auth_token}`,
      'content-type': 'application/json'
    }
  })

  return slider.status;
}

export async function createSliderImage(dataSlider: any, auth_token:string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders/sliderWithImage`;
  
  try {
    const res = await axios.post(url, dataSlider, {
      headers: {
        'Authorization': `Bearer ${auth_token}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    if(res.status === 201){
      return res.status
    }else{
      return res.statusText;
    }
  } catch (error) {
    return 'Ocurrio un problema al crear slider con imagen';
  }  
}

export async function updateSlider(auth_token:string, dataSlider: any, id:string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders/${id}`;

  const res = await axios.patch(url, JSON.stringify(dataSlider), {
    headers: {
      'Authorization': `bearer ${auth_token}`,
      'Content-Type': 'application/json'
    }
  })

  return res.status;
}

export async function updateSliderImage(auth_token:string, dataSlider:FormData, id:string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders/updateMeImage/${id}`;
  try {
    const res = await axios.patch(url, dataSlider, {
      headers: {
        'Authorization': `Bearer ${auth_token}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    if(res.status === 200){
      return res.status;
    }else{
      res.statusText;
    }

    return 'Ocurrio un evento inesperado en actualizar imagen slider'
  } catch (error) {
    return `Ocurrio un error al actualizar imagen slider`;
  }
}

export async function removeSlider(auth_token:string, id:string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/sliders/${id}`;

  const res = await axios.delete(url, {
    headers: {
      'Authorization': `bearer ${auth_token}`
    }
  })

  return res.status;
}