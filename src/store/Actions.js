export function getDefaultFormFields() {
  return {
    shippingForm: {
      from: {
        fromName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender Name"
          },
          value: "",
          validation: {
            required: true,
            minLength: 3,
            maxLenght: 30
          },
          valid: false
        },
        fromStreet: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender Street"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        fromZipCode: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender ZIP Code"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        fromCity: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender City"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        fromState: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender State"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        }
      },

      to: {
        toName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver Name"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        toStreet: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver Street"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        toZipCode: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver ZIP Code"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        toCity: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver City"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        },
        toState: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver Country"
          },
          value: "",
          validation: {
            required: true
          },
          valid: false
        }
      },
      options: {
        deliveryMethod: {
          elementType: "select",
          elementConfig: {
            options: [
              { value: "fastest", displayValue: "Two day delivery" },
              { value: "regular", displayValue: "Regular" },
              { value: "cheapest", displayValue: "Cheapest" }
            ]
          },
          validation: {
            required: true
          },
          valid: false
        },
        qty: {
          elementType: "text",
          elementConfig: {
            type: "number",
            placeholder: "Boxes Amount",
            value: 0
          },
          validation: {
            required: true
          }
        }
      }
    }
  };
}

export function getDefaultForm() {
  return {
    id: Date.parse(new Date()),
    date: new Date(),
    fromName: "",
    fromStreet: "",
    fromZipCode: "",
    fromCity: "",
    fromState: "",
    toName: "",
    toStreet: "",
    toZipCode: "",
    toCity: "",
    toState: "",
    deliveryMethod: "",
    price: "",
    delivered: false,
    delayed: false,
    qty: 0
  };
}
