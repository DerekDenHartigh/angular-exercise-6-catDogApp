"use strict";

// sauce: https://i2.wp.com/misscm.com/wp-content/uploads/2015/02/katt-williams-confused.jpg?fit=480%2C360&ssl=1

function catController() { 
    const ctrl = this;
    
}


angular
.module('catDogApp')  
.component('cat', {
    template: `
    <h1 class="cat">Cat</h1>
    <img src="./assets/cat.jpg" />
        `,
    controller: catController
});