import { Disclosure } from "@headlessui/react";
const navigation = [
  { name: "Inicio", href: "/home", current: true },
  { name: "Coches", href: "/cars", current: true },

];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
const DisclosurePanel = () => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
};

export default DisclosurePanel;
