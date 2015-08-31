Meteor.methods({
  addHousingListing: function(doc) {
    var schema = HousingListings.simpleSchema();
    schema.clean(doc);
    check(doc, schema);

    // TODO: make sure logged in

    HousingListings.insert(doc);
  }
});
