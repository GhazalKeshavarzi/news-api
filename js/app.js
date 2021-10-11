//classes
//intanciate the ui class
const ui=new UI();

//instanciate the news class
const newsAPI=new NEWSAPI();



//listeners
listeners();
function listeners(){
    //access to the search button
    document.querySelector('#submitBtn').addEventListener('click',search);
}




//functions
function search() {
    //access to the values of feilds
    const newsName=document.querySelector('#news-name').value;
    const country=document.querySelector('#country').value;
    const category=document.querySelector('#category').value;


    //check if the feilds are empty gives us an error message if not shows the news
    if (newsName!==''||country!==''||category!=='') {

        //shows the news here
        newsAPI.showQuery(newsName,country,category)
        .then(news=>{
            let articleArray=news.news.articles;
            if (articleArray.length>0) {
               ui.showNews(articleArray);
            } else {
                ui.printMessage('there is not any result for what you have searched','alert alert-danger text-center')
            }
        })   
        
        

    } else {
        //showes the error mesage here
        ui.printMessage('you should atleast fill one of the feilds','alert alert-danger text-center')
    }
}