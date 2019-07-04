import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import * as actions from "../../store/actions/";
import { connect } from "react-redux";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "your email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
    },
    isSignup: true
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };

  inputChangedHandler = (e, id) => {
    const updatedControls = {
      ...this.state.controls,
      [id]: {
        ...this.state.controls[id],
        value: e.target.value,
        touched: true,
        valid: this.checkValidity(
          e.target.value,
          this.state.controls[id].validation
        )
      }
    };

    this.setState({ controls: updatedControls });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    );
  };

  render() {
    const formElementsArray = [];

    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    const form = formElementsArray.map(element => {
      return (
        <Input
          key={element.id}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          changed={e => this.inputChangedHandler(e, element.id)}
          invalid={!element.config.valid}
          touched={element.config.touched}
        />
      );
    });

    return (
      <div className={classes.Auth}>
          <h1>{this.state.isSignup ? 'Signup' : 'Signin'}</h1>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (e, p, s) => dispatch(actions.auth(e, p, s))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Auth);
