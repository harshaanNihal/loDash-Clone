import chunk from "./array/chunk";
import compact from "./array/compact";
import concat from "./array/concat";
import difference from "./array/difference";
import drop from "./array/drop";
import dropRight from "./array/dropRight";
import fill from "./array/fill";



var _ = {
  chunk,
  compact,
  concat,
  difference,
  drop,
  dropRight,
  fill
}

var name1 = "hello";
console.log(_);
 var x =_.chunk([1,2,3,4,5],2);
 console.log(x);
