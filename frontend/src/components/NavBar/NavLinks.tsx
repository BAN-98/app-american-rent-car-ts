import carLogo from "../../assets/carLogo.webp";

const NavLinks = () => {
  const navigation = [
    { name: "Inicio", href: "/home", current: false },
    { name: "Coches", href: "/cars", current: false },
  ];
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex flex-shrink-0 items-center ">
        <img
          className="h-8 w-auto rounded-full"
          src={carLogo}
          alt="American Rent Cart"
        />
      </div>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
