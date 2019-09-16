import React, { Component } from 'react'
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom'
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

import "./menu.scss"

class Navigation extends Component {
  state = {
    menuItems: [],
    selectedContent: 'MainPage',
    link: ''
  }


  componentDidMount() {
    this.fetchMenu();
  }

  async fetchMenu() {
    try {
      const res = await axios.get("/menu.json");
      this.setState({ menuItems: res.data });
    } catch(error) {
      console.log("Error while fetching menu.json", error);
    }
  }

  menuChange = (selectedContent, link) =>
    this.setState({
      selectedContent: selectedContent ? selectedContent : link,
      link
    })


  render() {
    const { selectedContent, link } = this.state
    return (
      <>
        <div className="nav-menu">
          <MenuList
            items={this.state.menuItems}
            onItemClick={this.menuChange}
            expandIcon={<FaCaretDown />}
          />
        </div>
        <Content content={selectedContent} />
        <Route
          path={link}
          component={Content}
        />
      </>
    )
  }
}

const Content = ({ content }) => {
  return (
    <h2 className='content'>{content}</h2>
  )
}

const MenuList = ({ items, onItemClick, expandIcon }) => {

  return (
    <ul>
      {
        items.map(item => (
          <li key={item.key}>
            <NavLink to={`/${item.key}`} >
              <span
                onClick={() => { onItemClick(item.content, item.key) }}>
                {item.label} &nbsp; {item.child && expandIcon}
              </span>
            </NavLink>
            {item.child && item.child.length &&
              <MenuList
                items={item.child}
                onItemClick={onItemClick}
                expandIcon={<FaCaretRight />}
              />}
          </li>
        ))
      }
    </ul>
  )
}


export default Navigation
