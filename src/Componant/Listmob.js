import { FiTrash, FiShare, FiPlusSquare } from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { HiOutlineQueueList } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { LuProjector } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbBellRingingFilled } from "react-icons/tb";
import { BsPaypal } from "react-icons/bs";
import { FaRocketchat } from "react-icons/fa";
import { GiBugleCall } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 pb-56 flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <HiOutlineQueueList className="listic" />

          <motion.span variants={iconVariants}></motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Link to="/Homechild">
            <Option
              setOpen={setOpen}
              Icon={TbBellRingingFilled}
              text="الاشتراكات "
            />
          </Link>
          <Link to="/About">
            <Option setOpen={setOpen} Icon={BsPaypal} text="أدفع" />
          </Link>
          <Link to="/Projects">
            <Option setOpen={setOpen} Icon={FaRocketchat} text="مرشد" />
          </Link>
          <Link to="/Contact">
            <Option setOpen={setOpen} Icon={GiBugleCall} text="تواصل معنا" />
          </Link>
          <Link to="/Blog">
            <Option setOpen={setOpen} Icon={FaBlog} text="الخدمات" />
          </Link>
          <Link to="/Login">
            <Option setOpen={setOpen} Icon={IoSettings} text="الاعدادات" />
          </Link>
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
