// apiValidation is determined by manually typing the input in the swagger documentation:
// https://api.petsmart-dev.com/swagger/ui/index#!/GeographyV1/GeographyV1_GetCityForCountryAndPostalCodes

const scenarios = [
  { country: "US", zip: "85018", apiResult: true },
  { country: "US", zip: "85018-1005", apiResult: true },
  { country: "US", zip: "", apiResult: false },
  { country: "US", zip: "asdfj", apiResult: false },
  { country: "US", zip: "85O18", apiResult: false },
  { country: "US", zip: "85018*1004", apiResult: false },
  { country: "US", zip: "85018 1005", apiResult: false },
  { country: "US", zip: "850181005", apiResult: false },
  { country: "CAN", zip: "M4G 3H4", apiResult: false },
  { country: "CAN", zip: "M4G3H4", apiResult: false },
  { country: "CAN", zip: "M4G-3H4", apiResult: false },
  { country: "CAN", zip: "", apiResult: false },
  { country: "", zip: "", apiResult: false }
];

function publicApiValidation(postalCode) {
  // This is the C# regex in PetSmart.WebApi.Public
  // In Javascript, this will fail on evy zipcode input.
  // It is not reliable
  return /^\\d{5}(?:-\\d{4})?$/.test(postalCode);
}

function oldPostalCodeValidation(postalCode, countryCode) {
  let postalCodeRegex = null;

  if (!postalCode) return true;

  switch (countryCode) {
    case "US":
      postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
      break;
    case "CA":
      postalCodeRegex = /^[A-Z][0-9][A-Z]\s?[0-9][A-Z][0-9]$/i;
      break;
    default:
      postalCodeRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
  }
  return postalCodeRegex.test(postalCode);
}

// function newPostalCodeValidation()
test("The C# regex validation will always fail in Javascript", () => {
  scenarios.map(item => {
    expect(publicApiValidation(item.zip)).toBe(false);
  });
});

test("TRUE: five digit zip in the US", () => {
  // console.log(
  //   scenarios.map(item => oldPostalCodeValidation(item.zip, item.country))
  // );
  expect(oldPostalCodeValidation("85018", "US")).toBe(true);
});
