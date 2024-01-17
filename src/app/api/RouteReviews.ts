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

export async function createReviewPhoto(review:FormData) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/reviewWithPhoto`;
  console.log(url);
  console.log(review.get('name'));
  console.log(review.get('email'));
  console.log(review.get('review'));
  console.log(review.get('category'));
  console.log(review.get('rating'));
  console.log(review.get('project'));
  console.log(review.get('photo'));
  console.log(review.getAll('issuelist'))
  try {
    const res = await axios.post(url, review, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    if(res.status === 201) return res.status;
    return res.statusText;
  } catch (error) {
    console.log(error);
    return 'Ocurrio un problema al enviar review..';
  }
}