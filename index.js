console.log("Welcome to News Updates");
// 50bc839514b1a0caab1492ecff2c20a5


// fetch('https://gnews.io/api/v4/search?q=example&token=50bc839514b1a0caab1492ecff2c20a5')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://gnews.io/api/v4/search?q=example&token=50bc839514b1a0caab1492ecff2c20a5", true);
xhr.getResponseHeader("Content-type", "application/json");
xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles=json.articles;
        let str="";
        articles.forEach((item)=>{
            // console.log(item);
            let key=1;
            
            str +=`
                <hr>
                <div class=content>
                    <h1>${item.title}</h1>
                    <img class="img-container" src=${item.image} alt="random">

                    <h5>${item.description}</h5>
                  </div>
                  <hr>`
            



        })
        // console.log(json)
        let cont = document.querySelector(".container");
            cont.innerHTML = str;
    }
    else {
        console.log("Error Occured");
    }
}
xhr.send();
console.log("we are done here");