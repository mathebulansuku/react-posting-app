export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);

  const resData = await response.json();
  console.log("Fetched post data:", resData);

  return resData.post;
}
