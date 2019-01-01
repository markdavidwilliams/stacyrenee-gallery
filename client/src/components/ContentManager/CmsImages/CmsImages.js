import React from 'react'

import Selector from './Selector/Selector'
import Uploader from './Uploader/Uploader'

import './CmsImages.css'

const CmsGallery = () => {
    return (
      <div className="cms-images-container">
        <Selector />
        <Uploader />
      </div>
    ) 
}

export default CmsGallery;
