"use strict";
/**
 * Created by czt on 17/6/9.
 */
function f(s) {
    return s;
}
//f({});//error
f('s');
function add(friend) {
    var name = friend.name;
    console.log(name);
}
add({ name: 'name' });
//add({favoriteColor: 'test'}); 
