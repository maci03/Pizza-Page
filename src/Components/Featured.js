import { useState } from "react";
import React from "react";

const Featured = () => {
    const sliders = [
       
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
        ]

        const [currentIndex, setCurrentIndex] = useState(0)
    return(
        <div></div>
    )
}

export default Featured;