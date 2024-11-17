import { useState } from 'react';
import {
  FaUser,
  FaCreditCard,
  FaCog,
  FaKeyboard,
  FaUsers,
  FaPlus,
  FaGithub,
  FaLifeRing,
  FaSignOutAlt,
  FaCloud,
} from 'react-icons/fa';
import settings from '../../public/setting.png';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <img src={settings} alt="" onClick={() => toggleDropdown()} />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="p-2">
            <div className="text-sm text-gray-500 mb-2">My Account</div>
            <div className="flex flex-col gap-2">
              <MenuItem icon={<FaUser />} label="Profile Item" shortcut="⌘⇧B" />
              <MenuItem
                icon={<FaCreditCard />}
                label="Billing"
                shortcut="⌘⇧B"
              />
              <MenuItem icon={<FaCog />} label="Settings" shortcut="⌘⇧B" />
              <MenuItem
                icon={<FaKeyboard />}
                label="Keyboard shortcuts"
                shortcut="⌘⇧B"
              />
            </div>
          </div>
          <hr className="my-2" />
          <div className="p-2">
            <div className="text-sm text-gray-500 mb-2">Team</div>
            <div className="flex flex-col gap-2">
              <MenuItem icon={<FaUsers />} label="Invite users" />
              <MenuItem icon={<FaPlus />} label="New team" shortcut="⌘⇧B" />
            </div>
          </div>
          <hr className="my-2" />
          <div className="p-2">
            <MenuItem icon={<FaGithub />} label="Github" />
            <MenuItem icon={<FaLifeRing />} label="Support" />
            <MenuItem icon={<FaCloud />} label="API" />
          </div>
          <hr className="my-2" />
          <div className="p-2">
            <MenuItem icon={<FaSignOutAlt />} label="Log out" shortcut="⌘⇧B" />
          </div>
        </div>
      )}
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
}

const MenuItem = ({ icon, label, shortcut }: MenuItemProps) => (
  <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
    {shortcut && <span className="text-xs text-gray-400">{shortcut}</span>}
  </div>
);

export default DropdownMenu;
