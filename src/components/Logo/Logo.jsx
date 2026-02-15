import { Link } from "react-router";
import logoimg from '/logoimg.png';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logoimg} alt="" className="w-auto h-13" />
      <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-display tracking-tight">
        Contest
        <span className="text-cyan-400">
          Hub
        </span>
      </span>
    </Link>
  );
};

export default Logo;
