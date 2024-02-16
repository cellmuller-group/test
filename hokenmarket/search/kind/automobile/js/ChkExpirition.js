//
// 2020.11.20
// Kim Wooram
//

$(function() {

	// Remove expired campaigns
	$.each($(".campaign_detail"), function() {
		var str_start_date = $(this).attr("data-start");
		var str_end_date = $(this).attr("data-end");
		
		if (!fnValidDateFormat(str_start_date) || !fnValidDateFormat(str_end_date)) {
			$(this).remove();
		}

		var current_date = new Date();
		var start_date = new Date(str_start_date);
		var end_date = new Date(str_end_date);
		
		if (!fnChkDisplay(current_date, start_date, true) || !fnChkDisplay(current_date, end_date, false)) {
			$(this).remove();
		}
		
	});
	
/*
	// Check validation
	function fnValidDateFormat(date) {
		var tmpAry = date.split(" ");
		if (tmpAry.length != 2)
			return false;
		
		var date = tmpAry[0];
		if (date.length != 10 || date.split("/").length != 3)
			return false;
		
		var time = tmpAry[1];
		tmpAry = time.split(":");
		if (tmpAry.length != 2)
			return false;
		
		var hour = tmpAry[0];
		if (hour.length != 2 || parseInt(hour, 10) > 23)
			return false;
			
		var min = tmpAry[1];
		if (min.length != 2 || parseInt(min, 10) > 59)
			return false;

		return true;
	};
*/

/*
	// Check display
	function fnChkDisplay(now, compare, flag) {
		var nYear = now.getFullYear();
		var nMonth = now.getMonth() + 1;
		var nDay = now.getDate()
		var nHour = now.getHours();
		var nMin = now.getMinutes();
		
		var cYear = compare.getFullYear();
		var cMonth = compare.getMonth() + 1;
		var cDay = compare.getDate()
		var cHour = compare.getHours();
		var cMin = compare.getMinutes();
		
		if (nYear == cYear) {
			if (nMonth == cMonth) {
				if (nDay == cDay) {
					if (nHour == cHour) {
						if (nMin >= cMin) {
							return flag;
						}
						else {
							return !flag;
						}
					}
					else if (nHour > cHour) {
						return flag;
					}
					else {
						return !flag;
					}
				}
				else if (nDay > cDay) {
					return flag;
				}
				else {
					return !flag;
				}
			}
			else if (nMonth > cMonth) {
				return flag;
			}
			else {
				return !flag;
			}
		}
		else if (nYear > cYear) {
			return flag;
		}
		else {
			return !flag;
		}
	}
*/

	// Check validation
	function fnValidDateFormat(date) {
		const regex = /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|2[0-3]):[0-5][0-9]$/
		
		return regex.test(date);
	};
	
	// Check display
	function fnChkDisplay(now, compare, flag) {
		// flag : display start
		if (flag) {
			return now.getTime() >= compare.getTime();
		}
		
		return now.getTime() <= compare.getTime();
	}
	
	$("#tab01,#tab02,#tab03,#tab04").addClass("show");
});
