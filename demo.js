var form =   {
    formAttr:{
      method: 'post',
      action: '/saveUser'},
    sections:[{
      description: 'Authentication data',
      fields: [{
        name: 'Login',
        mandatory: true,
        type: 'text'
      },{
        name: 'Password',
        mandatory: true,
        type: 'password'
      },{
        name: 'Expiration Date',
        mandatory: true,
        type: 'date'
      },{
        name: 'Enabled',
        mandatory: false,
        type: 'checkbox'
      }]
    },{
      description: 'Contact data',
      fields: [{
        name: 'Address',
        mandatory: false,
        type: 'text'
      },{
        name: 'Complement',
        mandatory: false,
        type: 'text'
      },{
        name: 'State/Province',
        mandatory: false,
        type: 'text'
      },{
        name: 'Phone',
        mandatory: false,
        type: 'tel'
      }]
    },{
      description: '',
      fields: [{
         name: 'Save',
         type: 'button',
         onclick: undefined
      }, {
         name: 'TestFunction',
         type: 'button',
         onclick: function(){alert('I am another function');}
      }]
    }]
};
window.onload = function(){
  try{
      json2form.setUpForm(form);
  } catch (err) {
    console.log('Error loading from.' + err.stack);
  }
}