import { useAppSelector } from "../../hooks/reduxHooks";
import { selectImages } from "../../redux/gallery/selectors";

export const GalleryList = () => {
  const images = useAppSelector(selectImages);

  console.log(images);
  return (
    <ul>
      {Boolean(images?.hits?.length) &&
        images?.hits.map((image) => (
          <li key={image.id}>
            <img src={image.webformatURL} alt="image" />
          </li>
        ))}
    </ul>
  );
};
