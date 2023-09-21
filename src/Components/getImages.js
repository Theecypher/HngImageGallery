import img1 from '../images/macandtomato.jpg'
import img2 from '../images/meatcrumbs.jpg'
import img3 from '../images/rice.jpg'
import img4 from '../images/roastedmeat.jpg'
import img5 from '../images/Egusi.jpg'
import img6 from '../images/beans.jpg'
import img7 from '../images/grilled.jpg'
import img8 from '../images/moimoi.jpg'
import img9 from '../images/ogbono.jpg'
import img10 from '../images/pepper.jpg'
import img11 from '../images/spag.jpg'
import img12 from '../images/stirfry.jpg'
import { useState } from 'react'

const GetImages = () => {
    const [data, setData] = useState([
        {
          id: "0",
          link: img1,
          tag: "Macaroni with tomato sause"
        },
        {
          id: "1",
          link: img2,
          tag: "Meat balls with avacado"
        },
        {
          id: "2",
          link: img3,
          tag: "Rice pudding with egg"
        },
        {
          id: "3",
          link: img4,
          tag: "Rice and roasted meat"
        },
        {
          id: "4",
          link: img5,
          tag: "Egusi soup"
        },
        {
          id: "5",
          link: img6,
          tag: "Beans and fried plantain"
        },
        {
          id: "6",
          link: img7,
          tag: "Grilled Tilipia"
        },
        {
          id: "7",
          link: img8,
          tag: "Moimoi egg and fish"
        },
        {
          id: "8",
          link: img9,
          tag: "Ogbono Soup"
        },
        {
          id: "9",
          link: img10,
          tag: "Oha Soup"
        },
        {
          id: "10",
          link: img11,
          tag: "Spagetti and turkey"
        },
        {
          id: "11",
          link: img12,
          tag: "Stir fry Mac"
        }
    ])

    return { data };
}
 
export default GetImages;