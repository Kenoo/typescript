/**
 * Created by czt on 17/6/9.
 */

function f(s: string) {
    return s;
}

//f({});//error
f('s');

interface Friend {
    name: string;
    favoriteColor?: string;
}

function add(friend: Friend) {
    var name = friend.name;
    console.log(name);
}

add({name : 'name'});
//add({favoriteColor: 'test'});