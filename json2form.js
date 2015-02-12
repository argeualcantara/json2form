var json2form = ({
	form: null,
	validate : function(){
		valid = true;
		for (var i = 0, size = this.form.children.length; i < size && valid; i++){
			var child = this.form.children.item(i);
			for (var j = 0, sizej = child.children.length; j < sizej  && valid; j++){
				var childj = child.children.item(j);
				if (childj.tagName === 'ARTICLE'){
					if(childj.children.item(0).className === 'mandatory' && childj.children.item(0).children.item(0).value.trim() == ''){
						var node = childj.children.item(0);
						valid = false;
						alert(node.innerText.replace(':', '').trim() + ' filed is mandatory');
					}
				}
				
			}
		}
		if(valid){

		}
	},
	init : function(){return this;},
	setUpForm : function (jsonObject){
		j2f = this;
		j2f.form = document.createElement('form');
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
						input.value = field.value;
						if(!input.onclick){
							input.onclick = function(){j2f.validate();};
						}
					}
					label.appendChild(input);
					article.appendChild(label);
					secElm.appendChild(article);
			}
			j2f.form.appendChild(secElm);
		}
		document.getElementsByTagName('body')[0].appendChild(j2f.form);
	}
}).init();