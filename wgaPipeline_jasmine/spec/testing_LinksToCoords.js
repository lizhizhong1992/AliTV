var karyo;
var links;

describe("link_to_coords", function(){
	
	beforeEach(function(done){
		loadKaryoFile(karyoFile, function(data){
			karyo_to_coords(data);
			karyo=data;
			
			loadLinkFile(linkFile, function(data){
			links=data;
			done();
			});
		});
	});
	
	it("should test if links and karyo are defined when they are returned from their functions", function(){
		expect(karyo).not.toBeDefined();
		expect(links).not.toBeDefined();
	});

});	


