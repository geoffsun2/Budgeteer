import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const pokemon = useLoaderData();
  console.log(pokemon);
  return (
    <div>
      <h1>Dash</h1>
    </div>
  )
}