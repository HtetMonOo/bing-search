import React, { useState } from 'react';
import { Toggle, IconButton, Badge, Icon } from 'rsuite';
import './TopNav.css';
import { Link } from 'react-router-dom';


const TopNav=({handleToggle}) => {

  const [ searchTerm, setSearchTerm ] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

    return (
        <nav className="TopNav navbar navbar-expand-lg bg-white">
            <div className="d-flex">
                <button className="btn px-2 py-1 mr-2"  onClick={handleToggle()}>
                  <Icon icon="bars" />
                </button>
                <a className="navbar-brand mr-7" href="#">Bing</a>
            </div>
  
            <div className="search mx-auto">
                <input type="text" className="searchTerm" placeholder="What do you want to watch?" onChange={event => handleInputChange(event)}></input>
                <Link to={`/searchVideoList/${searchTerm}`}>
                  <button type="submit" className="searchButton">
                      <Icon icon="search" />
                  </button>
                </Link>
            </div>

            <div>
            <IconButton className="btn py-1 px-2 mx-3" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="secondary">
              <Icon icon="envelope" />
              </Badge>
            </IconButton>
            <IconButton className="btn py-1 px-2 mx-3" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="secondary">
              <Icon icon="bell" />
              </Badge>
            </IconButton>
            <IconButton className="btn py-1 px-2 mx-3" aria-label="show 3 info">
              <Badge badgeContent={3} color="secondary">
              <Icon icon="user" />
              </Badge>
            </IconButton>
          </div>
        </nav>
    )
}

export default TopNav
