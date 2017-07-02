(function(window){
    
    'use strict';

    var output = document.getElementsByName('output');

    function Assert(outcome, description){
        var li = document.createElement('li');
        li.className = outcome ? 'pass' : 'fail';
        li.appendChild(document.createTextNode(description));
    
    }

    output.appendChild(li);


})(window);
