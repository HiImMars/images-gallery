// import { useDispatch, useSelector } from "react-redux";
import { selectImages, selectIsLoading } from "../redux/gallery/selectors";
import { useEffect } from "react";
import { getImagesAsync } from "../redux/gallery/actions";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const images = useAppSelector(selectImages);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    if (!images?.hits) {
      dispatch(getImagesAsync());
    }
  }, [dispatch, images]);

  return <div>HomePage</div>;
};

export default HomePage;
