//import { render, screen } from '@testing-library/react';
import SocialApp from './App';
import ReactDOM from "react-dom"
it('renders learn react link', () => {
 const div = document.createElement('div')
 ReactDOM.render(<SocialApp />, div)
 ReactDOM.unmountComponentAtNode(div)
});
