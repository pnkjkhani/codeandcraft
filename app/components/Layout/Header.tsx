import { NavBar } from '@app/components/Layout/NavBar/NavBar';
import testIds from '@app/utils/test-ids';
import Image from 'next/image';
// import Logo from './NavBar/logo.png'
// #D7E4FD
const Header: React.FC = () => (
  <header
    className="w-full px-2 py-2 sm:px-8 fixed top-0 z-50 bg-[#E7F2F8]"
    data-testid={testIds.LAYOUT.HEADER}
  >
    <div className="flex sm:px-6 h-header sm:items-center sm:gap-4 ">
      <h2 className="flex-1">
        <a href="/" className="flex items-center sm:gap-2">
          {/* <div>Code&Craft</div> */}
          <Image
            src="https://res.cloudinary.com/pnkjkhani/image/upload/c_crop,ar_16:9,e_improve,e_sharpen/v1725043529/gghdpv2603t1urrbktag.png"
            width={100}
            height={100}
            alt="Code"
          />
          {/* <Logo/> */}
          <div>
            <span className="block font-site">Code. Create. Innovate</span>
            <span className="text-xs">Learn by Doing, Not Just Reading</span>
          </div>
        </a>
      </h2>
      <div>
        <NavBar />
      </div>
    </div>
  </header>
);

export default Header;
