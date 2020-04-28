var s=require('http');
var b=new Buffer(300);



function processRequest(request, response){
    if(request.method == 'POST')
    {
        body='';
        request.on('data', chunk => { body += chunk.toString()}); //chunk will be in json format.
        request.on('end', () => {
             console.log('Data : ' + body); 
        var pairs = body.split('&');
        var u=pairs[0].split('=');
        var p=pairs[1].split('=');
        var o=pairs[2].split('=');
        b=u[1];
        b+=","+p[1];
        b+=","+o[1];
        console.log("Data in Buffer :"+b.toString());
        response.end(b);
        
        response.end('OK'); });
    
    
}
else {
    var str='<HTML><body>';
    str += '<B>Login to proceed</B><br>';
    str +='<form method=\'POST\' action=\'http://localhost:8081\'>'
    str += 'User name <input type=\'text\' placeholder=\'Enter name\' name=\'userid\'/><BR>';
    str += 'Project <input type=\'text\' name=\'pwd\' /><BR><br>';
    str+='start date<input type=\'text\' name=\'otp\'/><br><br>';
    str += '<input type=\'submit\' value=\'SignIn\' /> </BODY></HTML>';
    response.end(str);
}
}

var server=s.createServer(processRequest);
server.listen(8081);
console.log('Started server at 8081');