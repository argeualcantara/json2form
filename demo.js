var form =   {
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
         name: 'send',
         type: 'button',
         value: 'Save',
         onclick: undefined
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