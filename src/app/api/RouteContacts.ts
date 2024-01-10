import axios from "axios";

export async function createComment(commentsData:any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contacts/`;

  console.log(url)
  console.log(JSON.stringify(commentsData));
  try {
    const res = await axios.post(url, JSON.stringify(commentsData), {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    console.log(res);
    if(res.status===201) return res.status
    return res.statusText;
  } catch (error) {
    return 'Ocurrio un error al enviar comentario..';
  }
}