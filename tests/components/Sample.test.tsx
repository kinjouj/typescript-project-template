import { act, render, screen, waitFor } from '@testing-library/react';

import Sample from '../../src/pages/Sample';
import '@testing-library/jest-dom';

const mockFetch = jest.fn();
globalThis.fetch = mockFetch;

describe('Sample', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
    mockFetch.mockClear();
    mockFetch.mockReset();
  });

  test('<Sample>', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('Hello World!'),
    });
    render(
      <Sample />
    );

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    await act(async () => {
      jest.advanceTimersByTime(1000);
      await Promise.resolve();
    });

    expect(await screen.findByText('Hello World!')).toBeInTheDocument();
    screen.debug();
  });

  test('if fetch ok:false', async () => {
    mockFetch.mockResolvedValue({ ok: false });
    render(<Sample />);
    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    await act(async () => {
      jest.advanceTimersByTime(1000);
      await Promise.resolve();
    });
    expect(await screen.findByText('Error')).toBeInTheDocument();
    screen.debug();
  });
});
