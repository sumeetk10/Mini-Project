import css from'./App.module.css';
import ProductData from './utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import React, {Component} from 'react';
import Topbar from './Topbar/Topbar';

class App extends Component {

  state = {
    productData : ProductData,
    currentPreviewImagePos: 0,
    showHeartBeatSection : false,
    showHeartRate: 75,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos})
  }

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if(pos === 1) {
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState})
  }

  render() {

    return (

      <div className="App">
        <Topbar/>
  
        <div className={css.mainContainer}>
            <ProductPreview defaultPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
            showHeartBeatSection={this.state.showHeartBeatSection} showHeartRate={this.state.showHeartRate}/>
          
  
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
            currentPreviewImagePos = {this.state.currentPreviewImagePos}
            onFeatureItemClick = {this.onFeatureItemClick}
            showHeartBeatSection = {this.state.showHeartBeatSection}/>
        </div>
      </div>
    );
  }
}

export default App;
