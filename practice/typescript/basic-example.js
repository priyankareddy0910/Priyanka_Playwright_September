function m1(){
console.log('m1 method'); 
try{
   throw new Error('error try');
}catch{
    console.log('error handled');
}finally{
    console.log('logout');
}
console.log('execute me');
}

m1();
