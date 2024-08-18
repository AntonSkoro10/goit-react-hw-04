
import React from 'react';
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard'; 

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
}
