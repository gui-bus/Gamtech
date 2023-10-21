import { BsKeyboard, BsMouse3, BsHeadset, BsSpeaker, BsGpuCard } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { SquareIcon } from "lucide-react";
import { GiGameConsole } from 'react-icons/gi'
import { PiComputerTowerBold } from 'react-icons/pi'

export const CATEGORY_ICON = {
  keyboards: <BsKeyboard size={20} />,
  monitors: <FiMonitor size={20} />,
  headphones: <BsHeadset size={20} />,
  mousepads: <SquareIcon size={20} />,
  speakers: <BsSpeaker size={20} />,
  mouses: <BsMouse3 size={20} />,
  consoles: <GiGameConsole size={20} />,
  gpu: <BsGpuCard size={20} />,
  cases: <PiComputerTowerBold size={20}/>,
};
