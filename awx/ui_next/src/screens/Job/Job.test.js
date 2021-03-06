import React from 'react';

import { mountWithContexts } from '../../../testUtils/enzymeHelpers';

import Job from './Job';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

describe('<Job />', () => {
  test('initially renders successfully', () => {
    mountWithContexts(<Job />);
  });
});
