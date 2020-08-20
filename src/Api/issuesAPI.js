import Axios from "axios";

export const issuesApi = async () => {
  try {
    return Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .catch((error) => console.log(error.message));
  } catch (e) {
    console.log("api load error", e);
  }
};
