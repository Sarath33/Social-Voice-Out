var countries = Object();

countries['Africa'] = '|Algeria|Angola|Benin';
countries['Asia'] = '|Bangladesh|Bhutan|Brunei';
countries['Australia/Oceania'] = '|Australia|Fiji|Kiribati';
countries['Caribbean'] = '|Anguilla|Antigua/Barbuda|Aruba';
countries['Central America'] = '|Belize|Costa Rica|El Salvador';
countries['Europe'] = '|Albania|Andorra|Austria';
countries['Islands'] = '|Arctic Ocean|Atlantic Ocean (North)|Atlantic Ocean (South)';
countries['Middle East'] = '|Afghanistan|Armenia|Azerbaijan';
countries['North America'] = '|Bermuda|Canada|Greenland';
countries['South America'] = '|Argentina|Bolivia|Brazil';



var city_states = Object();

//Africa
city_states['Algeria'] = '|Algiers||Adrar|Ain Defla|Ain Temouchent|Alger|Annaba|Batna|Bechar|Bejaia|Biskra|Blida|Bordj Bou Arreridj|Bouira|Boumerdes|Chlef|Constantine|Djelfa|El Bayadh|El Oued|El Tarf|Ghardaia|Guelma|Illizi|Jijel|Khenchela|Laghouat|Mascara|Medea|Mila|Mostaganem|MSila|Naama|Oran|Ouargla|Oum el Bouaghi|Relizane|Saida|Setif|Sidi Bel Abbes|Skikda|Souk Ahras|Tamanghasset|Tebessa|Tiaret|Tindouf|Tipaza|Tissemsilt|Tizi Ouzou|Tlemcen';
city_states['Angola'] = '|Luanda||Bengo|Benguela|Bie|Cabinda|Cuando Cubango|Cuanza Norte|Cuanza Sul|Cunene|Huambo|Huila|Lunda Norte|Lunda Sul|Malanje|Moxico|Namibe|Uige|Zaire';
city_states['Benin'] = '|Porto-Novo||Alibori|Atakora|Atlantique|Borgou|Collines|Couffo|Donga|Littoral|Mono|Oueme|Plateau|Zou';


//Asia
city_states['Bangladesh'] = '|Dhaka||Barisal|Chittagong|Khulna|Rajshahi|Sylhet';
city_states['Bhutan'] = '|Thimphu||Bumthang|Chhukha|Chirang|Dagana|Gasa|Geylegphug|Ha|Lhuntshi|Mongar|Paro|Pemagatsel|Punakha|Samchi|Samdrup Jongkhar|Shemgang|Tashigang|Tongsa|Wangdi Phodrang|Yangtse';
city_states['Brunei'] = '|Bandar Seri Begawan||Belait|Brunei/Muara|Temburong|Tutong';


//Australia-Oceania
city_states['Australia'] = '|Canberra||Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia';
city_states['Fiji'] = '|Suva||Central|Eastern|Northern|Rotuma|Western';
city_states['Kiribati'] = '|Tarawa||Abaiang|Abemama|Aranuka|Arorae|Banaba|Beru|Butaritari|Gilberts (Central)|Gilberts (Northern)|Gilberts (Southern)|Kanton|Kiritimati|Kuria|Line Islands|Maiana|Makin|Marakei|Nikunau|Nonouti|Onotoa|Phoenix Islands|Tabiteuea|Tabuaeran|Tamana|Teraina';


//Caribbean
city_states['Anguilla'] = '|The Valley';
city_states['Antigua/Barbuda'] = '|Saint John||Barbuda|Redonda|Saint George|Saint Mary|Saint Paul|Saint Peter|Saint Philip';
city_states['Aruba'] = '|Oranjestad';


//Central America
city_states['Belize'] = '|Belmopan||Belize|Cayo|Corozal|Orange Walk|Stann Creek|Toledo';
city_states['Costa Rica'] = '|San Jose||Alajuela|Cartago|Guanacaste|Heredia|Limon|Puntarenas';
city_states['El Salvador'] = '|San Salvador||Ahuachapan|Cabanas|Chalatenango|Cuscatlan|La Libertad|La Paz|La Union|Morazan|San Miguel|Santa Ana|San Vicente|Sonsonate|Usulutan';


//Europe
city_states['Albania'] = '|Tirana||Berat|Bulqize|Delvine|Devoll|Diber|Durres|Elbasan|Fier|Gjirokaster|Gramsh|Has|Kavaje|Kolonje|Korce|Kruje|Kucove|Kukes|Kurbin|Lezhe|Librazhd|Lushnje|Malesi e Madhe|Mallakaster|Mat|Mirdite|Peqin|Permet|Pogradec|Puke|Sarande|Shkoder|Skrapar|Tepelene|Tirane|Tropoje|Vlore';
city_states['Andorra'] = '|Andorra la Vella||Canillo|Encamp|La Massana|Escaldes-Engordany|Ordino|Sant Julia de Loria';
city_states['Austria'] = '|Vienna||Burgenland|Kaernten|Niederoesterreich|Oberoesterreich|Salzburg|Steiermark|Tirol|Vorarlberg|Wien';


