"use strict";

// sauce: https://s3.amazonaws.com/bncore/wp-content/uploads/2015/06/324535.jpg

function dogController() { 
    const ctrl = this;
    
}


angular
.module('catDogApp')  
.component('dog', {
    template: `
    <h1 class="dog">Dog</h1>
    <img src="./assets/dog.jpg" />
        `,
    controller: dogController
});