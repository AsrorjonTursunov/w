import W from "../assets/W.svg";

function Navbar() {
  return (
    <div className="">
      <nav className="flex items-center justify-between pt-12">
        <a href="">
          <img src={W} alt="" />
        </a>
        <div className="flex items-center gap-8">
          <a href="">Home</a>
          <a href="">New</a>
          <a href="">Popular</a>
          <a href="">Trending</a>
          <a className="p-r-300" href="">
            Categories
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
