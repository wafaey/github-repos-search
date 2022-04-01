import React from "react";
import styled from "styled-components";
const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 2%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
`;
const Body = styled.main`
  width: 90%;
`;
const Name = styled.header`
  display: flex;
  justify-content: center;
  color: #13264a;
`;
const Description = styled.div`
  color: #13264a;
`;
const Url = styled.div`
  color: #13264a;
`;
const Details = styled.div`
  color: grey;
`;
const Counters = styled.footer`
  display: flex;
  justify-content: space-around;
  color: grey;
`;
const Value = styled.span`
  color: #13264a;
`;
function RepositoryCard({ repo }) {
  const d = new Date(repo.created_at);
  return (
    <CardContainer>
      <Body>
        <Name>
          <h1>{repo.name}</h1>
        </Name>
        <Description>
          <p>{repo.description}</p>
        </Description>
        <Url>
          <p>{repo.url}</p>
        </Url>
        <Details>
          <p>
            Created on:{" "}
            <Value>
              {d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()}
            </Value>
          </p>
          <p>
            Language: <Value>{repo.language ? repo.language : "-"}</Value>
          </p>
          <p>
            License:
            <Value> {repo.license?.name ? repo.license?.name : "-"}</Value>
          </p>
        </Details>
        <Counters>
          <p>
            Watchers: <Value>{repo.watchers_count}</Value>
          </p>
          <p>
            Forks:<Value> {repo.forks_count}</Value>
          </p>
          <p>
            Open Issues: <Value>{repo.open_issues_count}</Value>
          </p>
        </Counters>
      </Body>
    </CardContainer>
  );
}
function areEqual(prevProps, nextProps) {
  return prevProps.repo === nextProps.repo;
}

export default React.memo(RepositoryCard, areEqual);
