import React from 'react'
import { Link } from "react-router-dom";
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'
import '../../App.css';

import SidebarItem from '../sidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
  
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link className="button" to="/"><SidebarItem Icon={FaHome} Text="Home" /></Link>
        <Link className="button" to="/clientes"><SidebarItem Icon={FaUserAlt} Text="Clientes" /></Link>
        <SidebarItem Icon={FaChartBar} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar