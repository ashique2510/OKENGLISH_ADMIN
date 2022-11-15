
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa'
import { FaRegCalendarCheck } from 'react-icons/fa';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { HiSpeakerphone } from 'react-icons/hi'
import { AiOutlineCalendar, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';


export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'home',
          icon: <FiShoppingBag />,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'registered_users',
          icon: <FaUsers />,
        },
        {
          name: 'bookings',
          icon: <FaRegCalendarCheck />,
        },
        {
          name: 'trainers',
          icon: <IoMdContacts />,
        },
        {
          name: 'add_trainers',
          icon: <IoMdContacts />,
        },
        {
          name: 'students',
          icon: <RiContactsLine />,
        },
        {
          name: 'announcement',
          icon: <HiSpeakerphone />,
        },
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'calendar',
          icon: <AiOutlineCalendar />,
        },
        {
          name: 'kanban',
          icon: <BsKanban />,
        },
        {
          name: 'editor',
          icon: <FiEdit />,
        },
        {
          name: 'color-picker',
          icon: <BiColorFill />,
        },
      ],
    },
    {
      title: 'Charts',
      links: [
        {
          name: 'line',
          icon: <AiOutlineStock />,
        },
        {
          name: 'area',
          icon: <AiOutlineAreaChart />,
        },
  
        {
          name: 'bar',
          icon: <AiOutlineBarChart />,
        },
        {
          name: 'pie',
          icon: <FiPieChart />,
        },
        {
          name: 'financial',
          icon: <RiStockLine />,
        },
        {
          name: 'color-mapping',
          icon: <BsBarChart />,
        },
        {
          name: 'pyramid',
          icon: <GiLouvrePyramid />,
        },
        {
          name: 'stacked',
          icon: <AiOutlineBarChart />,
        },
      ],
    },
  ];
  