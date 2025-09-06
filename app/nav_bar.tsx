import React, { useState } from 'react';
import { Menu } from './utilities/constants';

export const NavBar = () => {
      const menu = [Menu.MOVIES, Menu.REVIEW, Menu.ABOUT, Menu.QUIZ];
      const [activeMenu, setActiveMenu] = useState<Menu>(Menu.MOVIES);

      const handleMenuClick = (menu: Menu) => {
            console.log('"clicking menu : ', menu);
            setActiveMenu(menu);
      }

      return (
            <div className='px-3 bg-blue-300 flex gap-20 rounded-md h-16 items-center shadow-lg shadow-stone-500/50'>
                  logo
                  <ul className='flex gap-5  items-center'>
                        {menu.map((m: Menu, index: number) => {
                              const isActive = activeMenu === m;
                              const menuStyle = `${isActive ? "text-white bg-rose-300 p-2 rounded-lg" : "text-amber-950"} font-semibold cursor-pointer`;

                              return (
                                    <li className={menuStyle} key={index} onClick={() => handleMenuClick(m)}>
                                          {m}
                                    </li>
                              );
                        })}

                  </ul>
                  <ul className='flex gap-5 ml-auto items-center'>
                        <li>
                              Profile
                        </li>
                        <li>
                              Settings
                        </li>
                  </ul>
            </div>
      )
}
