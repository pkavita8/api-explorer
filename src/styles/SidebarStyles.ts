import styled from "styled-components";

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 35%;
  background-color: #43607b;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  z-index: 2
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const TitleContainer = styled.p`
  cursor: pointer;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const ProviderDetailsWrapper = styled.div<{ $isExpanded: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  ${(props) => props.$isExpanded && `  background-color: #141C26;`};
`;
