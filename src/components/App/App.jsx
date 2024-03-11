import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import MyLoader from '../MyLoader/MyLoader';
import ErrorMessage  from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { fetchPhotos } from '../../photos-api';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import './App.css';

export default function App() {

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [totalPages, setTotalPages] = useState(null)

  useEffect(()=> {
    async function getData() {

      if(query === ""){
        return;
      }

      try {
        setLoading(true)
        setError(false)
        const data = await fetchPhotos(query, page);
        setPhotos((prevPhotos)=>{
          return[...prevPhotos, ...data[0]]
        }); 
        
        setTotalPages(data[1]);

         if (data[0].length === 0) {
          toast.error('Unfortunately, there is no image for your request')
         }

      } catch (error) {
        setError(true);
        toast.error("WARNING")
      }
      finally{
        setLoading(false);
      }
    }

    getData();
  }, [query, page, ]);
   

  const handleSearch =  (topic) =>{
    setQuery(topic);
    setPage(1);
    setPhotos([]); 
  }

  const handleLoadMore =()=>{
    setPage(page+1)
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  
  const handleImgClick = (imageUrl) => {
    setSelectedImg(imageUrl);
    setModalIsOpen(true);
  }
  
  return (
  <div>
    <SearchBar onSearch={handleSearch}/>
    {error && <ErrorMessage/>}
    {photos.length > 0 && <ImageGallery items={photos} onImageClick={handleImgClick} />}
    {photos.length > 0 && !loading && totalPages && totalPages !== page && <LoadMoreBtn onClick={handleLoadMore}/>}
    {loading && <MyLoader/>}
    <ImageModal onRequestClose = {closeModal} isOpen={modalIsOpen} imageUrl={selectedImg}/>
    
    <Toaster/>
  </div>);
}
