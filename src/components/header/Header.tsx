import Image from "next/image";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <div>
        <Image src={logo} alt="logoImage" />
      </div>
    </div>
  );
};

export default Header;
