import axios from "axios";

export async function getServices() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services`;
  try {
    const res = await axios.get(url);
    if(res.status===200) return res.data.data.data;
      return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al consultar servicios';
  }
}

export async function getImagesProjectsByService(id:string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects/getImagesProjectByServices/${id}`;
  try {
    const res = await axios.get(url);
    if(res.status===200) return res.data.data.data;
      return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al consultar las imagenes';
  }
}