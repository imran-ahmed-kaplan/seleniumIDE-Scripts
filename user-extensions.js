Selenium.prototype.doTypeRandomEmail = function(locator) {
	/**
	 * Sets the value of an input field to a random email id, 
	 * as though you typed it in.
	 *
	 * @param locator an <a href="#locators">element locator</a>
	 */
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 2; i++ ){text += possible.charAt(Math.floor(Math.random() * possible.length));}
        
	// All locator-strategies are automatically handled by "findElement"
	var element = this.page().findElement(locator);

	/* The following block generates a random email string */
	// var allowedChars = "abcdefghiklmnopqrstuvwxyz";
	// var stringLength = 8;
	// var randomstring = '';
	var randomstring = (new Date().getMonth()+1)+''+(new Date().getDate())+''+(new Date().getFullYear().toString().slice(2)) +"qaTest"+(new Date().getHours())+'h'+(new Date().getMinutes())+'.'+(new Date().getSeconds()); //text+
			/*
    for (var i=0; i<stringLength; i++) {
        var rnum = Math.floor(Math.random() * allowedChars.length);
        randomstring += allowedChars.substring(rnum,rnum+1);
    }
			 */
			// Append a domain name
			randomstring += "@mailinator.com"
			// Replace the element text with the new text
			this.browserbot.replaceText(element, randomstring);
};
//######################################################################################################
Selenium.prototype.doTypeFirstName = function(locator) {
	var element = this.page().findElement(locator);
	var temp = "";
	if (((new Date().getMonth()+1)<10) && (((new Date().getDate()-1))<10)) {
		temp = '0'+(new Date().getMonth()+1)+''+'0'+((new Date().getDate()))+''+(new Date().getFullYear().toString().slice(2))+''+(new Date().getHours())+'h'+(new Date().getMinutes()) 
	} 
	if (((new Date().getMonth()+1)<10) & (((new Date().getDate()-1))>10)) {
		temp = '0'+(new Date().getMonth()+1)+''+((new Date().getDate()))+''+(new Date().getFullYear().toString().slice(2))+''+(new Date().getHours())+'h'+(new Date().getMinutes()) 
	} 
	else{    
	temp = (new Date().getMonth()+1)+''+(new Date().getDate())+''+(new Date().getFullYear().toString().slice(2))+''+(new Date().getHours())+'h'+(new Date().getMinutes())
	}

	var randomstring = (new Date().getSeconds())+"QA"+temp

    this.browserbot.replaceText(element, randomstring);
};
//######################################################################################################
Selenium.prototype.doTypeLastName = function(locator) {

	var element = this.page().findElement(locator);
	var temp = "";
	if (((new Date().getMonth()+1)<10) && (((new Date().getDate()-1))<10)) {
		temp = '0'+(new Date().getMonth()+1)+''+'0'+((new Date().getDate()))+''+(new Date().getFullYear().toString().slice(2))+''+(new Date().getHours())+'h'+(new Date().getMinutes()) 
	} 
	if (((new Date().getMonth()+1)<10) & (((new Date().getDate()-1))>10)) {
		temp = '0'+(new Date().getMonth()+1)+''+((new Date().getDate()))+''+(new Date().getFullYear().toString().slice(2))+''+(new Date().getHours())+'h'+(new Date().getMinutes()) 
	} 
	else{    
	temp = (new Date().getMonth()+1)+''+(new Date().getDate())+''+(new Date().getFullYear().toString().slice(2))+''+(new Date().getHours())+'h'+(new Date().getMinutes())
	}

	var randomstring = (new Date().getSeconds())+"Test"+temp

    this.browserbot.replaceText(element, randomstring);
};
//######################################################################################################
Selenium.prototype.doTypeTwoWeeksFromToday = function(locator) {
	var currentTime = new Date();
	currentTime.setDate(currentTime.getDate()+14);
	var element = this.page().findElement(locator);
	var temp = "";
	if (((currentTime.getMonth()+1)<10) && (((currentTime.getDate()-1))<10)) {
		temp = '0'+(currentTime.getMonth()+1)+'/'+'0'+((currentTime.getDate()))+'/'+(currentTime.getFullYear().toString())
	} 
	if (((currentTime.getMonth()+1)<10) & (((currentTime.getDate()-1))>10)) {
		temp = '0'+(currentTime.getMonth()+1)+'/'+((currentTime.getDate()))+'/'+(currentTime.getFullYear().toString())
	} 
	else{    
	temp = (currentTime.getMonth()+1)+'/'+(currentTime.getDate())+'/'+(currentTime.getFullYear().toString())
	}

	var randomstring = temp

    this.browserbot.replaceText(element, randomstring);
};
//######################################################################################################
Selenium.prototype.doTypeTodaysDate = function(locator) {
	var element = this.page().findElement(locator);
	var temp = "";
	if (((new Date().getMonth()+1)<10) && (((new Date().getDate()-1))<10)) {
		temp = '0'+(new Date().getMonth()+1)+'/'+'0'+((new Date().getDate()))+'/'+(new Date().getFullYear().toString())
	} 
	if (((new Date().getMonth()+1)<10) & (((new Date().getDate()-1))>10)) {
		temp = '0'+(new Date().getMonth()+1)+'/'+((new Date().getDate()))+'/'+(new Date().getFullYear().toString())
	} 
	else{    
	temp = (new Date().getMonth()+1)+'/'+(new Date().getDate())+'/'+(new Date().getFullYear().toString())
	}

	var randomstring = temp

    this.browserbot.replaceText(element, randomstring);
};
//######################################################################################################
Selenium.prototype.doTypeDesiredDateFromToday = function(locator,numberOfDaysFromToday) {
	var currentTime = new Date();
	currentTime.setDate(currentTime.getDate()+(numberOfDaysFromToday * 1));
	var element = this.page().findElement(locator);
	var temp = "";
	if (((currentTime.getMonth()+1)<10) && (((currentTime.getDate()-1))<10)) {
		temp = '0'+(currentTime.getMonth()+1)+'/'+'0'+((currentTime.getDate()))+'/'+(currentTime.getFullYear().toString())
	} 
	if (((currentTime.getMonth()+1)<10) & (((currentTime.getDate()-1))>10)) {
		temp = '0'+(currentTime.getMonth()+1)+'/'+((currentTime.getDate()))+'/'+(currentTime.getFullYear().toString())
	} 
	else{    
	temp = (currentTime.getMonth()+1)+'/'+(currentTime.getDate())+'/'+(currentTime.getFullYear().toString())
	}

	var randomstring = temp

    this.browserbot.replaceText(element, randomstring);
};
//######################################################################################################