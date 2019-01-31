
import React, { Component, PropTypes } from 'react';
import './modal.css';

export default class Modal extends Component {

  listenKeyboard = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
     // this.props.onClose();
    }
  };

  componentDidMount () {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }

  componentWillUnmount () {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }


  get close () {
    const { onClose } = this.props;
    return onClose ? (
      <div className='modal__close' onClick={onClose} />
    ) : null;
  }

  onOverlayClick = () => {
    //this.props.onClose();
  };

  onDialogClick = (event) => {
    event.stopPropagation();
  };

  render ({props} = this) {
    return (
      <div style={{"display": "block", "paddingRight": "15px" }} className={ `${ props.className ? props.className : ''  } modal fade show`} tabIndex="-1" role="dialog" aria-labelledby="mediumModalLabel">
        <div className="overlay"></div>
        <div className='modal-dialog modal-lg' role="document"> 
        <div className='modal-content' onClick={this.onOverlayClick}>
          <div className='dialog' onClick={this.onDialogClick}>
                {this.props.children}
          </div>
        </div>
      </div>
      </div>
    );
  }
}