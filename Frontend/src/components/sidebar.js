import React from 'react';
import { Link } from 'react-router-dom'
import SidebarItems from './sidebaritems'
import '../css/sidebar.css'


function Navbar() {


        return(

            <div id="mySidebar" className="sidebar">
                {
                    SidebarItems.map(item=> (
                     
                     <Link to={item.route}> 

                        <div key={item.name}>
                            <div className="sidebarItem">{[item.icon, item.name]}</div>
                        </div>

                     </Link>
                     
                    ))
                }
            </div>
        )
    }


export default Navbar