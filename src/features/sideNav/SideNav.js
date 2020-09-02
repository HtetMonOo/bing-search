import React, { useState } from 'react';
import { Sidenav, Dropdown, Icon, Nav, Toggle } from 'rsuite';
import { Link } from 'react-router-dom'
import TopNav from '../../app/TopNav';
import './SideNav.css';
 

const SideNav = () => {
    
    const [ state, setState ] = useState({
        width: 200,
        expand: true,
        activeKey: '1',
    })
    
    const handleToggle = () => {
        setState({
            expand: !state.expand,
            width: state.width === 200 ? 50 : 200
        });
      }
    const handleSelect = (eventKey) => {
        setState({
            activeKey: eventKey
        })
      }
    
      const { expanded } = state;
    
        return (
            
          <div style={{ width: state.width }} className="SideNav m-0 d-inline-block">
            <TopNav handleToggle={()=>handleToggle} expanded={expanded}></TopNav>
            <hr />
            <Sidenav className="green" expanded={state.expand} defaultOpenKeys={['1']} activeKey={state.activeKey} onSelect={handleSelect}
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item eventKey="1" icon={<Icon icon="home" />}>Home</Nav.Item>

                  <Nav.Item eventKey="2" icon={<Icon icon="music" />}>Music videos</Nav.Item>

                  <Dropdown placement="rightStart" eventKey="3" title="Viral videos" icon={<Icon icon="magic" />}>
                    <Link to={`/viralVideo`}><Dropdown.Item eventKey="3-1">This week</Dropdown.Item></Link>
                    <Dropdown.Item eventKey="3-2">Last week</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">More viral videos</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                  </Dropdown>
                  <Nav.Item eventKey="4" icon={<Icon icon="tv" />}>TV shows</Nav.Item>
                  
                  <Nav.Item eventKey="5" icon={<Icon icon="play2" />}>Movie trailers</Nav.Item>
                  
                  <Dropdown placement="rightStart" eventKey="4" title="Settings"
                    icon={<Icon icon="gear-circle" />}
                  >
                    <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                    <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                    <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </div>
        );
      
}

export default SideNav;

