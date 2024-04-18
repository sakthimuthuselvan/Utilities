const num = "12346789";
let reversed = "";

for (let i = num.length - 1; i >= 0; i--) {
  reversed += num[i];
}

console.log(reversed); // Output: "98764321"
