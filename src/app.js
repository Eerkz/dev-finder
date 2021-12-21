//init GitHub
const github = new Github;
//init user class
const ui = new UI;
const searchUser = document.querySelector('#searchUser');
const submitBtn = document.querySelector('.submit-btn');
const profileCont = document.getElementById('profile');
const closeBtn = document.querySelector('.close');

submitBtn.addEventListener('click', ()=> {
    //get input text
    const userText = searchUser.value
    // console.log(userText)

    if (userText !==''){
        console.log(userText)
        //Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    //show an alert that user not found and clear current search
                    ui.noProfile()
                } else {
                    //show profile
                    ui.showProfile(data.profile)
                }
            })
    } 
})

closeBtn.addEventListener('click', ()=>{
    profileCont.style.display = 'none';
})