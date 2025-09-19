//  Q1. Use the countries array to display all the countries.See the design

let div = document.querySelector("#container");
div.style.margin = "50px 100px";

//  Countries List
const countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua & Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia & Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Chad','Chile','China','Colombi','Comoros','Congo (Brazzaville)','Costa Rica',"Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor Timur)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany', 'Ghana','Greece','Grenada','Guatemala', 'Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan', 'Kenya','Kiribati', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan', 'Laos','Latvia','Lebanon','Lesotho','Liberia','Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts &   Nevis','Saint Lucia','Saint Vincent','Samoa','San Marino','Sao Tome & Principe','Saudi Arabia','Senegal','Serbia & Montenegro','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon' ,'Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad & Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];

const ul = document.createElement("ul");
ul.style.display = "grid";
ul.style.gridTemplateColumns = "repeat(6, 1fr)";
ul.style.gap = "2px";
ul.style.listStyle = "none";

for (let i = 0; i < countries.length; i++) {
const li = document.createElement("li");
    li.textContent = countries[i];
    li.style.display = "grid";
    li.style.textAlign = "center";
    li.style.justifyContent = "center";
    li.style.alignContent = "center";
    li.style.border = "2px solid #f4e5e5ff";
    li.style.color = "#000000";
    li.style.backgroundColor = "#fdfdfd";
    li.style.fontWeight = "bolder";
    li.style.fontFamily = "arial";
    li.style.height = "100px";
    ul.appendChild(li);
}

// Headings
let heading = document.createElement("h1");
heading.textContent = "WORLD COUNTRIES LIST";
heading.style.textAlign = "center";
document.body.appendChild(heading);

let heading2 = document.createElement("h2");
heading2.textContent = `Total Number Of Countries: ${countries.length} `;
heading2.style.textAlign = "center";
document.body.appendChild(heading2);

div.appendChild(ul);
document.body.appendChild(div);