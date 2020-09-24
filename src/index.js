import "./assets/styles/styles.scss";
import "./index.scss";

const articleContainerElement = document.querySelector('.articles-container');

const createArticles = (articles) => {
   const articlesDOM = articles.map( article => {
      const articleDOM = document.createElement('div');
      articleDOM.classList.add("article");
      articleDOM.innerHTML = `
<img>
   src="${ article.img }"
   alt="profile"
/ >
<h2>${ article.title }</h2>
<p class="article-author">${ article.author } - ${ article.category }</p>
<p class="article-content">${ article.content }</p>

   `
   })
}

const fetchArticle = async () => {
   try {
   const response = await fetch("https://restapi.fr/api/article")
   const articles = await response.json();
   console.log(articles);
   } catch (e) {
      console.log("e: ", e);
   }
}

fetchArticle();