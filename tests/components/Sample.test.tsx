import { act, render, screen, waitFor } from '@testing-library/react';
import Sample from '../../src/components/Sample';
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
    const mock = jest.fn();
    globalThis.fetch = mock.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve('Hello World!'),
    });
    render(
      <Sample />
    );

    await waitFor(() => expect(mock).toHaveBeenCalled());
    await act(async () => {
      jest.advanceTimersByTime(1000);
      await Promise.resolve();
    });

    expect(await screen.findByRole('heading')).toBeInTheDocument();
    screen.debug();
  });
});
