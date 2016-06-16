 
window.RulesOf=function(node){


	function getRules(sheet,elem){console.dir(sheet);
/*
	 for(let e,x=elem,r=data,i=0,m=sheet.cssRules,l=m.length,a=A,b=B,f=$matchMedia,loop=getRules;i<l;++i){
		e=m[i];
		if(e instanceof a){
			console.log('MediaRule',e);
			if(f(e.conditionText).matches){loop(e.cssRules);};
		}else if(e instanceof b && x.matches(e.selectorText)){
			console.log('Rule',e);
			r[r.length]=e;
		};
	 };
*/
	};

	const data=[], el=node, $=window, A=$.CSSMediaRule, B=$.cssRules, $matchMedia=$.matchMedia;

	for(let i=0,m=$.document.styleSheets,l=m.length,f=getRules,e=el,x;i<l;++i){
		x=m[i];
		console.dir(x);
		//f(m[i],e);
	};
	return data;

};

//go
window.RulesOf($0);
