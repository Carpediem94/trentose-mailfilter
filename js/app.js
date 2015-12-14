/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   }, 
  
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function() {
      var filter = [];
      var control = true;
      for(var i=0; i<this.messages.length; i++) {
        for(var j=0; j<this.rules.length; j++) {
          if(this.messages[i].from.indexOf(this.rules[j].from) !== -1) {
            control = false;
          } else if (this.messages[i].subject.indexOf(this.rules[j].subject) !== -1) {
            control = false;
          } 
        }
        
        if(control) {
          filter.push(this.messages[i]);
        }
        control = true;
      }
      
      return filter;
    } 
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]
var octopus = {
  init: function() {
    MailModel.init();
    viewMail.init();
  },
  
  getMsgs: function() {
    return MailModel.messages;
  },
  
  filterMsgs: function() {
    var msgs = MailModel.filter();
    MailModel.messages = msgs;
  }
};

// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.
var viewMail = {
  init: function() {
    this.mailList = $('.result');
    this.render();
    this.runFilter();
  },
  
  render: function() {
    this.mailList.empty();
    var msgs = octopus.getMsgs();
    for(var i=0; i<msgs.length; i++) {
      this.mailList.append('<li>' + msgs[i].from + '</li>');
    }
  },
  
  runFilter: function() {
    $('.btn-filter').click(function() {
      octopus.filterMsgs();
      viewMail.render();
    });
  }
}


$(document).ready(function(){
  octopus.init();
});