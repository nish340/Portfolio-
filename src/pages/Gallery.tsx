import { useState } from 'react';
import { galleryImages } from '../lib/projectData';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  // Get unique project names for filter
  const projects = ['All', ...Array.from(new Set(galleryImages.map(image => image.project)))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.project === filter);

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      <header className="page-header">
        <div className="container">
          <h1>Project Gallery</h1>
          <p>Screenshots from my development work</p>
        </div>
      </header>

      <section className="gallery-section section">
        <div className="container">
          <div className="filter-container">
            {projects.map((project, index) => (
              <button 
                key={index} 
                className={`filter-button ${filter === project ? 'active' : ''}`}
                onClick={() => setFilter(project)}
              >
                {project}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div 
                className="gallery-item" 
                key={image.id}
                onClick={() => openModal(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-project">{image.project}</div>
                  <div className="gallery-view">Click to view</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-caption">
              <h3>{selectedImage.project}</h3>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;