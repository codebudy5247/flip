import { useGetPostQuery } from "../Services/PostApi";
import PostCard from "../components/Post";
import { Grid, Stack } from "@mui/material";
const Home = () => {
  const { data: posts } = useGetPostQuery();
  console.log(posts);
  

  return (
    <>
      {posts?.posts &&
        posts.posts?.map((post: any, index: any) => {
          return (
            <Grid key={index} container alignItems="center" direction="column">
              <PostCard post={post} />
            </Grid>
          );
        })}
    </>
  );
};

export default Home;
