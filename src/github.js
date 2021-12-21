class Github{
    constructor(){
        this.client_id = '7d384a36810000b9fb30';
        this.client_secret ='71f65507f8cd3dfa40c21bd9e42a860c9291d2bb';  
    }

    async getUser(user){
         const profileResponse = await fetch(`https://api.github.com/users/${user}
         ?client_id=${this.client_id}
         &client_secret=${this.client_secret}`);
         const profile = await profileResponse.json();

         return {
            profile
         }
    }
}