//Islands
city_states['Arctic Ocean'] = '|Franz Josef Land|Svalbard';
city_states['Atlantic Ocean (North)'] = '|Alderney|Azores|Baixo|Belle-Ile|Bermuda|Bioko|Block|Boa Vista|Borduy|Bugio|Canary Islands|Cape Breton|Cape Verde Islands|Channel Islands|Corvo|Deer Isle|Eysturoy|Faeroe Islands|Fago|Faial|Flores|Fuerteventura|Fugloy|Gomera|Graciosa|Gran Canaria|Grand Manan|Grande|Greenland|Guernsey|Hebrides|Herm|Hestur|Hierro|Iceland|Iles De La Madeleine|Ile de Noirmoutier|Ile de Re|Ile d Ol‚ron|Ile d Yeu|Ilhas Desertas|Ireland|Isle au Haut|Isle of Lewis|Isle of Mull|Isle of Skye|Jersey|Kalsoy|Koltur|Kunoy|Lanzarote|La Palma|Litla Dimun|Long Island|Jan Mayen|Madeira Islands|Maio|Martha';
city_states['Atlantic Ocean (South)'] = '|Amsterdam|Andaman Islands|Annobon|Ascension|Bouvet|Falkland Islands|Gough|Martin Vas Islands|Nightingale|St. Helena|Shag/Black Rocks|South Georgia|South Orkney Islands|South Sandwich Islands|Traversay|Trindade|Tristan da Cunha';


//Middle East
city_states['Afghanistan'] = '|Kabul||Badakhshan|Badghis|Baghlan|Balkh|Bamian|Farah|Faryab|Ghazni|Ghowr|Helmand|Herat|Jowzjan|Kabol|Kandahar|Kapisa|Khowst|Konar|Kondoz|Laghman|Lowgar|Nangarhar|Nimruz|Nurestan|Oruzgan|Paktia|Paktika|Parvan|Samangan|Sar-e Pol|Takhar|Vardak|Zabol';
city_states['Azerbaijan'] = '|Baku (Baki)||Abseron|Agcabadi|Agdam|Agdas|Agstafa|Agsu|Ali Bayramli|Astara|Balakan|Barda|Beylaqan|Bilasuvar|Cabrayil|Calilabad|Daskasan|Davaci|Fuzuli|Gadabay|Ganca|Goranboy|Goycay|Haciqabul|Imisli|Ismayilli|Kalbacar|Kurdamir|Lacin|Lankaran|Lankaran|Lerik|Masalli|Mingacevir|Naftalan|Naxcivan|Neftcala|Oguz|Qabala|Qax|Qazax|Qobustan|Quba|Qubadli|Qusar|Saatli|Sabirabad|Saki|Saki|Salyan|Samaxi|Samkir|Samux|Siyazan|Sumqayit|Susa|Susa|Tartar|Tovuz|Ucar|Xacmaz|Xankandi|Xanlar|Xizi|Xocali|Xocavand|Yardimli|Yevlax|Yevlax|Zangilan|Zaqatala|Zardab';


//North America
city_states['Bermuda'] = '|Hamilton||Devonshire|Hamilton|Hamilton|Paget|Pembroke|Saint George|Saint George\\';
city_states['Canada'] = '|Ottawa||Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland and Labrador|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory';
city_states['Caribbean'] = '';


//South America
city_states['Argentina'] = '|Buenos Aires||Catamarca|Chaco|Chubut|Cordoba|Corrientes|Entre Rios|Formosa|Jujuy|La Pampa|La Rioja|Mendoza|Misiones|Neuquen|Rio Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tucuman';
city_states['Bolivia'] = '|La Paz|Sucre||Chuquisaca|Cochabamba|Beni|Oruro|Pando|Potosi|Santa Cruz|Tarija';
city_states['Brazil'] = '|Brasilia||Acre|Alagoas|Amapa|Amazonas|Bahia|Ceara|Distrito Federal|Espirito Santo|Goias|Maranhao|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Para|Paraiba|Parana|Pernambuco|Piaui|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondonia|Roraima|Santa Catarina|Sao Paulo|Sergipe|Tocantins';

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function setRegions()
{
	for (region in countries)
	
		document.write('<option value="' + region + '">' + region + '</option>');
}

function set_country(oRegionSel, oCountrySel, oCity_StateSel)
{
	var countryArr;
	oCountrySel.length = 0;
	oCity_StateSel.length = 0;
	var region = oRegionSel.options[oRegionSel.selectedIndex].text;
	if (countries[region])
	{
		oCountrySel.disabled = false;
		oCity_StateSel.disabled = true;
		oCountrySel.options[0] = new Option('SELECT COUNTRY','');
		countryArr = countries[region].split('|');
		for (var i = 0; i < countryArr.length; i++)
			oCountrySel.options[i + 1] = new Option(countryArr[i], countryArr[i]);
		document.getElementById('txtregion').innerHTML = region;
		document.getElementById('txtplacename').innerHTML = '';
	}
	else oCountrySel.disabled = true;
}

function set_city_state(oCountrySel, oCity_StateSel)
{
	var city_stateArr;
	oCity_StateSel.length = 0;
	var country = oCountrySel.options[oCountrySel.selectedIndex].text;
	if (city_states[country])
	{
		oCity_StateSel.disabled = false;
		oCity_StateSel.options[0] = new Option('SELECT NEAREST DIVISION','');
		city_stateArr = city_states[country].split('|');
		for (var i = 0; i < city_stateArr.length; i++)
			oCity_StateSel.options[i+1] = new Option(city_stateArr[i],city_stateArr[i]);
		document.getElementById('txtplacename').innerHTML = country;
	}
	else oCity_StateSel.disabled = true;
}

function print_city_state(oCountrySel, oCity_StateSel)
{
	var country = oCountrySel.options[oCountrySel.selectedIndex].text;
	var city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;
	if (city_state && city_states[country].indexOf(city_state) != -1)
		document.getElementById('txtplacename').innerHTML = city_state + ', ' + country;
	else document.getElementById('txtplacename').innerHTML = country;
}