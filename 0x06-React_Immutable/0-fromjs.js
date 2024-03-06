#!/usr/bin/node
const Immutable = require('immutable');

function getImmutableObject(object) {
    return Immutable.fromJS(object)
}

const x = {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}

console.log(getImmutableObject(x))
