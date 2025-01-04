var mySQL = require("mysql");

var con = mySQL.createConnection({
        host: "sql11.freesqldatabase.com",
        user: "sql11515939",
        password: "7HYGNa4u9T",
        database: "sql11515939",
        port: 3306,   
    });

    
con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    var sql = "INSERT INTO Students (NAME,PRIVATE_TEL,PARENT_TEL) VALUES ?"
    var values = [["Hamdi","543513513","235414"]];
    con.query (sql,[values],function (err,result){
       if (err) throw err;
       console.log("record inserted: " + result.affectedRows); 
    });
});
