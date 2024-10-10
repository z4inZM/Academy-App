import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/Gallery/gall (1).jpg'
import gallery_2 from '../../assets/Gallery/gall (2).jpg'
import gallery_3 from '../../assets/Gallery/gall (4).jpg'
import gallery_4 from '../../assets/Gallery/gall (5).jpg'
import icon_img from '../../assets/arrow.png'

const Gallery = () => {
  return (
    <div className='reviews'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
     </div>
     <button className='btn dark-btn'>See more here <img src={icon_img}></img></button>
    </div>
  )
}

export default Gallery
