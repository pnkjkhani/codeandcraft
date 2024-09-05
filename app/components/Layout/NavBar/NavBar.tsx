'use client';
import Link from 'next/link';
import { NavLink } from './NavLink';
import { useCallback, useState } from 'react';
import type { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

const navbarItems = [
  { ref: '/', label: 'Home' },
  { ref: '/about', label: 'About' },
  { ref: '/course', label: 'Courses' },
  { ref: '/news', label: 'Blogs' },
  { ref: '/contact', label: 'Contact' },
];

const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavLink
    className={`${className ?? 'text-black font-bold'} ${
      isActive ? 'text-blue-500' : 'hover:text-blue-500'
    }`}
    {...linkProps}
  />
);

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!);
  const toggleOpen = useCallback(
    () => setIsMenuShown(!isMenuShown),
    [isMenuShown]
  );
  return (
    <>
      <button
        className="block lg:hidden fixed top-2 right-3 z-50"
        onClick={toggleOpen}
      >
        <div className="space-y-2 bg-purple-site rounded p-3">
          {(isMenuShown
            ? [
                'rotate-45 translate-y-[13px]',
                'opacity-0 h-0',
                '-rotate-45 translate-y-[-13px]',
              ]
            : ['', '', '']
          ).map((className, index) => (
            <span
              key={index}
              className={
                'block h-[3px] w-6 bg-white transform transition duration-500 ease-in-out ' +
                className
              }
            ></span>
          ))}
        </div>
      </button>
      <nav
        className={`${
          isMenuShown
            ? 'max-lg:w-full max-lg:opacity-100'
            : 'max-lg:w-0 max-lg:opacity-0'
        } transition-all duration-500 ease-in-out lg:block overflow-hidden max-lg:absolute max-lg:animate-sideways-once max-lg:h-screen max-lg:bg-white max-lg:pt-24 z-40 top-0 right-0`}
      >
        <ul className="flex flex-col items-center lg:flex-row gap-10 lg:gap-4 min-[900px]:gap-5 xl:gap-12 justify-end text-sm lg:text-[15px] leading-[22px]">
          {navbarItems.map(({ ref, label }) => (
            <li key={ref} className="relative">
              <StyledNavLink
                isActive={ref === linkRef}
                href={ref}
                onClick={() => {
                  setLinkRef(ref);
                  setIsMenuShown(false);
                }}
              >
                {label}
              </StyledNavLink>
              <span className="absolute -bottom-5 lg:hidden border-b-2 w-48 left-[calc(50%_-_theme(space.24))]" />
            </li>
          ))}
          <li>
          <Link
              href="/book-demo"
              className="block w-full rounded font-site bg-blue-site hover:bg-purple-800 px-12 text-white py-3 text-sm font-medium  shadow  focus:outline-none focus:ring focus:ring-gray-300 sm:w-auto"
            >
              Book Demo
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
