import { shallow } from 'enzyme';
import React from 'react';

import App from '../pages/index.js';

describe("Test Index page", () => {
    it("H1 contains 'StarQuiz!'", () => {
        const app = shallow(<App />);

        expect(app.find("h1").text()).toEqual("StarQuiz!");
    })
});

