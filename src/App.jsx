import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './unsplash-api';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function getImages() {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
      } catch (err) {
        setError('Failed to load images');
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => setPage(prev => prev + 1);

  const openModal = image => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal isOpen={!!selectedImage} onRequestClose={closeModal} image={selectedImage} />
      )}
    </div>
  );
}
