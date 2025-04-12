import LAB13 from './LAB13_App';

test('renders hello react heading', () => {
  render(<LAB13 />);
  const heading = screen.getByText(/hello, react!/i);
  expect(heading).toBeInTheDocument();
});
