/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*var url=document.location.toString();  
 var header=document.getElementsByTagName("head")[0];
 var srbase=document.createElement("base"); 
 if(typeof(Storage) == "undefined") {
    alert("Your browser is not supported for local storage");
 }
 var  hostname=location.hostname;
 var host=location.protocol+'//'+hostname;
 var nodehost=location.protocol+'//'+hostname+":3000";
 srbase.href=nodehost+"/webtv";   
 header.appendChild(srbase); */

var generic={

 today_date :  function() {
    return moment().utcOffset("+05:30").format("DD-MM-YYYY").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
},

time_day_unix : function(d) {
    return (moment(d).utcOffset(0).unix() + (330 * 60));
},

 today_date_time_mysql : function () {
    return moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss").toString();
},
today_date_time_mysql_12 : function () {
    return moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm a").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
},
today_date_time_mysql_12_d_m_y : function () {
    return moment().utcOffset("+05:30").format("DD-MM-YYYY hh:mm a").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
},
 time_today_timestamp : function () {
    return (moment().unix() + (330 * 60));
},

timestamp_to_date_mysql : function (t) {
    //return moment.unix(t).utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
    var t = parseInt(t) * 1000;
    return    moment(t).utcOffset(0).utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
},


date_formate_specified : function (date, param) {
    return moment(date).utcOffset("+05:30").format(param).toString();
},

day_today_param : function (param) {
    return moment().utcOffset("+05:30").format(param).toString();
},

date_formate_mysql : function (date) {
    return moment(date).utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss").toString();
},

 date_func : function (date) {
    return moment(date).utcOffset("+05:30").format("YYYY-MM-DD").toString();
},

time_formate : function (time) {
    return moment(time, ["HH:mm:ss", "hh:mm a"]).utcOffset("+05:30").format("hh:mm a").toString();
},
today_date : function () {
    return moment().utcOffset("+05:30").format("DD-MM-YYYY").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
},
today_date_mysql : function () {
    return moment().utcOffset("+05:30").format("YYYY-MM-DD").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
},
today_date_time_mysql : function () {
    return moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss").toString();
    //  return moment(datetime, ["YYYY-MM-DD HH:mm:ss","DD-MMM-YYYY h:ma"]).format("DD-MMM-YYYY h:m a").toString();
},
date_formate : function (date) {
    return moment(date, ["YYYY-MM-DD", "DD-MMM-YYYY"]).utcOffset("+05:30").format("DD-MMM-YYYY").toString();
},
 time_formate_fromDate : function (time) {
    return moment(time, ["YYYY-MM-DD HH:mm:ss", "hh:mm a"]).utcOffset("+05:30").format("hh:mm a").toString();
},
 date_time_formate : function (datetime) {
    return moment(datetime, ["YYYY-MM-DD HH:mm:ss", "DD-MMM-YYYY hh:mm a"]).utcOffset("+05:30").format("DD-MMM-YYYY hh:mm a").toString();  //13-Jun-2017 09:00 am
},

DD_MM_YYYY_hh_mm_a : function (datetime) {
    return moment(datetime, ["YYYY-MM-DD HH:mm:ss", "DD-MMM-YYYY hh:mm a"]).utcOffset("+05:30").format("DD-MM-YYYY hh:mm a").toString();  //13-02-2017 09:00 am
},


 sessionchek :  function (){
                    var sessionisset=0;
                    var numberofargument=arguments.length;
                    for(var i=0;i<(numberofargument-2);i++){
         if(isset(arguments[i])){
            sessionisset=1; 
         }else{
             sessionisset=0;
         }
     }

     if(sessionisset===1){
        window.location.href=arguments[numberofargument-2];  //from  beforelast
     }else{
         window.location.href=arguments[numberofargument-1];  //to  last
     }
  }  ,
  
  /*
   * 
   */
  sessioncheck : function (validationkeyarr) {
       var count=0;
       var maxlength=validationkeyarr.length;
       if(Array.isArray(validationkeyarr)){
           for(var i=0;i<maxlength;i++){
               //console.log(window.localStorage.getItem(validationkeyarr[i]));
              if(validation.isset(window.localStorage.getItem(validationkeyarr[i]))){
                   count++;
              }else{
                
              } 
               
           }
       }
       //  console.log(count); console.log(maxlength);
       if(count==maxlength){
          return true;
       }else{
           return false;
       }
      
   },   
   
   
   
 sessioncheckall : function (){
    var url= window.location.href;
     var configCode_loc=window.localStorage.getItem("configCode");

   //  alert(url);
     var deviceUniqueID_loc=window.localStorage.getItem("deviceUniqueID");     
     if(isset(configCode_loc) && isset(deviceUniqueID_loc)){
         if(url.indexOf("webtvtokendisplay.html")>-1){
         }else{
           window.location.href = "webtv/webtvtokendisplay.html?ifsccode="+configCode_loc+"_"+deviceUniqueID_loc;   
         }

        if((url.indexOf("login.html")>-1) || (url.indexOf("registration.html")>-1)){
             window.location.href = "webtv/webtvtokendisplay.html?ifsccode="+configCode_loc+"_"+deviceUniqueID_loc;
         }
     }else{
           if((url.indexOf("login.html")>-1) || (url.indexOf("registration.html")>-1)){ 
           }else{
             window.location.href = "webtv/login.html";     
           }

     } 
 },
 
getUrlParameters : function (parameter, staticURL, decode){
  var parr;

  var currLocation = (staticURL.length)? staticURL : window.location.search;
  if( (currLocation=="") || (currLocation=="undefied")||(currLocation==null)){
     return false;   
  }
  var  parArr = currLocation.split("?")[1].split("&"), returnBool = true;
  //alert(parArr);
  // if(parArr!='undefined'){
  for(var i = 0; i < parArr.length; i++){
      parr = parArr[i].split("=");
      if(parr[0] == parameter){
          return (decode) ? decodeURIComponent(parr[1]) : parr[1];
         // returnBool = true;
      }else{
         // returnBool = false;            
      }
 }
  // }
 if(!returnBool) return false;  
 }  


        
}