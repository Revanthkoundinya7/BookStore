var b=new Buffer(300);//It can store 300 characters
b.write("NodeJs is a light-weight platform....");//save our write data
console.log("Data in Buffer :"+b.toString());//read data from Buffer.
console.log("5-25 position:" + b.toString('ascii',5,25));
console.log("5-25 position:" + b.toString('utf8',5,25));
console.log();
for(i=0;i<25;i++)
str+=String.fromCharCode(b[i]);
console.log("str :"+str);
ProcessingInstruction.stdout.write(b);