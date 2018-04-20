import { shallow } from 'enzyme';
import React from 'react';

import App from '../pages/score.js';

describe("Test Score page", () => {
    it("H1 contains 'Score'", () => {
        const app = shallow(<App />);

        expect(app.find("#subTitle").text()).toEqual("Score");
    })
});
