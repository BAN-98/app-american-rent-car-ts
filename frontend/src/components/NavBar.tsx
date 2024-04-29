import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DisclosurePanel from "./NavBar/DisclosurePanel";
import ProfileDropdown from "./NavBar/ProfileDropdown";
import NavLinks from "./NavBar/NavLinks";

const auth = false;

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <NavLinks />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {auth ? (
                  <ProfileDropdown />
                ) : (
                  <a
                    href="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white
                    block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Iniciar Sesion
                  </a>
                )}
              </div>
            </div>
          </div>
          <DisclosurePanel />
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
