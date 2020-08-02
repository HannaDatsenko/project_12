var div = document.createElement('div');
var formMain = document.createElement('form');
formMain.name = 'main';
formMain.name = 'firstForm';
document.body.append(div);
var select = document.createElement('select');
select.name = 'cur';
var optionUsd = document.createElement('option');
optionUsd.id = 'usd';
optionUsd.innerText = 'USD';
var optionEur = document.createElement('option');
optionEur.id = 'eur';
optionEur.innerText = 'EUR';
var optionRur = document.createElement('option');
optionRur.id = 'rur';
optionRur.innerText = 'RUR';
var divResult = document.createElement('div');
select.append(optionUsd, optionEur, optionRur);
formMain.append(select);
div.append(formMain, divResult);
document.body.append(div);
var cursSelect = firstForm.cur;

function check() {
	var selectedOption = cursSelect.options[cursSelect.selectedIndex];
	var txt = selectedOption.text;
	var request = new XMLHttpRequest();
	request.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", true);
	responseType = 'json';
	request.send();
	request.onload = function() {
		var responseObj = JSON.parse(request.response);
		for (var i = 0; i < responseObj.length; i++) {
			if (responseObj[i].ccy === txt) {
				divResult.innerText = "Currency" + " " + txt + " " + "sale cost" + " " + responseObj[i].sale + "UAH," + " " + " buy cost" + " " + responseObj[i].buy+"UAH";
			}
		}
	}
}
cursSelect.addEventListener('change', check);