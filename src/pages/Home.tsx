import { useGetPostQuery } from '../Services/PostApi'
const Home = () => {
  const {data:posts} = useGetPostQuery()
  console.log("posts...",posts);
  
  return (
    <div>Home</div>
  )
}

export default Home