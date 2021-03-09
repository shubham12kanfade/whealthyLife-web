(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-doctors-doctors-module"],{

/***/ "./node_modules/moment/lang sync recursive ^\\.\\/.*$":
/*!************************************************!*\
  !*** ./node_modules/moment/lang sync ^\.\/.*$ ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all.min": "./node_modules/moment/lang/all.min.js",
	"./all.min.js": "./node_modules/moment/lang/all.min.js",
	"./fr": "./node_modules/moment/lang/fr.js",
	"./fr.js": "./node_modules/moment/lang/fr.js",
	"./fr.min": "./node_modules/moment/lang/fr.min.js",
	"./fr.min.js": "./node_modules/moment/lang/fr.min.js",
	"./it": "./node_modules/moment/lang/it.js",
	"./it.js": "./node_modules/moment/lang/it.js",
	"./it.min": "./node_modules/moment/lang/it.min.js",
	"./it.min.js": "./node_modules/moment/lang/it.min.js",
	"./pt": "./node_modules/moment/lang/pt.js",
	"./pt.js": "./node_modules/moment/lang/pt.js",
	"./pt.min": "./node_modules/moment/lang/pt.min.js",
	"./pt.min.js": "./node_modules/moment/lang/pt.min.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/lang sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/moment/lang/all.min.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/lang/all.min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){var a={months:"Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"),weekdays:"Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),weekdaysShort:"Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"),longDateFormat:{L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"une année",yy:"%d années"},ordinal:function(a){return~~(a%100/10)===1?"er":"ème"}}; true&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("fr",a)})(),function(){var a={months:"Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settebre_Ottobre_Novembre_Dicembre".split("_"),monthsShort:"Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays:"Domenica_Lunedi_Martedi_Mercoledi_Giovedi_Venerdi_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),longDateFormat:{L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s fa",s:"secondi",m:"un minuto",mm:"%d minuti",h:"un ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(){return"º"}}; true&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("it",a)}(),function(){var a={months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Feb_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),longDateFormat:{L:"DD/MM/YYYY",LL:"D \\de MMMM \\de YYYY",LLL:"D \\de MMMM \\de YYYY HH:mm",LLLL:"dddd, D \\de MMMM \\de YYYY HH:mm"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinal:function(a){return"º"}}; true&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("pt",a)}()

/***/ }),

/***/ "./node_modules/moment/lang/fr.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/fr.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    var lang = {
            months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"),
            monthsShort : "Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"),
            weekdays : "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
            weekdaysShort : "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"),
            // based on this article on writing dates in french:
            // http://www.btb.gc.ca/btb.php?lang=fra&cont=868
            longDateFormat : { 
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY HH:mm",
                LLLL : "dddd, D MMMM YYYY HH:mm"
            },
            relativeTime : {
                future : "dans %s",
                past : "il y a %s",
                s : "quelques secondes",
                m : "une minute",
                mm : "%d minutes",
                h : "une heure",
                hh : "%d heures",
                d : "un jour",
                dd : "%d jours",
                M : "un mois",
                MM : "%d mois",
                y : "une année",
                yy : "%d années"
            },
            ordinal : function (number) {
                return (~~ (number % 100 / 10) === 1) ? 'er' : 'ème';
            }
        };

    // Node
    if (true) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('fr', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/fr.min.js":
/*!********************************************!*\
  !*** ./node_modules/moment/lang/fr.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){var a={months:"Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"),weekdays:"Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),weekdaysShort:"Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"),longDateFormat:{L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"une année",yy:"%d années"},ordinal:function(a){return~~(a%100/10)===1?"er":"ème"}}; true&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("fr",a)})()

/***/ }),

/***/ "./node_modules/moment/lang/it.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/it.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    var lang = {
            months : "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settebre_Ottobre_Novembre_Dicembre".split("_"),
            monthsShort : "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
            weekdays : "Domenica_Lunedi_Martedi_Mercoledi_Giovedi_Venerdi_Sabato".split("_"),
            weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            // copied from french, needs revision from italian speakers
            longDateFormat : { 
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY HH:mm",
                LLLL : "dddd, D MMMM YYYY HH:mm"
            },
            relativeTime : {
                future : "in %s",
                past : "%s fa",
                s : "secondi",
                m : "un minuto",
                mm : "%d minuti",
                h : "un ora",
                hh : "%d ore",
                d : "un giorno",
                dd : "%d giorni",
                M : "un mese",
                MM : "%d mesi",
                y : "un anno",
                yy : "%d anni"
            },
            ordinal: function () {
                return 'º';
            }
        };

    // Node
    if (true) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('it', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/it.min.js":
/*!********************************************!*\
  !*** ./node_modules/moment/lang/it.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){var a={months:"Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settebre_Ottobre_Novembre_Dicembre".split("_"),monthsShort:"Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),weekdays:"Domenica_Lunedi_Martedi_Mercoledi_Giovedi_Venerdi_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),longDateFormat:{L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"%s fa",s:"secondi",m:"un minuto",mm:"%d minuti",h:"un ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(){return"º"}}; true&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("it",a)})()

/***/ }),

/***/ "./node_modules/moment/lang/pt.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/pt.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    var lang = {
            months : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort : "Jan_Feb_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            longDateFormat : { 
                L : "DD/MM/YYYY",
                LL : "D \\de MMMM \\de YYYY",
                LLL : "D \\de MMMM \\de YYYY HH:mm",
                LLLL : "dddd, D \\de MMMM \\de YYYY HH:mm"
            },
            relativeTime : {
                future : "em %s",
                past : "%s atrás",
                s : "segundos",
                m : "um minuto",
                mm : "%d minutos",
                h : "uma hora",
                hh : "%d horas",
                d : "um dia",
                dd : "%d dias",
                M : "um mês",
                MM : "%d meses",
                y : "um ano",
                yy : "%d anos"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if (true) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('pt', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/pt.min.js":
/*!********************************************!*\
  !*** ./node_modules/moment/lang/pt.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){var a={months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Feb_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),longDateFormat:{L:"DD/MM/YYYY",LL:"D \\de MMMM \\de YYYY",LLL:"D \\de MMMM \\de YYYY HH:mm",LLLL:"dddd, D \\de MMMM \\de YYYY HH:mm"},relativeTime:{future:"em %s",past:"%s atrás",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinal:function(a){return"º"}}; true&&(module.exports=a),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("pt",a)})()

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Moment.js
//
// (c) 2011 Tim Wood
// Moment.js is freely distributable under the terms of the MIT license.
//
// Version 1.1.0

(function (Date, undefined) {

    var moment,
        round = Math.round,
        languages = {},
        hasModule = (typeof module !== 'undefined'),
        paramsToParse = 'months|monthsShort|weekdays|weekdaysShort|longDateFormat|relativeTime|ordinal'.split('|'),
        i,
        VERSION = "1.1.0",
        shortcuts = 'Month|Date|Hours|Minutes|Seconds'.split('|');

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // helper function for _.addTime and _.subtractTime
    function dateAddRemove(date, _input, adding, val) {
        var isString = (typeof _input === 'string'),
            input = isString ? {} : _input,
            ms, M, currentDate;
        if (isString && val) {
            input[_input] = val;
        }
        ms = (input.ms || input.milliseconds || 0) +
            (input.s || input.seconds || 0) * 1e3 + // 1000
            (input.m || input.minutes || 0) * 6e4 + // 1000 * 60
            (input.h || input.hours || 0) * 36e5 + // 1000 * 60 * 60
            (input.d || input.days || 0) * 864e5 + // 1000 * 60 * 60 * 24
            (input.w || input.weeks || 0) * 6048e5; // 1000 * 60 * 60 * 24 * 7
        M = (input.M || input.months || 0) +
            (input.y || input.years || 0) * 12;
        if (ms) {
            date.setTime(+date + ms * adding);
        }
        if (M) {
            currentDate = date.getDate();
            date.setDate(1);
            date.setMonth(date.getMonth() + M * adding);
            date.setDate(Math.min(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(), currentDate));
        }
        return date;
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromArray(input) {
        return new Date(input[0], input[1] || 0, input[2] || 1, input[3] || 0, input[4] || 0, input[5] || 0, input[6] || 0);
    }

    // format date using native date object
    function formatDate(date, inputString) {
        var currentMonth = date.getMonth(),
            currentDate = date.getDate(),
            currentYear = date.getFullYear(),
            currentDay = date.getDay(),
            currentHours = date.getHours(),
            currentMinutes = date.getMinutes(),
            currentSeconds = date.getSeconds(),
            charactersToReplace = /(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|zz?|LL?L?L?)/g,
            nonuppercaseLetters = /[^A-Z]/g,
            timezoneRegex = /\([A-Za-z ]+\)|:[0-9]{2} [A-Z]{3} /g,
            ordinal = moment.ordinal;
        // check if the character is a format
        // return formatted string or non string.
        //
        // uses switch/case instead of an object of named functions (like http://phpjs.org/functions/date:380)
        // for minification and performance
        // see http://jsperf.com/object-of-functions-vs-switch for performance comparison
        function replaceFunction(input) {
            // create a couple variables to be used later inside one of the cases.
            var a, b;
            switch (input) {
                // MONTH
            case 'M' :
                return currentMonth + 1;
            case 'Mo' :
                return (currentMonth + 1) + ordinal(currentMonth + 1);
            case 'MM' :
                return leftZeroFill(currentMonth + 1, 2);
            case 'MMM' :
                return moment.monthsShort[currentMonth];
            case 'MMMM' :
                return moment.months[currentMonth];
            // DAY OF MONTH
            case 'D' :
                return currentDate;
            case 'Do' :
                return currentDate + ordinal(currentDate);
            case 'DD' :
                return leftZeroFill(currentDate, 2);
            // DAY OF YEAR
            case 'DDD' :
                a = new Date(currentYear, currentMonth, currentDate);
                b = new Date(currentYear, 0, 1);
                return ~~ (((a - b) / 864e5) + 1.5);
            case 'DDDo' :
                a = replaceFunction('DDD');
                return a + ordinal(a);
            case 'DDDD' :
                return leftZeroFill(replaceFunction('DDD'), 3);
            // WEEKDAY
            case 'd' :
                return currentDay;
            case 'do' :
                return currentDay + ordinal(currentDay);
            case 'ddd' :
                return moment.weekdaysShort[currentDay];
            case 'dddd' :
                return moment.weekdays[currentDay];
            // WEEK OF YEAR
            case 'w' :
                a = new Date(currentYear, currentMonth, currentDate - currentDay + 5);
                b = new Date(a.getFullYear(), 0, 4);
                return ~~ ((a - b) / 864e5 / 7 + 1.5);
            case 'wo' :
                a = replaceFunction('w');
                return a + ordinal(a);
            case 'ww' :
                return leftZeroFill(replaceFunction('w'), 2);
            // YEAR
            case 'YY' :
                return currentYear % 100;
            case 'YYYY' :
                return currentYear;
            // AM / PM
            case 'a' :
                return currentHours > 11 ? 'pm' : 'am';
            case 'A' :
                return currentHours > 11 ? 'PM' : 'AM';
            // 24 HOUR
            case 'H' :
                return currentHours;
            case 'HH' :
                return leftZeroFill(currentHours, 2);
            // 12 HOUR
            case 'h' :
                return currentHours % 12 || 12;
            case 'hh' :
                return leftZeroFill(currentHours % 12 || 12, 2);
            // MINUTE
            case 'm' :
                return currentMinutes;
            case 'mm' :
                return leftZeroFill(currentMinutes, 2);
            // SECOND
            case 's' :
                return currentSeconds;
            case 'ss' :
                return leftZeroFill(currentSeconds, 2);
            // TIMEZONE
            case 'zz' :
                // depreciating 'zz' fall through to 'z'
            case 'z' :
                return (date.toString().match(timezoneRegex) || [''])[0].replace(nonuppercaseLetters, '');
            // LONG DATES
            case 'L' :
            case 'LL' :
            case 'LLL' :
            case 'LLLL' :
                return formatDate(date, moment.longDateFormat[input]);
            // DEFAULT
            default :
                return input.replace("\\", "");
            }
        }
        return inputString.replace(charactersToReplace, replaceFunction);
    }

    // date from string and format string
    function makeDateFromStringAndFormat(string, format) {
        var inArray = [0],
            charactersToPutInArray = /[0-9a-zA-Z]+/g,
            inputParts = string.match(charactersToPutInArray),
            formatParts = format.match(charactersToPutInArray),
            i,
            isPm;

        // function to convert string input to date
        function addTime(format, input) {
            switch (format) {
            // MONTH
            case 'M' :
                // fall through to MM
            case 'MM' :
                inArray[1] = ~~input - 1;
                break;
            // DAY OF MONTH
            case 'D' :
                // fall through to DDDD
            case 'DD' :
                // fall through to DDDD
            case 'DDD' :
                // fall through to DDDD
            case 'DDDD' :
                inArray[2] = ~~input;
                break;
            // YEAR
            case 'YY' :
                input = ~~input;
                inArray[0] = input + (input > 70 ? 1900 : 2000);
                break;
            case 'YYYY' :
                inArray[0] = ~~input;
                break;
            // AM / PM
            case 'a' :
                // fall through to A
            case 'A' :
                isPm = (input.toLowerCase() === 'pm');
                break;
            // 24 HOUR
            case 'H' :
                // fall through to hh
            case 'HH' :
                // fall through to hh
            case 'h' :
                // fall through to hh
            case 'hh' :
                inArray[3] = ~~input;
                break;
            // MINUTE
            case 'm' :
                // fall through to mm
            case 'mm' :
                inArray[4] = ~~input;
                break;
            // SECOND
            case 's' :
                // fall through to ss
            case 'ss' :
                inArray[5] = ~~input;
                break;
            }
        }
        for (i = 0; i < formatParts.length; i++) {
            addTime(formatParts[i], inputParts[i]);
        }
        // handle am pm
        if (isPm && inArray[3] < 12) {
            inArray[3] += 12;
        }
        return dateFromArray(inArray);
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (~~array1[i] !== ~~array2[i]) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(string, formats) {
        var output,
            charactersToPutInArray = /[0-9a-zA-Z]+/g,
            inputParts = string.match(charactersToPutInArray),
            scores = [],
            scoreToBeat = 99,
            i,
            curDate,
            curScore;
        for (i = 0; i < formats.length; i++) {
            curDate = makeDateFromStringAndFormat(string, formats[i]);
            curScore = compareArrays(inputParts, formatDate(curDate, formats[i]).match(charactersToPutInArray));
            if (curScore < scoreToBeat) {
                scoreToBeat = curScore;
                output = curDate;
            }
        }
        return output;
    }

    // Moment prototype object
    function Moment(date) {
        this._d = date;
    }

    moment = function (input, format) {
        var date;
        // parse UnderscoreDate object
        if (input && input._d instanceof Date) {
            date = input._d;
        // parse string and format
        } else if (format) {
            if (isArray(format)) {
                date = makeDateFromStringAndArray(input, format);
            } else {
                date = makeDateFromStringAndFormat(input, format);
            }
        // parse everything else
        } else {
            date = input === undefined ? new Date() :
                input instanceof Date ? input :
                isArray(input) ? dateFromArray(input) :
                new Date(input);
        }
        return new Moment(date);
    };

    // version number
    moment.version = VERSION;

    // language switching and caching
    moment.lang = function (key, values) {
        var i, param, req;
        if (values) {
            languages[key] = values;
        }
        if (languages[key]) {
            for (i = 0; i < paramsToParse.length; i++) {
                param = paramsToParse[i];
                moment[param] = languages[key][param] || moment[param];
            }
        } else {
            if (hasModule) {
                req = __webpack_require__("./node_modules/moment/lang sync recursive ^\\.\\/.*$")("./" + key);
                moment.lang(key, req);
            }
        }
    };

    // set default language
    moment.lang('en', {
        months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        longDateFormat : { 
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY h:mm A",
            LLLL : "dddd, MMMM D YYYY h:mm A"
        },
        relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        ordinal : function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        }
    });

    // helper function for _date.from() and _date.fromNow()
    function substituteTimeAgo(string, number) {
        return moment.relativeTime[string].replace(/%d/i, number || 1);
    }

    function relativeTime(milliseconds) {
        var seconds = Math.abs(milliseconds) / 1000,
            minutes = seconds / 60,
            hours = minutes / 60,
            days = hours / 24,
            years = days / 365;
        return seconds < 45 && substituteTimeAgo('s', round(seconds)) ||
            round(minutes) === 1 && substituteTimeAgo('m') ||
            minutes < 45 && substituteTimeAgo('mm', round(minutes)) ||
            round(hours) === 1 && substituteTimeAgo('h') ||
            hours < 22 && substituteTimeAgo('hh', round(hours)) ||
            round(days) === 1 && substituteTimeAgo('d') ||
            days <= 25 && substituteTimeAgo('dd', round(days)) ||
            days <= 45 && substituteTimeAgo('M') ||
            days < 345 && substituteTimeAgo('MM', round(days / 30)) ||
            round(years) === 1 && substituteTimeAgo('y') ||
            substituteTimeAgo('yy', round(years));
    }

    // shortcut for prototype
    moment.fn = Moment.prototype = {

        valueOf : function () {
            return +this._d;
        },

        native : function () {
            return this._d;
        },

        format : function (inputString) {
            return formatDate(this._d, inputString);
        },

        add : function (input, val) {
            this._d = dateAddRemove(this._d, input, 1, val);
            return this;
        },

        subtract : function (input, val) {
            this._d = dateAddRemove(this._d, input, -1, val);
            return this;
        },

        diff : function (input, val, float) {
            var inputMoment = moment(input),
                diff = this._d - inputMoment._d, 
                year = this.year() - inputMoment.year(), 
                month = this.month() - inputMoment.month(), 
                day = this.day() - inputMoment.day(),
                output;
            if (val === 'months') {
                output = year * 12 + month + day / 30;
            } else if (val === 'years') {
                output = year + month / 12;
            } else {
                output = val === 'seconds' ? diff / 1e3 : // 1000
                    val === 'minutes' ? diff / 6e4 : // 1000 * 60
                    val === 'hours' ? diff / 36e5 : // 1000 * 60 * 60
                    val === 'days' ? diff / 864e5 : // 1000 * 60 * 60 * 24
                    val === 'weeks' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
                    val === 'days' ? diff / 3600 : diff;
            }
            return float ? output : round(output);
        },

        from : function (time, withoutSuffix) {
            var difference = this.diff(time),
                rel = moment.relativeTime,
                output = relativeTime(difference);
            return withoutSuffix ? output : (difference < 0 ? rel.past : rel.future).replace(/%s/i, output);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        isLeapYear : function () {
            var year = this._d.getFullYear();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
    };

    // helper for adding shortcuts
    function makeShortcut(name, key) {
        moment.fn[name] = function (input) {
            if (input != null) {
                this._d['set' + key](input);
                return this;
            } else {
                return this._d['get' + key]();
            }
        };
    }

    // loop through and add shortcuts
    for (i = 0; i < shortcuts.length; i ++) {
        makeShortcut(shortcuts[i].toLowerCase(), shortcuts[i]);
    }

    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
    makeShortcut('year', 'FullYear');

    // add shortcut for day (no setter)
    moment.fn.day = function () {
        return this._d.getDay();
    };

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    }
    if (typeof window !== 'undefined') {
        window.moment = moment;
    }

})(Date);


/***/ }),

