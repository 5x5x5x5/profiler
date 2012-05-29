var quality_data = [{name: "Country", type: "nominal", values: ["France","Australia","Switzerland","Germany","New Zealand","Luxembourg","United States","Belgium","Canada","Italy","Netherlands","Norway","Austria","Liechtenstein","Malta","Denmark","Spain","Finland","Uruguay","Hungary","Portugal","Lithuania","Andorra","Czech Republic","United Kingdom","Argentina","Slovenia","Monaco","Greece","Sweden","Chile","Estonia","Costa Rica","Panama","Poland","Japan","Croatia","Brazil","Ecuador","Latvia","Ireland","South Korea","Slovakia","Bulgaria","Cyprus (Greek)","Mexico","Israel","Iceland","Bermuda","Saint Kitts & Nevis","South Africa","Dominica","Romania","Cayman Islands","Moldova","Colombia","Taiwan","Bolivia","Macedonia","Barbados","Mauritius","Namibia","Belize","Paraguay","Albania","Bosnia-Herzegovina","Bahamas","Ukraine","Grenada","Singapore","Antigua & Barbuda","Turkey","Dominican Republic","Seychelles","Bhutan","Peru","Jamaica","Nicaragua","Botswana","Honduras","Suriname","Puerto Rico","Tunisia","Brunei","Malaysia","El Salvador","Guatemala","India","Venezuela","Cuba","Trinidad & Tobago","French Polynesia","Guyana","Tonga","Mongolia","Nauru","China","Georgia","Ghana","Maldives","Armenia","Lesotho","Martinique","Jordan","Philippines","Kuwait","Kiribati","French Guiana","Belarus","Thailand","Russia","Zambia","Lebanon","Palau","Malawi","Morocco","Samoa (Western Samoa)","Swaziland","Bahrain","Fiji","Sri Lanka","Madagascar","Tuvalu","Syria","Vietnam","Comoros","Nepal","Qatar","Indonesia","Macau","Vanuatu","Senegal","Solomon Islands","Tajikistan","Egypt","Benin","Kenya","Kyrgyzstan","Azerbaijan","North Korea","United Arab Emirates","Cape Verde","Marshall Islands","Tanzania","Bangladesh","Algeria","Uganda","Uzbekistan","Cambodia","Iran","Mozambique","Gambia","Papua New Guinea","Mayotte","Kazakhstan","Mali","Libya","Guinea-Bissau","Micronesia","Togo","Myanmar (Burma)","Turkmenistan","Ethiopia","Republic of the Congo","Rwanda","Nigeria","Gabon","Oman","Saudi Arabia","Iraq","Laos","Cameroon","Mauritania","Niger","Burkina Faso","Equatorial Guinea","Burundi","Pakistan","Haiti","Zimbabwe","Central African Republic","Cote d'Ivoire","Liberia","Democratic Republic of the Congo","Angola","Guinea","Eritrea","Djibouti","Sierra Leone","Afghanistan","Chad","Sudan","Yemen","Somalia"]}
,{name: "Cost_of_Living", type: "numeric", values: [55,56,41,54,62,44,56,41,62,56,48,39,41,44,63,33,56,39,60,58,55,63,52,48,30,61,53,44,52,0,60,60,62,62,51,24,58,64,72,59,28,39,48,61,48,63,39,36,25,64,59,65,51,61,69,68,50,80,66,35,65,66,60,76,60,73,28,49,55,51,54,49,58,59,80,66,58,66,70,70,65,55,63,65,70,63,61,65,54,63,30,44,63,70,68,86,63,56,61,63,64,70,63,56,69,46,75,49,65,68,29,56,68,59,60,43,55,56,59,53,64,61,80,69,54,61,73,54,46,46,54,50,69,74,55,60,51,59,48,64,49,60,73,55,65,51,54,70,61,65,65,61,54,79,50,61,29,65,59,54,75,84,55,53,55,45,46,50,60,100,68,50,56,61,61,41,53,56,60,33,60,55,58,35,43,66,61,53,63,88,45,53,58,61]}
,{name: "Leisure_&_Culture", type: "numeric",values: [81,82,86,82,82,76,79,83,76,85,71,60,86,80,70,88,68,93,72,76,72,68,74,78,82,67,69,85,64,94,67,82,64,63,74,92,68,58,60,75,81,82,60,69,65,65,83,85,57,44,60,39,74,39,86,58,47,61,64,78,61,75,47,60,61,65,67,61,53,71,56,60,47,58,28,53,44,57,40,32,44,43,61,60,71,43,39,39,67,75,36,56,61,25,60,8,59,38,28,63,53,38,36,60,60,60,13,33,44,65,67,43,56,47,40,35,22,51,67,65,35,28,4,49,53,36,19,63,44,43,36,18,28,25,49,24,46,42,60,54,53,29,19,28,30,51,33,52,53,54,4,10,22,4,43,13,50,21,36,43,35,22,11,39,21,29,14,44,68,49,19,29,13,3,6,46,25,3,19,58,25,25,39,29,36,14,24,13,7,7,10,19,21,0]}
,{name: "Economy",type: "numeric", values: [69,71,79,71,65,85,67,66,69,63,69,89,68,100,53,69,63,66,52,48,52,48,61,52,65,52,56,66,58,68,54,44,53,52,52,51,48,65,45,40,60,56,52,47,58,50,61,40,89,45,45,44,48,65,45,48,58,45,45,48,47,42,50,44,45,45,56,42,44,68,53,45,45,48,58,50,40,42,45,42,47,45,45,69,48,42,44,55,48,44,53,45,42,40,47,47,69,40,44,45,45,44,47,45,42,74,42,47,50,44,53,44,50,48,45,44,39,42,61,40,44,44,42,44,44,37,42,92,47,62,45,42,45,45,47,42,39,45,50,42,76,44,39,44,42,44,44,47,42,50,44,44,45,40,44,42,52,40,40,39,40,48,48,44,47,44,45,53,53,45,45,42,40,45,42,58,40,42,39,0,39,40,44,42,52,42,39,44,42,40,37,44,40,39]}
,{name: "Environment", type: "numeric",values: [72,76,78,83,77,77,62,64,62,74,67,76,87,65,84,84,75,68,72,77,74,81,60,74,72,71,74,59,70,75,71,77,78,77,72,71,77,71,93,86,70,68,71,78,62,68,68,74,41,72,75,90,75,26,75,72,75,75,72,72,74,46,80,64,74,70,74,74,75,39,74,68,81,78,83,70,77,70,78,70,78,42,68,100,62,65,74,68,84,77,78,33,77,65,70,64,54,80,67,36,81,41,38,59,68,42,57,29,75,61,71,71,65,70,68,67,68,81,64,68,78,59,30,61,71,74,68,54,74,0,33,67,61,67,65,64,62,70,71,51,16,36,26,74,62,67,61,62,77,71,70,61,64,17,65,62,51,64,42,64,71,61,67,61,68,62,65,62,51,41,74,65,58,64,65,75,57,67,61,77,72,67,57,58,67,61,29,65,62,77,68,65,19,55]}
,{name: "Freedom", type: "numeric",values: [100,100,100,100,100,100,92,100,100,92,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,83,100,92,92,100,100,100,100,92,100,92,83,83,75,92,100,92,100,83,100,75,92,100,92,100,83,100,83,92,50,58,92,67,67,100,92,83,92,67,67,58,100,75,92,42,83,67,83,67,42,75,75,67,83,67,83,100,17,25,50,75,58,75,50,8,83,92,75,50,83,100,8,50,92,50,33,75,92,33,58,50,100,92,8,42,42,67,42,100,50,42,83,17,33,25,50,58,100,8,33,58,50,25,75,50,83,67,58,25,25,83,58,42,25,0,25,100,100,58,50,25,42,0,25,17,67,42,58,92,25,75,0,50,100,33,0,0,33,25,25,42,33,25,8,17,8,17,25,58,50,0,42,42,42,8,33,25,58,17,25,17,8,33,67,8,8,0,33,0]}
,{name: "Health", type: "numeric",values: [100,87,95,89,88,87,78,88,84,90,87,90,85,80,89,86,90,81,76,84,86,80,85,82,84,82,72,80,84,82,73,75,78,72,80,89,76,73,69,75,79,81,79,78,85,76,85,86,73,70,57,68,65,86,67,72,68,59,62,62,72,41,55,71,74,67,62,68,66,74,50,76,69,52,27,56,71,66,35,66,59,72,73,52,68,70,65,60,66,79,63,60,56,66,56,55,67,62,40,66,46,30,64,80,46,70,54,54,51,63,71,19,85,52,32,63,68,27,43,59,52,37,75,68,58,36,42,47,52,61,51,36,61,50,76,37,32,58,40,70,76,49,70,30,36,51,33,62,30,69,12,39,36,40,60,25,71,31,66,33,50,41,13,28,31,27,44,56,71,55,30,30,34,21,27,28,30,51,39,37,23,37,14,26,1,35,28,34,9,0,14,28,38,7]}
,{name: "Infrastructure", type: "numeric",values: [92,92,96,90,70,66,100,96,85,62,92,89,68,44,52,72,65,76,64,77,56,56,58,78,80,56,56,48,64,92,73,64,48,74,64,64,52,59,45,64,72,52,68,48,36,57,36,48,64,54,44,36,56,64,56,44,51,52,44,40,32,64,52,36,36,40,32,60,48,69,32,40,40,36,40,32,52,36,44,40,59,36,36,44,44,36,32,44,32,56,32,44,44,36,52,0,40,48,40,32,44,36,4,28,36,56,12,66,52,32,48,40,36,8,40,36,46,40,32,60,44,40,20,44,36,36,36,24,32,24,40,40,16,40,36,36,32,32,40,28,58,32,8,44,52,36,36,44,40,40,32,44,40,0,52,32,44,36,0,36,44,16,40,40,36,44,52,44,28,36,40,36,36,40,28,36,36,40,36,44,36,32,40,44,36,40,36,44,36,32,36,40,52,36]}
,{name: "Risk_&_Safety", type: "numeric",values: [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,93,100,100,100,100,100,100,100,100,100,100,100,86,93,93,86,100,93,83,86,86,100,93,86,86,100,79,71,86,100,100,86,100,79,100,71,71,79,57,79,100,93,86,79,86,71,71,100,71,86,100,100,86,79,100,100,64,79,71,79,71,64,100,86,79,86,79,71,64,71,57,100,100,64,100,64,100,57,57,71,100,64,71,100,71,71,71,100,100,64,71,57,64,21,86,64,93,79,86,86,71,71,64,100,71,64,100,64,79,57,100,79,79,79,50,79,64,57,64,64,64,79,64,86,64,57,36,64,57,64,0,64,71,57,100,64,64,71,64,71,64,57,64,57,64,64,64,64,64,36,0,57,64,71,57,64,50,36,7,36,57,36,43,36,64,57,57,57,57,21,0,36,29,21,36]}
,{name: "Climate", type: "numeric",values: [87,87,77,79,84,83,84,86,69,87,75,60,76,79,95,78,79,76,93,76,83,79,82,67,66,91,83,89,79,68,59,74,79,69,76,84,95,82,96,73,65,83,77,80,76,92,84,74,66,57,98,57,71,57,70,92,68,83,79,57,42,74,62,68,89,82,65,78,57,39,57,73,57,55,79,80,57,68,65,83,39,45,85,25,24,57,84,47,52,63,57,55,39,63,14,38,79,79,62,49,72,93,57,68,45,18,38,28,77,43,64,89,61,18,89,78,35,91,30,43,40,87,17,60,67,40,71,13,47,79,49,73,43,79,32,51,88,47,62,79,10,36,23,51,49,89,80,40,47,64,76,60,55,46,27,50,67,47,5,58,35,61,86,62,62,58,49,2,22,38,51,66,64,42,48,55,75,77,53,100,54,55,28,62,52,22,73,8,24,58,50,7,0,16]}
,{name: "Final", type: "numeric",values: [82,81,81,81,79,78,78,78,77,77,77,77,77,76,76,76,76,75,75,74,73,73,73,73,73,72,72,72,72,71,71,71,71,71,71,70,70,70,70,70,70,69,69,69,68,68,67,67,66,66,66,65,65,65,65,64,64,64,63,63,63,63,63,63,63,63,63,62,62,61,61,61,61,61,61,60,60,60,60,60,60,59,59,59,58,58,58,58,58,57,57,57,57,57,57,56,56,56,56,56,56,55,55,55,55,55,55,55,54,54,54,54,54,54,54,54,54,54,54,53,53,53,53,53,53,53,52,52,52,52,52,52,52,51,51,51,51,51,51,51,50,50,50,50,50,50,50,49,49,49,49,48,48,48,48,48,48,47,47,47,46,46,46,46,46,46,46,45,45,45,45,45,45,44,44,44,44,43,43,43,43,43,42,42,42,41,40,40,38,37,34,33,33,30]}
]