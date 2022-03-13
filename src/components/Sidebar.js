import React, { useRef, useState, useEffect } from 'react';
import { Divider } from 'rsuite';
import DashboardToggle from './dashboard/DashboardToggle';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);

  return (
    <div className="h-100 pt-2">
      <div className="float-right" ref={topSidebarRef}>
        <img className="logo-center" alt="logo" src="./logo90.png" />
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join conversation</Divider>
      </div>
      <div className="clear-both" ><ChatRoomList aboveElHeight={height} /></div>
    </div>
  );
};

export default Sidebar;