/***/ "./src/app/modules/doctors/checking-popup/checking-popup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/doctors/checking-popup/checking-popup.component.ts ***!
  \****************************************************************************/
/*! exports provided: CheckingPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingPopupComponent", function() { return CheckingPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/doctor-profile.service */ "./src/app/services/doctor-profile.service.ts");
/* harmony import */ var _services_booking_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/booking-page.service */ "./src/app/services/booking-page.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_paitents_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/paitents.service */ "./src/app/services/paitents.service.ts");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













function CheckingPopupComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deg_r210 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", deg_r210.degree, " ");
} }
function CheckingPopupComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prospec_r211 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((prospec_r211 == null ? null : prospec_r211.fullName) + ", ");
} }
class CheckingPopupComponent {
    constructor(dialogRef, data, DoctorProfile, BookingPageService, userService, paitentService, videoService, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.DoctorProfile = DoctorProfile;
        this.BookingPageService = BookingPageService;
        this.userService = userService;
        this.paitentService = paitentService;
        this.videoService = videoService;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.getProfileDetails();
        this.BookingPageService.getDegree(this.data.doctor).then((resData) => {
            this.degree = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        this.UserID = this.userService.getUserInfo();
        this.paitentService.getProfileDetaile(this.UserID._id).then(CURUserRes => {
            this.CURUser = CURUserRes.data;
            this.petientId = CURUserRes.data._id;
        });
    }
    getProfileDetails() {
        const data = { findId: this.data.doctor };
        this.DoctorProfile.getDoctorProfile(data)
            .then((resData) => {
            this.profileData = resData.data;
        })
            .catch((error) => {
            console.log("DoctorProfileComponent -> getProfileDetails -> error", error);
        });
    }
    bookappointment() {
        const appointData = Object.assign(Object.assign({}, this.data), { appoinmentType: "Scheduled", petient: this.UserID._id });
        this.videoService.postAppointmentSlot(appointData).then(appointRes => {
            this._snackBar.open('Appointment Book Successfully On Date : ' + this.data.date.slice(0, 10), '', {
                duration: 3600,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['redNoMatch']
            });
        }).catch(err => {
            console.log("CheckingPopupComponent -> postAppointment -> err", err);
            this._snackBar.open('Something Went Wrong on Booking Appointment', '', {
                duration: 3600,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['redMatch']
            });
        });
    }
}
CheckingPopupComponent.ɵfac = function CheckingPopupComponent_Factory(t) { return new (t || CheckingPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_2__["DoctorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_page_service__WEBPACK_IMPORTED_MODULE_3__["BookingPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_paitents_service__WEBPACK_IMPORTED_MODULE_5__["PaitentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_video_service__WEBPACK_IMPORTED_MODULE_6__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
CheckingPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckingPopupComponent, selectors: [["app-checking-popup"]], decls: 84, vars: 26, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [2, "margin-bottom", "20px"], [1, "container-fluid"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-12", 2, "display", "flex", "justify-content", "center"], ["src", "../../../../assets/images/doc2.jpg", 1, "img-set1"], [1, "col-lg-12"], [2, "margin", "0px", "text-align", "center", "font-weight", "600"], [2, "text-align", "center"], ["style", "font-size: 12px", 4, "ngFor", "ngForOf"], [2, "font-weight", "600", "text-align", "center"], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [1, "col-lg-3", 2, "font-size", "14px"], [1, "fa", "fa-thumbs-up", 2, "font-size", "18px", "color", "#01a400"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"], [2, "text-align", "center", "font-weight", "600", "text-align", "center"], ["src", "../../../../assets/images/images-dweb_top_banner - Copy.png", 1, "img-set1"], [1, "col-lg-4"], [1, "col-lg-5"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"], [2, "font-size", "12px"]], template: function CheckingPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Slot Booking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Doctor Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CheckingPopupComponent_span_16_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Specialization In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CheckingPopupComponent_div_20_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 96% (3673 Votes) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Patient Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Contact Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Slot Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Duration :- 30 min ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-dialog-actions", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckingPopupComponent_Template_button_click_82_listener() { return ctx.bookappointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileData == null ? null : ctx.profileData.specialitie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Doctor Fee : \u20B9 ", ctx.profileData == null ? null : ctx.profileData.fees, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" ", ctx.profileData == null ? null : ctx.profileData.location == null ? null : ctx.profileData.location.address, " ", ctx.profileData == null ? null : ctx.profileData.location == null ? null : ctx.profileData.location.city, " ", ctx.profileData == null ? null : ctx.profileData.location == null ? null : ctx.profileData.location.country, " ", ctx.profileData == null ? null : ctx.profileData.location == null ? null : ctx.profileData.location.landmark, " ", ctx.profileData == null ? null : ctx.profileData.location == null ? null : ctx.profileData.location.state, " ", ctx.profileData == null ? null : ctx.profileData.location == null ? null : ctx.profileData.location.pincode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.CURUser == null ? null : ctx.CURUser.firstName, " ", ctx.CURUser == null ? null : ctx.CURUser.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.CURUser == null ? null : ctx.CURUser.mobileNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email :", ctx.CURUser == null ? null : ctx.CURUser.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" ", ctx.CURUser == null ? null : ctx.CURUser.location == null ? null : ctx.CURUser.location.address, " ", ctx.CURUser == null ? null : ctx.CURUser.location == null ? null : ctx.CURUser.location.landmark, " ", ctx.CURUser == null ? null : ctx.CURUser.location == null ? null : ctx.CURUser.location.country, " ", ctx.CURUser == null ? null : ctx.CURUser.location == null ? null : ctx.CURUser.location.state, " ", ctx.CURUser == null ? null : ctx.CURUser.location == null ? null : ctx.CURUser.location.city, " ", ctx.CURUser == null ? null : ctx.CURUser.location == null ? null : ctx.CURUser.location.pincode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date :- ", ctx.data.date.slice(0, 10), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Time :- ", ctx.data.time, " - ", ctx.data.TimeE, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Slot :- ", ctx.data.slotType, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".img-set1[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  border: 5px solid #ececec;\n  border-radius: 50%;\n}\n\n.flecx1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n}\n\n.starbgandcolor[_ngcontent-%COMP%] {\n  color: #01a400;\n  background-color: #f0f0f5;\n}\n\n.checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n  .redNoMatch {\n  font-size: 30px !important;\n  color: white;\n  background: #01a400 !important;\n}\n\n  .redMatch {\n  font-size: 30px !important;\n  color: white;\n  background: #f44336 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3JzL2NoZWNraW5nLXBvcHVwL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yc1xcY2hlY2tpbmctcG9wdXBcXGNoZWNraW5nLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3RvcnMvY2hlY2tpbmctcG9wdXAvY2hlY2tpbmctcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0VGOztBRENBO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9ycy9jaGVja2luZy1wb3B1cC9jaGVja2luZy1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctc2V0MSB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNlY2VjZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5mbGVjeDEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5zdGFyYmdhbmRjb2xvciB7XHJcbiAgY29sb3I6ICMwMWE0MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmNTtcclxufVxyXG5cclxuLmNoZWNrZWQge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmVkTm9NYXRjaCB7XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICMwMWE0MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5yZWRNYXRjaCB7XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICNmNDQzMzYgIWltcG9ydGFudDtcclxufVxyXG4iLCIuaW1nLXNldDEge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjZWNlY2VjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mbGVjeDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uc3RhcmJnYW5kY29sb3Ige1xuICBjb2xvcjogIzAxYTQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmNTtcbn1cblxuLmNoZWNrZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG46Om5nLWRlZXAgLnJlZE5vTWF0Y2gge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDFhNDAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAucmVkTWF0Y2gge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckingPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checking-popup',
                templateUrl: './checking-popup.component.html',
                styleUrls: ['./checking-popup.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_2__["DoctorProfileService"] }, { type: _services_booking_page_service__WEBPACK_IMPORTED_MODULE_3__["BookingPageService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: src_app_services_paitents_service__WEBPACK_IMPORTED_MODULE_5__["PaitentsService"] }, { type: _services_video_service__WEBPACK_IMPORTED_MODULE_6__["VideoService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/doctor-profile/doctor-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/doctors/doctor-profile/doctor-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: DoctorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorProfileComponent", function() { return DoctorProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-state-city */ "./node_modules/country-state-city/dist/index.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(country_state_city__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checking_popup_checking_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../checking-popup/checking-popup.component */ "./src/app/modules/doctors/checking-popup/checking-popup.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/doctor-profile.service */ "./src/app/services/doctor-profile.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_booking_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/booking-page.service */ "./src/app/services/booking-page.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");













function DoctorProfileComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deg_r262 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", deg_r262.degree, " ");
} }
function DoctorProfileComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prospec_r263 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (prospec_r263 == null ? null : prospec_r263.fullName) + ", ", " ");
} }
function DoctorProfileComponent_div_45_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_45_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r270); const mor_r267 = ctx.$implicit; const item_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r268.openDialog(mor_r267.strtTime, mor_r267.endTime, item_r264.date, "Morning Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mor_r267 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mor_r267.strtTime, " ");
} }
function DoctorProfileComponent_div_45_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_45_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r274); const eve_r271 = ctx.$implicit; const item_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r272.openDialog(eve_r271.strtTime, eve_r271.endTime, item_r264.date, "Evening Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eve_r271 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eve_r271.strtTime, " ");
} }
function DoctorProfileComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Morning Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoctorProfileComponent_div_45_div_7_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileComponent_div_45_div_14_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r264 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r264.mrningSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r264.eveningSlots);
} }
function DoctorProfileComponent_div_49_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_49_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r281); const mor_r278 = ctx.$implicit; const item_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r279.openDialog(mor_r278.strtTime, mor_r278.endTime, item_r275.date, "Morning Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mor_r278 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mor_r278.strtTime, " ");
} }
function DoctorProfileComponent_div_49_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_49_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r285); const eve_r282 = ctx.$implicit; const item_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r283.openDialog(eve_r282.strtTime, eve_r282.endTime, item_r275.date, "Evening Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eve_r282 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eve_r282.strtTime, " ");
} }
function DoctorProfileComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Morning Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoctorProfileComponent_div_49_div_7_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileComponent_div_49_div_14_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r275 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r275.mrningSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r275.eveningSlots);
} }
function DoctorProfileComponent_div_55_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_55_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const mor_r289 = ctx.$implicit; const item_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r290.openDialog(mor_r289.strtTime, mor_r289.endTime, item_r286.date, "Moening Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mor_r289 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mor_r289.strtTime, " ");
} }
function DoctorProfileComponent_div_55_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_55_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r296); const eve_r293 = ctx.$implicit; const item_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r294.openDialog(eve_r293.strtTime, eve_r293.endTime, item_r286.date, "Evening Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eve_r293 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eve_r293.strtTime, " ");
} }
function DoctorProfileComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Morning Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoctorProfileComponent_div_55_div_7_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileComponent_div_55_div_14_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r286 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r286.mrningSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r286.eveningSlots);
} }
function DoctorProfileComponent_div_61_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_61_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r303); const mor_r300 = ctx.$implicit; const item_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r301.openDialog(mor_r300.strtTime, mor_r300.endTime, item_r297.date, "Morning Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mor_r300 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mor_r300.strtTime, " ");
} }
function DoctorProfileComponent_div_61_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_61_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r307); const eve_r304 = ctx.$implicit; const item_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r305.openDialog(eve_r304.strtTime, eve_r304.endTime, item_r297.date, "Evening Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eve_r304 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eve_r304.strtTime, " ");
} }
function DoctorProfileComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Morning Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoctorProfileComponent_div_61_div_7_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileComponent_div_61_div_14_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r297 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r297.mrningSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r297.eveningSlots);
} }
function DoctorProfileComponent_div_67_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_67_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314); const mor_r311 = ctx.$implicit; const item_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r312.openDialog(mor_r311.strtTime, mor_r311.endTime, item_r308.date, "Mornig Slot"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mor_r311 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mor_r311.strtTime, " ");
} }
function DoctorProfileComponent_div_67_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_div_67_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r318); const eve_r315 = ctx.$implicit; const item_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r316.openDialog(eve_r315.strtTime, eve_r315.endTime, item_r308.date, "Evening Slot"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eve_r315 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eve_r315.strtTime, " ");
} }
function DoctorProfileComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Morning Slot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoctorProfileComponent_div_67_div_7_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileComponent_div_67_div_14_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r308 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r308.mrningSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r308.eveningSlots);
} }
function DoctorProfileComponent_div_82_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 76);
} }
function DoctorProfileComponent_div_82_div_47_div_5_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", ctx_r330.profileData == null ? null : ctx_r330.profileData.firstName, " ", ctx_r330.profileData == null ? null : ctx_r330.profileData.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r329 == null ? null : item_r329.feedbackId == null ? null : item_r329.feedbackId.feedback);
} }
function DoctorProfileComponent_div_82_div_47_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DoctorProfileComponent_div_82_div_47_div_5_div_16_Template, 8, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r329 = ctx.$implicit;
    const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, item_r329 == null ? null : item_r329.userId == null ? null : item_r329.userId.firstName.charAt(0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r329 == null ? null : item_r329.userId == null ? null : item_r329.userId.firstName) + " " + (item_r329 == null ? null : item_r329.userId == null ? null : item_r329.userId.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, item_r329 == null ? null : item_r329.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r329 == null ? null : item_r329.review, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r329 == null ? null : item_r329.feedbackId == null ? null : item_r329.feedbackId.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r328.RiviweTime(item_r329 == null ? null : item_r329.createdAt));
} }
function DoctorProfileComponent_div_82_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoctorProfileComponent_div_82_div_47_div_5_Template, 20, 10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 1, ctx_r320.review, 1, 2));
} }
function DoctorProfileComponent_div_82_div_48_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r333 = ctx.$implicit;
    const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r333 == null ? null : item_r333.questionId == null ? null : item_r333.questionId.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r333 == null ? null : item_r333.questionId == null ? null : item_r333.questionId.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", ctx_r332.profileData == null ? null : ctx_r332.profileData.firstName, " ", ctx_r332.profileData == null ? null : ctx_r332.profileData.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r333 == null ? null : item_r333.answer, " ");
} }
function DoctorProfileComponent_div_82_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorProfileComponent_div_82_div_48_div_2_Template, 18, 5, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r321.Qa, 1));
} }
function DoctorProfileComponent_div_82_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r334 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pro_r334.fullName);
} }
function DoctorProfileComponent_div_82_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r335 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pro_r335.fullName);
} }
function DoctorProfileComponent_div_82_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r336 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pro_r336 == null ? null : pro_r336.awardId == null ? null : pro_r336.awardId.title);
} }
function DoctorProfileComponent_div_82_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r337 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r337 == null ? null : item_r337.degree, "-", item_r337 == null ? null : item_r337.completionYear, " ");
} }
function DoctorProfileComponent_div_82_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r338 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pro_r338 == null ? null : pro_r338.membershipId == null ? null : pro_r338.membershipId.descrioton);
} }
function DoctorProfileComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 32 Smiles Multispeciality Dental Clinic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DoctorProfileComponent_div_82_i_19_Template, 1, 0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Get Directions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mon - Sun");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 09:00 AM - 02:00 PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 09:00 AM - 02:00 PM ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "200");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Prime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Max. 15 mins wait + Verified details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DoctorProfileComponent_div_82_div_47_Template, 7, 5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DoctorProfileComponent_div_82_div_48_Template, 4, 4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, DoctorProfileComponent_div_82_div_57_Template, 3, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Specializations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, DoctorProfileComponent_div_82_div_63_Template, 3, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Awards and Recognitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, DoctorProfileComponent_div_82_div_68_Template, 3, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DoctorProfileComponent_div_82_div_74_Template, 3, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Membership");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, DoctorProfileComponent_div_82_div_79_Template, 3, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Report an Error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r258.getCitys(ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.city), " , ", ctx_r258.getStates(ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.state), " , ", ctx_r258.getCountrys(ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.country), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r258.getNumberASRound(ctx_r258.avgStar == null ? null : ctx_r258.avgStar.AverageStars), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r258.avgStar == null ? null : ctx_r258.avgStar.AverageStars.toFixed());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" ", ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.address, " ", ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.landmark, " ", ctx_r258.getCitys(ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.city), " , ", ctx_r258.getStates(ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.state), " , ", ctx_r258.getCountrys(ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.country), " ", ctx_r258.profileData == null ? null : ctx_r258.profileData.location == null ? null : ctx_r258.profileData.location.pincode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r258.review == null ? null : ctx_r258.review.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r258.Qa == null ? null : ctx_r258.Qa.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r258.profileData == null ? null : ctx_r258.profileData.specialitie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r258.profileData == null ? null : ctx_r258.profileData.specialitie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r258.Awards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r258.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r258.memberShip);
} }
function DoctorProfileComponent_div_83_div_1_div_5_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", ctx_r342.profileData == null ? null : ctx_r342.profileData.firstName, " ", ctx_r342.profileData == null ? null : ctx_r342.profileData.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r341 == null ? null : item_r341.feedbackId == null ? null : item_r341.feedbackId.feedback);
} }
function DoctorProfileComponent_div_83_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DoctorProfileComponent_div_83_div_1_div_5_div_16_Template, 8, 3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r341 = ctx.$implicit;
    const ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, item_r341 == null ? null : item_r341.userId == null ? null : item_r341.userId.firstName.charAt(0)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r341 == null ? null : item_r341.userId == null ? null : item_r341.userId.firstName) + " " + (item_r341 == null ? null : item_r341.userId == null ? null : item_r341.userId.lastName), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, item_r341 == null ? null : item_r341.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r341 == null ? null : item_r341.review, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r341 == null ? null : item_r341.feedbackId == null ? null : item_r341.feedbackId.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r340.RiviweTime(item_r341 == null ? null : item_r341.createdAt));
} }
function DoctorProfileComponent_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoctorProfileComponent_div_83_div_1_div_5_Template, 20, 10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r339.review);
} }
function DoctorProfileComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorProfileComponent_div_83_div_1_Template, 6, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r259.review == null ? null : ctx_r259.review.length) != 0);
} }
function DoctorProfileComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Unable to open mouth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hi Doctor, I was having gotka from past 1year aproxy For Wich I am not able to open my mouth completely. Please suggest me any medicen Thanks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Dr. M. R. Pujari answered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Hi..it is oral submucosal fibrosis. It can be cured with injections only. Medicines cannot help... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Report an Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DoctorProfileComponent_div_85_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r345 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r345.image[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r345 == null ? null : item_r345.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r345 == null ? null : item_r345.description, " ");
} }
function DoctorProfileComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorProfileComponent_div_85_div_1_Template, 7, 3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Report an Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r261.HFHelth);
} }
const _c0 = function (a0) { return { selectActive: a0 }; };
// export interface DialogData {
// }
class DoctorProfileComponent {
    constructor(mainService, activatedRoutes, DoctorProfile, LocationS, BookingPageService, dialog) {
        this.mainService = mainService;
        this.activatedRoutes = activatedRoutes;
        this.DoctorProfile = DoctorProfile;
        this.LocationS = LocationS;
        this.BookingPageService = BookingPageService;
        this.dialog = dialog;
        this.active = "Info";
        this.currentDate = new Date();
    }
    // openDialog(): void {
    //   const dialogRef = this.dialog.open(FeedBackPopComponent, {
    //     width: '250px',
    //   });
    // }
    openDialog(slotStart, slotEnd, slotDate, slotType) {
        console.log(": --------------------------------------------------------------------------------------------------");
        console.log("DoctorProfileComponent -> openDialog -> slotStart, slotEnd, slotDate", slotStart, slotEnd, slotDate, slotType);
        console.log(": --------------------------------------------------------------------------------------------------");
        const dialogRef = this.dialog.open(_checking_popup_checking_popup_component__WEBPACK_IMPORTED_MODULE_2__["CheckingPopupComponent"], {
            data: { doctor: this.id, time: slotStart, TimeE: slotEnd, date: slotDate, slotType: slotType }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    getCitys(id) {
        const data = country_state_city__WEBPACK_IMPORTED_MODULE_1___default.a.getCityById(id);
        return data.name;
    }
    getStates(id) {
        const data = country_state_city__WEBPACK_IMPORTED_MODULE_1___default.a.getStateById(id);
        return data.name;
    }
    getCountrys(id) {
        const data = country_state_city__WEBPACK_IMPORTED_MODULE_1___default.a.getCountryById(id);
        return data.name;
    }
    ngOnInit() {
        this.activatedRoutes.params.subscribe((params) => {
            console.log("DoctorProfileComponent -> ngOnInit -> params", params);
            this.id = params["id"];
            this.getProfileDetails();
        });
        this.getaword();
        this.getDocMember();
        this.BookingPageService.getHf(this.id).then((resData) => {
            this.HFHelth = resData.data;
            console.log("DoctorProfileComponent -> ngOnInit -> this.HFHelth", this.HFHelth);
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        this.BookingPageService.getAvgStar(this.id).then((resData) => {
            this.avgStar = resData.data[0];
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        this.BookingPageService.getDegree(this.id).then((resData) => {
            this.degree = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        this.BookingPageService.getDoctorSlotId(this.id, { date: this.currentDate }).then((resData) => {
            this.slot = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        const data1 = moment__WEBPACK_IMPORTED_MODULE_3__().add(1, 'days').format('L');
        this.BookingPageService.getDoctorSlotId(this.id, { date: data1 }).then((resData) => {
            this.slot2 = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        const data2 = moment__WEBPACK_IMPORTED_MODULE_3__().add(3, 'days').format('L');
        this.BookingPageService.getDoctorSlotId(this.id, { date: data2 }).then((resData) => {
            this.slot3 = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        const data3 = moment__WEBPACK_IMPORTED_MODULE_3__().add(4, 'days').format('L');
        this.BookingPageService.getDoctorSlotId(this.id, { date: data3 }).then((resData) => {
            this.slot4 = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        const data4 = moment__WEBPACK_IMPORTED_MODULE_3__().add(5, 'days').format('L');
        this.BookingPageService.getDoctorSlotId(this.id, { date: data4 }).then((resData) => {
            this.slot5 = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        this.BookingPageService.getQa(this.id).then((resData) => {
            this.Qa = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> ngOnInit -> err", err);
        });
        this.BookingPageService.getReview(this.id).then((resData) => {
            this.review = resData.data;
        }).catch((err) => {
            console.log("err", err);
        });
        this.BookingPageService.getReview(this.id).then((resData) => {
            console.log("resData", resData);
            this.Star = resData.data;
        }).catch((err) => {
            console.log("err", err);
        });
    }
    getDocMember() {
        this.BookingPageService.getDroctorMember(this.id).then((resData) => {
            this.memberShip = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> getDocMember -> err", err);
        });
    }
    getaword() {
        this.BookingPageService.getDroctorAward(this.id).then((resData) => {
            this.Awards = resData.data;
        }).catch((err) => {
            console.log("DoctorProfileComponent -> getaword -> err", err);
        });
    }
    getProfileDetails() {
        const data = { findId: this.id };
        this.DoctorProfile.getDoctorProfile(data)
            .then((resData) => {
            this.profileData = resData.data;
        })
            .catch((error) => {
            console.log("DoctorProfileComponent -> getProfileDetails -> error", error);
        });
    }
    activefn(val) {
        this.active = val;
    }
    TimeSlot(val) {
        this.date = new Date();
        this.date.setDate(this.date.getDate() + val);
        return this.date;
    }
    RiviweTime(id) {
        return moment__WEBPACK_IMPORTED_MODULE_3__([id]).fromNow();
    }
    getNumberASRound(val) {
        return Math.round(val);
    }
}
DoctorProfileComponent.ɵfac = function DoctorProfileComponent_Factory(t) { return new (t || DoctorProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_6__["DoctorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_page_service__WEBPACK_IMPORTED_MODULE_8__["BookingPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
DoctorProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorProfileComponent, selectors: [["app-doctor-profile"]], decls: 86, vars: 53, consts: [[2, "background-color", "#f0f0f5"], [2, "margin-top", "80px", "padding-top", "20px"], [1, "container"], [1, "col-12"], [1, "row"], [1, "col-lg-8"], [1, "card", 2, "box-shadow", "0px 0px 10px #c5c4c4", "padding", "15px"], [1, "col-lg-3", "col-sm-4", "col-12"], ["onerror", "this.src='../assets/img/user.jpeg'", "alt", "...", 1, "card-img", 2, "border", "1px solid lightgray", "border-radius", "50%", 3, "src"], [1, "col-lg-9", "col-sm-8", "col-12"], [2, "margin", "0px 15px"], [2, "margin", "0px"], ["style", "font-size: 12px", 4, "ngFor", "ngForOf"], [1, "pl-1", "font-weight-bold", 2, "display", "block", "width", "100%", "margin", "10px 0px"], ["style", "font-weight: 600;", 4, "ngFor", "ngForOf"], [2, "display", "block", "margin-top", "20px"], [1, "row", "text-dark1"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-up", "text-success", "p-1"], [1, "btn", 2, "float", "right", "margin-top", "30px"], [1, "col-lg-4"], [1, "bg-white", "mb-3"], [1, "col-sm-12"], [1, "col-2"], ["src", "//www.practostatic.com/web-assets/images/direct_consult.520d47dbea81.svg", "data-reactid", "187", 1, "m-auto", "p-2", 2, "border", "1px solid lightgray", "border-radius", "50%"], [1, "col-7", "font-sizex-smalll", "text-dark", "p-2"], [1, "col-3"], [1, ""], ["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4", 2, "height", "286px"], ["label", "Today"], [1, "row", "heightover", 2, "max-height", "180px"], [4, "ngFor", "ngForOf"], ["label", "Tomorrow"], [1, "row", "heightover"], [3, "label"], [2, "display", "flex", "justify-content", "flex-start", "align-items", "center"], [2, "height", "30px", "width", "100px", "display", "flex", "justify-content", "center", "align-items", "center", 3, "ngClass", "click"], [4, "ngIf"], ["class", "card mb-3", 4, "ngIf"], [2, "font-size", "12px"], [2, "font-weight", "600"], [1, "font-weight-bold", "mb-1"], ["style", "display: flex;justify-content: space-evenly;margin: auto;", 4, "ngFor", "ngForOf"], [2, "display", "flex", "justify-content", "space-evenly", "margin", "auto"], [1, "btn", "btn-outline-light", 2, "margin", "10px 5px", 3, "click"], [1, "btn", "btn-outline-light", "mt-1", "mb-1", 2, "margin", "10px 5px", 3, "click"], [1, "card", "mb-3"], [1, "row", "no-gutters"], [1, "col-md-12"], [1, "card-body", "ml-3", "mr-3"], [1, "row", "text-dark"], [1, "pl-1", "pt-2", "font-weight-bold"], [1, "col-sm-12", "col-md-4"], [1, "pl-1", "pt-2", "font-weight-bold", "text-left", "mcursor", "text-info", "text-decoration-underline"], ["title", "5", 1, "starbgandcolor", "p-1"], ["class", "fa fa-star", 4, "ngFor", "ngForOf"], [1, "text-left", "pr-3", "text-dark", "fontsizesmall"], [1, "text-info", "font-weight-bold"], [1, "text-dark", "fontsizesmall"], [1, "pl-1", "pt-2"], [1, "font-weight-bold", "checkprime"], ["aria-hidden", "true", 1, "fa", "fa-check-circle", "p-1", "checkprime"], [1, "checkprime"], ["class", "card mb-3 mt-2", 4, "ngIf"], [1, "card", "mb-3", "mt-2"], [1, "card-body"], [1, "row", "p-3"], [1, "row", "border-bottom", "pb-2"], ["class", "col-sm-12 col-md-6 col-lg-4 b", 4, "ngFor", "ngForOf"], [1, "row", "pt-2", "pb-2", "border-bottom"], [1, "col-sm-12", "col-md-6"], [1, "row", "pb-2"], ["class", "col-sm-12 b", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "b"], [1, "row", "pt-2", "pb-2"], [1, "card", "pl-2", "pr-2"], [1, "text-right", "pr-2", "pl-2", "text-danger"], [1, "fa", "fa-star"], ["class", "row border-bottom my-2", 4, "ngFor", "ngForOf"], [1, "row", "border-bottom", "my-2"], [1, "rounded-circle", "p-2", "feebbackpro"], [1, "col-8"], [1, "h5", "m-0", "text-dark", "pl-1", "pt-2", "font-weight-bold"], ["class", "row", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-reply-all"], [1, "m-0", "text-dark", "pl-1", "pt-2", "font-weight-bold"], ["class", "col-md-12", 4, "ngFor", "ngForOf"], [1, "dentist-icon"], [1, "col-10"], [1, "m-0"], [1, "col-sm-12", "col-md-6", "col-lg-4", "b"], [1, "col-sm-12", "b"], [1, "col-lg-1", "col-md-2"], [1, "col-lg-8", "col-md-6"], [1, "col-lg-2"], ["class", "card p-2", 4, "ngFor", "ngForOf"], [1, "card", "p-2"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-text"]], template: function DoctorProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileComponent_span_14_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Profile is claimed :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DoctorProfileComponent_span_17_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 96% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(3673 votes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Give Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " VIDEO CONSULTATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-tab-group", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-tab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DoctorProfileComponent_div_45_Template, 15, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-tab", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DoctorProfileComponent_div_49_Template, 15, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-tab", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DoctorProfileComponent_div_55_Template, 15, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-tab", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DoctorProfileComponent_div_61_Template, 15, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-tab", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DoctorProfileComponent_div_67_Template, 15, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_Template_div_click_74_listener() { return ctx.activefn("Info"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_Template_div_click_76_listener() { return ctx.activefn("Feedback"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_Template_div_click_78_listener() { return ctx.activefn("Consult"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Consult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileComponent_Template_div_click_80_listener() { return ctx.activefn("Q&AHealthfeed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Q&AHealthfeed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, DoctorProfileComponent_div_82_Template, 84, 18, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DoctorProfileComponent_div_83_Template, 2, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DoctorProfileComponent_div_84_Template, 24, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, DoctorProfileComponent_div_85_Template, 6, 1, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profileData == null ? null : ctx.profileData.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.degree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileData == null ? null : ctx.profileData.specialitie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.profileData == null ? null : ctx.profileData.experience, " Years Experience Overall (", ctx.profileData == null ? null : ctx.profileData.experience, " years as specialist) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Dr. ", ctx.profileData == null ? null : ctx.profileData.firstName, " ", ctx.profileData == null ? null : ctx.profileData.lastName, " is highly qualified and highly experienced doctor with ", ctx.profileData == null ? null : ctx.profileData.experience, " years of vast experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.profileData == null ? null : ctx.profileData.fees, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slot2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 27, ctx.TimeSlot(3), "dd") + " " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 30, ctx.TimeSlot(3), "LLL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slot3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](57, 33, ctx.TimeSlot(4), "dd") + " " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](58, 36, ctx.TimeSlot(4), "LLL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slot4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](63, 39, ctx.TimeSlot(5), "dd") + " " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](64, 42, ctx.TimeSlot(5), "LLL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.active == "Info"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c0, ctx.active == "Feedback"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c0, ctx.active == "Consult"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](51, _c0, ctx.active == "Q&AHealthfeed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active == "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active == "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active == "Consult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active == "Q&AHealthfeed");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]], styles: [".font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: justify;\n  display: inline;\n}\n\nh1[_ngcontent-%COMP%] {\n  line-height: 28px;\n  display: inline-block;\n}\n\n.textwidth[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.text-decoration-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.mcursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (min-width: 768) {\n  .img[_ngcontent-%COMP%] {\n    height: 300px;\n    background-position: center;\n    background-repeat: inherit;\n    background-size: cover;\n  }\n}\n\n.cardrd[_ngcontent-%COMP%] {\n  border: 1px solid #ffffff !important;\n  border-radius: 15px !important;\n}\n\n.mat-tab-label[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 24px;\n  cursor: pointer;\n  box-sizing: border-box;\n  opacity: 0.6;\n  min-width: 50px !important;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  position: relative;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #f0f0f5;\n  width: 100%;\n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n}\n\nli[_ngcontent-%COMP%]   .a[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli[_ngcontent-%COMP%]   .a[_ngcontent-%COMP%]:hover:not(.selectActive) {\n  background-color: #f0f0f5;\n}\n\n.selectActive[_ngcontent-%COMP%] {\n  background-color: white;\n  color: blue;\n}\n\n.starbgandcolor[_ngcontent-%COMP%] {\n  color: #01a400;\n  background-color: #f0f0f5;\n}\n\n.fontsizesmall[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.checkprime[_ngcontent-%COMP%] {\n  color: #8a45e6;\n}\n\n.buttonlineh[_ngcontent-%COMP%] {\n  line-height: 14px;\n  right: 37px;\n  position: absolute;\n  margin: -39px 0 0 0;\n}\n\n.font-sizex-smalll[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.font-sizex-small[_ngcontent-%COMP%] {\n  font-size: x-small;\n}\n\n.font-sizexx-small[_ngcontent-%COMP%] {\n  font-size: xx-small;\n}\n\n.feebbackpro[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #7575cd82;\n  width: 36px;\n}\n\n.feedback__context[_ngcontent-%COMP%] {\n  margin: 5px 2px;\n  padding: 2px 4px;\n  background-color: #d8f2fc;\n  border: 1px solid #b3e2f4;\n}\n\n.line-height[_ngcontent-%COMP%] {\n  line-height: 200%;\n}\n\nn[_ngcontent-%COMP%], .dentist-icon[_ngcontent-%COMP%] {\n  background: url(//www.practo.com/consult/bundles/cwipage/images/specialities-v4.svg) no-repeat;\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n}\n\n.dentist-icon[_ngcontent-%COMP%] {\n  background-position: 0 0;\n}\n\nul.b[_ngcontent-%COMP%] {\n  list-style-position: inside;\n  list-style: inside !important;\n  background-color: white;\n}\n\nul.c[_ngcontent-%COMP%] {\n  list-style-position: inside;\n  list-style: inside !important;\n  background-color: #f0f0f5;\n}\n\n .mat-tab-label,  .mat-tab-label-active {\n  min-width: 0 !important;\n  padding: 3px !important;\n  margin: 3px !important;\n}\n\n.btn-outline-light[_ngcontent-%COMP%] {\n  color: #666c7d;\n  border-color: #c8c9cc;\n}\n\n.heightover[_ngcontent-%COMP%] {\n  overflow: initial;\n  min-height: 50vh;\n  max-height: 50vh;\n}\n\n.line-height-normal[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\n.bgcolor[_ngcontent-%COMP%] {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.mat-tab-body-wrapper[_ngcontent-%COMP%] {\n  height: 50vh !important;\n}\n\n.text-dark1[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3JzL2RvY3Rvci1wcm9maWxlL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yc1xcZG9jdG9yLXByb2ZpbGVcXGRvY3Rvci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3RvcnMvZG9jdG9yLXByb2ZpbGUvZG9jdG9yLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSwwQkFBQTtJQUNBLHNCQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBOztFQUVJLDhGQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksd0JBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7O0VBRUksdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FERUEsVUFBQTs7QUFDQTtFQUNJLFdBQUE7QUNDSjs7QURFRSxVQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDSjs7QURFRSxXQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRSxvQkFBQTs7QUFDQTtFQUNFLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDSSx1QkFBQTtBQ0VOOztBRENFO0VBQ0UsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9ycy9kb2N0b3ItcHJvZmlsZS9kb2N0b3ItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LXdlaWdodC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRleHR3aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQtZGVjb3JhdGlvbi11bmRlcmxpbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5tY3Vyc29yIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OCkge1xyXG4gICAgLmltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IGluaGVyaXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmRyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIG1pbi13aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmxpIC5hIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSAuYTpob3Zlcjpub3QoLnNlbGVjdEFjdGl2ZSkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmNTtcclxufVxyXG5cclxuLnNlbGVjdEFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uc3RhcmJnYW5kY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMWE0MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGY1O1xyXG59XHJcblxyXG4uZm9udHNpemVzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uY2hlY2twcmltZSB7XHJcbiAgICBjb2xvcjogIzhhNDVlNjtcclxufVxyXG5cclxuLmJ1dHRvbmxpbmVoIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgcmlnaHQ6IDM3cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IC0zOXB4IDAgMCAwO1xyXG59XHJcblxyXG4uZm9udC1zaXpleC1zbWFsbGwge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbFxyXG59XHJcblxyXG4uZm9udC1zaXpleC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGxcclxufVxyXG5cclxuLmZvbnQtc2l6ZXh4LXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbn1cclxuXHJcbi5mZWViYmFja3BybyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NWNkODI7XHJcbiAgICB3aWR0aDogMzZweDtcclxufVxyXG5cclxuLmZlZWRiYWNrX19jb250ZXh0IHtcclxuICAgIG1hcmdpbjogNXB4IDJweDtcclxuICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhmMmZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzZTJmNDtcclxufVxyXG5cclxuLmxpbmUtaGVpZ2h0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG59XHJcblxyXG5uLFxyXG4uZGVudGlzdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvL3d3dy5wcmFjdG8uY29tL2NvbnN1bHQvYnVuZGxlcy9jd2lwYWdlL2ltYWdlcy9zcGVjaWFsaXRpZXMtdjQuc3ZnKSBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5kZW50aXN0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG59XHJcblxyXG51bC5iIHtcclxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICAgIGxpc3Qtc3R5bGU6IGluc2lkZSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudWwuYyB7XHJcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICBsaXN0LXN0eWxlOiBpbnNpZGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsLFxyXG4gOjpuZy1kZWVwLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIG1pbi13aWR0aDogMCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAzcHghaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAzcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtbGlnaHQge1xyXG4gICAgY29sb3I6ICM2NjZjN2Q7XHJcbiAgICBib3JkZXItY29sb3I6ICNjOGM5Y2M7XHJcbn1cclxuXHJcbi5oZWlnaHRvdmVyIHtcclxuICAgIG92ZXJmbG93OiBpbml0aWFsO1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5saW5lLWhlaWdodC1ub3JtYWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmJnY29sb3Ige1xyXG4gICAgY29sb3I6ICM4YTZkM2I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmFlYmNjO1xyXG59XHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICB9XHJcbiAgIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODsgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTsgXHJcbiAgfVxyXG4gIC5tYXQtdGFiLWJvZHktd3JhcHBlcntcclxuICAgICAgaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1kYXJrMXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH0iLCIuZm9udC13ZWlnaHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuaDEge1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGV4dHdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5tY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4KSB7XG4gIC5pbWcge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbn1cbi5jYXJkcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLm1hdC10YWItbGFiZWwge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvcGFjaXR5OiAwLjY7XG4gIG1pbi13aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGY1O1xuICB3aWR0aDogMTAwJTtcbn1cblxubGkge1xuICBmbG9hdDogbGVmdDtcbn1cblxubGkgLmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkgLmE6aG92ZXI6bm90KC5zZWxlY3RBY3RpdmUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmNTtcbn1cblxuLnNlbGVjdEFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnN0YXJiZ2FuZGNvbG9yIHtcbiAgY29sb3I6ICMwMWE0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjU7XG59XG5cbi5mb250c2l6ZXNtYWxsIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmNoZWNrcHJpbWUge1xuICBjb2xvcjogIzhhNDVlNjtcbn1cblxuLmJ1dHRvbmxpbmVoIHtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHJpZ2h0OiAzN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLTM5cHggMCAwIDA7XG59XG5cbi5mb250LXNpemV4LXNtYWxsbCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5mb250LXNpemV4LXNtYWxsIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4uZm9udC1zaXpleHgtc21hbGwge1xuICBmb250LXNpemU6IHh4LXNtYWxsO1xufVxuXG4uZmVlYmJhY2twcm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1Y2Q4MjtcbiAgd2lkdGg6IDM2cHg7XG59XG5cbi5mZWVkYmFja19fY29udGV4dCB7XG4gIG1hcmdpbjogNXB4IDJweDtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZjJmYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzZTJmNDtcbn1cblxuLmxpbmUtaGVpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDIwMCU7XG59XG5cbm4sXG4uZGVudGlzdC1pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKC8vd3d3LnByYWN0by5jb20vY29uc3VsdC9idW5kbGVzL2N3aXBhZ2UvaW1hZ2VzL3NwZWNpYWxpdGllcy12NC5zdmcpIG5vLXJlcGVhdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZGVudGlzdC1pY29uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xufVxuXG51bC5iIHtcbiAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xuICBsaXN0LXN0eWxlOiBpbnNpZGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnVsLmMge1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gIGxpc3Qtc3R5bGU6IGluc2lkZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGY1O1xufVxuXG46Om5nLWRlZXAubWF0LXRhYi1sYWJlbCxcbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAzcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1vdXRsaW5lLWxpZ2h0IHtcbiAgY29sb3I6ICM2NjZjN2Q7XG4gIGJvcmRlci1jb2xvcjogI2M4YzljYztcbn1cblxuLmhlaWdodG92ZXIge1xuICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgbWF4LWhlaWdodDogNTB2aDtcbn1cblxuLmxpbmUtaGVpZ2h0LW5vcm1hbCB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5iZ2NvbG9yIHtcbiAgY29sb3I6ICM4YTZkM2I7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG4gIGJvcmRlci1jb2xvcjogI2ZhZWJjYztcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuXG4ubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBoZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGFyazEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-doctor-profile",
                templateUrl: "./doctor-profile.component.html",
                styleUrls: ["./doctor-profile.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_6__["DoctorProfileService"] }, { type: _services_location_service__WEBPACK_IMPORTED_MODULE_7__["LocationService"] }, { type: _services_booking_page_service__WEBPACK_IMPORTED_MODULE_8__["BookingPageService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/doctors-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/doctors/doctors-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DoctorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsRoutingModule", function() { return DoctorsRoutingModule; });
/* harmony import */ var _time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-slot/time-slot.component */ "./src/app/modules/doctors/time-slot/time-slot.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doctors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctors.component */ "./src/app/modules/doctors/doctors.component.ts");
/* harmony import */ var _doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctor-profile/doctor-profile.component */ "./src/app/modules/doctors/doctor-profile/doctor-profile.component.ts");
/* harmony import */ var _treatments_treatments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treatments/treatments.component */ "./src/app/modules/doctors/treatments/treatments.component.ts");








const routes = [
    { path: '', component: _doctors_component__WEBPACK_IMPORTED_MODULE_3__["DoctorsComponent"] },
    { path: 'doctor_profile/:id', component: _doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_4__["DoctorProfileComponent"] },
    { path: 'timeSlot/:id', component: _time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_0__["TimeSlotComponent"] },
    { path: 'treatments/:id', component: _treatments_treatments_component__WEBPACK_IMPORTED_MODULE_5__["TreatmentsComponent"] },
];
class DoctorsRoutingModule {
}
DoctorsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DoctorsRoutingModule });
DoctorsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DoctorsRoutingModule_Factory(t) { return new (t || DoctorsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DoctorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DoctorsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/doctors.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/doctors/doctors.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function() { return DoctorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-slot/time-slot.component */ "./src/app/modules/doctors/time-slot/time-slot.component.ts");
/* harmony import */ var src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/consultation.service */ "./src/app/services/consultation.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_speciality_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/speciality.service */ "./src/app/services/speciality.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













const _c0 = function (a1) { return ["/doctors", a1]; };
function DoctorsComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speciality_r244 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, speciality_r244._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speciality_r244.fullName);
} }
function DoctorsComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speciality_r245 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, speciality_r245._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", speciality_r245.fullName, "");
} }
function DoctorsComponent_div_25_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r248 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spec_r248.fullName, "");
} }
const _c1 = function (a1) { return ["/doctors/doctor_profile/", a1]; };
const _c2 = function (a1) { return ["/doctors/timeSlot/", a1]; };
function DoctorsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DoctorsComponent_div_25_span_11_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " years experience overall");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Consultation Fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Available Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorsComponent_div_25_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250); const doctor_r246 = ctx.$implicit; const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r249.onConsultation(doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Video Consultation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Book Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r246 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId._id))("src", doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId.firstName, " ", doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 10, doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId.specialitie, 0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId.registrationYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId.location == null ? null : doctor_r246.doctorId.location.landmark, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId.fees, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, doctor_r246 == null ? null : doctor_r246.doctorId == null ? null : doctor_r246.doctorId._id));
} }
function DoctorsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Doctor Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DoctorsComponent {
    constructor(consultationService, userService, router, dialog, speciality, messageService, activatedRoute) {
        this.consultationService = consultationService;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.speciality = speciality;
        this.messageService = messageService;
        this.activatedRoute = activatedRoute;
        this.aval = false;
        this.doctorList = [];
        this.evningSlot = [];
        this.morningSlot = [];
        this.minDate = new Date();
        this.autoDoctList = [];
        this.keyword = 'firstName';
        this.tempArray = [];
        this.getScroll();
        this.getDoctorList();
        this.speciality.getSpecializationAll().then((resData) => {
            console.log("DoctorsComponent -> resData", resData);
            this.specialityList = resData.data;
        }).catch(error => {
            console.log("DoctorsComponent -> error", error);
        });
    }
    addPractice() {
        const dialogRef = this.dialog.open(_time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_3__["TimeSlotComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    getDoctorList() {
        this.consultationService.getDoctorUsingId(this.DocID).then(resData => {
            console.log("DoctorsComponent -> getDoctorList -> resData++++++++++++++++", resData);
            this.doctorList = resData.data;
            this.tempArray = resData.data;
            console.log("DoctorsComponent -> getDoctorList -> this.tempArray", this.tempArray);
            this.doctorList.forEach(ele => this.autoDoctList.push(ele.userId));
        }).catch(error => {
            console.log("DoctorsComponent -> getDoctorList -> error", error);
        });
    }
    getfreeDocList() {
        this.consultationService.getDoctFree().then((resData) => {
            console.log("DoctorsComponent -> getfreeDocList -> resData", resData);
        }).catch((err) => {
            console.log("DoctorsComponent -> getfreeDocList -> err", err);
        });
    }
    clear() {
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"];
        this.messageService.clear('myKey1');
    }
    search() {
        this.doctorList = this.tempArray;
        this.doctorList = this.tempArray.filter(ele => ele.doctorId.firstName.includes(this.searchText.toLowerCase()));
        console.log("DoctorsComponent -> search -> this.searchText", this.searchText);
        if (!this.searchText) {
            this.doctorList = this.tempArray;
        }
    }
    onConsultation(id) {
        var data = {
            doctor: id
        };
        this.consultationService.createSession(data).then(resData => {
            // console.log("DoctorsComponent -> onConsultation -> resData", resData);
            this.router.navigate(['/video-conference']);
        }).catch(error => {
            console.log("DoctorsComponent -> onConsultation -> error", error);
        });
    }
    onSelectSlot(time) {
        this.selectedSlot = time;
    }
    selectEvent(item) {
    }
    onChangeSearch(val) {
    }
    onFocused(e) {
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.DocID = params['id'];
            // console.log("DoctorsComponent -> ngOnInit -> this.DocID++++++++++++++++++++++++", this.DocID)
            const free = "free";
            if (this.DocID == free.toString) {
                this.getfreeDocList();
            }
            this.getDoctorList();
        });
    }
    showtime(doctor) {
        this.show = doctor._id;
        // console.log("DoctorsComponent -> showtime -> doctor", doctor);
        var session1Start = doctor.slots[0].session1Start.split(":");
        var session1End = doctor.slots[0].session1End.split(":");
        var session2Start = doctor.slots[0].session2Start.split(":");
        var session2End = doctor.slots[0].session2End.split(":");
        // console.log("DoctorsComponent -> showtime -> session1Start", session1Start, session1End, session2Start, session2End)
        this.morningSlot = [];
        this.evningSlot = [];
        for (var i = parseInt(session1Start[0]); i < parseInt(session1End[0]); i++) {
            var hour = i < 10 ? '0' + i : i;
            if (i <= 13) {
                this.morningSlot.push({ label: hour + ':00', value: hour + ':00' });
                this.morningSlot.push({ label: hour + ':30', value: hour + ':30' });
            }
        }
        for (var i = parseInt(session2Start[0]); i < parseInt(session2End[0]); i++) {
            var hour = i < 10 ? '0' + i : i;
            if (i >= 13) {
                this.evningSlot.push({ label: hour + ':00', value: hour + ':00' });
                this.evningSlot.push({ label: hour + ':30', value: hour + ':30' });
            }
        }
    }
    avaialableclick() {
        // this.placesLoad();
        this.aval = !this.aval;
    }
    getScroll() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
            var sticky = jquery__WEBPACK_IMPORTED_MODULE_1__('.sticky'), scroll = jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop();
            if (scroll >= 100)
                sticky.addClass('fixed');
            else
                sticky.removeClass('fixed');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
            var sticky = jquery__WEBPACK_IMPORTED_MODULE_1__('.sticky1'), scroll = jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop();
            if (scroll >= 100 && scroll <= 1600)
                sticky.addClass('fixed1');
            else
                sticky.removeClass('fixed1');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop() >= 112) {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.sticky-outer-wrapper').addClass('fixed-sticky-outer');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.sticky-outer-wrapper').removeClass('fixed-sticky-outer');
            }
        });
    }
}
DoctorsComponent.ɵfac = function DoctorsComponent_Factory(t) { return new (t || DoctorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_4__["ConsultationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_speciality_service__WEBPACK_IMPORTED_MODULE_7__["SpecialityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
DoctorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorsComponent, selectors: [["app-doctors"]], decls: 27, vars: 5, consts: [[1, "container-fluid"], [1, "row", 2, "margin-top", "100px"], [1, "col-md-4", "col-lg-3"], [1, "input-group", "mb-3", 2, "display", "block"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search Doctor Here !", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "input-group", "mb-3", "shhh", 2, "display", "block"], [1, "form-control"], [4, "ngFor", "ngForOf"], [1, "card", "cad1", "hidd"], [1, "hed1"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", "style", "cursor: pointer;", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-8", "col-lg-9", "list-group1", "aduj1"], [1, "col-sm-12"], [1, "row"], ["class", "col-lg-4 col-sm-6   col-12", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-sm-6 col-12 fweight", 4, "ngIf"], [2, "width", "100%", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "list-group-item", 2, "cursor", "pointer", 3, "routerLink"], [1, "col-lg-4", "col-sm-6", "col-12"], [1, "card", "cad2"], [1, "card-header", 2, "padding", "0px"], [1, "col-4"], ["onerror", "this.src='../../../assets/images/doc.jpg'", "alt", "Avatar", 1, "img-thumbnail", "img2", 3, "routerLink", "src"], [1, "col-8"], [1, "hed3"], [3, "routerLink"], [2, "margin", "0px", "font-size", "12px"], [1, "fa", "fa-thumbs-up", "text-success"], [1, "card-body", 2, "padding", "10px", "line-height", "10px", "font-size", "12px", "text-align", "left", "height", "100%"], [1, "col-12"], [1, ""], [1, "flexs"], ["type", "button", 1, "btn", "btn-outline-primary", "fsize", 3, "click"], [1, "btn", "btn-primary", "fsize", 3, "routerLink"], [1, "col-lg-4", "col-sm-6", "col-12", "fweight"]], template: function DoctorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorsComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchText = $event; })("input", function DoctorsComponent_Template_input_input_7_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " --- Select Speciality --- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DoctorsComponent_option_15_Template, 3, 4, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SPECIALITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DoctorsComponent_li_21_Template, 2, 4, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DoctorsComponent_div_25_Template, 37, 20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DoctorsComponent_div_26_Template, 2, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specialityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specialityList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctorList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorList.length == "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["SlicePipe"]], styles: [".flexs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.se1[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  background-color: #f3f3f3;\n  display: block;\n}\n\n.cont1[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.mt-30[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  background-color: white;\n}\n\n.cad1[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.hed1[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n}\n\n.hed3[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 16px;\n}\n\n.aduj1[_ngcontent-%COMP%] {\n  background-color: #f3f3f3;\n  padding-top: 60px;\n}\n\n.cad2[_ngcontent-%COMP%] {\n  height: 235px;\n  padding: 10px;\n  border: 1px solid lightgray !important;\n  border-radius: 5px !important;\n}\n\n.img2[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}\n\n.cdfot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  font-size: 12px;\n  padding: 0px;\n  background-color: white;\n  border-top: none;\n}\n\n.fsize[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.fweight[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n}\n\n.marg1[_ngcontent-%COMP%] {\n  margin: 10px 0px 0px 0px !important;\n}\n\n.imgt[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n[_nghost-%COMP%]     .custom-toast .ui-toast-message {\n  background: white !important;\n  width: 350px;\n  right: 50px;\n}\n\n[_nghost-%COMP%]     .ui-button-icon {\n  background-color: gray;\n}\n\n.marg[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-weight: 500;\n}\n\n.marg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.hr1[_ngcontent-%COMP%] {\n  height: 2px solid black;\n}\n\n.acc[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin: -10px 0px 0px 0px;\n}\n\n.acc1[_ngcontent-%COMP%] {\n  border-right: 1px solid lightgray;\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.rej[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.shhh[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media screen and (max-width: 770px) {\n  .hidd[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .shhh[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n\nul[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 0px 20px !important;\n}\n\n.sectiona[_ngcontent-%COMP%] {\n  margin-top: 103px;\n}\n\n.ingrp[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 74px;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n}\n\n.fixed1[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 146px;\n  width: 33.33%;\n  z-index: 999;\n  bottom: 300px;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.scroll1[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n#exampleFormControlSelect1[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #434ea2;\n  color: white;\n  border: none;\n}\n\n.primeclas[_ngcontent-%COMP%] {\n  color: #8a45e6;\n}\n\n.liss[_ngcontent-%COMP%] {\n  margin-top: 10px !important;\n  color: white;\n}\n\n.listd[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.sortby[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 10px !important;\n}\n\n.mapimage[_ngcontent-%COMP%] {\n  width: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url('bangalore.webp');\n}\n\n.asd[_ngcontent-%COMP%] {\n  height: 64px;\n}\n\n@media screen and (max-width: 767px) {\n  .side[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .asd[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .ullist1[_ngcontent-%COMP%] {\n    display: inline !important;\n    list-style: none;\n  }\n\n  ul[_ngcontent-%COMP%]    > .flixin[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin: 12px 20px !important;\n  }\n\n  .btnbar[_ngcontent-%COMP%] {\n    display: block !important;\n    color: white;\n    float: right;\n  }\n\n  .fixed1[_ngcontent-%COMP%] {\n    position: static;\n    top: 0px;\n    right: 0;\n    width: 100%;\n    z-index: 0;\n    bottom: 0px;\n  }\n\n  .don[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .card-body[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  #exampleFormControlSelect1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    background-color: #434ea2;\n    color: white;\n    border: none;\n  }\n\n  .profcard[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .flixin[_ngcontent-%COMP%] {\n    margin: 30px 18px;\n  }\n\n  .headerc[_ngcontent-%COMP%] {\n    background: #10185f;\n    margin-top: 6px;\n  }\n\n  .mat-tab-group[_ngcontent-%COMP%]   .mat-primary[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  .slidetime[_ngcontent-%COMP%] {\n    margin: 0px !important;\n  }\n\n  .driven[_ngcontent-%COMP%] {\n    display: flex !important;\n    overflow-x: auto !important;\n  }\n}\n\n.side[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.btnbar[_ngcontent-%COMP%] {\n  display: none;\n  color: white;\n  float: right;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  height: 87vh !important;\n  overflow: auto;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #10185f !important;\n}\n\n.btnlocation[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n\n.currentLocation[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n\n.btnsuccess[_ngcontent-%COMP%] {\n  padding: 2px !important;\n}\n\n.sect1[_ngcontent-%COMP%] {\n  margin-top: 120px;\n}\n\n.fedup[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.prime[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.fa-check-circle[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.inlflx[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  margin: 10px 0px 0px 0px !important;\n  list-style: none;\n}\n\n.headerc[_ngcontent-%COMP%] {\n  background: #10185f;\n  margin-top: 6px;\n}\n\n.firstcard[_ngcontent-%COMP%] {\n  background: white;\n  margin-bottom: 40px;\n}\n\n.profcard[_ngcontent-%COMP%] {\n  top: 30px;\n  padding: 20px;\n}\n\n.profimage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 125px;\n  height: 125px;\n  margin-left: 28px;\n  margin-bottom: 10px;\n}\n\n.vprofile[_ngcontent-%COMP%] {\n  text-align: center;\n  display: none;\n}\n\n.feedbacktext[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.bookingside[_ngcontent-%COMP%] {\n  color: green;\n  margin: 0px !important;\n}\n\n.availableicon[_ngcontent-%COMP%] {\n  margin: 9px;\n}\n\n.nobooktext[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.cardex2[_ngcontent-%COMP%] {\n  z-index: 982;\n  margin: 0px 10px;\n  border-radius: 5px !important;\n}\n\n.gap11[_ngcontent-%COMP%] {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.grp[_ngcontent-%COMP%] {\n  line-height: 1px;\n}\n\n.noslot[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 8%;\n}\n\n.c-day-session__slot[_ngcontent-%COMP%] {\n  width: 14.285%;\n  padding: 4px;\n  letter-spacing: normal;\n}\n\n.c-day-session__slot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 84px;\n  border-radius: 3px;\n  border: 1px solid #e0e0e4;\n  padding: 5px 0;\n  display: inline-block;\n  text-align: center;\n  color: #2d2d32;\n  cursor: pointer;\n}\n\n.slotsavailable[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n.or[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.alert[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.showtime[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\n.slidetime[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.don[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  z-index: 999;\n  border-radius: 8px !important;\n  background-image: url('dweb_bg.webp');\n  width: 320px;\n  height: 200px;\n  color: white;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.cosevn[_ngcontent-%COMP%] {\n  padding: 7px 0px 0px 30px;\n}\n\n.cosevn[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.pmary[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.disr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 9999;\n}\n\n.mat-checkbox-layout[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: white !important;\n  margin: 0px;\n}\n\n.pp[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.bringwhite[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\n.morningslot[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media (max-width: 768px) {\n  .profimage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n\n.selectedSloats[_ngcontent-%COMP%] {\n  border: 1px solid #4e73df !important;\n}\n\n.profcard[_ngcontent-%COMP%]:hover    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .vprofile[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.list-group1[_ngcontent-%COMP%] {\n  \n  overflow: auto;\n  width: 100%;\n  padding: 30px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3JzL0M6XFx3SW1wb3J0YW50Rm9sZGVyXFx3aGVhbHRoeWxpZmVcXHdoZWFsdGh5TGlmZS13ZWItMS9zcmNcXGFwcFxcbW9kdWxlc1xcZG9jdG9yc1xcZG9jdG9ycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9kb2N0b3JzL2RvY3RvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDREY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7RUFDRCx1QkFBQTtBQ0NEOztBRENBO0VBQ0MsV0FBQTtBQ0VEOztBREFBO0VBQ0UsWUFBQTtFQUFjLGNBQUE7QUNJaEI7O0FERkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ01GOztBREhBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtBQ1NGOztBRFBBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNVRDs7QURQQTtFQUNFLG1DQUFBO0FDVUY7O0FEUEE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVUQ7O0FET0E7RUFFRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTEY7O0FEVUU7RUFDRSxzQkFBQTtBQ1BKOztBRFlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDVEY7O0FEVUU7RUFDRSxnQkFBQTtBQ1JKOztBRFdBO0VBQ0UsdUJBQUE7QUNSRjs7QURVQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDUEY7O0FEU0E7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNORjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNMRjs7QURTQTtFQUNFLHdCQUFBO0FDTkY7O0FEU0E7RUFDRTtJQUNFLGFBQUE7RUNORjs7RURRQTtJQUNFLHlCQUFBO0VDTEY7QUFDRjs7QURvREE7RUFDRSwyQkFBQTtBQ2xERjs7QURvREE7RUFDRSxpQkFBQTtBQ2pERjs7QURtREE7RUFDRSxpQkFBQTtBQ2hERjs7QURxREE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2xERjs7QUR1REE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3JERjs7QUR1REE7RUFDRSxnQkFBQTtBQ3BERjs7QUR1REE7RUFFRSxjQUFBO0FDckRGOztBRHVEQTtFQUNFLFdBQUE7QUNwREY7O0FEaUZBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUM5RUY7O0FEaUZBO0VBQ0UsY0FBQTtBQzlFRjs7QURnRkE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUM3RUY7O0FEb0ZBO0VBQ0UsaUJBQUE7QUNqRkY7O0FEbUZBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQ2hGRjs7QURrRkE7RUFFRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QUNoRkY7O0FEa0ZBO0VBQ0UsWUFBQTtBQy9FRjs7QURrRkE7RUFDRTtJQUNFLHlCQUFBO0VDL0VGOztFRGlGQTtJQUNFLHdCQUFBO0VDOUVGOztFRG1GQTtJQUlFLDBCQUFBO0lBQ0EsZ0JBQUE7RUNuRkY7O0VEd0ZBO0lBQ0UsNEJBQUE7RUNyRkY7O0VEdUZBO0lBQ0UseUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQ3BGRjs7RUR1RkE7SUFDRSxnQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VDcEZGOztFRHNGQTtJQUNFLGFBQUE7RUNuRkY7O0VEcUZBO0lBQ0Usa0JBQUE7RUNsRkY7O0VEb0ZBO0lBQ0Usc0JBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDakZGOztFRG1GQTtJQUVFLGFBQUE7RUNqRkY7O0VEbUZBO0lBQ0UsaUJBQUE7RUNoRkY7O0VEa0ZBO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VDL0VGOztFRGtGQTtJQUNFLHNCQUFBO0VDL0VGOztFRGlGQTtJQUNFLHNCQUFBO0VDOUVGOztFRGdGQTtJQUNFLHdCQUFBO0lBQ0EsMkJBQUE7RUM3RUY7QUFDRjs7QURnRkE7RUFDRSxhQUFBO0FDOUVGOztBRGlGQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzlFRjs7QURpRkE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUM5RUE7O0FEaUZBO0VBQ0UsOEJBQUE7QUM5RUY7O0FEaUZBO0VBQ0UsV0FBQTtBQzlFRjs7QURnRkE7RUFDRSxZQUFBO0FDN0VGOztBRCtFQTtFQUNFLHVCQUFBO0FDNUVGOztBRDhFQTtFQUNFLGlCQUFBO0FDM0VGOztBRDZFQTtFQUNFLGVBQUE7QUMxRUY7O0FENEVBO0VBQ0UsWUFBQTtBQ3pFRjs7QUQyRUE7RUFDRSxZQUFBO0FDeEVGOztBRCtFQTtFQUNFLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQzVFRjs7QUQ4RUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUMzRUY7O0FENkVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQzFFRjs7QUQ0RUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtBQ3pFRjs7QUQ0RUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3pFSjs7QUQ0RUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUN6RUY7O0FEMkVBO0VBQ0UsWUFBQTtBQ3hFRjs7QUQwRUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUN2RUY7O0FEeUVBO0VBQ0UsV0FBQTtBQ3RFRjs7QUQ0RUE7RUFDRSxlQUFBO0FDekVGOztBRDhFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDM0VGOztBRDhFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUMzRUY7O0FEOEVBO0VBQ0UsZ0JBQUE7QUMzRUY7O0FENkVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDMUVGOztBRDRFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUN6RUY7O0FEMkVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDeEVGOztBRDBFQTtFQUNFLGNBQUE7QUN2RUY7O0FEeUVBO0VBQ0UsY0FBQTtBQ3RFRjs7QUR3RUE7RUFDRSxlQUFBO0FDckVGOztBRHdFQTtFQUNFLGVBQUE7QUNyRUY7O0FEdUVBO0VBQ0UsWUFBQTtBQ3BFRjs7QURzRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNuRUY7O0FEcUVBO0VBQ0UseUJBQUE7QUNsRUY7O0FEbUVFO0VBQ0UsWUFBQTtBQ2pFSjs7QURvRUE7RUFDRSxZQUFBO0FDakVGOztBRG9FRTtFQUNFLGFBQUE7QUNqRUo7O0FEcUVBO0VBRUUsc0JBQUE7QUNuRUY7O0FEcUZBO0VBQ0Usa0NBQUE7RUFDQSxXQUFBO0FDbEZGOztBRG9GQTtFQUNFLFdBQUE7QUNqRkY7O0FEbUZBO0VBQ0UsV0FBQTtBQ2hGRjs7QURrRkE7RUFDRSxrQ0FBQTtBQy9FRjs7QURrRkE7RUFDRSxhQUFBO0FDL0VGOztBRGtGQTtFQUVJO0lBQ0UsMkJBQUE7RUNoRko7QUFDRjs7QURvRkE7RUFDRSxvQ0FBQTtBQ2xGRjs7QUR3Rk07RUFDRSxjQUFBO0FDckZSOztBRDRGQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtBQzFGRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9ycy9kb2N0b3JzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhze1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG5cclxuLnNlMXtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbnQxe1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tdC0zMHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYWQxe1xyXG4gd2lkdGg6MTAwJTtcclxufVxyXG4uaGVkMXtcclxuICBtYXJnaW46IGF1dG87IGRpc3BsYXk6YmxvY2tcclxufVxyXG4uaGVkM3tcclxuICBtYXJnaW46MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uYWR1ajF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuXHJcbn1cclxuLmNhZDJ7XHJcbiAgaGVpZ2h0OiAyMzVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWcye1xyXG4gIGRpc3BsYXk6IGJsb2NrOyBcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OjgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5jZGZvdHtcclxuICBkaXNwbGF5OmZsZXg7IFxyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcbi5mc2l6ZXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmZ3ZWlnaHR7XHJcbiBmb250LXdlaWdodDogNTAwOyBcclxuIGZvbnQtc2l6ZToxNnB4O1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFyZzF7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWd0e1xyXG4gd2lkdGg6IDYwcHg7XHJcbiBoZWlnaHQ6IDYwcHg7IFxyXG4gYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi8vIC51aS10b2FzdHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4vLyAgIHdpZHRoOjMwMHB4O1xyXG4vLyAgIGhlaWdodDogMzAwcHg7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLnVpLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2Utc3VjY2VzcyB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbi8vICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlIHtcclxuICBcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOjM1MHB4O1xyXG4gIHJpZ2h0OjUwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzRjVFRkIsICNGQzQ2NkIpO1xyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNGNUVGQiwgI0ZDNDY2Qik7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbi1pY29ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB9XHJcblxyXG5cclxuXHJcbi5tYXJne1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcbi5ocjF7XHJcbiAgaGVpZ2h0OiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmFjY3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogLTEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuLmFjYzF7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmVqe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBcclxufVxyXG5cclxuLnNoaGh7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc3MHB4KXtcclxuICAuaGlkZHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zaGhoe1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIC51aS10b2FzdC10b3AtcmlnaHR7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbi8vICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC51aS10b2FzdC1tZXNzYWdlLXN1Y2Nlc3N7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuLy8gICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbi8vICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIC5jdXN0b20tdG9hc3QgLnVpLXRvYXN0IHtcclxuLy8gICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgdG9wOiAyMCU7XHJcbi8vICAgbGVmdDogNTAlO1xyXG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4vLyAgIHdpZHRoOiA1MCU7XHJcbi8vIH1cclxuXHJcbi8vIC8vIGFkanVzdHMgZm9udCwgY29sb3IgYW5kIG90aGVyIGVsZW1lbnRzIG9mIHRoZSB0b2FzdCB3aW5kb3cgaWYgbmVlZGVkXHJcbi8vIC5jdXN0b20tdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UtY29udGVudCB7XHJcbi8vICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuLy8gICBiYWNrZ3JvdW5kOiAjRkZEMDdCO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudWwgPiBkaXYgPiBsaSB7XHJcbiAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWN0aW9uYSB7XHJcbiAgbWFyZ2luLXRvcDogMTAzcHg7XHJcbn1cclxuLmluZ3JwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uc3RpY2t5IHtcclxufVxyXG5cclxuLmZpeGVkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA3NHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcbi5zdGlja3kxIHtcclxufVxyXG5cclxuLmZpeGVkMSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTQ2cHg7XHJcbiAgLy8gcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDMzLjMzJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm90dG9tOiAzMDBweDtcclxufVxyXG5ie1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zY3JvbGwxe1xyXG4gXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi8vIC8qIFRyYWNrICovXHJcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4vLyAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gfVxyXG4gXHJcbi8vIC8qIEhhbmRsZSAqL1xyXG4vLyA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjMTAxODVmOyBcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuLy8gOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZDogI2IzMDAwMDsgXHJcbi8vIH1cclxuXHJcbi8vIC5zY3JvbGwxOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbi8vICAgd2lkdGg6IDVweDtcclxuLy8gICAvLyBiYWNrZ3JvdW5kOiAjODg4O1xyXG4gIFxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4jZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzRlYTI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnByaW1lY2xhcyB7XHJcbiAgY29sb3I6ICM4YTQ1ZTY7XHJcbn1cclxuLmxpc3Mge1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLy8gLmZvcm1jZGR7XHJcbi8vICAgd2lkdGg6IDIwMHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRlYTI7XHJcbi8vICAgY29sb3I6IHdoaXRlO2JvcmRlcjpub25lXHJcbi8vIH1cclxuLmxpc3RkIHtcclxuICBkaXNwbGF5OiBjb250ZW50cztcclxufVxyXG4uc29ydGJ5IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hcGltYWdlIHtcclxuIFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5nYWxvcmUud2VicFwiKTtcclxufVxyXG4uYXNkIHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNpZGUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFzZCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8vIC51bGxpc3R7XHJcbiAgLy8gICBkaXNwbGF5OiBub25lO1xyXG4gIC8vIH1cclxuICAudWxsaXN0MSB7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgLy8gbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIC8vIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIC8vIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICAgIC8vIGhlaWdodDogNDJweDtcclxuICB9XHJcblxyXG4gIHVsID4gLmZsaXhpbiA+IGxpIHtcclxuICAgIG1hcmdpbjogMTJweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG5iYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5maXhlZDEge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBib3R0b206IDBweDtcclxuICB9XHJcbiAgLmRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgI2V4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDEge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRlYTI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIC5wcm9mY2FyZCB7XHJcbiAgICAvLyB0b3A6IDMycHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICAuZmxpeGluIHtcclxuICAgIG1hcmdpbjogMzBweCAxOHB4O1xyXG4gIH1cclxuICAuaGVhZGVyYyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAxODVmO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItZ3JvdXAgLm1hdC1wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zbGlkZXRpbWUge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRyaXZlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0bmJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cHtcclxuaGVpZ2h0OiA4N3ZoICFpbXBvcnRhbnQ7XHJcbm92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzEwMTg1ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRubG9jYXRpb24ge1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcbi5jdXJyZW50TG9jYXRpb24ge1xyXG4gIHdpZHRoOiAxMHJlbTtcclxufVxyXG4uYnRuc3VjY2VzcyB7XHJcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlY3QxIHtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG4uZmVkdXAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucHJpbWUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG4uZmEtY2hlY2stY2lyY2xlIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLy8gLnVsbGlzdHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4vLyAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG4vLyB9XHJcbi5pbmxmbHgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uaGVhZGVyYyB7XHJcbiAgYmFja2dyb3VuZDogIzEwMTg1ZjtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmZpcnN0Y2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4ucHJvZmNhcmQge1xyXG4gIHRvcDogMzBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5wcm9maW1hZ2Uge1xyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG4udnByb2ZpbGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5mZWVkYmFja3RleHQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uYm9va2luZ3NpZGUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hdmFpbGFibGVpY29uIHtcclxuICBtYXJnaW46IDlweDtcclxufVxyXG4vLyAuYnRuYm9va2luZyB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbi8vIH1cclxuLm5vYm9va3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4vLyAuYnRudmlkZW9jb251bHRhdGlvbiB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuLmNhcmRleDIge1xyXG4gIHotaW5kZXg6IDk4MjtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2FwMTEge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmdycCB7XHJcbiAgbGluZS1oZWlnaHQ6IDFweDtcclxufVxyXG4ubm9zbG90IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuLmMtZGF5LXNlc3Npb25fX3Nsb3Qge1xyXG4gIHdpZHRoOiAxNC4yODUlO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbi5jLWRheS1zZXNzaW9uX19zbG90IHNwYW4ge1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU0O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyZDJkMzI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zbG90c2F2YWlsYWJsZSB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuLm9yIHtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4uYWxlcnQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLnNob3d0aW1lIHtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLnNsaWRldGltZSB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcbi5kb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2R3ZWJfYmcud2VicFwiKTtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5jb3Nldm4ge1xyXG4gIHBhZGRpbmc6IDdweCAwcHggMHB4IDMwcHg7XHJcbiAgPiBoMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbi5wbWFyeSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kaXNyIHtcclxuICBpbWcge1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2hlY2tib3gtbGF5b3V0IHtcclxuICBcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcblxyXG4vLyBtYXQtY2hlY2tib3gge1xyXG4vLyAgIGNvbG9yOiByZ2IoMCwxNzgsMCk7XHJcbi8vICAgL2RlZXAvIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDE3OCwwKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC9kZWVwLyAmLm1hdC1jaGVja2JveC1mb2N1c2Vke1xyXG4vLyAgICAgICAubWF0LWluay1yaXBwbGV7XHJcbi8vICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE3OCwgMCwgLjI2KTtcclxuLy8gICAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4ucHAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5ibHVlIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4uYnJpbmd3aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLm1vcm5pbmdzbG90IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZmltYWdlIHtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3RlZFNsb2F0cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNzNkZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJvZmNhcmQ6aG92ZXIge1xyXG4gID4gZGl2IHtcclxuICAgID4gZGl2IHtcclxuICAgICAgPiAudnByb2ZpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmxpc3QtZ3JvdXAxIHtcclxuICAvKiBoZWlnaHQ6IDg3dmggIWltcG9ydGFudDsgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBwYWRkaW5nOjBweDtcclxuICBwYWRkaW5nOiAzMHB4IDBweCAwcHggMHB4O1xyXG59IiwiLmZsZXhzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2UxIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250MSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubXQtMzAge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jYWQxIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWQxIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlZDMge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYWR1ajEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLmNhZDIge1xuICBoZWlnaHQ6IDIzNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWcyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2Rmb3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uZnNpemUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5md2VpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXJnMSB7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1ndCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMzUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnVpLWJ1dHRvbi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLm1hcmcge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYXJnIHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaHIxIHtcbiAgaGVpZ2h0OiAycHggc29saWQgYmxhY2s7XG59XG5cbi5hY2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAtMTBweCAwcHggMHB4IDBweDtcbn1cblxuLmFjYzEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlaiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNoaGgge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gIC5oaWRkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNoaGgge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbnVsID4gZGl2ID4gbGkge1xuICBtYXJnaW46IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN0aW9uYSB7XG4gIG1hcmdpbi10b3A6IDEwM3B4O1xufVxuXG4uaW5ncnAge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDc0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5maXhlZDEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTQ2cHg7XG4gIHdpZHRoOiAzMy4zMyU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm90dG9tOiAzMDBweDtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zY3JvbGwxIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuI2V4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDEge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzRlYTI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJpbWVjbGFzIHtcbiAgY29sb3I6ICM4YTQ1ZTY7XG59XG5cbi5saXNzIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saXN0ZCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uc29ydGJ5IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcGltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5nYWxvcmUud2VicFwiKTtcbn1cblxuLmFzZCB7XG4gIGhlaWdodDogNjRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYXNkIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudWxsaXN0MSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIHVsID4gLmZsaXhpbiA+IGxpIHtcbiAgICBtYXJnaW46IDEycHggMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ0bmJhciB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLmZpeGVkMSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jYXJkLWJvZHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICNleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QxIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRlYTI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5wcm9mY2FyZCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5mbGl4aW4ge1xuICAgIG1hcmdpbjogMzBweCAxOHB4O1xuICB9XG5cbiAgLmhlYWRlcmMge1xuICAgIGJhY2tncm91bmQ6ICMxMDE4NWY7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAgLm1hdC1wcmltYXJ5IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNsaWRldGltZSB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kcml2ZW4ge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ0bmJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGlzdC1ncm91cCB7XG4gIGhlaWdodDogODd2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjMTAxODVmICFpbXBvcnRhbnQ7XG59XG5cbi5idG5sb2NhdGlvbiB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4uY3VycmVudExvY2F0aW9uIHtcbiAgd2lkdGg6IDEwcmVtO1xufVxuXG4uYnRuc3VjY2VzcyB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG4uc2VjdDEge1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cblxuLmZlZHVwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJpbWUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mYS1jaGVjay1jaXJjbGUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmxmbHgge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmhlYWRlcmMge1xuICBiYWNrZ3JvdW5kOiAjMTAxODVmO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5maXJzdGNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnByb2ZjYXJkIHtcbiAgdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucHJvZmltYWdlIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDEyNXB4O1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnZwcm9maWxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZmVlZGJhY2t0ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYm9va2luZ3NpZGUge1xuICBjb2xvcjogZ3JlZW47XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hdmFpbGFibGVpY29uIHtcbiAgbWFyZ2luOiA5cHg7XG59XG5cbi5ub2Jvb2t0ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2FyZGV4MiB7XG4gIHotaW5kZXg6IDk4MjtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5nYXAxMSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5ncnAge1xuICBsaW5lLWhlaWdodDogMXB4O1xufVxuXG4ubm9zbG90IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4JTtcbn1cblxuLmMtZGF5LXNlc3Npb25fX3Nsb3Qge1xuICB3aWR0aDogMTQuMjg1JTtcbiAgcGFkZGluZzogNHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4uYy1kYXktc2Vzc2lvbl9fc2xvdCBzcGFuIHtcbiAgd2lkdGg6IDg0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlNDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJkMmQzMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xvdHNhdmFpbGFibGUge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLm9yIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5hbGVydCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnNob3d0aW1lIHtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uc2xpZGV0aW1lIHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4uZG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogOTk5O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9kd2ViX2JnLndlYnBcIik7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY29zZXZuIHtcbiAgcGFkZGluZzogN3B4IDBweCAwcHggMzBweDtcbn1cbi5jb3Nldm4gPiBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBtYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGlzciBpbWcge1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubWF0LWNoZWNrYm94LWxheW91dCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucHAge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJyaW5nd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubW9ybmluZ3Nsb3Qge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbWFnZSBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLnNlbGVjdGVkU2xvYXRzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNzNkZiAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmNhcmQ6aG92ZXIgPiBkaXYgPiBkaXYgPiAudnByb2ZpbGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxpc3QtZ3JvdXAxIHtcbiAgLyogaGVpZ2h0OiA4N3ZoICFpbXBvcnRhbnQ7ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweCAwcHggMHB4IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doctors',
                templateUrl: './doctors.component.html',
                styleUrls: ['./doctors.component.scss']
            }]
    }], function () { return [{ type: src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_4__["ConsultationService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: src_app_services_speciality_service__WEBPACK_IMPORTED_MODULE_7__["SpecialityService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/doctors.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/doctors/doctors.module.ts ***!
  \***************************************************/
/*! exports provided: DoctorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsModule", function() { return DoctorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctors-routing.module */ "./src/app/modules/doctors/doctors-routing.module.ts");
/* harmony import */ var _doctors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctors.component */ "./src/app/modules/doctors/doctors.component.ts");
/* harmony import */ var _doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctor-profile/doctor-profile.component */ "./src/app/modules/doctors/doctor-profile/doctor-profile.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-slot/time-slot.component */ "./src/app/modules/doctors/time-slot/time-slot.component.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _notification_popup_notification_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-popup/notification-popup.component */ "./src/app/modules/doctors/notification-popup/notification-popup.component.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _treatments_treatments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./treatments/treatments.component */ "./src/app/modules/doctors/treatments/treatments.component.ts");
/* harmony import */ var _feed_back_pop_feed_back_pop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feed-back-pop/feed-back-pop.component */ "./src/app/modules/doctors/feed-back-pop/feed-back-pop.component.ts");
/* harmony import */ var _checking_popup_checking_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checking-popup/checking-popup.component */ "./src/app/modules/doctors/checking-popup/checking-popup.component.ts");















class DoctorsModule {
}
DoctorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DoctorsModule });
DoctorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DoctorsModule_Factory(t) { return new (t || DoctorsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DoctorsModule, { declarations: [_doctors_component__WEBPACK_IMPORTED_MODULE_3__["DoctorsComponent"],
        _doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_4__["DoctorProfileComponent"],
        _time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_6__["TimeSlotComponent"],
        _notification_popup_notification_popup_component__WEBPACK_IMPORTED_MODULE_9__["NotificationPopupComponent"],
        _treatments_treatments_component__WEBPACK_IMPORTED_MODULE_11__["TreatmentsComponent"],
        _feed_back_pop_feed_back_pop_component__WEBPACK_IMPORTED_MODULE_12__["FeedBackPopComponent"],
        _checking_popup_checking_popup_component__WEBPACK_IMPORTED_MODULE_13__["CheckingPopupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorsRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _doctors_component__WEBPACK_IMPORTED_MODULE_3__["DoctorsComponent"],
                    _doctor_profile_doctor_profile_component__WEBPACK_IMPORTED_MODULE_4__["DoctorProfileComponent"],
                    _time_slot_time_slot_component__WEBPACK_IMPORTED_MODULE_6__["TimeSlotComponent"],
                    _notification_popup_notification_popup_component__WEBPACK_IMPORTED_MODULE_9__["NotificationPopupComponent"],
                    _treatments_treatments_component__WEBPACK_IMPORTED_MODULE_11__["TreatmentsComponent"],
                    _feed_back_pop_feed_back_pop_component__WEBPACK_IMPORTED_MODULE_12__["FeedBackPopComponent"],
                    _checking_popup_checking_popup_component__WEBPACK_IMPORTED_MODULE_13__["CheckingPopupComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _doctors_routing_module__WEBPACK_IMPORTED_MODULE_2__["DoctorsRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_10__["ToastModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/feed-back-pop/feed-back-pop.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/doctors/feed-back-pop/feed-back-pop.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedBackPopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackPopComponent", function() { return FeedBackPopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FeedBackPopComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FeedBackPopComponent.ɵfac = function FeedBackPopComponent_Factory(t) { return new (t || FeedBackPopComponent)(); };
FeedBackPopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedBackPopComponent, selectors: [["app-feed-back-pop"]], decls: 2, vars: 0, template: function FeedBackPopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feed-back-pop works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9ycy9mZWVkLWJhY2stcG9wL2ZlZWQtYmFjay1wb3AuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedBackPopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed-back-pop',
                templateUrl: './feed-back-pop.component.html',
                styleUrls: ['./feed-back-pop.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/notification-popup/notification-popup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/doctors/notification-popup/notification-popup.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPopupComponent", function() { return NotificationPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotificationPopupComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotificationPopupComponent.ɵfac = function NotificationPopupComponent_Factory(t) { return new (t || NotificationPopupComponent)(); };
NotificationPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationPopupComponent, selectors: [["app-notification-popup"]], decls: 0, vars: 0, template: function NotificationPopupComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9ycy9ub3RpZmljYXRpb24tcG9wdXAvbm90aWZpY2F0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-popup',
                templateUrl: './notification-popup.component.html',
                styleUrls: ['./notification-popup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/time-slot/time-slot.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/doctors/time-slot/time-slot.component.ts ***!
  \******************************************************************/
/*! exports provided: TimeSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSlotComponent", function() { return TimeSlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checking_popup_checking_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checking-popup/checking-popup.component */ "./src/app/modules/doctors/checking-popup/checking-popup.component.ts");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/doctor-profile.service */ "./src/app/services/doctor-profile.service.ts");
/* harmony import */ var src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/consultation.service */ "./src/app/services/consultation.service.ts");
/* harmony import */ var _services_booking_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/booking-page.service */ "./src/app/services/booking-page.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");















function TimeSlotComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r215 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r215.fullName);
} }
function TimeSlotComponent_div_36_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeSlotComponent_div_36_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r223); const bu_r219 = ctx.$implicit; const item_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r221.openDialog(bu_r219.strtTime, bu_r219.endTime, item_r216.date, "Morning Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bu_r219 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bu_r219.strtTime, " ");
} }
function TimeSlotComponent_div_36_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeSlotComponent_div_36_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r228); const it_r224 = ctx.$implicit; const item_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r226.openDialog(it_r224.strtTime, it_r224.endTime, item_r216.date, "Evening Slots"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const it_r224 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](it_r224.strtTime);
} }
function TimeSlotComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Morning Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimeSlotComponent_div_36_div_8_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Evening Slots ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TimeSlotComponent_div_36_div_13_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r216 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r216.day), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r216.mrningSlots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r216.eveningSlots);
} }
function TimeSlotComponent_mat_tab_40_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r229 == null ? null : item_r229.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (ctx_r230.evningSlot == null ? null : ctx_r230.evningSlot.length) + (ctx_r230.morningSlot == null ? null : ctx_r230.morningSlot.length), " Slots Available ");
} }
const _c0 = function (a0) { return { selectedSloats: a0 }; };
function TimeSlotComponent_mat_tab_40_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeSlotComponent_mat_tab_40_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r236); const item_r234 = ctx.$implicit; const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r235.onSelectSlot(item_r234 == null ? null : item_r234.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r234 = ctx.$implicit;
    const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (item_r234 == null ? null : item_r234.value) == ctx_r231.selectedSlot));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r234 == null ? null : item_r234.label);
} }
function TimeSlotComponent_mat_tab_40_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeSlotComponent_mat_tab_40_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r239); const item_r237 = ctx.$implicit; const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r238.onSelectSlot(item_r237 == null ? null : item_r237.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r237 = ctx.$implicit;
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (item_r237 == null ? null : item_r237.value) == ctx_r232.selectedSlot));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r237 == null ? null : item_r237.label);
} }
function TimeSlotComponent_mat_tab_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimeSlotComponent_mat_tab_40_ng_template_1_Template, 5, 2, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Morning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TimeSlotComponent_mat_tab_40_div_11_Template, 3, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Evening ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TimeSlotComponent_mat_tab_40_div_21_Template, 3, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r214.morningSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r214.evningSlot);
} }
class TimeSlotComponent {
    constructor(BookingService, CookieService, route, DoctorProfile, consultationService, bookingPageService, router, dialog) {
        this.BookingService = BookingService;
        this.CookieService = CookieService;
        this.route = route;
        this.DoctorProfile = DoctorProfile;
        this.consultationService = consultationService;
        this.bookingPageService = bookingPageService;
        this.router = router;
        this.dialog = dialog;
        this.minDate = new Date();
        this.evningSlot = [];
        this.morningSlot = [];
        this.cdate = moment__WEBPACK_IMPORTED_MODULE_1__().format("llll");
        this.route.params.subscribe((params) => {
            this.id = params.id;
            console.log("TimeSlotComponent -> constructor -> this.id", this.id);
        });
        this.getProfileDetails();
        this.timeSlot();
    }
    selectSolot(time, oclock) {
        this.slotbutton = time;
        console.log("TimeSlotComponent -> selectSolot -> time,oclock", time, oclock);
    }
    ngOnInit() {
        // this.showtime(this.profileData)
        this.currentDate = new Date();
        console.log("TimeSlotComponent -> ngOnInit -> this.currentDate", this.currentDate);
        this.latestday();
        // const data1 = moment().add(1, 'days').format('L');
    }
    openDialog(slotStart, slotEnd, slotDate, slotType) {
        console.log("TimeSlotComponent -> openDialog -> slotStart, slotEnd, slotDate,slotType", slotStart, slotEnd, slotDate, slotType);
        const dialogRef = this.dialog.open(_checking_popup_checking_popup_component__WEBPACK_IMPORTED_MODULE_2__["CheckingPopupComponent"], {
            data: { doctor: this.id, time: slotStart, TimeE: slotEnd, date: slotDate, slotType: slotType }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    onSelect(event) {
        console.log("TimeSlotComponent -> onSelect -> event", event);
        if (event == this.minDate) {
            this.latestday();
        }
        else {
            let d = new Date(Date.parse(event));
            this.calenderDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
            // this.calenderDate =moment(event).add(1,'day') ;
            this.bookingPageService.getDoctorSlotId(this.id, { date: this.calenderDate }).then((resData) => {
                this.slot = resData.data;
            }).catch((err) => {
                console.log("DoctorProfileComponent -> ngOnInit -> err", err);
            });
        }
        // this.calenderDate = event;
        this.dadad = moment__WEBPACK_IMPORTED_MODULE_1__().format('MM/DD/YYYY');
        console.log("TimeSlotComponent -> onSelect -> this.dadad", this.dadad);
    }
    latestday() {
        this.bookingPageService.getDoctorSlotId(this.id, { date: this.currentDate }).then(resData => {
            console.log("cdsbjcbhjbcbdsbcjk", resData);
            this.slot = resData.data;
        }).catch(error => {
            console.log("TimeSlotComponent -> ngOnInit -> error", error);
        });
    }
    getProfileDetails() {
        const data = {
            findId: this.id,
        };
        this.DoctorProfile.getDoctorProfile(data)
            .then((resData) => {
            this.profileData = resData.data;
            // this.showtime(this.profileData);
        })
            .catch((error) => {
            console.log("DoctorProfileComponent -> getProfileDetails -> error", error);
        });
    }
    timeSlot() {
        this.DoctorProfile.getSlot(this.id)
            .then((resData) => {
            this.slot = resData.data;
            console.log("TimeSlotComponent -> timeSlot -> slot", this.slot);
        })
            .catch((error) => {
            console.log("TimeSlotComponent -> timeSlot -> error", error);
        });
    }
    onConsultation(id) {
        var data = {
            doctor: id,
        };
        this.consultationService
            .createSession(data)
            .then((resData) => {
            console.log("DoctorsComponent -> onConsultation -> resData", resData);
            this.router.navigate(["/video-conference"]);
        })
            .catch((error) => {
            console.log("DoctorsComponent -> onConsultation -> error", error);
        });
    }
    // addPractice() {
    //   const dialogRef = this.dialog.open(TimeSlotComponent);
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log(`Dialog result: ${result}`);
    //   });
    // }
    onSelectSlot(time) {
        this.selectedSlot = time;
    }
    showtime(doctor) {
        console.log("TimeSlotComponent -> showtime -> doctor", doctor._id);
        const pid = JSON.parse(this.CookieService.get("userInfo_WhealthyLife"));
        const data = {
            petient: pid._id,
            doctor: doctor._id,
            appoinmentType: "Scheduled",
            status: "Pending",
            date: this.calenderDate ? this.calenderDate : this.cdate,
            time: this.slotbutton,
        };
        this.BookingService.addBooking(data)
            .then((resData) => {
            console.log("TimeSlotComponent -> showtime -> resData", resData);
        })
            .catch((error) => {
            console.log("TimeSlotComponent -> showtime -> error", error);
        });
        console.log("TimeSlotComponent -> showtime -> data", data);
        console.log("TimeSlotComponent -> myDate -> data", data.date);
        // this.show = doctor._id;
        // console.log("DoctorsComponent -> showtime -> doctor", doctor);
        // var session1Start = doctor.slots[0].session1Start.split(":");
        // var session1End = doctor.slots[0].session1End.split(":");
        // var session2Start = doctor.slots[0].session2Start.split(":");
        // var session2End = doctor.slots[0].session2End.split(":");
        // console.log("DoctorsComponent -> showtime -> session1Start", session1Start, session1End, session2Start, session2End)
        // this.morningSlot = [];
        // this.evningSlot = [];
        // for (var i = parseInt(session1Start[0]); i < parseInt(session1End[0]); i++) {
        //   var hour = i < 10 ? '0' + i : i;
        //   if (i <= 13) {
        //     this.morningSlot.push({ label: hour + ':00', value: hour + ':00' });
        //     this.morningSlot.push({ label: hour + ':30', value: hour + ':30' });
        //   }
        // }
        // for (var i = parseInt(session2Start[0]); i < parseInt(session2End[0]); i++) {
        //   var hour = i < 10 ? '0' + i : i;
        //   if (i >= 13) {
        //     this.evningSlot.push({ label: hour + ':00', value: hour + ':00' });
        //     this.evningSlot.push({ label: hour + ':30', value: hour + ':30' });
        //   }
        // }
    }
    avaialableclick() {
        this.aval = !this.aval;
    }
}
TimeSlotComponent.ɵfac = function TimeSlotComponent_Factory(t) { return new (t || TimeSlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_6__["DoctorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_7__["ConsultationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_booking_page_service__WEBPACK_IMPORTED_MODULE_8__["BookingPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
TimeSlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeSlotComponent, selectors: [["app-time-slot"]], decls: 41, vars: 12, consts: [[2, "margin-top", "115px"], [1, "container"], [1, "col-12", 2, "padding", "0px"], [1, "card", 2, "box-shadow", "0px 0px 10px #c5c4c4", "padding", "15px"], [1, "row"], [1, "col-lg-2", "col-sm-4", "col-12"], ["onerror", "this.src='../assets/img/user.jpeg'", "alt", "...", 1, "img-thumbnail", "im1", 3, "src"], [1, "col-lg-6", "col-sm-8", "col-12"], [1, "t-center", "font-weight-bold", "mb-0"], [1, "m-0"], [4, "ngFor", "ngForOf"], [2, "margin-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-up", "text-success", "p-1"], [1, "col-lg-2", 2, "display", "flex", "justify-content", "center"], [1, "font-weight-bold", "mt-3", "mb-0", "text-success"], [1, "col-lg-2", 2, "margin", "auto"], ["mat-raised-button", "", 1, "bt1", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "bt1", 3, "click"], [1, "col-lg-4", "col-12", 2, "padding", "40px 0px 0px 0px"], [1, "card", "cardex2"], [2, "padding", "0px", 3, "inline", "minDate", "onSelect"], [1, "col-lg-8", "col-lg-8", "col-12", "slidetime", 2, "padding", "40px 30px"], ["class", "card cad1 ", "style", "width: 100%;", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], [1, "card", "cad1", 2, "width", "100%"], [1, "wei", "p-3", 2, "margin", "0px"], [1, "card-body"], [1, "wei", 2, "margin", "0px"], [1, "row", "adj1"], [1, "hr1"], [1, "btn", "c-day-session__slot", 3, "click"], ["mat-tab-label", ""], [1, "slotsavailable"], [1, "col-sm-2"], [1, "fa", "fa-sun"], [1, "col-sm-10", "driven"], [1, "morningslot"], ["data-qa-id", "slot_time", "class", "c-day-session__slot", 3, "click", 4, "ngFor", "ngForOf"], [1, "grp"], [1, "text-capitalize"], ["data-qa-id", "slot_time", 1, "c-day-session__slot", 3, "click"], [3, "ngClass"]], template: function TimeSlotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TimeSlotComponent_span_12_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 96 % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ( 3673 votes ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeSlotComponent_Template_button_click_24_listener() { return ctx.onConsultation(ctx.profileData == null ? null : ctx.profileData._id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Video Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeSlotComponent_Template_button_click_26_listener() { return ctx.showtime(ctx.profileData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Book Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p-calendar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function TimeSlotComponent_Template_p_calendar_onSelect_33_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TimeSlotComponent_div_36_Template, 14, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TimeSlotComponent_mat_tab_40_Template, 22, 2, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profileData.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", ctx.profileData.firstName, " ", ctx.profileData.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.profileData.degree, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileData.specialitie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.profileData == null ? null : ctx.profileData.experience, " Years Experience Overall (", ctx.profileData == null ? null : ctx.profileData.experience, " years as specialist) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs. ", ctx.profileData.fees, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("minDate", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileData == null ? null : ctx.profileData.slots);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], primeng_calendar__WEBPACK_IMPORTED_MODULE_12__["Calendar"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"]], styles: [".c-day-session__slot[_ngcontent-%COMP%] {\n  width: 84px;\n  border-radius: 8px;\n  border: 1px solid #e0e0e4;\n  padding: 5px 0;\n  display: inline-block;\n  text-align: center;\n  color: #2d2d32;\n  cursor: pointer;\n  margin: 10px 0px;\n}\n\n.adj1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  vertical-align: middle;\n}\n\n.cad1[_ngcontent-%COMP%] {\n  border: 1px solid #d4d0d0 !important;\n  border-radius: 5px !important;\n}\n\n.wei[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.hr1[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  color: #d4d0d0;\n}\n\n.headD[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  color: #d4d0d0;\n}\n\n.c1[_ngcontent-%COMP%] {\n  background-color: #f1efef;\n}\n\n.s1[_ngcontent-%COMP%] {\n  background-color: #f1efef;\n  margin: 30px 0px;\n  height: 100px;\n}\n\n.bt1[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  height: 35px;\n  width: 100%;\n}\n\n.se1[_ngcontent-%COMP%] {\n  margin-top: 80px;\n}\n\n.cd1[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.im1[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 150px;\n}\n\n.btun[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.cpad[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n\n.talign[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.se2[_ngcontent-%COMP%] {\n  background-color: #f1efef;\n  margin: 30px 0px;\n  height: 100px;\n}\n\n.cont1[_ngcontent-%COMP%] {\n  background-color: #f1efef;\n}\n\n.hedi2[_ngcontent-%COMP%] {\n  padding: 6px 0px;\n}\n\n@media screen and (max-width: 570px) {\n  .im1[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    width: 150px;\n    display: block;\n    margin: auto;\n  }\n\n  .pad[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n\n@media (min-width: 576px) and (max-width: 991px) {\n  .btun[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .bt1[_ngcontent-%COMP%] {\n    margin: 10px 10px;\n    height: 35px;\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .t-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n\n.ng-trigger.ng-trigger-overlayAnimation.ng-tns-c228-2.ng-animate-disabled.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all.ui-datepicker-inline.ng-star-inserted[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3JzL3RpbWUtc2xvdC9DOlxcd0ltcG9ydGFudEZvbGRlclxcd2hlYWx0aHlsaWZlXFx3aGVhbHRoeUxpZmUtd2ViLTEvc3JjXFxhcHBcXG1vZHVsZXNcXGRvY3RvcnNcXHRpbWUtc2xvdFxcdGltZS1zbG90LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3RvcnMvdGltZS1zbG90L3RpbWUtc2xvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0MsNkJBQUE7RUFDRCxzQkFBQTtBQ0NKOztBREdBO0VBQ0ksb0NBQUE7RUFDQyw2QkFBQTtBQ0FMOztBRE1BO0VBQ0ksZ0JBQUE7QUNISjs7QURLQTtFQUNJLGdCQUFBO0VBQWtCLGNBQUE7QUNEdEI7O0FER0E7RUFDSSxnQkFBQTtFQUFrQixjQUFBO0FDQ3RCOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQTJCLGdCQUFBO0VBQWlCLGFBQUE7QUNLaEQ7O0FESEE7RUFDSSxnQkFBQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FDTUw7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0gsWUFBQTtBQ1FEOztBRE5BO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0kseUJBQUE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNZTDs7QURWQTtFQUNJLHlCQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtBQ2NKOztBRFZBO0VBQ0k7SUFDSSxrQkFBQTtJQUNILFlBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQ2FIOztFRFhFO0lBQ0ksYUFBQTtFQ2NOO0FBQ0Y7O0FEWEE7RUFDSTtJQUNJLGFBQUE7RUNhTjs7RURWRTtJQUNJLGlCQUFBO0lBQ0MsWUFBQTtJQUNBLFdBQUE7RUNhUDtBQUNGOztBRExDO0VBRUc7SUFDSSw2QkFBQTtFQ01OO0FBQ0Y7O0FERkM7RUFDRyx1QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kb2N0b3JzL3RpbWUtc2xvdC90aW1lLXNsb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1kYXktc2Vzc2lvbl9fc2xvdHtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlNDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyZDJkMzI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFkajF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG5cclxuLmNhZDF7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkMGQwICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgXHJcbn1cclxuLy8gLmNhcmRleDJ7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkMGQwICFpbXBvcnRhbnQgO1xyXG4vLyB9XHJcbi53ZWl7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5ocjF7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4OyBjb2xvcjogI2Q0ZDBkMDtcclxufVxyXG4uaGVhZER7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4OyBjb2xvcjogI2Q0ZDBkMDtcclxufVxyXG4uYzF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZmVmO1xyXG59XHJcbi5zMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZWY7IG1hcmdpbjogMzBweCAwcHg7aGVpZ2h0OiAxMDBweDsgXHJcbn1cclxuLmJ0MXtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7ICAgXHJcbiAgICAgaGVpZ2h0OiAzNXB4OyAgICAgICAgICAgICAgXHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZTF7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyBcclxufVxyXG4uY2Qxe1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmltMXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuIHdpZHRoOjE1MHB4O1xyXG59XHJcbi5idHVue1xyXG4gICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jcGFke1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLnRhbGlnbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zZTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFlZmVmO1xyXG4gICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgICAgaGVpZ2h0OiAxMDBweDsgXHJcbn1cclxuLmNvbnQxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZlZjtcclxufVxyXG4uaGVkaTJ7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzBweCl7XHJcbiAgICAuaW0xe1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICB3aWR0aDoxNTBweDtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICAucGFke1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuYnR1bntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmJ0MXtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDsgICBcclxuICAgICAgICAgaGVpZ2h0OiAzNXB4OyAgICAgICAgICAgICAgXHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLy8gLmNoYW5nc3Nzc3tcclxuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gfVxyXG4gICBcclxuIH1cclxuXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgICBcclxuICAgIC50LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG4gLm5nLXRyaWdnZXIubmctdHJpZ2dlci1vdmVybGF5QW5pbWF0aW9uLm5nLXRucy1jMjI4LTIubmctYW5pbWF0ZS1kaXNhYmxlZC51aS1kYXRlcGlja2VyLnVpLXdpZGdldC51aS13aWRnZXQtY29udGVudC51aS1oZWxwZXItY2xlYXJmaXgudWktY29ybmVyLWFsbC51aS1kYXRlcGlja2VyLWlubGluZS5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59IiwiLmMtZGF5LXNlc3Npb25fX3Nsb3Qge1xuICB3aWR0aDogODRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGU0O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmQyZDMyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5hZGoxIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYWQxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDBkMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuLndlaSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ocjEge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBjb2xvcjogI2Q0ZDBkMDtcbn1cblxuLmhlYWREIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgY29sb3I6ICNkNGQwZDA7XG59XG5cbi5jMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZWY7XG59XG5cbi5zMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZWY7XG4gIG1hcmdpbjogMzBweCAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5idDEge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2UxIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmNkMSB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uaW0xIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5idHVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNwYWQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLnRhbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2UyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZlZjtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmNvbnQxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWZlZjtcbn1cblxuLmhlZGkyIHtcbiAgcGFkZGluZzogNnB4IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcbiAgLmltMSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAucGFkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYnR1biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5idDEge1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxufVxuLm5nLXRyaWdnZXIubmctdHJpZ2dlci1vdmVybGF5QW5pbWF0aW9uLm5nLXRucy1jMjI4LTIubmctYW5pbWF0ZS1kaXNhYmxlZC51aS1kYXRlcGlja2VyLnVpLXdpZGdldC51aS13aWRnZXQtY29udGVudC51aS1oZWxwZXItY2xlYXJmaXgudWktY29ybmVyLWFsbC51aS1kYXRlcGlja2VyLWlubGluZS5uZy1zdGFyLWluc2VydGVkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeSlotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-time-slot",
                templateUrl: "./time-slot.component.html",
                styleUrls: ["./time-slot.component.scss"],
            }]
    }], function () { return [{ type: _services_booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_6__["DoctorProfileService"] }, { type: src_app_services_consultation_service__WEBPACK_IMPORTED_MODULE_7__["ConsultationService"] }, { type: _services_booking_page_service__WEBPACK_IMPORTED_MODULE_8__["BookingPageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/doctors/treatments/treatments.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/doctors/treatments/treatments.component.ts ***!
  \********************************************************************/
/*! exports provided: TreatmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentsComponent", function() { return TreatmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/doctor-profile.service */ "./src/app/services/doctor-profile.service.ts");
/* harmony import */ var _services_treatments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/treatments.service */ "./src/app/services/treatments.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TreatmentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreatmentsComponent_div_8_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r351); const treatment_r348 = ctx.$implicit; const ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r350.scroll(treatment_r348.shortName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const treatment_r348 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", treatment_r348.fullName, " ");
} }
function TreatmentsComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const treatment_r352 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", treatment_r352.shortName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](treatment_r352.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", treatment_r352.discription, " ");
} }
const _c0 = function (a1) { return ["/doctors/doctor_profile/", a1]; };
class TreatmentsComponent {
    constructor(ActivatedRoute, DoctorProfile, TreatmentsService) {
        this.ActivatedRoute = ActivatedRoute;
        this.DoctorProfile = DoctorProfile;
        this.TreatmentsService = TreatmentsService;
        this.ActivatedRoute.params.subscribe(params => {
            this.DocId = params['id'];
            this.getProfileDetails();
            this.getTreatments();
        });
    }
    getProfileDetails() {
        const data = {
            findId: this.DocId,
        };
        this.DoctorProfile.getDoctorProfile(data)
            .then((resData) => {
            this.doctor = resData.data;
            console.log("TreatmentsComponent -> getProfileDetails -> resData.data", resData);
        })
            .catch((error) => {
            console.log("DoctorProfileComponent -> getProfileDetails -> error", error);
        });
    }
    getTreatments() {
        this.TreatmentsService.getTreatmentsbyId(this.DocId).then((resData) => {
            this.treatments = resData.data;
            console.log("TreatmentsComponent -> getTreatments -> treatments++++++++++++++++++++++++++++++", this.treatments);
        }).catch((error) => {
            console.log("TreatmentsComponent -> getTreatments -> error", error);
        });
    }
    ngOnInit() {
    }
    scroll(el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
TreatmentsComponent.ɵfac = function TreatmentsComponent_Factory(t) { return new (t || TreatmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_2__["DoctorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_treatments_service__WEBPACK_IMPORTED_MODULE_3__["TreatmentsService"])); };
TreatmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreatmentsComponent, selectors: [["app-treatments"]], decls: 44, vars: 12, consts: [[1, "bgcolor"], [1, "container-md", 2, "padding-top", "85px"], [1, "row"], [1, "col-sm-12", "col-md-8", "p-md-4", "pt-sm-3"], [1, "row", "bg-white", "p-3", "shadow"], ["itemprop", "headline", 1, "lybText--big", "lybText--bold", "lybMar-top-btm", "lybText--capitalize"], ["id", "navbar-example2 ", "class", "ly-header-table-content text-secondary", 4, "ngFor", "ngForOf"], [1, "row", "bg-white", "p-3", "mt-3", "shadow"], ["data-spy", "scroll", "data-target", "#navbar-example2", "data-offset", "0"], [4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-4", "p-md-4", "pt-sm-3", "shadow", "p-sm-3"], [1, "row", "bg-white", "p-3"], [1, "card", "cad2"], [1, "card-header", 2, "padding", "0px"], [1, "col-4"], ["onerror", "this.src='../../../assets/images/doc.jpg'", "alt", "Avatar", 1, "img-thumbnail", "img2", 3, "src"], [1, "col-8"], [1, "hed3"], [3, "routerLink"], [2, "margin", "0px", "font-size", "12px"], [1, "fa", "fa-thumbs-up", "text-success"], [1, "card-body", 2, "padding", "10px", "line-height", "10px", "font-size", "12px", "text-align", "left"], [1, "col-12"], ["id", "navbar-example2 ", 1, "ly-header-table-content", "text-secondary"], [1, "pointer", 3, "click"], [3, "id"], [1, "lybMar-btm", "lybMar-top"]], template: function TreatmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Child Nutrition: Treatment, Procedure, Cost and Side Effects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreatmentsComponent_div_8_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TreatmentsComponent_span_12_Template, 6, 3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " years experience overall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Consultation Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Available Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.treatments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.treatments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.doctor == null ? null : ctx.doctor.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.doctor == null ? null : ctx.doctor._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", ctx.doctor == null ? null : ctx.doctor.firstName, " ", ctx.doctor == null ? null : ctx.doctor.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.specialitie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.doctor == null ? null : ctx.doctor.location == null ? null : ctx.doctor.location.landmark, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rs. ", ctx.doctor == null ? null : ctx.doctor.fees, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".bgcolor[_ngcontent-%COMP%] {\n  background-color: #f3f3f3;\n}\n\n.img2[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  border-radius: 50%;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kb2N0b3JzL3RyZWF0bWVudHMvQzpcXHdJbXBvcnRhbnRGb2xkZXJcXHdoZWFsdGh5bGlmZVxcd2hlYWx0aHlMaWZlLXdlYi0xL3NyY1xcYXBwXFxtb2R1bGVzXFxkb2N0b3JzXFx0cmVhdG1lbnRzXFx0cmVhdG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2RvY3RvcnMvdHJlYXRtZW50cy90cmVhdG1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZG9jdG9ycy90cmVhdG1lbnRzL3RyZWF0bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG59XHJcblxyXG4uaW1nMiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLmJnY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4uaW1nMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreatmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-treatments',
                templateUrl: './treatments.component.html',
                styleUrls: ['./treatments.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_doctor_profile_service__WEBPACK_IMPORTED_MODULE_2__["DoctorProfileService"] }, { type: _services_treatments_service__WEBPACK_IMPORTED_MODULE_3__["TreatmentsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/paitents.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/paitents.service.ts ***!
  \**********************************************/
/*! exports provided: PaitentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaitentsService", function() { return PaitentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class PaitentsService {
    constructor(API) {
        this.API = API;
    }
    getAllPaitent(id) {
        return this.API.getData('appoinment/get/by/time');
    }
    // getPaitentDetail(data){
    //   return this.API.postData('appoinment/get/by/id/',data);
    // }
    getAppointment(data) {
        return this.API.postData('appoinment/get/by/id', data);
    }
    getProfileDetaile(data) {
        return this.API.getData('doctor/profile/details/', data);
    }
}
PaitentsService.ɵfac = function PaitentsService_Factory(t) { return new (t || PaitentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
PaitentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaitentsService, factory: PaitentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaitentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/apicall.service */ "./src/app/services/api/apicall.service.ts");



class VideoService {
    constructor(ApiCallService) {
        this.ApiCallService = ApiCallService;
    }
    postAppointmentSlot(data) {
        console.log("DoctorProfileService -> getDoctorProfile -> data", data);
        return this.ApiCallService.postData('appoinment/add/', data);
    }
}
VideoService.ɵfac = function VideoService_Factory(t) { return new (t || VideoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"])); };
VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoService, factory: VideoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApiCallService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-doctors-doctors-module-es2015.js.map