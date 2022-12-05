function digDecipher (Message,key){
    for(let i = 0; i < Message.length; i++){
        Message [i] -= parseInt(key.toString()[i % key.toString().length]); 
    }
    const alphabetic = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    for(let i = 0; i < Message.length; i++){
        output += alphabetic[Message[i] - 1];}	
    
    return output;
}

console.log("Decoding Results:")
console.log("[20, 12, 18, 30, 21], 1939:", digDecipher([20, 12, 18, 30, 21], 1939));
console.log("[14, 30, 11, 1, 20, 17, 18, 18], 1990:", digDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log("[6, 4, 1, 3, 9, 20], 100:", digDecipher([6, 4, 1, 3, 9, 20], 100));