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

    Olympic = L.marker([33.761381,-84.393346], {icon: MarkerGreen}).bindPopup('<a href="http://www.centennialpark.com/index.php/plan-your-visit/event-calendar/springsummer-events/4th-of-july" target="_blank"><b>4th of July at Centennial Olympic Park</b></a> <br /><br /> Centennial Olympic Park <br /> 265 Park Avenue West, Atlanta <br /><br /> 6 p.m., gates open. Fireworks begin about 9:40 p.m. Free.'),
    Aquarium = L.marker([33.763353,-84.395159], {icon: MarkerRed}).bindPopup('<a href="http://www.georgiaaquarium.org/explore-the-aquarium/events-and-programs/redwhitebrew.aspx" target="_blank"><b>Red White & Brew at the Georgia Aquarium</b></a> <br /><br /> Georgia Aquarium <br /> 225 Baker Street, Atlanta <br /><br /> 6 to 10:30 p.m. $55, 21 and older only.')
    Lenox = L.marker([33.84718,-84.361653], {icon: MarkerGreen}).bindPopup('<a href="http://www.simon.com/mall/lenox-square" target="_blank"><b>Lenox Square 4th of July</b></a> <br /><br /> 3393 Peachtree Rd NE, Atlanta <br /><br /> 10 a.m., opens. Fireworks at dusk. Free.')
    Mall = L.marker([34.067041,-83.987839], {icon: MarkerGreen}).bindPopup('<a href="http://www.mallofgeorgia.com" target="_blank"><b>Mall of Georgia 11th annual <br /> Fabulous Fun Fest</b></a> <br /><br /> Mall of Georgia <br /> 3333 Buford Drive, Buford <br /><br /> 2 p.m. events begin. Fireworks begin at dusk. <br /> Post-fireworks screening of Playing for Keeps <br /> (rated PG-13). Free.')
    Alpharetta = L.marker([34.070702,-84.30788], {icon: MarkerGreen}).bindPopup('<a href="http://www.alpharetta.ga.us/index.php?m=calendar&id=649&date=1341432000" target="_blank"><b>Alpharetta July 4th Fireworks and <br /> Festivities in Wills Park</b></a> <br /><br /> Wills Park <br /> 1825 Old Milton Parkway, Alpharetta <br /><br /> 6-10 p.m. Free.')
    Braves = L.marker([33.735761,-84.389312], {icon: MarkerYellow}).bindPopup('<a href="http://atlanta.braves.mlb.com/schedule/promotions.jsp?c_id=atl" target="_blank"><b>Atlanta Braves vs. Miami Marlins</b></a> <br /><br /> Turner Field <br /> 755 Hank Aaron Drive, Atlanta<br /><br /> 7:10 p.m. Tickets $11-$92. <br /> (Ability to watch from nearby parking lots is free.)')
    Marietta = L.marker([33.950694,-84.529066], {icon: MarkerGreen}).bindPopup('<a href="http://www.mariettaga.gov/city/residents/parks/specialevents/julyfourth" target="_blank"><b>Marietta Freedom Parade, <br /> Fourth in the Park and celebration</b></a> <br /><br /> Parade begins at 10 a.m. at Roswell Street Baptist <br /> Church and ends at North Marietta Parkway, Marietta<br /><br /> 10 a.m. - 9 p.m. Fireworks at dusk. Free.')
    Stone = L.marker([33.809462,-84.14418], {icon: MarkerRed}).bindPopup('<a href="http://www.stonemountainpark.com/events/Fantastic-Fourth-Celebration.aspx" target="_blank"><b>Fantastic Fourth Celebration <br /> at Stone Mountain Park</b></a> <br /><br /> Highway 78 East, Stone Mountain<br /><br /> Begins at dusk. <br /> $10 daily or $35 for annual parking permit.')
    Nash = L.marker([33.457153,-84.28771], {icon: MarkerGreen}).bindPopup('<a href="http://www.henrycountybattlefield.com/calendar/calendar.htm" target="_blank"><b>Fireworks at The Nash Farm <br /> Battlefield in Hampton</b></a> <br /><br /> Nash Farm <br /> 4361 Jonesboro Rd., Hampton<br /><br /> Fireworks at dusk. Free.')
    East = L.marker([33.680122,-84.44036], {icon: MarkerGreen}).bindPopup('<a href="http://www.atlanta.net/eastpoint/events-fourth-of-july.aspx" target="_blank"><b>East Point Hometown Celebration</b></a> <br /><br /> 2757 Main St., East Point <br /><br /> 5-11 p.m. Free.')
    Speedway = L.marker([33.383669,-84.317966], {icon: MarkerRed}).bindPopup('<a href="http://www.atlantamotorspeedway.com/events/thunder/" target="_blank"><b>Thursday Thunder and Fireworks <br /> at Atlanta Motor Speedway</b></a> <br /><br /> 1500 N Highway 41, Hampton <br /><br /> Gates open at 6 p.m. Children 6-11 $2, adult $6.')
    Lilburn = L.marker([33.886582,-84.132936], {icon: MarkerGreen}).bindPopup('<a href="http://www.cityoflilburn.com/index.asp?Type=B_BASIC&SEC={89B928D9-7F2C-4FE0-8FCC-6A87771B723A}&DE={8ED313B1-49EB-4DCF-86E4-2B43F3C990F9}" target="_blank"><b>Celebrate July 4th in Lilburn</b></a> <br /><br /> Lilburn City Park <br /> 76 Main St., Lilburn <br /><br /> 4-10 p.m. Free.')
    Woodstock = L.marker([34.101269,-84.519303], {icon: MarkerYellow}).bindPopup('<a href="http://www.woodstockga.gov/index.aspx?nid=90" target="_blank"><b>Woodstock run, parade, festival, fireworks</b></a> <br /><br /> Main Street, downtown Woodstock <br /><br /> 7:30 a.m. for race. Registration $30 for race. <br /> Other events free.')

    Duluth = L.marker([34.019123,-84.171624], {icon: MarkerGreen}).bindPopup('<a href="http://www.duluthga.net/whats-happening/calendar-of-events/#action=ai1ec_month&ai1ec_month_offset=1&ai1ec_post_ids=" target="_blank"><b>Duluth Celebrates America</b></a> <br /><br /> Scott Hudgens Park - <br /> River Green Business Park,  <br /> River Green Parkway, Duluth<br /><br /> 4 p.m. July 3. Free.')
    Norcross = L.marker([33.941081,-84.211321], {icon: MarkerGreen}).bindPopup('<a href="http://www.norcrossga.net/events/event-profile.php?Event_ID=1862" target="_blank"><b>Independence Day Celebration <br /> and Mother&#39;s Finest Concert</b></a> <br /><br /> Lillian Webb Park <br /> 5 College St., Norcross<br /><br /> 4 p.m. July 3. Free.')
    Villa = L.marker([33.689049,-84.946675], {icon: MarkerGreen}).bindPopup('<a href="http://www.villaricaparks.com/PDFs/homepage/vr.pg09.pdf" target="_blank"><b>Villa Rica Fireworks Extravaganza</b></a> <br /><br /> The V-plex <br /> 1605 Highway 61, Villa Rica<br /><br /> 5 p.m. July 3. Free.')
    Kennesaw = L.marker([34.040463,-84.603975], {icon: MarkerYellow}).bindPopup('<a href="www.kennesawjuly3.com" target="_blank"><b>City of Kennesaw&#39;s Salute to America</b></a> <br /><br /> Kennesaw Historic Train Depot <br /> 2828 Cherokee St. NW, Kennesaw<br /><br /> 6-10 p.m. July 3. Free. <br /> Tables can be reserved near the stage for $75')
    Roswell = L.marker([34.062899,-84.381459], {icon: MarkerGreen}).bindPopup('<a href="http://www.roswellgov.com/Calendar.aspx?EID=3856" target="_blank"><b>14th Annual July 4th <br /> Fireworks Extravanganza</b></a> <br /><br /> Roswell High School <br /> 11595 King Road, Roswell<br /><br /> 5:30 p.m. July 4. Fireworks at dusk. Free. <br /> ')
	
var july4 = L.layerGroup([Olympic, Aquarium, Lenox, Mall, Alpharetta, Braves, Marietta, Stone, Nash, East, Speedway, Lilburn, Woodstock, Roswell]);

var july3 = L.layerGroup([Duluth, Norcross, Villa, Kennesaw]);
    
var cmAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    cmUrl = 'http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/100064/256/{z}/{x}/{y}.png';

var regular   = L.tileLayer(cmUrl, {styleId: 100064, attribution: cmAttr});

		var map = L.map('map', {
			center: new L.LatLng(33.801974,-84.296722),
			zoom: 9,
			layers: [regular, july3, july4],
		});


L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/100064/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);

var baseLayers = {};

var overlayMaps = {
    
    "Events on July 3rd": july3,
    "Events on July 4th": july4,
    //"All scheduled new libraries": all
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
    
//var marker = L.marker([33.751748,-84.391479]).bindLabel('Look revealing label!').addTo(map);
    
//var popup = L.popup()
    //.setLatLng([33.751748,-84.491479])
    //.setContent("I am a standalone popup.")
    //.openOn(map);