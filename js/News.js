class  NEWSAPI{
    constructor(){
        this.APIKey='a0f4abe2171247639efdaa20921017e8';
    }

    async showQuery(newsName,country,category){
        let url='https://newsapi.org/v2/'
        //check when to use everything and when use the top-headlines
        if (country==''&&category=='') {
            url+='everything?'
        } else {
            url+='top-headlines?' 
        }
         
        //check the news feild
        if (newsName!=='') {
            url+=`q=${newsName}&`
        }

        //check the country feild
        if (country!=='') {
            url+=`country=${country}&`
        }

        //check the category feild
        if (category!=='') {
            url+=`category=${category}&`
        }

        url+=`apiKey=${this.APIKey}`
        
        let newsArray=await fetch(url);
        let news= await newsArray.json();
        return{
            news
        }
    }

}