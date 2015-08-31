Router.configure({
  // // we use the  appBody template to define the layout for the entire app
  // layoutTemplate: 'appBody',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'notFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'spinner',
});

Router.map(function() {
  // showPatient (/sample/:currentSampleLabel) ==> same thing
  this.route('listHousing', {
    path: '/housing/',
    waitOn: function () {
      return Meteor.subscribe("listHousing");
    },
    data: function () {
      return HousingListings.find({});
    },
  });

  this.route('addHousing', {
    path: '/housing/add',
  });
});
