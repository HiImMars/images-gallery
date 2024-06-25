import { selectImages, selectIsLoading } from "../redux/gallery/selectors";
import { useEffect } from "react";
import { getImagesAsync } from "../redux/gallery/actions";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { GalleryList } from "../components/Gallery/Gallery";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const images = useAppSelector(selectImages);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (!images?.hits) {
      dispatch(getImagesAsync({ page: 1 }));
    }
  }, [dispatch, images]);

  return <div>{isLoading ? <div>Loading...</div> : <GalleryList />}</div>;
};

export default HomePage;
