const incentives = [
  {
    name: "Free shipping",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "10-year warranty",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: "Exchanges",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

const Banner = () => {
  return (
    <>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-black lg:text-6xl">
          Welcome to Crafts and Busy Gifts
        </h1>
        <p className="mt-4 text-xl text-black">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-md border border-transparent bg-teal-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-teal-300"
        >
          Shop New Arrivals
        </a>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="text-white sm:flex lg:block">
              <div className="sm:flex-shrink-0">
                <img
                  className="mx-auto h-16 w-16 text-white"
                  src={incentive.imageSrc}
                  alt=""
                />
              </div>
              <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-sm font-medium text-black">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-sm text-black">
                  {incentive.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
