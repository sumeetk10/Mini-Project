import React from 'react'
import css from './ProductPreview.module.css'
const ProductPreview = (props) => {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0'+ new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return(
        <div className={css.productPreview}>
            <img src={props.defaultPreviewImage} alt='black watch'/>

            {
                props.showHeartBeatSection ?

                <div className={css.heartBeatSection}>
                    <i className="fa fa-heartbeat" aria-hidden="true"></i>
                    <p>{props.showHeartRate}</p>
                </div>
                :
                <div className={css.timeSection}>
                    <p>{`${currentHour}:${currentMinute}`}</p>
                </div>

            }
          
        </div>
    );
}

export default ProductPreview;