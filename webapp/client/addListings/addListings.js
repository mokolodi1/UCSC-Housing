Template.registerHelper("Schema", Schema);

AutoForm.addHooks(['add-housing-listing'], {
    onSuccess: function(operation, result, template) {
      Router.go("listHousing");
    },
   onError: function(operation, error, template) {
     console.log(error);
  }
});
