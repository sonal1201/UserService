const express = require('express')


async function ping(req, res) {
    return res.send({
        message: "pong"
    })
}

async function register(req, res) {

}

async function login(req, res) {

}

async function profile(req, res) {

}

module.exports = {
    ping,
    profile,
    register,
    login
}