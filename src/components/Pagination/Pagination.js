import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function Pagination(props) {
  return (
    <Container>
      <button onClick={props.firstPage} disabled={props.page === 1}>
        First
      </button>
      <button onClick={props.previousPage} disabled={props.page === 1}>
        Previous
      </button>
      <button
        onClick={props.nextPage}
        disabled={
          props.page === Math.ceil(1000 / props.reposPerPage) ||
          (props.userName && props.totalCount < 15)
        }
      >
        Next
      </button>

      <button
        onClick={props.lastPage}
        disabled={
          props.page === Math.ceil(1000 / props.reposPerPage) || props.userName
        }
      >
        Last
      </button>
    </Container>
  );
}
function areEqual(prevProps, nextProps) {
  return (
    prevProps.page === nextProps.page &&
    prevProps.userName === nextProps.userName &&
    prevProps.reposPerPage === nextProps.reposPerPage &&
    prevProps.totalCount === nextProps.totalCount
  );
}

export default React.memo(Pagination, areEqual);
