import { Link } from 'react-router-dom';
import { Logo } from './Logo';
function Header() {
  return (
    <header className='nav-bar'>
      <Logo />
      <Link to='/'>Final Arc</Link>
      <Link to='/collection'>Game Collection</Link>
      <Link to='/emulator'>Play Games!</Link>
      <Link to='/login'>Log in/Sign up</Link>
    </header>
  );
}

export default Header;
