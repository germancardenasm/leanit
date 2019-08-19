export function getDefaultRoute() {
  return {
    id: new Date(),
    date: new Date(),
    origin: "New York, NY, 33250",
    destination: "Miami, FL, 32010",
    qty: 2,
    price: 300,
    delivered: false
  };
}

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
          value: ""
        },
        fromStreet: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender Street"
          },
          value: ""
        },
        fromZipCode: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender ZIP Code"
          },
          value: ""
        },
        fromCity: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender City"
          },
          value: ""
        },
        fromCountry: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Sender Country"
          },
          value: ""
        },
        fromEmail: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Sender E-Mail"
          }
        }
      },

      to: {
        toName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver Name"
          },
          value: ""
        },
        toStreet: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver Street"
          },
          value: ""
        },
        toZipCode: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver ZIP Code"
          },
          value: ""
        },
        toCity: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver City"
          },
          value: ""
        },
        toCountry: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Receiver Country"
          },
          value: ""
        },
        toEmail: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "Receiver E-Mail"
          }
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
          }
        },
        price: {
          elementType: "text",
          elementConfig: {
            label: "this is may label",
            type: "number",
            placeholder: "price",
            value: 0
          }
        }
      }
    }
  };
}
