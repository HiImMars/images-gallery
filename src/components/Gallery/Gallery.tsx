import { useAppSelector } from "../../hooks/reduxHooks";
import { selectImages } from "../../redux/gallery/selectors";
import Fancybox from "../FancyBox/FancyBox";

export const GalleryList = () => {
  const images = useAppSelector(selectImages);

  console.log(images);
  return (
    <>
      {Boolean(images?.hits?.length) && (
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          {images?.hits.map((image) => (
            <div key={image.id}>
              <img
                src={image.largeImageURL}
                alt="image"
                width="200"
                data-fancybox="gallery"
              />
            </div>
          ))}
        </Fancybox>
      )}
    </>

    // <ul>
    //   {Boolean(images?.hits?.length) &&
    //     images?.hits.map((image) => (
    //       <li key={image.id}>
    //         <img src={image.webformatURL} alt="image" />
    //       </li>
    //     ))}
    // </ul>
  );
};
