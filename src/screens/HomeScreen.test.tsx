import { API_TOKEN, mediaItems } from '@mocks/data';
import { render, screen, waitForElementToBeRemoved } from '@test-utils';
import HomeScreen from './HomeScreen';

test("renders users's photo gallery", async () => {
  render(<HomeScreen />, {
    authProviderProps: {
      token: API_TOKEN
    }
  });

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

  mediaItems.forEach((item) => {
    expect(screen.getByLabelText(item.filename)).toBeDefined();
  });
});

test('renders error message when loading of gallery fails', async () => {
  render(<HomeScreen />, {
    authProviderProps: {
      token: 'invalid'
    }
  });

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

  expect(screen.getByText(/there was an error/i)).toBeDefined();
});
