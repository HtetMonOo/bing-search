import React, { useState } from 'react';
import { Toggle, IconButton, Badge, Icon } from 'rsuite';
import './TopNav.css';


const TopNav=({handleToggle, expanded}) => {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    return (
        <nav className="TopNav navbar navbar-expand-lg bg-white">
            <div>
                <Toggle className="mx-3" onChange={handleToggle()} checked={expanded} />
                <a className="navbar-brand mr-7" href="#">Bing</a>
            </div>
  
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?"></input>
                <button type="submit" className="searchButton">
                    <Icon icon="search" />
                </button>
            </div>

            <div className="ml-auto">
            <IconButton className="btn py-1 px-2 mx-3" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
              <Icon icon="envelope" />
              </Badge>
            </IconButton>
            <IconButton className="btn py-1 px-2 mx-3" aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
              <Icon icon="bell" />
              </Badge>
            </IconButton>
            <IconButton className="btn py-1 px-2 mx-3" aria-label="show 3 info" color="inherit">
              <Badge badgeContent={3} color="secondary">
              <Icon icon="user" />
              </Badge>
            </IconButton>
          </div>
        </nav>
    )
}

export default TopNav
