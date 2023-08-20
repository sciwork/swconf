'use client';

import { Transition } from '@headlessui/react';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  show: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
};

const Drawer = ({ show, onClick, children }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  if (!mounted || !ref.current) return null;

  return createPortal(
    <Transition show={show}>
      <Transition.Child
        className="tw-fixed tw-inset-0 tw-z-10 tw-bg-black"
        enter="tw-transition-opacity tw-ease-linear tw-duration-300"
        enterFrom="tw-opacity-0"
        enterTo="tw-opacity-50"
        leave="tw-transition-opacity tw-ease-linear tw-duration-300"
        leaveFrom="tw-opacity-50"
        leaveTo="tw-opacity-0"
        onClick={onClick}
      />
      <Transition.Child
        className="tw-fixed tw-left-0 tw-top-0 tw-z-50 tw-h-screen tw-min-w-[300px] tw-bg-gray-200"
        enter="tw-transition tw-ease-in-out tw-duration-300 tw-transform"
        enterFrom="-tw-translate-x-full"
        enterTo="tw-translate-x-0"
        leave="tw-transition tw-ease-in-out tw-duration-300 tw-transform"
        leaveFrom="tw-translate-x-0"
        leaveTo="-tw-translate-x-full"
      >
        {children}
      </Transition.Child>
    </Transition>,
    ref.current,
  );
};

export default Drawer;
