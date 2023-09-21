import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import PictureSlide from './Picturesslide'

const Modal = ({clickedImage, handleRotateRight, setClickedImg, handleRotateLeft}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null)
        }    
    }

    return ( 
        <div>
        <div className="overlay dismiss" onClick={handleClick}>
            <img src={clickedImage} alt="" />

                <FaTimes className='dismiss exit' onClick={handleClick} />
            <div>
                <AiOutlineArrowLeft className='overlay-arrow_right' onClick={handleRotateRight} />
                <AiOutlineArrowRight className='overlay-arrow_left' onClick={handleRotateLeft} />
            </div>
        </div>
        </div>
     );
}
 
export default Modal;


// const handleClick = (item, index) => {
//     setCurrentIndex(index);
//     setClickedImg(item);
//   }

//   const handleRotateRight = () => {
//     const totalLength = images.length;
//     if (currentIndex + 1 >= totalLength) {
//       setCurrentIndex(0);
//       const newImage = images[0];
//       setClickedImg(newImage)
//       return
//     }
//     const newIndex = currentIndex + 1;
//     const newImage = images.filter((image) => {
//       return images.indexOf(image) === newIndex;
//     })
//     const newItem = newImage[0];
//     setClickedImg(newItem);
//     setCurrentIndex(newIndex);
//   }
  
//   const handleRotateLeft = () => {
//     const totalLength = images.length;
//     if (currentIndex === 0) {
//       setCurrentIndex(totalLength - 1);
//       const newImage = images[totalLength - 1]
//       setClickedImg(newImage)
//     }
    
//     const newIndex = currentIndex + 1;
//     const newImage = images.filter((image) => {
//       return images.indexOf(image) === newIndex;
//     })
//     const newUrl = newImage[0];
//     setClickedImg(newImage);
//     setCurrentIndex(newIndex);
//   }



//   <img src={item.link} alt="" onClick={() => handleClick(item, index)} /