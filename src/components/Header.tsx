"use client";
import {
  Transition,
  Dialog,
  Tab,
  Popover,
  TabPanel,
  TabGroup,
  TabList,
  TabPanels,
} from "@headlessui/react";
import {
  XMarkIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import { Fragment, useState } from "react";
import Basket from "./Basket";
import DropDownMenu from "./DropDownMenu";

const inter = Inter({ subsets: ["latin"] });
const navigation = {
  categories: [
    {
      name: "Shop All",
      link: "/shopAll",
    },
    {
      name: "Busy Boards",
      featured: [
        {
          name: "Boys",
          href: "#",
          imageSrc: "/customMontessori.avif",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Girls",
          href: "#",
          imageSrc: "/girlsCustomMontessori.avif",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Busy Cubes",
          href: "#",
          imageSrc: "/busyCubes.avif",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Busy Bears",
          href: "#",
          imageSrc: "/busyBear.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Gifts",
      featured: [
        {
          name: "Weddings",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Family Trees",
          href: "#",
          imageSrc: "/familyTree.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Flower Holders",
          href: "#",
          imageSrc: "/flowerHolder.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Coasters",
          href: "#",
          imageSrc: "/coaster.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
    {
      name: "Seasonal",
      featured: [
        {
          name: "Christmas",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Easter",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
      ],
    },
  ],
  pages: [
    // { name: "Company", href: "#" },
    // { name: "Stores", href: "#" },
  ],
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <TabGroup as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.link ? (
                            <a href={category.link}>{category.name}</a>
                          ) : (
                            <>{category.name}</>
                          )}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="space-y-12 px-4 py-6"
                      >
                        {category.link ? (
                          <a
                            href={category.link}
                            className="text-sm font-medium text-gray-900"
                          >
                            {category.name}
                          </a>
                        ) : (
                          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                            {category.featured
                              ? category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a
                                      href={item.href}
                                      className="mt-6 block text-sm font-medium text-gray-900"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                    <p
                                      aria-hidden="true"
                                      className="mt-1 text-sm text-gray-500"
                                    >
                                      Shop now
                                    </p>
                                  </div>
                                ))
                              : null}
                          </div>
                        )}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <a
                  href={page.href}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  {page.name}
                </a>
              </div>
            ))}
          </div> */}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className={`-m-2 block p-2 font-medium text-gray-900 ${inter.className}`}
                    >
                      Create an account
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Navigation */}
      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          {/* <div className="bg-gray-900">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Currency selector 
                <form>
                  <div>
                    <label htmlFor="desktop-currency" className="sr-only">
                      Currency
                    </label>
                    <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                      <select
                        id="desktop-currency"
                        name="currency"
                        className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                      >
                        {currencies.map((currency) => (
                          <option key={currency}>{currency}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-300"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <div className="flex items-center space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Create an account
                  </a>
                </div>
              </div>
            </div> */}

          {/* Secondary navigation */}
          <div className="bg-white backdrop-blur-md backdrop-filter">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="/">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-12 w-auto"
                        src="/favicon.ico"
                        alt="Hello"
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={`text relative z-10 flex items-center justify-center font-medium text-black transition-colors duration-200 ease-out ${inter.className}`}
                                  >
                                    {category.name}
                                    <span
                                      className={classNames(
                                        open ? "bg-white" : "",
                                        "absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"
                                      )}
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                          {category.featured
                                            ? category.featured.map((item) => (
                                                <div
                                                  key={item.name}
                                                  className="group relative"
                                                >
                                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className="object-cover object-center"
                                                    />
                                                  </div>
                                                  <a
                                                    href={item.href}
                                                    className="mt-4 block font-medium text-gray-900"
                                                  >
                                                    <span
                                                      className="absolute inset-0 z-10"
                                                      aria-hidden="true"
                                                    />
                                                    {item.name}
                                                  </a>
                                                  <p
                                                    aria-hidden="true"
                                                    className="mt-1"
                                                  >
                                                    Shop now
                                                  </p>
                                                </div>
                                              ))
                                            : null}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {/* {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-white"
                            >
                              {page.name}
                            </a>
                          ))} */}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 p-2 text-black"
                      onClick={() => setMobileMenuOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    {/* <a href="#" className="ml-2 p-2 text-white">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </a> */}
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    {/* <a
                        href="#"
                        className="hidden text-sm font-medium text-white lg:block"
                      >
                        Search
                      </a> */}

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      {/* <a href="#" className="p-2 text-white lg:hidden">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </a>
                        <a
                          href="#"
                          className="hidden text-sm font-medium text-white lg:block"
                        >
                          Help
                        </a> */}

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <a
                          href="#"
                          className="group -m-2 flex items-center p-2"
                        >
                          <Basket />
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </a>
                      </div>
                    </div>
                    <DropDownMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
