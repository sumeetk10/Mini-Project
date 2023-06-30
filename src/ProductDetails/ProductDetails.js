import React from 'react';
import css from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item,pos) => {
        const classArr = [css.colorOption]
        if(pos === props.currentPreviewImagePos){
            classArr.push(css.selectedProductImage)
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}  onClick={() => props.onColorOptionClick}/>
        );
    })

    const featureList = props.data.featureList.map((item,pos) => {
        const classArr = [css.featuresButtons]
        if(pos === 1 && props.showHeartBeatSection){
            classArr.push(css.selectFeatureButton)
        } else if(pos === 0 && !props.showHeartBeatSection) {
            classArr.push(css.selectFeatureButton);
        }
        
        return(
            <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        );    
    })

    return(

        <div className={css.productDetails}>
            <h1 className={css.productTitle}>{props.data.title}</h1>
            <p className={css.productData}>{props.data.description}</p>
            
            <h2 className={css.productSection}>Select Color</h2>
            
            <div className={css.colorOption}>
              {colorOptions}
            </div>
  
            <h2 className={css.features}>Features</h2>
            <div className={css.featuresButtons}>
              {featureList}
            </div>
  
            <button className={css.buy}>BUY NOW</button>
          </div>
    );
}

export default ProductDetails;