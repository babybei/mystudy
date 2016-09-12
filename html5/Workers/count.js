var countNum=0;
function count(){
	debugger;
	postMessage(countNum);
	countNum++;
	setTimeout(count,1000);
}
count();