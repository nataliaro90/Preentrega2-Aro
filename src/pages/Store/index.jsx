import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";

const Store = () => {
  const { id } = useParams();

  return (
      <ItemList category={id} />
  );
}

export default Store;