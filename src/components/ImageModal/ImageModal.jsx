import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {image && (
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>{image.alt_description}</p>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </div>
      )}
    </Modal>
  );
}
