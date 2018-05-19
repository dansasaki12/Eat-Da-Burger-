

// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;
if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'bcbhftqxhf2wqk2q',
		password: 'grum2nfmr39awccs',
		database: 'ex1fri1zcwimcsoc'
	
	});
};
// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;