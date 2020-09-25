import React from 'react';
import './css/product-image.css'

export default ( props ) => {
    const rarity = props.rarity;
    const imgPath = `/imgs/products/${props.path}`;
    const name =  props.name;

    return (
        <div className={`product__image ${rarity.toLowerCase()}`}>
            <div className="product__image-rarity">
                <p>{rarity}</p>
            </div>
            <img src={imgPath} alt={`${name} product image`}/>
        </div>
    );
}
