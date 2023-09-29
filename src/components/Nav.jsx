import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignIn = (success) => {
    setLoggedIn(success);
    if (success) {
      localStorage.setItem("loggedIn", true);
    }
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownItemClick = (brand) => {
    alert(`This is not implemented yet for ${brand}`);
  };

  return (
    <header
      className={`px-4 py-3 bg-gray-800 text-white sticky top-0 z-50 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" className="text-2xl font-semibold">
          RunningShopChile
        </a>
        <ul className="hidden space-x-6 lg:flex">
          <li key={"Inicio"}>
            <a href={"/"} className="hover:text-blue-500 transition duration-300">
              {"Inicio"}
            </a>
          </li>
          <li key={"Marcas"} className="relative group">
            <span className="cursor-pointer hover:text-blue-500 transition duration-300">
              {"Marcas"}
            </span>
            <ul className="hidden absolute left-0 mt-2 space-y-2 bg-white text-gray-800 border border-gray-300 group-hover:block">
              <li>
                <button
                  onClick={() => handleDropdownItemClick("Nike")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  Nike
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDropdownItemClick("Asics")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  Asics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDropdownItemClick("Adidas")}
                  className="w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  Adidas
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
