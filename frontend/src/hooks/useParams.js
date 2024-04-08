import { useSearchParams } from "react-router-dom";

const useParams = (param) => {
  const [searchParams] = useSearchParams();

  return searchParams.get(param);
};

export default useParams;
