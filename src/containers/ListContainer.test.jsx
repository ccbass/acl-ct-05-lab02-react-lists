import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ListContainer } from './ListContainer';
import {BrowserRouter} from 'react-router-dom'

describe('ListContainer', () => {
  it('renders a list of HA characters on the page', async () => {
    render(<BrowserRouter><ListContainer /></BrowserRouter>);

    screen.getByText('LOADING');

    const welcome = await screen.findByText('Hey Arnold Characters Page!');
    expect(welcome).toMatchSnapshot();
    expect(welcome).toBeInTheDocument();

    // const list = await waitFor( () => screen.getByText('Hey Arnold Characters Page!') )

    // expect(await screen.findByText('Hey Arnold Characters Page!')).toBeInTheDocument()
  });
});