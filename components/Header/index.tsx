import React from 'react'
import {  Container, Box} from "./styles"
import Switches from './Switch'
import {IoIosGlasses} from 'react-icons/io'
import {FaUserCog} from 'react-icons/fa'


interface Props {
  themeHandler: Function;
}

const Header = ({themeHandler} : Props) => (
    <Container>
      <Switches SwitchThemeHandler={themeHandler}/>
      <Box>
      <div>
        <strong>Blog</strong>
      </div>
      <IoIosGlasses size="48"/>
      <div>
        <strong>About</strong>
      </div>
      </Box>
      <FaUserCog size="32"/>
    </Container>)
export default Header;