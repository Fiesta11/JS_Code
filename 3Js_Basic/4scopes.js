// Nested Scopes
function one(){
    const name = "utsav"

    function two(){
       const name  = "mohit"
        console.log(name);
    }

    console.log((name));
    two()
}
one()