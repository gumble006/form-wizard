/* global document */
import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { HIDE_MODAL } from '../actions/types';
import './ModalRoot.css';

class ModalRoot extends React.Component {
  constructor() {
    super();

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.hideModal();
    }
  }

  render() {
    let modalContent;

    if (!this.props.children || !this.props.modalOpen) {
      modalContent = null;
    } else {
      const modalWithProps = React.Children
        .map(this.props.children, child => React.cloneElement(child,
          { hideModal: this.props.hideModal, ...this.props.modalProps }));
      modalContent = (
        <div className="modal-mask" key="2">
          <div className="modal-wrapper">
            <div className="modal-container" ref={this.setWrapperRef}>
              {modalWithProps}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="modal-root">
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionLeave
          transitionLeaveTimeout={200}
          transitionEnter
          transitionEnterTimeout={200}
        >
          {modalContent}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

ModalRoot.propTypes = {
  modalOpen: PropTypes.bool,
  modalProps: PropTypes.object,
  children: PropTypes.object,
  hideModal: PropTypes.func,
};

function mapDispatch(dispatch) {
  return {
    hideModal() {
      dispatch({ type: HIDE_MODAL });
    },
  };
}

function mapState(state) {
  return state.modal;
}

export default connect(mapState, mapDispatch)(ModalRoot);
