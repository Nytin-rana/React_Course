import { useLoaderData } from "react-router";
function Github() {
  const data = useLoaderData();

  // in case loader wasn't configured or is still loading
  if (!data) {
    return <div>Loading profile…</div>;
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-orange-700">GitHub Profile: {data.login}</h2>
      <div className="flex items-center justify-center gap-3 p-5">

      <img src={data.avatar_url} alt="" className="w-40 rounded-full"/>
      <h2 className="text-4xl font-bold text-orange-700">Followers: {data.followers}</h2>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
export default Github
export const githubInfo=async ()=>{
  const response= await fetch("https://api.github.com/users/Nytin-rana");
  return response.json()
}