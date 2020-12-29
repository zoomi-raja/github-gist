import renderer from 'react-test-renderer';
import { Header } from '../header';
it('header snapshot', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
})