import { useEffect, useState } from "react";
import Modal from "./Modal";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import GetImages from "./getImages";
import Header from "./Header";
import "../styles/pictureSlide.css"



const PictureSlide = () => {
  const [loader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const { data } = GetImages();
  const [images, setImages] = useState();


  const searchHandler = (SearchTerm)=>{
    console.log(SearchTerm);
    setSearchTerm(SearchTerm);
    if (SearchTerm !== ""){
      const newDataList = images.filter((data)=>{
        return Object.values(data).join(" ").toLowerCase().includes(SearchTerm.toLowerCase())
      })
      setSearchResult(newDataList)
    }
  }

  useEffect(() => {
    setLoader(true);
      setTimeout(() => {
        setLoader(false)
      setImages(searchTerm.length < 1 ? data : searchResult)
    }, 2000)
    }, [searchTerm])


  const handleDragDrop = (results) => {
    const { source, destination, type} = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId && 
      source.index ===destination.index
      ) 
      return;

      if (type === 'group') {
        const reorderedImages = [...images];

        const sourceIndex = source.index;
        const destinationIndex = destination.index

        const [removedImages] = reorderedImages.splice(sourceIndex, 1);
        reorderedImages.splice(destinationIndex, 0, removedImages)

        return setImages(reorderedImages)
      }
  }

  return ( 
    <div className="card">
        {loader ? (
      <div className="loader__container">
        <div className="spinner"></div>
      </div>
        ) : (

          <div className="wrapper">
    <DragDropContext onDragEnd={handleDragDrop}>
      <div>
        <Header term={searchTerm} searchKeyWord={searchHandler} />
      </div>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div className="content" {...provided.droppableProps} ref={provided.innerRef}>
            {images && images.map((item, index) => (
              <Draggable draggableId={item.id} key={item.id} index={index}>
                {(provided) => (
                <div className="image__card" key={item.id} {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                  <img src={item.link} alt="" />
                  <h3>{ item.tag }</h3>
                </div>
                )}
              </Draggable>
                ))}
                {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </div>
)}
      {/* {clickedImg &&  
        <Modal 
        clickedImage={clickedImg} 
        handleRotateRight={handleRotateRight}
        handleRotateLeft={handleRotateLeft}
        setClickedImg={setClickedImg}
      />}  */}
    </div>
   );
}
 
export default PictureSlide;
