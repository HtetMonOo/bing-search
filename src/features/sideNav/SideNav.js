import React, { useState } from 'react';
import { Sidenav, Dropdown, Icon, Nav, Toggle } from 'rsuite';
import { Link } from 'react-router-dom'
import TopNav from '../../app/TopNav';
import './SideNav.css';
 

const SideNav = () => {
    
    const [ state, setState ] = useState({
        width: 250,
        expand: true,
        activeKey: '1',
    })
    
    const handleToggle = () => {
        setState({
            expand: !state.expand,
            width: state.width === 250 ? 58 : 250
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
            <Sidenav expanded={state.expand} defaultOpenKeys={['1']} activeKey={state.activeKey}
            >
              <Sidenav.Body>
                <Nav className="green">
                  <Link to="/"><Nav.Item eventKey="1" icon={<Icon icon="home" />}  onSelect={handleSelect}>Home</Nav.Item></Link>

                  <Dropdown placement="rightStart" eventKey="2" title="Music videos" icon={<Icon icon="music" />}  onSelect={handleSelect}>
                    <Link to={`/viralVideo`}><Dropdown.Item eventKey="2-1"  onSelect={handleSelect}>This week</Dropdown.Item></Link>
                    <Link to={`/viralVideo`}><Dropdown.Item eventKey="2-2">Top</Dropdown.Item></Link>
                    <Dropdown.Item eventKey="3-3">Trending</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                  </Dropdown>

                  <Dropdown placement="rightStart" eventKey="3" title="Viral videos" icon={<Icon icon="magic" />}>
                    <Link to={`/viralVideo`}><Dropdown.Item eventKey="3-1">This week</Dropdown.Item></Link>
                    <Dropdown.Item eventKey="3-2">Last week</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">More viral videos</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                  </Dropdown>

                  <Dropdown placement="rightStart" eventKey="4" title="TV shows" icon={<Icon icon="tv" />}>
                    <Link to={`/viralVideo`}><Dropdown.Item eventKey="3-1">This week</Dropdown.Item></Link>
                    <Dropdown.Item eventKey="3-2">Last week</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">More viral videos</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                  </Dropdown>

                  <Dropdown placement="rightStart" eventKey="5" title="Movie trailers" icon={<Icon icon="play2" />}>
                    <Link to={`/viralVideo`}><Dropdown.Item eventKey="3-1">This week</Dropdown.Item></Link>
                    <Dropdown.Item eventKey="3-2">Last week</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">More viral videos</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                  </Dropdown>
                  
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

