function getRequestData(requestData){
	var tableData="<tr>"
		for(var i=0;i<requestData.length;i++){
			for(var j=0;j<requestData[i].length;j++){
				tableData+="<td class='newline'>"+requestData[i][j]+"</td>"
			}
			tableData+="</tr>"
			document.getElementById("tbody1").innerHTML=tableData;
		}
}

function getResponseData(responseData){
	var tableData="<tr>"
		for(var i=0;i<responseData.length;i++){
			for(var j=0;j<responseData[i].length;j++){
				tableData+="<td class='newline'>"+responseData[i][j]+"</td>"
			}
			tableData+="</tr>"
			document.getElementById("tbody2").innerHTML=tableData;
		}
}
