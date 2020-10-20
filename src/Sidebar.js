import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'; import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PeopleIcon from "@material-ui/icons/People"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import { useStateValue } from "./StateProvider";


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName} />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title='COVID-19 Information Center' />
            <SidebarRow
                Icon={PeopleIcon}
                title="Friends" />
            <SidebarRow
                Icon={SupervisedUserCircleIcon}
                title='Groups' />
            <SidebarRow
                Icon={OndemandVideoIcon}
                title="Videos" />
            <SidebarRow
                Icon={ExpandMoreRoundedIcon}
                title="See More" />
        </div>
    )
}

export default Sidebar
