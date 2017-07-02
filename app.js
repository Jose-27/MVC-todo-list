(function(window){
    'use strict';


    var $mainInput = qs('.new-todo');
    var $todoList  = qs('.todo-list');
    var items = [];

    $mainInput.onkeyup = function(e){keyup(e)};
    
    function Template() {

		var i, l;
		var view = '';

		for (i = 0, l = items.length; i < l; i++) {
			
            var template
            =	'<li data-id="{{id}}" class="{{completed}}">'
            +		'<div class="view">'
            +			'<input class="toggle" type="checkbox" {{checked}}>'
            +			'<label>{{title}}</label>'
            +			'<button class="destroy"></button>'
            +		'</div>'
            +	'</li>';

			var completed = '';
			var checked = '';

			if (items[i].completed) {
				completed = 'completed';
				checked = 'checked';
			}

			template = template.replace('{{id}}', i);
			template = template.replace('{{title}}',items[i]);
			template = template.replace('{{completed}}', completed);
			template = template.replace('{{checked}}', checked);

			view = view + template;
		}
        
		return view;
	};


  function keyup(e){
    var KEY_CODE_ENTER = (e.which || e.keyCode) == 13 ? true : false;

		if(KEY_CODE_ENTER){
			if($mainInput.value == ''){
				return;
			}else{
				items.push($mainInput.value);
                $todoList.innerHTML = Template();
				$mainInput.value = "";
			}
		}
	}



})(window);



