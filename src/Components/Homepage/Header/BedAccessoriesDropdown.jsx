import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";

const BedAccessoriesDropdown = () => {
  const check = () => {
    location.reload(true);
    forceUpdate();
  };
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex py-2 pl-3 pr-4 text-black md:text-lg rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 ">
        Bed Accessories
        <AiOutlineCaretDown className="ml-2 h-7 w-3" />
      </Menu.Button>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="flex w-max flex-col space-y-2 px-6 py-3 text-[#696969] md:absolute md:-left-16 md:mt-2 md:rounded-lg  md:bg-white md:drop-shadow-md">
          <Menu.Item>
            <Link
              onClick={check}
              to="/Products"
              className="inline-flex py-2 pl-3 pr-4 text-black hover:text-yellow-500 rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              All Products
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              onClick={check}
              to="/BeddingAccessories/pillow"
              className="inline-flex py-2 pl-3 pr-4 text-black hover:text-yellow-500 rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Pillows
            </Link>
          </Menu.Item>
          {/* <Menu.Item>
            <Link
              onClick={check}
              to="/BeddingAccessories/loungers"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Loungers
            </Link>
          </Menu.Item> */}
          <Menu.Item>
            <Link
              onClick={check}
              to="/BeddingAccessories/protectors"
              className="inline-flex py-2 pl-3 pr-4 text-black hover:text-yellow-500 rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Protectors
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              onClick={check}
              to="/BeddingAccessories/toppers"
              className="inline-flex py-2 pl-3 pr-4 text-black hover:text-yellow-500 rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Toppers
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              onClick={check}
              to="/BeddingAccessories/comforters"
              className="inline-flex py-2 pl-3 pr-4 text-black hover:text-yellow-500 rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Comforters
            </Link>
          </Menu.Item>
          {/* <Menu.Item>
            <Link
              onClick={check}
              to="/BeddingAccessories/foams"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Foams
            </Link>
          </Menu.Item> */}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default BedAccessoriesDropdown;
