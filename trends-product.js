/*
	******************************************************************
	OSHPD HID Trends Product Page Generator
	******************************************************************
	by Will Floyd
	
	I.	INTRODUCTION
	================
	
	This generator program reads the accompanying data object and
	creates a rich, dynamic page based on the properties of the
	object. Using 'Google Charts', this function will display a
	formatted html table and a chart (pies, columns, lines). For
	every data table in the data object.
	
	II.	STEPS IN CREATING TRENDS PAGE
	=================================

	1.	Create div containers on HTML page >> (.trends-menu) && (.trends-display)
	2.	Embed this JavaScript file into the the HTML page
	3.	Embed data object JavaScript file into the HTML page
	4.	Link cascading style sheet into HTML page
	5.	Start Google Charts Engine with the following lines of JavaScript:
		(*** put these just before the </body> tag ***)
		>	google.load('visualization', '1.0', {'packages':['corechart']});
		>	google.setOnLoadCallback(trendsProduct(***dataObject***));

	III. DATA OBJECT STRUCTURE
	==========================
	
	(object name)
		- productName: (string)
		- (data group name: Profile_Data / Trend_Data / etc)
			- groupColor: (color variable)
			- (data set name): (object)
				- dataTitle: (object)
					- lrg: (string)
					- med: (string)
					- sml: (string)
				- dataTable: (two dimensional array) [row][column]
				- dataFormat: (array), special format for each column: money / percent / null
				- reqDecimal: (number), [optional] adds < 3 zeroes after the decimals 
				- chartType: (string), column / stacked / stacked-flip / pie / line
				- vBaseline: (number), (optional) for determining baseline of chart
				- chartCols: (array), COLUMN numbers to INCLUDE in chart
				- chartRows: (array), ROW numbers to EXCLUDE from chart
				- chartColor: (array), color the chart's data parts
				- chartLabels:
					- horzAxis: (string), horizontal axis label
					- vertAxis: (string), vertical axis label
			- (additional data sets)
		- (additional data groups)
	(end object)
	
	IV. OSHPD COLOR VARIABLES
	=========================

	*** see OSHPD color charts for color selection by number ***
*/	var	defaultGrays=['#ccc','#aaa','#888','#666','#444'],
		priColor=['black', // place holder for zero value
			'#569bbd',	//light-blue(1)
			'#ceaa7a',	//tan(2)
			'#b42e34',	//red(3)
			'#004b91'	//dark-blue(4)
			],
		secColor=['black', // place holder for zero value
			//red-yellow (1-7)
			'#b23339','#e5812c','#f9a01f','#ffc907','#ffe309','#ffe89e','#f9a01f',
			//tan (8-13)
			'#feefd1','#e5cabe','#d0ae7b','#edc79f','#ffe6bd','#fff0e0',
			//violet (14-19)
			'#ac879e','#88697b','#7c5b7c','#654477','#4c2868','#321952',
			//slate-blue (20-25)
			'#9fadb8','#8598a4','#6e849b','#b7c6dc','#7e9dc0','#8598a4',
			//true-blue (26-30)
			'#0e5ca7','#4193d0','#95c2e8','#c1e8fb','#e1f3fd',
			//orange (31-36)
			'#c29b63','#efce8b','#e7b871','#faaa4f','#ef8133','#cd6f3c',
			//red (37-45)
			'#b75938','#b34e34','#d05835','#9b3226','#87371e','#95583e','#b06b4f','#c88368','#e4a479',
			//green (46-49)
			'#00522b','#2d8539','#69a134','#9cc133'
		];

