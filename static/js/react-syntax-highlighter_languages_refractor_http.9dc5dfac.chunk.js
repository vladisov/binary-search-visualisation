"use strict";(self.webpackChunkbinary_search_visualisation=self.webpackChunkbinary_search_visualisation||[]).push([[6508],{6722:function(a){function t(a){!function(a){a.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var t,e=a.languages,n={"application/javascript":e.javascript,"application/json":e.json||e.javascript,"application/xml":e.xml,"text/xml":e.xml,"text/html":e.html,"text/css":e.css},s={"application/json":!0,"application/xml":!0};function i(a){var t=a.replace(/^[a-z]+\//,"");return"(?:"+a+"|"+("\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-])")+")"}for(var r in n)if(n[r]){t=t||{};var p=s[r]?i(r):r;t[r]={pattern:RegExp("(content-type:\\s*"+p+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:{rest:n[r]}}}t&&a.languages.insertBefore("http","header-name",t)}(a)}a.exports=t,t.displayName="http",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_http.9dc5dfac.chunk.js.map