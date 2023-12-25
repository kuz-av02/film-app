import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";
import Button from "../Button/Button";
import MenuItem, { MenuItemProps } from "./MenuItem";
import Image from "next/image";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {

  const menuItems: MenuItemProps[] = [
    {
      href: '/films',
      name: 'Фильмы'
    },
  ]

  return (
    <Style.Header id="header">
      <Style.Content>
      <Style.Name href='/'>
        <Image 
          src='https://codewithsadee.github.io/filmlane/assets/images/logo.svg' 
          alt='logo'
          width='169'
          height='44'
          sizes="(max-width: 768px) 50vw"
        />
      </Style.Name>
        <Style.Navbar>
          
          {menuItems.map(mi => (
            <MenuItem key={mi.href} {...mi}/>
          ))}

        </Style.Navbar>

        <Style.Buttons>
          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
