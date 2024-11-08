import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAPIs } from "../services/api";
import {
  ProviderDetailsWrapper,
  TitleContainer,
} from "../styles/SidebarStyles";
import ArrowDown from "./ArrowRight";

interface ProviderProps {
  title: string;
  onClose: VoidFunction;
}

const Provider: React.FC<ProviderProps> = ({ title, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [apiDetails, setApiDetails] = useState<any>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const loadAPIs = async () => {
      try {
        if (title) {
          const data = await fetchAPIs(title);
          const key = Object.keys(data?.apis);
          setApiDetails(data?.apis?.[key?.[0]]);
        }
      } catch (err) {}
    };

    loadAPIs();
  }, [title]);

  return (
    <ProviderDetailsWrapper $isExpanded={isExpanded}>
      <TitleContainer onClick={toggleExpand}>
        <Link to={`/details/${title}`} onClick={onClose}>
          {title}
        </Link>
        <ArrowDown
          style={{
            transform: `rotate(${isExpanded ? "270deg" : "90deg"})`,
          }}
        />
      </TitleContainer>

      {isExpanded && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={apiDetails?.info?.["x-logo"]?.url}
            alt={apiDetails?.info?.title}
            style={{
              height: 40,
              width: 40,
              marginRight: 20,
            }}
          />
          <p>{apiDetails?.info?.title}</p>
        </div>
      )}
    </ProviderDetailsWrapper>
  );
};

export default Provider;
