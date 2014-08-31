window.onload=function(){
    //This function finds the youngest person and returns his full name.
    function findYoungestPerson(persons) {
        var minAge=persons[0].age;
        var fName=persons[0].firstname;
        var lName=persons[0].lastname;
        var result="";
        for(var i=0; i<persons.length; i++){
            if(minAge>persons[i].age){
                minAge=persons[i].age;
                fName=persons[i].firstname;
                lName=persons[i].lastname
            }            
        }
        result="The youngest person is " +fName+" "+lName;
        
        document.getElementById('content').innerHTML =result;
            
    };
    
    var persons = [
        { firstname : 'George', lastname: 'Kolev', age: 32}, 
        { firstname : 'Bay', lastname: 'Ivan', age: 21},
        { firstname : 'Baba', lastname: 'Ginka', age: 40}]
    
    findYoungestPerson(persons);
};



