const inquirer = require('inquirer')
const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'RoesslingS1994!',
        database: 'theemoplyeemanager_db'
    },
    console.log(`Connected to theemoplyeemanager_db.`)
);