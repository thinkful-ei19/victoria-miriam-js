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
    
    let yob = yearOfBirth(age); 
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${yob}.`)
}

whoAmI("Miriam", 29);
/* 



7) Check if `name` and `age` have been entered. Create a conditional which outputs `console.error("Arguments not valid")`.

> Hint: How do you check if a parameter or variable has not been "defined"?


8) What happens if you pass `"29"` as the age? What about `"twenty nine"`? Implement a check to ensure the name is a `string` and the age is a `number`. 

> Hint: `typeof age`
> Investigate: What is `NaN`? */