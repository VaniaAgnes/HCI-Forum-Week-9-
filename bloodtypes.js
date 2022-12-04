function canGiveBlood (v,w){
    const OPositive = ["O+","A+","B+","AB+"];
    const ONegative = ["O+","O-","A+","A-","B+","B-","AB+","AB-"];
    const APositive = ["A+","AB+"];
    const ANegative = ["A+","A-","AB+","AB-"];
    const BPositive = ["B+","AB+"];
    const BNegative = ["B+","B-","AB+","AB-"];
    const ABPositive = ["AB+"];
    const ABNegative = ["AB+","AB-"];

    if (v == "O+" && OPositive.includes(w)){
        return true;}
    if (v == "O-" && ONegative.includes(w)){
        return true;}
    if (v == "A+" && APositive.includes(w)){
        return true;}
    if (v == "A-" && ANegative.includes(w)){
        return true;}
    if (v == "B+" && BPositive.includes(w)){
        return true;}
    if (v == "B-" && BNegative.includes(w)){
        return true;}
    if (v == "AB+" && ABPositive.includes(w)){
        return true;} 
    if (v == "AB-" && ABNegative.includes(w)){
        return true;}
    else{
        return false;}
    }

console.log ("Output:")
console.log ("( O+ to A+): ", canGiveBlood ("O+","A+"));
console.log ("( B+ to B-): ", canGiveBlood ("B+","B-"));       
console.log ("( AB- to AB+): ", canGiveBlood ("AB-","AB+"));  
        
    
