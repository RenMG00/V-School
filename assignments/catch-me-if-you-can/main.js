
let user = {username: "sam", password: "123abc"};

const sum = (x, y) => {
    if (isNaN(x)) {
        throw new Error("Must be a number");
    }
    return x + y;
}
try {
    console.log(sum("monkey", 7));
}
catch (err) {
    console.log("Error:only numbers!");
}

const login = (username, password) => {
    if (user.username != username) {
        throw new Error ("The username is incorrect!");
    }
    if (user.password != password) {
        throw new Error ("The password is incorrect!");
    }
    return "Login Successful!";
}

try {
    console.log(login("red", "123abc"), "line28");
}
catch (err) {
    console.log("Login attempt failed.", "line 31");
}

try {
    console.log(login("sam", "123abc"), "line 35");
}
catch {
    console.log("Login attempt failed.", "line 38");
}