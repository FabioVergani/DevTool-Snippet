(function(win){
 const $=win, $d=$.document,

 $console=$.console,
 log=$console.log.bind($console),
 logInfo=$console.info.bind($console),
 logObject=$console.dir.bind($console),
 logGroup=$console.group.bind($console),
 logGroupEnd=$console.groupEnd.bind($console),
 logGroupCollapsed=$console.groupCollapsed.bind($console);

 $console.clear();
 log('styleSheets:');
 const allSheets=$d.styleSheets;
 let sheet,sheetIndex=0;
 for(const sheets=allSheets,totalSheets=allSheets.length;sheetIndex<totalSheets;++sheetIndex){
	sheet=sheets[sheetIndex];
	logGroup(sheetIndex);
	logObject(sheet);
	if(sheet.disabled!==true){
	 logGroupCollapsed('Rules');
	 const allRules=sheet.cssRules;
	 let rule,ruleIndex=0;
	 for(const rules=allRules,totalRules=allRules.length;ruleIndex<totalRules;++ruleIndex){
		rule=rules[ruleIndex];
		logObject(rule);
	 };
	 logGroupEnd();
	 logInfo('processed rules:',ruleIndex);
	};
	logGroupEnd();
 };
 logInfo('processed sheets:',sheetIndex);
})(window);
