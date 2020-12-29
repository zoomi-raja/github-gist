import renderer from 'react-test-renderer';
import { Spinner } from '../spinner';

it('spinner snapshot', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
})