class UI{

  constructor(){
    this.result=document.querySelector('#result')
  }
  //create message box
  printMessage(message,className){

    //create div element
    let div=document.createElement('div');
    //append the message to the message box
    div.appendChild(document.createTextNode(message));
    //append the classes to the message box
    div.classList=className;
    //show the message box in the div in html
    document.querySelector('#message').appendChild(div);
    //set 3sec for the message box to be deleted


    setTimeout(() => {
      this.removeMessage();
    }, 3000);

    
  }

  //remove message
  removeMessage(){
    let alert=document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }
  //show the news in html format
  showNews(news){
    news.forEach(newsInfo => {
      this.result.innerHTML+=`
      <div class="col-md-4 mb-4">
      <div class="card">
      <img class="card-img-top" src="${newsInfo.urlToImage}" alt="unable to show the image">
        <div class="card-body">
        <h5 class="card-title text-center">news title : ${newsInfo.title.split('-',1)}</h5>
        <p class="badge badge-primary">source: ${newsInfo.source.name}</p>
        <p class="badge badge-primary">Date: ${newsInfo.publishedAt}</p>
        <br>
        <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block">see full news</a>
        <div>
      </div>
      </div>
      `
    });
  }




}