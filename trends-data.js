/*
	******************************************************************
	OSHPD HOSPITAL TRENDS 2012 DATA OBJECT
	******************************************************************
*/
	var HospitalFinancialData = {
		productName:'Hospital Financial Trends Data',
		Hospital_Characteristics:{	//	****************************************************************
			groupColor:priColor[1],
			
			by_type_of_control:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Hospitals by Type of Control (ALL)',
					med:'Hospitals by Type of Control',
					sml:'by Type of Control'
				},
				dataTable:[
					['Year','City/County','District','Investor-Owned','Non-Profit','State','Total'],
					//['2007',33,45,127,228,11,444],
					['2008',31,45,131,227,11,445],
					['2009',31,45,126,231,11,444],
					['2010',31,45,121,227,9,433],
					['2011',31,43,128,231,9,442],
					['2012',30,43,128,233,9,443],
				],
				dataFormat:['year','','','','',''],
				chartType: 'line',
				chartCols:[0,1,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[49],secColor[14],secColor[28],secColor[10],secColor[40]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'# Hospitals'
				},
			},
			
			by_type_of_care:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Hospitals by Type of Care (ALL)',
					med:'Hospitals by Type of Care',
					sml:'by Type of Care'
				},
				dataTable:[
					['Year','General Acute','Acute Psychiatric','Specialty','Total'],
					//['2007',359,52,33,444],
					['2008',357,58,30,445],
					['2009',355,58,31,444],
					['2010',352,54,27,433],
					['2011',356,58,28,442],
					['2012',357,56,30,443],
				],
				dataFormat:['year','','','','',''],
				chartType: 'line',
				chartCols:[0,1,2,3],
				chartRows:[],
				chartColor:[secColor[49],secColor[14],secColor[28]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'# Hospitals'
				},
			},
			/* OMIT
			by_report_type:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Hospitals by Report Type (ALL)',
					med:'Hospitals by Report Type',
					sml:'by Report Type'
				},
				dataTable:[
					['Year','Comparable Reports','Kaiser Hospitals','LTC Emphasis Hospitals','Psychiatric Health Facilities','Shriner Hospitals','State Hospitals','Total'],
					['2007',382,28,3,18,2,11,444],
					['2008',379,29,3,21,2,11,445],
					['2009',376,32,3,21,2,11,444],
					['2010',366,32,4,20,2,9,433],
					['2011',374,31,4,22,2,9,442],
				],
				dataFormat:['year','','','','',''],
				chartType: 'line',
				chartCols:[0,1,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[49],secColor[14],secColor[28],secColor[10],secColor[40],secColor[2]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'# Hospitals'
				},
			},
			*/
		//	end group	****************************************************************
		},
		Financial_Performance:{	//	****************************************************************
			groupColor:priColor[2],
			
			charges_v_net_rev:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Charges vs. Net Revenue (Payments) per Adjusted Day',
					med:'Charges vs. Net Revenue per Adjusted Day',
					sml:'Charges vs. Net Revenue'
				},dataSource:'#pivot-table-link',
				dataTable:[
					['Year','Charges','Net Revenue'],
					//['2007',8526,2253],
					['2008',9171,2397],
					['2009',10040,2568],
					['2010',10830,2777],
					['2011',11457,2948],
					['2012',12080,3073],
				],
				dataFormat:['year','money','money'],
				chartType: 'line',
				chartCols:[0,1,2],
				chartRows:[],
				chartColor:[secColor[49],secColor[14]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
			
			exp_v_net_rev:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Expense vs. Net Revenue (Payments) per Adjusted Day',
					med:'Expense vs. Net Revenue per Adjusted Day',
					sml:'Expense vs. Net Revenue'
				},dataSource:'#pivot-table-link',
				dataTable:[
					['Year','Net Revenue','Operating Expense'],
					//['2007',2253,2238],
					['2008',2397,2383],
					['2009',2568,2516],
					['2010',2777,2702],
					['2011',2948,2823],
					['2012',3073,2980],
				],
				dataFormat:['year','money','money'],
				chartType: 'line',
				chartCols:[0,1,2],
				chartRows:[],
				chartColor:[secColor[27],secColor[1]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
			
			oper_marg_v_net_income:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Operating Margin vs. Net Income',
					med:'Operating Margin vs. Net Income',
					sml:'Operating Margin vs. Net Income'
				},dataSource:'#pivot-table-link',
				dataTable:[
					['Year','Operating Margin','Net Income'],
					//['2007',375011665,3572386355],
					['2008',369175322,2081349722],
					['2009',1317411499,2539914251],
					['2010',1835910221,4135305165],
					['2011',3155517430,5834522220],
					['2012',2317884359,4666241076],
				],
				dataFormat:['year','money','money'],
				chartType: 'line',
				chartCols:[0,1,2],
				chartRows:[],
				chartColor:[secColor[24],secColor[38]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
			
			oper_marg_v_tot_marg:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Operating Margin vs. Total Margin',
					med:'Operating Margin vs. Total Margin',
					sml:'Operating Margin vs. Total Margin'
				},dataSource:'#pivot-table-link',
				dataTable:[
					['Year','Operating Margin','Total Margin'],
					//['2007',0.64,6.16],
					['2008',0.59,3.37],
					['2009',1.98,3.89],
					['2010',2.59,5.99],
					['2011',4.09,7.89],
					['2012',2.88,5.97],
				],
				dataFormat:['year','percent','percent'],
				reqDecimal:2,
				chartType: 'line',
				chartCols:[0,1,2],
				chartRows:[],
				chartColor:[secColor[24],secColor[38]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Percentage(%)'
				},
			},
			
			src_of_non_oper_rev:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Sources of Non-Operating Revenue',
					med:'Sources of Non-Operating Revenue',
					sml:'Non-Operating Revenue'
				},
				dataTable:[
					['Year','Contributions','Investments','District Assessments','County Funds'],
					//['2007',191354098,1047810183,126491590,1507715774],
					['2008',249589866,-144022474,130101594,1372418857],
					['2009',212650558,-303118769,84495444,1224740011],
					['2010',257014632,757683337,104974406,1137926557],
					['2011',412705580,912907631,112170956,1068006953],
					['2012',266390221,646801613,200159853,1062274665],
				],
				dataFormat:['year','money','money','money','money'],
				chartType: 'line',
				chartCols:[0,1,2,3,4],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
			
			with_pos_oper_marg:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Percent of Hospitals with Positive Operating Margin (Statewide)',
					med:'Percent of Hospitals with Positive Operating Margin',
					sml:'Hospitals with Positive Operating Margin'
				},
				dataTable:[
					['Year','City/County','District','Investor-Owned','Non-Profit','Statewide Average'],
					//['2007',9.5,24.4,50.4,69,54.7],
					['2008',21.1,24.4,64.2,64.6,57.5],
					['2009',31.6,31.1,68.7,71.1,63.6],
					['2010',21.1,35.6,77.5,71.2,66.1],
					['2011',21.1,39.5,77.8,70.8,66.8],
					['2012',16.7,25.6,73.3,66.8,61.7],
				],
				dataFormat:['year','percent','percent','percent','percent','percent'],
				reqDecimal:1,
				chartType: 'line',
				dashLine: {4:{lineDashStyle: [4,4]}},
				chartCols:[0,1,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],'black'],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Percentage(%)'
				},
			},
			
			with_pos_net_income:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Percent of Hospitals with Positive Net Income (Statewide)',
					med:'Percent of Hospitals with Positive Net Income',
					sml:'Hospitals with Positive Net Income'
				},
				dataTable:[
					['Year','City/County','District','Investor-Owned','Non-Profit','Statewide Average'],
					//['2007',57.1,53.3,52.1,78.7,66.2],
					['2008',47.4,64.4,65.8,66.2,64.9],
					['2009',47.4,68.9,70.4,68.5,68.1],
					['2010',47.4,71.1,81.1,79.1,77],
					['2011',78.9,76.7,79.5,73.3,75.9],
					['2012',66.7,55.8,76.7,74,72.4],
				],
				dataFormat:['year','percent','percent','percent','percent','percent'],
				reqDecimal:1,
				chartType: 'line',
				dashLine: {4:{lineDashStyle: [4,4]}},
				chartCols:[0,1,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],'black'],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Percentage(%)'
				},
			},
		//	end group	****************************************************************
		},
		Revenue_and_Expenses:{	//	****************************************************************
			groupColor:priColor[3],
			
			net_rev_per_adj_day_by_payer:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Net Revenue (Payments) per Patient Day by Payer Compared to Average Cost per Patient Day',
					med:'Net Revenue per Patient Day by Payer Compared to Average Cost per Patient Day',
					sml:'Net Revenue per Patient Day Compared to Average Cost per Patient'
				},
				dataTable:[
					['Year','Medicare','Medi-Cal','Other 3rd Parties','Indigent & Self-Pay','Average Cost per Patient Day'],
					//['2007',1989,1537,3882,1290,2238],
					['2008',2102,1618,4261,1093,2383],
					['2009',2305,1647,4616,1318,2516],
					['2010',2426,1943,5054,1255,2702],
					['2011',2497,2281,5388,1252,2823],
					['2012',2570,2402,5683,1237,2980],
				],
				dataFormat:['year','money','money','money','money','money'],
				chartType: 'line',
				dashLine: {4:{lineDashStyle: [4,4]}},
				chartCols:[0,1,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],'black'],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
			
			avg_reimb_percent_by_payer:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Average Reimbursement by Payer as a Percentage of Average Charges',
					med:'Average Reimbursement by Payer as a Percentage of Average Charges',
					sml:'Average Reimbursement by Payer as a Percentage of Average Charges'
				},
				dataTable:[
					['Year','Medicare','Medi-Cal','Other 3rd Parties','Indigent & Self-Pay','Average Payment Percentage'],
					//['2007',21.3,23.4,35.9,19.3,26.4],
					['2008',21.0,22.7,36.7,15.3,26.1],
					['2009',20.3,21.5,36.4,16.9,25.6],
					['2010',19.9,23.2,37.1,14.7,25.6],
					['2011',19.3,25.0,37.8,13.6,25.7],
					['2012',18.8,25.3,37.8,12.5,25.4],
				],
				dataFormat:['year','percent','percent','percent','percent','percent'],
				reqDecimal:1,
				chartType: 'line',
				dashLine: {4:{lineDashStyle: [4,4]}},
				chartCols:[0,1,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],'black'],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Percentage(%)'
				},
			},
			
			payment_mix_based_on_net_rev:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Payment Mix (Based on Net Revenue) For All Hospitals',
					med:'Payment Mix (Based on Net Revenue) For All Hospitals',
					sml:'Payment Mix For All Hospitals'
				},
				dataTable:[
					['Year','Medicare','Medi-Cal','Other 3rd Parties','Indigent & Self-Pay'],
					//['2007',31.1,18.9,44.9,5.1],
					['2008',31.1,18.7,46.3,3.9],
					['2009',30.9,18.2,46.3,4.5],
					['2010',30.6,20.0,45.4,4.1],
					['2011',30.0,22.3,43.9,3.8],
					['2012',29.6,22.1,44.6,3.8],
				],
				dataFormat:['year','percent','percent','percent','percent','percent'],
				reqDecimal:1,
				chartType: 'line',
				chartCols:[0,1,2,3,4],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Percentage(%)'
				},
			},
			
			uncomp_care_charges_percent_type_of_control:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Uncompensated Care Charges as a Percent of Charges by Type of Control (Statewide)',
					med:'Uncompensated Care Charges by Type of Control (Statewide)',
					sml:'Uncompensated Care Charges (Statewide)'
				},
				dataTable:[
					['Year','City/County','District','Investor','Non-Profit','Statewide Average'],
					//['2007',23.2,5.1,4.2,4.3,5.5],
					['2008',22.7,5.0,4.1,4.2,5.3],
					['2009',23.7,5.3,4.4,4.2,5.5],
					['2010',25.5,5.6,4.3,4.4,5.7],
					['2011',24.0,5.4,4.9,4.6,5.9],
					['2012',25.5,5.8,5.2,5,6.3],
				],
				dataFormat:['year','percent','percent','percent','percent','percent'],
				reqDecimal:1,
				chartType: 'line',
				dashLine: {3:{lineDashStyle: [4,4]}},
				chartCols:[0,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[49],secColor[14],secColor[27],'black'],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Percentage(%)'
				},
			},
			
			total_oper_exp:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Total Operating Expenses - Labor vs. Non-Labor',
					med:'Total Operating Expenses (Labor vs. Non-Labor)',
					sml:'Total Operating Expenses'
				},
				dataTable:[
					['Year','Non-Labor Expense','Labor Expense'],
					//['2007',27794716308,30178296243],
					['2008',29168353729,32580422177],
					['2009',30422229009,34919947032],
					['2010',32565194569,36422570228],
					['2011',35454851179,38535018749],
					['2012',38209874606,39927745131],
				],
				dataFormat:['year','money','money'],
				chartType: 'stacked',
				chartCols:[0,1,2],
				chartRows:[],
				chartColor:[secColor[24],secColor[38]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
			
			oper_exp_per_day:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Operating Expense per Adjusted Day by Expense Category',
					med:'Operating Expense per Adjusted Day',
					sml:'Operating Expense per Day'
				},
				dataTable:[
					['Year','Salaries & Benefits','Pro Fees','Supplies','Purchased Services','Depr., Leases & Interest','Insurance and All Other'],
					//['2007',1205,170,366,303,161,110],
					['2008',1301,176,383,318,173,113],
					['2009',1390,173,406,334,183,116],
					['2010',1473,172,422,352,194,176],
					['2011',1528,188,429,369,209,211],
					['2012',1589,205,441,397,235,243],
				],
				dataFormat:['year','money','money','money','money','money','money'],
				chartType: 'line',
				chartCols:[0,2,3,4,5,6],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],secColor[3],secColor[35]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
		//	end group	****************************************************************
		},
		
		Labor_Costs_and_Staffing:{	//	****************************************************************
			groupColor:priColor[4],
			
			labor_costs_per_fte:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Labor Costs per Paid Full-Time Equivalent (FTE)',
					med:'Labor Costs per Paid Full-Time Equivalent',
					sml:'Labor Costs per Paid FTE'
				},
				dataTable:[
					['Year','Labor Costs'],
					//['2007',81445],
					['2008',85553],
					['2009',90289],
					['2010',95222],
					['2011',98004],
					['2012',100774],
				],
				dataFormat:['year','money'],
				chartType: 'line',
				chartCols:[0,1],
				chartRows:[],
				chartColor:[secColor[24]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Dollars($)'
				},
			},
			/* OMIT!
			labor_costs_percent_of_oper:{	// ****************************************************************
			
				dataTitle:{
					lrg:'Labor Costs as a Percent of Total Operating Expenses',
					med:'Labor Costs: Percent of Total Operating Expenses',
					sml:'Labor Costs(%) Total Operating Expenses'
				},
				dataTable:[
					['Year','Labor Costs(%)'],
					['2007',52.1],
					['2008',52.8],
					['2009',53.4],
					['2010',52.8],
					['2011',52.1],					
				],
				dataFormat:['year','percent'],
				chartType: 'line',
				chartCols:[0,1],
				chartRows:[],
				chartColor:[secColor[24]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Percentage(%)'
				},
			},
			*/
			paid_fte_per_occ_bed:{	//	****************************************************************
			
				dataTitle:{
					lrg:'Paid FTEs per Adjusted Occupied Bed',
					med:'Paid FTEs per Occupied Bed',
					sml:'Paid FTEs per Bed'
				},
				dataTable:[
					['Year','Number of FTEs'],
					//['2007',5.44],
					['2008',5.57],
					['2009',5.65],
					['2010',5.64],
					['2011',5.74],
					['2012',5.82],
				],
				dataFormat:['year',''],
				chartType: 'line',
				chartCols:[0,1],
				chartRows:[],
				chartColor:[secColor[24]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'FTEs'
				},
			},
			
			productive_fte_by_emp_class:{ //	****************************************************************
			
				dataTitle:{
					lrg:'Productive FTEs by Employee Classification',
					med:'Productive FTEs by Classification',
					sml:'Productive FTEs'
				},
				dataTable:[
					['Year','Management & Supervision','Technician & Specialist','Registered Nurse','LVN, Aide & Orderlies','Clerical & Other Administrative','Environmental & Food Service','All Other'],
					//['2007',25983,73150,92361,34313,56658,21858,20836],
					['2008',26395,75136,95984,34095,56875,22420,20973],
					['2009',26661,77040,98288,33605,56402,22747,21742],
					['2010',26985,78335,97393,32259,55850,22726,21014],
					['2011',28653,80704,99795,32470,56005,22704,23054],
					['2012',29581,83122,101051,32746,55174,22769,22851],
				],
				dataFormat:['year'],
				chartType: 'line',
				chartCols:[0,1,2,3,4,5,6,7],
				chartRows:[],
				chartColor:[secColor[25],secColor[38],secColor[49],secColor[14],secColor[10],secColor[3],secColor[27]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'FTEs'
				},
			},
			
			
		//	end group	****************************************************************
		},
		
		Capacity_and_Utilization:{	//	****************************************************************
			groupColor:secColor[3],
			
			lic_bed_type_care:{     //      ****************************************************************
      
				dataTitle:{
					lrg:'Licensed Beds by Type of Care',
					med:'Licensed Beds by Care',
					sml:'Licensed Beds'
				},
				dataTable:[
					['Year','Psychiatric','Rehabilitation','Long-Term Care','All Other'],
					//['2007',6024,2382,8290,1088],
					['2008',6027,2261,7989,1056],
					['2009',5873,2301,7658,1042],
					['2010',5764,2253,7101,1024],
					['2011',5936,2341,6752,1033],
					['2012',5947,2382,6701,1048],
				],
				dataFormat:['year'],
				chartType: 'line',
				vBaseline: 0,
				chartCols:[0,1,2,3,4],
				chartRows:[],
				chartColor:[secColor[38],secColor[49],secColor[14],secColor[27]],
				chartLabels:{
					horzAxis: '',
					vertAxis: 'Beds'
				},
			},
			
			lic_bed_type_care_2:{     //      ****************************************************************
      
				dataTitle:{
					lrg:'Licensed Beds by Type of Care (General Acute)',
					med:'Licensed Beds by Care (General Acute)',
					sml:'Licensed Beds (General Acute)'
				},
				dataTable:[
					['Year','General Acute','All Other'],
					//['2007',62266,1088],
					['2008',60736,1056],
					['2009',61437,1042],
					['2010',60731,1024],
					['2011',63031,1033],
					['2012',63244,1048],
				],
				dataFormat:['year'],
				chartType: 'line',
				vBaseline: 0,
				chartCols:[0,1,2],
				chartRows:[],
				chartColor:[secColor[24],secColor[4]],
				chartLabels:{
					horzAxis: '',
					vertAxis: 'Beds'
				},
			},

			avg_dly_nmbr_inptnts:{     //      ****************************************************************
        
				dataTitle:{
					lrg:'Average Daily Number of Inpatients (Census) Statewide',
					med:'Average Daily Inpatients Statewide',
					sml:'Daily Inpatients'
				},
				dataTable:[
					['Year','Inpatients'],
					//['2007',48061],
					['2008',48322],
					['2009',47378],
					['2010',45778],
					['2011',46385],
					['2012',45444],
				],
				dataFormat:['year',''],
				chartType: 'line',
				vBaseline: 0,
				chartCols:[0,1],
				chartRows:[],
				chartColor:[secColor[24]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Daily Census'
				},
			},

			avg_lngth_stay:{     //      ****************************************************************
					
				dataTitle:{
					lrg:'Average Length of Stay (Days) by Payer ',
					med:'Average Length of Stay',
					sml:'Average Stay'
				},
				dataTable:[
					['Year','Medicare','Medi-Cal','Other 3rd Parties','Indigent & Self-Pay','Average'],
					//['2007',6.02,6.54,4.36,5.62,5.62],
					['2008',6.07,6.31,4.48,5.67,5.64],
					['2009',5.80,6.47,4.40,5.63,5.55],
					['2010',5.71,6.28,4.39,5.35,5.47],
					['2011',5.72,6.19,4.47,5.37,5.49],
					['2012',5.65,6.18,4.43,5.22,5.43],
				],
				dataFormat:['year'],
				reqDecimal:2,
				chartType: 'line',
				dashLine: {4:{lineDashStyle: [4,4]}},
				chartCols:[0,1,2,3,4,5],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],'black'],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Days'
				},
			},

			occ_rate_type_care:{     //      ****************************************************************
					
				dataTitle:{
					lrg:'Occupancy Rate (Licensed Beds) by Type of Care',
					med:'Occupancy by Type of Care',
					sml:'Occupancy by Care'
				},
				dataTable:[
					['Year','Acute','Psychiatric','Rehabilitation','Long-Term Care','All Other','All Types of Care'],
					//['2007',57.8,68.7,56.4,70.4,62.7,60.0],
					['2008',59.9,66.7,58.4,71.6,64.3,61.7],
					['2009',58.4,66.1,57.4,71.8,69.4,60.4],
					['2010',57.3,66.4,56.1,71.4,66.5,59.4],
					['2011',56.1,68.8,57.3,72.4,67.0,58.6],
					['2012',54.4,70.7,55.6,70.6,64.2,57.2],
				],
				dataFormat:['year'],
				reqDecimal:1,
				chartType: 'line',
				dashLine: {5:{lineDashStyle: [4,4]}},
				chartCols:[0,1,2,3,4,5,6],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],secColor[4],'black'],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Beds'
				},
			},

			ptnt_days_payer:{     //      ****************************************************************
					
				dataTitle:{
					lrg:'Patient Days by Payer (Excluding Nursery)',
					med:'Patient Days by Payer',
					sml:'Patient Days'
				},
				dataTable:[
					['Year','Medicare','Medi-Cal','Other 3rd Parties','Indigent & Self-Pay'],
					//['2007',6808723,5281135,4104525,1303342],
					['2008',6789557,5265328,4074773,1284248],
					['2009',6548264,5326000,3997454,1278649],
					['2010',6482348,5182712,3753087,1235587],
					['2011',6666924,5280896,3674697,1277570],
					['2012',6501691,5122769,3630263,1323189],
				],
				dataFormat:['year'],
				chartType: 'line',
				chartCols:[0,1,2,3,4],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Days'
				},
			},

			dschrg_payer:{     //      ****************************************************************
					
				dataTitle:{
					lrg:'Hospital Discharges by Payer (Excluding Nursery)',
					med:'Hospital Discharges by Payer',
					sml:'Discharges by Payer'
				},
				dataTable:[
					['Year','Other 3rd Parties','Medicare','Medi-Cal','Indigent & Self-Pay'],
					//['2007',941318,1131132,807751,231905],
					['2008',909337,1120907,834083,226617],
					['2009',908236,1129928,823229,227181],
					['2010',855623,1135161,825774,230741],
					['2011',821348,1164856,852877,237974],
					['2012',1150303,829253,818843,253636],
				],
				dataFormat:['year'],
				chartType: 'line',
				chartCols:[0,1,2,3,4],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],secColor[27],secColor[35]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Discharges'
				},
			},

			ouptnt_visit_pyr:{     //      ****************************************************************
					
				dataTitle:{
					lrg:'Outpatient Visits by Payer',
					med:'Outpatient Visits by Payer',
					sml:'Outpatient Visits'
				},
				dataTable:[
					['Year','Other 3rd Parties','Medicare','Medi-Cal','Indigent & Self-Pay'],
					//['2007',15770165,11690546,9812516,5585730],
					['2008',15942925,11812824,9672952,5339836],
					['2009',15784124,12215705,10583126,5857972],
					['2010',15736156,12373492,10776086,5941543],
					['2011',15513785,12995483,10755276,6077340],
					['2012',13308516,10356176,15396876,6057223],
				],
				dataFormat:['year'],
				chartType: 'line',
				chartCols:[0,1,2,3,4,5,6],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],secColor[27],secColor[35]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Visits'
				},
			},

			amb_svc_typ_visit:{     //      ****************************************************************
					
				dataTitle:{
					lrg:'Hospital Outpatient (O/P) Services by Type of Visit',
					med:'Hospital Outpatient (O/P) Services by Visit',
					sml:'Hospital Outpatient (O/P) Services'
				},
				dataTable:[
					['Year','Emergency Room','Clinics','O/P Surgeries','O/P Home Care','O/P Referred Visits'],
					//['2007',9837020,14155299,1140457,1704195,16145455],
					['2008',9960177,13779963,1086012,1706850,16384585],
					['2009',10578934,14341443,1067868,1638369,17014968],
					['2010',10514927,14290573,1043249,1559953,17443695],
					['2011',10994196,14813236,1047897,1541018,17279104],
					['2012',11245048,14706322,1026302,1587071,16931039],
				],
				dataFormat:['year'],
				chartType: 'line',
				chartCols:[0,1,2,3,4,5,6],
				chartRows:[],
				chartColor:[secColor[24],secColor[38],secColor[49],secColor[14],secColor[3],secColor[35]],
				chartLabels:{
					horzAxis:'',
					vertAxis:'Visits'
				},
			},
			
		//	end group	****************************************************************
		},

	// end data object	****************************************************************
	}