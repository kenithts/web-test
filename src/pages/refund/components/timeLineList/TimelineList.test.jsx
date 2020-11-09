import React from 'react';
import {
  render, act, waitFor, screen,
} from '@testing-library/react';
import Service from 'pages/refund/service';
import timeline from 'tests/mocks/timeline';
import TimelineList from './TimelineList';

describe('Timeline List', () => {
  describe('When loading', () => {
    it('ensure it will render a loading component', async () => {
      jest.spyOn(Service, 'getTimeline').mockImplementation(() => {});

      await act(async () => {
        render(<TimelineList />);

        expect(screen.getByTestId('timeline-loader')).toBeVisible();
      });
    });
  });

  describe('When loaded', () => {
    it('ensure it will not render a loading component', async () => {
      jest.spyOn(Service, 'getTimeline').mockImplementation(() => timeline);

      await act(async () => {
        render(<TimelineList />);
        await waitFor(() => screen.getByTestId('timeline-list'));

        expect(screen.queryByTestId('timeline-loader')).toBeNull();
      });
    });

    it('ensure list will be rendered', async () => {
      jest.spyOn(Service, 'getTimeline').mockImplementation(() => timeline);

      await act(async () => {
        render(<TimelineList />);
        await waitFor(() => screen.getByTestId('timeline-list'));

        expect(screen.getByTestId('timeline-list')).toBeVisible();
      });
    });

    it('ensure getTimeline function have been called', async () => {
      const spy = jest.spyOn(Service, 'getTimeline').mockImplementation(() => timeline);

      await act(async () => {
        render(<TimelineList />);
        await waitFor(() => screen.getByTestId('timeline-list'));

        expect(spy).toHaveBeenCalled();
      });
    });

    it('ensure all list items will be rendered', async () => {
      jest.spyOn(Service, 'getTimeline').mockImplementation(() => timeline);

      await act(async () => {
        render(<TimelineList />);
        await waitFor(() => screen.getByTestId('timeline-list'));

        expect(screen.queryAllByTestId('timeline-list-item')).toHaveLength(timeline.content.length);
      });
    });
  });
});
