// **********************
// * Strip currency symbols ,
// *thousands seperators and spaces
// ***********************
function stripCurrency(value,symbol,seperator){
  symbol= (typeof symbol == 'undefined'?'$':symbol);
  seperator =(typeof seperator == 'undefined' ?',' :seperator);
  value = value.replace(symbol,"")
            .replace(seperator,"")
            .replace(" ","");
   return value;
}

// **********************
// * Format number with currecny symbol
// ***********************

function formatCurrency(value,decimals,decpoint,seperator){
    decimals = (typeof decimals =='undefined' ? 2 :decimals);
    decpoint =(typeof decpoint =='undefined'?'.':decpoint);
    seperator=(typeof seperator == 'undefined' ? ',':seperator);
    symbol = (typeof symbol =='undefined'?'$':symbol);

    var parts = value.toFixed(decimals).toString().split(decpoint);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,seperator);
    return (symbol+parts.join(decpoint)).toLocaleString();
}

