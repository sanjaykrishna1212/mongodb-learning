
const { MongoClient } = require( 'mongodb' );
const fs = require("fs")
const http = require("http");
const {MONGO_DB_URL,DB_NAME } = require("./urlConstant");
const { log } = require( 'console' );
const PORT = process.env.PORT || 3000;
const data = "hi from server!!"


const server = http.createServer((req,res)=>{
fs.writeFileSync("message.txt", data)
 sendJsonResponse(res,200,data)
 
})

server.listen(PORT,()=>{
 console.log(`http://localhost:${PORT}`);
})

const getData = fs.readFileSync("message.txt",{encoding:"utf-8"})
console.log()
function sendJsonResponse(res, statusCode, data)
{
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}







async function run ()
{
    if ( MONGO_DB_URL === "" ) { console.log("not connected"); return; }
    const client = new MongoClient(MONGO_DB_URL );

    try
    {
        await client.connect();

        console.log( 'Connected to MongoDB' );
        const db = client.db( DB_NAME );

        const users = db.collection( 'users' );
        // const result = await users.insertOne( {
        //     name: 'Sanjay',
        //     email: 'sanjay@example.com',
        //     age: 25
        // } );

        // console.log( 'Inserted:', result.insertedId );
        const allUsers = await users.find().toArray();
        console.log('All Users:', allUsers.length );

    }
    catch ( err ) 
    {
        console.error( 'Error:', err );
    }
    finally
    {
        await client.close();
    }
}


// run();
