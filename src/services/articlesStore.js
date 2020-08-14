const articlesStore = () => {
  let articles = [];

  function setArticles(data) {
    articles = data;
  }

  function getArticles() {
    return articles;
  }

  return {
    setArticles,
    getArticles
  }
}

export default articlesStore();
