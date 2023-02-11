import React, { useState } from 'react'
import { Container } from './styles'
import { LogoImg } from './styles'
import { Img } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import LogoEco from '../../assets/LogoLojas.png'

const Header = () => {
  const [sidebar, setSidebar] = useState(true)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
      <Container>
        <FaBars onClick={showSiderbar} />
        {sidebar && <Sidebar active={setSidebar} />}
        <LogoImg><Img src={LogoEco}/></LogoImg>
      </Container>
    </>
  )
}

export default Header