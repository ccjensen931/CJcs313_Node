let letter_stamped = [ 0.55, 0.70, 0.85, 1.00 ];
let letter_metered = [ 0.50, 0.65, 0.80, 0.95 ];
let large_envelopes = [ 1.00, 1.15, 1.30, 1.45, 1.60, 1.75, 1.90, 2.05, 2.20, 2.35, 2.50, 2.65, 2.80 ];
let first_class_package_service = [ 3.66, 3.66, 3.66, 3.66, 4.39, 4.39, 4.39, 4.39, 5.19, 5.19, 5.19, 5.19, 5.71 ];

module.exports = function calculateRate(type, weight) {
    let weightOz = parseInt(weight);

    let cost = 0;

    if (type == "Letters(Stamped)") {
        if (weightOz < 5) {
            cost = letter_stamped[weightOz - 1];
        } else {
            cost = 1000.00;
        }
    } else if (type == "Letters(Metered)") {
        if (weightOz < 5) {
            cost = letter_metered[weightOz - 1];
        } else {
            cost = 1000.00;
        }
    } else if (type == "Large Envelops(Flats)") {
        if (weightOz < 14) {
            cost = large_envelopes[weightOz - 1];
        } else {
            cost = 10000.00;
        }
    } else if (type == "First-Class Package Service—Retail") {
        if (weightOz < 14) {
            cost = first_class_package_service[weightOz - 1];
        } else {
            cost = 10000.00;
        }
    }

    console.log("Cost $" + cost);
    return cost;
};