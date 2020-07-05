import React from 'react'
import { Container, Box } from "./styles"
import Switches from './Switch'
import { IoIosGlasses } from 'react-icons/io'
import { FaUserCog } from 'react-icons/fa'
import Link from 'next/link'


interface Props {
  themeHandler: Function;
}

const Header = ({ themeHandler }: Props) => (
  <Container>
    <Switches SwitchThemeHandler={themeHandler} />
    <Box>
      <div>
        <Link href="/blog">
          <strong>Blog</strong>
        </Link>
      </div>
      <Link href="/" passHref>
        <IconGlasses />
      </Link>
      <div>
        <Link href="/about">
          <strong>About</strong>
        </Link>
      </div>
    </Box>
    <Link href="/user">
      <FaUserCog size="32" />
    </Link>
  </Container>)
export default Header;

const IconGlasses = React.forwardRef(function IconGlasses(props, ref) {
  return (<div id="glasses" {...props} ref={ref as React.MutableRefObject<HTMLDivElement>}>
    <IoIosGlasses size="48" />
  </div>)
});
