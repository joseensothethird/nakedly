// components/feeds/CollectionGallery.js
import React, { useState } from 'react';
import { 
  Search,
  MoreHorizontal,
  ArrowLeft,
  X,
  Heart,
  Download,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Sliders,
  Clock,
  Star,
  MapPin
} from 'react-feather';
import { CollectionGalleryContainer, CollectionGalleryHeader, CollectionHeaderActions, CollectionActionButton, CollectionSortMenu, CollectionSortOption, CollectionGallerySearch, CollectionAlbumsGrid, CollectionAlbumCard, CollectionAlbumCover, CollectionEmptyAlbum, CollectionAlbumOverlay, CollectionAlbumTopActions, CollectionPinButton, CollectionDeleteButton, CollectionAlbumCreator, CollectionCreatorAvatar, CollectionCreatorName, CollectionAlbumModal, CollectionModalHeader, CollectionCloseButton, CollectionModalCreatorInfo, CollectionModalCreatorAvatar, CollectionModalActions, CollectionMediaViewer, CollectionEmptyAlbumMessage, CollectionAddMediaButton, CollectionMainMedia, CollectionNavButton, CollectionMediaInfo, CollectionMediaCounter, CollectionMediaActions, CollectionThumbnailStrip, CollectionThumbnail, CollectionVideoThumbnail } from '../../styles/pages/feeds';
// Main Component
const CollectionGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState('recent');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [albums, setAlbums] = useState([
    {
      id: 1,
      creator: 'Jessica Parker',
      avatar: 'JP',
      media: [
        { type: 'image', url: 'https://source.unsplash.com/random/800x600?summer', likes: 42, comments: 12 },
        { type: 'image', url: 'https://source.unsplash.com/random/800x600?beach', likes: 38, comments: 8 }
      ],
      timestamp: '2 days ago',
      saved: true,
      pinned: false
    },
    {
      id: 2,
      creator: 'Alex Morgan',
      avatar: 'AM',
      media: [
        { type: 'image', url: 'https://source.unsplash.com/random/800x600?city', likes: 128, comments: 24 },
        { type: 'image', url: 'https://source.unsplash.com/random/800x600?architecture', likes: 95, comments: 17 }
      ],
      timestamp: '1 week ago',
      saved: false,
      pinned: true
    }
  ]);

  // Sort albums based on selected option
  const sortedAlbums = [...albums].sort((a, b) => {
    if (sortOption === 'recent') {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortOption === 'pinned') {
      return b.pinned - a.pinned;
    } else if (sortOption === 'popular') {
      const aLikes = a.media.reduce((sum, media) => sum + media.likes, 0);
      const bLikes = b.media.reduce((sum, media) => sum + media.likes, 0);
      return bLikes - aLikes;
    }
    return 0;
  });

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setCurrentMediaIndex(0);
    setIsModalOpen(true);
  };

  const closeAlbum = () => {
    setIsModalOpen(false);
  };

  const nextMedia = () => {
    setCurrentMediaIndex(prev => 
      prev === selectedAlbum.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex(prev => 
      prev === 0 ? selectedAlbum.media.length - 1 : prev - 1
    );
  };

  const togglePinAlbum = (albumId) => {
    setAlbums(albums.map(album => 
      album.id === albumId ? {...album, pinned: !album.pinned} : album
    ));
  };

  const toggleSaveAlbum = (albumId) => {
    setAlbums(albums.map(album => 
      album.id === albumId ? {...album, saved: !album.saved} : album
    ));
  };

  const deleteAlbum = (albumId) => {
    setAlbums(albums.filter(album => album.id !== albumId));
    if (selectedAlbum && selectedAlbum.id === albumId) {
      closeAlbum();
    }
  };

  const addNewAlbum = () => {
    const newAlbum = {
      id: Date.now(),
      creator: 'You',
      avatar: 'ME',
      media: [],
      timestamp: 'Just now',
      saved: false,
      pinned: false
    };
    setAlbums([newAlbum, ...albums]);
  };

  return (
    <CollectionGalleryContainer>
      <CollectionGalleryHeader>
        <ArrowLeft size={20} />
        <h3>Albums</h3>
        <CollectionHeaderActions>
          <CollectionActionButton onClick={() => setShowSortMenu(!showSortMenu)}>
            <Sliders size={20} />
            <span>Sort</span>
          </CollectionActionButton>
          <CollectionActionButton onClick={addNewAlbum}>
            <Plus size={20} />
            <span>Add</span>
          </CollectionActionButton>
        </CollectionHeaderActions>
      </CollectionGalleryHeader>

      {showSortMenu && (
        <CollectionSortMenu>
          <CollectionSortOption 
            className={sortOption === 'recent' ? 'collection-active' : ''}
            onClick={() => {
              setSortOption('recent');
              setShowSortMenu(false);
            }}
          >
            <Clock size={16} />
            <span>Recent</span>
          </CollectionSortOption>
          <CollectionSortOption 
            className={sortOption === 'pinned' ? 'collection-active' : ''}
            onClick={() => {
              setSortOption('pinned');
              setShowSortMenu(false);
            }}
          >
            <MapPin size={16} />
            <span>Pinned</span>
          </CollectionSortOption>
          <CollectionSortOption 
            className={sortOption === 'popular' ? 'collection-active' : ''}
            onClick={() => {
              setSortOption('popular');
              setShowSortMenu(false);
            }}
          >
            <Star size={16} />
            <span>Popular</span>
          </CollectionSortOption>
        </CollectionSortMenu>
      )}

      <CollectionGallerySearch>
        <Search size={18} />
        <input type="text" placeholder="Search albums" />
      </CollectionGallerySearch>

      <CollectionAlbumsGrid>
        {sortedAlbums.map(album => (
          <CollectionAlbumCard 
            key={album.id} 
            className={album.pinned ? 'collection-pinned' : ''}
            onClick={() => openAlbum(album)}
          >
            <CollectionAlbumCover>
              {album.media.length > 0 ? (
                <img src={album.media[0].url} alt={album.creator} />
              ) : (
                <CollectionEmptyAlbum>Empty</CollectionEmptyAlbum>
              )}
              <CollectionAlbumOverlay>
                <span>{album.media.length} items</span>
              </CollectionAlbumOverlay>
              <CollectionAlbumTopActions>
                <CollectionPinButton 
                  className={album.pinned ? 'collection-pinned' : ''}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePinAlbum(album.id);
                  }}
                >
                  <MapPin size={14} />
                </CollectionPinButton>
                <CollectionDeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteAlbum(album.id);
                  }}
                >
                  <Trash2 size={14} />
                </CollectionDeleteButton>
              </CollectionAlbumTopActions>
            </CollectionAlbumCover>
            <CollectionAlbumCreator>
              <CollectionCreatorAvatar>{album.avatar}</CollectionCreatorAvatar>
              <CollectionCreatorName>{album.creator}</CollectionCreatorName>
            </CollectionAlbumCreator>
          </CollectionAlbumCard>
        ))}
      </CollectionAlbumsGrid>

      {isModalOpen && selectedAlbum && (
        <CollectionAlbumModal>
          <CollectionModalHeader>
            <CollectionCloseButton onClick={closeAlbum}>
              <X size={24} />
            </CollectionCloseButton>
            <CollectionModalCreatorInfo>
              <CollectionModalCreatorAvatar>{selectedAlbum.avatar}</CollectionModalCreatorAvatar>
              <div>
                <h3>{selectedAlbum.creator}</h3>
              </div>
            </CollectionModalCreatorInfo>
            <CollectionModalActions>
              <CollectionActionButton 
                className={selectedAlbum.pinned ? 'collection-pinned' : ''}
                onClick={() => togglePinAlbum(selectedAlbum.id)}
              >
                <MapPin size={20} />
              </CollectionActionButton>
              <CollectionActionButton 
                className={selectedAlbum.saved ? 'collection-saved' : ''}
                onClick={() => toggleSaveAlbum(selectedAlbum.id)}
              >
                <Bookmark size={20} />
              </CollectionActionButton>
              <CollectionActionButton 
                className="collection-delete-btn"
                onClick={() => {
                  deleteAlbum(selectedAlbum.id);
                  closeAlbum();
                }}
              >
                <Trash2 size={20} />
              </CollectionActionButton>
            </CollectionModalActions>
          </CollectionModalHeader>

          <CollectionMediaViewer>
            {selectedAlbum.media.length > 0 ? (
              <>
                <CollectionNavButton className="collection-prev-btn" onClick={prevMedia}>
                  <ChevronLeft size={32} />
                </CollectionNavButton>
                
                <CollectionMainMedia>
                  {selectedAlbum.media[currentMediaIndex].type === 'image' ? (
                    <img 
                      src={selectedAlbum.media[currentMediaIndex].url} 
                      alt={`${selectedAlbum.creator} - ${currentMediaIndex + 1}`}
                    />
                  ) : (
                    <video controls autoPlay>
                      <source src={selectedAlbum.media[currentMediaIndex].url} type="video/mp4" />
                    </video>
                  )}
                </CollectionMainMedia>
                
                <CollectionNavButton className="collection-next-btn" onClick={nextMedia}>
                  <ChevronRight size={32} />
                </CollectionNavButton>
              </>
            ) : (
              <CollectionEmptyAlbumMessage>
                <p>This album is empty</p>
                <CollectionAddMediaButton>
                  <Plus size={20} />
                  <span>Add Media</span>
                </CollectionAddMediaButton>
              </CollectionEmptyAlbumMessage>
            )}
          </CollectionMediaViewer>

          {selectedAlbum.media.length > 0 && (
            <>
              <CollectionMediaInfo>
                <CollectionMediaCounter>
                  {currentMediaIndex + 1} / {selectedAlbum.media.length}
                </CollectionMediaCounter>
                
                <CollectionMediaActions>
                  <CollectionActionButton>
                    <Heart size={20} />
                    <span>{selectedAlbum.media[currentMediaIndex].likes}</span>
                  </CollectionActionButton>
                  <CollectionActionButton>
                    <Download size={20} />
                  </CollectionActionButton>
                  <CollectionActionButton>
                    <Share2 size={20} />
                  </CollectionActionButton>
                </CollectionMediaActions>
              </CollectionMediaInfo>

              <CollectionThumbnailStrip>
                {selectedAlbum.media.map((item, index) => (
                  <CollectionThumbnail 
                    key={index} 
                    className={index === currentMediaIndex ? 'collection-active' : ''}
                    onClick={() => setCurrentMediaIndex(index)}
                  >
                    {item.type === 'image' ? (
                      <img src={item.url} alt={`Thumbnail ${index}`} />
                    ) : (
                      <CollectionVideoThumbnail>
                        <video>
                          <source src={item.url} type="video/mp4" />
                        </video>
                        <span>▶</span>
                      </CollectionVideoThumbnail>
                    )}
                  </CollectionThumbnail>
                ))}
              </CollectionThumbnailStrip>
            </>
          )}
        </CollectionAlbumModal>
      )}
    </CollectionGalleryContainer>
  );
};

export default CollectionGallery;