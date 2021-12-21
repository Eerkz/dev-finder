class UI {
    constructor(){
        this.profile = document.getElementById('profile');
        this.notFound = document.getElementById('notFound');

    }

    noProfile(){
        this.profile.style.display = "none"; //clear existing search first

        this.notFound.style.cssText = 
        `
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FE3F3F;
        width: 100%;
        height: 2em;
        border-radius: 0.5em;
        
        `
        this.notFound.innerHTML = `<h1>User Not Found </h1>`

        //make user not found alert disappear after 3 seconds
        setTimeout(()=>{
            this.notFound.style.display = 'none'
         }, 3000);
    }


    showProfile(user){
        this.profile.style.display = 'grid';


        const date = new Date(String(user.created_at).slice(0,9)); //get year-month-day of date
        const dateFormat = {month: 'short', year: 'numeric',  day: 'numeric'}; //set format of date
        const newDate = (date.toLocaleDateString("en-US",dateFormat)).replace(/,/g, '') //remove ',' in date 

        this.profile.innerHTML =

        `<div class="img-cont">
        <img src="${user.avatar_url}">
    </div>
    <div class="bio-cont">
        <p class="bio">${user.bio}</p>
    </div>
    <div class="profile-header-cont">
        <div class="profile-title">
            <h2 class="user-name">${user.name}</h2>
            <p class="user-handle">${user.login}</p>
        </div>
        <h1 class="date">Joined at ${newDate}</h1>
    </div>
    <div class="profile-body-cont">
        <div class="more-info-cont">

            <div class="column-info">
                <p class="column-title">
                    Repos
                </p>
                <h1 class="column-info">
                    ${user.public_repos}
                </h1>
            </div>
    
            <div class="column-info">
                <p class="column-title">
                    Followers
                </p>
                <h1 class="column-info">
                    ${user.followers}
                </h1>
            </div>
    
            <div class="column-info">
                <p class="column-title">
                    Following
                </p>
                <h1 class="column-info">
                    ${user.following}
                </h1>
            </div>
        </div>
    
        <div class="footer-info">
            <div class="col-1 col">
                <div class="row">
                    <i class="fas fa-map-marker-alt"></i>
                    <p class="row-descrip">${user.location}</p>
                </div>
                <div class="row">
                    <i class="fas fa-link"></i>
                    
                    <p class="row-descrip">${user.twitter_username}</p>
                </div>
            </div>
            <div class="col-2 col">
                <div class="row">
                    <i class="fab fa-twitter"></i>
                    <p class="row-descrip">${user.blog}</p> 
                </div>
                <div class="row">
                    <i class="fas fa-building"></i>   
                    <p class="row-descrip">${user.company}</p> 
                </div>
            </div>
        </div>
    </div>`
    }
}