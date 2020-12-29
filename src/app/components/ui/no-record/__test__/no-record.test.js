import renderer from 'react-test-renderer';
import { NoRecord } from '../no-record';

it('no-record snapshot', () => {
  const tree = renderer.create(<NoRecord />).toJSON();
  expect(tree).toMatchSnapshot();
})