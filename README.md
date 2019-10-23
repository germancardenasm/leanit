# MockUp challenge for Lean Tech

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Coded by Germán Cárdenas M

## Installation

Clone this repository to your local host

```bash
git clone https://github.com/germancardenasm/leanit.git
```

cd into the directory just created and install npm dependencies

```bash
cd leanit
npm install
```

## Run app

In the project directory run the app in the live server running:

```bash
npm start
```

If the browser does not open automatically, please open manually at this URL [http://localhost:3000](http://localhost:3000).

### Features Achieved

- Add a new shipping labels, gathering information about sender and receiver. The form will be validated in order to ensure all information required is input by user.
- Easy delete of shipping labels .
- Open shipping label to check all the information saved.  
- Display shippings accordingly with the Mockup image.



## License

[MIT](https://choosealicense.com/licenses/mit/)



import * as React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SignUpScreen from './SignUpScreen';
import { smsService } from '@auteco/services';
import { errorMsgs } from '@auteco/constants';


describe('SignUpScreen', () => {
  const buttonIdentifier = '#button-container';
  const phoneNumberIdentifier = '#phone-number-input';
  const idNumberIdentifier = '#id-input';
  const radioIdentifier = '#radio-button'
  const genericErrMsgIdentifier = '#generic-error-msg';

  let mockProps;

  beforeEach(() => {
    mockProps = {
      navigation: {
        navigate: jest.fn(),
        dangerouslyGetParent: jest.fn(() => ({ state: null })),
      },
    };
  });

  it('Should render the initial screen', () => {
    const tree = renderer.create(<SignUpScreen {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('And register button is touched', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<SignUpScreen {...mockProps} />);
    });

    describe('And no text is present in the screen', () => {
      it('Should show all the feedback field', () => {
        const button = wrapper.find(buttonIdentifier);
        button.simulate('press');
        const phoneNumber = wrapper.find(phoneNumberIdentifier);
        const idNumber = wrapper.find(idNumberIdentifier);

        expect(phoneNumber.props().fieldFeedback.length).toBeGreaterThan(0);
        expect(idNumber.props().fieldFeedback.length).toBeGreaterThan(0);
      });
    });

    describe('And only phone number is present', () => {
      it('Should show the idNumber feedback', () => {
        const phoneNumber = wrapper.find(phoneNumberIdentifier);
        phoneNumber.simulate('change', '3185850000');

        const button = wrapper.find(buttonIdentifier);
        button.simulate('press');

        const idNumber = wrapper.find(idNumberIdentifier);

        expect(phoneNumber.props().fieldFeedback.length).toBe(0);
        expect(idNumber.props().fieldFeedback.length).toBeGreaterThan(0);
      });
    });

    describe('And only id number is present', () => {
      beforeEach(() => {
        wrapper = shallow(<SignUpScreen {...mockProps} />);
      });

      it('Should show the phone number feedback', () => {
        const idInput = wrapper.find(idNumberIdentifier);
        idInput.simulate('change', '80184500');

        const button = wrapper.find(buttonIdentifier);
        button.simulate('press');

        const phoneNumber = wrapper.find(phoneNumberIdentifier);

        expect(phoneNumber.props().fieldFeedback.length).toBeGreaterThan(0);
        expect(idInput.props().fieldFeedback.length).toBe(0);
      });
    });

    describe('And both id number and phone number are present', () => {
      beforeEach(() => {
        wrapper = shallow(<SignUpScreen {...mockProps} />);
      });

      it('Should not show any feedback', () => {
        const idInput = wrapper.find(idNumberIdentifier);
        idInput.simulate('change', '80184500');

        const phoneNumber = wrapper.find(phoneNumberIdentifier);
        phoneNumber.simulate('change', '3185850000');

        const button = wrapper.find(buttonIdentifier);
        button.simulate('press');

        expect(phoneNumber.props().fieldFeedback.length).toBe(0);
        expect(idInput.props().fieldFeedback.length).toBe(0);
      });
    });
    describe('And Submit button is pressed', ()=>{
      beforeEach(() => {
        wrapper = shallow(<SignUpScreen {...mockProps} />);
      });
      it('Should call smsService.sendSms', async () => {

        const userInfo = {
          idType: 'CC',
          idNumber: "80184500",
          phoneNumber: "3185850000",
          habeas: true,
        };

        jest.spyOn(smsService, 'sendSms').mockImplementation(() => {});

        const idInput = wrapper.find(idNumberIdentifier);
        idInput.simulate('change', '80184500');

        const phoneNumber = wrapper.find(phoneNumberIdentifier);
        phoneNumber.simulate('change', '3185850000');

        const radioButton = wrapper.find(radioIdentifier);
        radioButton.simulate('press');

        const button = wrapper.find(buttonIdentifier);
        button.simulate('press');

        expect(smsService.sendSms).toBeCalledWith(
          userInfo.idType,
          userInfo.idNumber,
          userInfo.phoneNumber,
          userInfo.habeas,
        );

      });

    });

    describe('And smsService.sendSms failed', () => {
      // beforeEach(() => {
      //   wrapper = shallow(<SignUpScreen {...mockProps} />);
      // });

      it('Should display generic error message', async () => {

        const setState = jest.fn();

        spyOn(React, 'useState').and.returnValues(
            ['CC', setState],
            ['12345678', setState],
            ['', setState],
            ['3213213211', setState],
            ['', setState],
            [true, setState],
            ['', setState],
        );

        spyOn(smsService, 'sendSms').and.returnValue(
          Promise.reject({ message: '' }),
        );

        wrapper = shallow(<SignUpScreen {...mockProps} />);
        const idInput = wrapper.find(idNumberIdentifier);
        idInput.simulate('change', '80184500');

        const phoneNumber = wrapper.find(phoneNumberIdentifier);
        phoneNumber.simulate('change', '3185850000');

        const radioButton = wrapper.find(radioIdentifier);
        radioButton.simulate('press');

        const button = wrapper.find(buttonIdentifier);
        await button.simulate('press');

        expect(setState).toBeCalledWith(errorMsgs.ERROR_GENERIC);
      });

      it('Should display error message "invalid-phone"', async () => {

        const setState = jest.fn();

        spyOn(React, 'useState').and.returnValues(
            ['CC', setState],
            ['12345678', setState],
            ['', setState],
            ['3213213211', setState],
            ['', setState],
            [true, setState],
            ['', setState],
        );

        spyOn(smsService, 'sendSms').and.returnValue(
          Promise.reject({ message: 'invalid-phone' }),
        );

        wrapper = shallow(<SignUpScreen {...mockProps} />);
        const idInput = wrapper.find(idNumberIdentifier);
        idInput.simulate('change', '80184500');

        const phoneNumber = wrapper.find(phoneNumberIdentifier);
        phoneNumber.simulate('change', '3185850000');

        const radioButton = wrapper.find(radioIdentifier);
        radioButton.simulate('press');

        const button = wrapper.find(buttonIdentifier);
        await button.simulate('press');

        expect(setState).toBeCalledWith(errorMsgs.ERROR_FORM_PHONE_NUMBER);
      });
    });
  });
});

