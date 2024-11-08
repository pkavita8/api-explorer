import React, { useEffect, useState } from "react";
import { fetchAPIs } from "../services/api";
import { useParams } from "react-router-dom";
import {
  DetailsWrapper,
  Logo,
  TitleContainer,
} from "../styles/ApiDetailsStyles";

const APIDetails: React.FC = () => {
  const { provider } = useParams<{ provider: string }>();
  const [apiDetails, setApiDetails] = useState<any>(null);
  const [apiStatus, setApiStatus] = useState("init");

  useEffect(() => {
    const loadAPIs = async () => {
      try {
        if (provider) {
          setApiStatus("loading");
          const data = await fetchAPIs(provider);
          const key = Object.keys(data?.apis);
          setApiDetails(data?.apis?.[key?.[0]]);
          setApiStatus("success");
        }
      } catch (err) {
        setApiStatus("error");
      }
    };

    loadAPIs();
  }, [provider]);

  return (
    <DetailsWrapper>
      {apiDetails && (
        <div>
          <TitleContainer>
            <Logo
              src={apiDetails?.info?.["x-logo"]?.url}
              alt={apiDetails?.info?.title}
            />
            <h1>{apiDetails?.info?.title}</h1>
          </TitleContainer>
          <p>
            Description <br />
            {apiDetails?.info?.description}
          </p>
          <p>
            Swagger <br />
            {apiDetails?.swaggerUrl}
          </p>
          Contact
          <p> Email : {apiDetails?.info?.contact?.email}</p>
          <p> Name : {apiDetails?.info?.contact?.name}</p>
          <p> Url : {apiDetails?.info?.contact?.url}</p>
        </div>
      )}
      {apiStatus === "loading" && <p>Loading details...</p>}
      {apiStatus === "error" && <p>Unable to find details</p>}
    </DetailsWrapper>
  );
};

export default APIDetails;
