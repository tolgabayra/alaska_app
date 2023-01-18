const {Pool} = require("pg")

const pool = new Pool({
    user: "root",
    database: "postgres",
    password: "root",
    host: "localhost",
    port: 5432
})


const connectDB = async () => {
    await pool.connect(function(err) {
        if (err) throw err;
        console.log("⚡️[Database]: PostgreSQL is connected");
        
    })
}


module.exports = {pool, connectDB}