Schema = {};

Schema.listing = new SimpleSchema({
  "created_date": {
    type: Date,
    autoValue: function () {
      return new Date();
    },
  },
  "user_id": {
    type: String,
    label: "User _id",
    autoValue: function () {
      return "user_id_hardcoded";
      //return Meteor.userId();
    },
  },
  "ucsc_username": {
    // ex. dtflemin from dtflemin@ucsc.edu
    type: String,
    autoValue: function () {
      // TODO: calculate from user_id
      return "ucsc_username_hardcoded";
    },
  },
});

Schema.housing = new SimpleSchema({
  "price_per_month": {
    type: Number,
    label: "Price per month",
  },
  "location_description": { type: String },
  "start_date": { type: Date },
  "end_date": { type: Date, optional: true },
  "room_type": {
    type: String,
    allowedValues: [
      "single",
      "double",
      "triple",
      "other"
    ]
  },
  "description": {
    type: String,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 5,
      }
    }
  },
});


// Schema.renter = new SimpleSchema({
//   "full_names": { type: [String] },
//   "number_of_people": {
//     type: Number,
//     autoValue: function () {
//       return this.field("full_name").length;
//     },
//   },
//   "max_budget": {
//     type: Number,
//     label: "Max budget per month",
//   },
//   "start_date": { type: Date },
//   "end_date": { type: Date, optional: true },
//   "description": { type: String },
// });

var allowRules = {
  insert: function (userId, doc) {
    return userId === doc.user_id;
  },
  update: function(userId, doc, fields, modifier) {
    return userId === doc.user_id;
  },
  remove: function (userId, doc) {
    return userId === doc.user_id;
  },
};

HousingListings = new Meteor.Collection("housing_listings");
HousingListings.attachSchema([Schema.listing, Schema.housing]);
HousingListings.allow(allowRules);

// RenterListings = new Meteor.Collection("renter_listings");
// RenterListings.attachSchema([Schema.listing, Schema.renter]);
// RenterListings.allow(allowRules);
