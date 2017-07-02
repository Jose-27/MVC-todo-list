(function(window){

    'use strict';

    window.qs = function (selector, scope){
        return (scope || document).querySelector(selector);
    }
    
    //helper for creating html elements
    window.cr = function (selector,scope){
        return (scope || document).createElement(selector);
    }
    
})(window);
