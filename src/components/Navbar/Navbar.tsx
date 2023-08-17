import { useMediaQuery } from 'react-responsive';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Navbar() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    isMobile ? <MobileNav /> : <DesktopNav />
  );
}
