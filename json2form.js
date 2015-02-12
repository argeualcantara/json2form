var json2form = ({
	form: null,
	validate : function(){
		"use strict";
		var valid = true, i = 0, sizei = 0, j = 0, sizej = 0, childi = null, childj = null, node = null;
		for (i = 0, sizei = this.form.children.length; i < sizei && valid; i+=1){
			childi = this.form.children.item(i);
			for (j = 0, sizej = childi.children.length; j < sizej  && valid; j+=1){
				childj = childi.children.item(j);
				if (childj.tagName === 'ARTICLE'){
					if(childj.children.item(0).className === 'mandatory' && childj.children.item(0).children.item(0).value.trim() === ''){
						node = childj.children.item(0);
						valid = false;
						alert(node.innerText.replace(':', '').trim() + ' filed is mandatory');
					}
				}
			}
		}
		if(valid){
			this.form.submit();
		}
	},
	init : function(){"use strict";return this;},
	setUpForm : function (jsonObject){
		"use strict";
		var i = 0, sizei = 0, section = null, secElm = null, header = null, title = null,
			fields = null, j = 0, sizej = 0, article = null, field = null, label = null, name = null,
			input = null;
		this.form = document.createElement('form');
		this.form.method = 'post';
		for(i = 0, sizei = jsonObject.sections.length; i < sizei; i+=1){
			section = jsonObject.sections[i];
			secElm = document.createElement('section');
			if(section.description.length > 0){
				header = document.createElement('header');
				title = document.createTextNode(section.description);
				header.appendChild(title);
				secElm.appendChild(header);
			}
			fields = section.fields;
			for(j = 0, sizej = fields.length; j < sizej; j+=1){
				article	= document.createElement('article');
				field = fields[j];
				label = document.createElement('label');
				name = document.createTextNode(field.name+': ');
				label.appendChild(name);
				input = document.createElement('input');
				input.type = field.type;
				input.name = field.name.replace(/\W+/g, '_').toLowerCase();
				input.required = field.mandatory;
				if (input.required){
					label.className = 'mandatory';
				}
				if(input.name === 'send'){
					input.value = field.value;
					if(!input.onclick){
						input.onclick = this.validate;
					}
				}
				label.appendChild(input);
				article.appendChild(label);
				secElm.appendChild(article);
			}
			this.form.appendChild(secElm);
		}
		document.getElementsByTagName('body')[0].appendChild(this.form);
	}
}).init();