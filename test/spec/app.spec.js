describe("MailModel", function() {
  it("should properly init", function() {
    MailModel.init();
    
    //verifico che il valore sia definito
    expect(rules).toBeDefined();
    //verifico che i valori siano uguali
    expect(MailModel.rules).toEqual(rules);
    expect(MailModel.messages).toEqual(msgs);
    //verifico che l'elemento sia contenuto nell'array
    expect(rules).toContain("spam.com");
    //verifico che la sottostringa sia contenuta
    expect(msgs).toMatch("spam.com");
  });
  
  it("should properly filter", function() {
    var filter = MailModel.filter();
    
    //expect(filter).toEqual(['carlo@gmail.com', 'trentose2@googlegroups.com']);
    expect(filter).not.toMatch(rules);
  });
  
  it("experiment", function() {
    //minore di
    expect(3).toBeLessThan(5);  
    //maggiore di
    expect(3).toBeGreaterThan(1); 
    expect(undefined).toBeUndefined();
    expect(null).toBeNull();
  });
});

//