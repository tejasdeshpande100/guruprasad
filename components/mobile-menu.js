import React, { useContext, Fragment, useRef } from "react";
import Link from "@/components/link";
import { FooterBottomData, NavLinksData } from "@/data";
import { MenuContext } from "@/context/menu-context";

const MobileMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="mobile-menu animated fadeInLeft">
      <div className="mobile-menu__overlay" onClick={handleMenuClick}></div>
      <div className="mobile-menu__inner">
        <div className="mobile-menu__top">
          <h1 className="mobile-menu__logo">
            <Link href="/">GURUPRASAD</Link>
          </h1>
          <a href="#" className="mobile-menu__close" onClick={handleMenuClick}>
            <i className="fa fa-times"></i>
          </a>
        </div>
        <nav className="mobile-menu__links" ref={menuEl}>
          <ul>
            {NavLinksData.map((links, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    undefined !== links.subItems ? "menu-item-has-children" : ""
                  }`}
                >
                  <Link href={links.url}>{links.name}</Link>
                  {undefined !== links.subItems ? (
                    <Fragment>
                      <button
                        onClick={(e) => {
                          menuEl.current
                            .querySelectorAll(".sub-menu")
                            .forEach((item) => {
                              item.classList.remove("show");
                            });

                          let clickedItem = e.currentTarget.parentNode;
                          clickedItem
                            .querySelector(".sub-menu")
                            .classList.toggle("show");
                        }}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="sub-menu">
                        {links.subItems.map((subLinks, index) => (
                          <li key={index}>
                            <Link href={subLinks.url}>{subLinks.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </Fragment>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-menu__text">
          GURUPRASAD NETRA RUGNALAYA PVT. LTD. is the leading eye care facility
          in Aurangabad and we have been managing our patient's health since
          1980.
        </div>
        <div className="mobile-menu__socials">
          {FooterBottomData.social.map(({ icon, url }, index) => {
            return <a key={index} href={url} className={`${icon}`}></a>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
