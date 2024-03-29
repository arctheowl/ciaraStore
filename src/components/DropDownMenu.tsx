import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";

const userNavigation = [
  { name: "About Us", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Checkout", href: "#" },
  { name: "Contact Us", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DropDownMenu = () => {
  const [selected, setSelected] = useState(false);
  return (
    <Menu as="div" className="relative ml-4 flex-shrink-0">
      <div>
        <Menu.Button
          onClick={() => setSelected(!selected)}
          className="relative flex rounded-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          {selected ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownMenu;
