import Axios from "axios";

export const issuesApi = async () => {
  const path = window.location.pathname;
  const url = window.location.pathname
    ? `https://api.github.com/repos/${path.split("/")[1]}/${
        path.split("/")[2]
      }/issues`
    : "https://api.github.com/repos/facebook/create-react-app/issues";
  try {
    return Axios.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log("api error message", error.message));
  } catch (e) {
    console.log("api load error", e);
  }
};
