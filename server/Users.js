const fs = require('fs');
const path = require('path');
const express = require('express');
const UserInteractions = express.Router();

class Users {
    constructor () {
        this.users = {};
        return this;
    }
    
    addUsername(username, hash, created, signature) {
        if(username in this.users) {
            return -1;
        }
        this.users[username] = {
            verified : false,
            signature,
            created : Date.now()
        }
        return this.users[username];
    }

    getUser(username) {
        if(username in this.users) {
            return this.users[username];
        }
        return -1;
    }

    validUsername(username) {
        this.error = 'A username cannot be blank or contain spaces.'
        let u = username.trim();
        u = u.replace(/\s+/g, '');
        if(u !== '') {
            if(u.length > 8) {
                return true;
            } else {
                return false;
            }
        } else 
        return false;
    }
}

const source = new Users();

UserInteractions.get('/:username', (request, response) => { 
    const { username } = request.params;
    if(username !== undefined) {        
        if(username in source.users) {
            response.json({
                userExists : true
            });
        } else {
            response.json({
                userExists : false
            });
        }
    } else {
        response.json({
            userExists : false
        });
    }
})

UserInteractions.post('/', (request, response) => {
    const { username, signature, hash, created } = request.body;
    console.log(request.body);
    if(username in source.users) {
        response.json({
            error : 'User already exists.',
            userExists : true
        });
    } else {
        if(source.validUsername(username)){
            source.addUsername(username, hash, created, signature);
            response.json({
                userExists : false,
                userCreated : true,
                user : source.getUser(username)
            })
        } else {
            response.json({
                userExists : false,
                userCreated : false,
                error : source.getErrors()
            });
        }
    }
})

module.exports = { Users, UserInteractions};