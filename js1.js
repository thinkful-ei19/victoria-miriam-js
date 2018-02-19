/*### Complete and commit and push each task below. Parts of the code are shown as hints, the rest as been "redacted" */

function yearOfBirth(age) {
    return 2018 - age;
}

function  whoAmI(name, age) {
    let yob = yearOfBirth(age); 
    console.log(`Hi, my name is ${name} and I'm ${age} years old.`);
    console.log(`I was born in ${yob}.`)
}

whoAmI("Miriam", 29);
/* 

5) Move the year of birth calculation into a new function. 
> Do you get an error if the variable and function are both name `yearOfBirth`?
```
Uncaught TypeError: yearOfBirth is not a function
    at whoAmI (<anonymous>:6:21)
    at <anonymous>:10:1
```

```
function yearOfBirth(age){
  ..........
}

function whoAmI(name, age){
	var yob = yearOfBirth(age);
	..........
	..........
}
whoAmI(..........);
```

- Is it a habit yet?

6) What happens if you enter a negative age? Add a `try/catch`

> Note: a negative age doesn't cause a runtime error but it doesn't make sense.

```
function yearOfBirth(age){
  ..........
		throw new Error("Age can not be negative");
	..
	return 2016 - age;
}

.
.
.
.
.
.

whoAmI("Chris", -5);
```


7) Check if `name` and `age` have been entered. Create a conditional which outputs `console.error("Arguments not valid")`.

> Hint: How do you check if a parameter or variable has not been "defined"?


8) What happens if you pass `"29"` as the age? What about `"twenty nine"`? Implement a check to ensure the name is a `string` and the age is a `number`. 

> Hint: `typeof age`
> Investigate: What is `NaN`? */