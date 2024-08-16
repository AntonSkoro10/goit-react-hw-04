import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ imageArr, openModal }) {
  console.log(imageArr); 
  return (
    <ul className={css.list}>
      {imageArr.map((image) => ( 
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
