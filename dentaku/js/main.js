　let myTotal = 0;
  let myInput = "";
  let myFlg = 1;
  
  function myValue(myData) {
    if (myData == 0 || myData == '00' || myData == '.') {
      if (myTotal !== 0 || myFlg == 0) {
        myInput += myData;
        document.dentaku.myLine.value = myInput;
      }
    } else {
      myInput += myData;
      myFlg = 0;
      document.dentaku.myLine.value = myInput;
    }
  }
  
  function myCalculate(mySign) {
    if (myFlg == 0 && mySign !== '=') {
      myInput += mySign;
      document.dentaku.myLine.value = myInput;
      myFlg = 1;
    }
    if (mySign == '=' && myFlg == 0){
      myTotal = eval(myInput);
      myInput = String(myTotal);
      myFlg = 0;
      document.dentaku.myLine.value = myTotal;
    }
  }
      
  function myC() {
    myTotal = 0;
    myInput = "";
    myFlg = 1;
    document.dentaku.myLine.value = myTotal;
  }
