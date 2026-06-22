import {
    LayoutDashboard,
    Bot,
    ScanFace,
    Activity,
    Settings
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const location = useLocation();

    const menu = [

        {
            title:"Dashboard",
            icon:<LayoutDashboard size={22}/>,
            path:"/dashboard"
        },

        {
            title:"AI Chat",
            icon:<Bot size={22}/>,
            path:"/chat"
        },

        {
            title:"Skin AI",
            icon:<ScanFace size={22}/>,
            path:"/skin-analysis"
        },

        {
            title:"Simulator",
            icon:<Activity size={22}/>,
            path:"/simulator"
        },

        {
            title:"Settings",
            icon:<Settings size={22}/>,
            path:"#"
        }

    ];

    return (

        <aside className="sidebar">

            <h2 className="sidebar-logo">

                Health<span>Twin</span>

            </h2>

            {

                menu.map((item,index)=>(

                    <Link

                        key={index}

                        to={item.path}

                        className={

                            location.pathname===item.path

                            ?

                            "sidebar-item active-sidebar"

                            :

                            "sidebar-item"

                        }

                    >

                        {item.icon}

                        <span>

                            {item.title}

                        </span>

                    </Link>

                ))

            }

        </aside>

    );

}

export default Sidebar; 