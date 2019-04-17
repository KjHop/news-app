window.addEventListener('load', e =>{
    updateNews();
});

async function updateNews(){
    const result = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=124e6d7bc3ea499abcff822a5a9509e3");
    const json = await result.json();
    const news = json.articles.map(createNews).join("\n");

    document.querySelector("main").innerHTML = news;
}

function createNews(article){
    return `
        <div>
            <h2>${article.title}</h2>
            <h3>${article.description}</h3>
            <img src='${article.urlToImage}'/>
            <p>${article.content}</p>
        </div>
    `;
}