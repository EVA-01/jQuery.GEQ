jQuery.fn.geq=function(s, c) {
 if(!c) {
  c=jQuery(s).length;
 }
 k=jQuery(this).first();
 l=null;
 jQuery(s).each(function(i) {
  if(jQuery(this).is(k)) {
   l=(i-Math.floor(i/c)*c);
   return false;
  }
 });
 return l;
}
