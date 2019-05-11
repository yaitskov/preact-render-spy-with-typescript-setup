import {h} from 'preact';
// import
import {shallow} from 'preact-render-spy';
import { Article, Co } from './article';

describe('<Co />', () => {
  it('renders zwei <p /> components', () => {
    const ctx = shallow(<Co />);
    expect(ctx.find('p').at(0).text()).toBe('hello');
    //expect(wrapper.props().foo).to.equal(‘bar’);
  });
});

describe('Article unit tests',
         () => {
           it('Has correct title', () => {
             let a = new Article();
             expect(a.title).toBe("Lab Mice Strike");
           });
         });
