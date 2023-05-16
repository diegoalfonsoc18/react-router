import { useParams } from "react-router";
import ListPosts from "../components/ListPosts";

const SubCategoria = () => {
  const { subcategoria } = useParams();
  return <ListPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default SubCategoria;
