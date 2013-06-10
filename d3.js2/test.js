//////////////////////////////////////////////////////////////////////
// Données.
//////////////////////////////////////////////////////////////////////

// Dépense en recherche et développement (en pourcentage du PIB).
var GERD = [
	2.21367,  2.74826,  1.96158,  1.80213,  0.39451,  1.52652,  3.01937,  1.44122,  3.84137,  2.20646,  2.78056,  0.5921,  1.14821,  2.64107,  1.78988,  4.2504,  1.26841,  3.33499,  3.3609,  1.67862,  0.41322,  1.81965,  1.13693,  1.75922,  0.67502,  1.65519,  1.24252,  0.48056,  1.85642,  0.92523,  1.38357,  3.61562,  2.99525,  0.84902,  1.82434,  2.78518
];

// Augmentation du PIB (en pourcentage).
var growth = [
	2.48590317,  3.10741128,  1.89308521,  3.21494841,  5.19813626,  1.65489834,  1.04974368,  7.63563272,  2.85477157,  1.47996142,  2.99558644,  -6.90796403,  1.69192342,  -3.99988322,  -0.42935239,  4.84602001,  0.43108032,  3.96559062,  6.16184325,  2.67806902,  5.56185685,  1.18517739,  2.33052515,  1.59773989,  4.34962928,  -1.60958484,  4.03428262,  3.34920254,  -0.17459255,  2.784,  -0.06947685,  3.93555895,  2.71404473,  9.00558548,  2.09209263,  3.02171711
];

// PIB par habitant.
var GDPcap = [
	40718.78167,  42118.46375,  38809.66436,  39069.91407,  15106.73205,  25956.76492,  40169.83173,  22403.02459,  37577.71225,  34147.98907,  39389.25874,  26878.00015,  21731.55484,  35641.55402,  40457.94273,  28595.68799,  32580.06572,  33751.23348,  29101.34563,  86226.3276,  15200.22119,  43455.30129,  29870.67748,  57230.89,  19882.99226,  25425.59561,  19833,  24429.61828,  27559.75186,  10497.583,  32779.3288,  41526.2995,  46621.77334,  15666.18783,  35715.4691,  46587.61843
];

// Population.
var population = [
	22319.07,  8427.318,  10590.44,  33909.7,  17248.45,  10286.3,  5495.246,  1335.347,  5366.482,  62747.78,  82852.47,  11312.16,  9993.116,  308.038,  4394.382,  7623.6,  59059.66,  126912.8,  48988.83,  483.701,  109219.9,  16480.79,  4291.9,  4789.628,  37725.21,  10684.97,  142822.5,  5404.493,  2029.418,  50384.55,  44835.48,  9276.365,  7889.345,  73497,  62761.35,  313232
];

// Nom du pays.
var country = [
	"Australia",  "Austria",  "Belgium",  "Canada",  "Chile",  "Czech Republic",  "Denmark",  "Estonia",  "Finland",  "France",  "Germany",  "Greece",  "Hungary",  "Iceland",  "Ireland",  "Israel",  "Italy",  "Japan",  "Korea",  "Luxembourg",  "Mexico",  "Netherlands",  "New Zealand",  "Norway",  "Poland",  "Portugal",  "Russian Federation",  "Slovak Republic",  "Slovenia",  "South Africa",  "Spain",  "Sweden",  "Switzerland",  "Turkey",  "United Kingdom",  "United States"
];

// Continent.
var continent = [
	"Oceania",  "Europe",  "Europe",  "America",  "America",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Asia",  "Europe",  "Asia",  "Asia",  "Europe",  "America",  "Europe",  "Oceania",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "Africa",  "Europe",  "Europe",  "Europe",  "Europe",  "Europe",  "America"
];

// Abscisse en fonction des dépenses en recherche et développement.
var x = function (d, i) {
	var f = d3.scale.linear()
		.domain([0, 5])
		.range([margin, width-margin]);

	return f(GERD[i]);
};

// Ordonnée en fonction de l'augmentation du PIB.
var y = function (d, i) {
	var f = d3.scale.linear()
		.domain([-10, 10])
		.range([height-margin, margin]);

	return f(growth[i]);
};

// Opacité en fonction du PIB par habitant.
var o = function (d, i) {
	var f = d3.scale.linear()
		.domain([10000, 100000])
		.range([.5, 1]);

	return f(GDPcap[i]);
}

// Rayon en fonction de la raçine carré de la population.
var r = function (d, i) {
	var f = d3.scale.linear()
		.domain([0, 500])
		.range([0, 20]);

	return f(Math.sqrt(population[i]));
}

// Couleur en fonction du continent.
var c = function (d, i) {
	var f = d3.scale.category10()
		.domain(["Africa", "America", "Asia", "Europe", "Oceania"]);

	return f(continent[i]);
}

//////////////////////////////////////////////////////////////////////
// Graphe.
//////////////////////////////////////////////////////////////////////

// Configuration générale.
var width  = 1000,
    height = 1000,
    margin = 50;

// Création du graphe.
var svg = d3.select("body").append("svg")
	.attr("width",  width)
	.attr("height",  height);

// Creation des cercles. 
svg.selectAll("circle").data(country).enter().append("circle")
	.attr("cx", x)
	.attr("cy", y)
	.attr("r",  r)
	.style("fill", c)
	.style("opacity", o)
	.append("title").text(String);
