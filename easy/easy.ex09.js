function timSoDu(soChia,soBiChia){
    if(soBiChia===0){
        return false;
    }
    let soDu;
    if(soChia<soBiChia){
        soDu = soBiChia - (soBiChia - soChia);
    }
   while(soChia>=soBiChia){
    soChia = soChia - soBiChia;
   }
   return soChia
}
console.log(timSoDu(5,2))
