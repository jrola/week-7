
var statusCodes = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            306: "Reserved",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Request Entity Too Large",
            414: "Request-URI Too Long",
            415: "Unsupported Media Type",
            416: "Requested Range Not Satisfiable",
            417: "Expectation Failed",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unassigned",
            426: "Upgrade Required",
            427: "Unassigned",
            428: "Precondition Required",
            429: "Too Many Requests",
            430: "Unassigned",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates (Experimental)",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Unassigned",
            510: "Not Extended",
            511: "Network Authentication Required"
        };

	
		// XML HTTP Request
		var xhr = new XMLHttpRequest();			
		var content = document.getElementById('content');  
		var url = "http://jrola.net76.net/demo.php?page=";	//varibles, start count at page= " none
		
		var pageNumber = 1;		// varible pagenumber is set to 1
		
		
		
		
		
		
		function callback() {			// response is added to the innerHTML
			var response = xhr.responseText;  
			
			content.innerHTML += response; 
 
		}
		
		
		xhr.onreadystatechange = function() { 	// while ajax is running it runs this function on every status change
						
		   if (xhr.readyState==4 && xhr.status==200) {  
			callback();  
		    
		
		   }
		};  
		
		
		function makeAJAXCALL () {		//function that goes through pages when button is clicked, if it reaches page 4 it stops
			console.log(makeAJAXCALL)
			if(pageNumber <=4){
			xhr.open('GET', url+pageNumber, true);
			xhr.send();
			pageNumber++;
		}	
			
		};
		
		
		window.addEventListener("load", makeAJAXCALL);		// loads the windows, runs makeJaxcall to display page
		document.getElementById('showResults').addEventListener("click", makeAJAXCALL);		// when button is clicked it displays the next page.

		
		
		// if(window.scrollTop == (window.scrollHeight-window.offsetHeight));
		
		
		
		 
