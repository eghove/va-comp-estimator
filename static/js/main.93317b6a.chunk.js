(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(7),s=t.n(l),i=(t(15),t(1)),_=t(2),c=t(4),r=t(3),p=t(5);t(16);var d=function(){return o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",{className:"display-5"},"Welcome to the VA Disability Compensation Estimator"),o.a.createElement("p",{className:"lead"},"Use this tool to estimate your monthly VA Disability Compensation benefits based on your combined evaluation for compensation."),o.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#multiCollapseExample2","aria-expanded":"false","aria-controls":"multiCollapseExample2"},"Definitions"),o.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#multiCollapseExample3","aria-expanded":"false","aria-controls":"multiCollapseExample3"},"About"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"collapse multi-collapse",id:"multiCollapseExample2"},o.a.createElement("div",{className:"card card-body"},o.a.createElement("h5",null,"Definitions"),o.a.createElement("p",null,o.a.createElement("b",null,"Effective Date:")," The date from which you wish to estimate benefits. Rates generally change on December 1 each year."),o.a.createElement("p",null,o.a.createElement("b",null,"Spouse Aid and Attendance:")," An additional monthly benefit awarded if your spouse meets certain medical criteria."),o.a.createElement("p",null,o.a.createElement("b",null,"Dependent Parents:")," Parents who meet certain criteria demonstrating their financial dependence upon you."),o.a.createElement("p",null,o.a.createElement("b",null,"Minor Children:")," Biological, adopted, or step children under the age of 18."),o.a.createElement("p",null,o.a.createElement("b",null,"School Children:")," Biological, adopted, or step children between the ages of 18 and 23 who are attending school."),o.a.createElement("p",null,o.a.createElement("b",null,"Combined Evaluation for Compensation:")," Usually found near the end of the Rating Codesheet. This is the percentage upon which benefits are based."),o.a.createElement("p",null,"To file a claim for disability compensation, please visit ",o.a.createElement("a",{href:"https://www.va.gov/disability/how-to-file-claim/",target:"_blank",rel:"noopener noreferrer"},"https://www.va.gov/disability/how-to-file-claim/"),".")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"collapse multi-collapse",id:"multiCollapseExample3"},o.a.createElement("div",{className:"card card-body"},o.a.createElement("h5",null,"About"),o.a.createElement("p",null,"Version 1 of this estimator was built by Eric Hove in Spring 2019."),o.a.createElement("p",null,"The GitHub repository for this project may be found ",o.a.createElement("a",{href:"https://github.com/eghove/va-comp-estimator",target:"_blank",rel:"noopener noreferrer"},"here.")),o.a.createElement("p",null,"You may learn more about Eric Hove by visiting ",o.a.createElement("a",{href:"https://eghove.github.io/",target:"_blank",rel:"noopener noreferrer"},"here.")),o.a.createElement("p",null,o.a.createElement("b",null,"Disclaimer:")," The VA Disability Compensation Estimator is not affiliated with the U.S. Department of Veterans Affairs, and is intended for educational purposes only. Any estimate displayed is unofficial and should not be construed as a promise of monetary benefits. To file a claim for disability compensation, please visit ",o.a.createElement("a",{href:"https://www.va.gov/disability/how-to-file-claim/",target:"_blank",rel:"noopener noreferrer"},"https://www.va.gov/disability/how-to-file-claim/"),"."))))))},h=t(8);t(17);var u=function(e){return"single"===e.maritalStatus?o.a.createElement("p",null,o.a.createElement("b",null,"Single "),"or Married"):o.a.createElement("p",null,"Single or ",o.a.createElement("b",null,"Married"))};var m=function(e){return"no"===e.aidAttend?o.a.createElement("p",{className:"special-mobile"},o.a.createElement("b",null,"No "),"or Yes"):o.a.createElement("p",{className:"special-mobile"},"No or ",o.a.createElement("b",null,"Yes"))};t(18);var w=function(e){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 offset-md-3 output-box text-center"},o.a.createElement("h3",null,"Estimated Monthly Payment"),o.a.createElement("br",null),o.a.createElement("h3",null,"$",e.result))))};t(19);var E=function(e){return o.a.createElement("footer",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("p",null,e.text)))},f={"10%":133.17,"20%":263.23,"30%":{single:407.75,spouse_only:455.75,spouse_one_parent:494.75,spouse_two_parent:533.74,one_parent:446.75,two_parents:485.75,spouse_aa_allowance:44,spouse_one_child:491.75,child_only:439.75,spouse_one_parent_child:530.75,spouse_two_parents_child:569.75,one_parent_child:478.75,two_parents_child:517.75,additional_minor_child:24,additional_school_child:78},"40%":{single:587.36,spouse_only:651.36,spouse_one_parent:703.36,spouse_two_parent:755.36,one_parent:639.36,two_parents:691.36,spouse_aa_allowance:59,spouse_one_child:699.36,child_only:630.36,spouse_one_parent_child:751.36,spouse_two_parents_child:803.36,one_parent_child:682.36,two_parents_child:734.36,additional_minor_child:32,additional_school_child:104},"50%":{single:836.13,spouse_only:917.13,spouse_one_parent:982.13,spouse_two_parent:1047.13,one_parent:901.13,two_parents:966.13,spouse_aa_allowance:74,spouse_one_child:976.13,child_only:890.13,spouse_one_parent_child:1041.13,spouse_two_parents_child:1106.13,one_parent_child:955.13,two_parents_child:1020.13,additional_minor_child:40,additional_school_child:130},"60%":{single:1059.09,spouse_only:1156.09,spouse_one_parent:1234.09,spouse_two_parent:1312.09,one_parent:1137.09,two_parents:1215.09,spouse_aa_allowance:89,spouse_one_child:1227.09,child_only:1124.09,spouse_one_parent_child:1305.09,spouse_two_parents_child:1383.09,one_parent_child:1202.09,two_parents_child:1280.09,additional_minor_child:48,additional_school_child:156},"70%":{single:1334.71,spouse_only:1447.71,spouse_one_parent:1538.71,spouse_two_parent:1629.71,one_parent:1425.71,two_parents:1516.71,spouse_aa_allowance:104,spouse_one_child:1530.71,child_only:1409.71,spouse_one_parent_child:1621.71,spouse_two_parents_child:1712.71,one_parent_child:1500.71,two_parents_child:1591.71,additional_minor_child:56,additional_school_child:182},"80%":{single:1551.48,spouse_only:1680.48,spouse_one_parent:1784.48,spouse_two_parent:1888.48,one_parent:1655.48,two_parents:1759.48,spouse_aa_allowance:118,spouse_one_child:1175.48,child_only:1637.48,spouse_one_parent_child:1879.48,spouse_two_parents_child:1983.48,one_parent_child:1741.48,two_parents_child:1845.48,additional_minor_child:64,additional_school_child:208},"90%":{single:1743.48,spouse_only:1888.48,spouse_one_parent:2005.48,spouse_two_parent:2122.48,one_parent:1860.48,two_parents:1977.48,spouse_aa_allowance:133,spouse_one_child:1995.48,child_only:1840.48,spouse_one_parent_child:2112.48,spouse_two_parents_child:2229.48,one_parent_child:1957.48,two_parents_child:2074.48,additional_minor_child:72,additional_school_child:234},"100%":{single:2906.83,spouse_only:3068.9,spouse_one_parent:3198.96,spouse_two_parent:3329.02,one_parent:3036.89,two_parents:3166.95,spouse_aa_allowance:148.64,spouse_one_child:3187.6,child_only:3015.22,spouse_one_parent_child:3317.66,spouse_two_parents_child:3447.72,one_parent_child:3145.28,two_parents_child:3275.48,additional_minor_child:80.52,additional_school_child:260.13}},y={"10%":133.57,"20%":264.02,"30%":{single:408.97,spouse_only:456.97,spouse_one_parent:495.97,spouse_two_parent:534.97,one_parent:447.97,two_parents:486.97,spouse_aa_allowance:45,spouse_one_child:492.97,child_only:440.97,spouse_one_parent_child:531.97,spouse_two_parents_child:570.97,one_parent_child:479.97,two_parents_child:518.97,additional_minor_child:24,additional_school_child:78},"40%":{single:589.12,spouse_only:654.12,spouse_one_parent:706.12,spouse_two_parent:758.12,one_parent:641.12,two_parents:693.12,spouse_aa_allowance:59,spouse_one_child:702.12,child_only:632.12,spouse_one_parent_child:754.12,spouse_two_parents_child:806.12,one_parent_child:684.12,two_parents_child:736.12,additional_minor_child:32,additional_school_child:104},"50%":{single:838.64,spouse_only:919.64,spouse_one_parent:984.64,spouse_two_parent:1049.64,one_parent:903.64,two_parents:968.64,spouse_aa_allowance:74,spouse_one_child:978.64,child_only:892.64,spouse_one_parent_child:1043.64,spouse_two_parents_child:1108.64,one_parent_child:957.64,two_parents_child:1022.64,additional_minor_child:40,additional_school_child:130},"60%":{single:1062.27,spouse_only:1159.27,spouse_one_parent:1237.27,spouse_two_parent:1315.27,one_parent:1140.27,two_parents:1218.27,spouse_aa_allowance:89,spouse_one_child:1230.27,child_only:1127.27,spouse_one_parent_child:1308.27,spouse_two_parents_child:1386.27,one_parent_child:1205.27,two_parents_child:1283.27,additional_minor_child:48,additional_school_child:156},"70%":{single:1338.71,spouse_only:1451.71,spouse_one_parent:1542.71,spouse_two_parent:1633.71,one_parent:1429.71,two_parents:1520.71,spouse_aa_allowance:105,spouse_one_child:1534.71,child_only:1414.71,spouse_one_parent_child:1625.71,spouse_two_parents_child:1716.71,one_parent_child:1505.71,two_parents_child:1596.71,additional_minor_child:56,additional_school_child:182},"80%":{single:1556.13,spouse_only:1686.13,spouse_one_parent:1790.13,spouse_two_parent:1849.13,one_parent:1660.13,two_parents:1764.13,spouse_aa_allowance:119,spouse_one_child:1781.13,child_only:1642.13,spouse_one_parent_child:1885.13,spouse_two_parents_child:1989.13,one_parent_child:1746.13,two_parents_child:1850.13,additional_minor_child:64,additional_school_child:208},"90%":{single:1748.71,spouse_only:1894.71,spouse_one_parent:2011.71,spouse_two_parent:2128.71,one_parent:1865.71,two_parents:1982.71,spouse_aa_allowance:134,spouse_one_child:2001.71,child_only:1845.71,spouse_one_parent_child:2118.71,spouse_two_parents_child:2235.71,one_parent_child:1962.71,two_parents_child:2079.71,additional_minor_child:72,additional_school_child:234},"100%":{single:2915.55,spouse_only:3078.11,spouse_one_parent:3208.56,spouse_two_parent:3339.01,one_parent:3046,two_parents:3176.45,spouse_aa_allowance:149.08,spouse_one_child:3197.16,child_only:3024.27,spouse_one_parent_child:3327.61,spouse_two_parents_child:3458.06,one_parent_child:3154.72,two_parents_child:3285.17,additional_minor_child:80.76,additional_school_child:260.91}},g={"10%":136.24,"20%":269.3,"30%":{single:417.15,spouse_only:466.15,spouse_one_parent:505.15,spouse_two_parent:544.15,one_parent:456.15,two_parents:495.15,spouse_aa_allowance:46,spouse_one_child:503.15,child_only:450.15,spouse_one_parent_child:542.15,spouse_two_parents_child:581.15,one_parent_child:489.15,two_parents_child:528.15,additional_minor_child:24,additional_school_child:79},"40%":{single:600.9,spouse_only:666.9,spouse_one_parent:719.9,spouse_two_parent:772.9,one_parent:653.9,two_parents:706.9,spouse_aa_allowance:61,spouse_one_child:714.9,child_only:644.9,spouse_one_parent_child:767.9,spouse_two_parents_child:820.9,one_parent_child:697.9,two_parents_child:750.9,additional_minor_child:32,additional_school_child:106},"50%":{single:855.41,spouse_only:937.41,spouse_one_parent:1003.41,spouse_two_parent:1069.41,one_parent:921.41,two_parents:987.41,spouse_aa_allowance:76,spouse_one_child:998.41,child_only:910.41,spouse_one_parent_child:1064.41,spouse_two_parents_child:1130.41,one_parent_child:976.41,two_parents_child:1042.41,additional_minor_child:41,additional_school_child:133},"60%":{single:1083.52,spouse_only:1182.52,spouse_one_parent:1261.52,spouse_two_parent:1340.52,one_parent:1162.52,two_parents:1241.52,spouse_aa_allowance:91,spouse_one_child:1255.52,child_only:1149.52,spouse_one_parent_child:1334.52,spouse_two_parents_child:1413.52,one_parent_child:1228.52,two_parents_child:1307.52,additional_minor_child:49,additional_school_child:159},"70%":{single:1365.48,spouse_only:1481.48,spouse_one_parent:1574.48,spouse_two_parent:1667.48,one_parent:1458.48,two_parents:1551.48,spouse_aa_allowance:106,spouse_one_child:1566.48,child_only:1442.48,spouse_one_parent_child:1659.48,spouse_two_parents_child:1752.48,one_parent_child:1535.48,two_parents_child:1628.48,additional_minor_child:57,additional_school_child:186},"80%":{single:1587.25,spouse_only:1719.25,spouse_one_parent:1825.25,spouse_two_parent:1931.25,one_parent:1639.25,two_parents:1799.24,spouse_aa_allowance:122,spouse_one_child:1816.25,child_only:1675.25,spouse_one_parent_child:1922.25,spouse_two_parents_child:2028.25,one_parent_child:1781.25,two_parents_child:1887.25,additional_minor_child:65,additional_school_child:212},"90%":{single:1783.68,spouse_only:1932.68,spouse_one_parent:2051.68,spouse_two_parent:2170.68,one_parent:2170.68,two_parents:1902.68,spouse_aa_allowance:137,spouse_one_child:2041.68,child_only:1882.68,spouse_one_parent_child:2160.68,spouse_two_parents_child:2279.68,one_parent_child:2001.68,two_parents_child:2120.68,additional_minor_child:74,additional_school_child:239},"100%":{single:2973.86,spouse_only:3139.67,spouse_one_parent:3272.73,spouse_two_parent:3405.79,one_parent:3106.92,two_parents:3239.98,spouse_aa_allowance:152.06,spouse_one_child:3261.1,child_only:3048.75,spouse_one_parent_child:3394.16,spouse_two_parents_child:3527.22,one_parent_child:3217.81,two_parents_child:3350.87,additional_minor_child:82.38,additional_school_child:266.13}},v={"10%":140.05,"20%":276.84,"30%":{single:428.83,spouse_only:479.83,spouse_one_parent:520.83,spouse_two_parent:561.83,one_parent:469.83,two_parents:510.83,spouse_aa_allowance:47,spouse_one_child:516.83,child_only:462.83,spouse_one_parent_child:557.83,spouse_two_parents_child:598.83,one_parent_child:503.83,two_parents_child:544.83,additional_minor_child:25,additional_school_child:82},"40%":{single:617.73,spouse_only:685.73,spouse_one_parent:739.73,spouse_two_parent:793.73,one_parent:671.73,two_parents:725.73,spouse_aa_allowance:62,spouse_one_child:735.73,child_only:662.73,spouse_one_parent_child:789.73,spouse_two_parents_child:843.73,one_parent_child:716.73,two_parents_child:770.73,additional_minor_child:33,additional_school_child:109},"50%":{single:879.36,spouse_only:964.36,spouse_one_parent:1032.36,spouse_two_parent:1100.36,one_parent:947.36,two_parents:1015.36,spouse_aa_allowance:78,spouse_one_child:1026.36,child_only:935.36,spouse_one_parent_child:1094.36,spouse_two_parents_child:1162.36,one_parent_child:1003.36,two_parents_child:1071.36,additional_minor_child:42,additional_school_child:136},"60%":{single:1113.86,spouse_only:1215.86,spouse_one_parent:1297.86,spouse_two_parent:1379.86,one_parent:1195.86,two_parents:1277.86,spouse_aa_allowance:94,spouse_one_child:1290.86,child_only:1181.86,spouse_one_parent_child:1372.86,spouse_two_parents_child:1454.86,one_parent_child:1263.86,two_parents_child:1345.86,additional_minor_child:50,additional_school_child:164},"70%":{single:1403.71,spouse_only:1522.71,spouse_one_parent:1617.71,spouse_two_parent:1712.71,one_parent:1498.71,two_parents:1593.71,spouse_aa_allowance:109,spouse_one_child:1609.71,child_only:1482.71,spouse_one_parent_child:1704.71,spouse_two_parents_child:1799.71,one_parent_child:1577.71,two_parents_child:1672.71,additional_minor_child:59,additional_school_child:191},"80%":{single:1631.69,spouse_only:1767.69,spouse_one_parent:1876.69,spouse_two_parent:1985.69,one_parent:1740.69,two_parents:1849.69,spouse_aa_allowance:125,spouse_one_child:1867.69,child_only:1722.69,spouse_one_parent_child:1976.69,spouse_two_parents_child:2085.69,one_parent_child:1831.69,two_parents_child:1940.69,additional_minor_child:67,additional_school_child:218},"90%":{single:1833.62,spouse_only:1986.62,spouse_one_parent:2109.62,spouse_two_parent:2232.62,one_parent:1956.62,two_parents:2079.62,spouse_aa_allowance:141,spouse_one_child:2098.62,child_only:1935.62,spouse_one_parent_child:2221.62,spouse_two_parents_child:2344.62,one_parent_child:2058.62,two_parents_child:2181.62,additional_minor_child:76,additional_school_child:246},"100%":{single:3057.13,spouse_only:3227.58,spouse_one_parent:3364.37,spouse_two_parent:3501.16,one_parent:3193.92,two_parents:3330.71,spouse_aa_allowance:156.32,spouse_one_child:3352.41,child_only:3171.12,spouse_one_parent_child:3489.2,spouse_two_parents_child:3625.99,one_parent_child:3307.91,two_parents_child:3444.7,additional_minor_child:84.69,additional_school_child:273.58}},b={rateTable:function(e){var a="20181201";return"20141201"===e?a=f:"20161201"===e?a=y:"20171201"===e?a=g:"20181201"===e&&(a=v),a},lookUp:function(e,a,t,n,o,l,s){var i=a+"%",_=b.rateTable(e),c=parseInt(o)+parseInt(l),r=0;if("10%"===i||"20%"===i)r=_[i];else if("30%"===i||"40%"===i||"50%"===i||"60%"===i||"70%"===i||"80%"===i||"90%"===i||"100%"===i){var p=function(e,a,t){var n=parseInt(a),o=parseInt(t);n>0&&o>0?(n-=1,console.log("New Total Minor: "+n)):n<=0?o-=1:o<=0?n-=1:console.log("something has gone wrong");var l=n*_[e].additional_minor_child+o*_[e].additional_school_child;r+=l};"married"===t?("yes"===s&&(r+=_[i].spouse_aa_allowance),"0"===n&&"0"===o&&"0"===l&&(r+=_[i].spouse_only),"1"===n&&"0"===o&&"0"===l&&(r+=_[i].spouse_one_parent),"2"===n&&"0"===o&&"0"===l&&(r+=_[i].spouse_two_parent),"0"===n&&1===c&&(r+=_[i].spouse_one_child),"0"===n&&c>1&&(p(i,o,l),r+=_[i].spouse_one_child),"1"===n&&1===c&&(r+=_[i].spouse_one_parent_child),"1"===n&&c>1&&(p(i,o,l),r+=_[i].spouse_one_parent_child),"2"===n&&1===c&&(r+=_[i].spouse_two_parents_child),"2"===n&&c>1&&(p(i,o,l),r+=_[i].spouse_two_parents_child)):"single"===t?("0"===n&&"0"===o&&"0"===l&&(r=_[i].single),"1"===n&&"0"===o&&"0"===l&&(r=_[i].one_parent),"2"===n&&"0"===o&&"0"===l&&(r=_[i].two_parents),"0"===n&&1===c&&(r=_[i].child_only),"0"===n&&c>1&&(p(i,o,l),r+=_[i].child_only),"1"===n&&1===c&&(r=_[i].one_parent_child),"1"===n&&c>1&&(p(i,o,l),r+=_[i].one_parent_child),"2"===n&&1===c&&(r+=_[i].two_parents_child),"2"===n&&c>1&&(p(i,o,l),r+=_[i].two_parents_child)):r=0}return r=r.toFixed(2),r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},N=b,C=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(o)))).state={effectiveDate:0,maritalStatus:0,spAidandAttendance:0,depParents:0,depChildren18:0,depChildrenSchool:0,compEval:0,monthlyRate:0},t.handleChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value),function(){console.log(t.state),t.updateRate()})},t.handleMaritalButton=function(){var e=t.state.maritalStatus;"single"===e?t.setState({maritalStatus:"married"},function(){console.log(t.state),t.updateRate()}):"married"===e?t.setState({maritalStatus:"single"},function(){console.log(t.state),t.updateRate()}):console.log("something went wrong")},t.updateRate=function(){t.setState({monthlyRate:N.lookUp(t.state.effectiveDate,t.state.compEval,t.state.maritalStatus,t.state.depParents,t.state.depChildren18,t.state.depChildrenSchool,t.state.spAidandAttendance)})},t.handleSpAAButton=function(){var e=t.state.spAidandAttendance;"no"===e?t.setState({spAidandAttendance:"yes"},function(){console.log(t.state),t.updateRate()}):"yes"===e?t.setState({spAidandAttendance:"no"},function(){console.log(t.state),t.updateRate()}):console.log("something went wrong")},t.tester=function(e){console.log(e.target.value)},t}return Object(p.a)(a,e),Object(_.a)(a,[{key:"componentDidMount",value:function(){this.setState({effectiveDate:"20181201",maritalStatus:"single",spAidandAttendance:"no",depParents:"0",depChildren18:"0",depChildrenSchool:"0",compEval:0,monthlyRate:"0.00"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 offset-md-3  input-box"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row inputs-section"},o.a.createElement("div",{className:"col-md-12 text-center"},o.a.createElement("p",null,"Effective Date"),o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{className:"form-control",id:"effective-date",name:"effectiveDate",onChange:this.handleChange},o.a.createElement("option",{value:"20181201"},"12/01/2018"),o.a.createElement("option",{value:"20171201"},"12/01/2017"),o.a.createElement("option",{value:"20161201"},"12/01/2016"),o.a.createElement("option",{value:"20141201"},"12/01/2015"),o.a.createElement("option",{value:"20141201"},"12/01/2014"))))),o.a.createElement("div",{className:"row inputs-section"},o.a.createElement("div",{className:"col-md-6 text-center"},o.a.createElement(u,{maritalStatus:this.state.maritalStatus}),o.a.createElement("p",{className:"spacer"},"\xa0"),o.a.createElement("div",{className:"custom-control custom-switch"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"maritalStatus",name:"maritalStatus",onChange:this.handleMaritalButton}),o.a.createElement("label",{className:"custom-control-label",for:"maritalStatus"}))),o.a.createElement("div",{className:"col-md-6 text-center"},o.a.createElement("p",null,"Spouse Aid and Attendance"),o.a.createElement(m,{aidAttend:this.state.spAidandAttendance}),o.a.createElement("div",{className:"custom-control custom-switch"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"spAA",name:"spAidandAttendance",onChange:this.handleSpAAButton}),o.a.createElement("label",{className:"custom-control-label",for:"spAA"})))),o.a.createElement("div",{className:"row inputs-section"},o.a.createElement("div",{className:"col-md-12 text-center"},o.a.createElement("p",null,"Dependent Parents"),o.a.createElement("div",{className:"form-check form-check-inline"},o.a.createElement("input",{className:"form-check-input",type:"radio",name:"depParents",id:"inlineRadio1",value:"0",onChange:this.handleChange,defaultChecked:"true"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio1"},"None")),o.a.createElement("div",{className:"form-check form-check-inline"},o.a.createElement("input",{className:"form-check-input",type:"radio",name:"depParents",id:"inlineRadio2",value:"1",onChange:this.handleChange}),o.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio2"},"One")),o.a.createElement("div",{className:"form-check form-check-inline"},o.a.createElement("input",{className:"form-check-input",type:"radio",name:"depParents",id:"inlineRadio3",value:"2",onChange:this.handleChange}),o.a.createElement("label",{className:"form-check-label",htmlFor:"inlineRadio3"},"Two")))),o.a.createElement("div",{className:"row inputs-section"},o.a.createElement("div",{className:"col-md-6 text-center"},o.a.createElement("p",null,"Minor Children"),o.a.createElement("form",null,o.a.createElement("div",{className:"col-auto my-1"},o.a.createElement("label",{className:"mr-sm-2 sr-only",htmlFor:"depChildren18"},"Dependent Children Under 18"),o.a.createElement("select",{className:"custom-select mr-sm-2",id:"depChildren18",name:"depChildren18",onChange:this.handleChange},o.a.createElement("option",{selected:!0,value:"0"},"0"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"))))),o.a.createElement("div",{className:"col-md-6 text-center"},o.a.createElement("p",null,"School Children"),o.a.createElement("form",null,o.a.createElement("div",{className:"col-auto my-1"},o.a.createElement("label",{className:"mr-sm-2 sr-only",for:"depChildrenSchool"},"Dependent Children Under 18"),o.a.createElement("select",{className:"custom-select mr-sm-2",id:"depChildrenSchool",name:"depChildrenSchool",onChange:this.handleChange},o.a.createElement("option",{selected:!0,value:"0"},"0"),o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7")))))),o.a.createElement("div",{className:"row inputs-section"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("label",{for:"compRating"},"Combined Evaluation for Compensation: ",o.a.createElement("b",null,this.state.compEval,"%")),o.a.createElement("input",{type:"range",className:"custom-range",min:"0",max:"100",step:"10",defaultValue:"0",id:"compRating",name:"compEval",onChange:this.handleChange})))))),o.a.createElement(w,{result:this.state.monthlyRate}),o.a.createElement(E,{text:"Disclaimer: The VA Disability Compensation Estimator is not affiliated with the U.S. Department of Veterans Affairs, and is intended for educational purposes only. Any estimate displayed is unofficial and should not be construed as a promise of monetary benefits."}))}}]),a}(n.Component),A=(t(20),t(21),function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(d,null),o.a.createElement(C,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.93317b6a.chunk.js.map