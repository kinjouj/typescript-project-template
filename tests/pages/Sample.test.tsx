import { act, render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import Sample from '../../src/pages/Sample';
import '@testing-library/jest-dom';

describe('Sample', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('<Sample>', async () => {
    const data = { data: { message: 'Sample test' } };
    render(
      <MemoryRouter initialEntries={['/sample']}>
        <Routes>
          <Route element={<Outlet context={data} />}>
            <Route path="/sample" element={<Sample />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve();
    });

    expect(await screen.findByText('Sample test')).toBeInTheDocument();
    screen.debug();
  });
});
