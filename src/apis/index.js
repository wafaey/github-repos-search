import Request from "./config";
const BaseURL = "https://api.github.com";

const Github = {
  getUserRepos: (username, page, reposPerPage) => {
    const subUrl =
      BaseURL +
      `/users/${username}/repos?page=${page}&per_page=${reposPerPage}`;
    return Request.get(subUrl, {});
  },
  getRepos: (searchText, type, language, sort, page, reposPerPage) => {
    const subUrl =
      BaseURL +
      `/search/repositories?q=${searchText}&language=${language}&sort=${sort}&type=${type}&page=${page}&per_page=${reposPerPage}`;
    return Request.get(subUrl, {});
  },
};
export default Github;
