import { useProps } from "./useProps";
import { Layout } from "./Layout";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const movies = useProps(fetchUrl);
  
  return <Layout title={title} movies={movies} isLargeRow={isLargeRow} />;
};
