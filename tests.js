var index = require("./index.js")

if (index.name === "Joe") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("Expected: 70, Received: "+index.height)
} else {
    console.log("The height is correct")
}
