"use strict";

//sauces:  https://ih1.redbubble.net/image.201199056.1086/flat,550x550,075,f.u6.jpg, https://i.kym-cdn.com/photos/images/original/000/962/410/fce.gif

function homeController() { 
    const ctrl = this;
    
}


angular
.module('catDogApp')  
.component('home', {
    template: `
    <h1 class="home">Home Sweet Home</h1>
    <img src="./assets/catdog.jpg"/>
        `,
    controller: homeController
});

/**
 * not sure why I cant get this gif to go in... tried it 2x ways.
 * <img src="./assets/home.gif" />
    <img src="https://media1.tenor.com/images/f9e8420b482a2e3c7c32a4781d3e772f/tenor.gif?itemid=9328017" />
 */