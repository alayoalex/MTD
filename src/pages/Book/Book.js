import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import "./Book.css";
import Input from "../../components/UI/Input/Input";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import DateAnt from "../../components/DatesAnt";
import Birth from "../../components/DatesAntBirth";
import "antd/dist/antd.css";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      birth: {
        elementType: "date",
        elementConfig: {
          type: "date",
          placeholder: "Birth Date",
        },
        // value: "18",
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      payMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "pay", displayValue: "-- To Be Paid In --" },
            { value: "cash", displayValue: "Cash" },
            { value: "card", displayValue: "Credit Card" },
            { value: "crypto", displayValue: "Crypto Currency" },
          ],
        },
        value: "",
        validation: {},
        valid: true,
      },
      booking_days: {
        elementType: "date",
        elementConfig: {
          type: "date",
          placeholder: "Booking Date",
        },
        // value: "3",
        validation: {
          required: true,
        },
        valid: true,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false,
    // startDate: new Date(),
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] =
        // eslint-disable-next-line no-undef
        this.state.orderForm[formElementIdentifie].value;
    }
    // const order = {
    //   ingredients: this.props.ingredients,
    //   price: this.props.price,
    //   orderData: formData,
    // };

    // axios
    //   .post("/orders.json", order)
    //   .then(response => {
    //     this.setState({ loading: false });
    //     this.props.history.push("/");
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false });
    //   });
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

    if (rules.isEmail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  onSelectionDateRange = dates => {
    this.setState({ dates: dates });
    console.log(dates);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => {
          if (formElement.id === "birth") {
            return (
              <div className="row col-md-12" style={{ marginTop: 20 }}>
                <div className="col-md-6">
                  <label>Birth Date</label>
                </div>
                <div className="col-md-6">
                  <Birth />
                </div>
              </div>
            );
          } else if (formElement.id === "booking_days") {
            return (
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6">
                  <label>Select the Booking Days</label>
                </div>
                <div className="col-md-6">
                  <DateAnt onSelectionDateRange={this.onSelectionDateRange} />
                </div>
              </div>
            );
          } else {
            return (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
            );
          }
        })}

        <div style={{ marginTop: 20 }}>
          <Button btnType="Success" disabled={!this.state.formIsValid}>
            BOOK
          </Button>
        </div>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Fill the Form</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
