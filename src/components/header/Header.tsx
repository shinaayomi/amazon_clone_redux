import Image from "next/image";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cartIcon.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProducts } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { addUser } from "@/store/nextSlice";
import SearchProduct from "./SearchProduct";

const Header = () => {
  const { data: session } = useSession();
  const [allData, setAllData] = useState([]);
  const { productData, favouriteData, userInfo, allProducts } = useSelector(
    (state: StateProps) => state.next
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setAllData(allProducts.allProducts);
  }, [allProducts]);

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  // Search area
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = allData.filter((item: StoreProducts) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filtered);
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="w-full h-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* logo */}
        <Link
          href="/"
          className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
          passHref
        >
          <Image
            className="w-28 object-cover mt-1"
            src={logo}
            alt="logoImage"
          />
        </Link>
        {/* delivery */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 hidden xl:inline-flex items-center justify-center gap-1 h-[70%]">
          <SlLocationPin />
          <div className="text-xs">
            <p>Delivery to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/* searchbar */}
        <div className="flex-1 h-10 hidden xl:inline-flex items-center justify-between relative">
          <input
            onChange={handleSearch}
            value={searchQuery}
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search for Adebisi amazon products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex justify-center items-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>

          {/* =========== Searchfield ========= */}
          {searchQuery && (
            <div className="absolute top-12 left-0 w-full max-h-96 bg-gray-200 shadow-lg rounded-lg overflow-y-auto overscroll-y-contain cursor-pointer text-black z-50">
              {filteredProducts.length > 0 ? (
                <>
                  {searchQuery &&
                    filteredProducts.map((item: StoreProducts) => (
                      <Link
                        key={item._id}
                        className="w-full border-b border-gray-400 flex items-center gap-4"
                        href={{
                          pathname: `${item._id}`,
                          query: {
                            _id: item._id,
                            title: item.title,
                            brand: item.brand,
                            category: item.category,
                            description: item.description,
                            image: item.image,
                            isNew: item.isNew,
                            oldPrice: item.oldPrice,
                            price: item.price,
                          },
                        }}
                        onClick={
                          () => setSearchQuery("") // Clear search query on click
                        }
                      >
                        <SearchProduct item={item} />
                      </Link>
                    ))}
                </>
              ) : (
                <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                  <p className="text-xl font-semibold animate-bounce">
                    Nothing matches with your search keywords. Please try again!
                  </p>
                </div>
              )}
            </div>
          )}
          {/* =========== Searchfield ========= */}
        </div>
        {/* signin */}
        {userInfo ? (
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <Image
              src={userInfo.image}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
              width={38}
              height={32}
              priority
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center ">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        {/* favourite */}
        <Link
          href={"/favourite"}
          className="relative text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favourite</p>
          {favouriteData.length > 0 && (
            <span className="absolute top-2 right-2 w-4 h-4 border border-gray-400 flex itrms-center justify-center text-xs text-amazon_yellow">
              {favouriteData.length}
            </span>
          )}
        </Link>
        {/* cart */}
        <Link
          href="/cart"
          className="flex items-center  px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
          passHref
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute top-2 left-[29px] text-amazon_yellow text-xs font-semibold">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
