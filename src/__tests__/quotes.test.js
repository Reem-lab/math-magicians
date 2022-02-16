import renderer from 'react-test-renderer';
import Quotes from '../component/quotes';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quotes />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
