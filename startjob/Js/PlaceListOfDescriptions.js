
		//Store information about your firebase so we can connect
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//IMPORTANT: REPLACE THESE WITH YOUR VALUES (these ones won't work)
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

		var config = {
	 apiKey: "AIzaSyDBvvIyqeiyY2NFdV99ifTGmcOXwbIw5T0",
  authDomain: "sidchat-594eb.firebaseapp.com",
  databaseURL: "https://sidchat-594eb.firebaseio.com",
  projectId: "sidchat-594eb",
  storageBucket: "sidchat-594eb.appspot.com",
  messagingSenderId: "746186324321",
  appId: "1:746186324321:web:2f530dd6c386889a0a2d20"
		};
		
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function getParams(){
                var idx = document.URL.indexOf('?');
                var params = new Array();
                if (idx != -1) {
                    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                    for (var i=0; i<pairs.length; i++){
                        nameVal = pairs[i].split('=');
                        params[nameVal[0]] = nameVal[1];
                    }
                }
                return params;
            }
            params = getParams();
            firstname = unescape(params["link"]);
        
		




		//initialize your firebase
		firebase.initializeApp(config);
		var database = firebase.database();
		
		//create a variable to hold our orders list from firebase
		var firebaseOrdersCollection = database.ref('Job_Inter').child('JobsList');


		//this function is called when the submit button is clicked
		function submitOrder() {

			//Grab order data from the form
			var order = {
			Title: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
				Type: $('#notesField').val(), //another way you could write is $('#myForm [name="fullname"]').
				JobId: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
				   LocationState: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
          LocationCity: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
          
		  SalaryMin: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
		  SalaryMax: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
				F_P_Type: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
Qualification: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
		Specialization: $('#fullNameField').val(), //another way you could write is $('#myForm [name="fullname"]').
				
		};
			
			//'push' (aka add) your order to the existing list
			firebaseOrdersCollection.push(order); //'orders' is the name of the 'collection' (aka database table)
			
		};
	
		//create a 'listener' which waits for changes to the values inside the firebaseOrdersCollection 
		firebaseOrdersCollection.on('value',function(orders){
			
			//create an empty string that will hold our new HTML
			var allOrdersHtml = "";
			
			//this is saying foreach order do the following function...
			orders.forEach(function(firebaseOrderReference){
				//this gets the actual data (JSON) for the order.
				var order = firebaseOrderReference.val();
				console.log(order); //check your console to see it!
				
			

				
				//create html for the individual order
				//note: this is hard to make look pretty! Be sure to keep your indents nice :-)
				//IMPORTANT: we use ` here instead of ' (notice the difference?) That allows us to use enters
				var individialOrderHtml =	`
				
				 
				
				<div class="card" style="margin-Top:20px;">
  <div class="card-header">
  <nav class="nav nav-pills nav-justified">
     
<a class="nav-item nav-link active" href="#">`+order.Title+`</a>
  
  </nav>

  </div>
  <div class="card-body">
  <table class="table">
  <thead>
    <tr>
      <th scope="col"><div class="bs-example">
    <a><span class="fa fa-map-marker" data-toggle="tooltip" style="color:red;"></span></a><a>`+order.LocationState+`-`+order.LocationCity+`</a></div></th>
      <th scope="col"><a>₹`+order.SalaryMin+` - ₹`+order.SalaryMax+`</a></th>
      </tr>
  </thead>
</table>
 
  <a class="card-title" style="width: 92px; height: 32px; font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: #072278;">Job Type - `+order.Type+`</a>
  
   <div class="items-link f-right">
                                <a href="job_details.html">`+order.F_P_Type+`</a>
                                
                            </div>
                        
<div class="f-right">
                                <a style="width: 92px; height: 32px; font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: #FA011F;" class="style1">Qualification - `+order.Qualification+`</a>
                                
                            </div>
<div class="f-right">
                                <a style="width: 92px; height: 32px; font-family: Arial, Helvetica, sans-serif; font-size: 20px; color: #2349C2;" class="style1">Specialization - `+order.Specialization+`</a>
                                
                            </div>
                        

	  
        
	 <a href="jobspost.html?link=`+order.JobId+`" class="btn btn-primary">read more</a>
	 <a class="nav-item nav-link disabled"></a>
 
  </div>
</div>
				
								`
										
											;
				
				//add the individual order html to the end of the allOrdersHtml list
				allOrdersHtml = allOrdersHtml + individialOrderHtml;
				
				

			});
			
			//actaull put the html on the page inside the element with the id PreviousOrders
			$('#previousOrders').html(allOrdersHtml);
			
			
});





						
