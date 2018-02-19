/*### Complete and commit and push each task below. Parts of the code are shown as hints, the rest as been "redacted" */

function yearOfBirth(age) {
    try { if (age < 0) {
        throw new Error("Age can not be negative");
    }
    } catch(e) {
        console.error(e);
    }
    return 2018 - age;
}



function  whoAmI(name, age) {
    try { if (age === undefined || name === undefined) {
        throw new Error("Arguments not valid");
    }
    } catch(e) {
        console.error(e);
    }
 
    try { if (typeof(age) != "number") {
        throw new Error("Age is not given as a number");
    }
    } catch(e) {
        console.error(e);
    }
 
    try { if (typeof(name) != "string") {
        throw new Error("Name is not given as a string");
    }
    } catch(e) {
        console.error(e);
    }
 
    let yob = yearOfBirth(age); 
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${yob}.`)
}

whoAmI("Miriam", 29);