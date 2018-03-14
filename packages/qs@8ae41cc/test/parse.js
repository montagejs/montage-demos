"use strict";var test=require("tape"),qs=require("../"),utils=require("../lib/utils"),iconv=require("iconv-lite");test("parse()",function(a){a.test("parses a simple string",function(a){a.deepEqual(qs.parse("0=foo"),{0:"foo"}),a.deepEqual(qs.parse("foo=c++"),{foo:"c  "}),a.deepEqual(qs.parse("a[>=]=23"),{a:{">=":"23"}}),a.deepEqual(qs.parse("a[<=>]==23"),{a:{"<=>":"=23"}}),a.deepEqual(qs.parse("a[==]=23"),{a:{"==":"23"}}),a.deepEqual(qs.parse("foo",{strictNullHandling:!0}),{foo:null}),a.deepEqual(qs.parse("foo"),{foo:""}),a.deepEqual(qs.parse("foo="),{foo:""}),a.deepEqual(qs.parse("foo=bar"),{foo:"bar"}),a.deepEqual(qs.parse(" foo = bar = baz "),{" foo ":" bar = baz "}),a.deepEqual(qs.parse("foo=bar=baz"),{foo:"bar=baz"}),a.deepEqual(qs.parse("foo=bar&bar=baz"),{foo:"bar",bar:"baz"}),a.deepEqual(qs.parse("foo2=bar2&baz2="),{foo2:"bar2",baz2:""}),a.deepEqual(qs.parse("foo=bar&baz",{strictNullHandling:!0}),{foo:"bar",baz:null}),a.deepEqual(qs.parse("foo=bar&baz"),{foo:"bar",baz:""}),a.deepEqual(qs.parse("cht=p3&chd=t:60,40&chs=250x100&chl=Hello|World"),{cht:"p3",chd:"t:60,40",chs:"250x100",chl:"Hello|World"}),a.end()}),a.test("allows enabling dot notation",function(a){a.deepEqual(qs.parse("a.b=c"),{"a.b":"c"}),a.deepEqual(qs.parse("a.b=c",{allowDots:!0}),{a:{b:"c"}}),a.end()}),a.deepEqual(qs.parse("a[b]=c"),{a:{b:"c"}},"parses a single nested string"),a.deepEqual(qs.parse("a[b][c]=d"),{a:{b:{c:"d"}}},"parses a double nested string"),a.deepEqual(qs.parse("a[b][c][d][e][f][g][h]=i"),{a:{b:{c:{d:{e:{f:{"[g][h]":"i"}}}}}}},"defaults to a depth of 5"),a.test("only parses one level when depth = 1",function(a){a.deepEqual(qs.parse("a[b][c]=d",{depth:1}),{a:{b:{"[c]":"d"}}}),a.deepEqual(qs.parse("a[b][c][d]=e",{depth:1}),{a:{b:{"[c][d]":"e"}}}),a.end()}),a.deepEqual(qs.parse("a=b&a=c"),{a:["b","c"]},"parses a simple array"),a.test("parses an explicit array",function(a){a.deepEqual(qs.parse("a[]=b"),{a:["b"]}),a.deepEqual(qs.parse("a[]=b&a[]=c"),{a:["b","c"]}),a.deepEqual(qs.parse("a[]=b&a[]=c&a[]=d"),{a:["b","c","d"]}),a.end()}),a.test("parses a mix of simple and explicit arrays",function(a){a.deepEqual(qs.parse("a=b&a[]=c"),{a:["b","c"]}),a.deepEqual(qs.parse("a[]=b&a=c"),{a:["b","c"]}),a.deepEqual(qs.parse("a[0]=b&a=c"),{a:["b","c"]}),a.deepEqual(qs.parse("a=b&a[0]=c"),{a:["b","c"]}),a.deepEqual(qs.parse("a[1]=b&a=c",{arrayLimit:20}),{a:["b","c"]}),a.deepEqual(qs.parse("a[]=b&a=c",{arrayLimit:0}),{a:["b","c"]}),a.deepEqual(qs.parse("a[]=b&a=c"),{a:["b","c"]}),a.deepEqual(qs.parse("a=b&a[1]=c",{arrayLimit:20}),{a:["b","c"]}),a.deepEqual(qs.parse("a=b&a[]=c",{arrayLimit:0}),{a:["b","c"]}),a.deepEqual(qs.parse("a=b&a[]=c"),{a:["b","c"]}),a.end()}),a.test("parses a nested array",function(a){a.deepEqual(qs.parse("a[b][]=c&a[b][]=d"),{a:{b:["c","d"]}}),a.deepEqual(qs.parse("a[>=]=25"),{a:{">=":"25"}}),a.end()}),a.test("allows to specify array indices",function(a){a.deepEqual(qs.parse("a[1]=c&a[0]=b&a[2]=d"),{a:["b","c","d"]}),a.deepEqual(qs.parse("a[1]=c&a[0]=b"),{a:["b","c"]}),a.deepEqual(qs.parse("a[1]=c",{arrayLimit:20}),{a:["c"]}),a.deepEqual(qs.parse("a[1]=c",{arrayLimit:0}),{a:{1:"c"}}),a.deepEqual(qs.parse("a[1]=c"),{a:["c"]}),a.end()}),a.test("limits specific array indices to arrayLimit",function(a){a.deepEqual(qs.parse("a[20]=a",{arrayLimit:20}),{a:["a"]}),a.deepEqual(qs.parse("a[21]=a",{arrayLimit:20}),{a:{21:"a"}}),a.end()}),a.deepEqual(qs.parse("a[12b]=c"),{a:{"12b":"c"}},"supports keys that begin with a number"),a.test("supports encoded = signs",function(a){a.deepEqual(qs.parse("he%3Dllo=th%3Dere"),{"he=llo":"th=ere"}),a.end()}),a.test("is ok with url encoded strings",function(a){a.deepEqual(qs.parse("a[b%20c]=d"),{a:{"b c":"d"}}),a.deepEqual(qs.parse("a[b]=c%20d"),{a:{b:"c d"}}),a.end()}),a.test("allows brackets in the value",function(a){a.deepEqual(qs.parse('pets=["tobi"]'),{pets:'["tobi"]'}),a.deepEqual(qs.parse('operators=[">=", "<="]'),{operators:'[">=", "<="]'}),a.end()}),a.test("allows empty values",function(a){a.deepEqual(qs.parse(""),{}),a.deepEqual(qs.parse(null),{}),a.deepEqual(qs.parse(void 0),{}),a.end()}),a.test("transforms arrays to objects",function(a){a.deepEqual(qs.parse("foo[0]=bar&foo[bad]=baz"),{foo:{0:"bar",bad:"baz"}}),a.deepEqual(qs.parse("foo[bad]=baz&foo[0]=bar"),{foo:{bad:"baz",0:"bar"}}),a.deepEqual(qs.parse("foo[bad]=baz&foo[]=bar"),{foo:{bad:"baz",0:"bar"}}),a.deepEqual(qs.parse("foo[]=bar&foo[bad]=baz"),{foo:{0:"bar",bad:"baz"}}),a.deepEqual(qs.parse("foo[bad]=baz&foo[]=bar&foo[]=foo"),{foo:{bad:"baz",0:"bar",1:"foo"}}),a.deepEqual(qs.parse("foo[0][a]=a&foo[0][b]=b&foo[1][a]=aa&foo[1][b]=bb"),{foo:[{a:"a",b:"b"},{a:"aa",b:"bb"}]}),a.deepEqual(qs.parse("a[]=b&a[t]=u&a[hasOwnProperty]=c",{allowPrototypes:!1}),{a:{0:"b",t:"u"}}),a.deepEqual(qs.parse("a[]=b&a[t]=u&a[hasOwnProperty]=c",{allowPrototypes:!0}),{a:{0:"b",t:"u",hasOwnProperty:"c"}}),a.deepEqual(qs.parse("a[]=b&a[hasOwnProperty]=c&a[x]=y",{allowPrototypes:!1}),{a:{0:"b",x:"y"}}),a.deepEqual(qs.parse("a[]=b&a[hasOwnProperty]=c&a[x]=y",{allowPrototypes:!0}),{a:{0:"b",hasOwnProperty:"c",x:"y"}}),a.end()}),a.test("transforms arrays to objects (dot notation)",function(a){a.deepEqual(qs.parse("foo[0].baz=bar&fool.bad=baz",{allowDots:!0}),{foo:[{baz:"bar"}],fool:{bad:"baz"}}),a.deepEqual(qs.parse("foo[0].baz=bar&fool.bad.boo=baz",{allowDots:!0}),{foo:[{baz:"bar"}],fool:{bad:{boo:"baz"}}}),a.deepEqual(qs.parse("foo[0][0].baz=bar&fool.bad=baz",{allowDots:!0}),{foo:[[{baz:"bar"}]],fool:{bad:"baz"}}),a.deepEqual(qs.parse("foo[0].baz[0]=15&foo[0].bar=2",{allowDots:!0}),{foo:[{baz:["15"],bar:"2"}]}),a.deepEqual(qs.parse("foo[0].baz[0]=15&foo[0].baz[1]=16&foo[0].bar=2",{allowDots:!0}),{foo:[{baz:["15","16"],bar:"2"}]}),a.deepEqual(qs.parse("foo.bad=baz&foo[0]=bar",{allowDots:!0}),{foo:{bad:"baz",0:"bar"}}),a.deepEqual(qs.parse("foo.bad=baz&foo[]=bar",{allowDots:!0}),{foo:{bad:"baz",0:"bar"}}),a.deepEqual(qs.parse("foo[]=bar&foo.bad=baz",{allowDots:!0}),{foo:{0:"bar",bad:"baz"}}),a.deepEqual(qs.parse("foo.bad=baz&foo[]=bar&foo[]=foo",{allowDots:!0}),{foo:{bad:"baz",0:"bar",1:"foo"}}),a.deepEqual(qs.parse("foo[0].a=a&foo[0].b=b&foo[1].a=aa&foo[1].b=bb",{allowDots:!0}),{foo:[{a:"a",b:"b"},{a:"aa",b:"bb"}]}),a.end()}),a.test("correctly prunes undefined values when converting an array to an object",function(a){a.deepEqual(qs.parse("a[2]=b&a[99999999]=c"),{a:{2:"b",99999999:"c"}}),a.end()}),a.test("supports malformed uri characters",function(a){a.deepEqual(qs.parse("{%:%}",{strictNullHandling:!0}),{"{%:%}":null}),a.deepEqual(qs.parse("{%:%}="),{"{%:%}":""}),a.deepEqual(qs.parse("foo=%:%}"),{foo:"%:%}"}),a.end()}),a.test("doesn't produce empty keys",function(a){a.deepEqual(qs.parse("_r=1&"),{_r:"1"}),a.end()}),a.test("cannot access Object prototype",function(a){qs.parse("constructor[prototype][bad]=bad"),qs.parse("bad[constructor][prototype][bad]=bad"),a.equal(typeof Object.prototype.bad,"undefined"),a.end()}),a.test("parses arrays of objects",function(a){a.deepEqual(qs.parse("a[][b]=c"),{a:[{b:"c"}]}),a.deepEqual(qs.parse("a[0][b]=c"),{a:[{b:"c"}]}),a.end()}),a.test("allows for empty strings in arrays",function(a){a.deepEqual(qs.parse("a[]=b&a[]=&a[]=c"),{a:["b","","c"]}),a.deepEqual(qs.parse("a[0]=b&a[1]&a[2]=c&a[19]=",{strictNullHandling:!0,arrayLimit:20}),{a:["b",null,"c",""]},"with arrayLimit 20 + array indices: null then empty string works"),a.deepEqual(qs.parse("a[]=b&a[]&a[]=c&a[]=",{strictNullHandling:!0,arrayLimit:0}),{a:["b",null,"c",""]},"with arrayLimit 0 + array brackets: null then empty string works"),a.deepEqual(qs.parse("a[0]=b&a[1]=&a[2]=c&a[19]",{strictNullHandling:!0,arrayLimit:20}),{a:["b","","c",null]},"with arrayLimit 20 + array indices: empty string then null works"),a.deepEqual(qs.parse("a[]=b&a[]=&a[]=c&a[]",{strictNullHandling:!0,arrayLimit:0}),{a:["b","","c",null]},"with arrayLimit 0 + array brackets: empty string then null works"),a.deepEqual(qs.parse("a[]=&a[]=b&a[]=c"),{a:["","b","c"]},"array brackets: empty strings work"),a.end()}),a.test("compacts sparse arrays",function(a){a.deepEqual(qs.parse("a[10]=1&a[2]=2",{arrayLimit:20}),{a:["2","1"]}),a.deepEqual(qs.parse("a[1][b][2][c]=1",{arrayLimit:20}),{a:[{b:[{c:"1"}]}]}),a.deepEqual(qs.parse("a[1][2][3][c]=1",{arrayLimit:20}),{a:[[[{c:"1"}]]]}),a.deepEqual(qs.parse("a[1][2][3][c][1]=1",{arrayLimit:20}),{a:[[[{c:["1"]}]]]}),a.end()}),a.test("parses semi-parsed strings",function(a){a.deepEqual(qs.parse({"a[b]":"c"}),{a:{b:"c"}}),a.deepEqual(qs.parse({"a[b]":"c","a[d]":"e"}),{a:{b:"c",d:"e"}}),a.end()}),a.test("parses buffers correctly",function(a){var e=new Buffer("test");a.deepEqual(qs.parse({a:e}),{a:e}),a.end()}),a.test("continues parsing when no parent is found",function(a){a.deepEqual(qs.parse("[]=&a=b"),{0:"",a:"b"}),a.deepEqual(qs.parse("[]&a=b",{strictNullHandling:!0}),{0:null,a:"b"}),a.deepEqual(qs.parse("[foo]=bar"),{foo:"bar"}),a.end()}),a.test("does not error when parsing a very long array",function(a){for(var e="a[]=a";Buffer.byteLength(e)<131072;)e=e+"&"+e;a.doesNotThrow(function(){qs.parse(e)}),a.end()}),a.test("should not throw when a native prototype has an enumerable property",{parallel:!1},function(a){Object.prototype.crash="",Array.prototype.crash="",a.doesNotThrow(qs.parse.bind(null,"a=b")),a.deepEqual(qs.parse("a=b"),{a:"b"}),a.doesNotThrow(qs.parse.bind(null,"a[][b]=c")),a.deepEqual(qs.parse("a[][b]=c"),{a:[{b:"c"}]}),delete Object.prototype.crash,delete Array.prototype.crash,a.end()}),a.test("parses a string with an alternative string delimiter",function(a){a.deepEqual(qs.parse("a=b;c=d",{delimiter:";"}),{a:"b",c:"d"}),a.end()}),a.test("parses a string with an alternative RegExp delimiter",function(a){a.deepEqual(qs.parse("a=b; c=d",{delimiter:/[;,] */}),{a:"b",c:"d"}),a.end()}),a.test("does not use non-splittable objects as delimiters",function(a){a.deepEqual(qs.parse("a=b&c=d",{delimiter:!0}),{a:"b",c:"d"}),a.end()}),a.test("allows overriding parameter limit",function(a){a.deepEqual(qs.parse("a=b&c=d",{parameterLimit:1}),{a:"b"}),a.end()}),a.test("allows setting the parameter limit to Infinity",function(a){a.deepEqual(qs.parse("a=b&c=d",{parameterLimit:1/0}),{a:"b",c:"d"}),a.end()}),a.test("allows overriding array limit",function(a){a.deepEqual(qs.parse("a[0]=b",{arrayLimit:-1}),{a:{0:"b"}}),a.deepEqual(qs.parse("a[-1]=b",{arrayLimit:-1}),{a:{"-1":"b"}}),a.deepEqual(qs.parse("a[0]=b&a[1]=c",{arrayLimit:0}),{a:{0:"b",1:"c"}}),a.end()}),a.test("allows disabling array parsing",function(a){a.deepEqual(qs.parse("a[0]=b&a[1]=c",{parseArrays:!1}),{a:{0:"b",1:"c"}}),a.end()}),a.test("allows for query string prefix",function(a){a.deepEqual(qs.parse("?foo=bar",{ignoreQueryPrefix:!0}),{foo:"bar"}),a.deepEqual(qs.parse("foo=bar",{ignoreQueryPrefix:!0}),{foo:"bar"}),a.deepEqual(qs.parse("?foo=bar",{ignoreQueryPrefix:!1}),{"?foo":"bar"}),a.end()}),a.test("parses an object",function(a){var e={"user[name]":{"pop[bob]":3},"user[email]":null},r={user:{name:{"pop[bob]":3},email:null}},s=qs.parse(e);a.deepEqual(s,r),a.end()}),a.test("parses an object in dot notation",function(a){var e={"user.name":{"pop[bob]":3},"user.email.":null},r={user:{name:{"pop[bob]":3},email:null}},s=qs.parse(e,{allowDots:!0});a.deepEqual(s,r),a.end()}),a.test("parses an object and not child values",function(a){var e={"user[name]":{"pop[bob]":{test:3}},"user[email]":null},r={user:{name:{"pop[bob]":{test:3}},email:null}},s=qs.parse(e);a.deepEqual(s,r),a.end()}),a.test("does not blow up when Buffer global is missing",function(a){var e=global.Buffer;delete global.Buffer;var r=qs.parse("a=b&c=d");global.Buffer=e,a.deepEqual(r,{a:"b",c:"d"}),a.end()}),a.test("does not crash when parsing circular references",function(a){var e={};e.b=e;var r;a.doesNotThrow(function(){r=qs.parse({"foo[bar]":"baz","foo[baz]":e})}),a.equal("foo"in r,!0,'parsed has "foo" property'),a.equal("bar"in r.foo,!0),a.equal("baz"in r.foo,!0),a.equal(r.foo.bar,"baz"),a.deepEqual(r.foo.baz,e),a.end()}),a.test("does not crash when parsing deep objects",function(a){for(var e,r="foo",s=0;s<5e3;s++)r+="[p]";r+="=bar",a.doesNotThrow(function(){e=qs.parse(r,{depth:5e3})}),a.equal("foo"in e,!0,'parsed has "foo" property');for(var o=0,t=e.foo;t=t.p;)o+=1;a.equal(o,5e3,"parsed is 5000 properties deep"),a.end()}),a.test("parses null objects correctly",{skip:!Object.create},function(a){var e=Object.create(null);e.b="c",a.deepEqual(qs.parse(e),{b:"c"});var r=qs.parse({a:e});a.equal("a"in r,!0,'result has "a" property'),a.deepEqual(r.a,e),a.end()}),a.test("parses dates correctly",function(a){var e=new Date;a.deepEqual(qs.parse({a:e}),{a:e}),a.end()}),a.test("parses regular expressions correctly",function(a){var e=/^test$/;a.deepEqual(qs.parse({a:e}),{a:e}),a.end()}),a.test("does not allow overwriting prototype properties",function(a){a.deepEqual(qs.parse("a[hasOwnProperty]=b",{allowPrototypes:!1}),{}),a.deepEqual(qs.parse("hasOwnProperty=b",{allowPrototypes:!1}),{}),a.deepEqual(qs.parse("toString",{allowPrototypes:!1}),{},'bare "toString" results in {}'),a.end()}),a.test("can allow overwriting prototype properties",function(a){a.deepEqual(qs.parse("a[hasOwnProperty]=b",{allowPrototypes:!0}),{a:{hasOwnProperty:"b"}}),a.deepEqual(qs.parse("hasOwnProperty=b",{allowPrototypes:!0}),{hasOwnProperty:"b"}),a.deepEqual(qs.parse("toString",{allowPrototypes:!0}),{toString:""},'bare "toString" results in { toString: "" }'),a.end()}),a.test("params starting with a closing bracket",function(a){a.deepEqual(qs.parse("]=toString"),{"]":"toString"}),a.deepEqual(qs.parse("]]=toString"),{"]]":"toString"}),a.deepEqual(qs.parse("]hello]=toString"),{"]hello]":"toString"}),a.end()}),a.test("params starting with a starting bracket",function(a){a.deepEqual(qs.parse("[=toString"),{"[":"toString"}),a.deepEqual(qs.parse("[[=toString"),{"[[":"toString"}),a.deepEqual(qs.parse("[hello[=toString"),{"[hello[":"toString"}),a.end()}),a.test("add keys to objects",function(a){a.deepEqual(qs.parse("a[b]=c&a=d"),{a:{b:"c",d:!0}},"can add keys to objects"),a.deepEqual(qs.parse("a[b]=c&a=toString"),{a:{b:"c"}},"can not overwrite prototype"),a.deepEqual(qs.parse("a[b]=c&a=toString",{allowPrototypes:!0}),{a:{b:"c",toString:!0}},"can overwrite prototype with allowPrototypes true"),a.deepEqual(qs.parse("a[b]=c&a=toString",{plainObjects:!0}),{a:{b:"c",toString:!0}},"can overwrite prototype with plainObjects true"),a.end()}),a.test("can return null objects",{skip:!Object.create},function(a){var e=Object.create(null);e.a=Object.create(null),e.a.b="c",e.a.hasOwnProperty="d",a.deepEqual(qs.parse("a[b]=c&a[hasOwnProperty]=d",{plainObjects:!0}),e),a.deepEqual(qs.parse(null,{plainObjects:!0}),Object.create(null));var r=Object.create(null);r.a=Object.create(null),r.a[0]="b",r.a.c="d",a.deepEqual(qs.parse("a[]=b&a[c]=d",{plainObjects:!0}),r),a.end()}),a.test("can parse with custom encoding",function(a){a.deepEqual(qs.parse("%8c%a7=%91%e5%8d%e3%95%7b",{decoder:function(a){for(var e=/%([0-9A-F]{2})/gi,r=[],s=e.exec(a);s;)r.push(parseInt(s[1],16)),s=e.exec(a);return iconv.decode(new Buffer(r),"shift_jis").toString()}}),{"県":"大阪府"}),a.end()}),a.test("receives the default decoder as a second argument",function(a){a.plan(1),qs.parse("a",{decoder:function(e,r){a.equal(r,utils.decode)}}),a.end()}),a.test("throws error with wrong decoder",function(a){a["throws"](function(){qs.parse({},{decoder:"string"})},new TypeError("Decoder has to be a function.")),a.end()}),a.test("does not mutate the options argument",function(a){var e={};qs.parse("a[b]=true",e),a.deepEqual(e,{}),a.end()}),a.end()});