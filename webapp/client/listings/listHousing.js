Template.listHousing.helpers({
  tableSettings: function () {
    return {
      collection: HousingListings,
      rowsPerPage: 10,
      showFilter: true,
      fields: [{
          key: 'price_per_month',
          label: 'Price per month',
          sortByValue: true,
          sortDirection: 'descending',
          tmpl: Template.pricePerMonth,
      }].concat(
        _.map([
          "location_description",
          "start_date",
          "end_date",
          "room_type",
        ], function (value, key) {
          return {
            key: value,
            label: Schema.housing.label(value),
          };
        })
      ),
    };
  },
});
