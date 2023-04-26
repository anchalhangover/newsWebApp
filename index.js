let api = 'b64215d0766347eda373ffcc98571ebc'
let accordian = document.getElementById("accordian");
const xsr = new XMLHttpRequest();
const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b64215d0766347eda373ffcc98571ebc'

xsr.open('GET', url, true);
xsr.onload = function () {

    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function (element) {

            let news = `<div class="col">
            <h2>
    <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-target="#collapseOne" href="#multiCollapseExample1"  role="button"
        aria-expanded="true" aria-controls="collapseOne"> ${element["title"]}</button></h2>
    <div class="collapse collapseOne" id="multiCollapseExample1">
        <div class="card card-body">
 
            ${element["description"]}.<a href="${element["url"]}" target="_blank">Read More Here...</a>
        </div>
    </div>`;
            newshtml += news;
            "\n";
           
        });
        accordian.innerHTML = newshtml;
        // console.log(json);

    }
    else {
        console.log("some error occured");
    }
}
xsr.send();

