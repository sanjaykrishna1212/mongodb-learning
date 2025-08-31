const { log, error } = require( "console" );

let out = "";

// for ( let i = 9; i >=0; i-- )
// {
//     for ( let j = 0; j < i; j++ )
//     {
//         out = out + " ";
//     }
//     for ( let k = i; k < 10; k++ )
//     {
//         out = out + "* ";
//     }
//     out = out + "\n";
// }
// console.log( out );



for ( let i = 5; i >0; i-- )
{
    const temp = (i*2)-1
    for ( let j = 0; j < i; j++ )
    {
        out= out + "  "
    }
    for(let k=temp; k < (i-1)*2;k++){
        out= out + "* "

    }
    out = out + "\n";
}

log( out );
