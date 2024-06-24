import { QueryClientProvider } from "@tanstack/react-query";
import Counter from "./components/Counter/Counter";
import ModalControls from "./components/Modal/ModalControls";
import PostForm from "./components/Posts/PostForm";
import Posts from "./components/Posts/Posts";
import queryClient from "./react-query/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Counter />
      <br />
      <ModalControls />
      <br />
      <PostForm />
      <br />
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
