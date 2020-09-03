import React, { useState, useEffect } from 'react';
import { Sidenav, Dropdown, Icon, Nav } from 'rsuite';
import { Link } from 'react-router-dom'
import TopNav from '../../app/TopNav';
import './SideNav.css';
import { useSelector } from 'react-redux';
import { getVideos } from '../videos/videoSlice';
 

const SideNav = () => {

  const videos = useSelector(getVideos);
    
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
      const count = 2;
      const subCount = 1;
        return (
            
          <div style={{ width: state.width }} className="SideNav m-0 d-inline-block">
            <TopNav handleToggle={()=>handleToggle} expanded={expanded}></TopNav>
            <Sidenav expanded={state.expand} defaultOpenKeys={['1']} activeKey={state.activeKey} >
              <Sidenav.Body>
                <Nav className="green">
                  <Link to="/"><Nav.Item eventKey="1" icon={<Icon icon="home" />}  onSelect={handleSelect}>Home</Nav.Item></Link>
                  {
                    videos && videos.categories &&
                    videos.categories.map((category, count) => (
                      <Dropdown placement="rightStart" eventKey={count} title={category.title} icon={<Icon icon="music" />}  onSelect={handleSelect}>
                        {
                          category.subcategories && 
                          category.subcategories.map((sub, subCount) => (
                            <Link to={`/videoList:${sub}`}><Dropdown.Item eventKey={`${count}-${subCount}`}  onSelect={handleSelect}>{sub.title}</Dropdown.Item></Link>
                          ))
                        }
                      </Dropdown>
                      
                    ))
                  }

{/*                   

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
                   */}
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

