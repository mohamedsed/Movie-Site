// Api Preef
let apiResponse ;
let responsData;
// Url Preef
let imgUrl = "https://image.tmdb.org/t/p/w500";
let topRatUrl= "https://api.themoviedb.org/3/movie/top_rated?api_key=81e23fe235051c37f5bf3559cf4ea894"
let searchUrlBefo = "https://api.themoviedb.org/3/search/movie?query="
let searchUrlAfter = "&api_key=81e23fe235051c37f5bf3559cf4ea894&language=en-US&include_adult=false"
let popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=81e23fe235051c37f5bf3559cf4ea894"
let upCommingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=81e23fe235051c37f5bf3559cf4ea894"
let trendingUrl ="https://api.themoviedb.org/3/trending/all/day?api_key=81e23fe235051c37f5bf3559cf4ea894"
let nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=81e23fe235051c37f5bf3559cf4ea894"

        getMovie(upCommingUrl);

let nameInput = document.getElementById("nameInput")
let mailInput = document.getElementById("emailInput")
let ageInput = document.getElementById("ageInput")
let phoneInput = document.getElementById("phoneInput")
let passInput = document.getElementById("passInput")
let repassInput = document.getElementById("rePassInput")
let search = document.getElementById("search");
let pass;

// Lest in SideBar Action
$("#nowPlaying").click(function(){
    getMovie(nowPlayingUrl);
})
$("#popular").click(function(){
    getMovie(popularUrl);
})
$("#topRate").click(function(){
    getMovie(topRatUrl);
})
$("#trend").click(function(){
    getMovie(trendingUrl);
})
$("#upComming").click(function(){
    getMovie(upCommingUrl);
})
// SideBar Get Width And Make Animate
$(".nv-icon").click(function(){
    let navListWidth = $(".nav-btn").outerWidth()
    let lsBar = $(".nv-bar").css("left");
    if(lsBar == "0px"){     
        $(".nv-bar").animate({left : `-${navListWidth}`},500)
        document.querySelector(".nv-icon").innerHTML=`<i class="fa-solid fa-bars fa-2x"></i>`
    }
    else{
 $(".nv-bar").animate({left : `0px`},500)
 document.querySelector(".nv-icon").innerHTML=`<i class="fa-solid fa-xmark fa-2x"></i>`
    } 
})
// Get Movie Function
async function getMovie(url){

     apiResponse = await fetch(`${url}`)
     responsData = await apiResponse.json()
     showMovie();


}
// Show Result Function
function showMovie(){
    let hasala = ``
    let title ; 
    let release;
    for( let i = 0 ; i<responsData.results.length ; i++)
    {
        if(responsData.results[i].title == undefined && responsData.results[i].original_name == undefined){
            title = responsData.results[i].original_title
       }else if(responsData.results[i].original_title == undefined){
          title = responsData.results[i].original_name
       }else if(responsData.results[i].original_name == undefined){
        title = responsData.results[i].title
       }
  if(responsData.results[i].first_air_date == undefined){
    release = responsData.results[i].release_date
}else if(responsData.results[i].release_date == undefined){
  release = responsData.results[i].first_air_date
}
        hasala+=`
        <div class="col-md-4 g-4">
                <div class="img-fram position-relative">
                  <div>
                    <img src=${imgUrl + responsData.results[i].backdrop_path} alt="">
                  </div>
                  <div class="img-layer text-black">
                    <h4>${title}</h4>
                    <p>${responsData.results[i].overview}</p>
                    <p>rate: ${responsData.results[i].vote_average}</p>
                    <p>date: ${release}</p>
                  </div>
                 
                </div>
              </div> `
    }
    document.querySelector("#row").innerHTML=hasala
}
// Search Function
$("#search").keyup(function(){
    let searchWord = search.value;
    if(searchWord){
        getMovie(searchUrlBefo + searchWord + searchUrlAfter)
    }
    else
    {
        getMovie(upCommingUrl);
    }
})
// find Function
// $("#find").keyup(function(){
//     let findWord = find.value;
//     if(findWord){
//         getMovie(findBef + findWord + findAfter)
//     }
//     else
//     {
//         getMovie(upCommingUrl);
//     }
// })
// Contact Section
$("#nameInput").keyup(function(){
    let name = nameInput.value;
    let nameReg = /^[a-zA-Z0-9]+$/
    if(nameReg.test(name)==true && name != "")
    {
        $("#alertName").css({display : "none"})
    }else
    {
        $("#alertName").css({display : "block"})

    }

  
})
$("#emailInput").keyup(function(){
    let mail = mailInput.value;
    let mailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if(mailReg.test(mail)==true && mail != "")
    {
        $("#alertEmail").css({display : "none"})
    }else
    {
        $("#alertEmail").css({display : "block"})

    }

  
})
$("#phoneInput").keyup(function(){
    let phone = phoneInput.value;
    let phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(phoneReg.test(phone)==true && phone != "")
    {
        $("#alertPhone").css({display : "none"})
    }else
    {
        $("#alertPhone").css({display : "block"})

    }

  
})
$("#ageInput").keyup(function(){
    let age = ageInput.value;
    let ageReg = /^[1-9][0-9]?$|^100$/
    if(ageReg.test(age)==true && age != "")
    {
        $("#alertAge").css({display : "none"})
    }else
    {
        $("#alertAge").css({display : "block"})

    }

  
})
$("#passInput").keyup(function(){
     pass = passInput.value;
    let passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(passReg.test(pass)==true && pass != "")
    {
        $("#alertPass").css({display : "none"})
    }else
    {
        $("#alertPass").css({display : "block"})

    }

  
})
$("#rePassInput").keyup(function(){
    let rePass = repassInput.value;
    
    if(rePass == pass)
    {
        $("#alertrePass").css({display : "none"})
    }else
    {
        $("#alertrePass").css({display : "block"})

    }

  
})