jQuery.GEQ
==========

Gets the "eq" index of the selected element from within selected elements.

## Usage

    $([specific element to retrieve eq]).geq([class of elements], [integer]);
    $('#element').geq('div');
    $('#element').geq($('div').not('.evil'));
    $('#element').geq('div', 2);
    
In this example, it retrieves the eq of the element with the id of "element" relative to its position among the "div"s.
With the integer defined, it finds the element's position relative to the class of elements, but does a [modulo function](http://en.wikipedia.org/wiki/Modular_arithmetic) on it and returns the result. This would be useful for finding odd or even elements (define integer as 2, treat results of 0 as odd and results of 1 as even).
If a specific element is not found within the class of elements, it returns null.

## License: Public Domain
Please don't rename it or change credit away from me, James Anthony Bruno, because that would make me sad. It is fine, however, to make changes to GEQ's core to suit your needs for use in your products (whether commercial, personal, or non-profit). If you believe you've found a better way for GEQ to work, go ahead and message me and let me know! I would love to implement your fix. 
