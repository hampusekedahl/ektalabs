import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  // State to manage the collapsible menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function to open/close the menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="w-full bg-theme-900 text-theme-100">
        <div className="container min-h-screen max-w-screen-lg mx-auto px-4 flex-1 flex flex-col">
          <header>
            <nav className="flex pt-4 items-center text-sm">
              <h1 className="font-bold text-xl">
                <a href="/">Ekta<span className="text-green-600">Labs</span></a>
              </h1>
              <div className="flex-1"></div>
              {/* Main navigation links */}
              <ul className="flex items-center md:gap-6 relative">
                <li className="hidden md:block"><a href="/shop">Shop</a></li>
                <li className="hidden md:block"><a href="/pricing">Pricing</a></li>
                <li className="hidden md:block"><a href="/contacts">Contacts</a></li>
                <li className="hidden md:block"><a href="/blog">Blog</a></li>
                <li className="hidden md:block"><a href="/sign-in">Sign In</a></li>
                <li className="hidden md:block"><a className="btn btn-small btn-primary" href="/register">Create Account</a></li>
              </ul>

              {/* Mobile toggle button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu} // Toggle menu state
                  className="h-16 w-12 flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
              </div>
            </nav>
            <nav
              className={`md:hidden flex flex-col item-center gap-4 p-4 ${menuOpen ? "block" : "hidden"}`}
            >
              <ul className="text-xl flex flex-col">
                <li><a href="/shop">Shop</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/docs">Blog</a></li>
                <li><a href="/sign-in">Sign In</a></li>
                <li><a href="/register" style={{ textDecoration: "none" }}>
                  <span className="text-xl">Create Account</span>
                </a></li>
              </ul>
            </nav>
          </header>

          {/* Collapsible menu for mobile */}


          {/* Outlet for dynamic page content */}
          <Outlet />

          <footer className="bg-black bg-opacity-100 text-theme-100 p-8 mb-8 grid md:grid-cols-4 gap-8 text-sm relative z-10">
            <div className="flex flex-col gap-8">
              <a href="/" className="text-xl font-bold h-[30px] flex items-end">
                Ekta<span className="text-green-600">Labs</span>
              </a>
              <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://bashsenpai.com/logo-twitter.png" alt="twitter" className="w-[24px]" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://bashsenpai.com/logo-mastodon.png" alt="mastodon" className="w-[24px]" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl">
                  <svg className="svelte-fa svelte-1cj2gr0" style={{ height: "1em", verticalAlign: "-.125em", transformOrigin: "center", overflow: "visible" }} viewBox="0 0 496 512" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(248 256)" transform-origin="124 0">
                      <g transform="translate(0,0) scale(1,1)">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" fill="currentColor" transform="translate(-248 -256)" />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col opacity-50 text-xs">
                <a className="hover:text-primary-500" href="/privacy">Privacy Policy</a>
                <a className="hover:text-primary-500 mb-2" href="/terms">Terms and Conditions</a>
                <div>© 2025 EktaLabs. <br />All rights reserved.</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-[30px] flex items-end">
                <span className="text-base opacity-50">Useful Links</span>
              </div>
              <a className="hover:text-primary-500" href="/contacts">Contacts</a>
              <a className="hover:text-primary-500" href="/affiliate">Affiliate</a>
              <a className="hover:text-primary-500" href="/docs">Documentation</a>
              <span className="text-base opacity-50">Extras</span>
              <a className="hover:text-primary-500" href="/resources/cheatsheets">Cheatsheets</a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-[30px] flex items-end">
                <span className="text-base opacity-50">From the Blog</span>
              </div>
              <div>
                <a href="/blog/fine-tuning-bashsenpai" className="hover:text-primary-500">Comming Soon</a>
              </div>
              <div>
                <a href="/blog/master-the-terminal" className="hover:text-primary-500">Comming Soon</a>
              </div>
              <div>
                <a href="/blog/introducing-bashsenpai" className="hover:text-primary-500">Comming Soon</a>
              </div>
              <a href="/blog" className="hover:text-primary-500 opacity-50 hover:opacity-100 text-xs">More Posts...</a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-[30px] flex items-end">
                <span className="text-base opacity-50">Newsletter</span>
              </div>
              <form className="flex gap-1">
                <input type="email" placeholder="Email" id="email" name="email" className="flex-1 h-8 w-full px-2 block" />
                <button className="btn btn-primary btn-small w-8">
                  <svg className="svelte-fa svelte-1cj2gr0" style={{ height: "1em", fontSize: "12", verticalAlign: "-.125em", transformOrigin: "center", overflow: "visible" }} viewBox="0 0 512 512" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(256 256)" transform-origin="128 0">
                      <g transform="translate(0,0) scale(1,1)">
                        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4" fill="currentColor" />
                      </g>
                    </g>
                  </svg>
                </button>
              </form>
              <span className="text-xs leading-relaxed opacity-50">Subscribe for news about EktaLabs, no spam.<br />Promise.</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
