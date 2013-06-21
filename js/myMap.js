var MarkerRed = L.icon({
    iconUrl: 'images/binocularsRed.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -11] // point from which the popup should open relative to the iconAnchor
});

var MarkerYellow = L.icon({
    iconUrl: 'images/binocularsYellow.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -11] // point from which the popup should open relative to the iconAnchor
});

var MarkerGreen = L.icon({
    iconUrl: 'images/binocularsGreen.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -11] // point from which the popup should open relative to the iconAnchor
});

    Olympic = L.marker([33.761381,-84.393346], {icon: MarkerGreen}).bindPopup('<a href="http://www.centennialpark.com/index.php/plan-your-visit/event-calendar/springsummer-events/4th-of-july"><b>4th of July at Centennial Olympic Park</b></a> <br /><br /> Centennial Olympic Park <br /> 265 Park Avenue West, Atlanta <br /><br /> 6 p.m., gates open. Fireworks begin about 9:40 p.m. Free.'),
    Aquarium = L.marker([33.763353,-84.395159], {icon: MarkerRed}).bindPopup('<a href="http://www.georgiaaquarium.org/explore-the-aquarium/events-and-programs/redwhitebrew.aspx"><b>Red White & Brew at the Georgia Aquarium</b></a> <br /><br /> Georgia Aquarium <br /> 225 Baker Street, Atlanta <br /><br /> 6 to 10:30 p.m. $55, 21 and older only.')
    Lenox = L.marker([33.84718,-84.361653], {icon: MarkerGreen}).bindPopup('<a href="http://www.simon.com/mall/lenox-square"><b>Lenox Square 4th of July</b></a> <br /><br /> 3393 Peachtree Rd NE, Atlanta <br /><br /> 10 a.m., opens. Fireworks at dusk. Free.')
    Mall = L.marker([34.067041,-83.987839], {icon: MarkerGreen}).bindPopup('<a href="http://www.mallofgeorgia.com"><b>Mall of Georgia 11th annual <br /> Fabulous Fun Fest</b></a> <br /><br /> Mall of Georgia <br /> 3333 Buford Drive, Buford <br /><br /> 2 p.m. events begin. Fireworks begin at dusk. <br /> Post-fireworks screening of Playing for Keeps <br /> (rated PG-13). Free.')
    Alpharetta = L.marker([34.070702,-84.30788], {icon: MarkerGreen}).bindPopup('<a href="http://www.alpharetta.ga.us/index.php?m=calendar&id=649&date=1341432000"><b>Alpharetta July 4th Fireworks and <br /> Festivities in Wills Park</b></a> <br /><br /> Wills Park <br /> 1825 Old Milton Parkway, Alpharetta <br /><br /> 6-10 p.m. Free.')
    Braves = L.marker([33.735761,-84.389312], {icon: MarkerYellow}).bindPopup('<a href="http://atlanta.braves.mlb.com/schedule/promotions.jsp?c_id=atl"><b>Atlanta Braves vs. Miami Marlins</b></a> <br /><br /> Turner Field <br /> 755 Hank Aaron Drive, Atlanta<br /><br /> 7:10 p.m. Tickets $11-$92. <br /> (Ability to watch from nearby parking lots is free.)')
    Marietta = L.marker([33.950694,-84.529066], {icon: MarkerGreen}).bindPopup('<a href="http://www.mariettaga.gov/city/residents/parks/specialevents/julyfourth"><b>Marietta Freedom Parade, <br /> Fourth in the Park and celebration</b></a> <br /><br /> Parade begins at 10 a.m. at Roswell Street Baptist <br /> Church and ends at North Marietta Parkway, Marietta<br /><br /> 10 a.m. - 9 p.m. Fireworks at dusk. Free.')
    Stone = L.marker([33.809462,-84.14418], {icon: MarkerRed}).bindPopup('<a href="http://www.stonemountainpark.com/events/Fantastic-Fourth-Celebration.aspx"><b>Fantastic Fourth Celebration <br /> at Stone Mountain Park</b></a> <br /><br /> Highway 78 East, Stone Mountain<br /><br /> Begins at dusk. <br /> $10 daily or $35 for annual parking permit.')
    Nash = L.marker([33.457153,-84.28771], {icon: MarkerGreen}).bindPopup('<a href="http://www.henrycountybattlefield.com/calendar/calendar.htm"><b>Fireworks at The Nash Farm <br /> Battlefield in Hampton</b></a> <br /><br /> Nash Farm <br /> 4361 Jonesboro Rd., Hampton<br /><br /> Fireworks at dusk. Free.')
    East = L.marker([33.680122,-84.44036], {icon: MarkerGreen}).bindPopup('<a href="http://www.atlanta.net/eastpoint/events-fourth-of-july.aspx"><b>East Point Hometown Celebration</b></a> <br /><br /> 2757 Main St., East Point <br /><br /> 5-11 p.m. Free.')
    Speedway = L.marker([33.383669,-84.317966], {icon: MarkerRed}).bindPopup('<a href="http://www.atlantamotorspeedway.com/events/thunder/"><b>Thursday Thunder and Fireworks <br /> at Atlanta Motor Speedway</b></a> <br /><br /> 1500 N Highway 41, Hampton <br /><br /> Gates open at 6 p.m. Children 6-11 $2, adult $6.')
    Lilburn = L.marker([33.886582,-84.132936], {icon: MarkerGreen}).bindPopup('<a href="http://www.cityoflilburn.com/index.asp?Type=B_BASIC&SEC={89B928D9-7F2C-4FE0-8FCC-6A87771B723A}&DE={8ED313B1-49EB-4DCF-86E4-2B43F3C990F9}"><b>Celebrate July 4th in Lilburn</b></a> <br /><br /> Lilburn City Park <br /> 76 Main St., Lilburn <br /><br /> 4-10 p.m. Free.')
    Woodstock = L.marker([34.101269,-84.519303], {icon: MarkerYellow}).bindPopup('<a href="http://www.woodstockga.gov/index.aspx?nid=90"><b>Woodstock run, parade, festival, fireworks</b></a> <br /><br /> Main Street, downtown Woodstock <br /><br /> 7:30 a.m. for race. Registration $30 for race. <br /> Other events free.')
	
var free = L.layerGroup([Olympic, Lenox, Mall, Alpharetta, Marietta, Nash, East, Lilburn]);

var maybe = L.layerGroup([Braves, Woodstock]);

var pay = L.layerGroup([Aquarium, Stone, Speedway]);
    
var cmAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    cmUrl = 'http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/100064/256/{z}/{x}/{y}.png';

var regular   = L.tileLayer(cmUrl, {styleId: 100064, attribution: cmAttr});

		var map = L.map('map', {
			center: new L.LatLng(33.801974,-84.296722),
			zoom: 9,
			layers: [regular, free, maybe, pay],
		});


L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/100064/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);

var baseLayers = {};

var overlayMaps = {
    
    "Free events": free,
    "Part of event has cost": maybe,
    "Events with a fee": pay
    //"All scheduled new libraries": all
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
    
//var marker = L.marker([33.751748,-84.391479]).bindLabel('Look revealing label!').addTo(map);
    
//var popup = L.popup()
    //.setLatLng([33.751748,-84.491479])
    //.setContent("I am a standalone popup.")
    //.openOn(map);