function increase()
  {
      var value = parseInt(document.getElementById('quantity').value, 10);
      value = isNaN(value) ? 0 : value;
      if(value<90){
          value++;
              document.getElementById('quantity').value = value;
      }
  }
  function decrease()
  {
      var value = parseInt(document.getElementById('quantity').value, 10);
      value = isNaN(value) ? 0 : value;
      if(value>1){
          value--;
              document.getElementById('quantity').value = value;
      }
  
  }