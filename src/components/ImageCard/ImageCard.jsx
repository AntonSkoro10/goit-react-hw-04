import css from "./ImageCard.module.css"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

export default function ImageCard({ image, openModal }) {
  if (!image || !image.urls) {
    return <ErrorMessage message="Oops! There was an error, please reload this page" />;
  }

  return (
    <div
      onClick={() => openModal(image)}
    >
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
}
