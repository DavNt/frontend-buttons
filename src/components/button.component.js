import React, {Component} from 'react';
import ShoppingCart from '../resources/icons/ic_add_shopping_cart_white.png';

export default class ButtonSec extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 bg_grey">
            <div className="row mx-5 mt-4 mb-5 fw-bold">
              <p>
                <span className="dev_color">Dev</span>Challenges.io
              </p>
            </div>
            <div className="row mx-4 my-3">Colors</div>
            <div className="row mx-4 my-3">Typography</div>
            <div className="row mx-4 my-3">Spaces</div>
            <div className="row mx-4 my-3 fw-bold">Buttons</div>
            <div className="row mx-4 my-3">Inputs</div>
            <div className="row mx-4 my-3">Grid</div>
          </div>

          <div className="col-sm-9">
            <h3 className="m-4 mt-5">Buttons</h3>
            <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-light">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-light light_hover">Default</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-outline-primary">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-outline-primary">Default</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn blue_hover">Default</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-primary" disableShadow>Default</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-light" disabled>Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn" disabled>Default</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-labeled btn-primary">
                  <img className="btn-label" src={ShoppingCart} alt="."/>
                  Default
                </button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-labeled btn-primary">
                  Default
                  <img className="btn-label-op" src={ShoppingCart} alt="."/>
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2  m-3">
                <button className="btn btn-primary btn-sm">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-primary btn-md">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-primary btn-lg">Default</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-light">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-primary">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-secondary">Secondary</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-danger">Danger</button>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-md-2 m-3">
                <button className="btn btn-light light_hover">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-primary">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-secondary">Default</button>
              </div>
              <div className="col-md-2 m-3">
                <button className="btn btn-danger">Default</button>
              </div>
            </div>
 */}
          </div>
        </div>
      </div>
    )
  }
}