import React from 'react'
import { links, social } from './data'
import { useGlobalContext } from './context'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'

const SideBar = () => {

  const { closeSidebar, isSidebarOpen } = useGlobalContext()
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar '}>

      <header className='sidebar-header '>


        <img src={logo} alt="" className='logo' />

        <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
      </header>
      <nav className="links">

        {links.map((link) => {
          const { id, url, text, icon } = link;
          return <a href={url} key={id}>{icon}{text}</a>
        })}
      </nav>

      <footer className='social-links'>

        {social.map((item) => {

          return <a key={item.id} href={item.url}>{item.icon}</a>
        })}
      </footer>
    </aside>
  )
}

export default SideBar