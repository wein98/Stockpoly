function Square(name, pricetext, color, price, groupNumber, currentprice, eps, dps, nta, pe, roe) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.currentprice = (currentprice || 0);
	this.eps = (eps || 0);
	this.dps = (dps || 0);
	this.nta = (nta || 0);
	this.pe = (pe || 0);
	this.roe = (roe || 0);
	this.newprice1 = 0;
	this.pricechangeperc = 0;
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "ICAP";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() {
	addAlert(player[turn].name + " paid $200 for landing on City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on City Tax. Pay $200.");
}

var square = [];

square[0] = new Square("GO", "COLLECT $20000 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("ICAP", "RM1.96", "#8B4513", 1.96, 3, 1.96, -3.37, 0, 2.86, -58.21, -1.18);
square[2] = new Square("Bear / Bull", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"); // Bear / Bull
square[3] = new Square("SUNCON", "RM1.86", "#8B4513", 1.86, 3, 1.86, 5.74, 7, 0.47, 32.4, 12.21);
square[4] = new Square("Knowledge Chest 1", "Get $100", "#FFFFFF"); // Knowledge Chest
square[5] = new Square("Quiz 1", "Pay $200", "#FFFFFF"); // Quiz
square[6] = new Square("SERBADK", "RM1.67", "#87CEEB", 1.67, 4, 1.67, 15.8, 5.75, 0.91, 10.57, 17.36);
square[7] = new Square("Bear / Bull", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"); // Bear / Bull
square[8] = new Square("BURSA", "RM8.57", "#87CEEB", 8.57, 4, 8.57, 39.36, 20.8, 0.98, 21.77, 40.17);
square[9] = new Square("SUPERMX", "RM8.08", "#87CEEB", 8.08, 4, 8.08, 47.43, 0, 0.82, 17.04, 57.84);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("SIGGAS", "RM0.475", "#FF0080", 0.475, 5, 0.475, 40.68, 55.7, 0.54, 1.17, 75.34);
square[12] = new Square("Knowledge Chest 2", "Get $100", "#FFFFFF"); // Knowledge Chest
square[13] = new Square("UCHITEC", "RM2.64", "#FF0080", 2.64, 5, 2.64, 15.62, 16, 0.34, 16.9, 45.95);
square[14] = new Square("SCICOM", "RM0.915", "#FF0080", 0.915, 5, 0.915, 6.2, 5, 0.29, 14.75, 21.39);
square[15] = new Square("Quiz 2", "Pay $200", "#FFFFFF"); // Quiz
square[16] = new Square("PINEPAC", "RM0.475", "#FFA500", 0.475, 6, 0.475, 64.17, 0, 1.43, 0.74, 44.87);
square[17] = new Square("Bear / Bull", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"); // Bear / Bull
square[18] = new Square("UTDPLT", "RM14.48", "#FFA500", 14.48, 6, 14.48, 86.55, 66.78, 6.637, 16.73, 13.59);
square[19] = new Square("SWKPLNT", "RM2.11", "#FFA500", 2.11, 6, 2.11, 19.07, 10, 2.09, 11.06, 9.13);
square[20] = new Square("Annual General Meeting", "", "#FFFFFF");
square[21] = new Square("MATRIX", "RM1.74", "#FF0000", 1.74, 7, 1.74, 27.21, 11.5, 2.02, 6.39, 13.47);
square[22] = new Square("Bear / Bull", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"); // Bear / Bull
square[23] = new Square("DPS", "RM0.115", "#FF0000", 0.115, 7, 0.115, 2.03, 0, 0.22, 5.67, 9.22);
square[24] = new Square("DBHD", "RM0.345", "#FF0000", 0.345, 7, 0.345, 4.64, 0, 0.583, 7.44, 7.95);
square[25] = new Square("Quiz 3", "Pay $200", "#FFFFFF"); // Quiz
square[26] = new Square("AXREIT", "RM2.12", "#FFFF00", 2.12, 8, 2.12, 15.27, 9.26, 1.482, 13.88, 10.3);
square[27] = new Square("RSENA", "RM0.505", "#FFFF00", 0.505, 8, 0.505, -1.58, 0, 0.017, -32.02, -92.76);
square[28] = new Square("Knowledge Chest 3", "Get $100", "#FFFFFF"); // Knowledge Chest
square[29] = new Square("MYEG", "RM1.57", "#FFFF00", 1.57, 8, 1.57, 6.89, 2.5, 0.228, 22.79, 30.21);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("COMPLET", "RM0.68", "#008000", 0.68, 9, 0.68, 35.49, 16, 1.25, 1.92, 28.39);
square[32] = new Square("PETGAS", "RM16.76", "#008000", 16.76, 9, 16.76, 100.65, 82, 6.31, 16.65, 15.95);
square[33] = new Square("Bear / Bull", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"); // Bear / Bull
square[34] = new Square("GASMSIA", "RM2.71", "#008000", 2.71, 9, 2.71, 15.68, 14.1, 0.787, 17.28, 19.93);
square[35] = new Square("Quiz 4", "Pay $200", "#FFFFFF"); // Quiz
square[36] = new Square("Bear / Bull", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF"); // Bear / Bull
square[37] = new Square("BAT", "RM11.26", "#0000FF", 11.26, 10, 11.26, 92.1, 118, 1.27, 12.23, 72.52);
square[38] = new Square("Knowledge Chest 4", "Get $100", "#FFFFFF"); // Knowledge Chest
square[39] = new Square("NESTLE", "RM140", "#0000FF", 140, 10, 140, 235.41, 280, 2.53, 59.47, 93.05);

var knowledgeChestCards = [];
var bearbullCards = [];

knowledgeChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.knowledgeChestJailCard = true; updateOwned();});
knowledgeChestCards[1] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[2] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[3] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[4] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[5] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[6] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[7] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[8] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[9] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[10] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[11] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[12] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[13] = new Card("Receive Quarter Reports, positivie outlook for the stocks invested, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[14] = new Card("You gained stock and trading knowledge by asking tips from professionals.", function() { addamount(50, 'Knowledge Chest');});
knowledgeChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});


bearbullCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
bearbullCards[1] = new Card("Pandemic hits, stock market slumps", function() { market(-1);});
bearbullCards[2] = new Card("New government and prominent leader elected, future bright for country's economy. ", function() { market(1);});
bearbullCards[3] = new Card("USA just started war", function() { market(-1);});
bearbullCards[4] = new Card("Close connection has become politician, drafts policy that favours selected companies only. Stocks hold by the player will observe uptrend for next turn", function() { market(1);});
bearbullCards[5] = new Card("Pandemic hits, stock market slumps", function() { market(-1);});
bearbullCards[6] = new Card("Bank pays you dividend of $5000.", function() { addamount(5000, 'Bear/Bull');});
bearbullCards[7] = new Card("New government and prominent leader elected, future bright for country's economy. ", function() { market(1);});
bearbullCards[8] = new Card("Pay air tax of $1500.", function() { subtractamount(1500, 'Bear/Bull');});
bearbullCards[9] = new Card("USA just started war", function() { market(-1);});
bearbullCards[10] = new Card("Visit NESTLE factory's operation.", function() { advance(39);});
bearbullCards[11] = new Card("Close connection has become politician, drafts policy that favours selected companies only. Stocks hold by the player will observe uptrend for next turn", function() { market(1);});
bearbullCards[12] = new Card("Vaccine for pandemic found, stock market has positive outlook.", function() { market(-1);});
bearbullCards[13] = new Card("Pandemic hits, stock market slumps", function() { market(-1);});
bearbullCards[14] = new Card("Close connection has become politician, drafts policy that favours selected companies only. Stocks hold by the player will observe uptrend for next turn", function() { market(1);});
bearbullCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $20000.", function() { gotojail();});

var quizCards = [];

quizCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
quizCards[1] = new Card("What is NTA?", function() { subtractamount(200, "quiz");});
quizCards[2] = new Card("What is P/E?", function() { subtractamount(200, "quiz");});
quizCards[3] = new Card("What is D/Y?", function() { subtractamount(200, "quiz");});
quizCards[4] = new Card("What is EPS?", function() { subtractamount(200, "quiz");});
quizCards[5] = new Card("What is ROE?", function() { subtractamount(200, "quiz");});
quizCards[6] = new Card("What is DPS?", function() { subtractamount(200, "quiz");});
quizCards[7] = new Card("What is Warrants?", function() { subtractamount(200, "quiz");});
quizCards[8] = new Card("What is QR?", function() { subtractamount(200, "quiz");});
quizCards[9] = new Card("What is exercise date?", function() { subtractamount(200, "quiz");});
quizCards[10] = new Card("What is bonus issues?", function() { subtractamount(200, "quiz");});
quizCards[11] = new Card("What is share buyback?", function() { subtractamount(200, "quiz");});
quizCards[12] = new Card("What is KLCI?", function() { subtractamount(200, "quiz");});
quizCards[13] = new Card("What is market cap?", function() { subtractamount(200, "quiz");});
quizCards[14] = new Card("What is moving average?", function() { subtractamount(200, "quiz");});
quizCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});

/*

knowledgeChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.knowledgeChestJailCard = true; updateOwned();});
knowledgeChestCards[1] = new Card("Receive Quarter Reports, gets $100 reward from company.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[2] = new Card("From sale of stock, you get $5000.", function() { addamount(5000, 'Knowledge Chest');});
knowledgeChestCards[3] = new Card("Life insurance matures. Collect $100.", function() { addamount(100, 'Knowledge Chest');});
knowledgeChestCards[4] = new Card("Income tax refund. Collect $2000.", function() { addamount(2000, 'Knowledge Chest');});
knowledgeChestCards[5] = new Card("Holiday fund matures. Receive $1000.", function() { addamount(1000, 'Knowledge Chest');});
knowledgeChestCards[6] = new Card("You inherit $10000.", function() { addamount(10000, 'Knowledge Chest');});
knowledgeChestCards[7] = new Card("Receive $250 consultancy fee.", function() { addamount(250, 'Knowledge Chest');});
knowledgeChestCards[8] = new Card("Daddy gives pocket money $1000.", function() { addamount(1000, 'Knowledge Chest');});
knowledgeChestCards[9] = new Card("Bank error in your favor. Collect $200.", function() { addamount(200, 'Knowledge Chest');});
knowledgeChestCards[10] = new Card("Receives dividend $5000.", function() { addamount(5000, 'Knowledge Chest');});
knowledgeChestCards[11] = new Card("Doctor's fee. Pay $50.", function() { addamount(50, 'Knowledge Chest');});
knowledgeChestCards[12] = new Card("It is your birthday. Collect $1000 from every player.", function() { collectfromeachplayer(1000, 'Knowledge Chest');});
knowledgeChestCards[13] = new Card("Advance to \"GO\" (Collect $20000).", function() { advance(0);});
knowledgeChestCards[14] = new Card("You gained stock and trading knowledge by asking tips from professionals.", function() { addamount(50, 'Knowledge Chest');});
knowledgeChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});


bearbullCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
bearbullCards[1] = new Card("Pandemic hits, stock market slumps", function() { market(-1);});
bearbullCards[2] = new Card("New government and prominent leader elected, future bright for country's economy. ", function() { market(1);});
bearbullCards[3] = new Card("USA just started war", function() { market(-1);});
bearbullCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
bearbullCards[5] = new Card("ADVANCE TO THE NEAREST knowledge chest.", function() { advanceToNearestUtility();});
bearbullCards[6] = new Card("Bank pays you dividend of $5000.", function() { addamount(5000, 'Bear/Bull');});
bearbullCards[7] = new Card("ADVANCE TO THE NEAREST quiz.", function() { advanceToNearestRailroad();});
bearbullCards[8] = new Card("Pay air tax of $1500.", function() { subtractamount(1500, 'Bear/Bull');});
bearbullCards[9] = new Card("Take a trip to quiz 1. If you pass \"GO\" collect $20000.", function() { advance(5);});
bearbullCards[10] = new Card("Visit NESTLE factory's operation.", function() { advance(39);});
bearbullCards[11] = new Card("ADVANCE to DBHD. If you pass \"GO\" collect $200.", function() { advance(24);});
bearbullCards[12] = new Card("Your building loan matures. Collect $1500.", function() { addamount(1500, 'Bear/Bull');});
bearbullCards[13] = new Card("ADVANCE TO THE NEAREST quiz.", function() { advanceToNearestRailroad();});
bearbullCards[14] = new Card("ADVANCE to SIGGAS. If you pass \"GO\" collect $20000.", function() { advance(11);});
bearbullCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $20000.", function() { gotojail();});

var quizCards = [];

quizCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
quizCards[1] = new Card("What is NTA?", function() { subtractamount(200, "quiz");});
quizCards[2] = new Card("What is P/E?", function() { subtractamount(200, "quiz");});
quizCards[3] = new Card("What is D/Y?", function() { subtractamount(200, "quiz");});
quizCards[4] = new Card("What is EPS?", function() { subtractamount(200, "quiz");});
quizCards[5] = new Card("What is ROE?", function() { subtractamount(200, "quiz");});
quizCards[6] = new Card("What is DPS?", function() { subtractamount(200, "quiz");});
quizCards[7] = new Card("What is Warrants?", function() { subtractamount(200, "quiz");});
quizCards[8] = new Card("What is QR?", function() { subtractamount(200, "quiz");});
quizCards[9] = new Card("What is exercise date?", function() { subtractamount(200, "quiz");});
quizCards[10] = new Card("What is bonus issues?", function() { subtractamount(200, "quiz");});
quizCards[11] = new Card("What is share buyback?", function() { subtractamount(200, "quiz");});
quizCards[12] = new Card("What is KLCI?", function() { subtractamount(200, "quiz");});
quizCards[13] = new Card("What is market cap?", function() { subtractamount(200, "quiz");});
quizCards[14] = new Card("What is moving average?", function() { subtractamount(200, "quiz");});
quizCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});

*/