/*
	V. GENERATOR FUNCTION
	=====================
*/
	function trendsProduct(dataObject){
	//	start up jQuery
		$(document).ready(function(e) {
		//	==================
		//	GENERATOR CONTENTS
		//	==================
		
		// 	1. MENU MAKER		
			generateMenu(dataObject); 
			
		//	2. DISPLAY MAKER
			generateDisplay(dataObject);
			
		//	3. CHART MAKER
			generateCharts(dataObject);
		
		//	4.	USER INTERFACE
			startUserInterface(dataObject);
		
		//	5.	UTILITIES
		
		//	==================
		
		});
	}
	
	//	=============
	//	1. MENU MAKER
	//	=============
	
	function generateMenu(obj){
		var menuHTML='\n<div id="trend-menu">\n<ul>';
		// create HTML for menu
		for(a in obj){
			if(typeof obj[a]==='string')continue;
			menuHTML+='\n<li>\n<a href="#'+a+'">'+a.split('_').join(' ')+'</a>\n<ul>';
			for(b in obj[a]){
				if(typeof obj[a][b] === 'string') continue;	//	skip color variables
				menuHTML+='\n<li>\n<a href="#'+b+'">'+obj[a][b].dataTitle.med+'</a>\n</li>';
			}
			menuHTML+='\n</ul>\n</li>';
		}
		menuHTML+='\n</ul>\n</div>';
		$('#trends-product').append(menuHTML);
	
	//	apply colors to menu
		var n = -1; // initialize counter / nth-child selector
		for(a in obj){
			n++; // advance counter
			var nthChild = '#trend-menu>ul>li:nth-child('+n+')',
				bgColor = obj[a].groupColor;
			$(nthChild).css('background-color',bgColor);
			$(nthChild+' ul li').css('background-color',bgColor);
		}
	}
	
	//	================
	//	2. DISPLAY MAKER
	//	================
	
	function generateDisplay(obj){
 		var displayHTML='\n<div id="trend-display">';
		for(a in obj){
			if(typeof obj[a] === 'string') continue; // skip any strings
			displayHTML+='\n<div class="dataGroup" id="'+a+'">';
			for(b in obj[a]){
				var dataSet=obj[a][b];
				if(typeof dataSet === 'string') continue; // skip any strings
				var lastRow=dataSet.dataTable.length - 1;
				var totalRow=dataSet.dataTable[lastRow][0];
				totalRow = String(totalRow).substr(0,5);
				displayHTML+='\n<div class="dataSet" id="'+b+'">';
			//	each title	
				displayHTML+='\n<div class="dataTitle">\n<span>'+obj.productName+':</span>\n<span>'+a.split('_').join(' ')+':</span>\n<span>'+dataSet.dataTitle.lrg+'</span>\n</div>';
			//	container for google chart
				displayHTML+='\n<div class="chart"></div>';
			//	make the data table
				displayHTML+='\n<div class="dataTable">\n<table>\n<thead>\n<tr>';
				for(th in dataSet.dataTable[0]){
					// header row, use first line of dataTable only
					displayHTML+='\n<th>'+formatted(dataSet.dataTable[0][th])+'</th>';
				}
				displayHTML+='\n</tr>\n</thead>\n<tbody>';
				for(tr in dataSet.dataTable){
				//	skip first line of dataTable
					if(tr==0) continue;
				//	skip last row if the first value is "Total"
					if(totalRow=='Total' && tr==lastRow) continue;
					displayHTML+='\n<tr>';
					for(td in dataSet.dataTable[tr]){
						displayHTML+='\n<td>'+formatted(dataSet.dataTable[tr][td],dataSet.dataFormat[td],dataSet.reqDecimal)+'</td>';
					}
					displayHTML+='\n</tr>';
				}
				displayHTML+='\n</tbody>';
				if(totalRow=='Total'){
				//	only include footer if row is for totals
					displayHTML+='\n<tfoot>\n<tr>';	
					for(th in dataSet.dataTable[lastRow]){
						displayHTML+='\n<th>'+formatted(dataSet.dataTable[lastRow][th],dataSet.dataFormat[th],dataSet.reqDecimal)+'</th>';
					}
					displayHTML+='\n</tr>\n</tfoot>';
				}
				displayHTML+='\n</table>\n</div>\n</div>';
			}
			displayHTML+='</div>';
		}
		displayHTML+='</div>';
		$('#trends-product').append(displayHTML);
		//	apply colors to display
		var n = -1; // initialize counter / nth-child selector
		for(a in obj){
			n++; // advance counter
			var gColor = obj[a].groupColor;
			var nthChild = '#trend-display .dataGroup:nth-child('+n+')';
			$(nthChild+' .dataTitle').css('background-color',gColor);
			$(nthChild+' th').css('background-color',gColor);
			$(nthChild+' .dataSet').css('border-bottom','thin solid '+gColor);
		}
	}
	
	//	==============
	//	3. CHART MAKER
	//	==============
	
	function generateCharts(obj){
		for (a in obj){
			for (b in obj[a]){
				var dataSet=obj[a][b];
				var chartGO={
					data:[],	//	optimized data array
					options:{}	//	display options
				}
				
			//	optomize array for chart
				for(row in dataSet.dataTable){
				//	skip rows listed in chartRows
					if(inArray(row,dataSet.chartRows)) break;
					var newData=[];

					for(col in dataSet.dataTable[row]){
					//	add cells listed in chartCols
						if(inArray(col,dataSet.chartCols)){
							newData.push(dataSet.dataTable[row][col]);
						}
					}
				//	push newData to chartGO object
					chartGO.data.push(newData);
				}
				
			//	apply id to target DOM object (needed for Google Visualization)
				var chartObj=b+'-chart';
				$('#'+b+' .chart').attr('id',chartObj);
				
			//	apply colors & fonts
				chartGO.options.colors=dataSet.chartColor;
				chartGO.options.fontName='Arial';
				chartGO.options.fontSize=16;
				
			//	add options and draw our chart, based on chartType
				switch(dataSet.chartType){
					
					case 'column':
					//	set options for column chart
						chartGO.options.hAxis={
							title:dataSet.chartLabels.horzAxis,
							baseline:0
						};
						chartGO.options.vAxis={title:dataSet.chartLabels.vertAxis, baseline:dataSet.vBaseline};
						chartGO.options.height=350;
						chartGO.options.legend={position:'none'};
					//	build the columns
						var chartData=new google.visualization.arrayToDataTable(chartGO.data);
						/* 
						broken feature:
						I am trying to label the column with the numerical value of the data.
						I suppose I don't fully understand how to implement this feature.
						
						API: https://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart#Labels
						
						code:
						var chartDataLabels = new google.visualization.DataView(chartGO.data);
						chartDataLabels.setColumns([0,1,{
							calc:'stringify',
							sourceColumn:1,
							type:'string',
							role:'annotation'
						},2]);
						*/
						var chartView=new google.visualization.ColumnChart(document.getElementById(chartObj));
						break;
					
					case 'stacked':
					//	options for stacked column chart
						chartGO.options.hAxis={title:dataSet.chartLabels.horzAxis};
						chartGO.options.vAxis={title:dataSet.chartLabels.vertAxis};
						chartGO.options.isStacked=true;
						chartGO.options.height=600;
						chartGO.options.legend={
							position:'top',
							maxLines:2,
						};
					//	stack the columns
						var chartData=new google.visualization.arrayToDataTable(chartGO.data);
						var chartView=new google.visualization.ColumnChart(document.getElementById(chartObj));
						break;
						
					case 'stacked-flip':
					//	options for stacked column chart
					//	with axes flipped
						chartGO.options.hAxis={title:dataSet.chartLabels.horzAxis};
						chartGO.options.vAxis={title:dataSet.chartLabels.vertAxis};
						chartGO.data=transpose(chartGO.data); // flip array
						chartGO.options.isStacked=true;
						chartGO.options.height=600;
						chartGO.options.legend={
							position:'top',
							maxLines:2,
						};
					//	stack the columns
						var chartData=new google.visualization.arrayToDataTable(chartGO.data);
						var chartView=new google.visualization.ColumnChart(document.getElementById(chartObj));
						break;
						
					case 'pie':
					//	set options for the pie chart
						//chartGO.options.is3D=true; NO 3D EVER!
						chartGO.options.height=350;
						chartGO.options.chartArea={height:'80%'};
						chartGO.options.pieSliceText='none';
						chartGO.options.pieStartAngle=90;
						/*chartGO.options.legend={
							position:'top',
							maxLines:2,
						};*/
						chartGO.options.tooltip={trigger:'none'};
					//	bake the pie chart
						var chartData=new google.visualization.arrayToDataTable(chartGO.data);
						var chartView=new google.visualization.PieChart(document.getElementById(chartObj));
						break;
					
					case 'line':
					//	options for the line graph chart
						chartGO.options.hAxis={title:dataSet.chartLabels.horzAxis};
						chartGO.options.vAxis={
							title:dataSet.chartLabels.vertAxis,
							//baseline:0
						};
						chartGO.options.height=400;
						chartGO.options.legend={
							position:'top',
							maxLines:3,
						};
						chartGO.options.pointSize=8;
					//	apply dashed lines
						chartGO.options.series=dataSet.dashLine;
					//	connect the dots
						var chartData=new google.visualization.arrayToDataTable(chartGO.data);
						var chartView=new google.visualization.LineChart(document.getElementById(chartObj));
						break;
					
					default:
					//	set options
						if(dataSet.chartLabels === undefined) continue;
						chartGO.options.vAxis={
							title:dataSet.chartLabels.horzAxis,
							baseline:0
						};
						chartGO.options.hAxis={title:dataSet.chartLabels.vertAxis};
						chartGO.options.height=300;
						chartGO.options.legend={position:'none'};
					//	instantiate
						var chartData=new google.visualization.arrayToDataTable(chartGO.data);
						var chartView=new google.visualization.BarChart(document.getElementById(chartObj));
				}
			//	draw the chart!
				chartView.draw(chartData, chartGO.options);
			}
		}
	}
	
	//	==================
	//	4.	USER INTERFACE
	//	==================
	
	function startUserInterface(obj){
	//	button-driven content panel switching
	//	buttons
		var viewButts = '\n<button class="button switch-view">View Charts</button>',
			selectButts = '\n<button class="button select-all">Deselect All</button>',
			printButts = '\n<a href="javascript:window.print();" class="button print-dialog">Print Charts</a>';
	//	hide display
		$('#trend-display').hide();
	//	create buttons
		$('#trends-product').append(viewButts+selectButts+printButts);
		$('#trends-product').prepend(viewButts+selectButts+printButts);
		$('.print-dialog').hide();
		$('#trends-product .button').addClass('darkBlue');
		$('#trend-menu ul li').addClass('chkd');
	// 	selection toggle function
		$('#trend-menu ul li a').click(function(){
		//	save elements, it's just easier this way
			var liA = $(this).parent('li'), // this generation
				ulA = $(this).siblings('ul'),
				liB = $(liA).siblings('li'),
				liC = $(ulA).children('li'), // next generation
				ulP = $(liA).parent('ul'), // previous generation
				liP = $(ulP).parent('li');
		//	check/uncheck clicked item
			$(liA).toggleClass('chkd');
		//	save current checked status
			var	liAs = $(liA).attr('class'),
				liPs = $(liP).attr('class');
		//	take action based on checked status
			switch(liAs){
			case 'chkd': // check
			//	if parent, check all children
				if(liC) $(liC).addClass('chkd');
			//	if parent isn't .chkd, should it be?
				if(liPs != 'chkd'){
				//	disabled for top-level ul
				//	identified by inserted list item
					if(liP[0]){
					//	test siblings for .chkd
						var chkdStat = true;
						$(liB).each(function(){
							if(chkdStat == true){
								var liBs = $(this).attr('class');
								if(liBs != 'chkd')chkdStat = false;
							}
						});
					//	passed, parent is now .chkd
						if(chkdStat==true) $(liP).addClass('chkd');
					}
				} break;
			default: // uncheck
			//	if parent, uncheck all children
				if(liC) $(liC).removeClass('chkd');
			//	if parent is checked, uncheck it
				if(liPs == 'chkd') $(liP).removeClass('chkd');
			}
			return false;
		});
	//	select/deselect all
		$('.select-all').click(function(){
			var btnCmd = $(this).html();
			switch(btnCmd){
				case 'Select All':
					$('#trend-menu li').each(function(){
						$(this).addClass('chkd');
					});
					$('.select-all').html('Deselect All');
				break;
				case 'Deselect All':
					$('#trend-menu li').each(function(){
						$(this).removeClass('chkd');
					});
					$('.select-all').html('Select All');
				break;
				default:
					console.log(btnCmd);
			}
			return false;
		});
	//	switch view function
		$('.switch-view').click(function(){
			var btnCmd = $(this).html();
			switch(btnCmd){
				case 'Select Data':
					$('#trend-display').hide();
					$('#trend-menu').show();
					$('.switch-view').html('View Charts');
					$('.print-dialog').hide();
					$('.select-all').show();
					break;
				case 'View Charts':
					var chkdObjs = $('#trend-menu ul li ul li.chkd');
					if(typeof chkdObjs[0] !== 'undefined'){
					//	initialize
						$('#trend-display .dataGroup').hide();
						$('#trend-display .dataSet').hide();
					//	cycle through the selections
						$(chkdObjs).each(function(){
						//	href hashtag link is selector for chart 
							var chkdList = $(this).children('a').attr('href');
							$(chkdList).show();
							$(chkdList).parent('.dataGroup').show();
						});
					//	switch'em
						$('#trend-menu').hide();
						$('#trend-display').show();
						$('.switch-view').html('Select Data');
						$('.select-all').hide();
						$('.print-dialog').show();
					}else{
						alert('Please select data to view before clicking "View Charts."');
					}
					break;
				default:
					console.log(btnCmd);
			}
			return false;
		});
	}
	
	//	============
	//	5. UTILITIES
	//	============
	
	function inArray(val,arr){
	//	tests inclusion in an array
		for(i in arr){
			if(val == arr[i]) return true;
		}
		return false;
	}
	function transpose(arr) { // Credit: Shamasis Bhattacharya
	//	Calculate the width and height of the Array
		w = arr.length ? arr.length : 0,
		h = arr[0] instanceof Array ? arr[0].length : 0;
	//	In case it is a zero matrix, no transpose routine needed.
		if(h === 0 || w === 0) { return []; }
		var rowN, colN, newArr = [];
	//	Loop through every item in the outer array (height)
		for(rowN=0; rowN<h; rowN++) {
	 	//	Insert a new row (array)
			newArr[rowN] = [];
		//	Loop through every item per item in outer array (width)
			for(colN=0; colN<w; colN++) {
			//	Save transposed data
				newArr[rowN][colN] = arr[colN][rowN];
			}
		}
		return newArr;
	};
	function formatted(valu,type,deci){
	//	determine formatting!
		if(typeof valu == 'number'){
			if(valu<0){
				var isNeg = true; // mark as negative
				valu=-valu; // make positive
			}
		//	separate number at the decimal, should only ever be 1 or 2 parts
			var parts = valu.toString().split('.');
			if(type!='year'){
			//	 insert commas into number string before decimal
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				if(deci){
					if(!parts[1])parts[1]='0';
					if(deci>parts[1].length){
						diff=deci-parts[1].length;
					//	add trailing zeroes
						if(diff==1)parts[1]+='0';
						if(diff==2)parts[1]+='00';
						if(diff==3)parts[1]+='000';
					}
				}
			}
		//	create formatted strings
			switch(type){
				case 'money':
					if(isNeg==true){
						return '-$'+parts.join('.')+''; // to negative
					}else{
						return '$'+parts.join('.');
					}
					break;
				case 'percent':
					return parts.join('.')+'%';
					break;
				default:
					return parts.join('.');
			}
		}else{ // no changes
			return valu;
		}
	}