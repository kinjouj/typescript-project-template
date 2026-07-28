import { render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router';
import { vi } from 'vitest';
import Sample from '../../src/pages/Sample';

describe('Sample', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('<Sample>', () => {
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

    expect(screen.getByText('Sample test')).toBeTruthy();
    screen.debug();
  });
});
