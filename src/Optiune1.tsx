import React, { useState } from 'react';

const images = [
    'https://cdn.mos.cms.futurecdn.net/Feo9RiiKFxu79dxDSY2Bm6-1200-80.jpg',
    'https://www.techpowerup.com/img/AfxJSfjArU9swpoc.jpg',
    'https://pliki.ppe.pl/storage/85e81a433e65fd89c542/85e81a433e65fd89c542-1200w.png',
    
];
export  function Optiune1() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(images.length - 1);
        }
    };
    return (
        <div className="container2">
            <button className="button" onClick={goToPreviousImage}>&#8592;</button>
            <img src={images[currentImageIndex]} alt="Slider" />
            <button className="button" onClick={goToNextImage}>&rarr;</button>
        </div>
    );
}


