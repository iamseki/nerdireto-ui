import React from 'react'
import { Container, Box } from "./styles"
import Switches from './Switch'
import { IoIosGlasses } from 'react-icons/io'
import { FaUserCog } from 'react-icons/fa'
import Link from 'next/link'
import Tooltip from '@material-ui/core/Tooltip';


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
        <Tooltip title="Home" arrow placement="right">
          <IconGlasses />
        </Tooltip>
      </Link>
      <div>
        <Link href="/about">
          <strong>About</strong>
        </Link>
      </div>
    </Box>
    <Link href="/user">
      <Tooltip title="Configurações" arrow placement="left">
        <IconUser />
      </Tooltip>
    </Link>
  </Container>)
export default Header;

const IconGlasses = React.forwardRef(function IconGlasses(props, ref) {
  return (<div id="glasses" {...props} ref={ref as React.MutableRefObject<HTMLDivElement>}>
    <IoIosGlasses size="48" />
  </div>)
});

const IconUser = React.forwardRef(function IconGlasses(props, ref) {
  return (<div {...props} ref={ref as React.MutableRefObject<HTMLDivElement>}>
    <FaUserCog size="32" />
  </div>)
});