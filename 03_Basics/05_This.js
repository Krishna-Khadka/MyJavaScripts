
const hero ={
    name: "Thor",
    movie: "avenger",
    coStar: function(){
        console.log(`${this.name} is sharing the screen with loki in movie ${this.movie}`);
    }
} 
hero.coStar() //gets defualt value

hero.movie = "End Game"
hero.coStar() //movie value is changed