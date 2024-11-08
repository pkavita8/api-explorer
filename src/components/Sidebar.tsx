import React, { useEffect, useRef, useState } from "react";
import { fetchProviders } from "../services/api";
import { CloseButton, SidebarContainer } from "../styles/SidebarStyles";
import Provider from "./Provider";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [providers, setProviders] = useState<string[]>([]);

  useEffect(() => {
    const loadProviders = async () => {
      const res = await fetchProviders();
      setProviders(res.data);
    };
    loadProviders();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <SidebarContainer ref={sidebarRef} $isOpen={isOpen}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <h2>Select Provider</h2>

      {providers.map((provider) => (
        <Provider title={provider} key={provider} onClose={onClose} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
