import { useQuery } from "react-query";
import { POST } from "./constants/data";
function App() {
  const postQuery = useQuery({
    queryKey: ["POST"],
    queryFn: () => wait(1000).then(() => [...POST]),
  });

  if (postQuery.isLoading) return <div>...Loading</div>;
  if (postQuery.isError) return <div>Error</div>;
  return (
    <div>
      <h1>Hello</h1>
      <div>
        {postQuery.data?.map((data) => (
          <div key={data.id}>{data.title}</div>
        ))}
      </div>
    </div>
  );
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default App;
