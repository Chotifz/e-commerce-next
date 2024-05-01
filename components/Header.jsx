import Logo from "./Logo";
import { ImSearch } from "react-icons/im";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="h-16 shadow-md bg-white">
      <div className="h-full flex items-center gap-2 justify-between container mx-auto px-2">
        <div className="">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="hidden md:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-3">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="search product . . ."
          />
          <div className="flex items-center justify-center text-white text-lg min-w-[50px] h-8 bg-orange-400 rounded-r-full">
            <ImSearch />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-3xl cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>

            <div className="bg-orange-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            <Link
              href="/login"
              className="px-4 py-1.5 rounded-xl bg-orange-500 text-white hover:bg-orange-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
