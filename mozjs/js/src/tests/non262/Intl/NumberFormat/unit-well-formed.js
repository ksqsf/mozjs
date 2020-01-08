// |reftest| skip-if(!this.hasOwnProperty("Intl")||release_or_beta)

const sanctionedSimpleUnitIdentifiers = [
    "acre",
    "bit",
    "byte",
    "celsius",
    "centimeter",
    "day",
    "degree",
    "fahrenheit",
    "fluid-ounce",
    "foot",
    "gallon",
    "gigabit",
    "gigabyte",
    "gram",
    "hectare",
    "hour",
    "inch",
    "kilobit",
    "kilobyte",
    "kilogram",
    "kilometer",
    "liter",
    "megabit",
    "megabyte",
    "meter",
    "mile",
    "mile-scandinavian",
    "milliliter",
    "millimeter",
    "millisecond",
    "minute",
    "month",
    "ounce",
    "percent",
    "petabyte",
    "pound",
    "second",
    "stone",
    "terabit",
    "terabyte",
    "week",
    "yard",
    "year",
];

// From <https://github.com/unicode-org/cldr/blob/master/common/validity/unit.xml>
const allUnits = [
    "acceleration-g-force",
    "acceleration-meter-per-second-squared",
    "angle-arc-minute",
    "angle-arc-second",
    "angle-degree",
    "angle-radian",
    "angle-revolution",
    "area-acre",
    "area-hectare",
    "area-square-centimeter",
    "area-square-foot",
    "area-square-inch",
    "area-square-kilometer",
    "area-square-meter",
    "area-square-mile",
    "area-square-yard",
    "area-dunam",
    "concentr-karat",
    "concentr-milligram-per-deciliter",
    "concentr-millimole-per-liter",
    "concentr-part-per-million",
    "concentr-percent",
    "concentr-permille",
    "concentr-permyriad",
    "concentr-mole",
    "consumption-liter-per-100kilometers",
    "consumption-liter-per-kilometer",
    "consumption-mile-per-gallon",
    "consumption-mile-per-gallon-imperial",
    "digital-bit",
    "digital-byte",
    "digital-gigabit",
    "digital-gigabyte",
    "digital-kilobit",
    "digital-kilobyte",
    "digital-megabit",
    "digital-megabyte",
    "digital-petabyte",
    "digital-terabit",
    "digital-terabyte",
    "duration-century",
    "duration-decade",
    "duration-day",
    "duration-day-person",
    "duration-hour",
    "duration-microsecond",
    "duration-millisecond",
    "duration-minute",
    "duration-month",
    "duration-month-person",
    "duration-nanosecond",
    "duration-second",
    "duration-week",
    "duration-week-person",
    "duration-year",
    "duration-year-person",
    "electric-ampere",
    "electric-milliampere",
    "electric-ohm",
    "electric-volt",
    "energy-calorie",
    "energy-foodcalorie",
    "energy-joule",
    "energy-kilocalorie",
    "energy-kilojoule",
    "energy-kilowatt-hour",
    "energy-electronvolt",
    "energy-therm-us",
    "energy-british-thermal-unit",
    "force-pound-force",
    "force-newton",
    "frequency-gigahertz",
    "frequency-hertz",
    "frequency-kilohertz",
    "frequency-megahertz",
    "graphics-dot-per-centimeter",
    "graphics-dot-per-inch",
    "graphics-em",
    "graphics-megapixel",
    "graphics-pixel",
    "graphics-pixel-per-centimeter",
    "graphics-pixel-per-inch",
    "length-astronomical-unit",
    "length-centimeter",
    "length-decimeter",
    "length-fathom",
    "length-foot",
    "length-furlong",
    "length-inch",
    "length-kilometer",
    "length-light-year",
    "length-meter",
    "length-micrometer",
    "length-mile",
    "length-mile-scandinavian",
    "length-millimeter",
    "length-nanometer",
    "length-nautical-mile",
    "length-parsec",
    "length-picometer",
    "length-point",
    "length-yard",
    "length-solar-radius",
    "light-lux",
    "light-solar-luminosity",
    "mass-carat",
    "mass-gram",
    "mass-kilogram",
    "mass-metric-ton",
    "mass-microgram",
    "mass-milligram",
    "mass-ounce",
    "mass-ounce-troy",
    "mass-pound",
    "mass-stone",
    "mass-ton",
    "mass-dalton",
    "mass-earth-mass",
    "mass-solar-mass",
    "power-gigawatt",
    "power-horsepower",
    "power-kilowatt",
    "power-megawatt",
    "power-milliwatt",
    "power-watt",
    "pressure-atmosphere",
    "pressure-hectopascal",
    "pressure-inch-hg",
    "pressure-bar",
    "pressure-millibar",
    "pressure-millimeter-of-mercury",
    "pressure-pound-per-square-inch",
    "pressure-pascal",
    "pressure-kilopascal",
    "pressure-megapascal",
    "speed-kilometer-per-hour",
    "speed-knot",
    "speed-meter-per-second",
    "speed-mile-per-hour",
    "temperature-celsius",
    "temperature-fahrenheit",
    "temperature-generic",
    "temperature-kelvin",
    "torque-pound-foot",
    "torque-newton-meter",
    "volume-acre-foot",
    "volume-bushel",
    "volume-centiliter",
    "volume-cubic-centimeter",
    "volume-cubic-foot",
    "volume-cubic-inch",
    "volume-cubic-kilometer",
    "volume-cubic-meter",
    "volume-cubic-mile",
    "volume-cubic-yard",
    "volume-cup",
    "volume-cup-metric",
    "volume-deciliter",
    "volume-fluid-ounce",
    "volume-fluid-ounce-imperial",
    "volume-gallon",
    "volume-gallon-imperial",
    "volume-hectoliter",
    "volume-liter",
    "volume-megaliter",
    "volume-milliliter",
    "volume-pint",
    "volume-pint-metric",
    "volume-quart",
    "volume-tablespoon",
    "volume-teaspoon",
    "volume-barrel",
];

// Test only sanctioned unit identifiers are allowed.

for (const typeAndUnit of allUnits) {
    const [type, unit] = typeAndUnit.match(/(\w+)-(.+)/).slice(1);

    let allowed;
    if (unit.includes("-per-")) {
        const [numerator, denominator] = unit.match(/(\w+)-per-(.+)/).slice(1);
        allowed = sanctionedSimpleUnitIdentifiers.includes(numerator) &&
                  sanctionedSimpleUnitIdentifiers.includes(denominator);
    } else {
        allowed = sanctionedSimpleUnitIdentifiers.includes(unit);
    }

    if (allowed) {
        const nf = new Intl.NumberFormat("en", {style: "unit", unit});
        assertEq(nf.format(1), nf.formatToParts(1).map(p => p.value).join(""));
    } else {
        assertThrowsInstanceOf(() => new Intl.NumberFormat("en", {style: "unit", unit}),
                               RangeError, `Missing error for "${typeAndUnit}"`);
    }
}

if (typeof reportCompare === "function")
    reportCompare(true, true);
