var json2form = ({
	validate : function(){},
	init : function(){return this;},
	setUpForm : function (jsonObject){
		var form = document.createElement('form');
		for(var i = 0, size = jsonObject.sections.length; i < size; i++){
			var section = jsonObject.sections[i];
			var secElm = document.createElement('section');
			if(section['description'].length > 0){
				var header = document.createElement('header');
				var title = document.createTextNode(section['description']);
				header.appendChild(title);
				secElm.appendChild(header);
			}
			var fields = section['fields'];
			for(var j = 0, sizej = fields.length; j < sizej; j++){
				var article	= document.createElement('article');
				var field = fields[j];
					var label = document.createElement('label');
					var name = document.createTextNode(field.name+': ');
					label.appendChild(name);
						var input = document.createElement('input');
						input.type = field.type;
						input.name = field.name;
						input.required = field.mandatory;
						if (input.required){
							label.className = 'mandatory';
						}
						if(input.name == 'submit'){
							input.value = 'Salvar';
							input.onclick = function(){validate();};
						}
						label.appendChild(input);
						article.appendChild(label);
					secElm.appendChild(article);
			}
			form.appendChild(secElm);
		}
		document.getElementsByTagName('body')[0].appendChild(form);
	}
}).init();