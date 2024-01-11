import axios from "axios";

export async function getIssues() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/issuelists`;
  try {
    const issues = await axios.get(url);
    if(issues.status===200) return issues.data.data.data;
    return issues.statusText;
  } catch (error) {
    return 'Ocurrio un error al consultar issues...';
  }
}

export async function createReview(review:any) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews`;
  console.log(JSON.stringify(review));
  console.log(url);
  try {
    const res = await axios.post(url, JSON.stringify(review), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(res.status === 201) return res.status;
    return res.statusText;
  } catch (error) {
    return 'Ocurrio un problema al enviar review..';
  }
}