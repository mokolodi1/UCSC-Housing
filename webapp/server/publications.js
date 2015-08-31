Meteor.publish("listHousing", function () {
  return HousingListings.find({});
});
