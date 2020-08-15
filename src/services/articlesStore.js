const articlesStore = () => {
  let articles = [];
  let profile = {};

  function setArticles(data) {
    articles = data;
  }

  function getArticles() {
    return articles;
  }

  function setProfile(data) {
    profile = data;
  }

  function getProfile() {
    return profile;
  }

  return {
    setArticles,
    getArticles,
    setProfile,
    getProfile
  }
}

export default articlesStore();
