$(document).ready(function () {
    // console.log('loaded ais-typeahead.js');

    $('#su-region').typeahead({
        order: "desc",
        minLength: 0,
        source: {
            countries_local: {
                data: ["Australia","Europe","New Zealand","United Kingdom","United States","Other"],
                // data: ["Afghanistan", "Angola", "Albania", "Andorra", "Argentina", "Armenia", "Antigua and Barbuda", "Australia", "Austria", "Azerbaijan", "Burundi", "Belgium", "Benin", "Burkina Faso", "Bangladesh", "Bulgaria", "Bahrain", "Bahamas", "Bosnia and Herzegovina", "Belarus", "Belize", "Bolivia, Plurinational State of", "Brazil", "Barbados", "Brunei Darussalam", "Bhutan", "Botswana", "Central African Republic", "Canada", "Switzerland", "Chile", "China", "Côte d'Ivoire", "Cameroon", "Congo, the Democratic Republic of the", "Congo", "Colombia", "Comoros", "Cape Verde", "Costa Rica", "Cuba", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Dominica", "Denmark", "Dominican Republic", "Algeria", "Ecuador", "Egypt", "Eritrea", "Spain", "Estonia", "Ethiopia", "Finland", "Fiji", "France", "Micronesia, Federated States of", "Gabon", "Georgia", "Ghana", "Guinea", "Gambia", "Guinea-Bissau", "Equatorial Guinea", "Greece", "Grenada", "Guatemala", "Guyana", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "India", "Ireland", "Iran, Islamic Republic of", "Iraq", "Iceland", "Israel", "Italy", "Jamaica", "Jordan", "Japan", "Kazakhstan", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Saint Kitts and Nevis", "Korea, Republic of", "Kuwait", "Lao People's Democratic Republic", "Lebanon", "Liberia", "Libya", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Morocco", "Monaco", "Moldova, Republic of", "Madagascar", "Maldives", "Mexico", "Marshall Islands", "Macedonia, the former Yugoslav Republic of", "Mali", "Malta", "Myanmar", "Montenegro", "Mongolia", "Mozambique", "Mauritania", "Mauritius", "Malawi", "Malaysia", "Namibia", "Niger", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "New Zealand", "Oman", "Pakistan", "Panama", "Peru", "Philippines", "Palau", "Papua New Guinea", "Poland", "Korea, Democratic People's Republic of", "Portugal", "Paraguay", "Qatar", "Romania", "Russian Federation", "Rwanda", "Saudi Arabia", "Sudan", "Senegal", "Singapore", "Solomon Islands", "Sierra Leone", "El Salvador", "San Marino", "Somalia", "Serbia", "South Sudan", "Sao Tome and Principe", "Suriname", "Slovakia", "Slovenia", "Sweden", "Swaziland", "Seychelles", "Syrian Arab Republic", "Chad", "Togo", "Thailand", "Tajikistan", "Turkmenistan", "Timor-Leste", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Tuvalu", "Tanzania, United Republic of", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "United States", "Uzbekistan", "Saint Vincent and the Grenadines", "Venezuela, Bolivarian Republic of", "Viet Nam", "Vanuatu", "Samoa", "Yemen", "South Africa", "Zambia", "Zimbabwe"],
            },
            /*             countries_remote: { // slower because http request
                            ajax: {
                                // url: "https://test.accessitlibrary.com/wp-json/ais-listo/v1/su-regions",
                                url: "https://test.accessitlibrary.com/wp-json/ais-listo/v1/countries",
                                path: 'items'
                            }
                        } */
        },
        callback: {
            onInit: function (node) {
                console.log('Typeahead Initiated on ' + node.selector);
            },
            onResult: function (node, query, result, resultCount, resultCountPerGroup) {
                console.log(node, query, result, resultCount, resultCountPerGroup);
            }
        },
        debug: true,
    });

    // BMP am disabling for now because this has too many gotchas (how about a number value between?), so keeping this to a dropdown
    // $('#su-num-students').typeahead({
    //     order: "desc",
    //     minLength: 0,
    //     highlight: false,
    //     // offset: true,
    //     maxItem: 0, // show all items
    //     matcher: function(item, displayKey) { 
    //         return ais_match(item, displayKey) 
    //     },
    //     source: {
    //         num_students_local: {
    //             data: ["1-20", "21-40", "41-80", "81-120", "121-160", "161-200", "201-300", "301-400", "401-500", "501-600", "601-700", "701-800", "801-900", "901-1000", "1001-1100", "1101-1200", "1201-1300", "1301-1400", "1401-1500", "1501-1600", "1601-1700", "1701-1800", "1801-1900", "1901-2000", "2001-2100", "2101-2200", "2201-2300", "2301-2400", "2401-2500", "2501-2600", "2601-2700", "2701-2800", "2801-2900", "2901-3000", "3001-3100", "3101-3200", "3201-3300", "3301-3400", "3401-3500", "3501-3600", "3601-3700", "3701-3800", "3801-3900", "3901-4000", "4001-4100", "4101-4200", "4201-4300", "4301-4400", "4401-4500", "Other: please email info@accessitlibrary.com"],
    //         },
    //         /* num_students_remote: {
    //             ajax: {
    //                 url: "https://test.accessitlibrary.com/wp-json/ais-listo/v1/su-num-students",
    //                 path: 'items'
    //             }
    //         }, */
    //     },

    //     callback: {
    //         onInit: function (node) {
    //             console.log('Typeahead Initiated on ' + node.selector);
    //         },
    //         onResult: function (node, query, result, resultCount, resultCountPerGroup) {
    //             console.log(node, query, result, resultCount, resultCountPerGroup);
    //         }
    //     },
    //     debug: true,
    // });

    /**
     * Get the display string and eval the numbers from it.
     * We extact the min and max from the display string and then evaluate whether the user input is numerically contained within.
     * @param {*} item 
     * @param {*} displayKey 
     */
    function ais_match(item, displayKey) {
        // console.log('in ais_matcher');
        var nums = displayKey.split("-");
        var min = parseInt(nums[0], 10);
        var max = parseInt(nums[1], 10);
        // console.log('displayKey = ' + displayKey + " min = " + min + " max = " + max);

        let some = window.Typeahead['#su-num-students']

        return true;
    }


    // $.typeahead({
    //     input: '.js-typeahead-country_bmp',
    $('#countries').typeahead({
        order: "desc",
        // dynamic: true, // get a new dataset from the source option on every key press
        minLength: 1,
        // cache: true,               // Improved option, true OR 'localStorage' OR 'sessionStorage'
        // searchOnFocus: true,       // Display search results on input focus
        source: {
            countries: {
                ajax: {
                    url: "http://localhost:81/aistestwp/wp-json/ais-listo/v1/countries",
                    path: 'items'
                }
            },
            // countries: {
            //     data: ["Aruba","Afghanistan","Angola","Anguilla","Ã\u0085land Islands","Albania","Andorra","Argentina","Armenia","American Samoa","Antarctica","French Southern Territories","Antigua and Barbuda","Australia","Austria","Azerbaijan","Burundi","Belgium","Benin","Bonaire, Sint Eustatius and Saba","Burkina Faso","Bangladesh","Bulgaria","Bahrain","Bahamas","Bosnia and Herzegovina","Saint BarthÃ©lemy","Belarus","Belize","Bermuda","Bolivia, Plurinational State of","Brazil","Barbados","Brunei Darussalam","Bhutan","Bouvet Island","Botswana","Central African Republic","Canada","Cocos (Keeling) Islands","Switzerland","Chile","China","CÃ´te d'Ivoire","Cameroon","Congo, the Democratic Republic of the","Congo","Cook Islands","Colombia","Comoros","Cape Verde","Costa Rica","Cuba","CuraÃ§ao","Christmas Island","Cayman Islands","Cyprus","Czech Republic","Germany","Djibouti","Dominica","Denmark","Dominican Republic","Algeria","Ecuador","Egypt","Eritrea","Western Sahara","Spain","Estonia","Ethiopia","Finland","Fiji","Falkland Islands (Malvinas)","France","Faroe Islands","Micronesia, Federated States of","Gabon","Georgia","Guernsey","Ghana","Gibraltar","Guinea","Guadeloupe","Gambia","Guinea-Bissau","Equatorial Guinea","Greece","Grenada","Greenland","Guatemala","French Guiana","Guam","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Isle of Man","India","British Indian Ocean Territory","Ireland","Iran, Islamic Republic of","Iraq","Iceland","Israel","Italy","Jamaica","Jersey","Jordan","Japan","Kazakhstan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Saint Kitts and Nevis","Korea, Republic of","Kuwait","Lao People's Democratic Republic","Lebanon","Liberia","Libya","Saint Lucia","Liechtenstein","Sri Lanka","Lesotho","Lithuania","Luxembourg","Latvia","Macao","Saint Martin (French part)","Morocco","Monaco","Moldova, Republic of","Madagascar","Maldives","Mexico","Marshall Islands","Macedonia, the former Yugoslav Republic of","Mali","Malta","Myanmar","Montenegro","Mongolia","Northern Mariana Islands","Mozambique","Mauritania","Montserrat","Martinique","Mauritius","Malawi","Malaysia","Mayotte","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Niue","Netherlands","Norway","Nepal","Nauru","New Zealand","Oman","Pakistan","Panama","Pitcairn","Peru","Philippines","Palau","Papua New Guinea","Poland","Puerto Rico","Korea, Democratic People's Republic of","Portugal","Paraguay","Palestine, State of","French Polynesia","Qatar","RÃ©union","Romania","Russian Federation","Rwanda","Saudi Arabia","Sudan","Senegal","Singapore","South Georgia and the South Sandwich Islands","Saint Helena, Ascension and Tristan da Cunha","Svalbard and Jan Mayen","Solomon Islands","Sierra Leone","El Salvador","San Marino","Somalia","Saint Pierre and Miquelon","Serbia","South Sudan","Sao Tome and Principe","Suriname","Slovakia","Slovenia","Sweden","Swaziland","Sint Maarten (Dutch part)","Seychelles","Syrian Arab Republic","Turks and Caicos Islands","Chad","Togo","Thailand","Tajikistan","Tokelau","Turkmenistan","Timor-Leste","Tonga","Trinidad and Tobago","Tunisia","Turkey","Tuvalu","Taiwan, Province of China","Tanzania, United Republic of","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States Minor Outlying Islands","Uruguay","United States","Uzbekistan","Holy See (Vatican City State)","Saint Vincent and the Grenadines","Venezuela, Bolivarian Republic of","Virgin Islands, British","Virgin Islands, U.S.","Viet Nam","Vanuatu","Wallis and Futuna","Samoa","Yemen","South Africa","Zambia","Zimbabwe","Other"]
            // },
            // countries_remote: {
            //     ajax: {
            //         url: "https://test.accessitlibrary.com/wp-json/ais-listo/v1/countries",
            //         path: "*"
            //         // path: '*'
            //     }
            // },
            // dogs: {
            //     ajax: {
            //         url: "https://dog.ceo/api/breeds/list/all",
            //         path: "message.terrier"
            //     }
            // },
            // base: {
            //     ajax: {
            //         url: 'https://test.accessitlibrary.com/wp-json/ais-listo/v1',
            //         path: "*.*.namespace"
            //     }
            // },
            // website: {
            //     ajax: 'https://test.accessitlibrary.com/wp-json',
            //     // ajax: 'http://localhost:81/aistestwp/wp-json/',
            //     path: "namespaces"
            // },  
        },
        callback: {
            onInit: function (node) {
                console.log('Typeahead Initiated on ' + node.selector);
            },
            onResult: function (node, query, result, resultCount, resultCountPerGroup) {
                console.log(node, query, result, resultCount, resultCountPerGroup);
            }
        },
        debug: true,
    });

    // $('#dogs').typeahead({
    //     order: "desc",
    //     dynamic: true, // get a new dataset from the source option on every key press
    //     minLength: 0,
    //     hint: true,
    //     source: {
    //         dogs: {
    //             ajax: {
    //                 url: "https://dog.ceo/api/breeds/list/all",
    //                 path: "message.terrier"
    //             }
    //         },
    //     },
    //     callback: {
    //         onInit: function (node) {
    //             console.log('Typeahead Initiated on ' + node.selector);
    //         }
    //     }
    // });

    // $('#country_v1').typeahead({
    // // $.typeahead({
    //     // input: '.js-typeahead-country_v1',
    //     // input: '#js-typeahead-country_v1',
    //     order: "desc",
    //     source: {
    //         data: [
    //             "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    //             "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
    //             "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
    //             "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
    //             "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
    //             "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
    //             "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    //             "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
    //             "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    //             "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
    //             "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
    //             "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    //             "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
    //             "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    //             "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    //             "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
    //             "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    //             "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    //             "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
    //             "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
    //             "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
    //             "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
    //             "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    //             "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    //             "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    //         ]
    //     },
    //     callback: {
    //         onInit: function (node) {
    //             console.log('Typeahead Initiated on ' + node.selector);
    //         }
    //     }
    // });


});