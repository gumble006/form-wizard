import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, propTypes, getFormSyncErrors, getFormAsyncErrors } from 'redux-form';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './SignUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPg: 0,
      submitted: false,
    };

    this.nextPg = this.nextPg.bind(this);
    this.prevPg = this.prevPg.bind(this);
    this.submit = this.submit.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  nextPg() {
    this.setState(prevState => ({ currentPg: prevState.currentPg + 1 }));
  }

  prevPg() {
    this.setState(prevState => ({ currentPg: prevState.currentPg - 1 }));
  }


  submit(values) {
    const flattenedVals = Object.keys(values)
    .reduce((acc, section) => ({...acc, ...values[section]}), {});

    this.props.submitSignup(flattenedVals)
      .then(() => {
        this.setState({ submitted: true });
      });
  }

  closeForm() {
    this.props.reset();
    this.props.hideModal();
  }

  hasSectionErrors() {
    // combine errors for current section
    const errorsObj = { ...this.props.formSyncErrors, ...this.props.formAsyncErrors };
    const currentFormSection = this.props.pages[this.state.currentPg].props.section;
    const hasErrors = errorsObj[currentFormSection]
    return hasErrors;
  }

  renderButtons() {
    //
    return (
      <div className="modal-footer">
        {this.state.currentPg > 0
          && (
            <button
              className="mr-auto btn btn-link"
              type="button"
              onClick={this.prevPg}
            >
              <svg id="i-chevron-left" viewBox="0 0 32 32" width="14" height="12" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M20 30 L8 16 20 2" />
              </svg>
              Back
            </button>
          )
        }
        {this.state.currentPg < this.props.pages.length - 1
          && (
            <button
              className="btn btn-primary"
              onClick={this.nextPg}
              type="button"
              disabled={this.hasSectionErrors() && !this.props.asyncValidating}
            >
            Next
            </button>
          )
        }

        {this.state.currentPg === this.props.pages.length - 1
          && (
            <button
              className="btn btn-primary"
              type="submit"
              disabled={!this.props.valid && !this.props.asyncValidating}
            >
            Finish
            </button>
          )
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="modal-heading">
          { !this.state.submitted
            && (
            <div>
              {'Step '}
              <strong>{this.state.currentPg + 1}</strong>
              {' of '}
              <strong>{this.props.pages.length}</strong>
            </div>
            )
          }
        </div>

        <form name={this.props.form} onSubmit={this.props.handleSubmit(this.submit)}>
          <div className="modal-body">
            <ReactCSSTransitionGroup
              transitionName="form-section"
              transitionEnter
              transitionEnterTimeout={120}
              transitionLeave
              transitionLeaveTimeout={120}
            >
            <div key={this.state.currentPg}>
            {!this.state.submitted
              ? this.props.pages[this.state.currentPg]
              : this.props.confirmation
            }
            </div>
            </ReactCSSTransitionGroup>
          </div>

          <div>
            {!this.state.submitted ? this.renderButtons()
              : (
                <div className="modal-footer">
                  <button className="btn" type="button" onClick={this.closeForm}>
                    Close
                  </button>
                </div>
              )}
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  ...propTypes,
  confirmation: PropTypes.element,
  pages: PropTypes.arrayOf(PropTypes.element),
  hideModal: PropTypes.func,
  submittedEmail: PropTypes.string,
  submitSignup: PropTypes.func.isRequired,
};


SignUp = reduxForm({
  shouldAsyncValidate: ({ trigger }) => trigger !== 'submit',
  destroyOnUnmount: false,
})(SignUp);

SignUp = connect((state, props) => {
  return {
    formSyncErrors: getFormSyncErrors('signup')(state),
    formAsyncErrors: getFormAsyncErrors('signup')(state),
  }
})(SignUp)

export default SignUp;
