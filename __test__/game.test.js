import { shallow } from 'enzyme';
import React from 'react';

import App from '../pages/game.js';

describe("Test Game page", () => {
    it("Text contains 'Do you really know about Star Wars? Test it now!'", () => {
        const app = shallow(<App />);

        expect(app.find("#text").text()).toEqual("Do you really know about Star Wars? Test it now!");
    })
});
