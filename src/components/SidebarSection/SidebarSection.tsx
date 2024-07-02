import { BiSolidUserCircle, BiUser } from "react-icons/bi";

export const SidebarSection = () => {
  return (
    <div className="sidebar-info">
      <div className="sidebar-info-upgrade">
        <BiUser size={20} />
        <p>Upgrade plan</p>
      </div>
      <div className="sidebar-info-user">
        <BiSolidUserCircle size={20} />
        <p>User</p>
      </div>
    </div>
  );
};
