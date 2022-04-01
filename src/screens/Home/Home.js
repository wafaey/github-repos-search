import React from "react";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import Pagination from "../../components/Pagination/Pagination";
import API from "../../apis/index";
import Filters from "../../components/Filters/Filters";
import styled from "styled-components";
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainContainer = styled.div`
  width: 90%;
  margin-top: 4%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: none;
  grid-gap: 2%;
`;
const Footer = styled.footer`
  margin-top: 12%;
  margin-bottom: 4%;
`;
const reposPerPage = 15;
function Home() {
  const [userName, setUserName] = React.useState("");
  const [searchText, setSearchText] = React.useState("");
  const [type, setType] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [repos, setRepos] = React.useState([]);
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "type":
        setType(value);
        break;
      case "language":
        setLanguage(value);
        break;
      case "sort":
        setSort(value);
        break;
      default:
        break;
    }
  };
  const onUserNameChange = (value) => {
    setUserName(value);
    setSearchText("");
    setPage(1);
  };
  const onSearchChange = (value) => {
    setSearchText(value);
    setUserName("");
    setPage(1);
  };
  const firstPage = () => {
    setPage(1);
  };
  const previousPage = React.useCallback(() => {
    setPage(page - 1);
  }, [page]);
  const nextPage = React.useCallback(() => {
    setPage(page + 1);
  }, [page]);
  const lastPage = () => {
    setPage(Math.ceil(1000 / reposPerPage));
  };
  const getUserRepos = (username, page, reposPerPage) => {
    API.getUserRepos(username, page, reposPerPage)
      .then((response) => {
        if (response.data) {
          setRepos(response.data);
        } else {
          alert("An error happened while getting user repos");
        }
      })
      .catch((error) => {
        alert("An error happened while getting user repos");
      });
  };
  const getRepos = (searchText, type, language, sort, page, reposPerPage) => {
    API.getRepos(searchText, type, language, sort, page, reposPerPage)
      .then((response) => {
        if (response.data) {
          setRepos(response.data.items);
        } else {
          alert("An error happened while getting repos");
        }
      })
      .catch((error) => {
        alert("An error happened while getting repos");
      });
  };
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchText) {
        getRepos(searchText, type, language, sort, page, reposPerPage);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchText, type, language, sort, page]);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (userName) {
        getUserRepos(userName, page, reposPerPage);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [userName, page]);
  return (
    <HomeContainer>
      <Filters
        userName={userName}
        searchText={searchText}
        onUserNameChange={onUserNameChange}
        onSearchChange={onSearchChange}
        handleDropdownChange={handleDropdownChange}
      />
      <MainContainer>
        {repos.map((repo) => {
          return <RepositoryCard repo={repo} key={repo.id.toString()} />;
        })}
      </MainContainer>
      <Footer>
        {repos.length > 0 ? (
          <Pagination
            firstPage={firstPage}
            previousPage={previousPage}
            nextPage={nextPage}
            lastPage={lastPage}
            userName={userName}
            page={page}
            totalCount={repos.length}
            reposPerPage={reposPerPage}
          />
        ) : (
          ""
        )}
      </Footer>
    </HomeContainer>
  );
}

export default Home;
