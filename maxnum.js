function max_of_three(jim, dla, zia) 
 {
   let max_val = 0;
  if (jim > dla)
  {
    max_val = 'jim';
  } else
  {
    max_val = 'dla';
  }
  if (zia> max_val) 
  {
    max_val = 'zia';
  }
  return max_val;
}


console.log(max_of_three(1000,510,440));

