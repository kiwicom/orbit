// @flow

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Mocking a random for randomID to be consistent in test.
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;
