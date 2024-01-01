import axios from "axios";

export async function getProjects() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects`;
  try {
    const res = await axios.get(url);
    if(res.status===200) return res.data.data.data;
    return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al obtener proyectos..';
  }
}

export async function getProject(id:string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/projects/${id}`;
  try {
    const res = await axios.get(url);
    if(res.status===200) return res.data.data.data;
    return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al consultar proyecto..';
  }
}