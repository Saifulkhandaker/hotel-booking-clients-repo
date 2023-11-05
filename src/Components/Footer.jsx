import logo from "../assets/icons/logo-v4-black.png";

const Footer = () => {
  return (
    <div className="pt-10 bg-[#0B0604] text-white">
      <footer className="footer">
        <aside className="md:ml-2 lg:ml-4 ml-5">
          <img src={logo} alt="" />
          <p className="text-sm lg:text-lg mt-5">
            Welcome to the best five-star deluxe hotel in New <br />
            York. Hotel elementum sesue the aucan vestibulum <br />
            aliquam justo in sapien rutrum volutpat.
          </p>
        </aside>
        <nav className="md:ml-0 lg:ml-0 ml-5">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Rooms & Suits</a>
          <a className="link link-hover">About Hotel</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="md:ml-0 lg:ml-0 ml-5">
          <header className="footer-title">Information</header>
          <a className="link link-hover">1800-121-3637 <br />+91-7052-101-786</a>
          <a className="link link-hover">info@example.com</a>
          <a className="link link-hover">1247/Plot No. 39, 15th Phase, <br /> London, UK</a>
        </nav>
        <nav className="md:ml-0 lg:ml-0 ml-5">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <p className="text-white text-xs  text-center pt-8 md:pt-10 pb-1">© Copyrights 2023 Hoexr All rights reserved.</p>
    </div>
  );
};

export default Footer;
