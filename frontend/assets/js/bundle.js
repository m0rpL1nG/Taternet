/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * angular-data-table - A feature-rich but lightweight ES6 AngularJS Data Table crafted for large data sets!
 * @version v0.7.0
 * @link http://swimlane.com/
 * @license 
 */
!function(e,t){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("undefined"!=typeof exports)t(exports);else{var n={exports:{}};t(n.exports),e.DataTable=n.exports}}(this,function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return{restrict:"E",controller:A,controllerAs:"pager",scope:!0,bindToController:{page:"=",size:"=",count:"=",onPage:"&"},template:'<div class="dt-pager">\n        <ul class="pager">\n          <li ng-class="{ disabled: !pager.canPrevious() }">\n            <a href ng-click="pager.selectPage(1)" class="icon-prev"></a>\n          </li>\n          <li ng-class="{ disabled: !pager.canPrevious() }">\n            <a href ng-click="pager.prevPage()" class="icon-left"></a>\n          </li>\n          <li ng-repeat="pg in pager.pages track by $index" ng-class="{ active: pg.active }">\n            <a href ng-click="pager.selectPage(pg.number)">{{pg.text}}</a>\n          </li>\n          <li ng-class="{ disabled: !pager.canNext() }">\n            <a href ng-click="pager.nextPage()" class="icon-right"></a>\n          </li>\n          <li ng-class="{ disabled: !pager.canNext() }">\n            <a href ng-click="pager.selectPage(pager.totalPages)" class="icon-skip"></a>\n          </li>\n        </ul>\n      </div>',replace:!0}}function i(){return{restrict:"E",controller:B,controllerAs:"footer",scope:!0,bindToController:{paging:"=",onPage:"&"},template:'<div class="dt-footer">\n        <div class="page-count">{{footer.paging.count}} total</div>\n        <dt-pager page="footer.page"\n               size="footer.paging.size"\n               count="footer.paging.count"\n               on-page="footer.onPaged(page)"\n               ng-show="footer.paging.count / footer.paging.size > 1">\n         </dt-pager>\n      </div>',replace:!0}}function r(e,t,n,o){return{restrict:"E",controller:G,scope:!0,controllerAs:"cell",bindToController:{options:"=",value:"=",selected:"=",column:"=",row:"=",expanded:"=",hasChildren:"=",onTreeToggle:"&",onCheckboxChange:"&"},template:'<div class="dt-cell"\n            data-title="{{::cell.column.name}}"\n            ng-style="cell.styles()"\n            ng-class="cell.cellClass()">\n        <label ng-if="cell.column.isCheckboxColumn" class="dt-checkbox">\n          <input type="checkbox"\n                 ng-checked="cell.selected"\n                 ng-click="cell.onCheckboxChanged($event)" />\n        </label>\n        <span ng-if="cell.column.isTreeColumn && cell.hasChildren"\n              ng-class="cell.treeClass()"\n              ng-click="cell.onTreeToggled($event)"></span>\n        <span class="dt-cell-content"></span>\n      </div>',replace:!0,compile:function(){return{pre:function(e,n,o,i){function r(){s=i.options.$outer.$new(!1),s.getValue=i.getValue}var s,l=angular.element(n[0].querySelector(".dt-cell-content"));(i.column.template||i.column.cellRenderer)&&r(),e.$watch("cell.row",function(){if(s&&(s.$destroy(),r(),s.$cell=i.value,s.$row=i.row,s.$column=i.column,s.$$watchers=null),i.column.template){l.empty();var e=angular.element("<span>"+i.column.template.trim()+"</span>");l.append(t(e)(s))}else if(i.column.cellRenderer){l.empty();var e=angular.element(i.column.cellRenderer(s,l));l.append(t(e)(s))}else l[0].innerHTML=i.getValue()},!0)}}}}}function s(e){return e=e.replace(/[^a-zA-Z0-9 ]/g," "),e=e.replace(/([a-z](?=[A-Z]))/g,"$1 "),e=e.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g,"").trim().toLowerCase(),e=e.replace(/([ 0-9]+)([a-zA-Z])/g,function(e,t,n){return t.trim()+n.toUpperCase()})}function l(e){var t=s(e);return D[t]||(void 0!==H[M.css+e]?D[t]=M.css+e:void 0!==H[e]&&(D[t]=e)),D[t]}function a(e,t,n){O?!L&&V?(e[j]="translate3d("+t+"px, "+n+"px, 0)",e[N]="hidden"):e[s(j)]="translate("+t+"px, "+n+"px)":(e.top=n+"px",e.left=t+"px")}function c(){return{restrict:"E",controller:F,controllerAs:"group",bindToController:{row:"=",onGroupToggle:"&",expanded:"=",options:"="},scope:!0,replace:!0,template:'\n      <div class="dt-group-row">\n        <span ng-class="group.treeClass()"\n              ng-click="group.onGroupToggled($event)">\n        </span>\n        <span class="dt-group-row-label" ng-bind="group.row.name">\n        </span>\n      </div>',link:function(e,t,n,o){a(t[0].style,0,o.row.$$index*o.options.rowHeight),o.options.internal.styleTranslator.register(e.$index,t)}}}function u(e,t){if(!e||!t)return e;var n=e,o=t.split(".");if(o.length)for(var i=0,r=o.length;i<r;i++)n=n[o[i]];return n}function d(){return{restrict:"E",controller:U,controllerAs:"rowCtrl",scope:!0,bindToController:{row:"=",columns:"=",columnWidths:"=",expanded:"=",selected:"=",hasChildren:"=",options:"=",onCheckboxChange:"&",onTreeToggle:"&"},link:function(e,t,n,o){o.row&&a(t[0].style,0,o.row.$$index*o.options.rowHeight),o.options.internal.styleTranslator.register(e.$index,t)},template:'\n      <div class="dt-row">\n        <div class="dt-row-left dt-row-block"\n             ng-if="rowCtrl.columns[\'left\'].length"\n             ng-style="rowCtrl.stylesByGroup(\'left\')">\n          <dt-cell ng-repeat="column in rowCtrl.columns[\'left\'] track by column.$id"\n                   on-tree-toggle="rowCtrl.onTreeToggled(cell)"\n                   column="column"\n                   options="rowCtrl.options"\n                   has-children="rowCtrl.hasChildren"\n                   on-checkbox-change="rowCtrl.onCheckboxChanged($event)"\n                   selected="rowCtrl.selected"\n                   expanded="rowCtrl.expanded"\n                   row="rowCtrl.row"\n                   value="rowCtrl.getValue(column)">\n          </dt-cell>\n        </div>\n        <div class="dt-row-center dt-row-block"\n             ng-style="rowCtrl.stylesByGroup(\'center\')">\n          <dt-cell ng-repeat="column in rowCtrl.columns[\'center\'] track by column.$id"\n                   on-tree-toggle="rowCtrl.onTreeToggled(cell)"\n                   column="column"\n                   options="rowCtrl.options"\n                   has-children="rowCtrl.hasChildren"\n                   expanded="rowCtrl.expanded"\n                   selected="rowCtrl.selected"\n                   row="rowCtrl.row"\n                   on-checkbox-change="rowCtrl.onCheckboxChanged($event)"\n                   value="rowCtrl.getValue(column)">\n          </dt-cell>\n        </div>\n        <div class="dt-row-right dt-row-block"\n             ng-if="rowCtrl.columns[\'right\'].length"\n             ng-style="rowCtrl.stylesByGroup(\'right\')">\n          <dt-cell ng-repeat="column in rowCtrl.columns[\'right\'] track by column.$id"\n                   on-tree-toggle="rowCtrl.onTreeToggled(cell)"\n                   column="column"\n                   options="rowCtrl.options"\n                   has-children="rowCtrl.hasChildren"\n                   selected="rowCtrl.selected"\n                   on-checkbox-change="rowCtrl.onCheckboxChanged($event)"\n                   row="rowCtrl.row"\n                   expanded="rowCtrl.expanded"\n                   value="rowCtrl.getValue(column)">\n          </dt-cell>\n        </div>\n      </div>',replace:!0}}function h(){return{controller:q,restrict:"A",require:"^dtBody",controllerAs:"selCtrl"}}function p(e,t){return{restrict:"E",require:"^dtBody",transclude:!0,replace:!0,template:'<div ng-style="scrollerStyles()" ng-transclude></div>',link:function(e,t,n,o){function i(){o.options.internal.offsetY=l,o.options.internal.offsetX=a,o.updatePage(),o.options.scrollbarV&&o.getRows(),o.options.$outer.$digest(),s=!1}function r(){s||(Y(i),s=!0)}var s=!1,l=0,a=0,c=t.parent();o.options.internal.styleTranslator=new Z(o.options.rowHeight),o.options.internal.setYOffset=function(e){c[0].scrollTop=e},c.on("scroll",function(e){l=this.scrollTop,a=this.scrollLeft,r()}),e.$on("$destroy",function(){c.off("scroll")}),e.scrollerStyles=function(){if(o.options.scrollbarV)return{height:o.count*o.options.rowHeight+"px"}}}}}function g(e){return{restrict:"E",controller:_,controllerAs:"body",bindToController:{columns:"=",columnWidths:"=",rows:"=",options:"=",selected:"=?",expanded:"=?",onPage:"&",onTreeToggle:"&",onSelect:"&",onRowClick:"&",onRowDblClick:"&"},scope:!0,template:'\n      <div \n        class="progress-linear" \n        role="progressbar" \n        ng-show="body.options.paging.loadingIndicator">\n        <div class="container">\n          <div class="bar"></div>\n        </div>\n      </div>\n      <div class="dt-body" ng-style="body.styles()" dt-seletion>\n        <dt-scroller class="dt-body-scroller">\n          <dt-group-row ng-repeat-start="r in body.tempRows track by $index"\n                        ng-if="r.group"\n                        ng-style="body.groupRowStyles(r)" \n                        options="body.options"\n                        on-group-toggle="body.onGroupToggle(group)"\n                        expanded="body.getRowExpanded(r)"\n                        tabindex="{{$index}}"\n                        row="r">\n          </dt-group-row>\n          <dt-row ng-repeat-end\n                  ng-if="!r.group"\n                  row="body.getRowValue($index)"\n                  tabindex="{{$index}}"\n                  columns="body.columns"\n                  column-widths="body.columnWidths"\n                  ng-keydown="selCtrl.keyDown($event, $index, r)"\n                  ng-click="selCtrl.rowClicked($event, r.$$index, r)"\n                  ng-dblclick="selCtrl.rowDblClicked($event, r.$$index, r)"\n                  on-tree-toggle="body.onTreeToggled(row, cell)"\n                  ng-class="body.rowClasses(r)"\n                  options="body.options"\n                  selected="body.isSelected(r)"\n                  on-checkbox-change="selCtrl.onCheckboxChange($event, $index, row)"\n                  columns="body.columnsByPin"\n                  has-children="body.getRowHasChildren(r)"\n                  expanded="body.getRowExpanded(r)"\n                  ng-style="body.rowStyles(r)">\n          </dt-row>\n        </dt-scroller>\n        <div ng-if="body.rows && !body.rows.length" \n             class="empty-row" \n             ng-bind="::body.options.emptyMessage">\n       </div>\n       <div ng-if="body.rows === undefined" \n             class="loading-row"\n             ng-bind="::body.options.loadingMessage">\n        </div>\n      </div>'}}function f(e,t){return"single"===e?"asc"===t?"desc":"asc":t?"asc"===t?"desc":void 0:"asc"}function m(e){return{restrict:"E",controller:K,controllerAs:"hcell",scope:!0,bindToController:{options:"=",column:"=",onCheckboxChange:"&",onSort:"&",sortType:"=",onResize:"&",selected:"="},replace:!0,template:'<div ng-class="hcell.cellClass()"\n            class="dt-header-cell"\n            draggable="true"\n            data-id="{{column.$id}}"\n            ng-style="hcell.styles()"\n            title="{{::hcell.column.name}}">\n        <div resizable="hcell.column.resizable"\n             on-resize="hcell.onResized(width, hcell.column)"\n             min-width="hcell.column.minWidth"\n             max-width="hcell.column.maxWidth">\n          <label ng-if="hcell.column.isCheckboxColumn && hcell.column.headerCheckbox" class="dt-checkbox">\n            <input type="checkbox"\n                   ng-checked="hcell.selected"\n                   ng-click="hcell.onCheckboxChange()" />\n          </label>\n          <span class="dt-header-cell-label"\n                ng-click="hcell.onSorted()">\n          </span>\n          <span ng-class="hcell.sortClass()"></span>\n        </div>\n      </div>',compile:function(){return{pre:function(t,n,o,i){var r=n[0].querySelector(".dt-header-cell-label"),s=void 0;if((i.column.headerTemplate||i.column.headerRenderer)&&(s=i.options.$outer.$new(!1),s.$header=i.column.name,s.$index=t.$index),i.column.headerTemplate){var l=angular.element("<span>"+i.column.headerTemplate.trim()+"</span>");angular.element(r).append(e(l)(s))}else if(i.column.headerRenderer){var a=angular.element(i.column.headerRenderer(n));angular.element(r).append(e(a)(s)[0])}else{var c=i.column.name;void 0!==c&&null!==c||(c=""),r.textContent=c}}}}}}function v(e){return{restrict:"E",controller:J,controllerAs:"header",scope:!0,bindToController:{options:"=",columns:"=",columnWidths:"=",onSort:"&",onResize:"&",onCheckboxChange:"&"},template:'\n      <div class="dt-header" ng-style="header.styles()">\n\n        <div class="dt-header-inner" ng-style="header.innerStyles()">\n          <div class="dt-row-left"\n               ng-style="header.stylesByGroup(\'left\')"\n               ng-if="header.columns[\'left\'].length"\n               sortable="header.options.reorderable"\n               on-sortable-sort="columnsResorted(event, columnId)">\n            <dt-header-cell\n              ng-repeat="column in header.columns[\'left\'] track by column.$id"\n              on-checkbox-change="header.onCheckboxChanged()"\n              on-sort="header.onSorted(column)"\n              options="header.options"\n              sort-type="header.options.sortType"\n              on-resize="header.onResized(column, width)"\n              selected="header.isSelected()"\n              column="column">\n            </dt-header-cell>\n          </div>\n          <div class="dt-row-center"\n               sortable="header.options.reorderable"\n               ng-style="header.stylesByGroup(\'center\')"\n               on-sortable-sort="columnsResorted(event, columnId)">\n            <dt-header-cell\n              ng-repeat="column in header.columns[\'center\'] track by column.$id"\n              on-checkbox-change="header.onCheckboxChanged()"\n              on-sort="header.onSorted(column)"\n              sort-type="header.options.sortType"\n              selected="header.isSelected()"\n              on-resize="header.onResized(column, width)"\n              options="header.options"\n              column="column">\n            </dt-header-cell>\n          </div>\n          <div class="dt-row-right"\n               ng-if="header.columns[\'right\'].length"\n               sortable="header.options.reorderable"\n               ng-style="header.stylesByGroup(\'right\')"\n               on-sortable-sort="columnsResorted(event, columnId)">\n            <dt-header-cell\n              ng-repeat="column in header.columns[\'right\'] track by column.$id"\n              on-checkbox-change="header.onCheckboxChanged()"\n              on-sort="header.onSorted(column)"\n              sort-type="header.options.sortType"\n              selected="header.isSelected()"\n              on-resize="header.onResized(column, width)"\n              options="header.options"\n              column="column">\n            </dt-header-cell>\n          </div>\n        </div>\n      </div>',replace:!0,link:function(t,n,o,i){t.columnsResorted=function(t,n){var o=r(n),s=angular.element(t.currentTarget),l=-1;angular.forEach(s.children(),function(e,t){n===angular.element(e).attr("data-id")&&(l=t)}),e(function(){angular.forEach(i.columns,function(e){var t=e.indexOf(o);if(t>-1){var n=e[l],r=i.options.columns.indexOf(n),s=i.options.columns.indexOf(o);return i.options.columns.splice(s,1),i.options.columns.splice(r,0,o),!1}})})};var r=function(e){var t=i.columns.left.concat(i.columns.center).concat(i.columns.right);return t.find(function(t){return t.$id===e})}}}}function w(e){return{restrict:"A",scope:{isSortable:"=sortable",onSortableSort:"&"},link:function(e,t,n){function o(e,t){if(e.parentNode==t.parentNode)for(var n=e;n;n=n.previousSibling)if(n===t)return!0;return!1}function i(e){var t=e.target;o(l,t)?t.parentNode.insertBefore(l,t):t.nextSibling&&t.hasAttribute("draggable")&&t.parentNode.insertBefore(l,t.nextSibling.nextSibling)}function r(n){n.preventDefault(),l.classList.remove("dt-clone"),t.off("dragend",r),t.off("dragenter",i),a!==l.nextSibling&&e.onSortableSort({event:n,columnId:angular.element(l).attr("data-id")})}function s(n){return!!e.isSortable&&(n=n.originalEvent||n,l=n.target,a=l.nextSibling,l.classList.add("dt-clone"),n.dataTransfer.effectAllowed="move",n.dataTransfer.setData("Text",l.textContent),t.on("dragenter",i),void t.on("dragend",r))}var l,a;t[0];t.on("dragstart",s),e.$on("$destroy",function(){t.off("dragstart",s)})}}}function y(e,t){return{restrict:"A",scope:{isResizable:"=resizable",minWidth:"=",maxWidth:"=",onResize:"&"},link:function(n,o,i){function r(e){e=e.originalEvent||e;var t=c[0].clientWidth,o=e.movementX||e.mozMovementX||e.screenX-l,i=t+(o||0);l=e.screenX,(!n.minWidth||i>=n.minWidth)&&(!n.maxWidth||i<=n.maxWidth)&&c.css({width:i+"px"})}function s(){n.onResize&&t(function(){var e=c[0].clientWidth;e<n.minWidth&&(e=n.minWidth),n.onResize({width:e})}),e.unbind("mousemove",r),e.unbind("mouseup",s)}n.isResizable&&o.addClass("resizable");var l,a=angular.element('<span class="dt-resize-handle" title="Resize"></span>'),c=o.parent();a.on("mousedown",function(t){return!!o[0].classList.contains("resizable")&&(t.stopPropagation(),t.preventDefault(),e.on("mousemove",r),void e.on("mouseup",s))}),o.append(a)}}}function b(e,t,n){var o,i,r,s=null,l=0;n||(n={});var a=function(){l=n.leading===!1?0:new Date,s=null,r=e.apply(o,i)};return function(){var c=new Date;l||n.leading!==!1||(l=c);var u=t-(c-l);return o=this,i=arguments,u<=0?(clearTimeout(s),s=null,l=c,r=e.apply(o,i)):s||n.trailing===!1||(s=setTimeout(a,u)),r}}function C(){var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",e.appendChild(n);var o=n.offsetWidth;return e.parentNode.removeChild(e),t-o}function x(){var e=((new Date).getTime()/1e3|0).toString(16);return e+"xxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)}).toLowerCase()}function k(e,t,n){angular.forEach(e,function(e){e.forEach(function(e){e.canAutoResize?e.width=0:(t-=e.width,n-=e.flexGrow)})});var o={},i=t,r=function(){var t=i/n;i=0,angular.forEach(e,function(e){e.forEach(function(e,n){if(e.canAutoResize&&!o[n]){var r=e.width+e.flexGrow*t;void 0!==e.minWidth&&r<e.minWidth?(i+=r-e.minWidth,e.width=e.minWidth,o[n]=!0):e.width=r}})})};do r();while(0!==i)}function $(e){for(var t={left:[],center:[],right:[]},n=0,o=e.length;n<o;n++){var i=e[n];i.frozenLeft?t.left.push(i):i.frozenRight?t.right.push(i):t.center.push(i)}return t}function R(e){var t=0,n=!0,o=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var l=r.value;t+=l.flexGrow||0}}catch(a){o=!0,i=a}finally{try{!n&&s["return"]&&s["return"]()}finally{if(o)throw i}}return t}function T(e,t){var n=0;return e.forEach(function(e){var o=t&&e[t];n+=o?e[t]:e.width}),n}function P(e,t){var n=T(e),o=R(e),i=$(e);n!==t&&k(i,t,o)}function S(e,t,n){var o=0,i=n>-1?e.slice(n,e.length).filter(function(e){return e.canAutoResize}):e.filter(function(e){return e.canAutoResize});e.forEach(function(e){o+=e.canAutoResize?e.$$oldWidth||e.width:e.width});var r=t-o,s=r/i.length,l=o>t;i.forEach(function(e){if(l)e.width=e.$$oldWidth||e.width;else{e.$$oldWidth||(e.$$oldWidth=e.width);var t=e.$$oldWidth+s;e.minWith&&t<e.minWidth?e.width=e.minWidth:e.maxWidth&&t>e.maxWidth?e.width=e.maxWidth:e.width=t}})}function z(e,t){return{left:T(e.left),center:T(e.center),right:T(e.right),total:T(t)}}function W(e,t,n){return{restrict:"E",replace:!0,controller:ne,scope:!0,bindToController:{options:"=",rows:"=",selected:"=?",expanded:"=?",onSelect:"&",onSort:"&",onTreeToggle:"&",onPage:"&",onRowClick:"&",onRowDblClick:"&",onColumnResize:"&"},controllerAs:"dt",template:function(e){var t=e[0].getElementsByTagName("column"),n=x();return Q.saveColumns(n,t),'<div class="dt" ng-class="dt.tableCss()" data-column-id="'+n+'">\n          <dt-header options="dt.options"\n                     on-checkbox-change="dt.onHeaderCheckboxChange()"\n                     columns="dt.columnsByPin"\n                     column-widths="dt.columnWidths"\n                     ng-if="dt.options.headerHeight"\n                     on-resize="dt.onResized(column, width)"\n                     selected="dt.isAllRowsSelected()"\n                     on-sort="dt.onSorted()">\n          </dt-header>\n          <dt-body rows="dt.rows"\n                   selected="dt.selected"\n                   expanded="dt.expanded"\n                   columns="dt.columnsByPin"\n                   on-select="dt.onSelected(rows)"\n                   on-row-click="dt.onRowClicked(row)"\n                   on-row-dbl-click="dt.onRowDblClicked(row)"\n                   column-widths="dt.columnWidths"\n                   options="dt.options"\n                   on-page="dt.onBodyPage(offset, size)"\n                   on-tree-toggle="dt.onTreeToggled(row, cell)">\n           </dt-body>\n          <dt-footer ng-if="dt.options.footerHeight"\n                     ng-style="{ height: dt.options.footerHeight + \'px\' }"\n                     on-page="dt.onFooterPage(offset, size)"\n                     paging="dt.options.paging">\n           </dt-footer>\n        </div>'},compile:function(o,i){return{pre:function(o,i,r,s){function l(){var e=i[0].getBoundingClientRect();if(s.options.internal.innerWidth=Math.floor(e.width),s.options.scrollbarV){var t=e.height;s.options.headerHeight&&(t-=s.options.headerHeight),s.options.footerHeight&&(t-=s.options.footerHeight),s.options.internal.bodyHeight=t,s.calculatePageSize()}s.adjustColumns()}Q.buildColumns(o,n);var a=i.attr("data-column-id"),c=Q.columns[a];c&&(s.options.columns=c),s.transposeColumnDefaults(),s.options.internal.scrollBarWidth=C(),e.addEventListener("resize",b(function(){t(l)}));var u=function d(){var e=i[0].getBoundingClientRect(),n=e.width&&e.height;n?l():t(d,100)};u(),i.addClass("dt-loaded"),o.$on("$destroy",function(){angular.element(e).off("resize")})}}}}}W.$inject=["$window","$timeout","$parse"],y.$inject=["$document","$timeout"],w.$inject=["$timeout"],v.$inject=["$timeout"],m.$inject=["$compile"],g.$inject=["$timeout"],p.$inject=["$timeout","$rootScope"],r.$inject=["$rootScope","$compile","$log","$timeout"],Object.defineProperty(e,"__esModule",{value:!0});var E=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();!function(){function e(e){Array.prototype[e]||(Array.prototype[e]=function(t){var n,o,i,r=arguments[1];if("function"!=typeof t)throw new TypeError;for(i=r?function(){return t.apply(r,arguments)}:t,n=0,o=this.length;n<o;n++)if(i(this[n],n,this)===!0)return"find"===e?this[n]:n;if("find"!==e)return-1})}for(var t in{find:1,findIndex:1})e(t)}();var A=function(){function e(t){n(this,e),Object.assign(this,{$scope:t}),1===angular.version.major&&angular.version.minor<5&&this.init()}return e.$inject=["$scope"],E(e,[{key:"$onInit",value:function(){this.init()}},{key:"init",value:function(){var e=this;this.$scope.$watch("pager.count",function(t){e.calcTotalPages(e.size,e.count),e.getPages(e.page||1)}),this.$scope.$watch("pager.size",function(t){e.calcTotalPages(e.size,e.count),e.getPages(e.page||1)}),this.$scope.$watch("pager.page",function(t){0!==t&&t<=e.totalPages&&e.getPages(t)}),this.getPages(this.page||1)}},{key:"calcTotalPages",value:function(e,t){var t=e<1?1:Math.ceil(t/e);this.totalPages=Math.max(t||0,1)}},{key:"selectPage",value:function(e){e>0&&e<=this.totalPages&&(this.page=e,this.onPage({page:e}))}},{key:"prevPage",value:function(){this.page>1&&this.selectPage(--this.page)}},{key:"nextPage",value:function(){this.selectPage(++this.page)}},{key:"canPrevious",value:function(){return this.page>1}},{key:"canNext",value:function(){return this.page<this.totalPages}},{key:"getPages",value:function(e){var t=[],n=1,o=this.totalPages,i=5,r=i<this.totalPages;r&&(n=(Math.ceil(e/i)-1)*i+1,o=Math.min(n+i-1,this.totalPages));for(var s=n;s<=o;s++)t.push({number:s,text:s,active:s===e});this.pages=t}}]),e}(),B=function(){function e(t){n(this,e),Object.assign(this,{$scope:t}),1===angular.version.major&&angular.version.minor<5&&this.init()}return e.$inject=["$scope"],E(e,[{key:"$onInit",value:function(){this.init()}},{key:"init",value:function(){var e=this;this.page=this.paging.offset+1,this.$scope.$watch("footer.paging.offset",function(t){e.offsetChanged(t)})}},{key:"offsetChanged",value:function(e){this.page=e+1}},{key:"onPaged",value:function(e){this.paging.offset=e-1,this.onPage({offset:this.paging.offset,size:this.paging.size})}}]),e}(),G=function(){function e(){n(this,e)}return E(e,[{key:"styles",value:function(){return{width:this.column.width+"px","min-width":this.column.width+"px"}}},{key:"cellClass",value:function(){var e={"dt-tree-col":this.column.isTreeColumn};return this.column.className&&(e[this.column.className]=!0),e}},{key:"treeClass",value:function(){return{"dt-tree-toggle":!0,"icon-right":!this.expanded,"icon-down":this.expanded}}},{key:"onTreeToggled",value:function(e){e.stopPropagation(),this.expanded=!this.expanded,this.onTreeToggle({cell:{value:this.value,column:this.column,expanded:this.expanded}})}},{key:"onCheckboxChanged",value:function(e){e.stopPropagation(),this.onCheckboxChange({$event:e})}},{key:"getValue",value:function(){var e=this.column.cellDataGetter?this.column.cellDataGetter(this.value):this.value;return void 0!==e&&null!==e||(e=""),e}}]),e}(),D={},H=document.createElement("div").style,M=function(){var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1],n="WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1];return{dom:n,lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.substr(1)}}(),j=l("transform"),N=l("backfaceVisibility"),O=!!l("transform"),V=!!l("perspective"),I=window.navigator.userAgent,L=/Safari\//.test(I)&&!/Chrome\//.test(I),F=function(){function e(){n(this,e)}return E(e,[{key:"onGroupToggled",value:function(e){e.stopPropagation(),this.onGroupToggle({group:this.row})}},{key:"treeClass",value:function(){return{"dt-tree-toggle":!0,"icon-right":!this.expanded,"icon-down":this.expanded}}}]),e}(),U=function(){function e(){n(this,e)}return E(e,[{key:"getValue",value:function(e){return e.prop?u(this.row,e.prop):""}},{key:"onTreeToggled",value:function(e){this.onTreeToggle({cell:e,row:this.row})}},{key:"stylesByGroup",value:function(e){var t={width:this.columnWidths[e]+"px"};if("left"===e)a(t,this.options.internal.offsetX,0);else if("right"===e){var n=(this.columnWidths.total-this.options.internal.innerWidth-this.options.internal.offsetX+this.options.internal.scrollBarWidth)*-1;a(t,n,0)}return t}},{key:"onCheckboxChanged",value:function(e){this.onCheckboxChange({$event:e,row:this.row})}}]),e}(),X={BACKSPACE:8,TAB:9,RETURN:13,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,COMMA:188,PERIOD:190,A:65,Z:90,ZERO:48,NUMPAD_0:96,NUMPAD_9:105},q=function(){function e(t){n(this,e),this.body=t.body,this.options=t.body.options,this.selected=t.body.selected}return e.$inject=["$scope"],E(e,[{key:"keyDown",value:function(e,t,n){if(X[e.keyCode]&&e.preventDefault(),e.keyCode===X.DOWN){var o=e.target.nextElementSibling;o&&o.focus()}else if(e.keyCode===X.UP){var i=e.target.previousElementSibling;i&&i.focus()}else e.keyCode===X.RETURN&&this.selectRow(t,n)}},{key:"rowClicked",value:function(e,t,n){this.options.checkboxSelection||this.selectRow(e,t,n),this.body.onRowClick({row:n})}},{key:"rowDblClicked",value:function(e,t,n){this.options.checkboxSelection||(e.preventDefault(),this.selectRow(e,t,n)),this.body.onRowDblClick({row:n})}},{key:"onCheckboxChange",value:function(e,t,n){this.selectRow(e,t,n)}},{key:"selectRow",value:function(e,t,n){if(this.options.selectable)if(this.options.multiSelect){var o=(e.ctrlKey||e.metaKey,e.shiftKey);if(o)this.selectRowsBetween(t,n);else{var i=this.selected.indexOf(n);i>-1?this.selected.splice(i,1):(this.options.multiSelectOnShift&&1===this.selected.length&&this.selected.splice(0,1),this.selected.push(n),this.body.onSelect({rows:[n]}))}this.prevIndex=t}else this.selected=n,this.body.onSelect({rows:[n]})}},{key:"selectRowsBetween",value:function(e){for(var t=e<this.prevIndex,n=[],o=0,i=this.body.rows.length;o<i;o++){var r=this.body.rows[o],s=o>=this.prevIndex&&o<=e,l=o<=this.prevIndex&&o>=e,a={};if(a=t?{start:e,end:this.prevIndex-e}:{start:this.prevIndex,end:e+1},t&&l||!t&&s){var c=this.selected.indexOf(r);if(t&&c>-1){this.selected.splice(c,1);continue}o>=a.start&&o<a.end&&c===-1&&(this.selected.push(r),n.push(r))}}this.body.onSelect({rows:n})}}]),e}(),Y=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),Z=function(){function e(t){n(this,e),this.height=t,this.map=new Map}return E(e,[{key:"update",value:function(e){for(var t=0;t<=this.map.size;){var n=this.map.get(t),o=e[t];n&&o&&a(n[0].style,0,o.$$index*this.height),t++}}},{key:"register",value:function(e,t){this.map.set(e,t)}}]),e}(),_=function(){function e(t,o){n(this,e),Object.assign(this,{$scope:t,$timeout:o}),1===angular.version.major&&angular.version.minor<5&&this.init()}return e.$inject=["$scope","$timeout"],E(e,[{key:"$onInit",value:function(){this.init()}},{key:"init",value:function(){var e=this;if(this.tempRows=[],this.treeColumn=this.options.columns.find(function(e){return e.isTreeColumn}),this.groupColumn=this.options.columns.find(function(e){return e.group}),this.$scope.$watchCollection("body.rows",this.rowsUpdated.bind(this)),this.options.scrollbarV||!this.options.scrollbarV&&this.options.paging.externalPaging){var t=!1;this.$scope.$watch("body.options.paging.size",function(n,o){(!t||n>o)&&(e.getRows(),t=!0)}),this.$scope.$watch("body.options.paging.count",function(t){e.count=t,e.updatePage()}),this.$scope.$watch("body.options.paging.offset",function(t){e.options.paging.size&&e.onPage({offset:t,size:e.options.paging.size})})}}},{key:"rowsUpdated",value:function(e,n){if(e)if(this.options.paging.externalPaging||(this.options.paging.count=e.length),this.count=this.options.paging.count,(this.treeColumn||this.groupColumn)&&this.buildRowsByGroup(),this.options.scrollbarV){var o=e&&n&&(e.length===n.length||e.length<n.length);this.getRows(o)}else{var i=this.rows;if(this.treeColumn?i=this.buildTree():this.groupColumn&&(i=this.buildGroups()),this.options.paging.externalPaging){var r=this.getFirstLastIndexes(),s=r.first;for(this.tempRows.splice(0,this.tempRows.length);s<r.last;)this.tempRows.push(i[s++])}else{var l;this.tempRows.splice(0,this.tempRows.length),(l=this.tempRows).push.apply(l,t(i))}}}},{key:"getFirstLastIndexes",value:function(){var e,t;return this.options.scrollbarV?(e=Math.max(Math.floor((this.options.internal.offsetY||0)/this.options.rowHeight,0),0),t=Math.min(e+this.options.paging.size,this.count)):this.options.paging.externalPaging?(e=Math.max(this.options.paging.offset*this.options.paging.size,0),t=Math.min(e+this.options.paging.size,this.count)):t=this.count,{first:e,last:t}}},{key:"updatePage",value:function(){var e=this.options.paging.offset,t=this.getFirstLastIndexes();void 0===this.options.internal.oldScrollPosition&&(this.options.internal.oldScrollPosition=0);var n=this.options.internal.oldScrollPosition,o=t.first/this.options.paging.size;this.options.internal.oldScrollPosition=o,o=o<n?Math.floor(o):o>n?Math.ceil(o):e,isNaN(o)||(this.options.paging.offset=o)}},{key:"calculateDepth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.treeColumn?this.treeColumn.relationProp:this.groupColumn.prop,o=this.treeColumn.prop;if(!e[n])return t;if(e.$$depth)return e.$$depth+t;var i=this.index[e[n]];if(i)return t+=1,this.calculateDepth(i,t);for(var r=0,s=this.rows.length;r<s;r++){
var l=this.rows[r];if(l[o]==e[n])return t+=1,this.calculateDepth(l,t)}return t}},{key:"buildRowsByGroup",value:function(){this.index={},this.rowsByGroup={};for(var e=this.treeColumn?this.treeColumn.relationProp:this.groupColumn.prop,t=0,n=this.rows.length;t<n;t++){var o=this.rows[t],i=o[e];if(i&&(this.rowsByGroup[i]?this.rowsByGroup[i].push(o):this.rowsByGroup[i]=[o]),this.treeColumn){var r=this.treeColumn.prop;if(this.index[o[r]]=o,void 0===o[e])o.$$depth=0;else{var s=this.index[o[e]];if(void 0===s)for(var l=0;l<n;l++)if(this.rows[l][r]==i){s=this.rows[l];break}void 0===s.$$depth&&(s.$$depth=this.calculateDepth(s)),o.$$depth=s.$$depth+1,s.$$children?s.$$children.push(o[r]):s.$$children=[o[r]]}}}}},{key:"buildGroups",value:function(){var e=this,n=[];return angular.forEach(this.rowsByGroup,function(o,i){n.push({name:i,group:!0}),e.expanded[i]&&n.push.apply(n,t(o))}),n}},{key:"isSelected",value:function(e){var t=!1;return this.options.selectable&&(t=this.options.multiSelect?this.selected.indexOf(e)>-1:this.selected===e),t}},{key:"buildTree",value:function(){function e(t,o,i){t.forEach(function(t){var r=t[n.treeColumn.relationProp],s=t[n.treeColumn.prop],l=n.rowsByGroup[s],a=n.expanded[s];(i>0||!r)&&(o.push(t),l&&l.length>0&&a&&e(l,o,i+1))})}var t=[],n=this;return e(this.rows,t,0),t}},{key:"getRows",value:function(e){if((this.treeColumn||this.groupColumn)&&!this.rowsByGroup)return!1;var t;this.treeColumn?(t=this.treeTemp||[],!e&&this.treeTemp||(this.treeTemp=t=this.buildTree(),this.count=t.length,this.tempRows.splice(0,this.tempRows.length))):this.groupColumn?(t=this.groupsTemp||[],!e&&this.groupsTemp||(this.groupsTemp=t=this.buildGroups(),this.count=t.length)):(t=this.rows,e===!0&&this.tempRows.splice(0,this.tempRows.length));var n=0,o=this.getFirstLastIndexes(),i=o.first;for(this.tempRows.splice(0,o.last-o.first);i<o.last&&i<this.count;){var r=t[i];r&&(r.$$index=i,this.tempRows[n]=r),n++,i++}return this.options.internal.styleTranslator.update(this.tempRows),this.tempRows}},{key:"styles",value:function o(){var o={width:this.options.internal.innerWidth+"px"};return this.options.scrollbarV?this.options.scrollbarH===!1&&(o.overflowX="hidden"):o.overflowY="hidden",this.options.scrollbarV&&(o.height=this.options.internal.bodyHeight+"px"),o}},{key:"rowStyles",value:function(e){var t={};return"auto"===this.options.rowHeight&&(t.height=this.options.rowHeight+"px"),t}},{key:"groupRowStyles",value:function(e){var t=this.rowStyles(e);return t.width=this.columnWidths.total+"px",t}},{key:"rowClasses",value:function(e){var t={selected:this.isSelected(e),"dt-row-even":e&&e.$$index%2===0,"dt-row-odd":e&&e.$$index%2!==0};return this.treeColumn&&(t["dt-leaf"]=this.rowsByGroup[e[this.treeColumn.relationProp]],t["dt-has-leafs"]=this.rowsByGroup[e[this.treeColumn.prop]],t["dt-depth-"+e.$$depth]=!0),t}},{key:"getRowValue",value:function(e){return this.tempRows[e]}},{key:"getRowExpanded",value:function(e){return this.treeColumn?this.expanded[e[this.treeColumn.prop]]:this.groupColumn?this.expanded[e.name]:void 0}},{key:"getRowHasChildren",value:function(e){if(this.treeColumn){var t=this.rowsByGroup[e[this.treeColumn.prop]];return void 0!==t||t&&!t.length}}},{key:"onTreeToggled",value:function(e,n){var o=e[this.treeColumn.prop];if(this.expanded[o]=!this.expanded[o],this.options.scrollbarV)this.getRows(!0);else{var i,r=this.buildTree();this.tempRows.splice(0,this.tempRows.length),(i=this.tempRows).push.apply(i,t(r))}this.onTreeToggle({row:e,cell:n})}},{key:"onGroupToggle",value:function(e){if(this.expanded[e.name]=!this.expanded[e.name],this.options.scrollbarV)this.getRows(!0);else{var n,o=this.buildGroups();this.tempRows.splice(0,this.tempRows.length),(n=this.tempRows).push.apply(n,t(o))}}}]),e}(),K=function(){function e(){n(this,e)}return E(e,[{key:"styles",value:function(){return{width:this.column.width+"px",minWidth:this.column.minWidth+"px",maxWidth:this.column.maxWidth+"px",height:this.column.height+"px"}}},{key:"cellClass",value:function(){var e={sortable:this.column.sortable,resizable:this.column.resizable};return this.column.headerClassName&&(e[this.column.headerClassName]=!0),e}},{key:"onSorted",value:function(){this.column.sortable&&(this.column.sort=f(this.sortType,this.column.sort),void 0===this.column.sort&&(this.column.sortPriority=void 0),this.onSort({column:this.column}))}},{key:"sortClass",value:function(){return{"sort-btn":!0,"sort-asc icon-down":"asc"===this.column.sort,"sort-desc icon-up":"desc"===this.column.sort}}},{key:"onResized",value:function(e,t){this.onResize({column:t,width:e})}},{key:"onCheckboxChange",value:function(){this.onCheckboxChanged()}}]),e}(),J=function(){function e(){n(this,e)}return E(e,[{key:"styles",value:function(){return{width:this.options.internal.innerWidth+"px",height:this.options.headerHeight+"px"}}},{key:"innerStyles",value:function(){return{width:this.columnWidths.total+"px"}}},{key:"onSorted",value:function(e){if("single"===this.options.sortType){var t=function(t){t!==e&&(t.sort=void 0)};this.columns.left.forEach(t),this.columns.center.forEach(t),this.columns.right.forEach(t)}this.onSort({column:e})}},{key:"stylesByGroup",value:function(e){var t={width:this.columnWidths[e]+"px"};if("center"===e)a(t,this.options.internal.offsetX*-1,0);else if("right"===e){var n=(this.columnWidths.total-this.options.internal.innerWidth)*-1;a(t,n,0)}return t}},{key:"onCheckboxChanged",value:function(){this.onCheckboxChange()}},{key:"onResized",value:function(e,t){this.onResize({column:e,width:t})}}]),e}(),Q={columns:{},dTables:{},saveColumns:function(e,t){if(t&&t.length){var n=[].slice.call(t);this.dTables[e]=n}},buildColumns:function(e,t){var n=this;angular.forEach(this.dTables,function(o,i){n.columns[i]=[],angular.forEach(o,function(o){var r={},l=!0;angular.forEach(o.attributes,function(n){var o=s(n.name);switch(o){case"class":r.className=n.value;break;case"name":case"prop":r[o]=n.value;break;case"headerRenderer":case"cellRenderer":case"cellDataGetter":r[o]=t(n.value);break;case"visible":l=t(n.value)(e);break;default:r[o]=t(n.value)(e)}});var a=o.getElementsByTagName("column-header");a.length&&(r.headerTemplate=a[0].innerHTML,o.removeChild(a[0])),""!==o.innerHTML&&(r.template=o.innerHTML),l&&n.columns[i].push(r)})}),this.dTables={}}},ee={frozenLeft:!1,frozenRight:!1,className:void 0,headerClassName:void 0,flexGrow:0,minWidth:100,maxWidth:void 0,width:150,resizable:!0,comparator:void 0,sortable:!0,sort:void 0,sortBy:void 0,headerRenderer:void 0,cellRenderer:void 0,cellDataGetter:void 0,isTreeColumn:!1,isCheckboxColumn:!1,headerCheckbox:!1,canAutoResize:!0},te={scrollbarV:!0,rowHeight:30,columnMode:"standard",loadingMessage:"Loading...",emptyMessage:"No data to display",headerHeight:30,footerHeight:0,paging:{externalPaging:!1,size:void 0,count:0,offset:0,loadingIndicator:!1},selectable:!1,multiSelect:!1,checkboxSelection:!1,reorderable:!0,internal:{offsetX:0,offsetY:0,innerWidth:0,bodyHeight:300}},ne=function(){function e(t,o){n(this,e),Object.assign(this,{$scope:t,$filter:o}),1===angular.version.major&&angular.version.minor<5&&this.init()}return e.$inject=["$scope","$filter"],E(e,[{key:"$onInit",value:function(){this.init()}},{key:"init",value:function(){var e=this;this.defaults(),this.options.$outer=this.$scope.$parent,this.$scope.$watch("dt.options.columns",function(t,n){e.transposeColumnDefaults(),t.length!==n.length&&e.adjustColumns(),e.calculateColumns()},!0);var t=this.$scope.$watch("dt.rows",function(n){n&&(t(),e.onSorted())})}},{key:"defaults",value:function(){var e=this;this.expanded=this.expanded||{},this.options=angular.extend(angular.copy(te),this.options),angular.forEach(te.paging,function(t,n){e.options.paging[n]||(e.options.paging[n]=t)}),this.options.selectable&&this.options.multiSelect&&(this.selected=this.selected||[])}},{key:"transposeColumnDefaults",value:function(){for(var e=0,t=this.options.columns.length;e<t;e++){var n=this.options.columns[e];n.$id=x(),angular.forEach(ee,function(e,t){n.hasOwnProperty(t)||(n[t]=e)}),n.name&&!n.prop&&(n.prop=s(n.name)),this.options.columns[e]=n}}},{key:"calculateColumns",value:function(){var e=this.options.columns;this.columnsByPin=$(e),this.columnWidths=z(this.columnsByPin,e)}},{key:"tableCss",value:function(){return{fixed:this.options.scrollbarV,selectable:this.options.selectable,checkboxable:this.options.checkboxSelection}}},{key:"adjustColumns",value:function(e){var t=this.options.internal.innerWidth-this.options.internal.scrollBarWidth;"force"===this.options.columnMode?S(this.options.columns,t,e):"flex"===this.options.columnMode&&P(this.options.columns,t)}},{key:"calculatePageSize",value:function(){this.options.paging.size=Math.ceil(this.options.internal.bodyHeight/this.options.rowHeight)+1}},{key:"onSorted",value:function(){if(this.rows){var e=this.options.columns.filter(function(e){return e.sort}).sort(function(e,t){if(e.sortPriority&&t.sortPriority){if(e.sortPriority>t.sortPriority)return 1;if(e.sortPriority<t.sortPriority)return-1}else{if(e.sortPriority)return-1;if(t.sortPriority)return 1}return 0}).map(function(e,t){return e.sortPriority=t+1,e});if(e.length){this.onSort({sorts:e}),this.options.onSort&&this.options.onSort(e);for(var n=[],o=0,i=e.length;o<i;o++){var r=e[o];if(r.comparator!==!1){var s="asc"===r.sort?"":"-";void 0!==r.sortBy?n.push(s+r.sortBy):n.push(s+r.prop)}}if(n.length){var l,a=this.$filter("orderBy")(this.rows,n);this.rows.splice(0,this.rows.length),(l=this.rows).push.apply(l,t(a))}}this.options.internal.setYOffset(0)}}},{key:"onTreeToggled",value:function(e,t){this.onTreeToggle({row:e,cell:t})}},{key:"onBodyPage",value:function(e,t){this.onPage({offset:e,size:t})}},{key:"onFooterPage",value:function(e,t){var n=this.options.rowHeight*t,o=n*e;this.options.internal.setYOffset(o)}},{key:"onHeaderCheckboxChange",value:function(){if(this.rows){var e=this.selected.length===this.rows.length;if(this.selected.splice(0,this.selected.length),!e){var n;(n=this.selected).push.apply(n,t(this.rows))}}}},{key:"isAllRowsSelected",value:function(){return!this.rows&&this.selected.length===this.rows.length}},{key:"onResized",value:function(e,t){var n=this.options.columns.indexOf(e);if(n>-1){var e=this.options.columns[n];e.width=t,e.canAutoResize=!1,this.adjustColumns(n),this.calculateColumns()}this.onColumnResize&&this.onColumnResize({column:e,width:t})}},{key:"onSelected",value:function(e){this.onSelect({rows:e})}},{key:"onRowClicked",value:function(e){this.onRowClick({row:e})}},{key:"onRowDblClicked",value:function(e){this.onRowDblClick({row:e})}}]),e}(),oe=angular.module("data-table",[]).directive("dtable",W).directive("resizable",y).directive("sortable",w).directive("dtHeader",v).directive("dtHeaderCell",m).directive("dtBody",g).directive("dtScroller",p).directive("dtSeletion",h).directive("dtRow",d).directive("dtGroupRow",c).directive("dtCell",r).directive("dtFooter",i).directive("dtPager",o);e["default"]=oe});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U,C){'use strict';function Ea(a,b,c){if(!a)throw Oa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Pa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=X(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];r(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Qa(a){if(a instanceof w)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return w(ua(a))}if(1===a.nodeType)return w(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Ra(a,b,c){r(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){r(b,function(b){a.removeClass(b,c)})}function Z(a){return function(b,c){c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
N;a.domOperation=function(){a.$$domOperationFired=!0;b();b=N};a.$$prepared=!0}return a}function ha(a,b){Ga(a,b);Ha(a,b)}function Ga(a,b){b.from&&(a.css(b.from),b.from=null)}function Ha(a,b){b.to&&(a.css(b.to),b.to=null)}function V(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=ea(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==N?d.domOperation:null;va(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};r(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);r(b,function(a,b){f[b]=1});c=d(c);r(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};r(f,function(b,c){var d,f;1===b?(d="addClass",
f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function z(a){return a instanceof w?a[0]:a}function Ua(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=ea(d,Y(c.addClass,"-add")));c.removeClass&&(d=ea(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=$+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
b){a.style[b[0]]=b[1]}function ea(a,b){return a?b?a+" "+b:a:b}function Ia(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};r(c,function(a,b){var c=f[a];if(c){var y=c.charAt(0);if("-"===y||"+"===y||0<=y)c=Va(c);0===c&&(c=null);d[b]=c}});return d}function Va(a){var b=0;a=a.split(/\s*,\s*/);r(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ja(a,b){var c=R,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function Ka(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function La(a,b,c){r(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var R,za,$,Aa;void 0===U.ontransitionend&&void 0!==U.onwebkittransitionend?(R="WebkitTransition",za="webkitTransitionEnd transitionend"):(R="transition",za=
"transitionend");void 0===U.onanimationend&&void 0!==U.onwebkitanimationend?($="WebkitAnimation",Aa="webkitAnimationEnd animationend"):($="animation",Aa="animationend");var qa=$+"Delay",Ba=$+"Duration",la=R+"Delay",Ma=R+"Duration",Oa=C.$$minErr("ng"),Wa={transitionDuration:Ma,transitionDelay:la,transitionProperty:R+"Property",animationDuration:Ba,animationDelay:qa,animationIterationCount:$+"IterationCount"},Xa={transitionDuration:Ma,transitionDelay:la,animationDuration:Ba,animationDelay:qa},Ca,va,
r,X,ya,aa,Da,ra,G,K,w,N;C.module("ngAnimate",[],function(){N=C.noop;Ca=C.copy;va=C.extend;w=C.element;r=C.forEach;X=C.isArray;G=C.isString;ra=C.isObject;K=C.isUndefined;ya=C.isDefined;Da=C.isFunction;aa=C.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,m){var A,y;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){A&&a.leave(A);y&&(y.$destroy(),y=null);if(f||0===f)y=b.$new(),m(y,
function(b){A=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;G(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();f||a(function(){f||c()})}}var d,
f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);r(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return e[a].some(function(a){return a(b,c,d)})}function f(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?
c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b,c){return!b.structural&&f(b)});e.skip.push(function(a,b,c){return!b.structural&&!f(b)});e.skip.push(function(a,b,c){return"leave"===c.event&&b.structural});e.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});e.cancel.push(function(a,b,c){return c.structural&&b.structural});e.cancel.push(function(a,b,c){return 2===c.state&&b.structural});e.cancel.push(function(a,b,d){if(d.structural)return!1;a=
b.addClass;b=b.removeClass;var f=d.addClass;d=d.removeClass;return K(a)&&K(b)||K(f)&&K(d)?!1:c(a,d)||c(b,f)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,y,e,ba,Ya,O,v,H,S,P){function I(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function B(a,b,c){var g=z(b),d=z(a),E=[];(a=t[c])&&r(a,function(a){J.call(a.node,g)?E.push(a.callback):
"leave"===c&&J.call(a.node,d)&&E.push(a.callback)});return E}function n(a,b,c){var g=ua(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function p(a,h,u){function p(c,g,d,h){y(function(){var c=B(S,a,g);c.length?b(function(){r(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(g,d,h)}function n(b){var c=a,g=k;g.preparationClasses&&(c.removeClass(g.preparationClasses),g.preparationClasses=null);g.activeClasses&&
(c.removeClass(g.activeClasses),g.activeClasses=null);Na(a,k);ha(a,k);k.domOperation();e.complete(!b)}var k=Ca(u),t,S;if(a=Qa(a))t=z(a),S=a.parent();var k=oa(k),e=new O,y=I();X(k.addClass)&&(k.addClass=k.addClass.join(" "));k.addClass&&!G(k.addClass)&&(k.addClass=null);X(k.removeClass)&&(k.removeClass=k.removeClass.join(" "));k.removeClass&&!G(k.removeClass)&&(k.removeClass=null);k.from&&!ra(k.from)&&(k.from=null);k.to&&!ra(k.to)&&(k.to=null);if(!t)return n(),e;u=[t.getAttribute("class"),k.addClass,
k.removeClass].join(" ");if(!F(u))return n(),e;var s=0<=["enter","move","leave"].indexOf(h),x=P(),v=!ma||x||g.get(t);u=!v&&E.get(t)||{};var J=!!u.state;v||J&&1===u.state||(v=!L(a,S,h));if(v)return x&&p(e,h,"start"),n(),x&&p(e,h,"close"),e;s&&ta(a);x={structural:s,element:a,event:h,addClass:k.addClass,removeClass:k.removeClass,close:n,options:k,runner:e};if(J){if(d("skip",a,x,u)){if(2===u.state)return n(),e;V(a,u,x);return u.runner}if(d("cancel",a,x,u))if(2===u.state)u.runner.end();else if(u.structural)u.close();
else return V(a,u,x),u.runner;else if(d("join",a,x,u))if(2===u.state)V(a,x,{});else return Ua(a,s?h:null,k),h=x.event=u.event,k=V(a,u,x),u.runner}else V(a,x,{});(J=x.structural)||(J="animate"===x.event&&0<Object.keys(x.options.to||{}).length||f(x));if(!J)return n(),l(a),e;var H=(u.counter||0)+1;x.counter=H;Q(a,1,x);c.$$postDigest(function(){var b=E.get(t),c=!b,b=b||{},g=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==H||!g){c&&(Na(a,k),ha(a,k));if(c||s&&b.event!==
h)k.domOperation(),e.end();g||l(a)}else h=!b.structural&&f(b,!0)?"setClass":b.event,Q(a,2),b=Ya(a,h,b.options),e.setHost(b),p(e,h,"start",{}),b.done(function(b){n(!b);(b=E.get(t))&&b.counter===H&&l(z(a));p(e,h,"close",{})})});return e}function ta(a){a=z(a).querySelectorAll("[data-ng-animate]");r(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=E.get(a);if(c)switch(b){case 2:c.runner.end();case 1:E.remove(a)}})}function l(a){a=z(a);a.removeAttribute("data-ng-animate");E.remove(a)}
function k(a,b){return z(a)===z(b)}function L(a,b,c){c=w(e[0].body);var d=k(a,c)||"HTML"===a[0].nodeName,h=k(a,y),f=!1,B,p=g.get(z(a));(a=w.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=z(b);b;){h||(h=k(b,y));if(1!==b.nodeType)break;a=E.get(b)||{};if(!f){var n=g.get(b);if(!0===n&&!1!==p){p=!0;break}else!1===n&&(p=!1);f=a.structural}if(K(B)||!0===B)a=w.data(b,"$$ngAnimateChildren"),ya(a)&&(B=a);if(f&&!1===B)break;d||(d=k(b,c));if(d&&h)break;if(!h&&(a=w.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!f||
B)&&!0!==p&&h&&d}function Q(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=E.get(a))?va(b,c):c;E.put(a,c)}var E=new ba,g=new ba,ma=null,h=c.$watch(function(){return 0===v.totalPendingRequests},function(a){a&&(h(),c.$$postDigest(function(){c.$$postDigest(function(){null===ma&&(ma=!0)})}))}),t=Object.create(null),x=a.classNameFilter(),F=x?function(a){return x.test(a)}:function(){return!0},Na=Z(H),J=U.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
16)},sa={on:function(a,b,c){var g=ua(b);t[a]=t[a]||[];t[a].push({node:g,callback:c});w(b).on("$destroy",function(){E.get(g)||sa.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var g=t[a];g&&(t[a]=1===arguments.length?null:n(g,b,c))}else for(g in b=arguments[0],t)t[g]=n(t[g],b)},pin:function(a,b){Ea(aa(a),"element","not an element");Ea(aa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return p(a,b,c)},enabled:function(a,
b){var c=arguments.length;if(0===c)b=!!ma;else if(aa(a)){var d=z(a);1===c?b=!g.get(d):g.put(d,!b)}else b=ma=!!a;return b}};return sa}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,f,e,m,A){function y(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,n=d.parentNode;f.put(d,a);for(var p;n;){if(p=f.get(n)){p.processed||(p=b(p));break}n=n.parentNode}(p||
c).children.push(a);return a}var c={children:[]},d,f=new m;for(d=0;d<a.length;d++){var e=a[d];f.put(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var k=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(k.fn);k.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var s=[],ba=Z(a);return function(m,O,v){function H(a){a=
a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];r(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function S(a){var b=[],c={};r(a,function(a,d){var h=z(a.element),k=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var f=k?"to":"from";r(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:d,element:w(a)}})}else b.push(a)});var d={},k={};r(c,function(c,f){var e=c.from,
B=c.to;if(e&&B){var p=a[e.animationID],n=a[B.animationID],l=e.animationID.toString();if(!k[l]){var m=k[l]={structural:!0,beforeStart:function(){p.beforeStart();n.beforeStart()},close:function(){p.close();n.close()},classes:P(p.classes,n.classes),from:p,to:n,anchors:[]};m.classes.length?b.push(m):(b.push(p),b.push(n))}k[l].anchors.push({out:e.element,"in":B.element})}else e=e?e.animationID:B.animationID,B=e.toString(),d[B]||(d[B]=!0,b.push(a[e]))});return b}function P(a,b){a=a.split(" ");b=b.split(" ");
for(var c=[],d=0;d<a.length;d++){var k=a[d];if("ng-"!==k.substring(0,3))for(var f=0;f<b.length;f++)if(k===b[f]){c.push(k);break}}return c.join(" ")}function I(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function B(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function n(){var a=m.data("$$animationRunner");!a||"leave"===O&&v.$$domOperationFired||a.end()}function p(b){m.off("$destroy",n);m.removeData("$$animationRunner");
ba(m,v);ha(m,v);v.domOperation();L&&a.removeClass(m,L);m.removeClass("ng-animate");l.complete(!b)}v=oa(v);var ta=0<=["enter","move","leave"].indexOf(O),l=new e({end:function(){p()},cancel:function(){p(!0)}});if(!b.length)return p(),l;m.data("$$animationRunner",l);var k=Fa(m.attr("class"),Fa(v.addClass,v.removeClass)),L=v.tempClasses;L&&(k+=" "+L,v.tempClasses=null);var Q;ta&&(Q="ng-"+O+"-prepare",a.addClass(m,Q));s.push({element:m,classes:k,event:O,structural:ta,options:v,beforeStart:function(){m.addClass("ng-animate");
L&&a.addClass(m,L);Q&&(a.removeClass(m,Q),Q=null)},close:p});m.on("$destroy",n);if(1<s.length)return l;d.$$postDigest(function(){var a=[];r(s,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});s.length=0;var b=S(a),c=[];r(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=I(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),B(a,b)):
c()}})});A(y(c))});return l}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ka(),c=Ka();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,m,A,y,s,ba){function C(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++P))+"-"+a.getAttribute("class")+"-"+b}function O(e,n,p,m){var l;0<b.count(p)&&(l=c.get(p),l||(n=Y(n,"-stagger"),f.addClass(e,n),l=Ia(a,e,m),l.animationDuration=
Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),f.removeClass(e,n),c.put(p,l)));return l||{}}function v(a){I.push(a);s.waitUntilQuiet(function(){b.flush();c.flush();for(var a=A(),d=0;d<I.length;d++)I[d](a);I.length=0})}function H(c,f,e){f=b.get(e);f||(f=Ia(a,c,Wa),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var S=Z(f),P=0,I=[];return function(a,c){function d(){l()}function s(){l(!0)}function l(b){if(!(A||P&&J)){A=!0;J=!1;g.$$skipPreparationClasses||f.removeClass(a,ga);f.removeClass(a,ea);wa(h,!1);pa(h,!1);r(t,function(a){h.style[a[0]]=""});S(a,g);ha(a,g);Object.keys(I).length&&r(I,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();fa&&fa.length&&a.off(fa.join(" "),Q);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),
a.removeData("$$animateCss"));w&&w.complete(!b)}}function k(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&wa(h,!!a)}function L(){w=new e({end:d,cancel:s});v(N);l();return{$$willAnimate:!1,start:function(){return w},end:d}}function Q(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-V,0)>=K&&b>=M&&(P=!0,l())}function E(){function b(){if(!A){k(!1);r(t,function(a){h.style[a[0]]=a[1]});S(a,g);f.addClass(a,ea);if(q.recalculateTimingStyles){na=
h.getAttribute("class")+" "+ga;ja=C(h,na);D=H(h,na,ja);ca=D.maxDelay;u=Math.max(ca,0);M=D.maxDuration;if(0===M){l();return}q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof g.delay&&xa(g.delay)?parseFloat(g.delay):ca,u=Math.max(ca,0),D.animationDelay=ca,da=[qa,ca+"s"],t.push(da),h.style[da[0]]=da[1]);K=1E3*u;U=1E3*M;if(g.easing){var d,e=g.easing;q.hasTransitions&&(d=R+"TimingFunction",t.push([d,e]),h.style[d]=e);q.hasAnimations&&
(d=$+"TimingFunction",t.push([d,e]),h.style[d]=e)}D.transitionDuration&&fa.push(za);D.animationDuration&&fa.push(Aa);V=Date.now();var E=K+1.5*U;d=V+E;var e=a.data("$$animateCss")||[],n=!0;if(e.length){var p=e[0];(n=d>p.expectedEndTime)?m.cancel(p.timer):e.push(l)}n&&(E=m(c,E,!1),e[0]={timer:E,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(fa.length)a.on(fa.join(" "),Q);g.to&&(g.cleanupStyles&&La(I,h,Object.keys(g.to)),Ha(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=
1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!A)if(h.parentNode){var d=function(a){if(P)J&&a&&(J=!1,l());else if(J=!a,D.animationDuration)if(a=wa(h,J),J)t.push(a);else{var b=t,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<aa&&(D.transitionDuration&&0===W.transitionDuration||D.animationDuration&&0===W.animationDuration)&&Math.max(W.animationDelay,W.transitionDelay);e?m(b,Math.floor(e*aa*1E3),!1):b();G.resume=function(){d(!0)};G.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=oa(Ca(g)));
var I={},h=z(a);if(!h||!h.parentNode||!ba.enabled())return L();var t=[],x=a.attr("class"),F=Pa(g),A,J,P,w,G,u,K,M,U,V,fa=[];if(0===g.duration||!y.animations&&!y.transitions)return L();var ia=g.event&&X(g.event)?g.event.join(" "):g.event,Z="",T="";ia&&g.structural?Z=Y(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(T+=Y(g.addClass,"-add"));g.removeClass&&(T.length&&(T+=" "),T+=Y(g.removeClass,"-remove"));g.applyClassesEarly&&T.length&&S(a,g);var ga=[Z,T].join(" ").trim(),na=x+" "+ga,ea=Y(ga,"-active"),x=F.to&&
0<Object.keys(F.to).length;if(!(0<(g.keyframeStyle||"").length||x||ga))return L();var ja,W;0<g.stagger?(F=parseFloat(g.stagger),W={transitionDelay:F,animationDelay:F,transitionDuration:0,animationDuration:0}):(ja=C(h,na),W=O(h,ga,ja,Xa));g.$$skipPreparationClasses||f.addClass(a,ga);g.transitionStyle&&(F=[R,g.transitionStyle],ka(h,F),t.push(F));0<=g.duration&&(F=0<h.style[R].length,F=Ja(g.duration,F),ka(h,F),t.push(F));g.keyframeStyle&&(F=[$,g.keyframeStyle],ka(h,F),t.push(F));var aa=W?0<=g.staggerIndex?
g.staggerIndex:b.count(ja):0;(ia=0===aa)&&!g.skipBlocking&&pa(h,9999);var D=H(h,na,ja),ca=D.maxDelay;u=Math.max(ca,0);M=D.maxDuration;var q={};q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"===D.transitionProperty;q.applyTransitionDuration=x&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=g.duration&&q.hasAnimations;q.applyTransitionDelay=xa(g.delay)&&(q.applyTransitionDuration||
q.hasTransitions);q.applyAnimationDelay=xa(g.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<T.length;if(q.applyTransitionDuration||q.applyAnimationDuration)M=g.duration?parseFloat(g.duration):M,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=M,F=0<h.style[R+"Property"].length,t.push(Ja(M,F))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=M,t.push([Ba,M+"s"]));if(0===M&&!q.recalculateTimingStyles)return L();if(null!=g.delay){var da;"boolean"!==typeof g.delay&&
(da=parseFloat(g.delay),u=Math.max(da,0));q.applyTransitionDelay&&t.push([la,da+"s"]);q.applyAnimationDelay&&t.push([qa,da+"s"])}null==g.duration&&0<D.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ia);K=1E3*u;U=1E3*M;g.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<W.animationDelay&&0===W.animationDuration);g.from&&(g.cleanupStyles&&La(I,h,Object.keys(g.from)),Ga(a,g));q.blockTransition||q.blockKeyframeAnimation?
k(M):g.skipBlocking||pa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!A)return G={end:d,cancel:s,resume:null,pause:null},w=new e(G),v(E),w}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,m,A){function y(a){return a.replace(/\bng-\S+\b/g,"")}function s(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===
b.indexOf(a)}).join(" ")}function ba(c,e,f){function m(a){var b={},c=z(a).getBoundingClientRect();r(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=v.scrollTop;break;case "left":d+=v.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function n(){var c=y(f.attr("class")||""),d=s(c,l),c=s(l,c),d=a(A,{to:m(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function p(){A.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim")}
var A=w(z(e).cloneNode(!0)),l=y(A.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");A.addClass("ng-anchor");H.append(A);var k;c=function(){var c=a(A,{addClass:"ng-anchor-out",delay:!0,from:m(e)});return c.$$willAnimate?c:null}();if(!c&&(k=n(),!k))return p();var L=c||k;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!k&&(k=n()))return c=k.start(),c.done(function(){c=null;p();b.complete()}),c;p();b.complete()});return b=new d({end:a,
cancel:a})}}}function C(a,b,c,e){var f=O(a,N),m=O(b,N),y=[];r(e,function(a){(a=ba(c,a.out,a["in"]))&&y.push(a)});if(f||m||0!==y.length)return{start:function(){function a(){r(b,function(a){a.end()})}var b=[];f&&b.push(f.start());m&&b.push(m.start());r(y,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function O(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=ea(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return N;var v=A[0].body;c=z(f);var H=w(c.parentNode&&11===c.parentNode.nodeType||v.contains(c)?c:v);return function(a){return a.from&&a.to?C(a.from,a.to,a.classes,a.anchors):O(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=X(c)?c:c.split(" ");for(var d=
[],e={},f=0;f<c.length;f++){var r=c[f],w=a.$$registeredAnimations[r];w&&!e[r]&&(d.push(b.get(w)),e[r]=!0)}return d}var e=Z(d);return function(a,b,d,s){function w(){s.domOperation();e(a,s)}function C(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,G,P,f];break;case "addClass":b=[b,G,f];break;case "removeClass":b=[b,P,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;return N}function z(a,
b,d,e,f){var l=[];r(e,function(e){var m=e[f];m&&l.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||N)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=C(m,a,b,d,function(a){h(!1===a)});return e})});return l}function v(a,b,d,e,f){var l=z(a,b,d,e,f);if(0===l.length){var h,m;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),m=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),m=z(a,"addClass",d,e,"addClass"));
h&&(l=l.concat(h));m&&(l=l.concat(m))}if(0!==l.length)return function(a){var b=[];l.length&&r(l,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){r(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&ra(d)&&(s=d,d=null);s=oa(s);d||(d=a.attr("class")||"",s.addClass&&(d+=" "+s.addClass),s.removeClass&&(d+=" "+s.removeClass));var G=s.addClass,P=s.removeClass,I=f(d),B,n;if(I.length){var p,K;"leave"===b?(K="leave",p="afterLeave"):(K="before"+b.charAt(0).toUpperCase()+
b.substr(1),p=b);"enter"!==b&&"move"!==b&&(B=v(a,b,s,I,K));n=v(a,b,s,I,p)}if(B||n){var l;return{$$willAnimate:!0,end:function(){l?l.end():(H=!0,w(),ha(a,s),l=new c,l.complete(!0));return l},start:function(){function b(c){H=!0;w();ha(a,s);l.complete(c)}if(l)return l;l=new c;var d,e=[];B&&e.push(function(a){d=B(a)});e.length?e.push(function(a){w();a(!0)}):w();n&&e.push(function(a){d=n(a)});l.setHost({end:function(){H||((d||N)(void 0),b(void 0))},cancel:function(){H||((d||N)(!0),b(!0))}});c.chain(e,
b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){r(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,p){'use strict';var c="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),h=function(a,b){if(-1!==b.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,c,n,k){return function(d,f,e){var g=e.$normalize(c);!b[g]||h(f,n)||e[g]||d.$watch(e[a],function(a){a=k?!a:!!a;f.attr(c,a)})}}var b={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeydown:!0,bindRoleForClick:!0};
this.config=function(a){b=p.extend(b,a)};this.$get=function(){return{config:function(a){return b[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",c,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",c,!1)}]).directive("ngReadonly",
["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",c,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",c,!1)}]).directive("ngModel",["$aria",function(a){function b(b,k,d,f){return a.config(k)&&!d.attr(b)&&(f||!h(d,c))}function l(a,b){return!b.attr("role")&&b.attr("type")===a&&!h(b,c)}function m(a,b){var d=a.type,f=a.role;return"checkbox"===(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===f?"radio":
"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(c,k){var d=m(k,c);return{post:function(f,e,g,c){function k(){return c.$modelValue}function h(a){e.attr("aria-checked",g.value==c.$viewValue)}function m(){e.attr("aria-checked",!c.$isEmpty(c.$viewValue))}var n=b("tabindex","tabindex",e,!1);switch(d){case "radio":case "checkbox":l(d,e)&&e.attr("role",d);b("aria-checked","ariaChecked",e,!1)&&f.$watch(k,"radio"===d?h:m);n&&e.attr("tabindex",
0);break;case "range":l(d,e)&&e.attr("role","slider");if(a.config("ariaValue")){var p=!e.attr("aria-valuemin")&&(g.hasOwnProperty("min")||g.hasOwnProperty("ngMin")),q=!e.attr("aria-valuemax")&&(g.hasOwnProperty("max")||g.hasOwnProperty("ngMax")),r=!e.attr("aria-valuenow");p&&g.$observe("min",function(a){e.attr("aria-valuemin",a)});q&&g.$observe("max",function(a){e.attr("aria-valuemax",a)});r&&f.$watch(k,function(a){e.attr("aria-valuenow",a)})}n&&e.attr("tabindex",0)}!g.hasOwnProperty("ngRequired")&&
c.$validators.required&&b("aria-required","ariaRequired",e,!1)&&g.$observe("required",function(){e.attr("aria-required",!!g.required)});b("aria-invalid","ariaInvalid",e,!0)&&f.$watch(function(){return c.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",c,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,b,c,h){b.attr("aria-live")||b.attr("aria-live",
"assertive")}}}).directive("ngClick",["$aria","$parse",function(a,b){return{restrict:"A",compile:function(l,m){var n=b(m.ngClick,null,!0);return function(b,d,f){if(!h(d,c)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeydown")&&!f.ngKeydown&&!f.ngKeypress&&!f.ngKeyup))d.on("keydown",function(a){function c(){n(b,{$event:a})}var d=a.which||a.keyCode;32!==d&&13!==d||b.$apply(c)})}}}}]).directive("ngDblclick",
["$aria",function(a){return function(b,l,m){!a.config("tabindex")||l.attr("tabindex")||h(l,c)||l.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.5.1 - 2016-09-21
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(a,b){var c=b.isDefined,d=b.isUndefined,e=b.isNumber,f=b.isObject,g=b.isArray,h=b.isString,i=b.extend,j=b.toJson;b.module("LocalStorageModule",[]).provider("localStorageService",function(){this.prefix="ls",this.storageType="localStorage",this.cookie={expiry:30,path:"/",secure:!1},this.defaultToCookie=!0,this.notify={setItem:!0,removeItem:!1},this.setPrefix=function(a){return this.prefix=a,this},this.setStorageType=function(a){return this.storageType=a,this},this.setDefaultToCookie=function(a){return this.defaultToCookie=!!a,this},this.setStorageCookie=function(a,b,c){return this.cookie.expiry=a,this.cookie.path=b,this.cookie.secure=c,this},this.setStorageCookieDomain=function(a){return this.cookie.domain=a,this},this.setNotify=function(a,b){return this.notify={setItem:a,removeItem:b},this},this.$get=["$rootScope","$window","$document","$parse","$timeout",function(a,b,k,l,m){function n(c){if(c||(c=b.event),s.setItem&&h(c.key)&&w(c.key)){var d=v(c.key);m(function(){a.$broadcast("LocalStorageModule.notification.changed",{key:d,newvalue:c.newValue,storageType:p.storageType})})}}var o,p=this,q=p.prefix,r=p.cookie,s=p.notify,t=p.storageType;k?k[0]&&(k=k[0]):k=document,"."!==q.substr(-1)&&(q=q?q+".":"");var u=function(a){return q+a},v=function(a){return a.replace(new RegExp("^"+q,"g"),"")},w=function(a){return 0===a.indexOf(q)},x=function(){try{var c=t in b&&null!==b[t],d=u("__"+Math.round(1e7*Math.random()));return c&&(o=b[t],o.setItem(d,""),o.removeItem(d)),c}catch(e){return p.defaultToCookie&&(t="cookie"),a.$broadcast("LocalStorageModule.notification.error",e.message),!1}},y=x(),z=function(b,c,e){if(K(e),c=d(c)?null:j(c),!y&&p.defaultToCookie||"cookie"===p.storageType)return y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),s.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:"cookie"}),F(b,c);try{o&&o.setItem(u(b),c),s.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:p.storageType})}catch(f){return a.$broadcast("LocalStorageModule.notification.error",f.message),F(b,c)}return!0},A=function(b,c){if(K(c),!y&&p.defaultToCookie||"cookie"===p.storageType)return y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),G(b);var d=o?o.getItem(u(b)):null;if(!d||"null"===d)return null;try{return JSON.parse(d)}catch(e){return d}},B=function(){var b=0;arguments.length>=1&&("localStorage"===arguments[arguments.length-1]||"sessionStorage"===arguments[arguments.length-1])&&(b=1,K(arguments[arguments.length-1]));var c,d;for(c=0;c<arguments.length-b;c++)if(d=arguments[c],!y&&p.defaultToCookie||"cookie"===p.storageType)y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),s.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:d,storageType:"cookie"}),H(d);else try{o.removeItem(u(d)),s.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:d,storageType:p.storageType})}catch(e){a.$broadcast("LocalStorageModule.notification.error",e.message),H(d)}},C=function(b){if(K(b),!y)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),[];var c=q.length,d=[];for(var e in o)if(e.substr(0,c)===q)try{d.push(e.substr(c))}catch(f){return a.$broadcast("LocalStorageModule.notification.error",f.Description),[]}return d},D=function(b,c){K(c);var d=q?new RegExp("^"+q):new RegExp,e=b?new RegExp(b):new RegExp;if(!y&&p.defaultToCookie||"cookie"===p.storageType)return y||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),I();if(!y&&!p.defaultToCookie)return!1;var f=q.length;for(var g in o)if(d.test(g)&&e.test(g.substr(f)))try{B(g.substr(f))}catch(h){return a.$broadcast("LocalStorageModule.notification.error",h.message),I()}return!0},E=function(){try{return b.navigator.cookieEnabled||"cookie"in k&&(k.cookie.length>0||(k.cookie="test").indexOf.call(k.cookie,"test")>-1)}catch(c){return a.$broadcast("LocalStorageModule.notification.error",c.message),!1}}(),F=function(b,c,h,i){if(d(c))return!1;if((g(c)||f(c))&&(c=j(c)),!E)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;try{var l="",m=new Date,n="";if(null===c?(m.setTime(m.getTime()+-864e5),l="; expires="+m.toGMTString(),c=""):e(h)&&0!==h?(m.setTime(m.getTime()+24*h*60*60*1e3),l="; expires="+m.toGMTString()):0!==r.expiry&&(m.setTime(m.getTime()+24*r.expiry*60*60*1e3),l="; expires="+m.toGMTString()),b){var o="; path="+r.path;r.domain&&(n="; domain="+r.domain),"boolean"==typeof i?i===!0&&(n+="; secure"):r.secure===!0&&(n+="; secure"),k.cookie=u(b)+"="+encodeURIComponent(c)+l+o+n}}catch(p){return a.$broadcast("LocalStorageModule.notification.error",p.message),!1}return!0},G=function(b){if(!E)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;for(var c=k.cookie&&k.cookie.split(";")||[],d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(u(b)+"=")){var f=decodeURIComponent(e.substring(q.length+b.length+1,e.length));try{return JSON.parse(f)}catch(g){return f}}}return null},H=function(a){F(a,null)},I=function(){for(var a=null,b=q.length,c=k.cookie.split(";"),d=0;d<c.length;d++){for(a=c[d];" "===a.charAt(0);)a=a.substring(1,a.length);var e=a.substring(b,a.indexOf("="));H(e)}},J=function(){return t},K=function(a){return a&&t!==a&&(t=a,y=x()),y},L=function(a,b,d,e,g){e=e||b;var h=A(e,g);return null===h&&c(d)?h=d:f(h)&&f(d)&&(h=i(h,d)),l(b).assign(a,h),a.$watch(b,function(a){z(e,a,g)},f(a[b]))};y&&(b.addEventListener?(b.addEventListener("storage",n,!1),a.$on("$destroy",function(){b.removeEventListener("storage",n)})):b.attachEvent&&(b.attachEvent("onstorage",n),a.$on("$destroy",function(){b.detachEvent("onstorage",n)})));var M=function(a){K(a);for(var c=0,d=b[t],e=0;e<d.length;e++)0===d.key(e).indexOf(q)&&c++;return c};return{isSupported:y,getStorageType:J,setStorageType:K,set:z,add:z,get:A,keys:C,remove:B,clearAll:D,bind:L,deriveKey:u,underiveKey:v,length:M,defaultToCookie:this.defaultToCookie,cookie:{isSupported:E,set:F,add:F,get:G,remove:H,clearAll:I}}}]})}(window,window.angular);
//# sourceMappingURL=angular-local-storage.min.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.layout","material.core.meta","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.chips","material.components.checkbox","material.components.colors","material.components.content","material.components.datepicker","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.navBar","material.components.panel","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.showHide","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";e.warn(n)}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")}function o(e){return e.throttle=function(t){var n,o,i,r;return function(){n=arguments,r=this,i=t,o||(o=!0,e(function(){i.apply(r,Array.prototype.slice.call(n)),o=!1}))}},e}e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"],o.$inject=["$delegate"],t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.gestures","material.core.theming"]).config(n).run(e)}(),function(){function e(){return{restrict:"A",link:n}}function n(e,t,n){var o=n.mdAutoFocus||n.mdAutofocus||n.mdSidenavFocus;e.$watch(o,function(e){t.toggleClass("md-autofocus",e)})}t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e)}(),function(){function e(){function e(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),"rgba("+parseInt(o,16)+","+parseInt(i,16)+","+parseInt(r,16)+",0.1)"}function t(e){e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);var t=e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):"";return t.toUpperCase()}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}return{rgbaToHex:t,hexToRgba:e,rgbToRgba:n,rgbaToRgb:o}}t.module("material.core").factory("$mdColorUtil",e)}(),function(){function e(e,n,o){function i(e){var t=d+"-"+e,n=a(t),o=n.charAt(0).toLowerCase()+n.substring(1);return r(e)?e:r(n)?n:r(o)?o:e}function r(e){return t.isDefined(c.style[e])}function a(e){return e.replace(l,function(e,t,n,o){return o?n.toUpperCase():n})}var d=e.vendorPrefix,s=/webkit/i.test(d),l=/([:\-_]+(.))/g,c=document.createElement("div"),m={isInputKey:function(e){return e.keyCode>=31&&e.keyCode<=90},isNumPadKey:function(e){return 3===e.location&&e.keyCode>=97&&e.keyCode<=105},isNavigationKey:function(e){var t=m.KEY_CODE,n=[t.SPACE,t.ENTER,t.UP_ARROW,t.DOWN_ARROW];return n.indexOf(e.keyCode)!=-1},KEY_CODE:{COMMA:188,SEMICOLON:186,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(s?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(s?" webkitAnimationEnd":""),TRANSFORM:i("transform"),TRANSFORM_ORIGIN:i("transformOrigin"),TRANSITION:i("transition"),TRANSITION_DURATION:i("transitionDuration"),ANIMATION_PLAY_STATE:i("animationPlayState"),ANIMATION_DURATION:i("animationDuration"),ANIMATION_NAME:i("animationName"),ANIMATION_TIMING:i("animationTimingFunction"),ANIMATION_DIRECTION:i("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)",landscape:"(orientation: landscape)",portrait:"(orientation: portrait)",print:"print"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs","landscape","portrait","print"]};return m}e.$inject=["$sniffer","$window","$document"],t.module("material.core").factory("$mdConstant",e)}(),function(){function e(e,n){function o(){return[].concat(v)}function i(){return v.length}function r(e){return v.length&&e>-1&&e<v.length}function a(e){return!!e&&r(u(e)+1)}function d(e){return!!e&&r(u(e)-1)}function s(e){return r(e)?v[e]:null}function l(e,t){return v.filter(function(n){return n[e]===t})}function c(e,n){return e?(t.isNumber(n)||(n=v.length),v.splice(n,0,e),u(e)):-1}function m(e){p(e)&&v.splice(u(e),1)}function u(e){return v.indexOf(e)}function p(e){return e&&u(e)>-1}function h(){return v.length?v[0]:null}function f(){return v.length?v[v.length-1]:null}function g(e,o,i,a){i=i||b;for(var d=u(o);;){if(!r(d))return null;var s=d+(e?-1:1),l=null;if(r(s)?l=v[s]:n&&(l=e?f():h(),s=u(l)),null===l||s===a)return null;if(i(l))return l;t.isUndefined(a)&&(a=s),d=s}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var v=e||[];return{items:o,count:i,inRange:r,contains:p,indexOf:u,itemAt:s,findBy:l,add:c,remove:m,first:h,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function i(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=r(e));var o=h[n];return t.isUndefined(o)&&(o=a(n)),o}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=p[e];return t||(t=p[e]=o.matchMedia(e)),t.addListener(d),h[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){h[e.media]=!!e.matches})}function s(e){return p[e]}function l(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var i=e.MEDIA_PRIORITY[o];if(p[u[i]].matches){var r=m(t,n+"-"+i);if(t[r])return t[r]}}return t[m(t,n)]}function c(n,o,i){var r=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,d)))}),function(){r.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},p={},h={},f={};return i.getResponsiveAttribute=l,i.getQuery=s,i.watchResponsiveAttributes=c,i}e.$inject=["$mdConstant","$rootScope","$window"],t.module("material.core").factory("$mdMedia",e)}(),function(){function e(e,n){function o(e){return e=t.isArray(e)?e:[e],e.forEach(function(t){s.forEach(function(n){e.push(n+"-"+t)})}),e}function i(e){return e=t.isArray(e)?e:[e],o(e).map(function(e){return"["+e+"]"}).join(",")}function r(e,t){if(e=d(e),!e)return!1;for(var n=o(t),i=0;i<n.length;i++)if(e.hasAttribute(n[i]))return!0;return!1}function a(e,t){e=d(e),e&&o(t).forEach(function(t){e.removeAttribute(t)})}function d(e){if(e=e[0]||e,e.nodeType)return e}var s=["data","x"];return e?n?i(e):o(e):{buildList:o,buildSelector:i,hasAttribute:r,removeAttribute:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.prefixer=e,t}])}])}(),function(){function o(o,r,a,d,s,l,c,m,u,p){function h(e){return e?f(e)||g(e)?e:e+"px":"0"}function f(e){return String(e).indexOf("px")>-1}function g(e){return String(e).indexOf("%")>-1}function b(e){return e[0]||e}var v=l.startSymbol(),E=l.endSymbol(),$="{{"===v&&"}}"===E,C=function(e,n,o){var i=!1;if(e&&e.length){var r=u.getComputedStyle(e[0]);i=t.isDefined(r[n])&&(!o||r[n]==o)}return i},M={dom:{},now:e.performance?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},bidi:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir);if(0==arguments.length)return a?"ltr":"rtl";var d=t.element(e);a&&t.isDefined(i)?d.css(n,h(i)):!a&&t.isDefined(r)&&d.css(n,h(r))},bidiProperty:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir),d=t.element(e);a&&t.isDefined(n)?(d.css(n,h(r)),d.css(i,"")):!a&&t.isDefined(i)&&(d.css(i,h(r)),d.css(n,""))},clientRect:function(e,t,n){var o=b(e);t=b(t||o.offsetParent||document.body);var i=o.getBoundingClientRect(),r=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:i.left-r.left,top:i.top-r.top,width:i.width,height:i.height}},offsetRect:function(e,t){return M.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},scrollTop:function(e){e=t.element(e||o[0].body);var i=e[0]==o[0].body?o[0].body:n,r=i?i.scrollTop+i.parentElement.scrollTop:0;return r||Math.abs(e[0].getBoundingClientRect().top)},findFocusTarget:function(e,n){function o(e,n){var o,i=e[0].querySelectorAll(n);return i&&i.length&&i.length&&t.forEach(i,function(e){e=t.element(e);var n=e.hasClass("md-autofocus");n&&(o=e)}),o}var i,r=this.prefixer("md-autofocus",!0);return i=o(e,n||r),i||n==r||(i=o(e,this.prefixer("md-auto-focus",!0)),i||(i=o(e,r))),i},disableScrollAround:function(e,n,i){function r(e){function n(e){e.preventDefault()}e=t.element(e||s);var o;return i&&i.disableScrollMask?o=e:(e=e[0],o=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>'),e.appendChild(o[0])),o.on("wheel",n),o.on("touchmove",n),function(){o.off("wheel"),o.off("touchmove"),o[0].parentNode.removeChild(o[0]),delete M.disableScrollAround._enableScrolling}}function a(){var e=s.parentNode,t=e.style.cssText||"",n=s.style.cssText||"",o=M.scrollTop(s),i=s.clientWidth;return s.scrollHeight>s.clientHeight+1&&(d(s,{position:"fixed",width:"100%",top:-o+"px"}),e.style.overflowY="scroll"),s.clientWidth<i&&d(s,{overflow:"hidden"}),function(){s.style.cssText=n,e.style.cssText=t,s.scrollTop=o,e.scrollTop=o}}function d(e,t){for(var n in t)e.style[n]=t[n]}if(M.disableScrollAround._count=M.disableScrollAround._count||0,++M.disableScrollAround._count,M.disableScrollAround._enableScrolling)return M.disableScrollAround._enableScrolling;var s=o[0].body,l=a(),c=r(n);return M.disableScrollAround._enableScrolling=function(){--M.disableScrollAround._count||(l(),c(),delete M.disableScrollAround._enableScrolling)}},enableScrolling:function(){var e=this.disableScrollAround._enableScrolling;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function i(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",i))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(M.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),i=t;try{for(var r in o)o.hasOwnProperty(r)&&(i=i[o[r]])}catch(a){i=e}return"string"==typeof i||"number"==typeof i?i:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,i){var a;return function(){var d=o,s=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=n,e.apply(d,s)},t||10,i)}},throttle:function(e,t){var n;return function(){var o=this,i=arguments,r=M.now();(!n||r-n>t)&&(e.apply(o,i),n=r)}},time:function(e){var t=M.now();return e(),M.now()-t},valueOnUse:function(e,t,n){var o=null,i=Array.prototype.slice.call(arguments),r=i.length>3?i.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,r)),o}})},nextUid:function(){return""+i++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(t.isString(n)){var i=n.toUpperCase();n=function(e){return e.nodeName===i}}if(e instanceof t.element&&(e=e[0]),o&&(e=e.parentNode),!e)return null;do if(n(e))return e;while(e=e.parentNode);return null},elementContains:function(n,o){var i=e.Node&&e.Node.prototype&&Node.prototype.contains,r=i?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return r(o)},extractElementByName:function(e,n,o,i){function r(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;t<o;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;n<o;n++){var i=e[n];if(!t)for(var a=0,d=i.childNodes.length;a<d;a++)t=t||r([i.childNodes[a]])}return t}var s=r(e);return!s&&i&&c.warn(M.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(s||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(i,r){if(i.optional&&t.isUndefined(e[r])){var a=t.isDefined(n[i.attrName]);e[r]=t.isDefined(o[r])?o[r]:a}})},nextTick:function(e,t,n){function o(){var e=i.queue,t=i.digest;i.queue=[],i.timeout=null,i.digest=!1,e.forEach(function(e){var t=e.scope&&e.scope.$$destroyed;t||e.callback()}),t&&d.$digest()}var i=M.nextTick,a=i.timeout,s=i.queue||[];return s.push({scope:n,callback:e}),null==t&&(t=!0),i.digest=i.digest||t,i.queue=s,a||(i.timeout=r(o,0,!1))},processTemplate:function(e){return $?e:e&&t.isString(e)?e.replace(/\{\{/g,v).replace(/}}/g,E):e},getParentWithPointerEvents:function(e){for(var t=e.parent();C(t,"pointer-events","none");)t=t.parent();return t},getNearestContentElement:function(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();)t=t.parentNode;return t},checkStickySupport:function(){var e,n=t.element("<div>");o[0].body.appendChild(n[0]);for(var i=["sticky","-webkit-sticky"],r=0;r<i.length;++r)if(n.css({position:i[r],top:0,"z-index":2}),n.css("position")==i[r]){e=i[r];break}return n.remove(),e},parseAttributeBoolean:function(e,t){return""===e||!!e&&(t===!1||"false"!==e&&"0"!==e)},hasComputedStyle:C,isParentFormSubmitted:function(e){var n=M.getClosest(e,"form"),o=n?t.element(n).controller("form"):null;return!!o&&o.$submitted},animateScrollTo:function(e,t){function n(){var i=o();e.scrollTop=i,(d?i<t:i>t)&&p(n)}function o(){var e=1e3,t=M.now()-s;return i(t,r,a,e)}function i(e,t,n,o){if(e>o)return t+n;var i=(e/=o)*e,r=i*e;return t+n*(-2*r+3*i)}var r=e.scrollTop,a=t-r,d=r<t,s=M.now();p(n)}};return M.dom.animator=s(M),M}o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window","$$rAF"];var i=0;t.module("material.core").factory("$mdUtil",o),t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(){function e(){t.showWarnings=!1}var t=this;return t.showWarnings=!0,{disableWarnings:e,$get:["$$rAF","$log","$window","$interpolate",function(e,o,i,r){return n.apply(t,arguments)}]}}function n(e,n,o,i){function r(e,o,i){var r=t.element(e)[0]||e;!r||r.hasAttribute(o)&&0!==r.getAttribute(o).length||c(r,o)||(i=t.isString(i)?i.trim():"",i.length?e.attr(o,i):m&&n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',r))}function a(t,n,o){e(function(){r(t,n,o())})}function d(e,t){var n=l(e)||"",o=n.indexOf(i.startSymbol())>-1;o?a(e,t,function(){return l(e)}):r(e,t,n)}function s(e,t){var n=l(e),o=n.indexOf(i.startSymbol())>-1;o||n||r(e,t,n)}function l(e){function t(t){for(;t.parentNode&&(t=t.parentNode)!==e;)if(t.getAttribute&&"true"===t.getAttribute("aria-hidden"))return!0}e=e[0]||e;for(var n,o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),i="";n=o.nextNode();)t(n)||(i+=n.textContent);return i.trim()||""}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var i=e.hasChildNodes(),r=!1;if(i)for(var a=e.childNodes,d=0;d<a.length;d++){var s=a[d];1===s.nodeType&&s.hasAttribute(t)&&(n(s)||(r=!0))}return r}var m=this.showWarnings;return{expect:r,expectAsync:a,expectWithText:d,expectWithoutText:s}}n.$inject=["$$rAF","$log","$window","$interpolate"],t.module("material.core").provider("$mdAria",e)}(),function(){function e(e,n,o,i,r){this.compile=function(a){var d=a.templateUrl,s=a.template||"",l=a.controller,c=a.controllerAs,m=t.extend({},a.resolve||{}),u=t.extend({},a.locals||{}),p=a.transformTemplate||t.identity,h=a.bindToController;return t.forEach(m,function(e,n){t.isString(e)?m[n]=o.get(e):m[n]=o.invoke(e)}),t.extend(m,u),d?m.$template=n(d).then(function(e){return e}):m.$template=e.when(s),e.all(m).then(function(e){var n,o=p(e.$template,a),d=a.element||t.element("<div>").html(o.trim()).contents(),s=i(d);return n={locals:e,element:d,link:function(o){if(e.$scope=o,l){var i=r(l,e,!0,c);h&&t.extend(i.instance,e);var a=i();d.data("$ngControllerController",a),d.children().data("$ngControllerController",a),n.controller=a}return s(o)}}})}}e.$inject=["$q","$templateRequest","$injector","$compile","$controller"],t.module("material.core").service("$mdCompiler",e)}(),function(){function n(){}function o(n,o,i){function r(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n)}}function a(e,t,n){var o=h[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(h).join(", "));return o.registerElement(e,n)}function s(e,o){var i=new n(e);return t.extend(i,o),h[e]=i,v}function l(){for(var e=document.createElement("div"),n=["","webkit","Moz","MS","ms","o"],o=0;o<n.length;o++){var i=n[o],r=i?i+"TouchAction":"touchAction";if(t.isDefined(e.style[r]))return r}}var m=navigator.userAgent||navigator.vendor||e.opera,u=m.match(/ipad|iphone|ipod/i),p=m.match(/android/i),g=l(),b="undefined"!=typeof e.jQuery&&t.element===e.jQuery,v={handler:s,register:a,isIos:u,isAndroid:p,isHijackingClicks:(u||p)&&!b&&!f};if(v.isHijackingClicks){var E=6;v.handler("click",{options:{maxDistance:E},onEnd:r("click")}),v.handler("focus",{options:{maxDistance:E},onEnd:function(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||e.isContentEditable||t.indexOf(e.nodeName)!=-1)}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus())}}),v.handler("mouseup",{options:{maxDistance:E},onEnd:r("mouseup")}),v.handler("mousedown",{onStart:function(e){this.dispatchEvent(e,"mousedown")}})}return v.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){i.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=i(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){g||"touchmove"!==e.type||e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onSetup:function(e,t){g&&(this.oldTouchAction=e[0].style[g],e[0].style[g]=t.horizontal===!1?"pan-y":"pan-x")},onCleanup:function(e){this.oldTouchAction&&(e[0].style[g]=this.oldTouchAction)},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;g||"touchmove"!==e.type||e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n))}})}function i(e){this.name=e,this.state={}}function r(){function n(e,n,o){o=o||u;var i=new t.element.Event(n);i.$material=!0,i.pointer=o,i.srcEvent=e,t.extend(i,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(i)}function o(t,n,o){o=o||u;var i;"click"===n||"mouseup"==n||"mousedown"==n?(i=document.createEvent("MouseEvents"),i.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,{})),i.$material=!0,i.pointer=o,i.srcEvent=t,o.target.dispatchEvent(i)}var r="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return i.prototype={options:{},dispatchEvent:r?n:o,onSetup:t.noop,onCleanup:t.noop,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),i=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,i),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n),o.onCleanup(e,t||{})}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),o.onSetup(e,t||{}),n}},i}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||l(e)||(e.preventDefault(),e.stopPropagation())}function i(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||l(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)}function r(e,t){var o;for(var i in h)o=h[i],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function a(e){if(!u){var t=+Date.now();p&&!s(e,p)&&t-p.endTime<1500||(u=d(e),r("start",e))}}function m(e){u&&s(e,u)&&(c(e,u),r("move",e))}function f(e){u&&s(e,u)&&(c(e,u),u.endTime=+Date.now(),r("end",e),p=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",i,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var v="mousedown touchstart pointerdown",E="mousemove touchmove pointermove",$="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(v,a).on(E,m).on($,f).on("$$mdGestureReset",function(){p=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function s(e,t){return e&&t&&e.type.charAt(0)===t.type}function l(e){return g&&g.x==e.x&&g.y==e.y}function c(e,t){var n=m(e),o=t.x=n.pageX,i=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=i-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"];var u,p,h={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",r).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]}}(),function(){function e(){function e(e){function n(e){return s.optionsFactory=e.options,s.methods=(e.methods||[]).concat(a),l}function o(e,t){return d[e]=t,l}function i(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return s.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},l}function r(n,o){function i(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},c,e))}function r(e){return m.destroy(e)}function a(t,n){var i={};return i[e]=u,o.invoke(t||function(){return n},{},i)}var l,c,m=n(),u={hide:m.hide,cancel:m.cancel,show:i,destroy:r};return l=s.methods||[],c=a(s.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(s.presets,function(e,n){function o(e){this._options=t.extend({},i,e)}var i=a(e.optionsFactory,{}),r=(e.methods||[]).concat(l);if(t.extend(i,{$type:n}),t.forEach(r,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}r.$inject=["$$interimElement","$injector"];var a=["onHide","onShow","onRemove"],d={},s={presets:{}},l={setDefaults:n,addPreset:i,addMethod:o,$get:r};return l.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),l}function o(e,o,i,r,a,d,s,l,c,m,u){return function(){function p(e){e=e||{};var t=new b(e||{}),n=!e.skipHide&&$.length?v.cancel():o.when(!0);return n["finally"](function(){$.push(t),t.show()["catch"](function(e){return e})}),t.deferred.promise}function h(e,t){function i(n){return n.remove(e,!1,t||{})["catch"](function(e){return e}),n.deferred.promise}if(!$.length)return o.when(e);if(t=t||{},t.closeAll){var r=o.all($.reverse().map(i));return $=[],r}if(t.closeTo!==n)return o.all($.splice(t.closeTo).map(i));var a=$.pop();return i(a)}function f(e,n){var i=$.pop();return i?(i.remove(e,!0,n||{})["catch"](function(e){return e}),i.deferred.promise["catch"](t.noop)):o.when(e)}function g(e){var n=e?null:$.shift(),i=t.element(e).length?t.element(e)[0].parentNode:null;if(i){var r=$.filter(function(e){var t=e.options.element[0];return t===i});r.length>0&&(n=r[0],$.splice($.indexOf(n),1))}return n?n.remove(E,!1,{$destroy:!0}):o.when(E)}function b(u){function p(){return o(function(e,t){function n(e){y.deferred.reject(e),t(e)}u.onCompiling&&u.onCompiling(u),g(u).then(function(t){T=b(t,u),A=C(T,u,t.controller).then(e,n)},n)})}function h(e,n,i){function r(e){y.deferred.resolve(e)}function a(e){y.deferred.reject(e)}return T?(u=t.extend(u||{},i||{}),u.cancelAutoHide&&u.cancelAutoHide(),u.element.triggerHandler("$mdInterimElementRemove"),u.$destroy===!0?M(u.element,u).then(function(){n&&a(e)||r(e)}):(o.when(A)["finally"](function(){M(u.element,u).then(function(){n&&a(e)||r(e)},a)}),y.deferred.promise)):o.when(!1)}function f(e){return e=e||{},e.template&&(e.template=l.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||r.$new(e.isolateScope),onShow:function(e,t,n){return s.enter(t,n.parent)},onRemove:function(e,t){return t&&s.leave(t)||o.when()}},e)}function g(e){var t=e.skipCompile?null:c.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function b(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=E(o,n),n.themable&&m(o),o}function E(n,o){var i=o.parent;if(i=t.isFunction(i)?i(o.scope,n,o):t.isString(i)?t.element(e[0].querySelector(i)):t.element(i),!(i||{}).length){var r;return d[0]&&d[0].querySelector&&(r=d[0].querySelector(":not(svg) > body")),r||(r=d[0]),"#comment"==r.nodeName&&(r=e[0].body),t.element(r)}return i}function $(){var e,o=t.noop;u.hideDelay&&(e=a(v.hide,u.hideDelay),o=function(){a.cancel(e)}),u.cancelAutoHide=function(){o(),u.cancelAutoHide=n}}function C(e,n,i){var r=n.onShowing||t.noop,a=n.onComplete||t.noop;return r(n.scope,e,n,i),o(function(t,r){try{o.when(n.onShow(n.scope,e,n,i)).then(function(){a(n.scope,e,n),$(),t(e)},r)}catch(d){r(d.message)}})}function M(e,n){var o=n.onRemoving||t.noop;return i(function(t,r){try{var a=i.when(n.onRemove(n.scope,e,n)||!0);o(e,a),1==n.$destroy?t(e):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},r)}catch(d){r(d)}})}var y,T,A=o.when(!0);return u=f(u),y={options:u,deferred:o.defer(),show:p,remove:h}}var v,E=!1,$=[];return v={show:p,hide:h,cancel:f,destroy:g,$injector_:u}}}return o.$inject=["$document","$q","$$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector"],e.$get=o,e}t.module("material.core").provider("$$interimElement",e)}(),function(){!function(){function e(e){function d(e){return e.replace(m,"").replace(u,function(e,t,n,o){return o?n.toUpperCase():n})}var m=/^((?:x|data)[\:\-_])/i,u=/([\:\-\_]+(.))/g,p=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl","print"],h=["layout","flex","flex-order","flex-offset","layout-align"],f=["show","hide","layout-padding","layout-margin"];
t.forEach(p,function(n){t.forEach(h,function(t){var o=n?t+"-"+n:t;e.directive(d(o),r(o))}),t.forEach(f,function(t){var o=n?t+"-"+n:t;e.directive(d(o),a(o))})}),e.provider("$$mdLayout",function(){return{$get:t.noop,validateAttributeValue:c,validateAttributeUsage:l,disableLayouts:function(e){A.enabled=e!==!0}}}).directive("mdLayoutCss",o).directive("ngCloak",i("ng-cloak")).directive("layoutWrap",a("layout-wrap")).directive("layoutNowrap",a("layout-nowrap")).directive("layoutNoWrap",a("layout-no-wrap")).directive("layoutFill",a("layout-fill")).directive("layoutLtMd",s("layout-lt-md",!0)).directive("layoutLtLg",s("layout-lt-lg",!0)).directive("flexLtMd",s("flex-lt-md",!0)).directive("flexLtLg",s("flex-lt-lg",!0)).directive("layoutAlignLtMd",s("layout-align-lt-md")).directive("layoutAlignLtLg",s("layout-align-lt-lg")).directive("flexOrderLtMd",s("flex-order-lt-md")).directive("flexOrderLtLg",s("flex-order-lt-lg")).directive("offsetLtMd",s("flex-offset-lt-md")).directive("offsetLtLg",s("flex-offset-lt-lg")).directive("hideLtMd",s("hide-lt-md")).directive("hideLtLg",s("hide-lt-lg")).directive("showLtMd",s("show-lt-md")).directive("showLtLg",s("show-lt-lg")).config(n)}function n(){var e=!!document.querySelector("[md-layouts-disabled]");A.enabled=!e}function o(){return A.enabled=!1,{restrict:"A",priority:"900"}}function i(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function(o){return A.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e)},10,!1)}):t.noop}}}]}function r(e){function n(t,n,o){var i=d(n,e,o),r=o.$observe(o.$normalize(e),i);i(p(e,o,"")),t.$on("$destroy",function(){r()})}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(l(e,i,o,v),c(e,p(e,i,""),m(o,e,i)),r=n),r||t.noop}}}]}function a(e){function n(t,n){n.addClass(e)}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(c(e,p(e,i,""),m(o,e,i)),n(null,o),r=n),r||t.noop}}}]}function d(e,n){var o;return function(i){var r=c(n,i||"");t.isDefined(r)&&(o&&e.removeClass(o),o=r?n+"-"+r.replace($,"-"):n,e.addClass(o))}}function s(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function l(e,t,n,o){var i,r,a,d=n[0].nodeName.toLowerCase();switch(e.replace(E,"")){case"flex":"md-button"!=d&&"fieldset"!=d||(r="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",i="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(g.supplant(i,[r,a])))}}function c(e,n,o){var i=n;if(!u(n)){switch(e.replace(E,"")){case"layout":h(n,M)||(n=M[0]);break;case"flex":h(n,C)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":n&&!isNaN(+n)||(n="0");break;case"layout-align":var r=f(n);n=g.supplant("{main}-{cross}",r);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n=""}n!=i&&(o||t.noop)(n)}return n}function m(e,t,n){return function(e){u(e)||(n[n.$normalize(t)]=e)}}function u(e){return(e||"").indexOf(b.startSymbol())>-1}function p(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace($,"-"):n||null}function h(e,t,n){e=n&&e?e.replace($,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace($,n):t,o=o||t===e}),o}function f(e){var t,n={main:"start",cross:"stretch"};return e=e||"",0!==e.indexOf("-")&&0!==e.indexOf(" ")||(e="none"+e),t=e.toLowerCase().trim().replace($,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),y.indexOf(n.main)<0&&(n.main="start"),T.indexOf(n.cross)<0&&(n.cross="stretch"),n}var g,b,v,E=/(-gt)?-(sm|md|lg|print)/g,$=/\s+/g,C=["grow","initial","auto","none","noshrink","nogrow"],M=["row","column"],y=["","start","center","end","stretch","space-around","space-between"],T=["","start","center","end","stretch"],A={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]))}()}(),function(){t.module("material.core.meta",[]).provider("$$mdMeta",function(){function e(e){if(r[e])return!0;var n=document.getElementsByName(e)[0];return!!n&&(r[e]=t.element(n),!0)}function n(n,o){if(e(n),r[n])r[n].attr("content",o);else{var a=t.element('<meta name="'+n+'" content="'+o+'"/>');i.append(a),r[n]=a}return function(){r[n].attr("content",""),r[n].remove(),delete r[n]}}function o(t){if(!e(t))throw Error("$$mdMeta: could not find a meta tag with the name '"+t+"'");return r[t].attr("content")}var i=t.element(document.head),r={},a={setMeta:n,getMeta:o};return t.extend({},a,{$get:function(){return a}})})}(),function(){function e(e,o){function i(e){return e&&""!==e}var r,a=[],d={};return r={notFoundError:function(t,n){e.error((n||"")+"No instance found for handle",t)},getInstances:function(){return a},get:function(e){if(!i(e))return null;var t,n,o;for(t=0,n=a.length;t<n;t++)if(o=a[t],o.$$mdHandle===e)return o;return null},register:function(e,n){function o(){var t=a.indexOf(e);t!==-1&&a.splice(t,1)}function i(){var t=d[n];t&&(t.forEach(function(t){t.resolve(e)}),delete d[n])}return n?(e.$$mdHandle=n,a.push(e),i(),o):t.noop},when:function(e){if(i(e)){var t=o.defer(),a=r.get(e);return a?t.resolve(a):(d[e]===n&&(d[e]=[]),d[e].push(t)),t.promise}return o.reject("Invalid `md-component-id` value.")}}}e.$inject=["$log","$q"],t.module("material.core").factory("$mdComponentRegistry",e)}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,i,r){return r=t.extend(n(i),r),e.attach(o,i,r)}}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdButtonInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdCheckboxInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdListInkRipple",e)}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,i){i.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(){function e(){n=!0}var n=!1;return{disableInkRipple:e,$get:["$injector",function(e){function i(i,r,a){return n||r.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:i,$element:r,rippleOptions:a})}return{attach:i}}]}}function o(e,n,o,i,r,a,d){this.$window=i,this.$timeout=r,this.$mdUtil=a,this.$mdColorUtil=d,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents()}function i(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1))}function r(){return{controller:t.noop}}o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil","$mdColorUtil"],e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],t.module("material.core").provider("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",r).directive("mdNoBar",r).directive("mdNoStretch",r);var a=450;o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)"}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n())},o.prototype.calculateColor=function(){return this.color()},o.prototype._parseColor=function(e,t){t=t||1;var n=this.$mdColorUtil;if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?n.rgbToRgba(e):0===e.indexOf("#")?n.hexToRgba(e):void 0},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove))},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o)}else this.createRipple(e.offsetX,e.offsetY)},o.prototype.handleMouseup=function(){i(this,this.clearRipples)},o.prototype.handleTouchmove=function(){i(this,this.deleteRipples)},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++)this.ripples[e].remove()},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1}}while(e=e.parentNode);return!0},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple")},o.prototype.createRipple=function(e,n){function o(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var i=this,r=i.$mdColorUtil,d=t.element('<div class="md-ripple"></div>'),s=this.$element.prop("clientWidth"),l=this.$element.prop("clientHeight"),c=2*Math.max(Math.abs(s-e),e),m=2*Math.max(Math.abs(l-n),n),u=o(this.options.fitRipple,c,m),p=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:r.rgbaToRgb(p),borderColor:r.rgbaToRgb(p)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:p}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples()},a,!1)},!1)}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);n<0||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),e.addClass("md-ripple-remove"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdTabInkRipple",e)}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100 A200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#ffffff",A200:"#000000",A400:"#303030",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A200 A400 A700"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100 A200",contrastStrongLightColors:"400 500 700"}})}(),function(){!function(e){function t(e){var t=!!document.querySelector("[md-themes-disabled]");e.disableTheming(t)}function o(t,o){function i(e,t){return t=t||{},p[e]=a(e,t),h}function r(t,n){return a(t,e.extend({},p[t]||{},n))}function a(e,t){var n=w.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function s(t,n){if(E[t])return E[t];n=n||"default";var o="string"==typeof n?E[n]:n,i=new c(t);return o&&e.forEach(o.colors,function(t,n){i.colors[n]={name:t.name,hues:e.extend({},t.hues)}}),E[t]=i,i}function c(t){function n(t){if(t=0===arguments.length||!!t,t!==o.isDark){o.isDark=t,o.foregroundPalette=o.isDark?g:f,o.foregroundShadow=o.isDark?b:v;var n=o.isDark?A:T,i=o.isDark?T:A;return e.forEach(n,function(e,t){var n=o.colors[t],r=i[t];if(n)for(var a in n.hues)n.hues[a]===r[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=t,o.colors={},o.dark=n,n(!1),M.forEach(function(t){var n=(o.isDark?A:T)[t];o[t+"Palette"]=function(i,r){var a=o.colors[t]={name:i,hues:e.extend({},n,r)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",i).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(e){if(w.indexOf(e)==-1)throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",e).replace("%2",o.name).replace("%3",t).replace("%4",i).replace("%5",w.join(", ")))}),o},o[t+"Color"]=function(){var e=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+t+"Color() has been deprecated. Use $mdThemingProviderTheme."+t+"Palette() instead."),o[t+"Palette"].apply(o,e)}})}function m(t,o){function i(e){return e===n||""===e||a.THEMES[e]!==n}function r(n,r){function a(){return l=r.controller("mdTheme")||n.data("$mdThemeController"),l&&l.$mdTheme||("default"==C?"":C)}function d(e){if(e){i(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e),l&&n.data("$mdThemeController",l)}}function s(){var e=r.controller("mdTheme");return!!e&&(n.on("$destroy",e.registerChanges(function(){d(a())})),!0)}var l=r.controller("mdTheme"),c=n.attr("md-theme-watch"),m=($||e.isDefined(c))&&"false"!=c;d(a()),($&&!s()||!$&&m)&&n.on("$destroy",t.$watch(a,d))}var a=function(e,o){o===n&&(o=e,e=n),e===n&&(e=t),a.inherit(o,o)};return a.THEMES=e.extend({},E),a.PALETTES=e.extend({},p),a.inherit=r,a.registered=i,a.defaultTheme=function(){return C},a.generateTheme=function(e){l(E[e],e,k.nonce)},a.setBrowserColor=x,a}m.$inject=["$rootScope","$log"],p={};var h,E={},$=!1,C="default";e.extend(p,t);var y=function(e){var t=o.setMeta("theme-color",e),n=o.setMeta("msapplication-navbutton-color",e);return function(){t(),n()}},x=function(t){t=e.isObject(t)?t:{};var n=t.theme||"default",o=t.hue||"800",i=p[t.palette]||p[E[n].colors[t.palette||"primary"].name],r=e.isObject(i[o])?i[o].hex:i[o];return y(r)};return h={definePalette:i,extendPalette:r,theme:s,configuration:function(){return e.extend({},k,{defaultTheme:C,alwaysWatchTheme:$,registeredStyles:[].concat(k.registeredStyles)})},disableTheming:function(t){k.disableTheming=e.isUndefined(t)||!!t},registerStyles:function(e){k.registeredStyles.push(e)},setNonce:function(e){k.nonce=e},generateThemesOnDemand:function(e){k.generateOnDemand=e},setDefaultTheme:function(e){C=e},alwaysWatchTheme:function(e){$=e},enableBrowserColor:x,$get:m,_LIGHT_DEFAULT_HUES:T,_DARK_DEFAULT_HUES:A,_PALETTES:p,_THEMES:E,_parseRules:d,_rgba:u}}function i(t,n,o){return{priority:100,link:{pre:function(i,r,a){var d=[],s={registerChanges:function(t,n){return n&&(t=e.bind(n,t)),d.push(t),function(){var e=d.indexOf(t);e>-1&&d.splice(e,1)}},$setTheme:function(e){t.registered(e)||o.warn("attempted to use unregistered theme '"+e+"'"),s.$mdTheme=e,d.forEach(function(e){e()})}};r.data("$mdThemeController",s),s.$setTheme(n(a.mdTheme)(i)),a.$observe("mdTheme",s.$setTheme)}}}}function r(){return k.disableTheming=!0,{restrict:"A",priority:"900"}}function a(e){return e}function d(t,n,o){c(t,n),o=o.replace(/THEME_NAME/g,t.name);var i=[],r=t.colors[n],a=new RegExp("\\.md-"+t.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,l=p[r.name];return o=o.replace(s,function(e,n,o,i,r){return"foreground"===n?"shadow"==o?t.foregroundShadow:t.foregroundPalette[o]||t.foregroundPalette[1]:(0!==o.indexOf("hue")&&"default"!==o||(o=t.colors[n].hues[o]),u((p[t.colors[n].name][o]||"")[r?"contrast":"value"],i))}),e.forEach(r.hues,function(e,n){var r=o.replace(d,function(t,n,o,i,r){return u(l[e]["color"===i?"value":"contrast"],r)});if("default"!==n&&(r=r.replace(a,".md-"+t.name+"-theme.md-"+n)),"default"==t.name){var s=/((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;r=r.replace(s,function(e,t,n,o){return e+", "+t+n+o})}i.push(r)}),i}function s(t,n){function o(t,n){var o=t.contrastDefaultColor,i=t.contrastLightColors||[],r=t.contrastStrongLightColors||[],a=t.contrastDarkColors||[];"string"==typeof i&&(i=i.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof a&&(a=a.split(" ")),delete t.contrastDefaultColor,delete t.contrastLightColors,delete t.contrastStrongLightColors,delete t.contrastDarkColors,e.forEach(t,function(n,d){function s(){return"light"===o?a.indexOf(d)>-1?E:r.indexOf(d)>-1?C:$:i.indexOf(d)>-1?r.indexOf(d)>-1?C:$:E}if(!e.isObject(n)){var l=m(n);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",n).replace("%2",t.name).replace("%3",d));t[d]={hex:t[d],value:l,contrast:s()}}})}var i=document.head,r=i?i.firstElementChild:null,a=!k.disableTheming&&t.has("$MD_THEME_CSS")?t.get("$MD_THEME_CSS"):"";if(a+=k.registeredStyles.join(""),r&&0!==a.length){e.forEach(p,o);var d=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.trim().length}).map(function(e){return e.trim()+"}"}),s=new RegExp("md-("+M.join("|")+")","g");M.forEach(function(e){x[e]=""}),d.forEach(function(e){for(var t,n=(e.match(s),0);t=M[n];n++)if(e.indexOf(".md-"+t)>-1)return x[t]+=e;for(n=0;t=M[n];n++)if(e.indexOf(t)>-1)return x[t]+=e;return x[y]+=e}),k.generateOnDemand||e.forEach(n.THEMES,function(e){h[e.name]||"default"!==n.defaultTheme()&&"default"===e.name||l(e,e.name,k.nonce)})}}function l(e,t,n){var o=document.head,i=o?o.firstElementChild:null;h[t]||(M.forEach(function(t){for(var r=d(e,t,x[t]);r.length;){var a=r.shift();if(a){var s=document.createElement("style");s.setAttribute("md-theme-style",""),n&&s.setAttribute("nonce",n),s.appendChild(document.createTextNode(a)),o.insertBefore(s,i)}}}),h[e.name]=!0)}function c(e,t){if(!p[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(p).join(", ")))}function m(t){if(e.isArray(t)&&3==t.length)return t;if(/^rgb/.test(t))return t.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==t.charAt(0)&&(t=t.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(t)){var n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),[parseInt(o,16),parseInt(i,16),parseInt(r,16)]}}function u(t,n){return t?(4==t.length&&(t=e.copy(t),n?t.pop():n=t.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+t.join(",")+","+n+")":"rgb("+t.join(",")+")"):"rgb('0,0,0')"}t.$inject=["$mdThemingProvider"],i.$inject=["$mdTheming","$interpolate","$log"],a.$inject=["$mdTheming"],o.$inject=["$mdColorPalette","$$mdMetaProvider"],s.$inject=["$injector","$mdTheming"],e.module("material.core.theming",["material.core.theming.palette","material.core.meta"]).directive("mdTheme",i).directive("mdThemable",a).directive("mdThemesDisabled",r).provider("$mdTheming",o).config(t).run(s);var p,h={},f={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.38)",4:"rgba(0,0,0,0.12)"},g={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.5)",4:"rgba(255,255,255,0.12)"},b="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",v="",E=m("rgba(0,0,0,0.87)"),$=m("rgba(255,255,255,0.87)"),C=m("rgb(255,255,255)"),M=["primary","accent","warn","background"],y="primary",T={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"50","hue-1":"A100","hue-2":"100","hue-3":"300"}},A={background:{"default":"A400","hue-1":"800","hue-2":"900","hue-3":"A200"}};M.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};T[e]||(T[e]=t),A[e]||(A[e]=t)});var w=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],k={disableTheming:!1,generateOnDemand:!1,registeredStyles:[],nonce:null},x={}}(e.angular)}(),function(){function n(n,o,i,r,a){var d;return d={translate3d:function(e,t,n,o){function i(n){return a(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass}).start()}return a(e,{from:t,to:n,addClass:o.transitionInClass,removeClass:o.transitionOutClass}).start().then(function(){return i})},waitTransitionEnd:function(t,n){var a=3e3;return o(function(o,d){function s(e){e&&e.target!==t[0]||(e&&i.cancel(c),t.off(r.CSS.TRANSITIONEND,s),o())}function l(n){return n=n||e.getComputedStyle(t[0]),"0s"==n.transitionDuration||!n.transition&&!n.transitionProperty}n=n||{},l(n.cachedTransitionStyles)&&(a=0);var c=i(s,n.timeout||a);t.on(r.CSS.TRANSITIONEND,s)})},calculateTransformValues:function(e,t){function n(){var t=e?e.parent():null,n=t?t.parent():null;return n?d.clientRect(n):null}var o=t.element,i=t.bounds;if(o||i){var r=o?d.clientRect(o)||n():d.copyRect(i),a=d.copyRect(e[0].getBoundingClientRect()),s=d.centerPointFor(a),l=d.centerPointFor(r);return{centerX:l.x-s.x,centerY:l.y-s.y,scaleX:Math.round(100*Math.min(.5,r.width/a.width))/100,scaleY:Math.round(100*Math.min(.5,r.height/a.height))/100}}return{centerX:0,centerY:0,scaleX:.5,scaleY:.5}},calculateZoomToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},calculateSlideToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},toCss:function(e){function n(e,n,i){t.forEach(n.split(" "),function(e){o[e]=i})}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e);break;case"font-size":o["font-size"]=e}}),o},toTransformCss:function(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?d.copyRect(n):null},centerPointFor:function(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(e,t,o,i){return function(r){return n(r,e,t,o,i)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),i=o?"-webkit-":"",r=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],s=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],l=["$q","$$rAFMutex",function(e,o){function i(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var r=0,a=1,d=2;return i.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===r&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},i.all=function(e,t){function o(n){r=r&&n,++i===e.length&&t(r)}var i=0,r=!0;n(e,function(e){e.done(o)})},i}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",l).factory("$$rAFMutex",s).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout","$animate",function(t,d,s,l,c,m,u){function p(o,d){var l=[],c=C(o),p=c&&u.enabled(),g=!1,y=!1;p&&(d.transitionStyle&&l.push([i+"transition",d.transitionStyle]),d.keyframeStyle&&l.push([i+"animation",d.keyframeStyle]),d.delay&&l.push([i+"transition-delay",d.delay+"s"]),d.duration&&l.push([i+"transition-duration",d.duration+"s"]),
g=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),y=!!d.addClass||!!d.removeClass,M(o,!0));var T=p&&(g||y);E(o,d);var A,w,k=!1;return{close:t.close,start:function(){function t(){if(!k)return k=!0,A&&w&&o.off(A,w),h(o,d),v(o,d),n(l,function(t){c.style[e(t[0])]=""}),u.complete(!0),u}var u=new s;return b(function(){if(M(o,!1),!T)return t();n(l,function(t){var n=t[0],o=t[1];c.style[e(n)]=o}),h(o,d);var s=f(o);if(0===s.duration)return t();var u=[];d.easing&&(s.transitionDuration&&u.push([i+"transition-timing-function",d.easing]),s.animationDuration&&u.push([i+"animation-timing-function",d.easing])),d.delay&&s.animationDelay&&u.push([i+"animation-delay",d.delay+"s"]),d.duration&&s.animationDuration&&u.push([i+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];c.style[e(n)]=o,l.push(t)});var p=s.delay,g=1e3*p,b=s.duration,v=1e3*b,E=Date.now();A=[],s.transitionDuration&&A.push(r),s.animationDuration&&A.push(a),A=A.join(" "),w=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),i=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-E,0)>=g&&i>=b&&t()},o.on(A,w),$(o,d),m(t,g+1.5*v,!1)}),u}}}function h(e,t){t.addClass&&(c.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(c.removeClass(e,t.removeClass),t.removeClass=null)}function f(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var i=C(e),r=t.getComputedStyle(i),a=g(r[n("transitionDuration")]),d=g(r[n("animationDuration")]),s=g(r[n("transitionDelay")]),l=g(r[n("animationDelay")]);d*=parseInt(r[n("animationIterationCount")],10)||1;var c=Math.max(d,a),m=Math.max(l,s);return{duration:c,delay:m,animationDuration:d,transitionDuration:a,animationDelay:l,transitionDelay:s}}function g(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function b(e){y&&y(),T.push(e),y=d(function(){y=null;for(var e=l(),t=0;t<T.length;t++)T[t](e);T.length=0})}function v(e,t){E(e,t),$(e,t)}function E(e,t){t.from&&(e.css(t.from),t.from=null)}function $(e,t){t.to&&(e.css(t.to),t.to=null)}function C(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function M(t,n){var o=C(t),r=e(i+"transition-delay");o.style[r]=n?"-9999s":""}var y,T=[];return p}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$mdUtil","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,n,o,i,r,a,d,s){function l(l,m,u){function p(){var e=parseInt(h.height,10)+Math.abs(parseInt(h.top,10));m.css("height",e+"px")}o.pin&&o.pin(m,i);var h;d(function(){if(h=r.getComputedStyle(s[0].body),"fixed"===h.position){var o=n.debounce(function(){h=r.getComputedStyle(s[0].body),p()},60,null,!1);p(),t.element(r).on("resize",o),l.$on("$destroy",function(){t.element(r).off("resize",o)})}var i=m.parent();if(i.length){"BODY"===i[0].nodeName&&m.css("position","fixed");var d=r.getComputedStyle(i[0]);"static"===d.position&&a.warn(c),e.inherit(m,i)}})}var c="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:l}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,r,a,d,s,l,c){function m(o,i,l,m){if(i=r.extractElementByName(i,"md-bottom-sheet"),i.attr("tabindex","-1"),i.hasClass("ng-cloak")){var u="$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";c.warn(u,i[0])}l.disableBackdrop||(h=r.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),h[0].tabIndex=-1,l.clickOutsideToClose&&h.on("click",function(){r.nextTick(d.cancel,!0)}),a.inherit(h,l.parent),e.enter(h,l.parent,null));var f=new p(i,l.parent);return l.bottomSheet=f,a.inherit(f.element,l.parent),l.disableParentScroll&&(l.restoreScroll=r.disableScrollAround(f.element,l.parent)),e.enter(f.element,l.parent,h).then(function(){var e=r.findFocusTarget(i)||t.element(i[0].querySelector("button")||i[0].querySelector("a")||i[0].querySelector(r.prefixer("ng-click",!0)))||h;l.escapeToClose&&(l.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&r.nextTick(d.cancel,!0)},s.on("keyup",l.rootElementKeyupCallback),e&&e.focus())})}function u(t,n,o){var i=o.bottomSheet;return o.disableBackdrop||e.leave(h),e.leave(i.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),i.cleanup()})}function p(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function s(t){var o=t.pointer.distanceY;o<5&&(o=Math.max(-i,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(i+o)+"px,0)")}function c(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var i=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(i/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),r.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=l.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",s).on("$md.dragend",c),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",s),t.off("$md.dragend",c)}}}var h;return{themable:!0,onShow:m,onRemove:u,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture","$log"];var o=.5,i=80;return e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"],t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n)}(),function(){function e(e){return{restrict:"E",link:function(t,n){e(n)}}}function n(e,n,o,i){function r(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){if(r(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>'}function d(a,d,s){n(d),e.attach(a,d),o.expectWithoutText(d,"aria-label"),r(s)&&t.isDefined(s.ngDisabled)&&a.$watch(s.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){s.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),d.hasClass("md-no-focus")||(a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,i(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(e){d.removeClass("md-focused")}))}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}n.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"],e.$inject=["$mdTheming"],t.module("material.components.button",["material.core"]).directive("mdButton",n).directive("a",e)}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){n.addClass("_md"),e(n)}}}e.$inject=["$mdTheming"],t.module("material.components.card",["material.core"]).directive("mdCard",e)}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){function e(e,n,o,i,r,a){function d(d,s){function l(d,s,l,c){function m(e,t,n){l[e]&&d.$watch(l[e],function(e){n[e]&&s.attr(t,n[e])})}function u(e){var t=e.which||e.keyCode;t!==o.KEY_CODE.SPACE&&t!==o.KEY_CODE.ENTER||(e.preventDefault(),s.addClass("md-focused"),p(e))}function p(e){s[0].hasAttribute("disabled")||d.skipToggle||d.$apply(function(){var t=l.ngChecked?l.checked:!c.$viewValue;c.$setViewValue(t,e&&e.type),c.$render()})}function h(){s.toggleClass("md-checked",!!c.$viewValue&&!g)}function f(e){g=e!==!1,g&&s.attr("aria-checked","mixed"),s.toggleClass("md-indeterminate",g)}var g;c=c||r.fakeNgModel(),i(s),s.children().on("focus",function(){s.focus()}),r.parseAttributeBoolean(l.mdIndeterminate)&&(f(),d.$watch(l.mdIndeterminate,f)),l.ngChecked&&d.$watch(d.$eval.bind(d,l.ngChecked),function(e){c.$setViewValue(e),c.$render()}),m("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(s,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},l,[c]),d.mouseActive=!1,s.on("click",p).on("keypress",u).on("mousedown",function(){d.mouseActive=!0,a(function(){d.mouseActive=!1},100)}).on("focus",function(){d.mouseActive===!1&&s.addClass("md-focused")}).on("blur",function(){s.removeClass("md-focused")}),c.$render=h}return s.$set("tabindex",s.tabindex||"0"),s.$set("type","checkbox"),s.$set("role",s.type),{pre:function(e,t){t.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()})},post:l}}return e=e[0],{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"],t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e)}(),function(){!function(){function e(e,n,o){function r(e,t){try{t&&e.css(s(t))}catch(n){o.error(n.message)}}function a(e){var t=c(e);return d(t)}function d(t,o){o=o||!1;var i=e.PALETTES[t.palette][t.hue];return i=o?i.contrast:i.value,n.supplant("rgba({0}, {1}, {2}, {3})",[i[0],i[1],i[2],i[3]||t.opacity])}function s(e){var n={},o=e.hasOwnProperty("color");return t.forEach(e,function(e,t){var i=c(e),r=t.indexOf("background")>-1;n[t]=d(i),r&&!o&&(n.color=d(i,!0))}),n}function l(n){return t.isDefined(e.THEMES[n.split("-")[0]])}function c(n){var o=n.split("-"),i=t.isDefined(e.THEMES[o[0]]),r=i?o.splice(0,1)[0]:e.defaultTheme();return{theme:r,palette:m(o,r),hue:u(o,r),opacity:o[2]||1}}function m(t,o){var r=t.length>1&&i.indexOf(t[1])!==-1,a=t[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(r&&(a=t[0]+"-"+t.splice(1,1)),i.indexOf(a)===-1){var d=e.THEMES[o].colors[a];if(!d)throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.",{palette:a}));a=d.name}return a}function u(t,o){var i=e.THEMES[o].colors;if("hue"===t[1]){var r=parseInt(t.splice(2,1)[0],10);if(r<1||r>3)throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'",{hueNumber:r}));if(t[1]="hue-"+r,!(t[0]in i))throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'",{availableThemes:Object.keys(i).join(", "),usedTheme:t[0]}));return i[t[0]].hues[t[1]]}return t[1]||i[t[0]in i?t[0]:"primary"].hues["default"]}return i=i||Object.keys(e.PALETTES),{applyThemeColors:r,getThemeColor:a,hasTheme:l}}function n(e,n,i,r){return{restrict:"A",require:["^?mdTheme"],compile:function(a,d){function s(){var e=d.mdColors,i=e.indexOf("::")>-1,r=!!i||o.test(d.mdColors);d.mdColors=e.replace("::","");var a=t.isDefined(d.mdColorsWatch);return!i&&!r&&(!a||n.parseAttributeBoolean(d.mdColorsWatch))}var l=s();return function(n,o,a,d){var s=d[0],c={},m=function(t){"string"!=typeof t&&(t=""),a.mdColors||(a.mdColors="{}");var o=r(a.mdColors)(n);return s&&Object.keys(o).forEach(function(n){var i=o[n];e.hasTheme(i)||(o[n]=(t||s.$mdTheme)+"-"+i)}),u(o),o},u=function(e){if(!t.equals(e,c)){var n=Object.keys(c);c.background&&!n.color&&n.push("color"),n.forEach(function(e){o.css(e,"")})}c=e},p=t.noop;s&&(p=s.registerChanges(function(t){e.applyThemeColors(o,m(t))})),n.$on("$destroy",function(){p()});try{l?n.$watch(m,t.bind(this,e.applyThemeColors,o),!0):e.applyThemeColors(o,m())}catch(h){i.error(h.message)}}}}}n.$inject=["$mdColors","$mdUtil","$log","$parse"],e.$inject=["$mdTheming","$mdUtil","$log"];var o=/^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,i=null;t.module("material.components.colors",["material.core"]).directive("mdColors",n).service("$mdColors",e)}()}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o){o.addClass("_md"),e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}e.$inject=["$mdTheming"],t.module("material.components.content",["material.core"]).directive("mdContent",e)}(),function(){t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){function e(e,n,o){return{restrict:"E",link:function(i,r){r.addClass("_md"),n(r),e(function(){function e(){r.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=r[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(r)})})}}}function o(e){function o(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary md-cancel-button">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary md-confirm-button" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){var n="prompt"==this.$type;n&&this.initialValue&&(this.result=this.initialValue),this.hide=function(){e.hide(!n||this.result)},this.abort=function(){e.cancel()},this.keypress=function(n){n.keyCode===t.KEY_CODE.ENTER&&e.hide(this.result)}},controllerAs:"dialog",bindToController:!0}}function i(e,o,i,d,s,l,c,m,u,p,h){function f(e){E(e),e.contentElement&&(e.restoreContentElement=$(e))}function g(e,t,n,o){if(o){if(o.mdHtmlContent=o.htmlContent||n.htmlContent||"",o.mdTextContent=o.textContent||n.textContent||o.content||n.content||"",o.mdHtmlContent&&!p.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(o.mdHtmlContent&&o.mdTextContent)throw Error("md-dialog cannot have both `htmlContent` and `textContent`")}}function b(e,n,o,r){function a(){n[0].querySelector(".md-actions")&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")}function d(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var t=n[0].querySelectorAll(".md-actions button, md-dialog-actions button");e=t[t.length-1]}return e}if(o.focusOnOpen){var t=i.findFocusTarget(n)||e()||s;t.focus()}}t.element(l[0].body).addClass("md-dialog-is-showing");var s=n.find("md-dialog");if(s.hasClass("ng-cloak")){var c="$mdDialog: using `<md-dialog ng-cloak >` will affect the dialog opening animations.";u.warn(c,n[0])}return C(o),T(s,o),y(e,n,o),M(n,o),k(n,o).then(function(){A(n,o),a(),d()})}function v(e,n,o){function i(){return x(n,o)}function d(){t.element(l[0].body).removeClass("md-dialog-is-showing"),o.contentElement?(o.reverseContainerStretch(),o.restoreContentElement()):n.remove(),o.$destroy||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),r&&r.parentNode&&r.parentNode.removeChild(r),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?d():i().then(d)}function E(e){if(!e.theme&&(e.theme=h.defaultTheme(),e.targetEvent&&e.targetEvent.target)){var n=t.element(e.targetEvent.target);e.theme=(n.controller("mdTheme")||{}).$mdTheme||e.theme}}function $(e){function n(e){var t=e.parentNode,n=e.nextElementSibling;return function(){n?t.insertBefore(e,n):t.appendChild(e)}}var o=e.contentElement,i=null;return t.isString(o)?(o=document.querySelector(o),i=n(o)):(o=o[0]||o,i=document.contains(o)?n(o):function(){o.parentNode.removeChild(o)}),e.element=t.element(o),e.skipCompile=!0,i}function C(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var r={top:0,left:0,height:0,width:0},a=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:a?i:n,bounds:a?i[0].getBoundingClientRect():t.extend({},r,i[0]),focus:t.bind(i,i.focus)})}}function i(e,n){return t.isString(e)&&(e=l[0].querySelector(e)),t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin))}function M(n,o){var r=t.element(c),a=i.debounce(function(){w(n,o)},60),s=[],l=function(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),l())};n.on("keydown",u),m.on("keydown",u),s.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(r.on("resize",a),s.push(function(){r.off("resize",a)}),o.clickOutsideToClose){var p,h=n,f=function(e){p=e.target},g=function(e){p===h[0]&&e.target===h[0]&&(e.stopPropagation(),e.preventDefault(),l())};h.on("mousedown",f),h.on("mouseup",g),s.push(function(){h.off("mousedown",f),h.off("mouseup",g)})}o.deactivateListeners=function(){s.forEach(function(e){e()}),o.deactivateListeners=null}}function y(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"md-dialog-backdrop md-opaque"),s.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():s.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function T(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),s=e.attr("id"),l="dialogContent_"+(s||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e,s&&(l=s)),d.attr("id",l),e.attr("aria-describedby",l),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),r=document.createElement("div"),r.classList.add("md-dialog-focus-trap"),r.tabIndex=0,a=r.cloneNode(!1);var c=function(){e.focus()};r.addEventListener("focus",c),a.addEventListener("focus",c),e[0].parentNode.insertBefore(r,e[0]),e.after(a)}function A(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++)e===t[i]||_(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function w(e,t){var n="fixed"==c.getComputedStyle(l[0].body).position,o=t.backdrop?c.getComputedStyle(t.backdrop[0]):null,r=o?Math.min(l[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0,a={top:e.css("top"),height:e.css("height")};return e.css({top:(n?i.scrollTop(t.parent):0)+"px",height:r?r+"px":"100%"}),function(){e.css(a)}}function k(e,t){t.parent.append(e),t.reverseContainerStretch=w(e,t);var n=e.find("md-dialog"),o=i.dom.animator,r=o.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=o.toTransformCss(r(n,t.openFrom||t.origin)),s=o.toTransformCss("");return n.toggleClass("md-dialog-fullscreen",!!t.fullscreen),o.translate3d(n,d,s,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"md-transition-out",transitionOutClass:"md-transition-in"},d=s,s=o.toTransformCss(r(n,t.closeTo)),o.translate3d(n,d,s,a)):e(s=o.toTransformCss(r(n,t.origin)))},t.clearAnimate=function(){return delete t.clearAnimate,n.removeClass([a.transitionOutClass,a.transitionInClass].join(" ")),o.translate3d(n,s,o.toTransformCss(""),{})},!0})}function x(e,t){return t.reverseAnimate().then(function(){t.contentElement&&t.clearAnimate()})}function _(e,t){if(t.indexOf(e.nodeName)!==-1)return!0}return{hasBackdrop:!0,isolateScope:!0,onCompiling:f,onShow:b,onShowing:g,onRemove:v,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,contentElement:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}return'<div class="md-dialog-container" tabindex="-1">'+n(e)+"</div>"}}}o.$inject=["$mdDialog","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector","$mdTheming"];var r,a;return e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen","contentElement"],options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","initialValue","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o})}e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"],t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o)}(),function(){function e(e){return{restrict:"E",link:e}}e.$inject=["$mdTheming"],t.module("material.components.divider",["material.core"]).directive("mdDivider",e)}(),function(){!function(){function e(e){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(t,n){var o=t.children(),i=e.prefixer().hasAttribute(o,"ng-repeat");i?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}e.$inject=["$mdUtil"],t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function e(e,n,o,i,r,a){function d(){S.direction=S.direction||"down",S.isOpen=S.isOpen||!1,c(),n.addClass("md-animations-waiting")}function s(){var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,l)}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,l)}),h()})}function l(e){"click"==e.type&&k(e),"focusout"!=e.type||D||(D=a(function(){S.close()},100,!1)),"focusin"==e.type&&D&&(a.cancel(D),D=null)}function c(){S.currentActionIndex=-1}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),c()});var t,i;e.$watch("vm.isOpen",function(e){c(),t&&i||(t=x(),i=_()),e?p():h();var r=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),i.attr("aria-hidden",!e),o.setClass(n,r,a)})}function u(){n[0].scrollHeight>0?o.addClass(n,"_md-animations-ready").then(function(){n.removeClass("md-animations-waiting")}):N<10&&(a(u,100),N+=1)}function p(){n.on("keydown",g),i.nextTick(function(){t.element(document).on("click touchend",f)})}function h(){n.off("keydown",g),t.element(document).off("click touchend",f)}function f(e){if(e.target){var t=i.getClosest(e.target,"md-fab-trigger"),n=i.getClosest(e.target,"md-fab-actions");t||n||S.close()}}function g(e){switch(e.which){case r.KEY_CODE.ESCAPE:return S.close(),e.preventDefault(),!1;case r.KEY_CODE.LEFT_ARROW:return C(e),!1;case r.KEY_CODE.UP_ARROW:return M(e),!1;case r.KEY_CODE.RIGHT_ARROW:return y(e),!1;case r.KEY_CODE.DOWN_ARROW:return T(e),!1}}function b(e){E(e,-1)}function v(e){E(e,1)}function E(e,n){var o=$();S.currentActionIndex=S.currentActionIndex+n,S.currentActionIndex=Math.min(o.length-1,S.currentActionIndex),S.currentActionIndex=Math.max(0,S.currentActionIndex);var i=t.element(o[S.currentActionIndex]).children()[0];t.element(i).attr("tabindex",0),i.focus(),e.preventDefault(),e.stopImmediatePropagation()}function $(){var e=_()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),e}function C(e){"left"===S.direction?v(e):b(e)}function M(e){"down"===S.direction?b(e):v(e)}function y(e){"left"===S.direction?b(e):v(e)}function T(e){"up"===S.direction?b(e):v(e)}function A(e){return i.getClosest(e,"md-fab-trigger")}function w(e){return i.getClosest(e,"md-fab-actions")}function k(e){A(e.target)&&S.toggle(),w(e.target)&&S.close()}function x(){return n.find("md-fab-trigger")}function _(){return n.find("md-fab-actions")}var S=this;S.open=function(){e.$evalAsync("vm.isOpen = true")},S.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus()},S.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen")},d(),s(),m();var N=0;u();var D}e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"],t.module("material.components.fabShared",["material.core"]).controller("MdFabController",e)}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="_md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(n){function o(e){n(e,r,!1)}function i(n){if(!n.hasClass("md-animations-waiting")||n.hasClass("_md-animations-ready")){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=r.length-t+s}),a.style.zIndex=s+r.length+1,i.isOpen||t.forEach(r,function(e,t){var n,o,r=e.style,d=(a.clientHeight-e.clientHeight)/2,s=(a.clientWidth-e.clientWidth)/2;switch(i.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+s,o="X";break;case"right":n=-(e.scrollWidth*(t+1)+s),o="X"}var l="translate"+o+"("+n+"px)";r.transform=r.webkitTransform=l})}}return{addClass:function(e,t,n){e.hasClass("md-fling")?(i(e),o(n)):n()},removeClass:function(e,t,n){i(e),o(n)}}}function i(n){function o(e){n(e,r,!1)}function i(n){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style,o=t*a;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?o:r.length-o)+"ms",n.zIndex=r.length-t+s})}var a=65;return{addClass:function(e,t,n){i(e),o(n)},removeClass:function(e,t,n){i(e),o(n)}}}o.$inject=["$timeout"],i.$inject=["$timeout"];var r=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",i).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",i)}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(){function n(n,o,i){if(o){var r=n[0],a=n.controller("mdFabToolbar"),d=r.querySelector(".md-fab-toolbar-background"),s=r.querySelector("md-fab-trigger button"),l=r.querySelector("md-toolbar"),c=r.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(s&&d){var u=e.getComputedStyle(s).getPropertyValue("background-color"),p=r.offsetWidth,h=(r.offsetHeight,2*(p/s.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=p+"px",a.isOpen?(l.style.pointerEvents="inherit",d.style.width=s.offsetWidth+"px",d.style.height=s.offsetHeight+"px",d.style.transform="scale("+h+")",d.style.transitionDelay="0ms",c&&(c.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(l.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",c&&(c.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){function e(e,o,i,r){function a(n,a,d,s){function l(){for(var e in o.MEDIA)r(e),r.getQuery(o.MEDIA[e]).addListener(y);return r.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function c(){s.layoutDelegate=t.noop,T();for(var e in o.MEDIA)r.getQuery(o.MEDIA[e]).removeListener(y)}function m(e){null==e?s.invalidateLayout():r(e)&&s.invalidateLayout()}function u(e){var o=g(),r={tileSpans:b(o),colCount:v(),rowMode:C(),rowHeight:$(),gutter:E()};if(e||!t.equals(r,A)){var d=i(r.colCount,r.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(r.colCount,n,r.gutter,r.rowMode,r.rowHeight)},tiles:e.map(function(e,i){return{element:t.element(o[i]),style:h(e.position,e.spans,r.colCount,n,r.gutter,r.rowMode,r.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),A=r}}function p(e){return w+e+k}function h(e,t,n,o,i,r,a){var d=1/n*100,s=(n-1)/n,l=x({share:d,gutterShare:s,gutter:i}),c={left:_({unit:l,offset:e.col,gutter:i}),width:S({unit:l,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""};switch(r){case"fixed":c.top=_({unit:a,offset:e.row,gutter:i}),c.height=S({unit:a,span:t.row,gutter:i});break;case"ratio":var m=d/a,u=x({share:m,gutterShare:s,gutter:i});c.paddingTop=S({unit:u,span:t.row,gutter:i}),c.marginTop=_({unit:u,offset:e.row,gutter:i});break;case"fit":var p=(o-1)/o,m=1/o*100,u=x({share:m,gutterShare:p,gutter:i});c.top=_({unit:u,offset:e.row,gutter:i}),c.height=S({unit:u,span:t.row,gutter:i})}return c}function f(e,t,n,o,i){var r={};switch(o){case"fixed":r.height=S({unit:i,span:t,gutter:n}),r.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,s=d*(1/i),l=x({share:s,gutterShare:a,gutter:n});r.height="",r.paddingBottom=S({unit:l,span:t,gutter:n});break;case"fit":}return r}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(r.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(r.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function v(){var e=parseInt(r.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
return e}function E(){return M(r.getResponsiveAttribute(d,"md-gutter")||1)}function $(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";switch(C()){case"fixed":return M(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function C(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";return"fit"==e?"fit":e.indexOf(":")!==-1?"ratio":"fixed"}function M(e){return/\D$/.test(e)?e:e+"px"}a.addClass("_md"),a.attr("role","list"),s.layoutDelegate=u;var y=t.bind(s,s.invalidateLayout),T=l();n.$on("$destroy",c);var A,w=e.startSymbol(),k=e.endSymbol(),x=e(p("share")+"% - ("+p("gutter")+" * "+p("gutterShare")+")"),_=e("calc(("+p("unit")+" + "+p("gutter")+") * "+p("offset")+")"),S=e("calc(("+p("unit")+") * "+p("span")+" + ("+p("span")+" - 1) * "+p("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,s,l,c;return s=e.time(function(){a=i(t,n)}),o={layoutInfo:function(){return a},map:function(t){return l=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return c=e.time(function(){var e=t||r;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:s,mapTime:l,reflowTime:c,totalTime:s+l+c}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function i(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,c=0;c-a<t.col;)d>=e?o():(a=l.indexOf(0,d),a!==-1&&(c=r(a+1))!==-1?d=c+1:(a=c=0,o()));return i(a,t.col,t.row),d=a+t.col,{col:a,row:s}}function o(){d=0,s++,i(0,e,-1)}function i(e,t,n){for(var o=e;o<e+t;o++)l[o]=Math.max(l[o]+n,0)}function r(e){var t;for(t=e;t<l.length;t++)if(0!==l[t])return t;if(t===l.length)return t}function a(){for(var t=[],n=0;n<e;n++)t.push(0);return t}var d=0,s=0,l=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:s+Math.max.apply(Math,l)}}var r=o;return n.animateWith=function(e){r=t.isFunction(e)?e:o},n}function i(e){function n(n,o,i,r){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],i,t.bind(r,r.invalidateLayout));r.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),r.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&r.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function r(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}n.$inject=["$mdUtil"],o.$inject=["$mdUtil"],e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],i.$inject=["$mdMedia"],t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",i).directive("mdGridTileFooter",r).directive("mdGridTileHeader",r).factory("$mdGridLayout",o),n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}}}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function n(e,t){function n(t){var n=t[0].querySelector(r),o=t[0].querySelector(a);return n&&t.addClass("md-icon-left"),o&&t.addClass("md-icon-right"),function(t,n){e(n)}}function o(e,n,o,i){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},r.setInvalid=function(e){e?i.addClass(n,"md-input-invalid"):i.removeClass(n,"md-input-invalid")},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}o.$inject=["$scope","$element","$attrs","$animate"];var i=["INPUT","TEXTAREA","SELECT","MD-SELECT"],r=i.reduce(function(e,t){return e.concat(["md-icon ~ "+t,".md-icon ~ "+t])},[]).join(","),a=i.reduce(function(e,t){return e.concat([t+" ~ md-icon",t+" ~ .md-icon"])},[]).join(",");return{restrict:"E",compile:n,controller:o}}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){!o||n.mdNoFloat||t.hasClass("md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function i(e,n,o,i,r){function a(a,d,s,l){function c(e){return h.setHasValue(!g.$isEmpty(e)),e}function m(){h.label&&s.$observe("required",function(e){h.label.toggleClass("md-required",e&&!E)})}function u(){h.setHasValue(d.val().length>0||(d[0].validity||{}).badInput)}function p(){function o(){d.attr("rows",1).css("height","auto").addClass("md-no-flex");var e=l();if(!$){var t=d[0].style.padding||"";$=d.css("padding",0).prop("offsetHeight"),d[0].style.padding=t}if(b&&$&&(e=Math.max(e,$*b)),v&&$){var n=$*v;n<e?(d.attr("md-no-autogrow",""),e=n):d.removeAttr("md-no-autogrow")}$&&d.attr("rows",Math.round(e/$)),d.css("height",e+"px").removeClass("md-no-flex")}function l(){var e=C.offsetHeight,t=C.scrollHeight-e;return e+Math.max(t,0)}function c(t){return e.nextTick(o),t}function m(){if(p&&(p=!1,t.element(n).off("resize",o),E&&E(),d.attr("md-no-autogrow","").off("input",o),f)){var e=g.$formatters.indexOf(c);e>-1&&g.$formatters.splice(e,1)}}function u(){function n(e){e.preventDefault(),u=!0,p=e.clientY,f=parseFloat(d.css("height"))||d.prop("offsetHeight")}function o(e){u&&(e.preventDefault(),m(),g.addClass("md-input-resized"))}function i(t){u&&d.css("height",f+(t.pointer.y-p)-e.scrollTop()+"px")}function l(e){u&&(u=!1,g.removeClass("md-input-resized"))}if(!s.hasOwnProperty("mdNoResize")){var c=t.element('<div class="md-resize-handle"></div>'),u=!1,p=null,f=0,g=h.element,b=r.register(c,"drag",{horizontal:!1});d.wrap('<div class="md-resize-wrapper">').after(c),c.on("mousedown",n),g.on("$md.dragstart",o).on("$md.drag",i).on("$md.dragend",l),a.$on("$destroy",function(){c.off("mousedown",n).remove(),g.off("$md.dragstart",o).off("$md.drag",i).off("$md.dragend",l),b(),c=null,g=null,b=null})}}var p=!s.hasOwnProperty("mdNoAutogrow");if(u(),p){var b=s.hasOwnProperty("rows")?parseInt(s.rows):NaN,v=s.hasOwnProperty("maxRows")?parseInt(s.maxRows):NaN,E=a.$on("md-resize-textarea",o),$=null,C=d[0];if(i(function(){e.nextTick(o)},10,!1),d.on("input",o),f&&g.$formatters.push(c),b||d.attr("rows",1),t.element(n).on("resize",o),a.$on("$destroy",m),s.hasOwnProperty("mdDetectHidden")){var M=function(){var e=!1;return function(){var t=0===C.offsetHeight;t===!1&&e===!0&&o(),e=t}}();a.$watch(function(){return e.nextTick(M,!1),!0})}}}var h=l[0],f=!!l[1],g=l[1]||e.fakeNgModel(),b=l[2],v=t.isDefined(s.readonly),E=e.parseAttributeBoolean(s.mdNoAsterisk),$=d[0].tagName.toLowerCase();if(h){if("hidden"===s.type)return void d.attr("aria-hidden","true");if(h.input){if(h.input[0].contains(d[0]))return;throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!")}h.input=d,m();var C=t.element('<div class="md-errors-spacer">');d.after(C),h.label||o.expect(d,"aria-label",s.placeholder),d.addClass("md-input"),d.attr("id")||d.attr("id","input_"+e.nextUid()),"input"===$&&"number"===s.type&&s.min&&s.max&&!s.step?d.attr("step","any"):"textarea"===$&&p(),f||u();var M=h.isErrorGetter||function(){return g.$invalid&&(g.$touched||b&&b.$submitted)};a.$watch(M,h.setInvalid),s.ngValue&&s.$observe("value",u),g.$parsers.push(c),g.$formatters.push(c),d.on("input",u),v||d.on("focus",function(t){e.nextTick(function(){h.setFocused(!0)})}).on("blur",function(t){e.nextTick(function(){h.setFocused(!1),u()})}),a.$on("$destroy",function(){h.setFocused(!1),h.setHasValue(!1),h.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel","?^form"],link:a}}function r(e,n){function o(o,i,r,a){function d(e){return l.parent?(l.text(String(i.val()||e||"").length+" / "+s),e):e}var s,l,c,m=a[0],u=a[1];n.nextTick(function(){c=t.element(u.element[0].querySelector(".md-errors-spacer")),l=t.element('<div class="md-char-counter">'),c.append(l),r.$set("ngTrim","false"),m.$formatters.push(d),m.$viewChangeListeners.push(d),i.on("input keydown keyup",function(){d()}),o.$watch(r.mdMaxlength,function(n){s=n,t.isNumber(n)&&n>0?(l.parent().length||e.enter(l,c),d()):e.leave(l)}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(s)||s<0||(e||i.val()||n||"").length<=s}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o}}function a(e){function n(n,o,i,r){if(r){var a=r.element.find("label"),d=r.element.attr("md-no-float");if(a&&a.length||""===d||n.$eval(d))return void r.setHasPlaceholder(!0);if("MD-SELECT"!=o[0].nodeName){var s=t.element('<label ng-click="delegateClick()" tabindex="-1">'+i.placeholder+"</label>");i.$set("placeholder",null),r.element.addClass("md-icon-float").prepend(s),e(s)(n)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:{pre:n}}}function d(e){function t(t,n,o){function i(){a=!0,e(function(){n[0].select(),a=!1},1,!1)}function r(e){a&&e.preventDefault()}if("INPUT"===n[0].nodeName||"TEXTAREA"===n[0].nodeName){var a=!1;n.on("focus",i).on("mouseup",r),t.$on("$destroy",function(){n.off("focus",i).off("mouseup",r)})}}return{restrict:"A",link:t}}function s(){function e(e,n,o,i){i&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1))}function t(e){return y.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function l(e){function t(t){function n(){for(var e=t[0];e=e.parentNode;)if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return!0;return!1}function o(t){return!!e.getClosest(t,"md-input-container")}function i(e){e.toggleClass("md-input-message-animation",!0)}if(o(t))i(t);else if(n())return function(e,n){o(n)&&i(t)}}return{restrict:"EA",compile:t,priority:100}}function c(e,t,n){return E(e,t,n),{addClass:function(e,t,n){p(e,n)}}}function m(e,t,n){return E(e,t,n),{enter:function(e,t){p(e,t)},leave:function(e,t){h(e,t)},addClass:function(e,t,n){"ng-hide"==t?h(e,n):n()},removeClass:function(e,t,n){"ng-hide"==t?p(e,n):n()}}}function u(e,t,n){return E(e,t,n),{enter:function(e,t){var n=f(e);n.start().done(t)},leave:function(e,t){var n=g(e);n.start().done(t)}}}function p(e,n){var o,i=[],r=v(e);t.forEach(r.children(),function(e){o=f(t.element(e)),i.push(o.start())}),$.all(i,n)}function h(e,n){var o,i=[],r=v(e);t.forEach(r.children(),function(e){o=g(t.element(e)),i.push(o.start())}),$.all(i,n)}function f(t){var n=parseInt(e.getComputedStyle(t[0]).height),o=parseInt(e.getComputedStyle(t[0]).marginTop),i=v(t),r=b(t),a=o>-n;return a||i.hasClass("md-auto-hide")&&!r.hasClass("md-input-invalid")?C(t,{}):C(t,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function g(t){var n=t[0].offsetHeight,o=e.getComputedStyle(t[0]);return 0==o.opacity?C(t,{}):C(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-n+"px"},duration:.3})}function b(e){var t=e.controller("mdInputContainer");return t.element}function v(e){return e.hasClass("md-input-message-animation")?t.element(M.getClosest(e,function(e){return e.classList.contains("md-input-messages-animation")})):t.element(e[0].querySelector(".md-input-messages-animation"))}function E(e,t,n){$=e,C=t,M=n}n.$inject=["$mdTheming","$parse"],i.$inject=["$mdUtil","$window","$mdAria","$timeout","$mdGesture"],r.$inject=["$animate","$mdUtil"],a.$inject=["$compile"],l.$inject=["$mdUtil"],d.$inject=["$timeout"],c.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],m.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],u.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",i).directive("textarea",i).directive("mdMaxlength",r).directive("placeholder",a).directive("ngMessages",s).directive("ngMessage",l).directive("ngMessageExp",l).directive("mdSelectOnFocus",d).animation(".md-input-invalid",c).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u).service("mdInputInvalidAnimation",c).service("mdInputMessagesAnimation",m).service("mdInputMessageAnimation",u);var $,C,M,y=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,i){var r=["md-checkbox","md-switch","md-menu"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function s(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent)}}function l(){var e=t.element(E),n=e.parent().hasClass("md-secondary-container")||E.parentNode.firstElementChild!==E,o="left";n&&(o="right"),e.attr("md-position-mode")||e.attr("md-position-mode",o+" target");var i=e.children().eq(0);g(i[0])||i.attr("ng-click","$mdOpenMenu($event)"),i.attr("aria-label")||i.attr("aria-label","Open List Menu")}function c(e){if("div"==e)C=t.element('<div class="md-no-style md-list-item-inner">'),C.append(a.contents()),a.addClass("md-proxy-focus");else{C=t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');var n=t.element('<md-button class="md-no-style"></md-button>');n[0].setAttribute("aria-label",a[0].textContent),p(a[0],n[0]),a.hasClass("md-no-focus")&&n.addClass("md-no-focus"),C.prepend(n),C.children().eq(1).append(a.contents()),a.addClass("_md-button-wrap")}a[0].setAttribute("tabindex","-1"),a.append(C)}function m(){var e=t.element('<div class="md-secondary-container">');t.forEach($,function(t){u(t,e)}),C.append(e)}function u(n,o){if(n&&!f(n)&&n.hasAttribute("ng-click")){e.expect(n,"aria-label");var i=t.element('<md-button class="md-secondary md-icon-button">');p(n,i[0],["ng-if","ng-hide","ng-show"]),n.setAttribute("tabindex","-1"),i.append(n),n=i[0]}n&&(!g(n)||!d.ngClick&&h(n))&&t.element(n).removeClass("md-secondary"),a.addClass("md-with-secondary"),o.append(n)}function p(e,n,i){var r=o.prefixer(["ng-if","ng-click","ng-dblclick","aria-label","ng-disabled","ui-sref","href","ng-href","target","ng-attr-ui-sref","ui-sref-opts"]);i&&(r=r.concat(o.prefixer(i))),t.forEach(r,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function h(e){return r.indexOf(e.nodeName.toLowerCase())!=-1}function f(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function g(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===d.$normalize(t[n].name))return!0;return!1}function b(e,a,d,s){function l(){p&&p.children&&!b&&t.forEach(r,function(e){t.forEach(p.querySelectorAll(e+":not(.md-secondary)"),function(e){u.push(e)})})}function c(){(1==u.length||b)&&(a.addClass("md-clickable"),b||s.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))))}function m(e){var t=["md-slider"];if(!e.path)return t.indexOf(e.target.tagName.toLowerCase())!==-1;for(var n=e.path.indexOf(a.children()[0]),o=0;o<n;o++)if(t.indexOf(e.path[o].tagName.toLowerCase())!==-1)return!0}a.addClass("_md");var u=[],p=a[0].firstElementChild,h=a.hasClass("_md-button-wrap"),f=h?p.firstElementChild:p,b=f&&g(f);l(),c(),a.hasClass("md-proxy-focus")&&u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})});var v=function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&f&&(f.click(),e.preventDefault(),e.stopPropagation())}};b||u.length||f&&f.addEventListener("keypress",v),a.off("click"),a.off("keypress"),1==u.length&&f&&a.children().eq(0).on("click",function(e){if(!m(e)){var n=o.getClosest(e.target,"BUTTON");!n&&f.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||("MD-MENU"===n.nodeName&&(n=n.children[0]),t.element(n).triggerHandler("click"))})}}),e.$on("$destroy",function(){f&&f.removeEventListener("keypress",v)})}var v,E,$=a[0].querySelectorAll(".md-secondary"),C=a;if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngDblclick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)c("button");else{for(var M,y=0;M=r[y];++y)if(E=a[0].querySelector(M)){v=!0;break}v?c("div"):a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)")||a.addClass("md-no-proxy")}return m(),s(),v&&"MD-MENU"===E.nodeName&&l(),b}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var i=this;i.attachRipple=o}o.$inject=["$scope","$element","$mdListInkRipple"],e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n)}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.icon","material.components.menu"])}(),function(){function e(e,n){return{restrict:"E",transclude:!0,controller:o,controllerAs:"ctrl",bindToController:!0,scope:{mdSelectedNavItem:"=?",navBarAriaLabel:"@?"},template:'<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-blur="ctrl.onBlur()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar></md-nav-ink-bar></div>',link:function(o,i,r,a){n(i),a.navBarAriaLabel||e.expectAsync(i,"aria-label",t.noop)}}}function o(e,t,n,o){this._$timeout=n,this._$scope=t,this._$mdConstant=o,this.mdSelectedNavItem,this.navBarAriaLabel,this._navBarEl=e[0],this._inkbar;var i=this,r=this._$scope.$watch(function(){return i._navBarEl.querySelectorAll("._md-nav-button").length},function(e){e>0&&(i._initTabs(),r())})}function i(e){return{restrict:"E",require:["mdNavItem","^mdNavBar"],controller:r,bindToController:!0,controllerAs:"ctrl",replace:!0,transclude:!0,template:'<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}"><md-button ng-if="ctrl.mdNavSref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ui-sref="{{ctrl.mdNavSref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavHref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-href="{{ctrl.mdNavHref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavClick" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-click="ctrl.mdNavClick()"><span ng-transclude class="_md-nav-button-text"></span></md-button></li>',scope:{mdNavClick:"&?",mdNavHref:"@?",mdNavSref:"@?",name:"@"},link:function(n,o,i,r){var a=r[0],d=r[1];e(function(){a.name||(a.name=t.element(o[0].querySelector("._md-nav-button-text")).text().trim());var e=t.element(o[0].querySelector("._md-nav-button"));e.on("click",function(){d.mdSelectedNavItem=a.name,n.$apply()})})}}}function r(e){this._$element=e,this.mdNavClick,this.mdNavHref,this.name,this._selected=!1,this._focused=!1;var t=!!e.attr("md-nav-click"),n=!!e.attr("md-nav-href"),o=!!e.attr("md-nav-sref");if((t?1:0)+(n?1:0)+(o?1:0)>1)throw Error("Must specify exactly one of md-nav-click, md-nav-href, md-nav-sref for nav-item directive")}o.$inject=["$element","$scope","$timeout","$mdConstant"],i.$inject=["$$rAF"],r.$inject=["$element"],e.$inject=["$mdAria","$mdTheming"],t.module("material.components.navBar",["material.core"]).controller("MdNavBarController",o).directive("mdNavBar",e).controller("MdNavItemController",r).directive("mdNavItem",i),o.prototype._initTabs=function(){this._inkbar=t.element(this._navBarEl.getElementsByTagName("md-nav-ink-bar")[0]);var e=this;this._$timeout(function(){e._updateTabs(e.mdSelectedNavItem,n)}),this._$scope.$watch("ctrl.mdSelectedNavItem",function(t,n){e._$timeout(function(){e._updateTabs(t,n)})})},o.prototype._updateTabs=function(e,t){var n=this,o=this._getTabs(),i=-1,r=-1,a=this._getTabByName(e),d=this._getTabByName(t);d&&(d.setSelected(!1),i=o.indexOf(d)),a&&(a.setSelected(!0),r=o.indexOf(a)),this._$timeout(function(){n._updateInkBarStyles(a,r,i)})},o.prototype._updateInkBarStyles=function(e,t,n){if(this._inkbar.toggleClass("_md-left",t<n).toggleClass("_md-right",t>n),this._inkbar.css({display:t<0?"none":""}),e){var o=e.getButtonEl(),i=o.offsetLeft;this._inkbar.css({left:i+"px",width:o.offsetWidth+"px"})}},o.prototype._getTabs=function(){var e=Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item"));return e.map(function(e){return t.element(e).controller("mdNavItem")})},o.prototype._getTabByName=function(e){return this._findTab(function(t){return t.getName()==e})},o.prototype._getSelectedTab=function(){return this._findTab(function(e){return e.isSelected()})},o.prototype.getFocusedTab=function(){return this._findTab(function(e){return e.hasFocus()})},o.prototype._findTab=function(e){for(var t=this._getTabs(),n=0;n<t.length;n++)if(e(t[n]))return t[n];return null},o.prototype.onFocus=function(){var e=this._getSelectedTab();e&&e.setFocused(!0)},o.prototype.onBlur=function(){var e=this.getFocusedTab();e&&e.setFocused(!1)},o.prototype._moveFocus=function(e,t){e.setFocused(!1),t.setFocused(!0)},o.prototype.onKeydown=function(e){var t=this._$mdConstant.KEY_CODE,n=this._getTabs(),o=this.getFocusedTab();if(o){var i=n.indexOf(o);switch(e.keyCode){case t.UP_ARROW:case t.LEFT_ARROW:i>0&&this._moveFocus(o,n[i-1]);break;case t.DOWN_ARROW:case t.RIGHT_ARROW:i<n.length-1&&this._moveFocus(o,n[i+1]);break;case t.SPACE:case t.ENTER:this._$timeout(function(){o.getButtonEl().click()})}}},r.prototype.getNgClassMap=function(){return{"md-active":this._selected,"md-primary":this._selected,"md-unselected":!this._selected,"md-focused":this._focused}},r.prototype.getName=function(){return this.name},r.prototype.getButtonEl=function(){return this._$element[0].querySelector("._md-nav-button")},r.prototype.setSelected=function(e){this._selected=e},r.prototype.isSelected=function(){return this._selected},r.prototype.setFocused=function(e){this._focused=e},r.prototype.hasFocus=function(){return this._focused}}(),function(){function e(e,n,o,a){this._defaultConfigOptions={bindToController:!0,clickOutsideToClose:!1,disableParentScroll:!1,escapeToClose:!1,focusOnOpen:!0,fullscreen:!1,hasBackdrop:!1,propagateContainerEvents:!1,transformTemplate:t.bind(this,this._wrapTemplate),trapFocus:!1,zIndex:d},this._config={},this._$rootElement=e,this._$rootScope=n,this._$injector=o,this._$window=a,this._trackedPanels={},this.animation=r.animation,this.xPosition=i.xPosition,this.yPosition=i.yPosition}function o(e,t){this._$q=t.get("$q"),this._$mdCompiler=t.get("$mdCompiler"),this._$mdConstant=t.get("$mdConstant"),this._$mdUtil=t.get("$mdUtil"),this._$rootScope=t.get("$rootScope"),this._$animate=t.get("$animate"),this._$mdPanel=t.get("$mdPanel"),this._$log=t.get("$log"),this._$window=t.get("$window"),this._$$rAF=t.get("$$rAF"),this.id=e.id,this.config=e,this.panelContainer,this.panelEl,this.isAttached=!1,this._removeListeners=[],this._topFocusTrap,this._bottomFocusTrap,this._backdropRef,this._restoreScroll=null}function i(e){this._$window=e.get("$window"),this._isRTL="rtl"===e.get("$mdUtil").bidi(),this._absolute=!1,this._relativeToEl,this._top="",this._bottom="",this._left="",this._right="",this._translateX=[],this._translateY=[],this._positions=[],this._actualPosition}function r(e){this._$mdUtil=e.get("$mdUtil"),this._openFrom,this._closeTo,this._animationClass=""}function a(e){var n=t.isString(e)?document.querySelector(e):e;return t.element(n)}e.$inject=["$rootElement","$rootScope","$injector","$window"],t.module("material.components.panel",["material.core","material.components.backdrop"]).service("$mdPanel",e);var d=80,s="_md-panel-hidden",l=t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');e.prototype.create=function(e){if(e=e||{},t.isDefined(e.id)&&this._trackedPanels[e.id])return this._trackedPanels[e.id];this._config={id:e.id||"panel_"+this._$injector.get("$mdUtil").nextUid(),scope:this._$rootScope.$new(!0),attachTo:this._$rootElement},t.extend(this._config,this._defaultConfigOptions,e);var n=new o(this._config,this._$injector);return this._trackedPanels[e.id]=n,n},e.prototype.open=function(e){var t=this.create(e);return t.open().then(function(){return t})},e.prototype.newPanelPosition=function(){return new i(this._$injector)},e.prototype.newPanelAnimation=function(){return new r(this._$injector)},e.prototype._wrapTemplate=function(e){var t=e||"";return'<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">'+t+"</div></div>"},o.prototype.open=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.show,e);e.attach().then(i).then(o)["catch"](n)})},o.prototype.close=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.detach,e);e.hide().then(i).then(o)["catch"](n)})},o.prototype.attach=function(){if(this.isAttached&&this.panelEl)return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onDomAdded||t.noop,a=function(t){return e.isAttached=!0,e._addEventListeners(),t};e._$q.all([e._createBackdrop(),e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o)})},o.prototype.detach=function(){if(!this.isAttached)return this._$q.when(this);var e=this,n=e.config.onDomRemoved||t.noop,o=function(){return e._removeEventListeners(),e._topFocusTrap&&e._topFocusTrap.parentNode&&e._topFocusTrap.parentNode.removeChild(e._topFocusTrap),e._bottomFocusTrap&&e._bottomFocusTrap.parentNode&&e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap),e.panelContainer.remove(),e.isAttached=!1,e._$q.when(e)};return this._restoreScroll&&(this._restoreScroll(),this._restoreScroll=null),this._$q(function(t,i){var r=e._done(t,e);e._$q.all([o(),!e._backdropRef||e._backdropRef.detach()]).then(n).then(r)["catch"](i)})},o.prototype.destroy=function(){this.config.scope.$destroy(),this.config.locals=null},o.prototype.show=function(){if(!this.panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(!this.panelContainer.hasClass(s))return this._$q.when(this);var e=this,n=function(){return e.panelContainer.removeClass(s),e._animateOpen()};return this._$q(function(o,i){var r=e._done(o,e),a=e.config.onOpenComplete||t.noop;e._$q.all([e._backdropRef?e._backdropRef.show():e,n().then(function(){e._focusOnOpen()},i)]).then(a).then(r)["catch"](i)})},o.prototype.hide=function(){if(!this.panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(this.panelContainer.hasClass(s))return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onRemoving||t.noop,d=function(){var t=e.config.origin;t&&a(t).focus()},l=function(){e.panelContainer.addClass(s)};e._$q.all([e._backdropRef?e._backdropRef.hide():e,e._animateClose().then(r).then(l).then(d)["catch"](o)]).then(i,o)})},o.prototype.addClass=function(e,t){if(this._$log.warn("The addClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");t||this.panelContainer.hasClass(e)?t&&!this.panelEl.hasClass(e)&&this.panelEl.addClass(e):this.panelContainer.addClass(e)},o.prototype.removeClass=function(e,t){if(this._$log.warn("The removeClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");!t&&this.panelContainer.hasClass(e)?this.panelContainer.removeClass(e):t&&this.panelEl.hasClass(e)&&this.panelEl.removeClass(e)},o.prototype.toggleClass=function(e,t){if(this._$log.warn("The toggleClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");t?this.panelEl.toggleClass(e):this.panelContainer.toggleClass(e)},o.prototype._createPanel=function(){var e=this;return this._$q(function(n,o){e.config.locals||(e.config.locals={}),e.config.locals.mdPanelRef=e,e._$mdCompiler.compile(e.config).then(function(i){e.panelContainer=i.link(e.config.scope),a(e.config.attachTo).append(e.panelContainer),e.config.disableParentScroll&&(e._restoreScroll=e._$mdUtil.disableScrollAround(null,e.panelContainer,{disableScrollMask:!0})),e.panelEl=t.element(e.panelContainer[0].querySelector(".md-panel")),e.config.panelClass&&e.panelEl.addClass(e.config.panelClass),e.config.propagateContainerEvents&&e.panelContainer.css("pointer-events","none"),e._$animate.pin&&e._$animate.pin(e.panelContainer,a(e.config.attachTo)),e._configureTrapFocus(),e._addStyles().then(function(){n(e)},o)},o)})},o.prototype._addStyles=function(){var e=this;return this._$q(function(t){e.panelContainer.css("z-index",e.config.zIndex),e.panelEl.css("z-index",e.config.zIndex+1);var n=function(){e.panelEl.css("left",""),e.panelContainer.addClass(s),t(e)};if(e.config.fullscreen)return e.panelEl.addClass("_md-panel-fullscreen"),void n();var o=e.config.position;return o?void e._$rootScope.$$postDigest(function(){e._updatePosition(!0),t(e)}):void n()})},o.prototype.updatePosition=function(e){if(!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this.config.position=e,this._updatePosition()},o.prototype._updatePosition=function(e){var t=this.config.position;if(t){t._setPanelPosition(this.panelEl),e&&this.panelContainer.addClass(s),this.panelEl.css(i.absPosition.TOP,t.getTop()),this.panelEl.css(i.absPosition.BOTTOM,t.getBottom()),this.panelEl.css(i.absPosition.LEFT,t.getLeft()),this.panelEl.css(i.absPosition.RIGHT,t.getRight());var n=this._$mdConstant.CSS.TRANSFORM;this.panelEl.css(n,t.getTransform())}},o.prototype._focusOnOpen=function(){if(this.config.focusOnOpen){var e=this;this._$rootScope.$$postDigest(function(){var t=e._$mdUtil.findFocusTarget(e.panelEl)||e.panelEl;t.focus()})}},o.prototype._createBackdrop=function(){if(this.config.hasBackdrop){if(!this._backdropRef){var e=this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({open:"_md-opaque-enter",close:"_md-opaque-leave"}),t={animation:e,attachTo:this.config.attachTo,focusOnOpen:!1,panelClass:"_md-panel-backdrop",zIndex:this.config.zIndex-1};this._backdropRef=this._$mdPanel.create(t)}if(!this._backdropRef.isAttached)return this._backdropRef.attach()}},o.prototype._addEventListeners=function(){this._configureEscapeToClose(),this._configureClickOutsideToClose(),
this._configureScrollListener()},o.prototype._removeEventListeners=function(){this._removeListeners&&this._removeListeners.forEach(function(e){e()}),this._removeListeners=[]},o.prototype._configureEscapeToClose=function(){if(this.config.escapeToClose){var e=a(this.config.attachTo),t=this,n=function(e){e.keyCode===t._$mdConstant.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),t.close())};this.panelContainer.on("keydown",n),e.on("keydown",n),this._removeListeners.push(function(){t.panelContainer.off("keydown",n),e.off("keydown",n)})}},o.prototype._configureClickOutsideToClose=function(){if(this.config.clickOutsideToClose){var e,t=this.panelContainer,n=function(t){e=t.target},o=this,i=function(n){e===t[0]&&n.target===t[0]&&(n.stopPropagation(),n.preventDefault(),o.close())};t.on("mousedown",n),t.on("mouseup",i),this._removeListeners.push(function(){t.off("mousedown",n),t.off("mouseup",i)})}},o.prototype._configureScrollListener=function(){var e=t.bind(this,this._updatePosition),n=this._$$rAF.throttle(e),o=this,i=function(){o.config.disableParentScroll||n()};this._$window.addEventListener("scroll",i,!0),this._removeListeners.push(function(){o._$window.removeEventListener("scroll",i,!0)})},o.prototype._configureTrapFocus=function(){if(this.panelEl.attr("tabIndex","-1"),this.config.trapFocus){var e=this.panelEl;this._topFocusTrap=l.clone()[0],this._bottomFocusTrap=l.clone()[0];var t=function(){e.focus()};this._topFocusTrap.addEventListener("focus",t),this._bottomFocusTrap.addEventListener("focus",t),this._removeListeners.push(this._simpleBind(function(){this._topFocusTrap.removeEventListener("focus",t),this._bottomFocusTrap.removeEventListener("focus",t)},this)),e[0].parentNode.insertBefore(this._topFocusTrap,e[0]),e.after(this._bottomFocusTrap)}},o.prototype._animateOpen=function(){this.panelContainer.addClass("md-panel-is-showing");var e=this.config.animation;if(!e)return this.panelContainer.addClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=t._done(n,t),i=function(){t._$log.warn("MdPanel Animations failed. Showing panel without animating."),o()};e.animateOpen(t.panelEl).then(o,i)})},o.prototype._animateClose=function(){var e=this.config.animation;if(!e)return this.panelContainer.removeClass("md-panel-is-showing"),this.panelContainer.removeClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=function(){t.panelContainer.removeClass("md-panel-is-showing"),n(t)},i=function(){t._$log.warn("MdPanel Animations failed. Hiding panel without animating."),o()};e.animateClose(t.panelEl).then(o,i)})},o.prototype._simpleBind=function(e,t){return function(n){return e.apply(t,n)}},o.prototype._done=function(e,t){return function(){e(t)}},i.xPosition={CENTER:"center",ALIGN_START:"align-start",ALIGN_END:"align-end",OFFSET_START:"offset-start",OFFSET_END:"offset-end"},i.yPosition={CENTER:"center",ALIGN_TOPS:"align-tops",ALIGN_BOTTOMS:"align-bottoms",ABOVE:"above",BELOW:"below"},i.absPosition={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},i.prototype.absolute=function(){return this._absolute=!0,this},i.prototype._setPosition=function(e,n){if(e===i.absPosition.RIGHT||e===i.absPosition.LEFT)this._left=this._right="";else{if(e!==i.absPosition.BOTTOM&&e!==i.absPosition.TOP){var o=Object.keys(i.absPosition).join().toLowerCase();throw new Error("Position must be one of "+o+".")}this._top=this._bottom=""}return this["_"+e]=t.isString(n)?n:"0",this},i.prototype.top=function(e){return this._setPosition(i.absPosition.TOP,e)},i.prototype.bottom=function(e){return this._setPosition(i.absPosition.BOTTOM,e)},i.prototype.start=function(e){var t=this._isRTL?i.absPosition.RIGHT:i.absPosition.LEFT;return this._setPosition(t,e)},i.prototype.end=function(e){var t=this._isRTL?i.absPosition.LEFT:i.absPosition.RIGHT;return this._setPosition(t,e)},i.prototype.left=function(e){return this._setPosition(i.absPosition.LEFT,e)},i.prototype.right=function(e){return this._setPosition(i.absPosition.RIGHT,e)},i.prototype.centerHorizontally=function(){return this._left="50%",this._right="",this._translateX=["-50%"],this},i.prototype.centerVertically=function(){return this._top="50%",this._bottom="",this._translateY=["-50%"],this},i.prototype.center=function(){return this.centerHorizontally().centerVertically()},i.prototype.relativeTo=function(e){return this._absolute=!1,this._relativeToEl=a(e),this},i.prototype.addPanelPosition=function(e,t){if(!this._relativeToEl)throw new Error("addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(e),this._validateYPosition(t),this._positions.push({x:e,y:t}),this},i.prototype._validateYPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.yPosition),o=[],r=0;t=n[r];r++){var a=i.yPosition[t];if(o.push(a),a===e)return}throw new Error("Panel y position only accepts the following values:\n"+o.join(" | "))}},i.prototype._validateXPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.xPosition),o=[],r=0;t=n[r];r++){var a=i.xPosition[t];if(o.push(a),a===e)return}throw new Error("Panel x Position only accepts the following values:\n"+o.join(" | "))}},i.prototype.withOffsetX=function(e){return this._translateX.push(e),this},i.prototype.withOffsetY=function(e){return this._translateY.push(e),this},i.prototype.getTop=function(){return this._top},i.prototype.getBottom=function(){return this._bottom},i.prototype.getLeft=function(){return this._left},i.prototype.getRight=function(){return this._right},i.prototype.getTransform=function(){var e=this._reduceTranslateValues("translateX",this._translateX),t=this._reduceTranslateValues("translateY",this._translateY);return(e+" "+t).trim()},i.prototype._isOnscreen=function(e){var t=parseInt(this.getLeft()),n=parseInt(this.getTop()),o=t+e[0].offsetWidth,i=n+e[0].offsetHeight;return t>=0&&n>=0&&i<=this._$window.innerHeight&&o<=this._$window.innerWidth},i.prototype.getActualPosition=function(){return this._actualPosition},i.prototype._reduceTranslateValues=function(e,t){return t.map(function(t){return e+"("+t+")"}).join(" ")},i.prototype._setPanelPosition=function(e){if(!this._absolute){if(this._actualPosition)return void this._calculatePanelPosition(e,this._actualPosition);for(var t=0;t<this._positions.length&&(this._actualPosition=this._positions[t],this._calculatePanelPosition(e,this._actualPosition),!this._isOnscreen(e));t++);}},i.prototype._reverseXPosition=function(e){if(e!==i.xPosition.CENTER){var t="start",n="end";return e.indexOf(t)>-1?e.replace(t,n):e.replace(n,t)}},i.prototype._bidi=function(e){return this._isRTL?this._reverseXPosition(e):e},i.prototype._calculatePanelPosition=function(e,t){var n=e[0].getBoundingClientRect(),o=n.width,r=n.height,a=this._relativeToEl[0].getBoundingClientRect(),d=a.left,s=a.right,l=a.width;switch(this._bidi(t.x)){case i.xPosition.OFFSET_START:this._left=d-o+"px";break;case i.xPosition.ALIGN_END:this._left=s-o+"px";break;case i.xPosition.CENTER:var c=d+.5*l-.5*o;this._left=c+"px";break;case i.xPosition.ALIGN_START:this._left=d+"px";break;case i.xPosition.OFFSET_END:this._left=s+"px"}var m=a.top,u=a.bottom,p=a.height;switch(t.y){case i.yPosition.ABOVE:this._top=m-r+"px";break;case i.yPosition.ALIGN_BOTTOMS:this._top=u-r+"px";break;case i.yPosition.CENTER:var h=m+.5*p-.5*r;this._top=h+"px";break;case i.yPosition.ALIGN_TOPS:this._top=m+"px";break;case i.yPosition.BELOW:this._top=u+"px"}},r.animation={SLIDE:"md-panel-animate-slide",SCALE:"md-panel-animate-scale",FADE:"md-panel-animate-fade"},r.prototype.openFrom=function(e){return e=e.target?e.target:e,this._openFrom=this._getPanelAnimationTarget(e),this._closeTo||(this._closeTo=this._openFrom),this},r.prototype.closeTo=function(e){return this._closeTo=this._getPanelAnimationTarget(e),this},r.prototype._getPanelAnimationTarget=function(e){return t.isDefined(e.top)||t.isDefined(e.left)?{element:n,bounds:{top:e.top||0,left:e.left||0}}:this._getBoundingClientRect(a(e))},r.prototype.withAnimation=function(e){return this._animationClass=e,this},r.prototype.animateOpen=function(e){var n=this._$mdUtil.dom.animator;this._fixBounds(e);var o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-enter"};var s=n.calculateSlideToOrigin(e,this._openFrom)||"";a=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-enter"};var l=n.calculateZoomToOrigin(e,this._openFrom)||"";a=n.toTransformCss(l+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-enter"};break;default:o=t.isString(this._animationClass)?{transitionInClass:this._animationClass}:{transitionInClass:this._animationClass.open,transitionOutClass:this._animationClass.close}}return n.translate3d(e,a,d,o)},r.prototype.animateClose=function(e){var n=this._$mdUtil.dom.animator,o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-leave"};var s=n.calculateSlideToOrigin(e,this._closeTo)||"";d=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-scale-out _md-panel-animate-leave"};var l=n.calculateZoomToOrigin(e,this._closeTo)||"";d=n.toTransformCss(l+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-fade-out _md-panel-animate-leave"};break;default:o=t.isString(this._animationClass)?{transitionOutClass:this._animationClass}:{transitionInClass:this._animationClass.close,transitionOutClass:this._animationClass.open}}return n.translate3d(e,a,d,o)},r.prototype._fixBounds=function(e){var t=e[0].offsetWidth,n=e[0].offsetHeight;this._openFrom&&null==this._openFrom.bounds.height&&(this._openFrom.bounds.height=n),this._openFrom&&null==this._openFrom.bounds.width&&(this._openFrom.bounds.width=t),this._closeTo&&null==this._closeTo.bounds.height&&(this._closeTo.bounds.height=n),this._closeTo&&null==this._closeTo.bounds.width&&(this._closeTo.bounds.width=t)},r.prototype._getBoundingClientRect=function(e){if(e instanceof t.element)return{element:e,bounds:e[0].getBoundingClientRect()}}}(),function(){t.module("material.components.progressCircular",["material.core"])}(),function(){function e(e,n,o){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),r}function r(o,i,r){function u(){r.$observe("value",function(e){var t=a(e);i.attr("aria-valuenow",t),h()!=c&&f($,t)}),r.$observe("mdBufferValue",function(e){f(E,a(e))}),r.$observe("disabled",function(e){b=e===!0||e===!1?!!e:t.isDefined(e),i.toggleClass(m,b),C.toggleClass(g,!b)}),r.$observe("mdMode",function(e){switch(g&&C.removeClass(g),e){case c:case l:case d:case s:C.addClass(g="md-mode-"+e);break;default:C.addClass(g="md-mode-"+s)}})}function p(){if(t.isUndefined(r.mdMode)){var e=t.isDefined(r.value),n=e?d:s;i.attr("md-mode",n),r.mdMode=n}}function h(){var e=(r.mdMode||"").trim();if(e)switch(e){case d:case s:case l:case c:break;default:e=s}return e}function f(e,o){if(!b&&h()){var i=n.supplant("translateX({0}%) scale({1},1)",[(o-100)/2,o/100]),r=v({transform:i});t.element(e).css(r)}}e(i);var g,b=r.hasOwnProperty("disabled"),v=n.dom.animator.toCss,E=t.element(i[0].querySelector(".md-bar1")),$=t.element(i[0].querySelector(".md-bar2")),C=t.element(i[0].querySelector(".md-container"));i.attr("md-mode",h()).toggleClass(m,b),p(),u()}function a(e){return Math.max(0,Math.min(e||0,100))}var d="determinate",s="indeterminate",l="buffer",c="query",m="_md-progress-linear-disabled";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}e.$inject=["$mdTheming","$mdUtil","$log"],t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e)}(),function(){function e(e,n,o,i){function r(r,a,d,s){function l(){a.hasClass("md-focused")||a.addClass("md-focused")}function c(o){var i=o.which||o.keyCode;if(i==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(i){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),l();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),l();break;case n.KEY_CODE.ENTER:var r=t.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit")}}a.addClass("_md"),o(a);var m=s[0],u=s[1]||e.fakeNgModel();m.init(u),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",c).on("mousedown",function(e){r.mouseActive=!0,i(function(){r.mouseActive=!1},100)}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);t!==-1&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return s(this.$element,1)},selectPrevious:function(){return s(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)},isDisabled:function(){return this.$element[0].hasAttribute("disabled")}}}function s(n,o){var i=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(i.count()){var r=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=i[o<0?"previous":"next"](a,r)||i.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function n(e,t,n){function o(o,r,a,d){function s(){if(!d)throw"RadioButton: No RadioGroupController could be found.";d.add(c),a.$observe("value",c),r.on("click",l).on("$destroy",function(){d.remove(c)})}function l(e){r[0].hasAttribute("disabled")||d.isDisabled()||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function c(){function e(e){"MD-RADIO-GROUP"!=r.parent()[0].nodeName&&r.parent()[e?"addClass":"removeClass"](i)}var t=d.getViewValue()==a.value;t!==u&&(u=t,r.attr("aria-checked",t),t?(e(!0),r.addClass(i),d.setActiveDescendant(r.attr("id"))):(e(!1),r.removeClass(i)))}function m(n,o){function i(){return a.id||"radio_"+t.nextUid()}o.ariaId=i(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(r),m(r,o),s()}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"],t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n)}(),function(){function o(e,o,i,r,a,d,s){function l(d,l){var c=t.element("<md-select-value><span></span></md-select-value>");if(c.append('<span class="md-select-icon" aria-hidden="true"></span>'),c.addClass("md-select-value"),c[0].hasAttribute("id")||c.attr("id","select_value_label_"+o.nextUid()),d.find("md-content").length||d.append(t.element("<md-content>").append(d.contents())),l.mdOnOpen&&(d.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')),d.find("md-option").attr("ng-show","$$loadingAsyncDone")),l.name){var m=t.element('<select class="md-visually-hidden">');m.attr({name:l.name,"aria-hidden":"true",tabindex:"-1"});var u=d.find("md-option");t.forEach(u,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),m.append(n)}),m.append('<option ng-value="'+l.ngModel+'" selected></option>'),d.parent().append(m)}var p=o.parseAttributeBoolean(l.multiple),h=p?"multiple":"",f='<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return f=o.supplant(f,[h,d.html()]),d.empty().append(c),d.append(f),l.tabindex||l.$set("tabindex",0),function(d,l,c,m){function u(){var e=l.attr("aria-label")||l.attr("placeholder");!e&&y&&y.label&&(e=y.label.text()),C=e,a.expect(l,"aria-label",e)}function h(){N&&(H=H||N.find("md-select-menu").controller("mdSelectMenu"),T.setLabelText(H.selectedLabels()))}function f(){if(C){var e=H.selectedLabels({mode:"aria"});l.attr("aria-label",e.length?C+": "+e:C)}}function g(){y&&y.setHasValue(H.selectedLabels().length>0||(l[0].validity||{}).badInput)}function b(){if(N=t.element(l[0].querySelector(".md-select-menu-container")),D=d,c.mdContainerClass){var e=N[0].getAttribute("class")+" "+c.mdContainerClass;N[0].setAttribute("class",e)}H=N.find("md-select-menu").controller("mdSelectMenu"),H.init(A,c.ngModel),l.on("$destroy",function(){N.remove()})}function v(e){if(i.isNavigationKey(e))e.preventDefault(),E(e);else if(i.isInputKey(e)||i.isNumPadKey(e)){e.preventDefault();var n=H.optNodeForKeyboardSearch(e);if(!n||n.hasAttribute("disabled"))return;var o=t.element(n).controller("mdOption");H.isMultiple||H.deselect(Object.keys(H.selected)[0]),H.select(o.hashKey,o.value),H.refreshViewValue()}}function E(){D._mdSelectIsOpen=!0,l.attr("aria-expanded","true"),e.show({scope:D,preserveScope:!0,skipCompile:!0,element:N,target:l[0],selectCtrl:T,preserveElement:!0,hasBackdrop:!0,loadingAsync:!!c.mdOnOpen&&(d.$eval(c.mdOnOpen)||!0)})["finally"](function(){D._mdSelectIsOpen=!1,l.focus(),l.attr("aria-expanded","false"),A.$setTouched()})}var $,C,M=!0,y=m[0],T=m[1],A=m[2],w=m[3],k=l.find("md-select-value"),x=t.isDefined(c.readonly),_=o.parseAttributeBoolean(c.mdNoAsterisk);if(_&&l.addClass("md-no-asterisk"),y){var S=y.isErrorGetter||function(){return A.$invalid&&(A.$touched||w&&w.$submitted)};if(y.input&&l.find("md-select-header").find("input")[0]!==y.input[0])throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");y.input=l,y.label||a.expect(l,"aria-label",l.attr("placeholder")),d.$watch(S,y.setInvalid)}var N,D,H;b(),r(l),w&&t.isDefined(c.multiple)&&o.nextTick(function(){var e=A.$modelValue||A.$viewValue;e&&w.$setPristine()});var I=A.$render;A.$render=function(){I(),h(),f(),g()},c.$observe("placeholder",A.$render),y&&y.label&&c.$observe("required",function(e){y.label.toggleClass("md-required",e&&!_)}),T.setLabelText=function(e){if(T.setIsPlaceholder(!e),c.mdSelectedText)e=s(c.mdSelectedText)(d);else{var t=c.placeholder||(y&&y.label?y.label.text():"");e=e||t||""}var n=k.children().eq(0);n.html(e)},T.setIsPlaceholder=function(e){e?(k.addClass("md-select-placeholder"),y&&y.label&&y.label.addClass("md-placeholder")):(k.removeClass("md-select-placeholder"),y&&y.label&&y.label.removeClass("md-placeholder"))},x||(l.on("focus",function(e){y&&y.setFocused(!0)}),l.on("blur",function(e){M&&(M=!1,D._mdSelectIsOpen&&e.stopImmediatePropagation()),D._mdSelectIsOpen||(y&&y.setFocused(!1),g())})),T.triggerClose=function(){s(c.mdOnClose)(d)},d.$$postDigest(function(){u(),h(),f()}),d.$watch(function(){return H.selectedLabels()},h);var O;c.$observe("ngMultiple",function(e){O&&O();var t=s(e);O=d.$watch(function(){return t(d)},function(e,t){e===n&&t===n||(e?l.attr("multiple","multiple"):l.removeAttr("multiple"),l.attr("aria-multiselectable",e?"true":"false"),N&&(H.setMultiple(e),I=A.$render,A.$render=function(){I(),h(),f(),g()},A.$render()))})}),c.$observe("disabled",function(e){t.isString(e)&&(e=!0),$!==n&&$===e||($=e,e?l.attr({"aria-disabled":"true"}).removeAttr("tabindex").off("click",E).off("keydown",v):l.attr({tabindex:c.tabindex,"aria-disabled":"false"}).on("click",E).on("keydown",v))}),c.hasOwnProperty("disabled")||c.hasOwnProperty("ngDisabled")||(l.attr({"aria-disabled":"false"}),l.on("click",E),l.on("keydown",v));var R={role:"listbox","aria-expanded":"false","aria-multiselectable":p&&!c.ngMultiple?"true":"false"};l[0].hasAttribute("id")||(R.id="select_"+o.nextUid());var L="select_container_"+o.nextUid();N.attr("id",L),R["aria-owns"]=L,l.attr(R),d.$on("$destroy",function(){e.destroy()["finally"](function(){y&&(y.setFocused(!1),y.setHasValue(!1),y.input=null),A.$setTouched()})})}}var c=i.KEY_CODE;[c.SPACE,c.ENTER,c.UP_ARROW,c.DOWN_ARROW];return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:l,controller:function(){}}}function i(e,o,i,r){function a(e,n,i,a){function d(e){13!=e.keyCode&&32!=e.keyCode||s(e)}function s(n){var i=o.getClosest(n.target,"md-option"),r=i&&t.element(i).data("$mdOptionController");if(i&&r){if(i.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=l.hashGetter(r.value),d=t.isDefined(l.selected[a]);e.$apply(function(){l.isMultiple?d?l.deselect(a):l.select(a,r.value):d||(l.deselect(Object.keys(l.selected)[0]),l.select(a,r.value)),l.refreshViewValue()})}}var l=a[0];n.addClass("_md"),r(n),n.on("click",s),n.on("keypress",d)}function d(r,a,d){function s(){var e=m.ngModel.$modelValue||m.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(m.selected),o=e.map(m.hashGetter),i=n.filter(function(e){return o.indexOf(e)===-1});i.forEach(m.deselect),o.forEach(function(t,n){m.select(t,e[n])})}}function l(){var e=m.ngModel.$viewValue||m.ngModel.$modelValue;Object.keys(m.selected).forEach(m.deselect),m.select(m.hashGetter(e),e)}var m=this;m.isMultiple=t.isDefined(a.multiple),m.selected={},m.options={},r.$watchCollection(function(){return m.options},function(){m.ngModel.$render()});var u,p;m.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=m.ngModel;p=p||o.$isEmpty,m.isMultiple=e,u&&u(),m.isMultiple?(o.$validators["md-multiple"]=n,o.$render=s,r.$watchCollection(m.modelBinding,function(e){n(e)&&s(e),m.ngModel.$setPristine()}),o.$isEmpty=function(e){return!e||0===e.length}):(delete o.$validators["md-multiple"],o.$render=l)};var h,f,g,b="",v=300;m.optNodeForKeyboardSearch=function(e){h&&clearTimeout(h),h=setTimeout(function(){h=n,b="",g=n,f=n},v);var o=e.keyCode-(i.isNumPadKey(e)?48:0);b+=String.fromCharCode(o);var r=new RegExp("^"+b,"i");f||(f=d.find("md-option"),g=new Array(f.length),t.forEach(f,function(e,t){g[t]=e.textContent.trim()}));for(var a=0;a<g.length;++a)if(r.test(g[a]))return f[a]},m.init=function(n,o){if(m.ngModel=n,m.modelBinding=o,m.ngModel.$isEmpty=function(e){return!m.options[m.hashGetter(e)]},n.$options&&n.$options.trackBy){var i={},a=e(n.$options.trackBy);m.hashGetter=function(e,t){return i.$value=e,a(t||r,i)}}else m.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};m.setMultiple(m.isMultiple)},m.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(d[0].querySelectorAll("md-option[selected]"));if(n.length){var i;return"html"==t?i=function(e){if(e.hasAttribute("md-option-empty"))return"";var t=e.innerHTML,n=e.querySelector(".md-ripple-container");n&&(t=t.replace(n.outerHTML,""));var o=e.querySelector(".md-container");return o&&(t=t.replace(o.outerHTML,"")),t}:"aria"==t&&(i=function(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent}),n.map(i).join(", ")}return""},m.select=function(e,t){var n=m.options[e];n&&n.setSelected(!0),m.selected[e]=t},m.deselect=function(e){var t=m.options[e];t&&t.setSelected(!1),delete m.selected[e]},m.addOption=function(e,n){if(t.isDefined(m.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');m.options[e]=n,t.isDefined(m.selected[e])&&(m.select(e,n.value),t.isDefined(m.ngModel.$modelValue)&&m.hashGetter(m.ngModel.$modelValue)===e&&m.ngModel.$validate(),m.refreshViewValue())},m.removeOption=function(e){delete m.options[e]},m.refreshViewValue=function(){var e,n=[];for(var o in m.selected)(e=m.options[o])?n.push(e.value):n.push(m.selected[o]);var i=m.ngModel.$options&&m.ngModel.$options.trackBy,r=m.isMultiple?n:n[0],a=m.ngModel.$modelValue;(i?t.equals(a,r):a==r)||(m.ngModel.$setViewValue(r),m.ngModel.$render())}}return d.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!1,controller:d,link:{pre:a}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),i(n)||e.attr("md-option-empty",""),r}function i(e){var t=e.value,n=e.ngValue;return t||n}function r(o,i,r,a){function d(e,t,n){if(!c.hashGetter)return void(n||o.$$postDigest(function(){d(e,t,!0)}));var i=c.hashGetter(t,o),r=c.hashGetter(e,o);l.hashKey=r,l.value=e,c.removeOption(i,l),c.addOption(r,l)}function s(){var e={role:"option","aria-selected":"false"};i[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),i.attr(e)}var l=a[0],c=a[1];c.isMultiple&&(i.addClass("md-checkbox-enabled"),i.prepend(m.clone())),t.isDefined(r.ngValue)?o.$watch(r.ngValue,d):t.isDefined(r.value)?d(r.value):o.$watch(function(){return i.text().trim()},d),r.$observe("disabled",function(e){e?i.attr("tabindex","-1"):i.attr("tabindex","0")}),o.$$postDigest(function(){r.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(c.isMultiple||c.deselect(Object.keys(c.selected)[0]),c.select(l.hashKey,l.value)):c.deselect(l.hashKey),c.refreshViewValue())})}),e.attach(o,i),s(),o.$on("$destroy",function(){c.removeOption(l.hashKey,l)})}function a(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return a.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:a,compile:o}}function a(){function e(e,n){function o(){return e.parent().find("md-select-header").length}function i(){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("md-container-ignore"),n.label&&o.text(n.label)}o()||i()}return{restrict:"E",compile:e}}function d(){return{restrict:"E"}}function s(o){function i(o,i,c,m,u,p,h,f,g){function b(e,t,n){function o(){return h(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",E(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function v(e,r,a){function d(e,t,n){return n.parent.append(t),u(function(e,n){try{h(t,{removeClass:"md-leave",duration:0}).start().then(s).then(e)}catch(o){n(o)}})}function s(){return u(function(t){if(a.isRemoved)return u.reject(!1);var n=$(e,r,a);n.container.element.css(M.toCss(n.container.styles)),n.dropDown.element.css(M.toCss(n.dropDown.styles)),p(function(){r.addClass("md-active"),n.dropDown.element.css(M.toCss({transform:""})),b(a.focusedNode),t()})})}function l(e,t,n){return n.disableParentScroll&&!c.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=c.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=c.createBackdrop(e,"md-select-backdrop md-click-catcher"),f.enter(n.backdrop,g[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function b(e){e&&!e.hasAttribute("disabled")&&e.focus()}function v(e,n){var o=r.find("md-select-menu");if(!n.target)throw new Error(c.supplant(C,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:r.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function E(){var n=function(e,t,n){return function(){if(!n.isRemoved){var o=$(e,t,n),i=o.container,r=o.dropDown;i.element.css(M.toCss(i.styles)),r.element.css(M.toCss(r.styles))}}}(e,r,a),o=t.element(m);return o.on("resize",n),o.on("orientationchange",n),function(){o.off("resize",n),o.off("orientationchange",n)}}function T(){a.loadingAsync&&!a.isRemoved&&(e.$$loadingAsyncDone=!1,u.when(a.loadingAsync).then(function(){e.$$loadingAsyncDone=!0,delete a.loadingAsync}).then(function(){p(s)}))}function A(){function e(e){e.preventDefault(),e.stopPropagation(),a.restoreFocus=!1,c.nextTick(o.hide,!0)}function t(e){switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case y.UP_ARROW:return l();case y.DOWN_ARROW:return s();case y.SPACE:case y.ENTER:var t=c.getClosest(e.target,"md-option");t&&(u.triggerHandler({type:"click",target:t}),e.preventDefault()),m(e);break;case y.TAB:case y.ESCAPE:e.stopPropagation(),e.preventDefault(),a.restoreFocus=!0,c.nextTick(o.hide,!0);break;default:if(i.isInputKey(e)||i.isNumPadKey(e)){var n=u.controller("mdSelectMenu").optNodeForKeyboardSearch(e);a.focusedNode=n||a.focusedNode,n&&n.focus()}}}function d(e){var t,o=c.nodesToArray(a.optionNodes),i=o.indexOf(a.focusedNode);do i===-1?i=0:"next"===e&&i<o.length-1?i++:"prev"===e&&i>0&&i--,t=o[i],t.hasAttribute("disabled")&&(t=n);while(!t&&i<o.length-1&&i>0);t&&t.focus(),a.focusedNode=t}function s(){d("next")}function l(){d("prev")}function m(e){function t(){var t=!1;if(e&&e.currentTarget.children.length>0){var n=e.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var i=e.pageX-e.currentTarget.getBoundingClientRect().left;i>n.querySelector("md-option").offsetWidth&&(t=!0)}}return t}if(!(e&&"click"==e.type&&e.currentTarget!=u[0]||t())){var n=c.getClosest(e.target,"md-option");n&&n.hasAttribute&&!n.hasAttribute("disabled")&&(e.preventDefault(),e.stopPropagation(),p.isMultiple||(a.restoreFocus=!0,c.nextTick(function(){o.hide(p.ngModel.$viewValue)},!0)))}}if(!a.isRemoved){var u=a.selectEl,p=u.controller("mdSelectMenu")||{};return r.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",e),u.on("keydown",t),u.on("click",m),function(){a.backdrop&&a.backdrop.off("click",e),u.off("keydown",t),u.off("click",m),r.removeClass("md-clickable"),a.isRemoved=!0}}}return T(),v(e,a),a.hideBackdrop=l(e,r,a),d(e,r,a).then(function(e){return r.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=A(),a.cleanupResizing=E(),e},a.hideBackdrop)}function E(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n?n.selectedLabels():""),t.triggerClose()}}function $(n,o,i){var u,p=o[0],h=i.target[0].children[0],f=g[0].body,b=i.selectEl[0],v=i.contentEl[0],E=f.getBoundingClientRect(),$=h.getBoundingClientRect(),C=!1,M={left:E.left+l,top:l,bottom:E.height-l,right:E.width-l-(c.floatingScrollbars()?16:0)},y={top:$.top-M.top,left:$.left-M.left,right:M.right-($.left+$.width),bottom:M.bottom-($.top+$.height)},T=E.width-2*l,A=b.querySelector("md-option[selected]"),w=b.getElementsByTagName("md-option"),k=b.getElementsByTagName("md-optgroup"),x=s(o,v),_=r(i.loadingAsync);u=_?v.firstElementChild||v:A?A:k.length?k[0]:w.length?w[0]:v.firstElementChild||v,v.offsetWidth>T?v.style["max-width"]=T+"px":v.style.maxWidth=null,C&&(v.style["min-width"]=$.width+"px"),x&&b.classList.add("md-overflow");var S=u;"MD-OPTGROUP"===(S.tagName||"").toUpperCase()&&(S=w[0]||v.firstElementChild||v,u=S),i.focusedNode=S,p.style.display="block";var N=b.getBoundingClientRect(),D=d(u);if(u){var H=m.getComputedStyle(u);D.paddingLeft=parseInt(H.paddingLeft,10)||0,D.paddingRight=parseInt(H.paddingRight,10)||0}if(x){var I=v.offsetHeight/2;v.scrollTop=D.top+D.height/2-I,y.top<I?v.scrollTop=Math.min(D.top,v.scrollTop+I-y.top):y.bottom<I&&(v.scrollTop=Math.max(D.top+D.height-N.height,v.scrollTop-I+y.bottom))}var O,R,L,P,F;C?(O=$.left,R=$.top+$.height,L="50% 0",R+N.height>M.bottom&&(R=$.top-N.height,
L="50% 100%")):(O=$.left+D.left-D.paddingLeft+2,R=Math.floor($.top+$.height/2-D.height/2-D.top+v.scrollTop)+2,L=D.left+$.width/2+"px "+(D.top+D.height/2-v.scrollTop)+"px 0px",P=Math.min($.width+D.paddingLeft+D.paddingRight,T),F=e.getComputedStyle(h)["font-size"]);var B=p.getBoundingClientRect(),U=Math.round(100*Math.min($.width/N.width,1))/100,j=Math.round(100*Math.min($.height/N.height,1))/100;return{container:{element:t.element(p),styles:{left:Math.floor(a(M.left,O,M.right-B.width)),top:Math.floor(a(M.top,R,M.bottom-B.height)),"min-width":P,"font-size":F}},dropDown:{element:t.element(b),styles:{transformOrigin:L,transform:i.alreadyOpen?"":c.supplant("scale({0},{1})",[U,j])}}}}var C="$mdSelect.show() expected a target element in options.target but got '{0}'!",M=c.dom.animator,y=i.KEY_CODE;return{parent:"body",themable:!0,onShow:v,onRemove:b,hasBackdrop:!0,disableParentScroll:!0}}function r(e){return e&&t.isFunction(e.then)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function d(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}function s(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o}finally{}return n}return i.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],o("$mdSelect").setDefaults({methods:["target"],options:i})}o.$inject=["$mdSelect","$mdUtil","$mdConstant","$mdTheming","$mdAria","$compile","$parse"],i.$inject=["$parse","$mdUtil","$mdConstant","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],s.$inject=["$$interimElementProvider"];var l=8,c=0,m=t.element('<div class="md-container"><div class="md-icon"></div></div>');t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",o).directive("mdSelectMenu",i).directive("mdOption",r).directive("mdOptgroup",a).directive("mdSelectHeader",d).provider("$mdSelect",s)}(),function(){function e(e,t){return["$mdUtil","$window",function(n,o){return{restrict:"A",multiElement:!0,link:function(i,r,a){var d=i.$on("$md-resize-enable",function(){d();var s=r[0],l=s.nodeType===o.Node.ELEMENT_NODE?o.getComputedStyle(s):{};i.$watch(a[e],function(e){if(!!e===t){n.nextTick(function(){i.$broadcast("$md-resize")});var o={cachedTransitionStyles:l};n.dom.animator.waitTransitionEnd(r,o).then(function(){i.$broadcast("$md-resize")})}})})}}}]}t.module("material.components.showHide",["material.core"]).directive("ngShow",e("ngShow",!0)).directive("ngHide",e("ngHide",!1))}(),function(){function e(e,o,i,r){function a(e,n){var r=function(){return!1},a=function(){return i.when(o.supplant(l,[n||""]))};return t.extend({isLockedOpen:r,isOpen:r,toggle:a,open:a,close:a,onClose:t.noop,then:function(e){return s(n).then(e||t.noop)}},e)}function d(t,i){var a=e.get(t);return a||i?a:(r.error(o.supplant(l,[t||""])),n)}function s(t){return e.when(t)["catch"](r.error)}var l="SideNav '{0}' is not available! Did you use md-component-id='{0}'?",c={find:d,waitFor:s};return function(e,n){if(t.isUndefined(e))return c;var o=n===!0,i=c.find(e,o);return!i&&o?c.waitFor(e):!i&&t.isUndefined(n)?a(c,e):i}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function i(e,o,i,r,a,d,s,l,c,m){function u(d,u,p,h){function f(e,t){d.isLockedOpen=e,e===t?u.toggleClass("md-locked-open",!!e):a[e?"addClass":"removeClass"](u,"md-locked-open"),y&&y.toggleClass("md-locked-open",!!e)}function g(e){var t=o.findFocusTarget(u)||o.findFocusTarget(u,"[md-sidenav-focus]")||u,n=u.parent();n[e?"on":"off"]("keydown",$),y&&y[e?"on":"off"]("click",C);var i=b(n,e);return e&&(w=m[0].activeElement),v(e),k=c.all([e&&y?a.enter(y,n):y?a.leave(y):c.when(!0),a[e?"removeClass":"addClass"](u,"md-closed")]).then(function(){d.isOpen&&t&&t.focus(),i&&i()})}function b(e,t){var n=u[0],o=e[0].scrollTop;if(t&&o){T={top:n.style.top,bottom:n.style.bottom,height:n.style.height};var i={top:o+"px",bottom:"auto",height:e[0].clientHeight+"px"};u.css(i),y.css(i)}if(!t&&T)return function(){n.style.top=T.top,n.style.bottom=T.bottom,n.style.height=T.height,y[0].style.top=null,y[0].style.bottom=null,y[0].style.height=null,T=null}}function v(e){e&&!M?(M=A.css("overflow"),A.css("overflow","hidden")):t.isDefined(M)&&(A.css("overflow",M),M=n)}function E(e){return d.isOpen==e?c.when(!0):(d.isOpen&&h.onCloseCb&&h.onCloseCb(),c(function(t){d.isOpen=e,o.nextTick(function(){k.then(function(e){d.isOpen||(w&&w.focus(),w=null),t(e)})})}))}function $(e){var t=e.keyCode===i.KEY_CODE.ESCAPE;return t?C(e):c.when(!0)}function C(e){return e.preventDefault(),h.close()}var M,y,T,A=null,w=null,k=c.when(!0),x=s(p.mdIsLockedOpen),_=function(){return x(d.$parent,{$media:function(t){return l.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})};p.mdDisableScrollTarget&&(A=m[0].querySelector(p.mdDisableScrollTarget),A?A=t.element(A):l.warn(o.supplant('mdSidenav: couldn\'t find element matching selector "{selector}". Falling back to parent.',{selector:p.mdDisableScrollTarget}))),A||(A=u.parent()),p.hasOwnProperty("mdDisableBackdrop")||(y=o.createBackdrop(d,"md-sidenav-backdrop md-opaque ng-enter")),u.addClass("_md"),r(u),y&&r.inherit(y,u),u.on("$destroy",function(){y&&y.remove(),h.destroy()}),d.$on("$destroy",function(){y&&y.remove()}),d.$watch(_,f),d.$watch("isOpen",g),h.$toggleOpen=E}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u}}}function r(e,t,n,o,i){var r=this;r.isOpen=function(){return!!e.isOpen},r.isLockedOpen=function(){return!!e.isLockedOpen},r.onClose=function(e){return r.onCloseCb=e,r},r.open=function(){return r.$toggleOpen(!0)},r.close=function(){return r.$toggleOpen(!1)},r.toggle=function(){return r.$toggleOpen(!e.isOpen)},r.$toggleOpen=function(t){return i.when(e.isOpen=t)},r.destroy=o.register(r,n.mdComponentId)}e.$inject=["$mdComponentRegistry","$mdUtil","$q","$log"],i.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$animate","$compile","$parse","$log","$q","$document"],r.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"],t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",i).directive("mdSidenavFocus",o).controller("$mdSidenavController",r)}(),function(){function e(){return{controller:function(){},compile:function(e){var o=e.find("md-slider");if(o){var i=o.attr("md-vertical");return i!==n&&e.attr("md-vertical",""),o.attr("flex")||o.attr("flex",""),function(e,n,o,i){function r(e){n.children().attr("disabled",e),n.find("input").attr("disabled",e)}n.addClass("_md");var a=t.noop;o.disabled?r(!0):o.ngDisabled&&(a=e.$watch(o.ngDisabled,function(e){r(e)})),e.$on("$destroy",function(){a()});var d;i.fitInputWidthToTextLength=function(e){var t=n[0].querySelector("md-input-container");if(t){var o=getComputedStyle(t),i=parseInt(o.minWidth),r=2*parseInt(o.padding);d=d||parseInt(o.maxWidth);var a=Math.max(d,i+r+i/2*e);t.style.maxWidth=a+"px"}}}}}}}function o(e,n,o,i,r,a,d,s,l,c){function m(e,n){var i=t.element(e[0].getElementsByClassName("md-slider-wrapper")),r=n.tabindex||0;return i.attr("tabindex",r),(n.disabled||n.ngDisabled)&&i.attr("tabindex",-1),i.attr("role","slider"),o.expect(e,"aria-label"),u}function u(o,m,u,p){function h(){M(),_()}function f(e){se=parseFloat(e),m.attr("aria-valuemin",e),h()}function g(e){le=parseFloat(e),m.attr("aria-valuemax",e),h()}function b(e){ce=parseFloat(e)}function v(e){me=S(parseInt(e),0,6)}function E(){m.attr("aria-disabled",!!Y())}function $(){if(ie&&!Y()&&!t.isUndefined(ce)){if(ce<=0){var e="Slider step value must be greater than zero when in discrete mode";throw l.error(e),new Error(e)}var o=Math.floor((le-se)/ce);ue||(ue=t.element("<canvas>").css("position","absolute"),J.append(ue),pe=ue[0].getContext("2d"));var i=y();!i||i.height||i.width||(M(),i=he),ue[0].width=i.width,ue[0].height=i.height;for(var r,a=0;a<=o;a++){var d=n.getComputedStyle(J[0]);pe.fillStyle=d.color||"black",r=Math.floor((oe?i.height:i.width)*(a/o)),pe.fillRect(oe?0:r-1,oe?r-1:0,oe?i.width:2,oe?2:i.height)}}}function C(){if(ue&&pe){var e=y();pe.clearRect(0,0,e.width,e.height)}}function M(){he=Q[0].getBoundingClientRect()}function y(){return te(),he}function T(e){if(!Y()){var t;(oe?e.keyCode===r.KEY_CODE.DOWN_ARROW:e.keyCode===r.KEY_CODE.LEFT_ARROW)?t=-ce:(oe?e.keyCode===r.KEY_CODE.UP_ARROW:e.keyCode===r.KEY_CODE.RIGHT_ARROW)&&(t=ce),t=re?-t:t,t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){x(W.$viewValue+t)}))}}function A(){$(),o.mouseActive=!0,ee.removeClass("md-focused"),c(function(){o.mouseActive=!1},100)}function w(){o.mouseActive===!1&&ee.addClass("md-focused")}function k(){ee.removeClass("md-focused"),m.removeClass("md-active"),C()}function x(e){W.$setViewValue(S(N(e)))}function _(){isNaN(W.$viewValue)&&(W.$viewValue=W.$modelValue),W.$viewValue=S(W.$viewValue);var e=z(W.$viewValue);o.modelValue=W.$viewValue,m.attr("aria-valuenow",W.$viewValue),D(e),G.text(W.$viewValue)}function S(e,n,o){if(t.isNumber(e))return n=t.isNumber(n)?n:se,o=t.isNumber(o)?o:le,Math.max(n,Math.min(o,e))}function N(e){if(t.isNumber(e)){var n=Math.round((e-se)/ce)*ce+se;return n=Math.round(n*Math.pow(10,me))/Math.pow(10,me),V&&V.fitInputWidthToTextLength&&i.debounce(function(){V.fitInputWidthToTextLength(n.toString().length)},100)(),n}}function D(e){e=U(e);var t=100*e+"%",n=re?100*(1-e)+"%":t;oe?X.css("bottom",t):i.bidiProperty(X,"left","right",t),Z.css(oe?"height":"width",n),m.toggleClass(re?"md-max":"md-min",0===e),m.toggleClass(re?"md-min":"md-max",1===e)}function H(e){if(!Y()){m.addClass("md-active"),m[0].focus(),M();var t=q(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){x(n),D(z(n))})}}function I(e){if(!Y()){m.removeClass("md-dragging");var t=q(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){x(n),_()})}}function O(e){Y()||(fe=!0,e.stopPropagation(),m.addClass("md-dragging"),P(e))}function R(e){fe&&(e.stopPropagation(),P(e))}function L(e){fe&&(e.stopPropagation(),fe=!1)}function P(e){ie?B(oe?e.pointer.y:e.pointer.x):F(oe?e.pointer.y:e.pointer.x)}function F(e){o.$evalAsync(function(){x(q(j(e)))})}function B(e){var t=q(j(e)),n=S(N(t));D(j(e)),G.text(n)}function U(e){return Math.max(0,Math.min(e||0,1))}function j(e){var t=oe?he.top:he.left,n=oe?he.height:he.width,o=(e-t)/n;return oe||"rtl"!==i.bidi()||(o=1-o),Math.max(0,Math.min(1,oe?1-o:o))}function q(e){var t=re?1-e:e;return se+t*(le-se)}function z(e){var t=(e-se)/(le-se);return re?1-t:t}a(m);var W=p[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},V=p[1],Y=(t.element(i.getClosest(m,"_md-slider-container",!0)),u.ngDisabled?t.bind(null,s(u.ngDisabled),o.$parent):function(){return m[0].hasAttribute("disabled")}),K=t.element(m[0].querySelector(".md-thumb")),G=t.element(m[0].querySelector(".md-thumb-text")),X=K.parent(),Q=t.element(m[0].querySelector(".md-track-container")),Z=t.element(m[0].querySelector(".md-track-fill")),J=t.element(m[0].querySelector(".md-track-ticks")),ee=t.element(m[0].getElementsByClassName("md-slider-wrapper")),te=(t.element(m[0].getElementsByClassName("md-slider-content")),i.throttle(M,5e3)),ne=3,oe=t.isDefined(u.mdVertical),ie=t.isDefined(u.mdDiscrete),re=t.isDefined(u.mdInvert);t.isDefined(u.min)?u.$observe("min",f):f(0),t.isDefined(u.max)?u.$observe("max",g):g(100),t.isDefined(u.step)?u.$observe("step",b):b(1),t.isDefined(u.round)?u.$observe("round",v):v(ne);var ae=t.noop;u.ngDisabled&&(ae=o.$parent.$watch(u.ngDisabled,E)),d.register(ee,"drag",{horizontal:!oe}),o.mouseActive=!1,ee.on("keydown",T).on("mousedown",A).on("focus",w).on("blur",k).on("$md.pressdown",H).on("$md.pressup",I).on("$md.dragstart",O).on("$md.drag",R).on("$md.dragend",L),setTimeout(h,0);var de=e.throttle(h);t.element(n).on("resize",de),o.$on("$destroy",function(){t.element(n).off("resize",de)}),W.$render=_,W.$viewChangeListeners.push(_),W.$formatters.push(S),W.$formatters.push(N);var se,le,ce,me,ue,pe,he={};M();var fe=!1}return{scope:{},require:["?ngModel","?^mdSliderContainer"],template:'<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>',compile:m}}o.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log","$timeout"],t.module("material.components.slider",["material.core"]).directive("mdSlider",o).directive("mdSliderContainer",e)}(),function(){function e(e,t,o,i){function r(i){function r(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),o.nextTick(function(){p.prepend(n.clone)}),h(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),h()}}function d(){f.items.forEach(s),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=p.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}c(e)}function s(e){var t=e.element[0];for(e.top=0,e.left=0,e.right=0;t&&t!==p[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t.offsetParent&&(e.right+=t.offsetParent.offsetWidth-t.offsetWidth-t.offsetLeft),t=t.offsetParent;e.height=e.element.prop("offsetHeight");var i=o.floatingScrollbars()?"0":n;o.bidi(e.clone,"margin-left",e.left,i),o.bidi(e.clone,"margin-right",i,e.right)}function l(){var e=p.prop("scrollTop"),t=e>(l.prevScrollTop||0);if(l.prevScrollTop=e,0===e)return void c(null);if(t){if(f.next&&f.next.top<=e)return void c(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void c(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function c(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(t,i){t&&(null===i||i===n?t.translateY&&(t.translateY=null,t.clone.css(e.CSS.TRANSFORM,"")):(t.translateY=i,o.bidi(t.clone,e.CSS.TRANSFORM,"translate3d("+t.left+"px,"+i+"px,0)","translateY("+i+"px)")))}var p=i.$element,h=t.throttle(d);a(p),p.on("$scrollstart",h),p.on("$scroll",l);var f;return f={prev:null,current:null,next:null,items:[],add:r,refreshElements:d}}function a(e){function n(){+o.now()-r>a?(i=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),t.throttle(n))}var i,r,a=200;e.on("scroll touchmove",function(){i||(i=!0,t.throttle(n),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),r=+o.now()})}var d=o.checkStickySupport();return function(e,t,n){var o=t.controller("mdContent");if(o)if(d)t.css({position:d,top:0,"z-index":2});else{var a=o.$element.data("$$sticky");a||(a=r(o),o.$element.data("$$sticky",a));var s=n||i(t.clone())(e),l=a.add(t,s);e.$on("$destroy",l)}}}e.$inject=["$mdConstant","$$rAF","$mdUtil","$compile"],t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e)}(),function(){function e(e,n,o,i){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>',link:function(r,a,d,s,l){function c(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(a),a.addClass("_md"),i.prefixer().removeAttribute(a,"ng-repeat");var m=a[0].outerHTML;l(r,function(e){c(a).append(e)}),a.hasClass("md-no-sticky")||l(r,function(t){var o=n('<div class="md-subheader-wrapper">'+m+"</div>")(r);i.nextTick(function(){c(o).append(t)}),e(r,a,o)})}}}e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil"],t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e)}(),function(){function e(e){function t(e){function t(t,i,r){var a=e(r[n]);i.on(o,function(e){t.$applyAsync(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}t.$inject=["$parse"];var n="md"+e,o="$md."+e.toLowerCase();return t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"))}(),function(){function e(e,n,o,i,r,a,d){function s(e,s){var c=l.compile(e,s).post;return e.addClass("md-dragging"),function(e,s,l,m){function u(t){g&&g(e)||(t.stopPropagation(),s.addClass("md-dragging"),E={width:b.prop("offsetWidth")})}function p(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=m.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),b.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function h(t){if(E){t.stopPropagation(),s.removeClass("md-dragging"),b.css(o.CSS.TRANSFORM,"");var n=m.$viewValue?E.translate<.5:E.translate>.5;n&&f(!m.$viewValue),E=null,e.skipToggle=!0,d(function(){e.skipToggle=!1},1)}}function f(t){e.$apply(function(){m.$setViewValue(t),m.$render()})}m=m||n.fakeNgModel();var g=null;null!=l.disabled?g=function(){return!0}:l.ngDisabled&&(g=i(l.ngDisabled));var b=t.element(s[0].querySelector(".md-thumb-container")),v=t.element(s[0].querySelector(".md-container"));r(function(){s.removeClass("md-dragging")}),c(e,s,l,m),g&&e.$watch(g,function(e){s.attr("tabindex",e?-1:0)}),a.register(v,"drag"),v.on("$md.dragstart",u).on("$md.drag",p).on("$md.dragend",h);var E}}var l=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:s}}e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture","$timeout"],t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e)}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e){i=e}function o(e,n,o,r){function a(t,a,d){i=d.textContent||d.content;var c=!r("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.element=a,d.onSwipe=function(e,t){var i=e.type.replace("$md.",""),r=i.replace("swipe","");"down"===r&&d.position.indexOf("top")!=-1&&!c||"up"===r&&(d.position.indexOf("bottom")!=-1||c)||("left"!==r&&"right"!==r||!c)&&(a.addClass("md-"+i),o.nextTick(n.cancel))},d.openClass=s(d.position),a.addClass(d.toastClass),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(l,d.onSwipe),a.addClass(c?"md-bottom":d.position.split(" ").map(function(e){return"md-"+e}).join(" ")),d.parent&&d.parent.addClass("md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("md-toast-animating")})}function d(t,n,i){return n.off(l,i.onSwipe),i.parent&&i.parent.addClass("md-toast-animating"),i.openClass&&i.parent.removeClass(i.openClass),(1==i.$destroy?n.remove():e.leave(n)).then(function(){i.parent&&i.parent.removeClass("md-toast-animating"),o.hasComputedStyle(i.parent,"position","static")&&i.parent.css("position","")})}function s(e){return r("gt-xs")?"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"md-toast-open-bottom"}var l="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,toastClass:"",position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var i=document.createElement("md-template");i.innerHTML=e;for(var r=0;r<i.children.length;r++)if("MD-TOAST"===i.children[r].nodeName){var a=t.element('<div class="md-toast-content">');a.append(t.element(i.children[r].childNodes)),i.children[r].appendChild(a[0])}return i.innerHTML}return e||""}}}o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"];var i,r="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent","position","toastClass"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","highlightClass","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){return{template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;n.highlightAction&&(t.highlightClasses=["md-highlight",n.highlightClass]),t.$watch(function(){return i},function(){n.content=i}),this.resolve=function(){e.hide(r)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0}}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return a}e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"],t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n)}(),function(){function e(e,n,o,i,r){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function(d,s,l){function c(){function i(e){var t=s.parent().find("md-content");!f&&t.length&&c(null,t),e=d.$eval(e),e===!1?g():g=u()}function c(e,t){t&&s.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",$),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:v;C(),b=Math.min(h/E,Math.max(0,b+t-v)),s.css(n.CSS.TRANSFORM,a([-b*E])),f.css(n.CSS.TRANSFORM,a([(h-b)*E])),v=t,o.nextTick(function(){var e=s.hasClass("md-whiteframe-z1");e&&!b?r.removeClass(s,"md-whiteframe-z1"):!e&&b&&r.addClass(s,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",$),f.attr("scroll-shrink","true"),o.nextTick(p,!1),function(){f.off("scroll",$),f.attr("scroll-shrink","false"),p()}):t.noop}function p(){h=s.prop("offsetHeight");var e=-h*E+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var h,f,g=t.noop,b=0,v=0,E=l.mdShrinkSpeedFactor||.5,$=e.throttle(m),C=o.debounce(p,5e3);d.$on("$mdContentLoaded",c),l.$observe("mdScrollShrink",i),l.ngShow&&d.$watch(l.ngShow,p),l.ngHide&&d.$watch(l.ngHide,p),d.$on("$destroy",g)}s.addClass("_md"),i(s),o.nextTick(function(){s.addClass("_md-toolbar-transitions")},!1),t.isDefined(l.mdScrollShrink)&&c()}}}e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"],t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e)}(),function(){function e(e,n,o,i,r,a,d,s,l,c){function m(d,l,m){function b(){d.delay=d.delay||f}function v(){var e="center top";switch(d.direction){case"left":e="right center";break;case"right":e="left center";break;case"top":e="center bottom";break;case"bottom":e="center top"}S.css("transform-origin",e)}function E(e){e?A():w()}function $(){if(l[0]&&"MutationObserver"in n){var e=new MutationObserver(function(e){e.forEach(function(e){"md-visible"===e.attributeName&&(d.visibleWatcher||(d.visibleWatcher=d.$watch("visible",E))),"md-direction"===e.attributeName&&k(d.direction)})});e.observe(l[0],{attributes:!0}),m.hasOwnProperty("mdVisible")&&(d.visibleWatcher=d.$watch("visible",E))}else d.visibleWatcher=d.$watch("visible",E),d.$watch("direction",k);var t=function(){d.$destroy()};l.one("$destroy",t),_.one("$destroy",t),d.$on("$destroy",function(){T(!1),l.remove(),e&&e.disconnect()}),l.text().indexOf(c.startSymbol())>-1&&d.$watch(function(){return l.text().trim()},C)}function C(e){if((e||!_.attr("aria-label"))&&!_.text().trim()){var t=e||l.text().trim(),n=c(t)(_.scope());_.attr("aria-label",n)}}function M(){l.detach(),l.attr("role","tooltip")}function y(){function o(){T(!1)}var a=!1;if(_[0]&&"MutationObserver"in n){var s=new MutationObserver(function(e){e.some(function(e){return"disabled"===e.attributeName&&_[0].disabled})&&r.nextTick(function(){T(!1)})});s.observe(_[0],{attributes:!0})}var l=function(){c=document.activeElement===_[0]},c=!1;t.element(n).on("blur",l).on("resize",H),document.addEventListener("scroll",o,!0),d.$on("$destroy",function(){t.element(n).off("blur",l).off("resize",H),_.off(u,h).off(p,f).off("mousedown",g),f(),document.removeEventListener("scroll",o,!0),s&&s.disconnect()});var h=function(e){"focus"===e.type&&c?c=!1:d.visible||(_.on(p,f),T(!0),"touchstart"===e.type&&_.one("touchend",function(){r.nextTick(function(){i.one("touchend",f)},!1)}))},f=function(){var t=d.hasOwnProperty("autohide")?d.autohide:m.hasOwnProperty("mdAutohide");(t||a||i[0].activeElement!==_[0])&&(D&&(e.cancel(D),T.queued=!1,D=null),_.off(p,f),_.triggerHandler("blur"),T(!1)),a=!1},g=function(){a=!0};_.on("mousedown",g),_.on(u,h)}function T(t){T.queued&&T.value===!!t||!T.queued&&d.visible===!!t||(T.value=!!t,T.queued||(t?(T.queued=!0,D=e(function(){d.visible=T.value,T.queued=!1,D=null,d.visibleWatcher||E(d.visible)},d.delay)):r.nextTick(function(){d.visible=!1,d.visibleWatcher||E(!1)})))}function A(){if(l[0].textContent.trim()){if(l.css({top:0,left:0}),N.append(l),r.hasComputedStyle(l,"display","none"))return d.visible=!1,void l.detach();k(),s.addClass(S,h).then(function(){l.addClass(h)})}}function w(){s.removeClass(S,h).then(function(){l.removeClass(h),d.visible||l.detach()})}function k(){d.visible&&(v(),x())}function x(){function e(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,N.prop("scrollWidth")-n.width-g),t.left=Math.max(t.left,g),t.top=Math.min(t.top,N.prop("scrollHeight")-n.height-g),t.top=Math.max(t.top,g),t}function t(e){return"left"===e?{left:o.left-n.width-g,top:o.top+o.height/2-n.height/2}:"right"===e?{left:o.left+o.width+g,top:o.top+o.height/2-n.height/2}:"top"===e?{left:o.left+o.width/2-n.width/2,top:o.top-n.height-g}:{left:o.left+o.width/2-n.width/2,top:o.top+o.height+g}}var n=r.offsetRect(l,N),o=r.offsetRect(_,N),i=t(d.direction),a=l.prop("offsetParent");d.direction?i=e(i):a&&i.top>a.scrollHeight-n.height-g&&(i=e(t("top"))),l.css({left:i.left+"px",top:i.top+"px"})}a(l);var _=r.getParentWithPointerEvents(l),S=t.element(l[0].getElementsByClassName("md-content")[0]),N=t.element(document.body),D=null,H=o.throttle(function(){k()});s.pin&&s.pin(l,_),b(),M(),y(),v(),$(),C()}var u="focus touchstart mouseenter",p="blur touchcancel mouseleave",h="md-show",f=0,g=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="md-content _md" ng-transclude></div>',scope:{delay:"=?mdDelay",visible:"=?mdVisible",autohide:"=?mdAutohide",direction:"@?mdDirection"},compile:function(e,t){return t.mdDirection||t.$set("mdDirection","bottom"),m}}}e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q","$interpolate"],t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e)}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,i,r,a,d,s){this.$rootScope=i,this.$scope=a,this.$element=d,this.$attrs=s,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.$attrs.mdTopIndex?(this.bindTopIndex=o(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=d[0].querySelector(".md-virtual-repeat-scroller"),this.sizer=this.scroller.querySelector(".md-virtual-repeat-sizer"),this.offsetter=this.scroller.querySelector(".md-virtual-repeat-offsetter");var l=t.bind(this,this.updateSize);e(t.bind(this,function(){l();var e=n.debounce(l,10,null,!1),o=t.element(r);this.size||e(),o.on("resize",e),a.$on("$destroy",function(){o.off("resize",e)}),a.$emit("$md-resize-enable"),a.$on("$md-resize",l)}))}function i(e){return{controller:r,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,i=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),r=i[1],a=e(i[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,i){o[0].link_(o[1],i,r,a,d)}}}}function r(e,n,o,i,r,a,d,s){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=i,this.$document=r,this.$rootScope=a,this.$$rAF=d,this.onDemand=s.parseAttributeBoolean(o.mdOnDemand),this.browserCheckUrlChange=i.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[],e.$on("$destroy",t.bind(this,this.cleanupBlocks_))}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}o.$inject=["$$rAF","$mdUtil","$parse","$rootScope","$window","$scope","$element","$attrs"],r.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF","$mdUtil"],i.$inject=["$parse"],t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",i);var d=1533917,s=3;o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px"},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height"},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",e<d)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";
var o=Math.floor(e/d),i=document.createElement("div");i.style[t]="1533917px",i.style[n]="1px";for(var r=0;r<o;r++)this.sizer.appendChild(i.cloneNode(!1));i.style[t]=e-o*d+"px",this.sizer.appendChild(i)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;if(!n||t<n)this.originalSize||(this.originalSize=this.size),this.setSize_(t);else if(null!==this.originalSize){this.unsetSize_();var o=this.originalSize;this.originalSize=null,o||this.updateSize(),this.setSize_(o||this.size)}this.repeater.containerUpdated()}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e=t.element(document)[0],n="rtl"!=e.dir&&"rtl"!=e.body.dir;n||this.maxSize||(this.scroller.scrollLeft=this.scrollSize,this.maxSize=this.scroller.scrollLeft);var o=this.isHorizontal()?n?this.scroller.scrollLeft:this.maxSize-this.scroller.scrollLeft:this.scroller.scrollTop;if(!(o===this.scrollOffset||o>this.scrollSize-this.size)){var i=this.repeater.getItemSize();if(i){var r=Math.max(0,Math.floor(o/i)-s),a=(this.isHorizontal()?"translateX(":"translateY(")+(!this.isHorizontal()||n?r*i:-(r*i))+"px)";if(this.scrollOffset=o,this.offsetter.style.webkitTransform=a,this.offsetter.style.transform=a,this.bindTopIndex){var d=Math.floor(o/i);d!==this.topIndex&&d<this.repeater.getItemCount()&&(this.topIndex=d,this.bindTopIndex.assign(this.$scope,d),this.$rootScope.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},r.Block,r.prototype.link_=function(e,n,o,i,r){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=i,this.extraName=r,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},r.prototype.cleanupBlocks_=function(){t.forEach(this.pooledBlocks,function(e){e.element.remove()})},r.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated()}},r.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},r.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t)}))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_&&this.unwatchItemSize_!==t.noop&&this.unwatchItemSize_(),this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.readItemSize_()})),void(this.$rootScope.$$phase||this.$scope.$digest()))},r.prototype.getItemSize=function(){return this.itemSize},r.prototype.getItemCount=function(){return this.itemsLength},r.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,i=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset()){this.items=e;var r=this.container.getScrollOffset();this.container.resetScroll(),this.container.scrollTo(r)}if(o!==this.itemsLength&&(i=!0,this.itemsLength=o),this.items=e,(e!==n||i)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,i&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var a=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(a)}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var d,s,l=[],c=[];for(d=this.newStartIndex;d<this.newEndIndex&&null==this.blocks[d];d++)s=this.getBlock_(d),this.updateBlock_(s,d),l.push(s);for(;null!=this.blocks[d];d++)this.updateBlock_(this.blocks[d],d);for(var m=d-1;d<this.newEndIndex;d++)s=this.getBlock_(d),this.updateBlock_(s,d),c.push(s);l.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(l),this.$element[0].nextSibling),c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.blocks[m]&&this.blocks[m].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1},r.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},r.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest())},r.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},r.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},r.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},r.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+s,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-s)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;n<t;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){function e(e){function t(t,a,d){var s="";d.$observe("mdWhiteframe",function(t){t=parseInt(t,10)||r,t!=n&&(t>i||t<o)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+o+" and "+i,a[0]),t=r);var l=t==n?"":"md-whiteframe-"+t+"dp";d.$updateClass(l,s),s=l})}var n=-1,o=1,i=24,r=4;return{link:t}}e.$inject=["$log"],t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e)}(),function(){function e(e,o,d,s,l,c,m,u,p,h,f){function g(){d.initOptionalProperties(e,p,{searchText:"",selectedItem:null}),l(o),C(),d.nextTick(function(){y(),E(),e.autofocus&&o.on("focus",$)})}function b(){e.requireMatch&&Se&&Se.$setValidity("md-require-match",!!e.selectedItem)}function v(){function t(){var e=0,t=o.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop")}return e}function n(){var e=Me.scrollContainer.getBoundingClientRect(),t={};e.right>m.right-r&&(t.left=l.right-e.width+"px"),Me.$.scrollContainer.css(t)}if(!Me)return d.nextTick(v,!1,e);var s,l=Me.wrap.getBoundingClientRect(),c=Me.snap.getBoundingClientRect(),m=Me.root.getBoundingClientRect(),u=c.bottom-m.top,h=m.bottom-c.top,f=l.left-m.left,g=l.width,b=t();p.mdFloatingLabel&&(f+=a,g-=2*a),s={left:f+"px",minWidth:g+"px",maxWidth:Math.max(l.right-m.left,m.right-l.left)-r+"px"},u>h&&m.height-l.bottom-r<i?(s.top="auto",s.bottom=h+"px",s.maxHeight=Math.min(i,l.top-m.top-r)+"px"):(s.top=u-b+"px",s.bottom="auto",s.maxHeight=Math.min(i,m.bottom+d.scrollTop()-l.bottom-r)+"px"),Me.$.scrollContainer.css(s),d.nextTick(n,!1)}function E(){Me.$.root.length&&(l(Me.$.scrollContainer),Me.$.scrollContainer.detach(),Me.$.root.append(Me.$.scrollContainer),m.pin&&m.pin(Me.$.scrollContainer,u))}function $(){Me.input.focus()}function C(){var n=parseInt(e.delay,10)||0;p.$observe("disabled",function(e){Ee.isDisabled=d.parseAttributeBoolean(e,!1)}),p.$observe("required",function(e){Ee.isRequired=d.parseAttributeBoolean(e,!1)}),p.$observe("readonly",function(e){Ee.isReadonly=d.parseAttributeBoolean(e,!1)}),e.$watch("searchText",n?d.debounce(L,n):L),e.$watch("selectedItem",N),t.element(c).on("resize",v),e.$on("$destroy",M)}function M(){if(Ee.hidden||d.enableScrolling(),t.element(c).off("resize",v),Me){var e=["ul","scroller","scrollContainer","input"];t.forEach(e,function(e){Me.$[e].remove()})}}function y(){Me={main:o[0],scrollContainer:o[0].querySelector(".md-virtual-repeat-container"),scroller:o[0].querySelector(".md-virtual-repeat-scroller"),ul:o.find("ul")[0],input:o.find("input")[0],wrap:o.find("md-autocomplete-wrap")[0],root:document.body},Me.li=Me.ul.getElementsByTagName("li"),Me.snap=T(),Me.$=A(Me),Se=Me.$.input.controller("ngModel")}function T(){for(var e=o;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return Me.wrap}function A(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function w(e,n){!e&&n?(v(),Me&&(d.disableScrollAround(Me.ul),_e=k(t.element(Me.wrap)))):e&&!n&&(d.enableScrolling(),_e&&(_e(),_e=null))}function k(e){function t(e){e.preventDefault()}return e.on("wheel",t),e.on("touchmove",t),function(){e.off("wheel",t),e.off("touchmove",t)}}function x(){Te=!0}function _(){we||Ee.hidden||Me.input.focus(),Te=!1,Ee.hidden=Y()}function S(){Me.input.focus()}function N(t,n){b(),t?q(t).then(function(o){e.searchText=o,I(t,n)}):n&&e.searchText&&q(n).then(function(t){t.toString().toLowerCase()===e.searchText.toLowerCase()&&(e.searchText="")}),t!==n&&D()}function D(){t.isFunction(e.itemChange)&&e.itemChange(z(e.selectedItem))}function H(){t.isFunction(e.textChange)&&e.textChange()}function I(e,t){Ae.forEach(function(n){n(e,t)})}function O(e){Ae.indexOf(e)==-1&&Ae.push(e)}function R(e){var t=Ae.indexOf(e);t!=-1&&Ae.splice(t,1)}function L(t,n){Ee.index=W(),t!==n&&(b(),q(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&H(),ne()?fe():(Ee.matches=[],V(!1),le()))}))}function P(e){we=!1,Te||(Ee.hidden=Y(),ve("ngBlur",{$event:e}))}function F(e){e&&(Te=!1,we=!1),Me.input.blur()}function B(e){we=!0,K()&&ne()&&fe(),Ee.hidden=Y(),ve("ngFocus",{$event:e})}function U(t){switch(t.keyCode){case s.KEY_CODE.DOWN_ARROW:if(Ee.loading)return;t.stopPropagation(),t.preventDefault(),Ee.index=Math.min(Ee.index+1,Ee.matches.length-1),me(),le();break;case s.KEY_CODE.UP_ARROW:if(Ee.loading)return;t.stopPropagation(),t.preventDefault(),Ee.index=Ee.index<0?Ee.matches.length-1:Math.max(0,Ee.index-1),me(),le();break;case s.KEY_CODE.TAB:if(_(),Ee.hidden||Ee.loading||Ee.index<0||Ee.matches.length<1)return;ie(Ee.index);break;case s.KEY_CODE.ENTER:if(Ee.hidden||Ee.loading||Ee.index<0||Ee.matches.length<1)return;if(J())return;t.stopPropagation(),t.preventDefault(),ie(Ee.index);break;case s.KEY_CODE.ESCAPE:if(t.preventDefault(),!G())return;t.stopPropagation(),ae(),e.searchText&&X("clear")&&de(),Ee.hidden=!0,X("blur")&&F(!0)}}function j(){return t.isNumber(e.minLength)?e.minLength:1}function q(n){function o(t){return t&&e.itemText?e.itemText(z(t)):null}return h.when(o(n)||n).then(function(e){return e&&!t.isString(e)&&f.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."),e})}function z(e){if(!e)return n;var t={};return Ee.itemName&&(t[Ee.itemName]=e),t}function W(){return e.autoselect?0:-1}function V(e){Ee.loading!=e&&(Ee.loading=e),Ee.hidden=Y()}function Y(){return!K()||!Q()}function K(){return!(Ee.loading&&!Z())&&(!J()&&!!we)}function G(){return X("blur")||!Ee.hidden||Ee.loading||X("clear")&&e.searchText}function X(t){return!e.escapeOptions||e.escapeOptions.toLowerCase().indexOf(t)!==-1}function Q(){return ne()&&Z()||he()}function Z(){return!!Ee.matches.length}function J(){return!!Ee.scope.selectedItem}function ee(){return Ee.loading&&!J()}function te(){return q(Ee.matches[Ee.index])}function ne(){return(e.searchText||"").length>=j()}function oe(e,t,n){Object.defineProperty(Ee,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function ie(t){d.nextTick(function(){q(Ee.matches[t]).then(function(e){var t=Me.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=Ee.matches[t],V(!1)})},!1)}function re(){ae(),de()}function ae(){Ee.index=0,Ee.matches=[]}function de(){V(!0),e.searchText="";var t=document.createEvent("CustomEvent");t.initCustomEvent("change",!0,!0,{value:""}),Me.input.dispatchEvent(t),Me.input.blur(),e.searchText="",Me.input.focus()}function se(n){function o(t){t&&(t=h.when(t),xe++,V(!0),d.nextTick(function(){t.then(i)["finally"](function(){0===--xe&&V(!1)})},!0,e))}function i(t){ye[a]=t,(n||"")===(e.searchText||"")&&ge(t)}var r=e.$parent.$eval(Ce),a=n.toLowerCase(),s=t.isArray(r),l=!!r.then;s?i(r):l&&o(r)}function le(){te().then(function(e){Ee.messages=[ce(),e]})}function ce(){if(ke===Ee.matches.length)return"";switch(ke=Ee.matches.length,Ee.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+Ee.matches.length+" matches available."}}function me(){if(Me.li[0]){var e=Me.li[0].offsetHeight,t=e*Ee.index,n=t+e,o=Me.scroller.clientHeight,i=Me.scroller.scrollTop;t<i?pe(t):n>i+o&&pe(n-o)}}function ue(){return 0!==xe}function pe(e){Me.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function he(){var e=(Ee.scope.searchText||"").length;return Ee.hasNotFound&&!Z()&&(!Ee.loading||ue())&&e>=j()&&(we||Te)&&!J()}function fe(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&ye[n]?ge(ye[n]):se(t),Ee.hidden=Y()}function ge(t){Ee.matches=t,Ee.hidden=Y(),Ee.loading&&V(!1),e.selectOnMatch&&be(),le(),v()}function be(){var t=e.searchText,n=Ee.matches,o=n[0];1===n.length&&q(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&ie(0)})}function ve(t,n){p[t]&&e.$parent.$eval(p[t],n||{})}var Ee=this,$e=e.itemsExpr.split(/ in /i),Ce=$e[1],Me=null,ye={},Te=!1,Ae=[],we=!1,ke=0,xe=0,_e=null,Se=null;return oe("hidden",w,!0),Ee.scope=e,Ee.parent=e.$parent,Ee.itemName=$e[0],Ee.matches=[],Ee.loading=!1,Ee.hidden=!0,Ee.index=null,Ee.messages=[],Ee.id=d.nextUid(),Ee.isDisabled=null,Ee.isRequired=null,Ee.isReadonly=null,Ee.hasNotFound=!1,Ee.keydown=U,Ee.blur=P,Ee.focus=B,Ee.clear=re,Ee.select=ie,Ee.listEnter=x,Ee.listLeave=_,Ee.mouseUp=S,Ee.getCurrentDisplayValue=te,Ee.registerSelectedItemWatcher=O,Ee.unregisterSelectedItemWatcher=R,Ee.notFoundVisible=he,Ee.loadingIsVisible=ee,Ee.positionDropdown=v,g()}e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q","$log"],t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=41,i=5.5*o,r=8,a=2}(),function(){function e(e){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",requireMatch:"=?mdRequireMatch",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId",escapeOptions:"@?mdEscapeOptions"},link:function(e,t,n,o){o.hasNotFound=!!t.attr("md-has-not-found")},template:function(t,n){function o(){var e=t.find("md-item-template").detach(),n=e.length?e.html():t.html();return e.length||t.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function i(){var e=t.find("md-not-found").detach(),n=e.length?e.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return n.mdFloatingLabel?'            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=l?'tabindex="'+l+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur($event)"                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  '+(null!=n.mdNoAsterisk?'md-no-asterisk="'+n.mdNoAsterisk+'"':"")+"                  "+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+s+"</div>            </md-input-container>":'            <input type="search"                '+(null!=l?'tabindex="'+l+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur($event)"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                '+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear($event)">              <md-icon md-svg-src="'+e.mdClose+'"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '}var a=i(),d=o(),s=t.html(),l=n.tabindex;return a&&t.attr("md-has-not-found",!0),t.attr("tabindex","-1"),"        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel, 'md-menu-showing': !$mdAutocompleteCtrl.hidden }\">          "+r()+'          <md-progress-linear              class="'+(n.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+d+"                  </li>"+a+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'}}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),function(){function e(e,t){function n(e,n,o){return function(e,n,i){function r(n,o){s[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){s[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||s.$digest(),t=n=!1}))}),s.$watch(function(){n=!0})}var d=e.$mdAutocompleteCtrl,s=d.parent.$new(),l=d.itemName;r("$index","$index"),r("item",l),a(),o(s,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e)}(),function(){function e(e,t,n){this.$scope=e,this.$element=t,this.$attrs=n,this.regex=null}e.$inject=["$scope","$element","$attrs"],t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.prototype.init=function(e,t){this.flags=this.$attrs.mdHighlightFlags||"",this.unregisterFn=this.$scope.$watch(function(n){return{term:e(n),contentText:t(n)}}.bind(this),this.onRender.bind(this),!0),this.$element.on("$destroy",this.unregisterFn)},e.prototype.onRender=function(e,t){var n=e.contentText;null!==this.regex&&e.term===t.term||(this.regex=this.createRegex(e.term,this.flags)),e.term?this.applyRegex(n):this.$element.text(n)},e.prototype.applyRegex=function(e){var n=this.resolveTokens(e);this.$element.empty(),n.forEach(function(e){if(e.isMatch){var n=t.element('<span class="highlight">').text(e.text);this.$element.append(n)}else this.$element.append(document.createTextNode(e))}.bind(this))},e.prototype.resolveTokens=function(e){function t(t,o){var i=e.slice(t,o);i&&n.push(i)}var n=[],o=0;return e.replace(this.regex,function(e,i){t(o,i),n.push({text:e,isMatch:!0}),o=i+e.length}),t(o),n},e.prototype.createRegex=function(e,t){var n="",o="",i=this.sanitizeRegex(e);return t.indexOf("^")>=0&&(n="^"),t.indexOf("$")>=0&&(o="$"),new RegExp(n+i+o,t.replace(/[$\^]/g,""))},e.prototype.sanitizeRegex=function(e){return e&&e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var i=t(o.mdHighlightText),r=e(n.html());return function(e,t,n,o){o.init(i,r)}}}}e.$inject=["$interpolate","$parse"],t.module("material.components.autocomplete").directive("mdHighlightText",e)}(),function(){function o(e,t,o,i,r){this.$scope=e,this.$element=t,this.$mdConstant=o,this.$timeout=i,this.$mdUtil=r,this.isEditting=!1,this.parentController=n,this.enableChipEdit=!1}o.$inject=["$scope","$element","$mdConstant","$timeout","$mdUtil"],t.module("material.components.chips").controller("MdChipCtrl",o),o.prototype.init=function(e){this.parentController=e,this.enableChipEdit=this.parentController.enableChipEdit,this.enableChipEdit&&(this.$element.on("keydown",this.chipKeyDown.bind(this)),this.$element.on("mousedown",this.chipMouseDown.bind(this)),this.getChipContent().addClass("_md-chip-content-edit-is-enabled"))},o.prototype.getChipContent=function(){var e=this.$element[0].getElementsByClassName("md-chip-content");return t.element(e[0])},o.prototype.getContentElement=function(){return t.element(this.getChipContent().children()[0])},o.prototype.getChipIndex=function(){return parseInt(this.$element.attr("index"))},o.prototype.goOutOfEditMode=function(){if(this.isEditting){this.isEditting=!1,this.$element.removeClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="false";var e=this.getChipIndex(),t=this.getContentElement().text();t?(this.parentController.updateChipContents(e,this.getContentElement().text()),this.$mdUtil.nextTick(function(){this.parentController.selectedChip===e&&this.parentController.focusChip(e)}.bind(this))):this.parentController.removeChipAndFocusInput(e)}},o.prototype.selectNodeContents=function(t){var n,o;document.body.createTextRange?(n=document.body.createTextRange(),n.moveToElementText(t),n.select()):e.getSelection&&(o=e.getSelection(),n=document.createRange(),n.selectNodeContents(t),o.removeAllRanges(),o.addRange(n))},o.prototype.goInEditMode=function(){this.isEditting=!0,this.$element.addClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="true",this.getChipContent().on("blur",function(){this.goOutOfEditMode()}.bind(this)),this.selectNodeContents(this.getChipContent()[0])},o.prototype.chipKeyDown=function(e){this.isEditting||e.keyCode!==this.$mdConstant.KEY_CODE.ENTER&&e.keyCode!==this.$mdConstant.KEY_CODE.SPACE?this.isEditting&&e.keyCode===this.$mdConstant.KEY_CODE.ENTER&&(e.preventDefault(),this.goOutOfEditMode()):(e.preventDefault(),this.goInEditMode())},o.prototype.chipMouseDown=function(){this.getChipIndex()==this.parentController.selectedChip&&this.enableChipEdit&&!this.isEditting&&this.goInEditMode()}}(),function(){function e(e,o){function i(n,i){return n.append(o.processTemplate(r)),function(n,o,i,r){var a=r.shift(),d=r.shift();e(o),a&&(d.init(a),t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){a.resetSelectedChip(),a.$scope.$applyAsync()}))}}var r=o.processTemplate(n);return{restrict:"E",require:["^?mdChips","mdChip"],compile:i,controller:"MdChipCtrl"}}e.$inject=["$mdTheming","$mdUtil"],t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>'}(),function(){function e(e){function t(t,n,o,i){n.on("click",function(e){t.$apply(function(){i.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}e.$inject=["$timeout"],t.module("material.components.chips").directive("mdChipRemove",e)}(),function(){function e(e){function t(t,n,o){var i=t.$parent.$mdChipsCtrl,r=i.parent.$new(!1,i.parent);r.$$replacedScope=t,r.$chip=t.$chip,r.$index=t.$index,r.$mdChipsCtrl=i;var a=i.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(r)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}e.$inject=["$compile"],t.module("material.components.chips").directive("mdChipTransclude",e)}(),function(){function e(e,t,n,o,i,r,a){this.$timeout=r,this.$mdConstant=n,this.$scope=e,this.parent=e.$parent,this.$log=o,this.$element=i,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.autocompleteCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.enableChipEdit=a.parseAttributeBoolean(t.mdEnableChipEdit),this.addOnBlur=a.parseAttributeBoolean(t.mdAddOnBlur),this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1}e.$inject=["$scope","$attrs","$mdConstant","$log","$element","$timeout","$mdUtil"],t.module("material.components.chips").controller("MdChipsCtrl",e),e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.autocompleteCtrl&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(0!==this.getCursorPosition(e.target))return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1))}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),this.separatorKeys.indexOf(e.keyCode)!==-1){if(this.autocompleteCtrl&&this.requireMatch||!t)return;if(e.preventDefault(),this.hasMaxChipsReached())return;this.appendChip(t.trim()),this.resetChipBuffer()}}},e.prototype.getCursorPosition=function(e){try{if(e.selectionStart===e.selectionEnd)return e.selectionStart}catch(t){if(!e.value)return 0}},e.prototype.updateChipContents=function(e,t){e>=0&&e<this.items.length&&(this.items[e]=t,this.ngModelCtrl.$setDirty())},e.prototype.isEditingChip=function(){return!!this.$element[0].getElementsByClassName("_md-chip-editing").length},e.prototype.isRemovable=function(){return!!this.ngModelCtrl&&(this.readonly?this.removable:!t.isDefined(this.removable)||this.removable)},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer()&&!this.isEditingChip())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;if(e.preventDefault(),!this.isRemovable())return;this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items&&this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){if(this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n)}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n)});if(o)return}if(!(null==e||this.items.indexOf(e)+1)){var i=this.items.push(e);this.ngModelCtrl.$setDirty(),this.validateModel(),this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:i})}},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0;
},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.hasMaxChipsReached=function(){return t.isString(this.maxChips)&&(this.maxChips=parseInt(this.maxChips,10)||0),this.maxChips>0&&this.items.length>=this.maxChips},e.prototype.validateModel=function(){this.ngModelCtrl.$setValidity("md-max-chips",!this.hasMaxChipsReached())},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);this.ngModelCtrl.$setDirty(),this.validateModel(),t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.autocompleteCtrl?(this.autocompleteCtrl.hidden=!0,this.$mdUtil.nextTick(this.onFocus.bind(this))):this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[this.selectedChip]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),e!=-1&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1;var e=this.getChipBuffer().trim();this.validateModel();var t=this.ngModelCtrl.$valid;this.userInputNgModelCtrl&&(t&=this.userInputNgModelCtrl.$valid),this.addOnBlur&&e&&t&&(this.appendChip(e),this.resetChipBuffer())},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,i=this,r=function(e,n){o.$evalAsync(t.bind(i,n,e))};e.attr({tabindex:0}).on("keydown",function(e){r(e,i.inputKeydown)}).on("focus",function(e){r(e,i.onInputFocus)}).on("blur",function(e){r(e,i.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.autocompleteCtrl=e,e.registerSelectedItemWatcher(t.bind(this,function(e){if(e){if(this.hasMaxChipsReached())return;this.appendChip(e),this.resetChipBuffer()}})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,s,l){function c(n,o){function i(e){if(o.ngModel){var t=r[0].querySelector(e);return t&&t.outerHTML}}var r=o.$mdUserTemplate;o.$mdUserTemplate=null;var c=i("md-chips>md-chip-template"),m=t.prefixer().buildList("md-chip-remove").map(function(e){return"md-chips>*["+e+"]"}).join(","),p=i(m)||u.remove,h=c||u["default"],f=i("md-chips>md-autocomplete")||i("md-chips>input")||u.input,g=r.find("md-chip");return r[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,i,r,d){t.initOptionalProperties(n,o),e(i);var m=d[0];if(c&&(m.enableChipEdit=!1),m.chipContentsTemplate=h,m.chipRemoveTemplate=p,m.chipInputTemplate=f,m.mdCloseIcon=l.mdClose,i.attr({"aria-hidden":!0,tabindex:-1}).on("focus",function(){m.onFocus()}),o.ngModel&&(m.configureNgModel(i.controller("ngModel")),r.mdTransformChip&&m.useTransformChipExpression(),r.mdOnAppend&&m.useOnAppendExpression(),r.mdOnAdd&&m.useOnAddExpression(),r.mdOnRemove&&m.useOnRemoveExpression(),r.mdOnSelect&&m.useOnSelectExpression(),f!=u.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){if(0===f.indexOf("<md-autocomplete")){var e=i.find("md-autocomplete");m.configureAutocomplete(e.controller("mdAutocomplete"))}m.configureUserInput(i.find("input"))})}),t.nextTick(function(){var e=i.find("input");e&&e.toggleClass("md-input",!0)})),g.length>0){var b=a(g.clone())(n.$parent);s(function(){i.find("md-chips-wrap").prepend(b)})}}}function m(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(i),remove:t.processTemplate(r)}}var u=m();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),u.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:c,scope:{readonly:"=readonly",removable:"=mdRemovable",placeholder:"@",secondaryPlaceholder:"@",maxChips:"@mdMaxChips",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch"}}}e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout","$$mdSvgRegistry"],t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',i="      <span>{{$chip}}</span>",r='      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>'}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.itemName=function(e){return e[this.contactName]},e.prototype.filterSelectedContacts=function(e){return this.contacts.indexOf(e)==-1}}(),function(){function e(e,t){function o(n,o){return function(n,i,r,a){t.initOptionalProperties(n,o),e(i),i.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",highlightFlags:"@?mdHighlightFlags"}}}e.$inject=["$mdTheming","$mdUtil"],t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>'}(),function(){!function(){function e(){return{template:function(e,t){var n=t.hasOwnProperty("ngIf")?"":'ng-if="calendarCtrl.isInitialized"',o='<div ng-switch="calendarCtrl.currentView" '+n+'><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return o},scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter",_currentView:"@mdCurrentView"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"calendarCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.configureNgModel(i)}}}function n(e,n,o,r,a,d,s,l,c){d(e),this.$element=e,this.$scope=n,this.dateUtil=o,this.$mdUtil=r,this.keyCode=a.KEY_CODE,this.$$rAF=s,this.today=this.dateUtil.createDateAtMidnight(),this.ngModelCtrl=null,this.currentView=this._currentView||"month",this.SELECTED_DATE_CLASS="md-calendar-selected-date",this.TODAY_CLASS="md-calendar-date-today",this.FOCUSED_DATE_CLASS="md-focus",this.id=i++,this.displayDate=null,this.selectedDate=null,this.firstRenderableDate=null,this.lastRenderableDate=null,this.isInitialized=!1,this.width=0,this.scrollbarWidth=0,l.tabindex||e.attr("tabindex","-1");var m=t.bind(this,this.handleKeyEvent);t.element(document.body).on("keydown",m),n.$on("$destroy",function(){t.element(document.body).off("keydown",m)}),this.minDate&&this.minDate>c.firstRenderableDate?this.firstRenderableDate=this.minDate:this.firstRenderableDate=c.firstRenderableDate,this.maxDate&&this.maxDate<c.lastRenderableDate?this.lastRenderableDate=this.maxDate:this.lastRenderableDate=c.lastRenderableDate}n.$inject=["$element","$scope","$$mdDateUtil","$mdUtil","$mdConstant","$mdTheming","$$rAF","$attrs","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendar",e);var o=340,i=0;n.prototype.configureNgModel=function(e){var t=this;t.ngModelCtrl=e,t.$mdUtil.nextTick(function(){t.isInitialized=!0}),e.$render=function(){var e=this.$viewValue;t.$scope.$broadcast("md-calendar-parent-changed",e),t.selectedDate||(t.selectedDate=e),t.displayDate||(t.displayDate=t.selectedDate||t.today)}},n.prototype.setNgModelValue=function(e){var t=this.dateUtil.createDateAtMidnight(e);return this.focus(t),this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render(),t},n.prototype.setCurrentView=function(e,n){var o=this;o.$mdUtil.nextTick(function(){o.currentView=e,n&&(o.displayDate=t.isDate(n)?n:new Date(n))})},n.prototype.focus=function(e){if(this.dateUtil.isValidDate(e)){var t=this.$element[0].querySelector(".md-focus");t&&t.classList.remove(this.FOCUSED_DATE_CLASS);var n=this.getDateId(e,this.currentView),o=document.getElementById(n);o&&(o.classList.add(this.FOCUSED_DATE_CLASS),o.focus(),this.displayDate=e)}else{var i=this.$element[0].querySelector("[ng-switch]");i&&i.focus()}},n.prototype.getActionFromKeyEvent=function(e){var t=this.keyCode;switch(e.which){case t.ENTER:return"select";case t.RIGHT_ARROW:return"move-right";case t.LEFT_ARROW:return"move-left";case t.DOWN_ARROW:return e.metaKey?"move-page-down":"move-row-down";case t.UP_ARROW:return e.metaKey?"move-page-up":"move-row-up";case t.PAGE_DOWN:return"move-page-down";case t.PAGE_UP:return"move-page-up";case t.HOME:return"start";case t.END:return"end";default:return null}},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());var n=t.getActionFromKeyEvent(e);n&&(e.preventDefault(),e.stopPropagation(),t.$scope.$broadcast("md-calendar-parent-action",n))})},n.prototype.hideVerticalScrollbar=function(e){function t(){var t=n.width||o,i=n.scrollbarWidth,a=e.calendarScroller;r.style.width=t+"px",a.style.width=t+i+"px",a.style.paddingRight=i+"px"}var n=this,i=e.$element[0],r=i.querySelector(".md-calendar-scroll-mask");n.width>0?t():n.$$rAF(function(){var o=e.calendarScroller;n.scrollbarWidth=o.offsetWidth-o.clientWidth,n.width=i.querySelector("table").offsetWidth,t()})},n.prototype.getDateId=function(e,t){if(!t)throw new Error("A namespace for the date id has to be specified.");return["md",this.id,t,e.getFullYear(),e.getMonth(),e.getDate()].join("-")},n.prototype.updateVirtualRepeat=function(){var e=this.$scope,t=e.$on("$md-resize-enable",function(){e.$$phase||e.$apply(),t()})}}()}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarMonth"],controller:n,controllerAs:"monthCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i,r){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.dateLocale=r,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var a=this;this.cellClickHandler=function(){var e=i.getTimestampFromNode(this);a.$scope.$apply(function(){a.calendarCtrl.setNgModelValue(e)})},this.headerClickHandler=function(){a.calendarCtrl.setCurrentView("year",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o=265,i=45;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getMonthDistance(e.firstRenderableDate,e.lastRenderableDate)+2},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getSelectedMonthIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getMonthDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeSelectedDate=function(e){var t=this,n=t.calendarCtrl,o=n.selectedDate;n.selectedDate=e,this.changeDisplayDate(e).then(function(){var t=n.SELECTED_DATE_CLASS,i="month";if(o){var r=document.getElementById(n.getDateId(o,i));r&&(r.classList.remove(t),r.setAttribute("aria-selected","false"))}if(e){var a=document.getElementById(n.getDateId(e,i));a&&(a.classList.add(t),a.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildWeekHeader(),this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.calendarCtrl.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;o<7;o++){var i=document.createElement("th");i.textContent=t[(o+e)%7],n.appendChild(i)}this.$element.find("thead").append(n)},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeSelectedDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)n.setNgModelValue(o);else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementDays(o,1);break;case"move-left":i=r.incrementDays(o,-1);break;case"move-page-down":i=r.incrementMonths(o,1);break;case"move-page-up":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementDays(o,7);break;case"move-row-up":i=r.incrementDays(o,-7);break;case"start":i=r.getFirstDateOfMonth(o);break;case"end":i=r.getLastDateOfMonth(o)}i&&(i=this.dateUtil.clampDate(i,n.minDate,n.maxDate),this.changeDisplayDate(i).then(function(){n.focus(i)}))}}}()}(),function(){!function(){function e(e,t){var o=e('<md-icon md-svg-src="'+t.mdTabsArrow+'"></md-icon>')({})[0];return{require:["^^mdCalendar","^^mdCalendarMonth","mdCalendarMonthBody"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthBodyCtrl",bindToController:!0,link:function(e,t,n,i){var r=i[0],a=i[1],d=i[2];d.calendarCtrl=r,d.monthCtrl=a,d.arrowIcon=o.cloneNode(!0),e.$watch(function(){return d.offset},function(e,t){e!==t&&d.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.monthCtrl=null,this.calendarCtrl=null,this.offset=null,this.focusAfterAppend=null}e.$inject=["$compile","$$mdSvgRegistry"],n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonthBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementMonths(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.monthCtrl,n=this.calendarCtrl,o=document.createElement("td");if(o.tabIndex=-1,o.classList.add("md-calendar-date"),o.setAttribute("role","gridcell"),e){o.setAttribute("tabindex","-1"),o.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),o.id=n.getDateId(e,"month"),o.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,n.today)&&o.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameDay(e,n.selectedDate)&&(o.classList.add(n.SELECTED_DATE_CLASS),o.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var r=document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"),r.textContent=i,o.appendChild(r),o.addEventListener("click",t.cellClickHandler),n.displayDate&&this.dateUtil.isSameDay(e,n.displayDate)&&(this.focusAfterAppend=o)}else o.classList.add("md-calendar-date-disabled"),o.textContent=i}return o},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e))},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),i=this.dateUtil.getNumberOfDaysInMonth(t),r=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);r.appendChild(d);var s=this.offset===this.monthCtrl.items.length-1,l=0,c=document.createElement("td"),m=document.createElement("span");if(m.textContent=this.dateLocale.monthHeaderFormatter(t),c.appendChild(m),c.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate?c.classList.add("md-calendar-month-label-disabled"):(c.addEventListener("click",this.monthCtrl.headerClickHandler),c.setAttribute("data-timestamp",n.getTime()),c.setAttribute("aria-label",this.dateLocale.monthFormatter(t)),c.appendChild(this.arrowIcon.cloneNode(!0))),o<=2){c.setAttribute("colspan","7");var u=this.buildDateRow();if(u.appendChild(c),r.insertBefore(u,d),s)return r}else l=3,c.setAttribute("colspan","3"),d.appendChild(c);for(var p=l;p<o;p++)d.appendChild(this.buildDateCell());for(var h=o,f=n,g=1;g<=i;g++){if(7===h){if(s)return r;h=0,a++,d=this.buildDateRow(a),r.appendChild(d)}f.setDate(g);var b=this.buildDateCell(f);d.appendChild(b),h++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var v=this.buildDateRow(),E=0;E<7;E++)v.appendChild(this.buildDateCell());r.appendChild(v)}return r},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){function e(){return{template:'<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarYear"],controller:n,controllerAs:"yearCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var r=this;this.cellClickHandler=function(){r.calendarCtrl.setCurrentView("month",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil"],t.module("material.components.datepicker").directive("mdCalendarYear",e);var o=88;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getYearDistance(e.firstRenderableDate,e.lastRenderableDate)+1},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getFocusedYearIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getYearDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeDate=function(e){if(!this.isInitialized)return this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(this.dateUtil.isValidDate(e)&&!this.isMonthTransitionInProgress){var t=this,n=this.animateDateChange(e);return t.isMonthTransitionInProgress=!0,t.calendarCtrl.displayDate=e,n.then(function(){t.isMonthTransitionInProgress=!1})}},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getYearDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)this.changeDate(o).then(function(){n.setCurrentView("month",o),n.focus(o)});else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementMonths(o,1);break;case"move-left":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementMonths(o,6);break;case"move-row-up":i=r.incrementMonths(o,-6)}if(i){var a=n.minDate?r.getFirstDateOfMonth(n.minDate):null,d=n.maxDate?r.getFirstDateOfMonth(n.maxDate):null;i=r.getFirstDateOfMonth(this.dateUtil.clampDate(i,a,d)),this.changeDate(i).then(function(){n.focus(i)})}}},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(e,e.handleKeyEvent))}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","^^mdCalendarYear","mdCalendarYearBody"],scope:{offset:"=mdYearOffset"},controller:n,controllerAs:"mdYearBodyCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1],a=o[2];a.calendarCtrl=i,a.yearCtrl=r,e.$watch(function(){return a.offset},function(e,t){e!==t&&a.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.calendarCtrl=null,this.yearCtrl=null,this.offset=null,this.focusAfterAppend=null}n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarYearBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementYears(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForYear(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildMonthCell=function(e,t){var n=this.calendarCtrl,o=this.yearCtrl,i=this.buildBlankCell(),r=new Date(e,t,1);i.setAttribute("aria-label",this.dateLocale.monthFormatter(r)),i.id=n.getDateId(r,"year"),i.setAttribute("data-timestamp",r.getTime()),this.dateUtil.isSameMonthAndYear(r,n.today)&&i.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameMonthAndYear(r,n.selectedDate)&&(i.classList.add(n.SELECTED_DATE_CLASS),i.setAttribute("aria-selected","true"));var a=this.dateLocale.shortMonths[t];if(this.dateUtil.isMonthWithinRange(r,n.minDate,n.maxDate)){var d=document.createElement("span");d.classList.add("md-calendar-date-selection-indicator"),d.textContent=a,i.appendChild(d),i.addEventListener("click",o.cellClickHandler),n.displayDate&&this.dateUtil.isSameMonthAndYear(r,n.displayDate)&&(this.focusAfterAppend=i)}else i.classList.add("md-calendar-date-disabled"),i.textContent=a;return i},n.prototype.buildBlankCell=function(){var e=document.createElement("td");return e.tabIndex=-1,e.classList.add("md-calendar-date"),e.setAttribute("role","gridcell"),e.setAttribute("tabindex","-1"),e},n.prototype.buildCalendarForYear=function(e){var t,n=e.getFullYear(),o=document.createDocumentFragment(),i=document.createElement("tr"),r=document.createElement("td");for(r.className="md-calendar-month-label",r.textContent=n,i.appendChild(r),t=0;t<6;t++)i.appendChild(this.buildMonthCell(n,t));o.appendChild(i);var a=document.createElement("tr");for(a.appendChild(this.buildBlankCell()),t=6;t<12;t++)a.appendChild(this.buildMonthCell(n,t));return o.appendChild(a),o}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e,t){function n(e){if(!e)return"";var n=e.toLocaleTimeString(),o=e;return 0!=e.getHours()||n.indexOf("11:")===-1&&n.indexOf("23:")===-1||(o=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),t("date")(o,"M/d/yyyy")}function o(e){return new Date(e)}function i(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function r(e){return g.shortMonths[e.getMonth()]+" "+e.getFullYear()}function a(e){return g.months[e.getMonth()]+" "+e.getFullYear()}function d(e){return"Week "+e}function s(e){return[g.days[e.getDay()],g.months[e.getMonth()],g.dates[e.getDate()],e.getFullYear()].join(" ")}for(var l=e.DATETIME_FORMATS.SHORTDAY.map(function(e){return e.substring(0,1)}),c=Array(32),m=1;m<=31;m++)c[m]=m;var u="Calendar",p="Open calendar",h=new Date(1880,0,1),f=new Date(h.getFullYear()+250,0,1),g={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||l,dates:this.dates||c,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||n,parseDate:this.parseDate||o,isDateComplete:this.isDateComplete||i,monthHeaderFormatter:this.monthHeaderFormatter||r,monthFormatter:this.monthFormatter||a,weekNumberFormatter:this.weekNumberFormatter||d,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||u,msgOpenCalendar:this.msgOpenCalendar||p,firstRenderableDate:this.firstRenderableDate||h,lastRenderableDate:this.lastRenderableDate||f};return g},t.prototype.$get.$inject=["$locale","$filter"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function i(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&r(e,t)}function d(e,t){var n=o(e);return r(n,t)}function s(e,t){var n=i(e);return r(t,n)}function l(e,t){return b((e.getTime()+t.getTime())/2)}function c(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),i=n(o);return i<e.getDate()?o.setDate(i):o.setDate(e.getDate()),o}function p(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function h(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return null!=e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function v(e,t,n){
var o=b(e),i=f(t)?b(t):null,r=f(n)?b(n):null;return(!i||i<=o)&&(!r||r>=o)}function E(e,t){return u(e,12*t)}function $(e,t){return t.getFullYear()-e.getFullYear()}function C(e,t,n){var o=e;return t&&e<t&&(o=new Date(t.getTime())),n&&e>n&&(o=new Date(n.getTime())),o}function M(e){if(e&&e.hasAttribute("data-timestamp"))return Number(e.getAttribute("data-timestamp"))}function y(e,t,n){var o=e.getMonth(),i=e.getFullYear();return(!t||t.getFullYear()<i||t.getMonth()<=o)&&(!n||n.getFullYear()>i||n.getMonth()>=o)}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:i,isInNextMonth:d,isInPreviousMonth:s,getDateMidpoint:l,isSameMonthAndYear:r,getWeekOfMonth:c,incrementDays:m,incrementMonths:u,getLastDateOfMonth:h,isSameDay:a,getMonthDistance:p,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:v,incrementYears:E,getYearDistance:$,clampDate:C,getTimestampFromNode:M,isMonthWithinRange:y}})}()}(),function(){!function(){function n(e,n,i,r){return{template:function(t,n){var o=n.mdHideIcons,i=n.ariaLabel||n.mdPlaceholder,r="all"===o||"calendar"===o?"":'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="'+e.mdCalendar+'"></md-icon></md-button>',a="all"===o||"triangle"===o?"":'<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>';return r+'<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input '+(i?'aria-label="'+i+'" ':"")+'class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"> '+a+'</div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>'},require:["ngModel","mdDatepicker","?^mdInputContainer","?^form"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",currentView:"@mdCurrentView",dateFilter:"=mdDateFilter",isOpen:"=?mdIsOpen",debounceInterval:"=mdDebounceInterval"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,o,a,l){var c=l[0],m=l[1],u=l[2],p=l[3],h=n.parseAttributeBoolean(a.mdNoAsterisk);if(m.configureNgModel(c,u,r),u){var f=o[0].querySelector(".md-errors-spacer");f&&o.after(t.element("<div>").append(f)),u.setHasPlaceholder(a.mdPlaceholder),u.input=o,u.element.addClass(d).toggleClass(s,"calendar"!==a.mdHideIcons&&"all"!==a.mdHideIcons),u.label?h||a.$observe("required",function(e){u.label.toggleClass("md-required",!!e)}):i.expect(o,"aria-label",a.mdPlaceholder),e.$watch(u.isErrorGetter||function(){return c.$invalid&&(c.$touched||p&&p.$submitted)},u.setInvalid)}else if(p)var g=e.$watch(function(){return p.$submitted},function(e){e&&(m.updateErrorState(),g())})}}}function o(e,n,o,i,r,a,d,s,l,c,m,u){this.$window=i,this.dateLocale=s,this.dateUtil=l,this.$mdConstant=r,this.$mdUtil=d,this.$$rAF=c,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=n[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=n[0].querySelector(".md-datepicker-input-container"),this.calendarPane=n[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=n[0].querySelector(".md-datepicker-button"),this.inputMask=t.element(n[0].querySelector(".md-datepicker-input-mask-opaque")),this.$element=n,this.$attrs=o,this.$scope=e,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(n[0].disabled||t.isString(o.disabled)),this.isCalendarOpen=!1,this.openOnFocus=o.hasOwnProperty("mdOpenOnFocus"),this.mdInputContainer=null,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+d.nextUid(),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowEventName=m.isIos||m.isAndroid?"orientationchange":"resize",this.windowEventHandler=d.debounce(t.bind(this,this.closeCalendarPane),100),this.windowBlurHandler=t.bind(this,this.handleWindowBlur),this.ngDateFilter=u("date"),this.leftMargin=20,this.topMargin=null,o.tabindex?(this.ngInputElement.attr("tabindex",o.tabindex),o.$set("tabindex",null)):o.$set("tabindex","-1"),a(n),a(t.element(this.calendarPane)),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var p=this;e.$on("$destroy",function(){p.detachCalendarPane()}),o.mdIsOpen&&e.$watch("ctrl.isOpen",function(e){e?p.openCalendarPane({target:p.inputElement}):p.closeCalendarPane()})}o.$inject=["$scope","$element","$attrs","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF","$mdGesture","$filter"],n.$inject=["$$mdSvgRegistry","$mdUtil","$mdAria","inputDirective"],t.module("material.components.datepicker").directive("mdDatepicker",n);var i=3,r="md-datepicker-invalid",a="md-datepicker-open",d="_md-datepicker-floating-label",s="_md-datepicker-has-calendar-icon",l=500,c=368,m=360;o.prototype.configureNgModel=function(e,n,o){this.ngModelCtrl=e,this.mdInputContainer=n,this.$attrs.$set("type","date"),o[0].link.pre(this.$scope,{on:t.noop,val:t.noop,0:{}},this.$attrs,[e]);var i=this;i.ngModelCtrl.$formatters.push(function(e){if(e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof e);return i.date=e,i.inputElement.value=i.dateLocale.formatDate(e),i.mdInputContainer&&i.mdInputContainer.setHasValue(!!e),i.resizeInputElement(),i.updateErrorState(),e}),e.$viewChangeListeners.unshift(t.bind(this,this.updateErrorState))},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.setModelValue(n),e.date=n,e.inputElement.value=e.dateLocale.formatDate(n),e.mdInputContainer&&e.mdInputContainer.setHasValue(!!n),e.closeCalendarPane(),e.resizeInputElement(),e.updateErrorState()}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement));var n=t.isDefined(this.debounceInterval)?this.debounceInterval:l;e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,n,e))},o.prototype.attachInteractionListeners=function(){var e=this,n=this.$scope,o=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(t){t.altKey&&t.keyCode==o.DOWN_ARROW&&(e.openCalendarPane(t),n.$digest())}),e.openOnFocus&&(e.ngInputElement.on("focus",t.bind(e,e.openCalendarPane)),t.element(e.$window).on("blur",e.windowBlurHandler),n.$on("$destroy",function(){t.element(e.$window).off("blur",e.windowBlurHandler)})),n.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton&&(this.calendarButton.disabled=e)},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",n<=i)}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n))}else this.ngModelCtrl.$setValidity("valid",null==n);this.ngModelCtrl.$valid||this.inputContainer.classList.add(r)},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0)},this)},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.dateLocale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.dateLocale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.setModelValue(t),this.date=t),this.updateErrorState(t)},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e))},o.prototype.attachCalendarPane=function(){var e=this.calendarPane,n=document.body;e.style.transform="",this.$element.addClass(a),this.mdInputContainer&&this.mdInputContainer.element.addClass(a),t.element(n).addClass("md-datepicker-is-showing");var o=this.inputContainer.getBoundingClientRect(),i=n.getBoundingClientRect();(!this.topMargin||this.topMargin<0)&&(this.topMargin=(this.inputMask.parent().prop("clientHeight")-this.ngInputElement.prop("clientHeight"))/2);var r=o.top-i.top-this.topMargin,d=o.left-i.left-this.leftMargin,s=i.top<0&&0==document.body.scrollTop?-i.top:document.body.scrollTop,l=i.left<0&&0==document.body.scrollLeft?-i.left:document.body.scrollLeft,u=s+this.$window.innerHeight,p=l+this.$window.innerWidth;if(this.inputMask.css({position:"absolute",left:this.leftMargin+"px",top:this.topMargin+"px",width:o.width-1+"px",height:o.height-2+"px"}),d+m>p){if(p-m>0)d=p-m;else{d=l;var h=this.$window.innerWidth/m;e.style.transform="scale("+h+")"}e.classList.add("md-datepicker-pos-adjusted")}r+c>u&&u-c>s&&(r=u-c,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=d+"px",e.style.top=r+"px",document.body.appendChild(e),this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass(a),this.mdInputContainer&&this.mdInputContainer.element.removeClass(a),t.element(document.body).removeClass("md-datepicker-is-showing"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled&&!this.inputFocusedOnWindowBlur){this.isCalendarOpen=this.isOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar(),this.evalAttr("ngFocus");var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler)},!1),e.addEventListener(this.windowEventName,this.windowEventHandler)}},o.prototype.closeCalendarPane=function(){function t(){n.isCalendarOpen=n.isOpen=!1}if(this.isCalendarOpen){var n=this;n.detachCalendarPane(),n.ngModelCtrl.$setTouched(),n.evalAttr("ngBlur"),n.documentElement.off("click touchstart",n.bodyClickHandler),e.removeEventListener(n.windowEventName,n.windowEventHandler),n.calendarPaneOpenedFrom.focus(),n.calendarPaneOpenedFrom=null,n.openOnFocus?n.$mdUtil.nextTick(t):t()}},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.openOnFocus||this.evalAttr(e?"ngFocus":"ngBlur"),this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest()}},o.prototype.handleWindowBlur=function(){this.inputFocusedOnWindowBlur=document.activeElement===this.inputElement},o.prototype.evalAttr=function(e){this.$attrs[e]&&this.$scope.$parent.$eval(this.$attrs[e])},o.prototype.setModelValue=function(e){this.ngModelCtrl.$setViewValue(this.ngDateFilter(e,"yyyy-MM-dd"))}}()}(),function(){function e(e,t,n,o){function i(o,i,r){function a(){var e=i.parent();return!(!e.attr("aria-label")&&!e.text())||!(!e.parent().attr("aria-label")&&!e.parent().text())}function d(){r.mdSvgIcon||r.mdSvgSrc||(r.mdFontIcon&&i.addClass("md-font "+r.mdFontIcon),i.addClass(c))}function s(){if(!r.mdSvgIcon&&!r.mdSvgSrc){r.mdFontIcon&&(i.removeClass(l),i.addClass(r.mdFontIcon),l=r.mdFontIcon);var t=e.fontSet(r.mdFontSet);c!==t&&(i.removeClass(c),i.addClass(t),c=t)}}t(i);var l=r.mdFontIcon,c=e.fontSet(r.mdFontSet);d(),r.$observe("mdFontIcon",s),r.$observe("mdFontSet",s);var m=(i[0].getAttribute(r.$attr.mdSvgSrc),r.alt||r.mdFontIcon||r.mdSvgIcon||i.text()),u=r.$normalize(r.$attr.mdSvgIcon||r.$attr.mdSvgSrc||"");r["aria-label"]||(""===m||a()?i.text()||n.expect(i,"aria-hidden","true"):(n.expect(i,"aria-label",m),n.expect(i,"role","img"))),u&&r.$observe(u,function(t){i.empty(),t&&e(t).then(function(e){i.empty(),i.append(e)})})}return{restrict:"E",link:i}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria","$sce",e])}(),function(){function n(){}function o(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function i(n,o,i,r,a,d){function s(e){if(e=e||"",t.isString(e)||(e=d.getTrustedUrl(e)),E[e])return i.when(c(E[e]));if(C.test(e)||M.test(e))return h(e).then(m(e));e.indexOf(":")==-1&&(e="$default:"+e);var o=n[e]?u:p;return o(e).then(m(e))}function l(e){var o=t.isUndefined(e)||!(e&&e.length);if(o)return n.defaultFontSet;var i=e;return t.forEach(n.fontSets,function(t){t.alias==e&&(i=t.fontSet||i)}),i}function c(e){var n=e.clone(),o="_cache"+a.nextUid();return n.id&&(n.id+=o),t.forEach(n.querySelectorAll("[id]"),function(e){e.id+=o}),n}function m(e){return function(t){return E[e]=f(t)?t:new g(t,n[e]),E[e].clone()}}function u(e){var t=n[e];return h(t.url).then(function(e){return new g(e,t)})}function p(e){function t(t){var n=e.slice(e.lastIndexOf(":")+1),i=t.querySelector("#"+n);return i?new g(i,d):o(e)}function o(e){var t="icon "+e+" not found";return r.warn(t),i.reject(t||e)}var a=e.substring(0,e.lastIndexOf(":"))||"$default",d=n[a];return d?h(d.url).then(t):o(e)}function h(n){function a(n){var o=M.exec(n),r=/base64/i.test(n),a=r?e.atob(o[2]):o[2];return i.when(t.element(a)[0])}function d(e){return i(function(n,i){var a=function(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;r.warn(n),i(e)},d=function(o){$[e]||($[e]=t.element("<div>").append(o)[0].querySelector("svg")),n($[e])};o(e,!0).then(d,a)})}return M.test(n)?a(n):d(n)}function f(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function g(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function b(){var e=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+e+" "+e,focusable:!1},function(e,t){this.element.setAttribute(t,e)},this)}function v(){return this.element.cloneNode(!0)}var E={},$={},C=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,M=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return g.prototype={clone:v,prepare:b},s.fontSet=l,s}i.$inject=["config","$templateRequest","$q","$log","$mdUtil","$sce"],t.module("material.components.icon").constant("$$mdSvgRegistry",{mdTabsArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",mdClose:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",mdCancel:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",mdMenu:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",mdToggleArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",mdCalendar:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg==",mdChecked:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz48L2c+PC9zdmc+"}).provider("$mdIcon",n);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};n.prototype={icon:function(e,t,n){return e.indexOf(":")==-1&&(e="$default:"+e),r[e]=new o(t,n),this},iconSet:function(e,t,n){return r[e]=new o(t,n),this},defaultIconSet:function(e,t){var n="$default";return r[n]||(r[n]=new o(e,t)),r[n].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},$get:["$templateRequest","$q","$log","$mdUtil","$sce",function(e,t,n,o,a){return i(r,e,t,n,o,a)}]}}(),function(){function e(e,o,i,r,a,d,s,l){var c,m,u=a.prefixer(),p=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},c=n,m=i[0].querySelector(u.buildSelector(["ng-click","ng-mouseenter"])),m.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(c[0].querySelectorAll(".md-nested-menu")),c.on("$mdInterimElementRemove",function(){p.isOpen=!1,a.nextTick(function(){p.onIsOpenChanged(p.isOpen)})}),a.nextTick(function(){p.onIsOpenChanged(p.isOpen)});var d="menu_container_"+a.nextUid();c.attr("id",d),t.element(m).attr({"aria-owns":d,"aria-haspopup":"true"}),r.$on("$destroy",t.bind(this,function(){this.disableHoverListener(),e.destroy()})),c.on("$destroy",function(){e.destroy()})};var h,f,g=[];this.enableHoverListener=function(){g.push(s.$on("$mdMenuOpen",function(e,t){c[0].contains(t[0])&&(p.currentlyOpenMenu=t.controller("mdMenu"),p.isAlreadyOpening=!1,p.currentlyOpenMenu.registerContainerProxy(p.triggerContainerProxy.bind(p)))})),g.push(s.$on("$mdMenuClose",function(e,t){c[0].contains(t[0])&&(p.currentlyOpenMenu=n)})),f=t.element(a.nodesToArray(c[0].children[0].children)),f.on("mouseenter",p.handleMenuItemHover),f.on("mouseleave",p.handleMenuItemMouseLeave)},this.disableHoverListener=function(){for(;g.length;)g.shift()();f&&f.off("mouseenter",p.handleMenuItemHover),f&&f.off("mouseleave",p.handleMenuItemMouseLeave)},this.handleMenuItemHover=function(e){if(!p.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");h=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),p.currentlyOpenMenu&&p.currentlyOpenMenu!=n){var e=p.nestLevel+1;p.currentlyOpenMenu.close(!0,{closeTo:e}),p.isAlreadyOpening=!!n,n&&n.open()}else n&&!n.isOpen&&n.open&&(p.isAlreadyOpening=!!n,n&&n.open())},n?100:250);var o=e.currentTarget.querySelector(".md-button:not([disabled])");o&&o.focus()}},this.handleMenuItemMouseLeave=function(){h&&(d.cancel(h),h=n)},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),p.isOpen||(p.enableHoverListener(),p.isOpen=!0,a.nextTick(function(){p.onIsOpenChanged(p.isOpen)}),m=m||(t?t.target:i[0]),m.setAttribute("aria-expanded","true"),r.$emit("$mdMenuOpen",i),e.show({scope:r,mdMenuCtrl:p,nestLevel:p.nestLevel,element:c,target:m,preserveElement:!0,parent:"body"})["finally"](function(){m.setAttribute("aria-expanded","false"),p.disableHoverListener()}))},r.$mdOpenMenu=this.open,this.onIsOpenChanged=function(e){e?(c.attr("aria-hidden","false"),i[0].classList.add("md-open"),t.forEach(p.nestedMenus,function(e){e.classList.remove("md-open")})):(c.attr("aria-hidden","true"),i[0].classList.remove("md-open")),r.$mdMenuIsOpen=p.isOpen},this.focusMenuContainer=function(){var e=c[0].querySelector(u.buildSelector(["md-menu-focus-target","md-autofocus"]));e||(e=c[0].querySelector(".md-button")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return p.isOpen?e.destroy():l.when(!1)},this.close=function(n,o){if(p.isOpen){p.isOpen=!1,a.nextTick(function(){p.onIsOpenChanged(p.isOpen)});var d=t.extend({},o,{skipFocus:n});if(r.$emit("$mdMenuClose",i,d),e.hide(null,o),!n){var s=p.restoreFocusTo||i.find("button")[0];s instanceof t.element&&(s=s[0]),s&&s.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")}}e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q"],t.module("material.components.menu").controller("mdMenuCtrl",e)}(),function(){function e(e){function o(n){n.addClass("md-menu");var o=n.children()[0],a=e.prefixer();if(a.hasAttribute(o,"ng-click")||(o=o.querySelector(a.buildSelector(["ng-click","ng-mouseenter"]))||o),!o||"MD-BUTTON"!=o.nodeName&&"BUTTON"!=o.nodeName||o.hasAttribute("type")||o.setAttribute("type","button"),2!=n.children().length)throw Error(r+"Expected two children elements.");o&&o.setAttribute("aria-haspopup","true");var d=n[0].querySelectorAll("md-menu"),s=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return d&&t.forEach(e.nodesToArray(d),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("_md-nested-menu"),e.setAttribute("md-nest-level",s+1)}),i}function i(e,o,i,r){var a=r[0],d=r[1]!=n,s=t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),l=o.children()[1];o.addClass("_md"),l.hasAttribute("role")||l.setAttribute("role","menu"),s.append(l),o.on("$destroy",function(){s.remove()}),o.append(s),s[0].style.display="none",a.init(s,{isInMenuBar:d})}var r="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:o}}e.$inject=["$mdUtil"],t.module("material.components.menu").directive("mdMenu",e)}(),function(){function e(e){function o(e,o,a,d,s,l,c,m,u){function p(n,o,i){return i.nestLevel?t.noop:(i.disableParentScroll&&!e.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=e.disableScrollAround(i.element,i.parent):i.disableParentScroll=!1,i.hasBackdrop&&(i.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(i.backdrop,d[0].body)),function(){i.backdrop&&i.backdrop.remove(),i.disableParentScroll&&i.restoreScroll()})}function h(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),v(t,n),n.alreadyOpen=!1}return n.cleanupInteraction&&n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function f(n,i,r){function d(){return r.parent.append(i),i[0].style.display="",l(function(e){var t=E(i,r);i.removeClass("md-leave"),m(i,{addClass:"md-active",from:C.toCss(t),to:C.toCss({transform:""})}).start().then(e)})}function u(){if(!r.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(r,{alreadyOpen:!1,isRemoved:!1,target:t.element(r.target),parent:t.element(r.parent),menuContentEl:t.element(i[0].querySelector("md-menu-content"))})}function h(){var e=function(e,t){return c.throttle(function(){if(!r.isRemoved){var n=E(e,t);e.css(C.toCss(n))}})}(i,r);return s.addEventListener("resize",e),s.addEventListener("orientationchange",e),function(){s.removeEventListener("resize",e),s.removeEventListener("orientationchange",e)}}function f(){function t(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:r.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:g(t,r.menuContentEl,r,-1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:g(t,r.menuContentEl,r,1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:r.nestLevel?r.mdMenuCtrl.close():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=r.parent[0]?t.target.click():r.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function o(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function d(t){function o(){n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function i(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)if($.hasAttribute(e,n))return!0;return!1}var a=t.target;do{if(a==r.menuContentEl[0])return;if((i(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!i(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=r.parent[0]||o();break}}while(a=a.parentNode)}i.addClass("md-clickable"),r.backdrop&&r.backdrop.on("click",o),r.menuContentEl.on("keydown",t),r.menuContentEl[0].addEventListener("click",d,!0);var s=r.menuContentEl[0].querySelector($.buildSelector(["md-menu-focus-target","md-autofocus"]));if(!s){var l=r.menuContentEl[0].firstElementChild;s=l&&(l.querySelector(".md-button:not([disabled])")||l.firstElementChild)}return s&&s.focus(),function(){i.removeClass("md-clickable"),r.backdrop&&r.backdrop.off("click",o),r.menuContentEl.off("keydown",t),r.menuContentEl[0].removeEventListener("click",d,!0)}}return u(r),o.inherit(r.menuContentEl,r.target),r.cleanupResizing=h(),r.hideBackdrop=p(n,i,r),d().then(function(e){return r.alreadyOpen=!0,r.cleanupInteraction=f(),e})}function g(t,n,o,i){for(var r,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),s=d.indexOf(a),l=s+i;l>=0&&l<d.length;l+=i){var c=d[l].querySelector(".md-button");if(r=b(c))break}return r}function b(e){if(e&&e.getAttribute("tabindex")!=-1)return e.focus(),d[0].activeElement==e}function v(e,t){t.preserveElement?i(e).style.display="none":i(e).parentNode===i(t.parent)&&i(t.parent).removeChild(i(e))}function E(t,o){function i(e){e.top=Math.max(Math.min(e.top,v.bottom-c.offsetHeight),v.top),e.left=Math.max(Math.min(e.left,v.right-c.offsetWidth),v.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=s.getComputedStyle(m.children[e]).display)return m.children[e]}var l,c=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),p=d[0].body,h=p.getBoundingClientRect(),f=s.getComputedStyle(m),g=o.target[0].querySelector($.buildSelector("md-menu-origin"))||o.target[0],b=g.getBoundingClientRect(),v={left:h.left+r,top:Math.max(h.top,0)+r,bottom:Math.max(h.bottom,Math.max(h.top,0)+h.height)-r,right:h.right-r},E={top:0,left:0,right:0,bottom:0},C={top:0,left:0,right:0,bottom:0},M=o.mdMenuCtrl.positionMode();"target"!=M.top&&"target"!=M.left&&"target-right"!=M.left||(l=a(),l&&(l=l.firstElementChild||l,l=l.querySelector($.buildSelector("md-menu-align-target"))||l,E=l.getBoundingClientRect(),C={top:parseFloat(c.style.top||0),left:parseFloat(c.style.left||0)}));var y={},T="top ";switch(M.top){case"target":y.top=C.top+b.top-E.top;break;case"cascade":y.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":y.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+M.top+'" specified for md-menu on Y axis.')}var A="rtl"==e.bidi();switch(M.left){case"target":y.left=C.left+b.left-E.left,T+=A?"right":"left";break;case"target-left":y.left=b.left,T+="left";break;case"target-right":y.left=b.right-u.width+(u.right-E.right),T+="right";break;case"cascade":var w=A?b.left-u.width<v.left:b.right+u.width<v.right;y.left=w?b.right-g.style.left:b.left-g.style.left-u.width,T+=w?"left":"right";break;case"right":A?(y.left=b.right-b.width,T+="left"):(y.left=b.right-u.width,T+="right");break;case"left":A?(y.left=b.right-u.width,T+="right"):(y.left=b.left,T+="left");break;default:throw new Error('Invalid target mode "'+M.left+'" specified for md-menu on X axis.')}var k=o.mdMenuCtrl.offsets();y.top+=k.top,y.left+=k.left,i(y);var x=Math.round(100*Math.min(b.width/c.offsetWidth,1))/100,_=Math.round(100*Math.min(b.height/c.offsetHeight,1))/100;return{top:Math.round(y.top),left:Math.round(y.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[x,_]),transformOrigin:T}}var $=e.prefixer(),C=e.dom.animator;return{parent:"body",onShow:f,onRemove:h,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,skipHide:!0,themable:!0}}function i(e){return e instanceof t.element&&(e=e[0]),e}o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate"];var r=8;return e("$mdMenu").setDefaults({methods:["target"],options:o})}e.$inject=["$$interimElementProvider"],t.module("material.components.menu").provider("$mdMenu",e)}(),function(){function e(e,n,i,r,a,d,s,l){this.$element=i,this.$attrs=r,this.$mdConstant=a,this.$mdUtil=s,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=l;var c=this;t.forEach(o,function(e){c[e]=t.bind(c,c[e])})}e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,i=this,r=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),r.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){i.getMenus().indexOf(n[0])!=-1&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover())})),r.push(this.$rootScope.$on("$mdMenuClose",function(o,r,a){var d=i.getMenus();if(d.indexOf(r[0])!=-1&&(e[0].classList.remove("md-open"),r[0].classList.remove("md-open")),e[0].contains(r[0])){for(var s=r[0];s&&d.indexOf(s)==-1;)s=t.getClosest(s,"MD-MENU",!0);s&&(a.skipFocus||s.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0))}})),o.$on("$destroy",function(){for(i.disableOpenOnHover();r.length;)r.shift()()}),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){
var e=this;e.openOnHoverEnabled=!0,e.parentToolbar&&(e.parentToolbar.classList.add("md-has-open-menu"),e.$mdUtil.nextTick(function(){t.element(e.parentToolbar).on("click",e.handleParentClick)},!1)),t.element(e.getMenus()).on("mouseenter",e.handleMenuHover)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){this.openOnHoverEnabled&&(this.openOnHoverEnabled=!1,this.parentToolbar&&(this.parentToolbar.classList.remove("md-has-open-menu"),t.element(this.parentToolbar).off("click",this.handleParentClick)),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover))},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,i=o&&o.isOpen;this.setKeyboardMode(!0);var r,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),r=!0;break;case n.UP_ARROW:o&&o.close(),r=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0}r&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();n==-1&&(n=this.getOpenMenuIndex());var o=!1;if(n==-1?(n=0,o=!0):(e<0&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o)return t[n].querySelector("button").focus(),t[n]},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("md-open"))return t;return-1},e.prototype.handleParentClick=function(e){var n=this.querySelector("md-menu.md-open");n&&!n.contains(e.target)&&t.element(n).controller("mdMenu").close()}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,i){return i.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button, a, md-button").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),o.find("md-menu-item").addClass("md-in-menu-bar"),function(e,t,o,i){t.addClass("_md"),n(e,t),i.init()}}}}e.$inject=["$mdUtil","$mdTheming"],t.module("material.components.menuBar").directive("mdMenuBar",e)}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}e.$inject=["$scope","$element","$attrs"],t.module("material.components.menuBar").controller("MenuItemController",e),e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,"checkbox"!=n.type&&"radio"!=n.type||(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t)})},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?r.$eval(a.ngValue):a.value;return i.$modelValue==e}return i.$modelValue}function n(e){e?l.off("click",c):l.on("click",c)}var o=this,i=this.ngModel,r=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var s=this.iconEl,l=t.element(this.buttonEl),c=this.handleClick;a.$observe("disabled",n),n(a.disabled),i.$render=function(){o.clearNgAria(),e()?(s.style.display="",l.attr("aria-checked","true")):(s.style.display="none",l.attr("aria-checked","false"))},r.$$postDigest(i.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,i=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=i.ngValue?this.$scope.$eval(i.ngValue):i.value),o.$setViewValue(t),o.$render()}}(),function(){function e(e,n){return{controller:"MenuItemController",require:["mdMenuItem","?ngModel"],priority:210,compile:function(o,i){function r(e,n,i){i=i||o,i instanceof t.element&&(i=i[0]),i.hasAttribute(e)||i.setAttribute(e,n)}function a(n){var i=e.prefixer(n);t.forEach(i,function(e){if(o[0].hasAttribute(e)){var t=o[0].getAttribute(e);c[0].setAttribute(e,t),o[0].removeAttribute(e)}})}var d=i.type,s="md-in-menu-bar";if("checkbox"!=d&&"radio"!=d||!o.hasClass(s))r("role","menuitem",o[0].querySelector("md-button, button, a"));else{var l=o[0].textContent,c=t.element('<md-button type="button"></md-button>'),m='<md-icon md-svg-src="'+n.mdChecked+'"></md-icon>';c.html(l),c.attr("tabindex","0"),o.html(""),o.append(t.element(m)),o.append(c),o.addClass("md-indent").removeClass(s),r("role","checkbox"==d?"menuitemcheckbox":"menuitemradio",c),a("ng-disabled")}return function(e,t,n,o){var i=o[0],r=o[1];i.init(r)}}}}e.$inject=["$mdUtil","$$mdSvgRegistry"],t.module("material.components.menuBar").directive("mdMenuItem",e)}(),function(){function e(e,n,o,i,r,a){function d(a,d,l){function f(t,o,r,d,l){var c=++N,h=i.now(),f=o-t,g=m(a.mdDiameter),b=g-u(g),v=r||n.easeFn,E=d||n.duration;o===t?k.attr("d",s(o,g,b,l)):y=p(function $(){var n=e.Math.max(0,e.Math.min(i.now()-h,E));k.attr("d",s(v(n,t,f,E),g,b,l)),c===N&&n<E&&(y=p($))})}function $(){f(x,_,n.easeFnIndeterminate,n.durationIndeterminate,S),S=(S+_)%100;var e=x;x=-_,_=-e}function C(){T||(T=r($,n.durationIndeterminate+50,0,!1),$(),d.addClass(E).removeAttr("aria-valuenow"))}function M(){T&&(r.cancel(T),T=null,d.removeClass(E))}var y,T,A=d[0],w=t.element(A.querySelector("svg")),k=t.element(A.querySelector("path")),x=n.startIndeterminate,_=n.endIndeterminate,S=0,N=0;o(d),d.toggleClass(v,l.hasOwnProperty("disabled")),a.mdMode===b&&C(),a.$on("$destroy",function(){M(),y&&h(y)}),a.$watchGroup(["value","mdMode",function(){var e=A.disabled;return e===!0||e===!1?e:t.isDefined(d.attr("disabled"))}],function(e,t){var n=e[1],o=e[2],i=t[2];if(o!==i&&d.toggleClass(v,!!o),o)M();else if(n!==g&&n!==b&&(n=b,l.$set("mdMode",n)),n===b)C();else{var r=c(e[0]);M(),d.attr("aria-valuenow",r),f(c(t[0]),r)}}),a.$watch("mdDiameter",function(e){var t=m(e),n=u(t),o=t/2+"px",i={width:t+"px",height:t+"px"};w[0].setAttribute("viewBox","0 0 "+t+" "+t),w.css(i).css("transform-origin",o+" "+o+" "+o),d.css(i),k.css("stroke-width",n+"px")})}function s(e,t,n,o){var i,r=3.5999,a=o||0,d=t/2,s=n/2,c=a*r,m=e*r,u=l(d,s,c),p=l(d,s,m+c),h=m<0?0:1;return i=m<0?m>=-180?0:1:m<=180?0:1,"M"+u+"A"+s+","+s+" 0 "+i+","+h+" "+p}function l(t,n,o){var i=(o-90)*f;return t+n*e.Math.cos(i)+","+(t+n*e.Math.sin(i))}function c(t){return e.Math.max(0,e.Math.min(t||0,100))}function m(e){var t=n.progressSize;if(e){var o=parseFloat(e);return e.lastIndexOf("%")===e.length-1&&(o=o/100*t),o}return t}function u(e){return n.strokeWidth/100*e}var p=e.requestAnimationFrame||e.webkitRequestAnimationFrame||t.noop,h=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||t.noop,f=e.Math.PI/180,g="determinate",b="indeterminate",v="_md-progress-circular-disabled",E="md-mode-indeterminate";return{restrict:"E",scope:{value:"@",mdDiameter:"@",mdMode:"@"},template:'<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',compile:function(e,n){if(e.attr({"aria-valuemin":0,"aria-valuemax":100,role:"progressbar"}),t.isUndefined(n.mdMode)){var o=t.isDefined(n.value),i=o?g:b;n.$set("mdMode",i)}else n.$set("mdMode",n.mdMode.trim());return d}}}e.$inject=["$window","$mdProgressCircular","$mdTheming","$mdUtil","$interval","$log"],t.module("material.components.progressCircular").directive("mdProgressCircular",e)}(),function(){function e(){function e(e,t,n,o){return n*e/o+t}function n(e,t,n,o){var i=(e/=o)*e,r=i*e;return t+n*(6*r*i+-15*i*i+10*r)}var o={progressSize:50,strokeWidth:10,duration:100,easeFn:e,durationIndeterminate:500,startIndeterminate:3,endIndeterminate:80,easeFnIndeterminate:n,easingPresets:{linearEase:e,materialEase:n}};return{configure:function(e){return o=t.extend(o,e||{})},$get:function(){return o}}}t.module("material.components.progressCircular").provider("$mdProgressCircular",e)}(),function(){function e(){function e(e,o,i,r){if(r){var a=r.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),s=n(o,"md-tab-label").remove(),l=r.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:s.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(l.getIndex(),!0)}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return r.getTabElementIndex(o)},function(e){l.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(l)})}}function n(e,n){for(var o=e[0].children,i=0,r=o.length;i<r;i++){var a=o[i];if(a.tagName===n.toUpperCase())return t.element(a)}return t.element()}return{require:"^?mdTabs",terminal:!0,compile:function(o,i){var r=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0==r.length&&(r=t.element("<md-tab-label></md-tab-label>"),i.label?r.text(i.label):r.append(o.contents()),0==a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d)}return o.append(r),a.html()&&o.append(a),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}e.$inject=["$parse"],t.module("material.components.tabs").directive("mdTabScroll",e)}(),function(){function e(e,o,i,r,a,d,s,l,c,m){function u(){ce.selectedIndex=ce.selectedIndex||0,p(),f(),h(),m(o),d.nextTick(function(){ue=F(),re(),te(),ae(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select(),fe=!0,Y()})}function p(){var e=l.$mdTabsTemplate,n=t.element(o[0].querySelector("md-tab-data"));n.html(e),c(n.contents())(ce.parent),delete l.$mdTabsTemplate}function h(){t.element(i).on("resize",I),e.$on("$destroy",v)}function f(){e.$watch("$mdTabsCtrl.selectedIndex",w)}function g(e,t){var n=l.$normalize("md-"+e);t&&V(e,t),l.$observe(n,function(t){ce[e]=t})}function b(e,t){function n(t){ce[e]="false"!==t}var o=l.$normalize("md-"+e);t&&V(e,t),l.hasOwnProperty(o)&&n(l[o]),l.$observe(o,n)}function v(){he=!0,t.element(i).off("resize",I)}function E(e){var n=F();t.element(n.wrapper).toggleClass("md-stretch-tabs",j()),ae()}function $(e){ce.shouldCenterTabs=q()}function C(e,n){if(e!==n){var o=F();t.forEach(o.tabs,function(t){t.style.maxWidth=e+"px"}),d.nextTick(ce.updateInkBarStyles)}}function M(e,t){e!==t&&(ce.maxTabWidth=Q(),ce.shouldCenterTabs=q(),d.nextTick(function(){ce.maxTabWidth=Q(),te(ce.selectedIndex)}))}function y(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function T(n){var o=F(),i=ce.shouldCenterTabs?"":"-"+n+"px";t.element(o.paging).css(r.CSS.TRANSFORM,"translate3d("+i+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function A(e,t){e!==t&&F().tabs[e]&&(te(),ee())}function w(t,n){t!==n&&(ce.selectedIndex=W(t),ce.lastSelectedIndex=n,ce.updateInkBarStyles(),re(),te(t),e.$broadcast("$mdTabsChanged"),ce.tabs[n]&&ce.tabs[n].scope.deselect(),ce.tabs[t]&&ce.tabs[t].scope.select())}function k(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function x(){x.watcher||(x.watcher=e.$watch(function(){d.nextTick(function(){x.watcher&&o.prop("offsetParent")&&(x.watcher(),x.watcher=null,I())},!1)}))}function _(e){switch(e.keyCode){case r.KEY_CODE.LEFT_ARROW:e.preventDefault(),J(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:e.preventDefault(),J(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:e.preventDefault(),me||S(ce.focusIndex)}ce.lastClick=!1}function S(e,t){me||(ce.focusIndex=ce.selectedIndex=e),ce.lastClick=!0,t&&ce.noSelectClick||d.nextTick(function(){ce.tabs[e].element.triggerHandler("click")},!1)}function N(e){ce.shouldPaginate&&(e.preventDefault(),ce.offsetLeft=se(ce.offsetLeft-e.wheelDelta))}function D(){var e,t,n=F(),o=n.canvas.clientWidth,i=o+ce.offsetLeft;for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>i));e++);o>t.offsetWidth?ce.offsetLeft=se(t.offsetLeft):ce.offsetLeft=se(t.offsetLeft+(t.offsetWidth-o+1))}function H(){var e,t,n=F();for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>=ce.offsetLeft));e++);n.canvas.clientWidth>t.offsetWidth?ce.offsetLeft=se(t.offsetLeft+t.offsetWidth-n.canvas.clientWidth):ce.offsetLeft=se(t.offsetLeft)}function I(){ce.lastSelectedIndex=ce.selectedIndex,ce.offsetLeft=se(ce.offsetLeft),d.nextTick(function(){ce.updateInkBarStyles(),Y()})}function O(e){t.element(F().inkBar).toggleClass("ng-hide",e)}function R(e){o.toggleClass("md-dynamic-height",e)}function L(e){if(!he){var t=ce.selectedIndex,n=ce.tabs.splice(e.getIndex(),1)[0];ie(),ce.selectedIndex===t&&(n.scope.deselect(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select()),d.nextTick(function(){Y(),ce.offsetLeft=se(ce.offsetLeft)})}}function P(e,n){var o=fe,i={getIndex:function(){return ce.tabs.indexOf(r)},isActive:function(){return this.getIndex()===ce.selectedIndex},isLeft:function(){return this.getIndex()<ce.selectedIndex},isRight:function(){return this.getIndex()>ce.selectedIndex},shouldRender:function(){return!ce.noDisconnect||this.isActive()},hasFocus:function(){return!ce.lastClick&&ce.hasFocus&&this.getIndex()===ce.focusIndex},id:d.nextUid()},r=t.extend(i,e);return t.isDefined(n)?ce.tabs.splice(n,0,r):ce.tabs.push(r),ne(),oe(),d.nextTick(function(){Y(),o&&ce.autoselect&&d.nextTick(function(){d.nextTick(function(){S(ce.tabs.indexOf(r))})})}),r}function F(){var e={},t=o[0];return e.wrapper=t.querySelector("md-tabs-wrapper"),e.canvas=e.wrapper.querySelector("md-tabs-canvas"),e.paging=e.canvas.querySelector("md-pagination-wrapper"),e.inkBar=e.paging.querySelector("md-ink-bar"),e.contents=t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"),e.tabs=e.paging.querySelectorAll("md-tab-item"),e.dummies=e.canvas.querySelectorAll("md-dummy-tab"),e}function B(){return ce.offsetLeft>0}function U(){var e=F(),t=e.tabs[e.tabs.length-1];return t&&t.offsetLeft+t.offsetWidth>e.canvas.clientWidth+ce.offsetLeft}function j(){switch(ce.stretchTabs){case"always":return!0;case"never":return!1;default:return!ce.shouldPaginate&&i.matchMedia("(max-width: 600px)").matches}}function q(){return ce.centerTabs&&!ce.shouldPaginate}function z(){if(ce.noPagination||!fe)return!1;var e=o.prop("clientWidth");return t.forEach(F().dummies,function(t){e-=t.offsetWidth}),e<0}function W(e){if(e===-1)return-1;var t,n,o=Math.max(ce.tabs.length-e,e);for(t=0;t<=o;t++){if(n=ce.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=ce.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function V(e,t,n){Object.defineProperty(ce,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function Y(){K(),ce.maxTabWidth=Q(),ce.shouldPaginate=z()}function K(){var e=F();j()?t.element(e.paging).css("width",""):t.element(e.paging).css("width",G()+"px")}function G(){return X(F().dummies)}function X(e){var n=0;return t.forEach(e,function(e){n+=Math.max(e.offsetWidth,e.getBoundingClientRect().width)}),Math.ceil(n)}function Q(){return o.prop("clientWidth")}function Z(){var e=ce.tabs[ce.selectedIndex],t=ce.tabs[ce.focusIndex];ce.tabs=ce.tabs.sort(function(e,t){return e.index-t.index}),ce.selectedIndex=ce.tabs.indexOf(e),ce.focusIndex=ce.tabs.indexOf(t)}function J(e,t){var n,o=t?"focusIndex":"selectedIndex",i=ce[o];for(n=i+e;ce.tabs[n]&&ce.tabs[n].scope.disabled;n+=e);ce.tabs[n]&&(ce[o]=n)}function ee(){F().dummies[ce.focusIndex].focus()}function te(e){var t=F();if(null==e&&(e=ce.focusIndex),t.tabs[e]&&!ce.shouldCenterTabs){var n=t.tabs[e],o=n.offsetLeft,i=n.offsetWidth+o;ce.offsetLeft=Math.max(ce.offsetLeft,se(i-t.canvas.clientWidth+64)),ce.offsetLeft=Math.min(ce.offsetLeft,se(o))}}function ne(){pe.forEach(function(e){d.nextTick(e)}),pe=[]}function oe(){var e=!1;t.forEach(ce.tabs,function(t){t.template&&(e=!0)}),ce.hasContent=e}function ie(){ce.selectedIndex=W(ce.selectedIndex),ce.focusIndex=W(ce.focusIndex)}function re(){if(!ce.dynamicHeight)return o.css("height","");if(!ce.tabs.length)return pe.push(re);var e=F(),t=e.contents[ce.selectedIndex],i=t?t.offsetHeight:0,r=e.wrapper.offsetHeight,a=i+r,l=o.prop("clientHeight");if(l!==a){"bottom"===o.attr("md-align-tabs")&&(l-=r,a-=r,o.attr("md-border-bottom")!==n&&++l),me=!0;var c={height:l+"px"},m={height:a+"px"};o.css(c),s(o,{from:c,to:m,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),me=!1})}}function ae(){var e=F();if(!e.tabs[ce.selectedIndex])return void t.element(e.inkBar).css({left:"auto",right:"auto"});if(!ce.tabs.length)return pe.push(ce.updateInkBarStyles);if(!o.prop("offsetParent"))return x();var n=ce.selectedIndex,i=e.paging.offsetWidth,r=e.tabs[n],a=r.offsetLeft,s=i-a-r.offsetWidth;if(ce.shouldCenterTabs){var l=X(e.tabs);i>l&&d.nextTick(ae,!1)}de(),t.element(e.inkBar).css({left:a+"px",right:s+"px"})}function de(){var e=F(),n=ce.selectedIndex,o=ce.lastSelectedIndex,i=t.element(e.inkBar);t.isNumber(o)&&i.toggleClass("md-left",n<o).toggleClass("md-right",n>o)}function se(e){var t=F();if(!t.tabs.length||!ce.shouldPaginate)return 0;var n=t.tabs[t.tabs.length-1],o=n.offsetLeft+n.offsetWidth;return e=Math.max(0,e),e=Math.min(o-t.canvas.clientWidth,e)}function le(e,n){var o=F(),i={colorElement:t.element(o.inkBar)};a.attach(e,n,i)}var ce=this,me=!1,ue=F(),pe=[],he=!1,fe=!1;g("stretchTabs",E),V("focusIndex",A,ce.selectedIndex||0),V("offsetLeft",T,0),V("hasContent",y,!1),V("maxTabWidth",C,Q()),V("shouldPaginate",M,!1),b("noInkBar",O),b("dynamicHeight",R),b("noPagination"),b("swipeContent"),b("noDisconnect"),b("autoselect"),b("noSelectClick"),b("centerTabs",$,!1),b("enableDisconnect"),ce.scope=e,ce.parent=e.$parent,ce.tabs=[],ce.lastSelectedIndex=null,ce.hasFocus=!1,ce.lastClick=!0,ce.shouldCenterTabs=q(),ce.updatePagination=d.debounce(Y,100),ce.redirectFocus=ee,ce.attachRipple=le,ce.insertTab=P,ce.removeTab=L,ce.select=S,ce.scroll=N,ce.nextPage=D,ce.previousPage=H,ce.keydown=_,ce.canPageForward=U,ce.canPageBack=B,ce.refreshIndex=ie,ce.incrementIndex=J,ce.getTabElementIndex=k,ce.updateInkBarStyles=d.debounce(ae,100),ce.updateTabOrder=d.debounce(Z,100),u()}e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming"],t.module("material.components.tabs").controller("MdTabsController",e)}(),function(){function e(e){return{scope:{selectedIndex:"=?mdSelected"},template:function(t,n){return n.$mdTabsTemplate=t.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="tab-content-{{::tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.tabs").directive("mdTabs",e)}(),function(){function e(e,t){return{require:"^?mdTabs",link:function(n,o,i,r){if(r){var a,d,s=function(){r.updatePagination(),r.updateInkBarStyles()};if("MutationObserver"in t){var l={childList:!0,subtree:!0,characterData:!0};a=new MutationObserver(s),a.observe(o[0],l),d=a.disconnect.bind(a)}else{var c=e.debounce(s,15,null,!1);o.on("DOMSubtreeModified",c),d=o.off.bind(o,"DOMSubtreeModified",c)}n.$on("$destroy",function(){d()})}}}}e.$inject=["$mdUtil","$window"],t.module("material.components.tabs").directive("mdTabsDummyWrapper",e)}(),function(){function e(e,t){function n(n,o,i,r){function a(){n.$watch("connected",function(e){e===!1?d():s()}),n.$on("$destroy",s)}function d(){r.enableDisconnect&&t.disconnectScope(l)}function s(){r.enableDisconnect&&t.reconnectScope(l)}if(r){var l=r.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(l),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.tabs").directive("mdTabsTemplate",e)}(),function(){t.module("material.core").constant("$MD_THEME_CSS","md-autocomplete.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]) {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-600}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon {    color: '{{background-900}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-600}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-600}}'; }  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-A700}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: default; }  .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }.md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }._md a.md-THEME_NAME-theme:not(.md-button).md-primary {  color: '{{primary-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover {    color: '{{primary-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-A700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-warn {  color: '{{warn-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover {    color: '{{warn-700}}'; }md-card.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-hue-1}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{foreground-4}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }  md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input {    color: '{{foreground-1}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-ms-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme md-chip md-icon {    color: '{{background-700}}'; }  md-chips.md-THEME_NAME-theme md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }  md-chips.md-THEME_NAME-theme md-chip._md-chip-editing {    background: transparent;    color: '{{background-800}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-A700}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled]:not(.md-checked) .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon:after {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-default}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  background: '{{background-A100}}';  color: '{{background-A200-0.87}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-300}}';  color: '{{background-A200-0.87}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-300}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{background-A200-0.435}}'; }/** Theme styles for mdDatepicker. */.md-THEME_NAME-theme .md-datepicker-input {  color: '{{foreground-1}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{foreground-4}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-color}}'; }    .md-accent .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{accent-color}}'; }    .md-warn .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{warn-A700}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{primary-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon, .md-accent .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{accent-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon, .md-warn .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar {  background: '{{background-A100}}'; }.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  box-shadow: 0 0 0 9999px \"{{background-hue-1}}\"; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container {  background: \"{{background-hue-1}}\"; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-1}}';  color: '{{foreground-1}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme,.layout-xs-row > md-divider.md-THEME_NAME-theme, .layout-gt-xs-row > md-divider.md-THEME_NAME-theme,.layout-sm-row > md-divider.md-THEME_NAME-theme, .layout-gt-sm-row > md-divider.md-THEME_NAME-theme,.layout-md-row > md-divider.md-THEME_NAME-theme, .layout-gt-md-row > md-divider.md-THEME_NAME-theme,.layout-lg-row > md-divider.md-THEME_NAME-theme, .layout-gt-lg-row > md-divider.md-THEME_NAME-theme,.layout-xl-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme .md-placeholder {  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme label.md-required:after {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme .md-input-messages-animation, md-input-container.md-THEME_NAME-theme .md-input-message-animation {  color: '{{warn-A700}}'; }  md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter, md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter {    color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input, md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input {  border-color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon {  color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],[disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-A100}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-item {    color: '{{background-A200-0.87}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item md-icon {      color: '{{background-A200-0.54}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] {      color: '{{background-A200-0.25}}'; }      md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon {        color: '{{background-A200-0.25}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{background-A200-0.11}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{background-A200-0.54}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-A100}}';  color: '{{background-A200}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{background-A100-0.87}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{background-A100-0.87}}'; }md-nav-bar.md-THEME_NAME-theme .md-nav-bar {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected {  color: '{{foreground-2}}'; }md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }.md-panel {  background-color: '{{background-900-0.0}}'; }  .md-panel._md-panel-backdrop.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-progress-circular.md-THEME_NAME-theme path {  stroke: '{{primary-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-warn path {  stroke: '{{warn-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-accent path {  stroke: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient(\"{{accent-100}}\" 0%, \"{{accent-100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-A700}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-input-container md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{warn-A700}}'; }md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{foreground-3}}'; }md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value {  color: '{{primary-color}}'; }  md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{primary-color}}'; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {    color: '{{warn-A700}}'; }md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-content {  background: '{{background-A100}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-optgroup {    color: '{{background-600-0.87}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-option {    color: '{{background-900-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] .md-text {      color: '{{background-400-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus, md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover {      background: '{{background-200}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[selected] {      color: '{{primary-500}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus {        color: '{{primary-600}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent {        color: '{{accent-color}}'; }        md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus {          color: '{{accent-A700}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple {  color: '{{primary-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple {  color: '{{background-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple {  color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon {  background-color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text {  color: '{{background-900-0.87}}'; }md-sidenav.md-THEME_NAME-theme, md-sidenav.md-THEME_NAME-theme md-content {  background-color: '{{background-hue-1}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  color: '{{background-contrast}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-A200-0.2}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}';  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}';  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-focus-ring {  background-color: '{{foreground-3-0.38}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-thumb:after {  background-color: '{{background-contrast}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after, md-slider.md-THEME_NAME-theme[disabled][md-discrete] .md-thumb:after {  background-color: '{{foreground-3}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-disabled-thumb {  border-color: transparent;  background-color: transparent; }md-slider-container[disabled] > *:first-child:not(md-slider),md-slider-container[disabled] > *:last-child:not(md-slider) {  color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-default}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-A100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{accent-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary {        color: '{{primary-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-color}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}';    fill: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon {    color: '{{primary-contrast-0.26}}';    fill: '{{primary-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple {      color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon {      color: '{{accent-contrast}}';      fill: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {      color: '{{accent-contrast-0.26}}';      fill: '{{accent-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-700-contrast}}'; }  md-tooltip.md-THEME_NAME-theme .md-content {    background-color: '{{background-700}}'; }/*  Only used with Theme processes */html.md-THEME_NAME-theme, body.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }");
}()}(window,window.angular),window.ngMaterial={version:{full:"1.1.1"}};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * @license AngularJS v1.6.1
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

var forEach;
var isArray;
var isString;
var jqLite;

/**
 * @ngdoc module
 * @name ngMessages
 * @description
 *
 * The `ngMessages` module provides enhanced support for displaying messages within templates
 * (typically within forms or when rendering message objects that return key/value data).
 * Instead of relying on JavaScript code and/or complex ng-if statements within your form template to
 * show and hide error messages specific to the state of an input field, the `ngMessages` and
 * `ngMessage` directives are designed to handle the complexity, inheritance and priority
 * sequencing based on the order of how the messages are defined in the template.
 *
 * Currently, the ngMessages module only contains the code for the `ngMessages`, `ngMessagesInclude`
 * `ngMessage` and `ngMessageExp` directives.
 *
 * # Usage
 * The `ngMessages` directive allows keys in a key/value collection to be associated with a child element
 * (or 'message') that will show or hide based on the truthiness of that key's value in the collection. A common use
 * case for `ngMessages` is to display error messages for inputs using the `$error` object exposed by the
 * {@link ngModel ngModel} directive.
 *
 * The child elements of the `ngMessages` directive are matched to the collection keys by a `ngMessage` or
 * `ngMessageExp` directive. The value of these attributes must match a key in the collection that is provided by
 * the `ngMessages` directive.
 *
 * Consider the following example, which illustrates a typical use case of `ngMessages`. Within the form `myForm` we
 * have a text input named `myField` which is bound to the scope variable `field` using the {@link ngModel ngModel}
 * directive.
 *
 * The `myField` field is a required input of type `email` with a maximum length of 15 characters.
 *
 * ```html
 * <form name="myForm">
 *   <label>
 *     Enter text:
 *     <input type="email" ng-model="field" name="myField" required maxlength="15" />
 *   </label>
 *   <div ng-messages="myForm.myField.$error" role="alert">
 *     <div ng-message="required">Please enter a value for this field.</div>
 *     <div ng-message="email">This field must be a valid email address.</div>
 *     <div ng-message="maxlength">This field can be at most 15 characters long.</div>
 *   </div>
 * </form>
 * ```
 *
 * In order to show error messages corresponding to `myField` we first create an element with an `ngMessages` attribute
 * set to the `$error` object owned by the `myField` input in our `myForm` form.
 *
 * Within this element we then create separate elements for each of the possible errors that `myField` could have.
 * The `ngMessage` attribute is used to declare which element(s) will appear for which error - for example,
 * setting `ng-message="required"` specifies that this particular element should be displayed when there
 * is no value present for the required field `myField` (because the key `required` will be `true` in the object
 * `myForm.myField.$error`).
 *
 * ### Message order
 *
 * By default, `ngMessages` will only display one message for a particular key/value collection at any time. If more
 * than one message (or error) key is currently true, then which message is shown is determined by the order of messages
 * in the HTML template code (messages declared first are prioritised). This mechanism means the developer does not have
 * to prioritize messages using custom JavaScript code.
 *
 * Given the following error object for our example (which informs us that the field `myField` currently has both the
 * `required` and `email` errors):
 *
 * ```javascript
 * <!-- keep in mind that ngModel automatically sets these error flags -->
 * myField.$error = { required : true, email: true, maxlength: false };
 * ```
 * The `required` message will be displayed to the user since it appears before the `email` message in the DOM.
 * Once the user types a single character, the `required` message will disappear (since the field now has a value)
 * but the `email` message will be visible because it is still applicable.
 *
 * ### Displaying multiple messages at the same time
 *
 * While `ngMessages` will by default only display one error element at a time, the `ng-messages-multiple` attribute can
 * be applied to the `ngMessages` container element to cause it to display all applicable error messages at once:
 *
 * ```html
 * <!-- attribute-style usage -->
 * <div ng-messages="myForm.myField.$error" ng-messages-multiple>...</div>
 *
 * <!-- element-style usage -->
 * <ng-messages for="myForm.myField.$error" multiple>...</ng-messages>
 * ```
 *
 * ## Reusing and Overriding Messages
 * In addition to prioritization, ngMessages also allows for including messages from a remote or an inline
 * template. This allows for generic collection of messages to be reused across multiple parts of an
 * application.
 *
 * ```html
 * <script type="text/ng-template" id="error-messages">
 *   <div ng-message="required">This field is required</div>
 *   <div ng-message="minlength">This field is too short</div>
 * </script>
 *
 * <div ng-messages="myForm.myField.$error" role="alert">
 *   <div ng-messages-include="error-messages"></div>
 * </div>
 * ```
 *
 * However, including generic messages may not be useful enough to match all input fields, therefore,
 * `ngMessages` provides the ability to override messages defined in the remote template by redefining
 * them within the directive container.
 *
 * ```html
 * <!-- a generic template of error messages known as "my-custom-messages" -->
 * <script type="text/ng-template" id="my-custom-messages">
 *   <div ng-message="required">This field is required</div>
 *   <div ng-message="minlength">This field is too short</div>
 * </script>
 *
 * <form name="myForm">
 *   <label>
 *     Email address
 *     <input type="email"
 *            id="email"
 *            name="myEmail"
 *            ng-model="email"
 *            minlength="5"
 *            required />
 *   </label>
 *   <!-- any ng-message elements that appear BEFORE the ng-messages-include will
 *        override the messages present in the ng-messages-include template -->
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <!-- this required message has overridden the template message -->
 *     <div ng-message="required">You did not enter your email address</div>
 *
 *     <!-- this is a brand new message and will appear last in the prioritization -->
 *     <div ng-message="email">Your email address is invalid</div>
 *
 *     <!-- and here are the generic error messages -->
 *     <div ng-messages-include="my-custom-messages"></div>
 *   </div>
 * </form>
 * ```
 *
 * In the example HTML code above the message that is set on required will override the corresponding
 * required message defined within the remote template. Therefore, with particular input fields (such
 * email addresses, date fields, autocomplete inputs, etc...), specialized error messages can be applied
 * while more generic messages can be used to handle other, more general input errors.
 *
 * ## Dynamic Messaging
 * ngMessages also supports using expressions to dynamically change key values. Using arrays and
 * repeaters to list messages is also supported. This means that the code below will be able to
 * fully adapt itself and display the appropriate message when any of the expression data changes:
 *
 * ```html
 * <form name="myForm">
 *   <label>
 *     Email address
 *     <input type="email"
 *            name="myEmail"
 *            ng-model="email"
 *            minlength="5"
 *            required />
 *   </label>
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <div ng-message="required">You did not enter your email address</div>
 *     <div ng-repeat="errorMessage in errorMessages">
 *       <!-- use ng-message-exp for a message whose key is given by an expression -->
 *       <div ng-message-exp="errorMessage.type">{{ errorMessage.text }}</div>
 *     </div>
 *   </div>
 * </form>
 * ```
 *
 * The `errorMessage.type` expression can be a string value or it can be an array so
 * that multiple errors can be associated with a single error message:
 *
 * ```html
 *   <label>
 *     Email address
 *     <input type="email"
 *            ng-model="data.email"
 *            name="myEmail"
 *            ng-minlength="5"
 *            ng-maxlength="100"
 *            required />
 *   </label>
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <div ng-message-exp="'required'">You did not enter your email address</div>
 *     <div ng-message-exp="['minlength', 'maxlength']">
 *       Your email must be between 5 and 100 characters long
 *     </div>
 *   </div>
 * ```
 *
 * Feel free to use other structural directives such as ng-if and ng-switch to further control
 * what messages are active and when. Be careful, if you place ng-message on the same element
 * as these structural directives, Angular may not be able to determine if a message is active
 * or not. Therefore it is best to place the ng-message on a child element of the structural
 * directive.
 *
 * ```html
 * <div ng-messages="myForm.myEmail.$error" role="alert">
 *   <div ng-if="showRequiredError">
 *     <div ng-message="required">Please enter something</div>
 *   </div>
 * </div>
 * ```
 *
 * ## Animations
 * If the `ngAnimate` module is active within the application then the `ngMessages`, `ngMessage` and
 * `ngMessageExp` directives will trigger animations whenever any messages are added and removed from
 * the DOM by the `ngMessages` directive.
 *
 * Whenever the `ngMessages` directive contains one or more visible messages then the `.ng-active` CSS
 * class will be added to the element. The `.ng-inactive` CSS class will be applied when there are no
 * messages present. Therefore, CSS transitions and keyframes as well as JavaScript animations can
 * hook into the animations whenever these classes are added/removed.
 *
 * Let's say that our HTML code for our messages container looks like so:
 *
 * ```html
 * <div ng-messages="myMessages" class="my-messages" role="alert">
 *   <div ng-message="alert" class="some-message">...</div>
 *   <div ng-message="fail" class="some-message">...</div>
 * </div>
 * ```
 *
 * Then the CSS animation code for the message container looks like so:
 *
 * ```css
 * .my-messages {
 *   transition:1s linear all;
 * }
 * .my-messages.ng-active {
 *   // messages are visible
 * }
 * .my-messages.ng-inactive {
 *   // messages are hidden
 * }
 * ```
 *
 * Whenever an inner message is attached (becomes visible) or removed (becomes hidden) then the enter
 * and leave animation is triggered for each particular element bound to the `ngMessage` directive.
 *
 * Therefore, the CSS code for the inner messages looks like so:
 *
 * ```css
 * .some-message {
 *   transition:1s linear all;
 * }
 *
 * .some-message.ng-enter {}
 * .some-message.ng-enter.ng-enter-active {}
 *
 * .some-message.ng-leave {}
 * .some-message.ng-leave.ng-leave-active {}
 * ```
 *
 * {@link ngAnimate Click here} to learn how to use JavaScript animations or to learn more about ngAnimate.
 */
angular.module('ngMessages', [], function initAngularHelpers() {
  // Access helpers from angular core.
  // Do it inside a `config` block to ensure `window.angular` is available.
  forEach = angular.forEach;
  isArray = angular.isArray;
  isString = angular.isString;
  jqLite = angular.element;
})

  /**
   * @ngdoc directive
   * @module ngMessages
   * @name ngMessages
   * @restrict AE
   *
   * @description
   * `ngMessages` is a directive that is designed to show and hide messages based on the state
   * of a key/value object that it listens on. The directive itself complements error message
   * reporting with the `ngModel` $error object (which stores a key/value state of validation errors).
   *
   * `ngMessages` manages the state of internal messages within its container element. The internal
   * messages use the `ngMessage` directive and will be inserted/removed from the page depending
   * on if they're present within the key/value object. By default, only one message will be displayed
   * at a time and this depends on the prioritization of the messages within the template. (This can
   * be changed by using the `ng-messages-multiple` or `multiple` attribute on the directive container.)
   *
   * A remote template can also be used to promote message reusability and messages can also be
   * overridden.
   *
   * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
   *
   * @usage
   * ```html
   * <!-- using attribute directives -->
   * <ANY ng-messages="expression" role="alert">
   *   <ANY ng-message="stringValue">...</ANY>
   *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
   *   <ANY ng-message-exp="expressionValue">...</ANY>
   * </ANY>
   *
   * <!-- or by using element directives -->
   * <ng-messages for="expression" role="alert">
   *   <ng-message when="stringValue">...</ng-message>
   *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
   *   <ng-message when-exp="expressionValue">...</ng-message>
   * </ng-messages>
   * ```
   *
   * @param {string} ngMessages an angular expression evaluating to a key/value object
   *                 (this is typically the $error object on an ngModel instance).
   * @param {string=} ngMessagesMultiple|multiple when set, all messages will be displayed with true
   *
   * @example
   * <example name="ngMessages-directive" module="ngMessagesExample"
   *          deps="angular-messages.js"
   *          animations="true" fixBase="true">
   *   <file name="index.html">
   *     <form name="myForm">
   *       <label>
   *         Enter your name:
   *         <input type="text"
   *                name="myName"
   *                ng-model="name"
   *                ng-minlength="5"
   *                ng-maxlength="20"
   *                required />
   *       </label>
   *       <pre>myForm.myName.$error = {{ myForm.myName.$error | json }}</pre>
   *
   *       <div ng-messages="myForm.myName.$error" style="color:maroon" role="alert">
   *         <div ng-message="required">You did not enter a field</div>
   *         <div ng-message="minlength">Your field is too short</div>
   *         <div ng-message="maxlength">Your field is too long</div>
   *       </div>
   *     </form>
   *   </file>
   *   <file name="script.js">
   *     angular.module('ngMessagesExample', ['ngMessages']);
   *   </file>
   * </example>
   */
  .directive('ngMessages', ['$animate', function($animate) {
    var ACTIVE_CLASS = 'ng-active';
    var INACTIVE_CLASS = 'ng-inactive';

    return {
      require: 'ngMessages',
      restrict: 'AE',
      controller: ['$element', '$scope', '$attrs', function NgMessagesCtrl($element, $scope, $attrs) {
        var ctrl = this;
        var latestKey = 0;
        var nextAttachId = 0;

        this.getAttachId = function getAttachId() { return nextAttachId++; };

        var messages = this.messages = {};
        var renderLater, cachedCollection;

        this.render = function(collection) {
          collection = collection || {};

          renderLater = false;
          cachedCollection = collection;

          // this is true if the attribute is empty or if the attribute value is truthy
          var multiple = isAttrTruthy($scope, $attrs.ngMessagesMultiple) ||
                         isAttrTruthy($scope, $attrs.multiple);

          var unmatchedMessages = [];
          var matchedKeys = {};
          var messageItem = ctrl.head;
          var messageFound = false;
          var totalMessages = 0;

          // we use != instead of !== to allow for both undefined and null values
          while (messageItem != null) {
            totalMessages++;
            var messageCtrl = messageItem.message;

            var messageUsed = false;
            if (!messageFound) {
              forEach(collection, function(value, key) {
                if (!messageUsed && truthy(value) && messageCtrl.test(key)) {
                  // this is to prevent the same error name from showing up twice
                  if (matchedKeys[key]) return;
                  matchedKeys[key] = true;

                  messageUsed = true;
                  messageCtrl.attach();
                }
              });
            }

            if (messageUsed) {
              // unless we want to display multiple messages then we should
              // set a flag here to avoid displaying the next message in the list
              messageFound = !multiple;
            } else {
              unmatchedMessages.push(messageCtrl);
            }

            messageItem = messageItem.next;
          }

          forEach(unmatchedMessages, function(messageCtrl) {
            messageCtrl.detach();
          });

          if (unmatchedMessages.length !== totalMessages) {
            $animate.setClass($element, ACTIVE_CLASS, INACTIVE_CLASS);
          } else {
            $animate.setClass($element, INACTIVE_CLASS, ACTIVE_CLASS);
          }
        };

        $scope.$watchCollection($attrs.ngMessages || $attrs['for'], ctrl.render);

        // If the element is destroyed, proactively destroy all the currently visible messages
        $element.on('$destroy', function() {
          forEach(messages, function(item) {
            item.message.detach();
          });
        });

        this.reRender = function() {
          if (!renderLater) {
            renderLater = true;
            $scope.$evalAsync(function() {
              if (renderLater && cachedCollection) {
                ctrl.render(cachedCollection);
              }
            });
          }
        };

        this.register = function(comment, messageCtrl) {
          var nextKey = latestKey.toString();
          messages[nextKey] = {
            message: messageCtrl
          };
          insertMessageNode($element[0], comment, nextKey);
          comment.$$ngMessageNode = nextKey;
          latestKey++;

          ctrl.reRender();
        };

        this.deregister = function(comment) {
          var key = comment.$$ngMessageNode;
          delete comment.$$ngMessageNode;
          removeMessageNode($element[0], comment, key);
          delete messages[key];
          ctrl.reRender();
        };

        function findPreviousMessage(parent, comment) {
          var prevNode = comment;
          var parentLookup = [];

          while (prevNode && prevNode !== parent) {
            var prevKey = prevNode.$$ngMessageNode;
            if (prevKey && prevKey.length) {
              return messages[prevKey];
            }

            // dive deeper into the DOM and examine its children for any ngMessage
            // comments that may be in an element that appears deeper in the list
            if (prevNode.childNodes.length && parentLookup.indexOf(prevNode) === -1) {
              parentLookup.push(prevNode);
              prevNode = prevNode.childNodes[prevNode.childNodes.length - 1];
            } else if (prevNode.previousSibling) {
              prevNode = prevNode.previousSibling;
            } else {
              prevNode = prevNode.parentNode;
              parentLookup.push(prevNode);
            }
          }
        }

        function insertMessageNode(parent, comment, key) {
          var messageNode = messages[key];
          if (!ctrl.head) {
            ctrl.head = messageNode;
          } else {
            var match = findPreviousMessage(parent, comment);
            if (match) {
              messageNode.next = match.next;
              match.next = messageNode;
            } else {
              messageNode.next = ctrl.head;
              ctrl.head = messageNode;
            }
          }
        }

        function removeMessageNode(parent, comment, key) {
          var messageNode = messages[key];

          var match = findPreviousMessage(parent, comment);
          if (match) {
            match.next = messageNode.next;
          } else {
            ctrl.head = messageNode.next;
          }
        }
      }]
    };

    function isAttrTruthy(scope, attr) {
     return (isString(attr) && attr.length === 0) || //empty attribute
            truthy(scope.$eval(attr));
    }

    function truthy(val) {
      return isString(val) ? val.length : !!val;
    }
  }])

  /**
   * @ngdoc directive
   * @name ngMessagesInclude
   * @restrict AE
   * @scope
   *
   * @description
   * `ngMessagesInclude` is a directive with the purpose to import existing ngMessage template
   * code from a remote template and place the downloaded template code into the exact spot
   * that the ngMessagesInclude directive is placed within the ngMessages container. This allows
   * for a series of pre-defined messages to be reused and also allows for the developer to
   * determine what messages are overridden due to the placement of the ngMessagesInclude directive.
   *
   * @usage
   * ```html
   * <!-- using attribute directives -->
   * <ANY ng-messages="expression" role="alert">
   *   <ANY ng-messages-include="remoteTplString">...</ANY>
   * </ANY>
   *
   * <!-- or by using element directives -->
   * <ng-messages for="expression" role="alert">
   *   <ng-messages-include src="expressionValue1">...</ng-messages-include>
   * </ng-messages>
   * ```
   *
   * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
   *
   * @param {string} ngMessagesInclude|src a string value corresponding to the remote template.
   */
  .directive('ngMessagesInclude',
    ['$templateRequest', '$document', '$compile', function($templateRequest, $document, $compile) {

    return {
      restrict: 'AE',
      require: '^^ngMessages', // we only require this for validation sake
      link: function($scope, element, attrs) {
        var src = attrs.ngMessagesInclude || attrs.src;
        $templateRequest(src).then(function(html) {
          if ($scope.$$destroyed) return;

          if (isString(html) && !html.trim()) {
            // Empty template - nothing to compile
            replaceElementWithMarker(element, src);
          } else {
            // Non-empty template - compile and link
            $compile(html)($scope, function(contents) {
              element.after(contents);
              replaceElementWithMarker(element, src);
            });
          }
        });
      }
    };

    // Helpers
    function replaceElementWithMarker(element, src) {
      // A comment marker is placed for debugging purposes
      var comment = $compile.$$createComment ?
          $compile.$$createComment('ngMessagesInclude', src) :
          $document[0].createComment(' ngMessagesInclude: ' + src + ' ');
      var marker = jqLite(comment);
      element.after(marker);

      // Don't pollute the DOM anymore by keeping an empty directive element
      element.remove();
    }
  }])

  /**
   * @ngdoc directive
   * @name ngMessage
   * @restrict AE
   * @scope
   *
   * @description
   * `ngMessage` is a directive with the purpose to show and hide a particular message.
   * For `ngMessage` to operate, a parent `ngMessages` directive on a parent DOM element
   * must be situated since it determines which messages are visible based on the state
   * of the provided key/value map that `ngMessages` listens on.
   *
   * More information about using `ngMessage` can be found in the
   * {@link module:ngMessages `ngMessages` module documentation}.
   *
   * @usage
   * ```html
   * <!-- using attribute directives -->
   * <ANY ng-messages="expression" role="alert">
   *   <ANY ng-message="stringValue">...</ANY>
   *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
   * </ANY>
   *
   * <!-- or by using element directives -->
   * <ng-messages for="expression" role="alert">
   *   <ng-message when="stringValue">...</ng-message>
   *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
   * </ng-messages>
   * ```
   *
   * @param {expression} ngMessage|when a string value corresponding to the message key.
   */
  .directive('ngMessage', ngMessageDirectiveFactory())


  /**
   * @ngdoc directive
   * @name ngMessageExp
   * @restrict AE
   * @priority 1
   * @scope
   *
   * @description
   * `ngMessageExp` is the same as {@link directive:ngMessage `ngMessage`}, but instead of a static
   * value, it accepts an expression to be evaluated for the message key.
   *
   * @usage
   * ```html
   * <!-- using attribute directives -->
   * <ANY ng-messages="expression">
   *   <ANY ng-message-exp="expressionValue">...</ANY>
   * </ANY>
   *
   * <!-- or by using element directives -->
   * <ng-messages for="expression">
   *   <ng-message when-exp="expressionValue">...</ng-message>
   * </ng-messages>
   * ```
   *
   * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
   *
   * @param {expression} ngMessageExp|whenExp an expression value corresponding to the message key.
   */
  .directive('ngMessageExp', ngMessageDirectiveFactory());

function ngMessageDirectiveFactory() {
  return ['$animate', function($animate) {
    return {
      restrict: 'AE',
      transclude: 'element',
      priority: 1, // must run before ngBind, otherwise the text is set on the comment
      terminal: true,
      require: '^^ngMessages',
      link: function(scope, element, attrs, ngMessagesCtrl, $transclude) {
        var commentNode = element[0];

        var records;
        var staticExp = attrs.ngMessage || attrs.when;
        var dynamicExp = attrs.ngMessageExp || attrs.whenExp;
        var assignRecords = function(items) {
          records = items
              ? (isArray(items)
                  ? items
                  : items.split(/[\s,]+/))
              : null;
          ngMessagesCtrl.reRender();
        };

        if (dynamicExp) {
          assignRecords(scope.$eval(dynamicExp));
          scope.$watchCollection(dynamicExp, assignRecords);
        } else {
          assignRecords(staticExp);
        }

        var currentElement, messageCtrl;
        ngMessagesCtrl.register(commentNode, messageCtrl = {
          test: function(name) {
            return contains(records, name);
          },
          attach: function() {
            if (!currentElement) {
              $transclude(function(elm, newScope) {
                $animate.enter(elm, null, element);
                currentElement = elm;

                // Each time we attach this node to a message we get a new id that we can match
                // when we are destroying the node later.
                var $$attachId = currentElement.$$attachId = ngMessagesCtrl.getAttachId();

                // in the event that the element or a parent element is destroyed
                // by another structural directive then it's time
                // to deregister the message from the controller
                currentElement.on('$destroy', function() {
                  if (currentElement && currentElement.$$attachId === $$attachId) {
                    ngMessagesCtrl.deregister(commentNode);
                    messageCtrl.detach();
                  }
                  newScope.$destroy();
                });
              });
            }
          },
          detach: function() {
            if (currentElement) {
              var elm = currentElement;
              currentElement = null;
              $animate.leave(elm);
            }
          }
        });
      }
    };
  }];

  function contains(collection, key) {
    if (collection) {
      return isArray(collection)
          ? collection.indexOf(key) >= 0
          : collection.hasOwnProperty(key);
    }
  }
}


})(window, window.angular);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,b){'use strict';function K(q,g){g=g||{};b.forEach(g,function(b,h){delete g[h]});for(var h in q)!q.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(g[h]=q[h]);return g}var B=b.$$minErr("$resource"),Q=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;b.module("ngResource",["ng"]).provider("$resource",function(){var q=/^https?:\/\/\[[^\]]*][^/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},
"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(h,P,L,M){function C(b,e){this.template=b;this.defaults=p({},g.defaults,e);this.urlParams={}}function x(D,e,u,m){function c(a,d){var c={};d=p({},e,d);t(d,function(d,l){y(d)&&(d=d(a));var f;if(d&&d.charAt&&"@"===d.charAt(0)){f=a;var k=d.substr(1);if(null==k||""===k||"hasOwnProperty"===k||!Q.test("."+k))throw B("badmember",k);for(var k=k.split("."),e=0,g=k.length;e<g&&b.isDefined(f);e++){var h=k[e];f=null!==f?f[h]:void 0}}else f=
d;c[l]=f});return c}function R(a){return a.resource}function l(a){K(a||{},this)}var q=new C(D,m);u=p({},g.defaults.actions,u);l.prototype.toJSON=function(){var a=p({},this);delete a.$promise;delete a.$resolved;return a};t(u,function(a,d){var b=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,g=N(a.cancellable)?a.cancellable:q.defaults.cancellable;e&&!S(e)&&(P.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete a.timeout,e=null);l[d]=function(f,k,m,D){function u(a){r.catch(E);z.resolve(a)}var G={},v,w,A;switch(arguments.length){case 4:A=D,w=m;case 3:case 2:if(y(k)){if(y(f)){w=f;A=k;break}w=k;A=m}else{G=f;v=k;w=m;break}case 1:y(f)?w=f:b?v=f:G=f;break;case 0:break;default:throw B("badargs",arguments.length);}var F=this instanceof l,n=F?v:a.isArray?[]:new l(v),s={},C=a.interceptor&&a.interceptor.response||R,x=a.interceptor&&a.interceptor.responseError||void 0,H=!!A,I=!!x,z,J;t(a,function(a,d){switch(d){default:s[d]=
T(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!F&&g&&(z=L.defer(),s.timeout=z.promise,e&&(J=M(z.resolve,e)));b&&(s.data=v);q.setUrlParams(s,p({},c(v,a.params||{}),G),a.url);var r=h(s).then(function(f){var c=f.data;if(c){if(O(c)!==!!a.isArray)throw B("badcfg",d,a.isArray?"array":"object",O(c)?"array":"object",s.method,s.url);if(a.isArray)n.length=0,t(c,function(a){"object"===typeof a?n.push(new l(a)):n.push(a)});else{var b=n.$promise;K(c,n);n.$promise=b}}f.resource=n;
return f}),r=r["finally"](function(){n.$resolved=!0;!F&&g&&(n.$cancelRequest=E,M.cancel(J),z=J=s.timeout=null)}),r=r.then(function(a){var d=C(a);(w||E)(d,a.headers,a.status,a.statusText);return d},H||I?function(a){H&&A(a);return I?x(a):L.reject(a)}:void 0);H&&!I&&r.catch(E);return F?r:(n.$promise=r,n.$resolved=!1,g&&(n.$cancelRequest=u),n)};l.prototype["$"+d]=function(a,c,b){y(a)&&(b=c,c=a,a={});a=l[d].call(this,a,this,c,b);return a.$promise||a}});l.bind=function(a){a=p({},e,a);return x(D,a,u,m)};
return l}var E=b.noop,t=b.forEach,p=b.extend,T=b.copy,O=b.isArray,N=b.isDefined,y=b.isFunction,S=b.isNumber,U=b.$$encodeUriQuery,V=b.$$encodeUriSegment;C.prototype={setUrlParams:function(b,e,g){var m=this,c=g||m.template,h,l,p="",a=m.urlParams=Object.create(null);t(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw B("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&(a[d]={isQueryParamValue:(new RegExp("\\?.*=:"+d+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");
c=c.replace(q,function(a){p=a;return""});e=e||{};t(m.urlParams,function(a,b){h=e.hasOwnProperty(b)?e[b]:m.defaults[b];N(h)&&null!==h?(l=a.isQueryParamValue?U(h,!0):V(h),c=c.replace(new RegExp(":"+b+"(\\W|$)","g"),function(a,b){return l+b})):c=c.replace(new RegExp("(/?):"+b+"(\\W|$)","g"),function(a,b,d){return"/"===d.charAt(0)?d:b+d})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");b.url=p+c.replace(/\/\\\./,"/.");t(e,function(a,c){m.urlParams[c]||
(b.params=b.params||{},b.params[c]=a)})}};return x}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z){'use strict';function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.1/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function ta(a){if(null==a||Wa(a))return!1;if(C(a)||E(a)||D&&a instanceof
D)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(y(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(C(a)||ta(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Dc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)va.call(a,c)&&b.call(d,a[c],c,a);return a}function Ec(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function Fc(a){return function(b,d){a(d,b)}}function ie(){return++rb}function Sb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(F(g)||y(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&F(n)?fa(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Tb(n)?a[m]=n.clone():(F(a[m])||(a[m]=C(n)?[]:{}),Sb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Sb(a,wa.call(arguments,1),!1)}function je(a){return Sb(a,wa.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Ub(a,b){return R(Object.create(a),b)}function w(){}function Ya(a){return a}function ma(a){return function(){return a}}function Vb(a){return y(a.toString)&&a.toString!==na}function x(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function F(a){return null!==a&&"object"===typeof a}function Dc(a){return null!==a&&"object"===typeof a&&!Gc(a)}function E(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function fa(a){return"[object Date]"===na.call(a)}function y(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===na.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function ke(a){return a&&Y(a.length)&&
le.test(na.call(a))}function Tb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function me(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function xa(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Fa(a,b){function d(a,b){var d=b.$$hashKey,e;if(C(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(Dc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)va.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!F(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw Ga("cpws");var b=!1,c=f(a);void 0===c&&(c=C(a)?[]:Object.create(Gc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(na.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(y(a.cloneNode))return a.cloneNode(!0)}
var e=[],g=[];if(b){if(ke(b)||"[object ArrayBuffer]"===na.call(b))throw Ga("cpta");if(a===b)throw Ga("cpi");C(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function qa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(C(a)){if(!C(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!qa(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?qa(a.getTime(),
b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||C(b)||fa(b)||Xa(b))return!1;d=W();for(c in a)if("$"!==c.charAt(0)&&!y(a[c])){if(!qa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!y(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(wa.call(b,d))}function bb(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!y(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Hc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&z.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Hc,b)}function Ic(a){return E(a)?JSON.parse(a):a}function Jc(a,b){a=a.replace(ne,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ga(d)?b:d}function Wb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Jc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Ja?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}function Kc(a){try{return decodeURIComponent(a)}catch(b){}}function Lc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Kc(f),v(f)&&(e=v(e)?Kc(e):!0,va.call(b,f)?C(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Xb(a){var b=[];q(a,function(a,c){C(a)?q(a,function(a){b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))}):b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))});return b.length?b.join("&"):""}function db(a){return ka(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ka(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function oe(a,b){var d,c,f=Ka.length;for(c=0;c<f;++c)if(d=Ka[c]+b,E(d=a.getAttribute(d)))return d;return null}function pe(a,b){var d,c,f={};q(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ka,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(qe?(f.strictDi=null!==oe(d,"strict-di"),
b(d,c?[c]:[],f)):z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Mc(a,b,d){F(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===z.document?"document":ya(a);throw Ga("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;z&&f.test(z.name)&&(d.debugInfoEnabled=!0,z.name=z.name.replace(f,""));if(z&&!e.test(z.name))return c();z.name=z.name.replace(e,"");$.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};y($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function re(){z.name=
"NG_ENABLE_DEBUG_INFO!"+z.name;z.location.reload()}function se(a){a=$.element(a).injector();if(!a)throw Ga("test");return a.get("$$testability")}function Nc(a,b){b=b||"_";return a.replace(te,function(a,c){return(c?b:"")+a.toLowerCase()})}function ue(){var a;if(!Oc){var b=sb();(oa=x(b)?z.jQuery:b?z[b]:void 0)&&oa.fn.on?(D=oa,R(oa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=oa.cleanData,oa.cleanData=function(b){for(var c,
f=0,e;null!=(e=b[f]);f++)(c=oa._data(e,"events"))&&c.$destroy&&oa(e).triggerHandler("$destroy");a(b)}):D=X;$.element=D;Oc=!0}}function fb(a,b,d){if(!a)throw Ga("areq",b||"?",d||"required");return a}function tb(a,b,d){d&&C(a)&&(a=a[a.length-1]);fb(y(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Pa(a,b){if("hasOwnProperty"===a)throw Ga("badname",b);}function Pc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
b[g],a&&(a=(f=a)[c]);return!d&&y(a)?bb(f,a):a}function ub(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=D(wa.call(a,0,f))),c.push(b);return c||a}function W(){return Object.create(null)}function Yb(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Vb(a)||C(a)||fa(a)?cb(a):a.toString()}return a}function ve(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||M;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return J}}function b(a,d,f){f||(f=c);return function(b,c){c&&y(c)&&(c.$$moduleName=e);f.push([a,d,arguments]);return J}}if(!g)throw d("nomod",e);var c=[],f=[],p=[],r=a("$injector","invoke","push",f),J={_invokeQueue:c,_configBlocks:f,_runBlocks:p,
requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",f),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:r,run:function(a){p.push(a);return this}};h&&r(h);return J})}})}
function ra(a,b){if(C(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function we(a){var b=[];return JSON.stringify(a,function(a,c){c=Hc(a,c);if(F(c)){if(0<=b.indexOf(c))return"...";b.push(c)}return c})}function xe(a){R(a,{bootstrap:Mc,copy:Fa,extend:R,merge:je,equals:qa,element:D,forEach:q,injector:eb,noop:w,bind:bb,toJson:cb,fromJson:Ic,identity:Ya,isUndefined:x,isDefined:v,isString:E,isFunction:y,
isObject:F,isNumber:Y,isElement:Tb,isArray:C,version:ye,isDate:fa,lowercase:P,uppercase:vb,callbacks:{$$counter:0},getTestability:se,reloadWithDebugInfo:re,$$minErr:M,$$csp:za,$$encodeUriSegment:db,$$encodeUriQuery:ka,$$stringify:Yb});Zb=ve(z);Zb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ze});a.provider("$compile",Qc).directive({a:Ae,input:Rc,textarea:Rc,form:Be,script:Ce,select:De,option:Ee,ngBind:Fe,ngBindHtml:Ge,ngBindTemplate:He,ngClass:Ie,ngClassEven:Je,ngClassOdd:Ke,
ngCloak:Le,ngController:Me,ngForm:Ne,ngHide:Oe,ngIf:Pe,ngInclude:Qe,ngInit:Re,ngNonBindable:Se,ngPluralize:Te,ngRepeat:Ue,ngShow:Ve,ngStyle:We,ngSwitch:Xe,ngSwitchWhen:Ye,ngSwitchDefault:Ze,ngOptions:$e,ngTransclude:af,ngModel:bf,ngList:cf,ngChange:df,pattern:Sc,ngPattern:Sc,required:Tc,ngRequired:Tc,minlength:Uc,ngMinlength:Uc,maxlength:Vc,ngMaxlength:Vc,ngValue:ef,ngModelOptions:ff}).directive({ngInclude:gf}).directive(wb).directive(Wc);a.provider({$anchorScroll:hf,$animate:jf,$animateCss:kf,$$animateJs:lf,
$$animateQueue:mf,$$AnimateRunner:nf,$$animateAsyncRun:of,$browser:pf,$cacheFactory:qf,$controller:rf,$document:sf,$$isDocumentHidden:tf,$exceptionHandler:uf,$filter:Xc,$$forceReflow:vf,$interpolate:wf,$interval:xf,$http:yf,$httpParamSerializer:zf,$httpParamSerializerJQLike:Af,$httpBackend:Bf,$xhrFactory:Cf,$jsonpCallbacks:Df,$location:Ef,$log:Ff,$parse:Gf,$rootScope:Hf,$q:If,$$q:Jf,$sce:Kf,$sceDelegate:Lf,$sniffer:Mf,$templateCache:Nf,$templateRequest:Of,$$testability:Pf,$timeout:Qf,$window:Rf,$$rAF:Sf,
$$jqLite:Tf,$$HashMap:Uf,$$cookieReader:Vf})}])}function gb(a,b){return b.toUpperCase()}function xb(a){return a.replace(Wf,gb)}function Yc(a){a=a.nodeType;return 1===a||!a||9===a}function Zc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if($b.test(a)){d=f.appendChild(b.createElement("div"));c=(Xf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Yf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=ab(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));
f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function X(a){if(a instanceof X)return a;var b;E(a)&&(a=S(a),b=!0);if(!(this instanceof X)){if(b&&"<"!==a.charAt(0))throw ac("nosel");return new X(a)}if(b){b=z.document;var d;a=(d=Zf.exec(a))?[b.createElement(d[1])]:(d=Zc(a,b))?d.childNodes:[];bc(this,a)}else y(a)?$c(a):bc(this,a)}function cc(a){return a.cloneNode(!0)}function yb(a,b){b||hb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)hb(d[c])}
function ad(a,b,d,c){if(v(c))throw ac("offargs");var f=(c=zb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,e),delete f[b])};q(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,e),delete f[b]}function hb(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ad(a)),delete ib[d],a.ng339=void 0))}function zb(a,
b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++$f,d=ib[d]={events:{},data:{},handle:void 0});return d}function dc(a,b,d){if(Yc(a)){var c,f=v(d),e=!f&&b&&!F(b),g=!b;a=(a=zb(a,!e))&&a.data;if(f)a[xb(b)]=d;else{if(g)return a;if(e)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",S((" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").replace(" "+S(b)+" "," ")))})}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=S(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",S(d))}}function bc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function bd(a,b){return Eb(a,"$"+(b||"ngController")+
"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=C(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(v(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function cd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function ag(a,b){b=b||z;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function $c(a){function b(){z.document.removeEventListener("DOMContentLoaded",
b);z.removeEventListener("load",b);a()}"complete"===z.document.readyState?z.setTimeout(a):(z.document.addEventListener("DOMContentLoaded",b),z.addEventListener("load",b))}function dd(a,b){var d=Gb[b.toLowerCase()];return d&&ed[xa(a)]&&d}function bg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||cg;1<g&&(e=ra(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function cg(a,b,d){d.call(a,b)}function dg(a,b,d){var c=b.relatedTarget;c&&(c===a||eg.call(a,c))||d.call(a,b)}function Tf(){this.$get=function(){return R(X,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function la(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ie)():d+":"+a}function Qa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function fd(a){a=(Function.prototype.toString.call(a)+" ").replace(fg,"");return a.match(gg)||a.match(hg)}function ig(a){return(a=fd(a))?
"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(F(b))q(b,Fc(a));else return a(b,c)}}function c(a,b){Pa(a,"service");if(y(b)||C(b))b=p.instantiate(b);if(!b.$get)throw da("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=O.invoke(b,this);if(x(c))throw da("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){fb(x(a)||C(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{E(a)?(c=Zb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):y(a)?b.push(p.invoke(a)):C(a)?b.push(p.invoke(a)):tb(a,"module")}catch(e){throw C(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw da("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);C(a)&&(a=a[a.length-1]);d=a;if(La||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ia(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)+" "));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=C(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Qa([],!0),n={$provide:{provider:d(c),factory:d(e),
service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,ma(b),!1)}),constant:d(function(a,b){Pa(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=O.invoke(d,c);return O.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){$.isString(b)&&l.push(b);throw da("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return O.invoke(c.$get,c,
void 0,a)}),O=J;n.$injectorProvider={$get:ma(J)};var u=g(a),O=J.get("$injector");O.strictDi=b;q(u,function(a){a&&O.invoke(a)});return O}function hf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===xa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;y(c)?c=c():Tb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||ag(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;C(a)&&(a=a.join(" "));C(b)&&(b=b.join(" "));return a+" "+b}function jg(a){E(a)&&
(a=a.split(" "));var b=W();q(a,function(a){a.length&&(b[a]=!0)});return b}function Aa(a){return F(a)?a:{}}function kg(a,b,d,c){function f(a){try{a.apply(null,wa.call(arguments,1))}finally{if(J--,0===J)for(;O.length;)try{O.pop()()}catch(b){d.error(b)}}}function e(){ia=null;g();h()}function g(){u=A();u=x(u)?null:u;qa(u,B)&&(u=B);B=u}function h(){if(U!==k.url()||H!==u)U=k.url(),H=u,q(K,function(a){a(k.url(),u)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=!1;var J=
0,O=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():O.push(a)};var u,H,U=l.href,t=b.find("base"),ia=null,A=c.history?function(){try{return m.state}catch(a){}}:w;g();H=u;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=H===e;if(U===b&&(!c.history||f))return k;var h=U&&Ba(U)===Ba(b);U=b;H=e;!c.history||h&&f?(h||(ia=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(ia=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),H=u);ia&&(ia=b);return k}return ia||l.href.replace(/%27/g,"'")};k.state=function(){return u};var K=[],I=!1,B=null;k.onUrlChange=function(b){if(!I){if(c.history)D(a).on("popstate",e);D(a).on("hashchange",e);I=!0}K.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];f(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),f(w),!0):!1}}function pf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new kg(a,c,b,d)}]}function qf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(p?p===a&&(p=a.n):p=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,h=
R({},c,{id:a}),k=W(),l=c&&c.capacity||Number.MAX_VALUE,m=W(),n=null,p=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=W();g=0;m=W();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Nf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Qc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=W();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]=
{mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!C(b)&&F(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=me("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=W();this.directive=function U(b,d){fb(b,"name");Pa(b,"directive");E(b)?(c(b),fb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);y(h)?h={compile:ma(h)}:!h.compile&&h.link&&(h.compile=ma(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!E(l)||!/[EACM]/.test(l)))throw ea("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,Fc(U));return this};this.component=function(a,b){function c(a){function e(b){return y(b)||C(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:lg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,y(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return v(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var O=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(O=a,this):O};var u=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,f,n,I,B,L,N,G){function T(){try{if(!--za)throw da=void 0,ea("infchng",J);B.$apply(function(){for(var a=[],b=0,c=da.length;b<c;++b)try{da[b]()}catch(d){a.push(d)}da=void 0;if(a.length)throw a;})}finally{za++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){ua.innerHTML="<span "+b+">";b=ua.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ma(a,
b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof D||(a=D(a));var f=Na(a,b,a,c,d,e);ba.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw ea("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==xa(d)&&na.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?D(ha(g,D("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Na(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(D(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=C(a)||a instanceof D,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===La&&M(a,r,k);m=fc(a[r],[],l,0===r?d:void 0,e);(f=m.length?X(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Na(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function M(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=W(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function fc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=xa(a);Y(b,
Ca(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var A=!1,B=!1;k=p[K];l=k.name;m=k.value;k=Ca(l);(n=Ha.test(k))&&(l=l.replace(gd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(A=l,B=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ca(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,dd(a,k)&&(c[k]=!0);ra(a,b,m,k,n);Y(b,k,"A",d,e,A,B)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;F(f)&&(f=f.animVal);if(E(f)&&""!==f)for(;a=h.exec(f);)k=Ca(a[2]),Y(b,k,"C",d,e)&&(c[k]=S(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:ma(b,a.nodeValue);break;case 8:if(!Fa)break;kb(a,b,c,d,e)}b.sort(ka);return b}function kb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ca(f[1]);Y(b,h,"M",d,e)&&(c[h]=S(f[2]))}}catch(k){}}function hd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function id(a,b,c){return function(d,e,f,g,h){e=hd(e[0],b,c);return a(d,e,f,g,h)}}function gc(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function X(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=id(a,c,d));a.require=t.require;a.directiveName=L;if(B===t||t.$$isolateScope)a=sa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=id(b,c,d));b.require=
t.require;b.directiveName=L;if(B===t||t.$$isolateScope)b=sa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);U&&(e=N);c||(c=U?L.parent():L);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,Q);if(x(f))throw ea("noslot",d,ya(L));}else return l(a,b,e,c,Q)}var p,t,u,G,J,N,T,L;b===f?(g=d,L=d.$$element):(L=D(f),g=new s(L,d));J=e;B?G=e.$new(!0):K&&(J=e.$parent);l&&(T=m,T.$$boundTransclude=l,T.isSlotFilled=function(a){return!!l.$$slots[a]});A&&(N=
ca(L,g,T,A,G,e,B));B&&(ba.$$addScopeInfo(L,G,!0,!(I&&(I===B||I===B.$$originalDirective))),ba.$$addScopeClass(L,!0),G.$$isolateBindings=B.$$isolateBindings,t=oa(e,g,G,G.$$isolateBindings,B),t.removeWatches&&G.$on("$destroy",t.removeWatches));for(p in N){t=A[p];u=N[p];var Hb=t.$$bindings.bindToController;if(r){u.bindingInfo=Hb?oa(J,g,u.instance,Hb,t):{};var O=u();O!==u.instance&&(u.instance=O,L.data("$"+t.name+"Controller",O),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=
oa(J,g,u.instance,Hb,t))}else u.instance=u(),L.data("$"+t.name+"Controller",u.instance),u.bindingInfo=oa(J,g,u.instance,Hb,t)}q(A,function(a,b){var c=a.require;a.bindToController&&!C(c)&&F(c)&&R(N[b].instance,V(b,c,L,N))});q(N,function(a){var b=a.instance;if(y(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(y(b.$onInit))try{b.$onInit()}catch(e){c(e)}y(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());y(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(t=h.length;p<t;p++)u=h[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);var Q=e;B&&(B.template||null===B.templateUrl)&&(Q=G);a&&a(Q,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ta(u,u.isolateScope?G:e,L,g,u.require&&V(u.directiveName,u.require,L,N),T);q(N,function(a){a=a.instance;y(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,A=l.controllerDirectives,B=l.newIsolateScopeDirective,I=l.templateDirective,u=l.nonTlbTranscludeDirective,
J=!1,N=!1,U=l.hasElementTranscludeDirective,G=d.$$element=D(b),t,L,T,O=e,Q,v=!1,Ma=!1,w,z=0,E=a.length;z<E;z++){t=a[z];var Na=t.$$start,M=t.$$end;Na&&(G=hd(b,Na,M));T=void 0;if(p>t.priority)break;if(w=t.scope)t.templateUrl||(F(w)?($("new/isolated scope",B||K,t,G),B=t):$("new/isolated scope",B,t,G)),K=K||t;L=t.name;if(!v&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(w=z+1;v=a[w++];)if(v.transclude&&!v.$$tlb||v.replace&&(v.templateUrl||v.template)){Ma=!0;break}v=!0}!t.templateUrl&&
t.controller&&(A=A||W(),$("'"+L+"' controller",A[L],t,G),A[L]=t);if(w=t.transclude)if(J=!0,t.$$tlb||($("transclusion",u,t,G),u=t),"element"===w)U=!0,p=t.priority,T=G,G=d.$$element=D(ba.$$createComment(L,d[L])),b=G[0],la(f,wa.call(T,0),b),T[0].$$parentNode=T[0].parentNode,O=gc(Ma,T,e,p,g&&g.name,{nonTlbTranscludeDirective:u});else{var ja=W();if(F(w)){T=[];var P=W(),kb=W();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;P[a]=b;ja[b]=null;kb[b]=c});q(G.contents(),function(a){var b=P[Ca(xa(a))];
b?(kb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):T.push(a)});q(kb,function(a,b){if(!a)throw ea("reqslot",b);});for(var ec in ja)ja[ec]&&(ja[ec]=gc(Ma,ja[ec],e))}else T=D(cc(b)).contents();G.empty();O=gc(Ma,T,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});O.$$slots=ja}if(t.template)if(N=!0,$("template",I,t,G),I=t,w=y(t.template)?t.template(G,d):t.template,w=Ea(w),t.replace){g=t;T=$b.test(w)?jd(ha(t.templateNamespace,S(w))):[];b=T[0];if(1!==T.length||1!==b.nodeType)throw ea("tplrt",L,"");
la(f,G,b);E={$attr:{}};w=fc(b,[],E);var Y=a.splice(z+1,a.length-(z+1));(B||K)&&aa(w,B,K);a=a.concat(w).concat(Y);fa(d,E);E=a.length}else G.html(w);if(t.templateUrl)N=!0,$("template",I,t,G),I=t,t.replace&&(g=t),n=ga(a.splice(z,a.length-z),G,d,f,J&&O,h,k,{controllerDirectives:A,newScopeDirective:K!==t&&K,newIsolateScopeDirective:B,templateDirective:I,nonTlbTranscludeDirective:u}),E=a.length;else if(t.compile)try{Q=t.compile(G,d,O);var Z=t.$$originalDirective||t;y(Q)?m(null,bb(Z,Q),Na,M):Q&&m(bb(Z,Q.pre),
bb(Z,Q.post),Na,M)}catch(da){c(da,ya(G))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=N;n.transclude=O;l.hasElementTranscludeDirective=U;return n}function V(a,b,c,d){var e;if(E(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(C(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=V(a,b[g],c,d);else F(b)&&(e={},q(b,function(b,f){e[f]=V(a,b,c,d)}));return e||null}function ca(a,b,c,d,e,f,g){var h=W(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=I(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ub(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,f,g,h,k,l){if(c===
h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Ub(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,A={isolateScope:null,bindToController:null};F(K.scope)&&(!0===K.bindToController?(A.bindToController=d(K.scope,r,!0),A.isolateScope={}):A.isolateScope=d(K.scope,r,!1));F(K.bindToController)&&(A.bindToController=d(K.bindToController,r,!0));if(A.bindToController&&!K.controller)throw ea("noctrl",
r);m=m.$$bindings=A;F(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,e,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),u=Ub(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),t=y(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,B=r.templateNamespace;b.empty();f(t).then(function(c){var f,A;c=Ea(c);if(r.replace){c=$b.test(c)?jd(ha(B,S(c))):[];f=c[0];if(1!==c.length||1!==f.nodeType)throw ea("tplrt",r.name,t);c={$attr:{}};la(e,b,f);var I=fc(f,[],c);F(r.scope)&&aa(I,!0);a=I.concat(a);fa(d,c)}else f=K,b.html(c);a.unshift(u);n=X(a,f,d,g,b,
r,h,k,l);q(e,function(a,c){a===f&&(e[c]=b[0])});for(p=Na(b[0].childNodes,g);m.length;){c=m.shift();A=m.shift();var G=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(A!==K){var N=A.className;l.hasElementTranscludeDirective&&r.replace||(I=cc(f));la(G,D(A),I);Ma(D(I),N)}A=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,e,A)}}m=null}).catch(function(a){a instanceof Error&&c(a)}).catch(w);return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ma(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=z.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function pa(a,b){if("srcdoc"===b)return L.HTML;var c=xa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return L.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return L.RESOURCE_URL}function ra(a,
c,d,e,f){var g=pa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===xa(a))throw ea("selmulti",ya(a));if(m.test(e))throw ea("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=W());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function la(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=z.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);D.hasData(d)&&(D.data(c,D.data(d)),D(d).off("$destroy"));D.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function sa(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ta(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function oa(a,c,d,e,f){function g(b,c,e){!y(d.$onChanges)||c===e||c!==c&&e!==e||(da||(a.$$postDigest(T),da=[]),m||(m={},da.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,A,u,B;switch(e.mode){case "@":p||va.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(E(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
a;r=c[m];E(r)?d[h]=b(r)(a):Ia(r)&&(d[h]=r);l[h]=new Ib(hc,d[h]);k.push(p);break;case "=":if(!va.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);B=A.literal?qa:function(a,b){return a===b||a!==a&&b!==b};u=A.assign||function(){r=d[h]=A(a);throw ea("nonassign",c[m],m,f.name);};r=d[h]=A(a);p=function(b){B(b,d[h])||(B(b,r)?u(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,A.literal);k.push(p);break;case "<":if(!va.call(c,m)){if(p)break;
c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);var I=A.literal,G=d[h]=A(a);l[h]=new Ib(hc,d[h]);p=a.$watch(A,function(a,b){if(b===a){if(b===G||I&&qa(b,G))return;b=G}g(h,a,b);d[h]=a},I);k.push(p);break;case "&":A=c.hasOwnProperty(m)?n(c[m]):w;if(A===w&&p)break;d[h]=function(b){return A(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Da=/^\w/,ua=z.document.createElement("div"),Fa=O,Ga=u,za=J,da;s.prototype={$normalize:Ca,$addClass:function(a){a&&
0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=kd(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=kd(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=dd(this.$$element[0],a),g=ld[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Nc(a,"-"));f=xa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===
a)||"img"===f&&"src"===a)this[a]=b=G(b,"src"===a);else if("img"===f&&"srcset"===a&&v(b)){for(var f="",g=S(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+G(S(g[m]),!0),f=f+(" "+S(g[m+1]));g=S(g[2*l]).split(/\s/);f+=G(S(g[0]),!0);2===g.length&&(f+=" "+S(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Da.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=W()),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),Ea="{{"===Aa&&"}}"===Ba?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ha=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];C(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;ba.$$addBindingClass=
p?function(a){Ma(a,"ng-binding")}:w;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;ba.$$addScopeClass=p?function(a,b){Ma(a,b?"ng-isolate-scope":"ng-scope")}:w;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return z.document.createComment(c)};return ba}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ca(a){return a.replace(gd,"").replace(mg,gb)}function kd(a,b){var d="",c=a.split(/\s+/),
f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function jd(a){a=D(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&ng.call(a,b,1)}return a}function lg(a,b){if(b&&E(b))return b;if(E(a)){var d=md.exec(a);if(d)return d[3]}}function rf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Pa(b,"controller");F(b)?
R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!F(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&E(k)&&(n=k);if(E(e)){k=e.match(md);if(!k)throw nd("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Pc(g.$scope,m,!0)||(b?Pc(c,m,!0):void 0);if(!e)throw nd("ctrlreg",m);tb(e,m,!0)}if(h)return h=(C(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,
l,m||e.name),R(function(){var a=d.invoke(e,l,g,m);a!==l&&(F(a)||y(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function sf(){this.$get=["$window",function(a){return D(a.document)}]}function tf(){this.$get=["$document","$rootScope",function(a,b){function d(){f=c.hidden}var c=a[0],f=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return f}}]}function uf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function ic(a){return F(a)?fa(a)?a.toISOString():cb(a):a}function zf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Ec(a,function(a,c){null===a||x(a)||(C(a)?q(a,function(a){b.push(ka(c)+"="+ka(ic(a)))}):b.push(ka(c)+"="+ka(ic(a))))});return b.join("&")}}}function Af(){this.$get=function(){return function(a){function b(a,f,e){null===a||x(a)||(C(a)?q(a,function(a,c){b(a,f+"["+(F(a)?c:"")+"]")}):F(a)&&!fa(a)?Ec(a,
function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(ka(f)+"="+ka(ic(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function jc(a,b){if(E(a)){var d=a.replace(og,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(od))||(c=(c=d.match(pg))&&qg[c[0]].test(d));c&&(a=Ic(d))}}return a}function pd(a){var b=W(),d;E(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=P(S(a.substr(0,d)));a=S(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):F(a)&&q(a,function(a,d){var e=P(d),g=S(a);e&&
(b[e]=b[e]?b[e]+", "+g:g)});return b}function qd(a){var b;return function(d){b||(b=pd(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function rd(a,b,d,c){if(y(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function yf(){var a=this.defaults={transformResponse:[jc],transformRequest:[function(a){return F(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(kc),put:ra(kc),
patch:ra(kc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,f,e,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,
d={};q(a,function(a,e){y(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=rd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!F(b))throw M("$http")("badreq",b);if(!E(m.valueOf(b.url)))throw M("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ra(b))}(b);g.method=vb(g.method);g.paramSerializer=E(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=rd(b.data,qd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===P(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(w)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}N&&
(200<=a&&300>a?N.put(Q,[a,c,pd(d),e]):N.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:qd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var B=k.defer(),L=B.promise,N,G,T=c.headers,s="jsonp"===P(c.method),Q=c.url;s?Q=m.getTrustedResourceUrl(Q):E(Q)||(Q=m.valueOf(Q));Q=r(Q,
c.paramSerializer(c.params));s&&(Q=J(Q,c.jsonpCallbackParam));n.pendingRequests.push(c);L.then(u,u);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=F(c.cache)?c.cache:F(a.cache)?a.cache:O);N&&(G=N.get(Q),v(G)?G&&y(G.then)?G.then(K,K):C(G)?p(G[1],G[0],ra(G[2]),G[3]):p(G,200,{},"OK"):N.put(Q,L));x(G)&&((G=sd(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(T[c.xsrfHeaderName||a.xsrfHeaderName]=G),f(c.method,Q,d,l,T,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return L}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw td("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw td("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var O=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var u=[];q(d,function(a){u.unshift(E(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Cf(){this.$get=function(){return function(){return new z.XMLHttpRequest}}}function Bf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return rg(a,c,a.defer,b,d[0])}]}function rg(a,b,d,c,f){function e(a,
b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m);e.removeEventListener("error",m);f.body.removeChild(e);e=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};e.addEventListener("load",m);e.addEventListener("error",m);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,p,r,J,O){function u(){U&&U();t&&
t.abort()}h=h||a.url();if("jsonp"===P(f))var H=c.createCallback(h),U=e(h,H,function(a,b){var e=200===a&&c.getResponse(H);v(A)&&d.cancel(A);U=t=null;l(a,e,"",b);c.removeCallback(H)});else{var t=b(f,h);t.open(f,h,!0);q(m,function(a,b){v(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"===Da(h).protocol?404:0);var e=t.getAllResponseHeaders();v(A)&&d.cancel(A);U=t=null;l(c,b,e,a)};f=
function(){v(A)&&d.cancel(A);U=t=null;l(-1,null,null,"")};t.onerror=f;t.onabort=f;t.ontimeout=f;q(J,function(a,b){t.addEventListener(b,a)});q(O,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(r)try{t.responseType=r}catch(s){if("json"!==r)throw s;}t.send(x(k)?null:k)}if(0<n)var A=d(u,n);else n&&y(n.then)&&n.then(u)}}function wf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(e,k,n,p){function H(a){try{var b=a;a=n?f.getTrusted(n,b):f.valueOf(b);return p&&!v(a)?a:Yb(a)}catch(d){c(Ea.interr(e,d))}}if(!e.length||-1===e.indexOf(a)){var q;k||(k=g(e),q=ma(k),q.exp=e,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var t,s,A=0,K=[],I=[];q=e.length;for(var B=[],L=[];A<q;)if(-1!==(t=e.indexOf(a,
A))&&-1!==(s=e.indexOf(b,t+l)))A!==t&&B.push(g(e.substring(A,t))),A=e.substring(t+l,s),K.push(A),I.push(d(A,H)),A=s+m,L.push(B.length),B.push("");else{A!==q&&B.push(g(e.substring(A)));break}n&&1<B.length&&Ea.throwNoconcat(e);if(!k||K.length){var N=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&x(a[b]))return;B[L[b]]=a[b]}return B.join("")};return R(function(a){var b=0,d=K.length,f=Array(d);try{for(;b<d;b++)f[b]=I[b](a);return N(f)}catch(g){c(Ea.interr(e,g))}},{exp:e,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(I,function(d,e){var f=N(d);y(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),p=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function xf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){p?e.apply(null,r):e(u)}var p=4<arguments.length,r=p?wa.call(arguments,4):[],J=b.setInterval,q=b.clearInterval,
u=0,H=v(m)&&!m,U=(H?c:d).defer(),t=U.promise;l=v(l)?l:0;t.$$intervalId=J(function(){H?f.defer(n):a.$evalAsync(n);U.notify(u++);0<l&&u>=l&&(U.resolve(u),q(t.$$intervalId),delete g[t.$$intervalId]);H||a.$apply()},k);g[t.$$intervalId]=U;return t}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(w),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function lc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
db(a[b]);return a.join("/")}function ud(a,b){var d=Da(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||sg[d.protocol]||null}function vd(a,b){if(tg.test(a))throw lb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Da(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Lc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function mc(a,b){return a.slice(0,b.length)===
b}function sa(a,b){if(mc(b,a))return b.substr(a.length)}function Ba(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function mb(a){return a.replace(/(#.+)|#$/,"$1")}function nc(a,b,d){this.$$html5=!0;d=d||"";ud(a,this);this.$$parse=function(a){var d=sa(b,a);if(!E(d))throw lb("ipthprfx",a,b);vd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;v(e=sa(a,c))?(g=e,g=d&&v(e=sa(d,e))?b+(sa("/",e)||e):a+g):v(e=sa(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function oc(a,b,d){ud(a,this);this.$$parse=function(c){var f=sa(a,c)||sa(b,c),e;x(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",x(f)&&(a=c,this.replace())):(e=sa(d,f),x(e)&&(e=f));vd(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;mc(e,f)&&(e=e.replace(f,""));g.exec(e)||
(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ba(a)===Ba(b)?(this.$$parse(b),!0):!1}}function wd(a,b,d){this.$$html5=!0;oc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===Ba(c)?e=c:(g=sa(b,c))?e=a+d+g:b===
c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Jb(a){return function(){return this[a]}}function xd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Ef(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=
a,this;if(F(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||E(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();
var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?nc:wd}else p=Ba(n),m=oc;var r=p.substr(0,Ba(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=D(a.target);"a"!==xa(h[0]);)if(h[0]===e[0]||!(h=h.parent())[0])return;if(!E(f)||
!x(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");F(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=Da(f.animVal).href);J.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){mc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=mb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){var a=mb(c.url()),b=mb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=e):(m&&h(b,g,e===l.$$state?
null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Ff(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||w;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function ug(a){return a+""}function vg(a,b){return"undefined"!==typeof a?a:b}function yd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function V(a,b){var d,c,f;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;
case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,
b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=f?c:[a];
break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=
!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function zd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Ad(a){return a.type===s.Identifier||a.type===s.MemberExpression}function Bd(a){if(1===a.body.length&&Ad(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Cd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function Dd(a,b){this.astBuilder=a;this.$filter=b}function Ed(a,b){this.astBuilder=a;this.$filter=b}function pc(a){return y(a.valueOf)?a.valueOf():wg.call(a)}function Gf(){var a=W(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(f){function e(a,b){return null==
a||null==b?a===b:"object"===typeof a&&(a=pc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function g(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,k)||(h=d(a,void 0,void 0,[b]),k=b&&pc(b));return h},b,c,f)}for(var l=[],m=[],n=0,I=g.length;n<I;n++)l[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))m[c]=k,l[c]=k&&pc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,f)}function h(a,
b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;y(b)&&b(a,c,d);v(a)&&d.$$postDigest(function(){v(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;y(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=
a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e},d=!a.inputs;a.$$watchDelegate&&a.$$watchDelegate!==g?(c.$$watchDelegate=a.$$watchDelegate,c.inputs=a.inputs):b.$stateful||(c.$$watchDelegate=g,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:za().noUnsafeEval,literals:Fa(b),isIdentifierStart:y(d)&&d,isIdentifierContinue:y(c)&&c};return function(b,c){var d,e,u;switch(typeof b){case "string":return u=
b=b.trim(),d=a[u],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(e=!0,b=b.substring(2)),d=new qc(n),d=(new rc(d,f,n)).parse(b),d.constant?d.$$watchDelegate=l:e?d.$$watchDelegate=d.literal?k:h:d.inputs&&(d.$$watchDelegate=g),a[u]=d),m(d,c);case "function":return m(b,c);default:return m(w,c)}}}]}function If(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Fd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Jf(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Fd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Fd(a,b,d){function c(){return new f}function f(){var a=this.promise=new e;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function e(){this.$$state={status:0}}function g(){for(;!v&&t.length;){var a=t.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?we(c):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===v&&0===t.length&&a(g),t.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++v,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{y(c)?k(e,c(b.value)):1===b.status?k(e,b.value):m(e,
b.value)}catch(n){m(e,n)}}}finally{--v,d&&0===v&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,H("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(F(b)||y(b))f=b.then;y(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,y(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new e;m(b,a);return b}function J(a,b,c){var d=null;try{y(c)&&(d=c())}catch(e){return r(e)}return d&&y(d.then)?d.then(function(){return b(a)},r):b(a)}function s(a,b,c,d){var f=new e;k(f,a);return f.then(b,c,d)}function u(a){if(!y(a))throw H("norslvr",a);var b=new e;a(function(a){k(b,a)},function(a){m(b,a)});return b}var H=
M("$q",TypeError),v=0,t=[];R(e.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new e;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,w,a)},function(b){return J(b,r,a)},b)}});var w=s;u.prototype=e.prototype;u.defer=c;u.reject=r;u.when=s;u.resolve=w;u.all=function(a){var b=new e,c=0,d=C(a)?
[]:{};q(a,function(a,e){c++;s(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};u.race=function(a){var b=c();q(a,function(a){s(a).then(b.resolve,b.reject)});return b.promise};return u}function Sf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function Hf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=
!0}function l(a){9===La&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(H.$$phase)throw d("inprog",
H.$$phase);H.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function s(){for(;ia.length;)try{ia.shift()()}catch(a){e(a)}f=null}function u(){null===f&&(f=h.defer(function(){H.$apply(s)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;y(b)||(l.fn=w);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)va.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)va.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)va.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,u=b,q,w=[],x,ia;n("$digest");h.$$checkUrlChange();this===H&&null!==f&&(h.defer.cancel(f),s());c=null;do{r=!1;q=this;for(p=0;p<v.length;p++){try{ia=v[p],ia.scope.$eval(ia.expression,ia.locals)}catch(z){e(z)}c=null}v.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?qa(g,k):ga(g)&&ga(k)))r=!0,c=a,a.last=a.eq?Fa(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>u&&(x=4-u,w[x]||(w[x]=[]),w[x].push({msg:y(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(D){e(D)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||v.length)&&!u--)throw H.$$phase=
null,d("infdig",b,w);}while(r||v.length);for(H.$$phase=null;A<t.length;)try{t[A++]()}catch(E){e(E)}t.length=A=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===H&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){H.$$phase||v.length||h.defer(function(){v.length&&H.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");
try{return this.$eval(a)}finally{H.$$phase=null}}catch(b){e(b)}finally{try{H.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&ia.push(b);a=g(a);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,
g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},
defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=ab([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var H=new m,v=H.$$asyncQueue=[],t=H.$$postDigestQueue=[],ia=H.$$applyAsyncQueue=[],A=0;return H}]}function ze(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.$get=function(){return function(d,c){var f=c?b:a,e;e=Da(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function xg(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw ua("iwcard",a);a=Gd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ua("imatcher");}function Hd(a){var b=[];v(a)&&q(a,function(a){b.push(xg(a))});return b}function Lf(){this.SCE_CONTEXTS=pa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Hd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Hd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?sd(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[pa.HTML]=f(g);h[pa.CSS]=f(g);h[pa.URL]=f(g);h[pa.JS]=f(g);h[pa.RESOURCE_URL]=f(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||x(b)||
""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===pa.RESOURCE_URL){var g=Da(f.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return f;throw ua("insecurl",f.toString());}if(d===pa.HTML)return e(f);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Kf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>La)throw ua("iequirks");var c=ra(pa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,
e=c.getTrusted,g=c.trustAs;q(pa,function(a,b){var d=P(b);c[("parse_as_"+d).replace(sc,gb)]=function(b){return f(a,b)};c[("get_trusted_"+d).replace(sc,gb)]=function(b){return e(a,b)};c[("trust_as_"+d).replace(sc,gb)]=function(b){return g(a,b)}});return c}]}function Mf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=Z((/android (\d+)/.exec(P((a.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>f||e),hasEvent:function(a){if("input"===a&&La)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:za(),transitions:k,animations:l,android:f}}]}function Of(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,f,e){function g(h,k){g.totalPendingRequests++;if(!E(h)||x(d.get(h)))h=e.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;C(l)?l=l.filter(function(a){return a!==jc}):l===jc&&(l=null);return c.get(h,R({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=yg("tpload",h,a.status,a.statusText),b(a));return f.reject(a)})}g.totalPendingRequests=
0;return g}]}function Pf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=$.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Gd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');
if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Qf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){y(e)||(l=k,k=e,e=w);var m=wa.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(e.apply(null,m))}catch(b){p.reject(b),f(b)}finally{delete g[r.$$timeoutId]}n||
a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(w),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return e}]}function Da(a){La&&(ca.setAttribute("href",a),a=ca.href);ca.setAttribute("href",a);return{href:ca.href,protocol:ca.protocol?ca.protocol.replace(/:$/,""):"",host:ca.host,search:ca.search?ca.search.replace(/^\?/,""):"",hash:ca.hash?ca.hash.replace(/^#/,""):
"",hostname:ca.hostname,port:ca.port,pathname:"/"===ca.pathname.charAt(0)?ca.pathname:"/"+ca.pathname}}function sd(a){a=E(a)?Da(a):a;return a.protocol===Id.protocol&&a.host===Id.host}function Rf(){this.$get=ma(z)}function Jd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&
(c[l]=b(g.substring(k+1))));return c}}function Vf(){this.$get=Jd}function Xc(a){function b(d,c){if(F(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Kd);b("date",Ld);b("filter",zg);b("json",Ag);b("limitTo",Bg);b("lowercase",Cg);b("number",Md);b("orderBy",Nd);b("uppercase",Dg)}function zg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw M("filter")("notarray",
a);}c=c||"$";var f;switch(tc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Eg(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,b)}}function Eg(a,b,d,c){var f=F(a)&&d in a;!0===b?b=qa:y(b)||(b=function(a,b){if(x(a))return!1;if(null===a||null===b)return a===b;if(F(b)||F(a)&&!Vb(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!F(e)?Ha(e,a[d],b,d,!1):Ha(e,a,b,d,c)}}function Ha(a,b,d,c,f,
e){var g=tc(a),h=tc(b);if("string"===h&&"!"===b.charAt(0))return!Ha(a,b.substring(1),d,c,f);if(C(a))return a.some(function(a){return Ha(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==k.charAt(0)&&Ha(a[k],b,d,c,!0))return!0;return e?!1:Ha(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=b[k],!y(e)&&!x(e)&&(g=k===c,!Ha(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function tc(a){return null===a?"null":typeof a}function Kd(a){var b=
a.NUMBER_FORMATS;return function(a,c,f){x(c)&&(c=b.CURRENCY_SYM);x(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Od(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Md(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Od(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Fg(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Pd))&&(a=a.replace(Pd,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===uc;f++);
if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===uc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Qd&&(d=d.splice(0,Qd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Gg(a,b,d,c){var f=a.d,e=f.length-a.i;b=x(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-
1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Od(a,b,d,c,f){if(!E(a)&&!Y(a)||isNaN(a))return"";var e=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Fg(h);Gg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=uc+a;d&&(a=a.substr(a.length-b));return f+a}function aa(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Kb(e,b,c,f)}}function nb(a,b,d){return function(c,f){var e=
c["get"+a](),g=vb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Rd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Sd(a){return function(b){var d=Rd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function vc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ld(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));e=Z(b[4]||0)-e;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=Hg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Ig.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Jc(e,m),c=Wb(c,e,!0));q(h,function(b){k=Jg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ag(){return function(a,b){x(b)&&(b=2);return cb(a,b)}}function Bg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(ga(b))return a;Y(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?wc(a,d,d+b):0===d?wc(a,b,a.length):wc(a,Math.max(0,d+b),d)}}function wc(a,b,d){return E(a)?a.slice(b,d):wa.call(a,b,d)}function Nd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(y(b))d=b;else if(E(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(F(k)&&(k=a.index),F(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!ta(a))throw M("orderBy")("notarray",a);C(e)||(e=[e]);0===e.length&&(e=["+"]);var k=b(e),l=g?-1:1,m=y(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(y(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Vb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ra(a){y(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Lb(a,b,d,
c,f){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=f(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Td(this)}function Td(a){a.$$classCache={};a.$$classCache[Ud]=!(a.$$classCache[ob]=a.$$element.hasClass(ob))}function Vd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Nc(c,"-"):"";b(a,ob+c,!0===d);b(a,Ud+c,!1===d)}var c=a.set,f=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&f(this.$pending,a,h),Wd(this.$pending)&&(this.$pending=void 0));Ia(g)?g?(f(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),f(this.$$success,a,h)):(f(this.$error,a,h),f(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=Wd(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function Wd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function xc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,f,e){var g=P(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",
function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(f=S(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",l);if(Xd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var f,e;if(fa(d))return d;if(E(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Kg.test(d))return new Date(d);
a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function pb(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!fa(a)?d(a)||
void 0:a}yc(f,e,g,h);Sa(f,e,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Wb(a,r)),a});h.$formatters.push(function(a){if(a&&!fa(a))throw qb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Wb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(v(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||x(s)||d(a)>=s};g.$observe("min",function(a){s=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var u;
h.$validators.max=function(a){return!n(a)||x(u)||d(a)<=u};g.$observe("max",function(a){u=p(a);h.$validate()})}}}function yc(a,b,d,c){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Yd(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Lg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw qb("numfmt",b);b=b.toString()}return b})}
function Ta(a){v(a)&&!Y(a)&&(a=parseFloat(a));return ga(a)?void 0:a}function zc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function Zd(a,b,d){a=Number(a);if((a|0)!==a||(b|0)!==b||(d|0)!==d){var c=Math.max(zc(a),zc(b),zc(d)),c=Math.pow(10,c);a*=c;b*=c;d*=c}return 0===(a-b)%d}function $d(a,b,d,c,f){if(v(c)){a=a(c);if(!a.constant)throw qb("constexpr",d,c);return a(b)}return f}function Ac(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;C(a)?b=a.map(c).join(" "):F(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function f(a){var b=a;if(C(a))b=a.map(f);else if(F(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var e;return["$parse",function(g){return{restrict:"AC",link:function(h,
k,l){function m(a,b){var c=[];q(a,function(a){if(0<b||H[a])H[a]=(H[a]||0)+b,H[a]===+(0<b)&&c.push(a)});return c.join(" ")}function n(a){if(a===b){var c=t,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=t,c=m(c&&c.split(" "),-1),l.$removeClass(c);w=a}function p(a){a=c(a);a!==t&&r(a)}function r(a){if(w===b){var c=t&&t.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=m(f,-1),c=m(c,1);l.$addClass(c);l.$removeClass(f)}t=a}var s=l[a].trim(),v=":"===s.charAt(0)&&":"===s.charAt(1),s=g(s,v?f:c),u=v?p:r,H=k.data("$classCounts"),
w=!0,t;H||(H=W(),k.data("$classCounts",H));"ngClass"!==a&&(e||(e=g("$index",function(a){return a&1})),h.$watch(e,n));h.$watch(s,u,v)}}}]}function Ob(a,b,d,c,f,e,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;
this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=f(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;this.$$scope=a;this.$$attr=d;this.$$element=c;this.$$animate=e;this.$$timeout=g;this.$$parse=f;this.$$q=h;this.$$exceptionHandler=b;Td(this);Mg(this)}function Mg(a){a.$$scope.$watch(function(){var b=
a.$$ngModelGet(a.$$scope);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,f=b;c--;)f=d[c](f);a.$viewValue!==f&&(a.$$updateEmptyClasses(f),a.$viewValue=a.$$lastCommittedViewValue=f,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,w))}return b})}function Bc(a){this.$$options=a}function ae(a,b){q(b,function(b,c){v(a[c])||(a[c]=b)})}var Ng=/^\/(.+)\/([a-z]*)$/,va=Object.prototype.hasOwnProperty,
P=function(a){return E(a)?a.toLowerCase():a},vb=function(a){return E(a)?a.toUpperCase():a},La,D,oa,wa=[].slice,ng=[].splice,Og=[].push,na=Object.prototype.toString,Gc=Object.getPrototypeOf,Ga=M("ng"),$=z.angular||(z.angular={}),Zb,rb=0;La=z.document.documentMode;var ga=Number.isNaN||function(a){return a!==a};w.$inject=[];Ya.$inject=[];var C=Array.isArray,le=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,S=function(a){return E(a)?a.trim():a},Gd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},za=function(){if(!v(za.rules)){var a=z.document.querySelector("[ng-csp]")||z.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");za.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=za;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return za.rules},sb=function(){if(v(sb.name_))return sb.name_;var a,b,d=Ka.length,
c,f;for(b=0;b<d;++b)if(c=Ka[b],a=z.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return sb.name_=f},ne=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],qe=function(a){if(!a.currentScript)return!0;var b=a.currentScript.getAttribute("src"),d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}}(z.document),te=/[A-Z]/g,Oc=!1,Ja=
3,ye={full:"1.6.1",major:1,minor:6,dot:1,codeName:"promise-rectification"};X.expando="ng339";var ib=X.cache={},$f=1;X._data=function(a){return this.cache[a[this.expando]]||{}};var Wf=/-([a-z])/g,Pg=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},ac=M("jqLite"),Zf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,$b=/<|&#?\w+;/,Xf=/<([\w:-]+)/,Yf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var eg=z.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=X.prototype={ready:$c,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+
a])},length:0,push:Og,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[P(a)]=a});var ed={};q("input select option textarea button form details".split(" "),function(a){ed[a]=!0});var ld={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:dc,removeData:hb,hasData:function(a){for(var b in ib[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<
d;b++)hb(a[b])}},function(a,b){X[b]=a});q({data:dc,inheritedData:Eb,scope:function(a){return D.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||D.data(a,"$isolateScopeNoTemplate")},controller:bd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(Pg,"ms-"));if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;
if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=P(b),f=Gb[c];if(v(d))null===d||!1===d&&f?a.removeAttribute(b):a.setAttribute(b,f?c:d);else return a=a.getAttribute(b),f&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(v(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Ja?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===xa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||
a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:cd},function(a,b){X.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==cd&&x(2===a.length&&a!==Bb&&a!==bd?b:c)){if(F(b)){for(f=0;f<g;f++)if(a===dc)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=x(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],b,c);return this}});q({removeData:hb,on:function(a,b,d,
c){if(v(c))throw ac("onargs");if(Yc(a)){c=zb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=bg(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e));h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],dg),h(b,void 0,!0)):h(b)}},off:ad,one:function(a,b,d){a=D(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);q(new X(b),function(b){d?
c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new X(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new X(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=D(b).eq(0).clone()[0],c=a.parentNode;
c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new X(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;x(f)&&(f=!Bb(a,b));(f?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?
a.getElementsByTagName(b):[]},clone:cc,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:e,target:a},b.type&&(c=R(c,b)),b=ra(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||
b.apply(a,f)})}},function(a,b){X.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)x(e)?(e=a(this[g],b,c,f),v(e)&&(e=D(e))):bc(e,a(this[g],b,c,f));return v(e)?e:this}});X.prototype.bind=X.prototype.on;X.prototype.unbind=X.prototype.off;Qa.prototype={put:function(a,b){this[la(a,this.nextUid)]=b},get:function(a){return this[la(a,this.nextUid)]},remove:function(a){var b=this[a=la(a,this.nextUid)];delete this[a];return b}};var Uf=[function(){this.$get=[function(){return Qa}]}],gg=/^([^(]+?)=>/,
hg=/^[^(]*\(\s*([^)]*)\)/m,Qg=/,/,Rg=/^\s*(_?)(\S+?)\1\s*$/,fg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,da=M("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&d||(d=a.name||ig(a)),da("strictdi",d);b=fd(a);q(b[1].split(Qg),function(a){a.replace(Rg,function(a,b,d){c.push(d)})})}a.$inject=c}}else C(a)?(b=a.length-1,tb(a[b],"fn"),c=a.slice(0,b)):tb(a,"fn",!0);return c};var be=M("$animate"),lf=function(){this.$get=w},mf=function(){var a=
new Qa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):C(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=jg(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.remove(b)}});b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},jf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw be("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&
(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw be("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
enter:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Aa(h))},move:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Aa(h))},leave:function(b,c){return a.push(b,"leave",Aa(c),function(){b.remove()})},addClass:function(b,c,g){g=Aa(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Aa(g);g.removeClass=jb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Aa(h);
h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Aa(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],of=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},nf=function(){this.$get=
["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return e}]},kf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=Fa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},ea=M("$compile"),hc=new function(){};Qc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===hc};var gd=/^((?:x|data)[:\-_])/i,mg=/[:\-_]+(.)/g,nd=M("$controller"),
md=/^(\S+)(\s+as\s+([\w$]+))?$/,vf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},od="application/json",kc={"Content-Type":od+";charset=utf-8"},pg=/^\[|^\{(?!\{)/,qg={"[":/]$/,"{":/}$/},og=/^\)]\}',?\n/,td=M("$http"),Ea=$.$interpolateMinErr=M("$interpolate");Ea.throwNoconcat=function(a){throw Ea("noconcat",a);};Ea.interr=function(a,b){return Ea("interr",a,b.toString())};var Df=function(){this.$get=["$window",
function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Sg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,sg={http:80,https:443,ftp:21},lb=M("$location"),tg=/^\s*[\\/]{2,}/,Tg={$$absUrl:"",
$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=Sg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:xd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Y(a))a=a.toString(),this.$$search=
Lc(a);else if(F(a))a=Fa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw lb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:xd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([wd,oc,nc],function(a){a.prototype=Object.create(Tg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==nc||!this.$$html5)throw lb("nostate");this.$$state=
x(b)?null:b;return this}});var Ua=M("$parse"),wg={}.constructor.prototype.valueOf,Qb=W();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var Ug={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},qc=function(a){this.options=a};qc.prototype={constructor:qc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],f=Qb[d];Qb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ug[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Ad(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Fa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
$locals:{type:s.LocalsExpression}}};Dd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(a,b.$filter);var d="",c;this.stage="assign";if(c=Bd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=zd(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=
d;var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);d='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";d=(new Function("$filter","getStringValue","ifDefined","plus",d))(this.$filter,ug,vg,yd);this.state=this.stage=void 0;d.literal=Cd(a);d.constant=a.constant;return d},USE:"use",STRICT:"strict",watchFns:function(){var a=[],
b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||w;if(!e&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);
break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,
b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&
1!==f&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(f&&1!==f&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!f);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),
m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),
function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===
s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||
"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,
b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Y(a))return a.toString();
if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Ed.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);V(a,b.$filter);var d,c;if(d=Bd(a))c=this.recurse(d);d=zd(a.body);var f;d&&(f=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;f.push(d);
a.watchId=c}));var e=[];q(a.body,function(a){e.push(b.recurse(a.expression))});d=0===a.body.length?w:1===a.body.length?e[0]:function(a,b){var c;q(e,function(d){c=d(a,b)});return c};c&&(d.assign=function(a,b,d){return c(a,d,b)});f&&(d.inputs=f);d.literal=Cd(a);d.constant=a.constant;return d},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+
a.operator](f,b);case s.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return e.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(f=a.property.name),
a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d):this.nonComputedMember(c,f,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var n=f(a,c,d,e),p;if(null!=n.value){p=[];for(var r=0;r<
g.length;++r)p.push(g[r](a,c,d,e));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,e,g){var n=c(a,d,e,g);a=f(a,d,e,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?
g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=yd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);
h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,
f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,
g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,f,e,g){c=f&&a in f?f:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});f=c?c[a]:void 0;return b?{context:c,name:a,value:f}:f}},computedMember:function(a,b,d,c){return function(f,e,g,h){var k=a(f,e,g,h),l,m;null!=k&&(l=b(f,e,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h);c&&1!==c&&f&&null==f[b]&&(f[b]={});e=null!=f?f[b]:void 0;
return d?{context:f,name:b,value:e}:e}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var rc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new Ed(this.ast,b):new Dd(this.ast,b)};rc.prototype={constructor:rc,parse:function(a){return this.astCompiler.compile(a)}};var ua=M("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},sc=/_([a-z])/g,yg=M("$compile"),ca=z.document.createElement("a"),Id=
Da(z.location.href);Jd.$inject=["$document"];Xc.$inject=["$provide"];var Qd=22,Pd=".",uc="0";Kd.$inject=["$locale"];Md.$inject=["$locale"];var Jg={yyyy:aa("FullYear",4,0,!1,!0),yy:aa("FullYear",2,0,!0,!0),y:aa("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),LLLL:nb("Month",!1,!0),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",
1),sss:aa("Milliseconds",3),EEEE:nb("Day"),EEE:nb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Sd(2),w:Sd(1),G:vc,GG:vc,GGG:vc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ig=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Hg=/^-?\d+$/;Ld.$inject=["$locale"];var Cg=ma(P),Dg=ma(vb);Nd.$inject=
["$parse"];var Ae=ma({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),wb={};q(Gb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Ca("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});wb[c]=function(){return{restrict:"A",
priority:100,link:f}}}});q(ld,function(a,b){wb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&(c=f.ngPattern.match(Ng))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ca("ng-"+a);wb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",
e=null);f.$observe(b,function(b){b?(f.$set(g,b),La&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Mb={$addControl:w,$$renameControl:function(a,b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Pa(a.$name,
"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Vd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ce=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,e){d.addClass(Va).addClass(ob);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):w;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);R(n,Mb)})}}}}}]},Be=ce(),
Ne=ce(!0),Kg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Vg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Wg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Lg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,de=/^(\d{4,})-(\d{2})-(\d{2})$/,ee=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Cc=/^(\d{4,})-W(\d\d)$/,fe=/^(\d{4,})-(\d\d)$/,ge=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Xd=W();q(["date","datetime-local","month","time","week"],function(a){Xd[a]=!0});var he={text:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c)},date:pb("date",de,Nb(de,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":pb("datetimelocal",ee,Nb(ee,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:pb("time",ge,Nb(ge,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:pb("week",Cc,function(a,b){if(fa(a))return a;
if(E(a)){Cc.lastIndex=0;var d=Cc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Rd(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:pb("month",fe,Nb(fe,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var g,h;if(v(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Ta(a);c.$validate()});
if(v(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Ta(a);c.$validate()});if(v(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||Zd(b,g||0,k)};d.$observe("step",function(a){k=Ta(a);c.$validate()})}},url:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Vg.test(d)}},email:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);xc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Wg.test(d)}},radio:function(a,b,d,c){var f=!d.ngTrim||"false"!==S(d.ngTrim);x(d.name)&&b.attr("name",++rb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,f&&(g=S(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;f&&(a=S(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Ta(a);ga(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Ta(a);ga(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Ta(a);ga(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}yc(a,b,d,c);Yd(c);Sa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=v(d.min);f=v(d.max);e=v(d.step);var s=c.$render;c.$render=m&&v(q.rangeUnderflow)&&
v(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b<=p},g("max",k));e&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(r)||Zd(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=$d(h,a,"ngTrueValue",d.ngTrueValue,!0),l=$d(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return qa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Rc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){h[0]&&(he[P(g.type)]||he.text)(f,e,g,h[0],b,a,d,c)}}}}],Xg=/^(true|false|\d+)$/,
ef=function(){return{restrict:"A",priority:100,compile:function(a,b){return Xg.test(b.ngValue)?function(a,b,f){a=a.$eval(f.ngValue);b.prop("value",a);f.$set("value",a)}:function(a,b,f){a.$watch(f.ngValue,function(a){b.prop("value",a);f.$set("value",a)})}}}},Fe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=Yb(a)})}}}}],He=["$interpolate","$compile",function(a,
b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Ge=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);
c.html(a.getTrustedHtml(d)||"")})}}}}],df=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ie=Ac("",!0),Ke=Ac("Odd",0),Je=Ac("Even",1),Le=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Me=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Wc={},Yg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ca("ng-"+a);Wc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Yg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Pe=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=
b.$$createComment("end ngIf",f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=ub(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Qe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,p){var q=0,s,w,u,H=function(){w&&(w.remove(),
w=null);s&&(s.$destroy(),s=null);u&&(d.leave(u).done(function(a){!1!==a&&(w=null)}),w=u,u=null)};c.$watch(e,function(e){var m=function(a){!1===a||!v(h)||h&&!c.$eval(h)||b()},w=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){H();d.enter(a,null,f).done(m)});s=b;u=a;s.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||w!==q||(H(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(H(),n.template=null)})}}}}],
gf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,f){na.call(d[0]).match(/SVG/)?(d.empty(),a(Zc(f.template,z.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Re=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),cf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=d.ngList||", ",e="false"!==d.ngTrim,g=
e?S(f):f;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(e?S(a):a)});return b}});c.$formatters.push(function(a){if(C(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Ud="ng-invalid",Va="ng-pristine",Rb="ng-dirty",qb=M("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=
this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);y(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){y(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw qb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:w,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,
"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},
$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ga(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,
d=this.$valid,c=this.$modelValue,f=this.$options.getOption("allowInvalid"),e=this;this.$$runValidators(b,a,function(a){f||d===a||(e.$modelValue=a?b:void 0,e.$modelValue!==c&&e.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,f){var g=Boolean(d(a,b));c=c&&g;e(f,g)});return c?!0:(q(k.$asyncValidators,function(a,b){e(b,null)}),!1)}function f(){var c=[],d=!0;q(k.$asyncValidators,function(f,g){var h=f(a,b);if(!h||!y(h.then))throw qb("nopromise",
h);e(g,void 0);c.push(h.then(function(){e(g,!0)},function(){d=!1;e(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},w):g(!0)}function e(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))e(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){e(b,null)}),q(k.$asyncValidators,function(a,
b){e(b,null)})),e(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?f():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<
this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}ga(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,f=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;f&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){f||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})}};Vd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var bf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;if(e=e[2])g.$options=e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){function g(){h.$setTouched()}var h=e[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,Zg=/(\s+|^)default(\s+|$)/;Bc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=R({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=S(d.replace(Zg,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ae(a,this.$$options));ae(a,Pb.$$options);return new Bc(a)}};Pb=new Bc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var ff=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Se=Ra({terminal:!0,priority:1E3}),$g=M("ngOptions"),ah=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
$e=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(ah);if(!n)throw $g("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,u=s&&d(s),w=s?function(a,b){return u(c,b)}:function(a){return la(a)},
x=function(a,b){return w(a,B(a,b))},t=d(n[2]||n[1]),z=d(n[3]||""),A=d(n[4]||""),K=d(n[8]),I={},B=q?function(a,b){I[q]=b;I[p]=a;return I}:function(a){I[p]=a;return I};return{trackBy:s,getTrackByValue:x,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=B(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=B(d[p],p),r=v(c,q),p=w(r,q),u=t(c,q),I=z(c,q),q=A(c,q),r=new e(p,r,u,I,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return s?Fa(a.viewValue):a.viewValue}}}}}var f=z.document.createElement("option"),e=z.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,h,k,l){function m(a){var b=(a=t.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=t&&r.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];v(c.group)?Fb(c.element.parentNode):Fb(c.element)}t=y.getOptions();var d={};z&&h.prepend(r.emptyOption);t.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),A.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=A,c=f.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(A);s.$render();s.$isEmpty(a)||(b=r.readValue(),(y.trackBy||w?qa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],w=k.multiple;l=0;for(var u=h.children(),x=u.length;l<x;l++)if(""===u[l].value){r.hasEmptyOption=!0;r.emptyOption=u.eq(l);break}var z=!!r.emptyOption;D(f.cloneNode(!1)).val("?");var t,y=c(k.ngOptions,h,d),A=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};w?(r.writeValue=function(a){var b=a&&a.map(m)||[];t.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(C(s.$viewValue))return s.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=t.selectValueMap[h.val()],c=t.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):z?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
t.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(s.$viewValue)},function(){s.$render()}));z&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(y.getWatchables,
p)}}}}],Te=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=e.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),u=s+l+"-"+n+v,H=$.noop,y;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,u))});e.$watch(l,function(b){var c=parseFloat(b),f=ga(c);f||c in p||(c=a.pluralCat(c-
n));c===y||f&&ga(y)||(H(),f=r[c],x(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),H=w,k()):H=e.$watch(f,k),y=c)})}}}],Ue=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var u,w,x,t,y={$id:la};r?u=a(r):(x=function(a,b){return la(b)},
t=function(a){return a});return function(a,d,e,g,l){u&&(w=function(b,c,d){v&&(y[v]=b);y[s]=c;y.$index=d;return u(a,y)});var m=W();a.$watchCollection(n,function(e){var g,n,r=d[0],u,y=W(),z,D,E,B,F,C,I;p&&(a[p]=e);if(ta(e))F=e,n=w||x;else for(I in n=w||t,F=[],e)va.call(e,I)&&"$"!==I.charAt(0)&&F.push(I);z=F.length;I=Array(z);for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],B=n(D,E,g),m[B])C=m[B],delete m[B],y[B]=C,I[g]=C;else{if(y[B])throw q(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,B,E);I[g]={id:B,
scope:void 0,clone:void 0};y[B]=!0}for(u in m){C=m[u];B=ub(C.clone);b.leave(B);if(B[0].parentNode)for(g=0,n=B.length;g<n;g++)B[g].$$NG_REMOVED=!0;C.scope.$destroy()}for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],C=I[g],C.scope){u=r;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.clone[0]!==u&&b.move(ub(C.clone),null,r);r=C.clone[C.clone.length-1];f(C.scope,g,s,E,v,D,z)}else l(function(a,c){C.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;C.clone=a;y[C.id]=C;f(C.scope,g,s,E,v,D,z)});m=
y})}}}}],Ve=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],We=Ra(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Xe=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var s=ub(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ye=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),Ze=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),bh=M("ngTransclude"),af=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw bh("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var e=a.length;d<e;d++){var g=a[d];if(g.nodeType!==
Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&k()}}}}],Ce=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ch={$setViewValue:w,$render:w},dh=["$element","$scope",function(a,b){function d(){h||(h=!0,b.$$postDigest(function(){h=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}function f(a){a.prop("selected",!0);a.attr("selected",!0)}var e=this,g=new Qa;e.selectValueMap={};e.ngModelCtrl=ch;e.multiple=!1;e.unknownOption=D(z.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);
a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+la(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),f(e.emptyOption))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=w});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=
function(b){var c=a[0].options[a[0].selectedIndex];c&&c.removeAttribute("selected");e.hasOption(b)?(e.removeUnknownOption(),c=la(b),a.val(c in e.selectValueMap?c:b),f(D(a[0].options[a[0].selectedIndex]))):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Pa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=g.get(a)||0;g.put(a,
c+1);d()}};e.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.remove(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):g.put(a,b-1))};e.hasOption=function(a){return!!g.get(a)};var h=!1,k=!1;e.registerOption=function(a,b,d,f,g){if(d.$attr.ngValue){var h,k=NaN;d.$observe("value",function(a){var d,f=b.prop("selected");v(k)&&(e.removeOption(h),delete e.selectValueMap[k],d=!0);k=la(a);h=a;e.selectValueMap[k]=a;e.addOption(a,b);b.attr("value",k);d&&f&&c()})}else f?d.$observe("value",function(a){e.readValue();
var d,f=b.prop("selected");v(h)&&(e.removeOption(h),d=!0);h=a;e.addOption(a,b);d&&f&&c()}):g?a.$watch(g,function(a,f){d.$set("value",a);var g=b.prop("selected");f!==a&&e.removeOption(f);e.addOption(a,b);f&&g&&c()}):e.addOption(d.value,b);d.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=d.value;e.removeOption(b);e.ngModelCtrl.$render();(e.multiple&&a&&
-1!==a.indexOf(b)||a===b)&&c(!0)})}}],De=function(){return{restrict:"E",require:["select","?ngModel"],controller:dh,priority:1,link:{pre:function(a,b,d,c){var f=c[0],e=c[1];if(e){if(f.ngModelCtrl=e,b.on("change",function(){f.removeUnknownOption();a.$apply(function(){e.$setViewValue(f.readValue())})}),d.multiple){f.multiple=!0;f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in f.selectValueMap?f.selectValueMap[b]:b))});return a};f.writeValue=
function(a){var c=new Qa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))||v(c.get(f.selectValueMap[a.value]))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||qa(g,e.$viewValue)||(g=ra(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}else f.registerOption=w},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},Ee=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,
d){var c,f;v(d.ngValue)||(v(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Tc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Sc=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(f)||f.test(b)}}}}},Vc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=ga(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>
f||c.$isEmpty(b)||b.length<=f}}}}},Uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};z.angular.bootstrap?z.console&&console.log("WARNING: Tried to load angular more than once."):(ue(),xe($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",
{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==e?"one":"other"}})}]),D(function(){pe(z.document,Mc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Satellizer 0.15.5
 * (c) 2016 Sahat Yalkabov
 * License: MIT
 */
(function(global,factory){ true?module.exports=factory():typeof define==="function"&&define.amd?define(factory):global.satellizer=factory()})(this,function(){"use strict";var Config=function(){function Config(){this.baseUrl="/";this.loginUrl="/auth/login";this.signupUrl="/auth/signup";this.unlinkUrl="/auth/unlink/";this.tokenName="token";this.tokenPrefix="satellizer";this.tokenHeader="Authorization";this.tokenType="Bearer";this.storageType="localStorage";this.tokenRoot=null;this.withCredentials=false;this.providers={facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:window.location.origin+"/",requiredUrlParams:["display","scope"],scope:["email"],scopeDelimiter:",",display:"popup",oauthType:"2.0",popupOptions:{width:580,height:400}},google:{name:"google",url:"/auth/google",authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",redirectUri:window.location.origin,requiredUrlParams:["scope"],optionalUrlParams:["display","state"],scope:["profile","email"],scopePrefix:"openid",scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:452,height:633},state:function(){return encodeURIComponent(Math.random().toString(36).substr(2))}},github:{name:"github",url:"/auth/github",authorizationEndpoint:"https://github.com/login/oauth/authorize",redirectUri:window.location.origin,optionalUrlParams:["scope"],scope:["user:email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1020,height:618}},instagram:{name:"instagram",url:"/auth/instagram",authorizationEndpoint:"https://api.instagram.com/oauth/authorize",redirectUri:window.location.origin,requiredUrlParams:["scope"],scope:["basic"],scopeDelimiter:"+",oauthType:"2.0"},linkedin:{name:"linkedin",url:"/auth/linkedin",authorizationEndpoint:"https://www.linkedin.com/uas/oauth2/authorization",redirectUri:window.location.origin,requiredUrlParams:["state"],scope:["r_emailaddress"],scopeDelimiter:" ",state:"STATE",oauthType:"2.0",popupOptions:{width:527,height:582}},twitter:{name:"twitter",url:"/auth/twitter",authorizationEndpoint:"https://api.twitter.com/oauth/authenticate",redirectUri:window.location.origin,oauthType:"1.0",popupOptions:{width:495,height:645}},twitch:{name:"twitch",url:"/auth/twitch",authorizationEndpoint:"https://api.twitch.tv/kraken/oauth2/authorize",redirectUri:window.location.origin,requiredUrlParams:["scope"],scope:["user_read"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},live:{name:"live",url:"/auth/live",authorizationEndpoint:"https://login.live.com/oauth20_authorize.srf",redirectUri:window.location.origin,requiredUrlParams:["display","scope"],scope:["wl.emails"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},yahoo:{name:"yahoo",url:"/auth/yahoo",authorizationEndpoint:"https://api.login.yahoo.com/oauth2/request_auth",redirectUri:window.location.origin,scope:[],scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:559,height:519}},bitbucket:{name:"bitbucket",url:"/auth/bitbucket",authorizationEndpoint:"https://bitbucket.org/site/oauth2/authorize",redirectUri:window.location.origin+"/",requiredUrlParams:["scope"],scope:["email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1028,height:529}},spotify:{name:"spotify",url:"/auth/spotify",authorizationEndpoint:"https://accounts.spotify.com/authorize",redirectUri:window.location.origin,optionalUrlParams:["state"],requiredUrlParams:["scope"],scope:["user-read-email"],scopePrefix:"",scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:500,height:530},state:function(){return encodeURIComponent(Math.random().toString(36).substr(2))}}};this.httpInterceptor=function(){return true}}Object.defineProperty(Config,"getConstant",{get:function(){return new Config},enumerable:true,configurable:true});return Config}();var AuthProvider=function(){function AuthProvider(SatellizerConfig){this.SatellizerConfig=SatellizerConfig}Object.defineProperty(AuthProvider.prototype,"baseUrl",{get:function(){return this.SatellizerConfig.baseUrl},set:function(value){this.SatellizerConfig.baseUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"loginUrl",{get:function(){return this.SatellizerConfig.loginUrl},set:function(value){this.SatellizerConfig.loginUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"signupUrl",{get:function(){return this.SatellizerConfig.signupUrl},set:function(value){this.SatellizerConfig.signupUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"unlinkUrl",{get:function(){return this.SatellizerConfig.unlinkUrl},set:function(value){this.SatellizerConfig.unlinkUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenRoot",{get:function(){return this.SatellizerConfig.tokenRoot},set:function(value){this.SatellizerConfig.tokenRoot=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenName",{get:function(){return this.SatellizerConfig.tokenName},set:function(value){this.SatellizerConfig.tokenName=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenPrefix",{get:function(){return this.SatellizerConfig.tokenPrefix},set:function(value){this.SatellizerConfig.tokenPrefix=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenHeader",{get:function(){return this.SatellizerConfig.tokenHeader},set:function(value){this.SatellizerConfig.tokenHeader=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenType",{get:function(){return this.SatellizerConfig.tokenType},set:function(value){this.SatellizerConfig.tokenType=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"withCredentials",{get:function(){return this.SatellizerConfig.withCredentials},set:function(value){this.SatellizerConfig.withCredentials=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"storageType",{get:function(){return this.SatellizerConfig.storageType},set:function(value){this.SatellizerConfig.storageType=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"httpInterceptor",{get:function(){return this.SatellizerConfig.httpInterceptor},set:function(value){if(typeof value==="function"){this.SatellizerConfig.httpInterceptor=value}else{this.SatellizerConfig.httpInterceptor=function(){return value}}},enumerable:true,configurable:true});AuthProvider.prototype.facebook=function(options){angular.extend(this.SatellizerConfig.providers.facebook,options)};AuthProvider.prototype.google=function(options){angular.extend(this.SatellizerConfig.providers.google,options)};AuthProvider.prototype.github=function(options){angular.extend(this.SatellizerConfig.providers.github,options)};AuthProvider.prototype.instagram=function(options){angular.extend(this.SatellizerConfig.providers.instagram,options)};AuthProvider.prototype.linkedin=function(options){angular.extend(this.SatellizerConfig.providers.linkedin,options)};AuthProvider.prototype.twitter=function(options){angular.extend(this.SatellizerConfig.providers.twitter,options)};AuthProvider.prototype.twitch=function(options){angular.extend(this.SatellizerConfig.providers.twitch,options)};AuthProvider.prototype.live=function(options){angular.extend(this.SatellizerConfig.providers.live,options)};AuthProvider.prototype.yahoo=function(options){angular.extend(this.SatellizerConfig.providers.yahoo,options)};AuthProvider.prototype.bitbucket=function(options){angular.extend(this.SatellizerConfig.providers.bitbucket,options)};AuthProvider.prototype.spotify=function(options){angular.extend(this.SatellizerConfig.providers.spotify,options)};AuthProvider.prototype.oauth1=function(options){this.SatellizerConfig.providers[options.name]=angular.extend(options,{oauthType:"1.0"})};AuthProvider.prototype.oauth2=function(options){this.SatellizerConfig.providers[options.name]=angular.extend(options,{oauthType:"2.0"})};AuthProvider.prototype.$get=function(SatellizerShared,SatellizerLocal,SatellizerOAuth){return{login:function(user,options){return SatellizerLocal.login(user,options)},signup:function(user,options){return SatellizerLocal.signup(user,options)},logout:function(){return SatellizerShared.logout()},authenticate:function(name,data){return SatellizerOAuth.authenticate(name,data)},link:function(name,data){return SatellizerOAuth.authenticate(name,data)},unlink:function(name,options){return SatellizerOAuth.unlink(name,options)},isAuthenticated:function(){return SatellizerShared.isAuthenticated()},getPayload:function(){return SatellizerShared.getPayload()},getToken:function(){return SatellizerShared.getToken()},setToken:function(token){return SatellizerShared.setToken({access_token:token})},removeToken:function(){return SatellizerShared.removeToken()},setStorageType:function(type){return SatellizerShared.setStorageType(type)}}};AuthProvider.$inject=["SatellizerConfig"];return AuthProvider}();AuthProvider.prototype.$get.$inject=["SatellizerShared","SatellizerLocal","SatellizerOAuth"];function joinUrl(baseUrl,url){if(/^(?:[a-z]+:)?\/\//i.test(url)){return url}var joined=[baseUrl,url].join("/");var normalize=function(str){return str.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")};return normalize(joined)}function getFullUrlPath(location){var isHttps=location.protocol==="https:";return location.protocol+"//"+location.hostname+":"+(location.port||(isHttps?"443":"80"))+(/^\//.test(location.pathname)?location.pathname:"/"+location.pathname)}function parseQueryString(str){var obj={};var key;var value;angular.forEach((str||"").split("&"),function(keyValue){if(keyValue){value=keyValue.split("=");key=decodeURIComponent(value[0]);obj[key]=angular.isDefined(value[1])?decodeURIComponent(value[1]):true}});return obj}function decodeBase64(str){var buffer;if(typeof module!=="undefined"&&module.exports){try{buffer=__webpack_require__(43).Buffer}catch(err){}}var fromCharCode=String.fromCharCode;var re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=(7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3);var offset=cp-65536;return fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320);case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var _decode=buffer?function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(atob(a))};return _decode(String(str).replace(/[-_]/g,function(m0){return m0==="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))}var Shared=function(){function Shared($q,$window,SatellizerConfig,SatellizerStorage){this.$q=$q;this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.SatellizerStorage=SatellizerStorage;var _a=this.SatellizerConfig,tokenName=_a.tokenName,tokenPrefix=_a.tokenPrefix;this.prefixedTokenName=tokenPrefix?[tokenPrefix,tokenName].join("_"):tokenName}Shared.prototype.getToken=function(){return this.SatellizerStorage.get(this.prefixedTokenName)};Shared.prototype.getPayload=function(){var token=this.SatellizerStorage.get(this.prefixedTokenName);if(token&&token.split(".").length===3){try{var base64Url=token.split(".")[1];var base64=base64Url.replace("-","+").replace("_","/");return JSON.parse(decodeBase64(base64))}catch(e){}}};Shared.prototype.setToken=function(response){var tokenRoot=this.SatellizerConfig.tokenRoot;var tokenName=this.SatellizerConfig.tokenName;var accessToken=response&&response.access_token;var token;if(accessToken){if(angular.isObject(accessToken)&&angular.isObject(accessToken.data)){response=accessToken}else if(angular.isString(accessToken)){token=accessToken}}if(!token&&response){var tokenRootData=tokenRoot&&tokenRoot.split(".").reduce(function(o,x){return o[x]},response.data);token=tokenRootData?tokenRootData[tokenName]:response.data&&response.data[tokenName]}if(token){this.SatellizerStorage.set(this.prefixedTokenName,token)}};Shared.prototype.removeToken=function(){this.SatellizerStorage.remove(this.prefixedTokenName)};Shared.prototype.isAuthenticated=function(){var token=this.SatellizerStorage.get(this.prefixedTokenName);if(token){if(token.split(".").length===3){try{var base64Url=token.split(".")[1];var base64=base64Url.replace("-","+").replace("_","/");var exp=JSON.parse(this.$window.atob(base64)).exp;if(typeof exp==="number"){return Math.round((new Date).getTime()/1e3)<exp}}catch(e){return true}}return true}return false};Shared.prototype.logout=function(){this.SatellizerStorage.remove(this.prefixedTokenName);return this.$q.when()};Shared.prototype.setStorageType=function(type){this.SatellizerConfig.storageType=type};Shared.$inject=["$q","$window","SatellizerConfig","SatellizerStorage"];return Shared}();var Local=function(){function Local($http,SatellizerConfig,SatellizerShared){this.$http=$http;this.SatellizerConfig=SatellizerConfig;this.SatellizerShared=SatellizerShared}Local.prototype.login=function(user,options){var _this=this;if(options===void 0){options={}}options.url=options.url?options.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.loginUrl);options.data=user||options.data;options.method=options.method||"POST";options.withCredentials=options.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(options).then(function(response){_this.SatellizerShared.setToken(response);return response})};Local.prototype.signup=function(user,options){if(options===void 0){options={}}options.url=options.url?options.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.signupUrl);options.data=user||options.data;options.method=options.method||"POST";options.withCredentials=options.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(options)};Local.$inject=["$http","SatellizerConfig","SatellizerShared"];return Local}();var Popup=function(){function Popup($interval,$window,$q){this.$interval=$interval;this.$window=$window;this.$q=$q;this.popup=null;this.defaults={redirectUri:null}}Popup.prototype.stringifyOptions=function(options){var parts=[];angular.forEach(options,function(value,key){parts.push(key+"="+value)});return parts.join(",")};Popup.prototype.open=function(url,name,popupOptions,redirectUri,dontPoll){var width=popupOptions.width||500;var height=popupOptions.height||500;var options=this.stringifyOptions({width:width,height:height,top:this.$window.screenY+(this.$window.outerHeight-height)/2.5,left:this.$window.screenX+(this.$window.outerWidth-width)/2});var popupName=this.$window["cordova"]||this.$window.navigator.userAgent.indexOf("CriOS")>-1?"_blank":name;this.popup=this.$window.open(url,popupName,options);if(this.popup&&this.popup.focus){this.popup.focus()}if(dontPoll){return}if(this.$window["cordova"]){return this.eventListener(redirectUri)}else{if(url==="about:blank"){this.popup.location=url}return this.polling(redirectUri)}};Popup.prototype.polling=function(redirectUri){var _this=this;return this.$q(function(resolve,reject){var redirectUriParser=document.createElement("a");redirectUriParser.href=redirectUri;var redirectUriPath=getFullUrlPath(redirectUriParser);var polling=_this.$interval(function(){if(!_this.popup||_this.popup.closed||_this.popup.closed===undefined){_this.$interval.cancel(polling);reject(new Error("The popup window was closed"))}try{var popupWindowPath=getFullUrlPath(_this.popup.location);if(popupWindowPath===redirectUriPath){if(_this.popup.location.search||_this.popup.location.hash){var query=parseQueryString(_this.popup.location.search.substring(1).replace(/\/$/,""));var hash=parseQueryString(_this.popup.location.hash.substring(1).replace(/[\/$]/,""));var params=angular.extend({},query,hash);if(params.error){reject(new Error(params.error))}else{resolve(params)}}else{reject(new Error("OAuth redirect has occurred but no query or hash parameters were found. "+"They were either not set during the redirect, or were removed—typically by a "+"routing library—before Satellizer could read it."))}_this.$interval.cancel(polling);_this.popup.close()}}catch(error){}},500)})};Popup.prototype.eventListener=function(redirectUri){var _this=this;return this.$q(function(resolve,reject){_this.popup.addEventListener("loadstart",function(event){if(event.url.indexOf(redirectUri)!==0){return}var parser=document.createElement("a");parser.href=event.url;if(parser.search||parser.hash){var query=parseQueryString(parser.search.substring(1).replace(/\/$/,""));var hash=parseQueryString(parser.hash.substring(1).replace(/[\/$]/,""));var params=angular.extend({},query,hash);if(params.error){reject(new Error(params.error))}else{resolve(params)}_this.popup.close()}});_this.popup.addEventListener("loaderror",function(){reject(new Error("Authorization failed"))});_this.popup.addEventListener("exit",function(){reject(new Error("The popup window was closed"))})})};Popup.$inject=["$interval","$window","$q"];return Popup}();var OAuth1=function(){function OAuth1($http,$window,SatellizerConfig,SatellizerPopup){this.$http=$http;this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.defaults={name:null,url:null,authorizationEndpoint:null,scope:null,scopePrefix:null,scopeDelimiter:null,redirectUri:null,requiredUrlParams:null,defaultUrlParams:null,oauthType:"1.0",popupOptions:{width:null,height:null}}}OAuth1.prototype.init=function(options,userData){var _this=this;angular.extend(this.defaults,options);var name=options.name,popupOptions=options.popupOptions;var redirectUri=this.defaults.redirectUri;if(!this.$window["cordova"]){this.SatellizerPopup.open("about:blank",name,popupOptions,redirectUri,true)}return this.getRequestToken().then(function(response){return _this.openPopup(options,response).then(function(popupResponse){return _this.exchangeForToken(popupResponse,userData)})})};OAuth1.prototype.openPopup=function(options,response){var url=[options.authorizationEndpoint,this.buildQueryString(response.data)].join("?");var redirectUri=this.defaults.redirectUri;if(this.$window["cordova"]){return this.SatellizerPopup.open(url,options.name,options.popupOptions,redirectUri)}else{this.SatellizerPopup.popup.location=url;return this.SatellizerPopup.polling(redirectUri)}};OAuth1.prototype.getRequestToken=function(){var url=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(url,this.defaults)};OAuth1.prototype.exchangeForToken=function(oauthData,userData){var payload=angular.extend({},userData,oauthData);var exchangeForTokenUrl=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(exchangeForTokenUrl,payload,{withCredentials:this.SatellizerConfig.withCredentials})};OAuth1.prototype.buildQueryString=function(obj){var str=[];angular.forEach(obj,function(value,key){str.push(encodeURIComponent(key)+"="+encodeURIComponent(value))});return str.join("&")};OAuth1.$inject=["$http","$window","SatellizerConfig","SatellizerPopup"];return OAuth1}();var OAuth2=function(){function OAuth2($http,$window,$timeout,$q,SatellizerConfig,SatellizerPopup,SatellizerStorage){this.$http=$http;this.$window=$window;this.$timeout=$timeout;this.$q=$q;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.SatellizerStorage=SatellizerStorage;this.defaults={name:null,url:null,clientId:null,authorizationEndpoint:null,redirectUri:null,scope:null,scopePrefix:null,scopeDelimiter:null,state:null,requiredUrlParams:null,defaultUrlParams:["response_type","client_id","redirect_uri"],responseType:"code",responseParams:{code:"code",clientId:"clientId",redirectUri:"redirectUri"},oauthType:"2.0",popupOptions:{width:null,height:null}}}OAuth2.camelCase=function(name){return name.replace(/([\:\-\_]+(.))/g,function(_,separator,letter,offset){return offset?letter.toUpperCase():letter})};OAuth2.prototype.init=function(options,userData){var _this=this;return this.$q(function(resolve,reject){angular.extend(_this.defaults,options);var stateName=_this.defaults.name+"_state";var _a=_this.defaults,name=_a.name,state=_a.state,popupOptions=_a.popupOptions,redirectUri=_a.redirectUri,responseType=_a.responseType;if(typeof state==="function"){_this.SatellizerStorage.set(stateName,state())}else if(typeof state==="string"){_this.SatellizerStorage.set(stateName,state)}var url=[_this.defaults.authorizationEndpoint,_this.buildQueryString()].join("?");_this.SatellizerPopup.open(url,name,popupOptions,redirectUri).then(function(oauth){if(responseType==="token"||!url){return resolve(oauth)}if(oauth.state&&oauth.state!==_this.SatellizerStorage.get(stateName)){return reject(new Error("The value returned in the state parameter does not match the state value from your original "+"authorization code request."))}resolve(_this.exchangeForToken(oauth,userData))}).catch(function(error){return reject(error)})})};OAuth2.prototype.exchangeForToken=function(oauthData,userData){var _this=this;var payload=angular.extend({},userData);angular.forEach(this.defaults.responseParams,function(value,key){switch(key){case"code":payload[value]=oauthData.code;break;case"clientId":payload[value]=_this.defaults.clientId;break;case"redirectUri":payload[value]=_this.defaults.redirectUri;break;default:payload[value]=oauthData[key]}});if(oauthData.state){payload.state=oauthData.state}var exchangeForTokenUrl=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(exchangeForTokenUrl,payload,{withCredentials:this.SatellizerConfig.withCredentials})};OAuth2.prototype.buildQueryString=function(){var _this=this;var keyValuePairs=[];var urlParamsCategories=["defaultUrlParams","requiredUrlParams","optionalUrlParams"];angular.forEach(urlParamsCategories,function(paramsCategory){angular.forEach(_this.defaults[paramsCategory],function(paramName){var camelizedName=OAuth2.camelCase(paramName);var paramValue=angular.isFunction(_this.defaults[paramName])?_this.defaults[paramName]():_this.defaults[camelizedName];if(paramName==="redirect_uri"&&!paramValue){return}if(paramName==="state"){var stateName=_this.defaults.name+"_state";paramValue=encodeURIComponent(_this.SatellizerStorage.get(stateName))}if(paramName==="scope"&&Array.isArray(paramValue)){paramValue=paramValue.join(_this.defaults.scopeDelimiter);if(_this.defaults.scopePrefix){paramValue=[_this.defaults.scopePrefix,paramValue].join(_this.defaults.scopeDelimiter)}}keyValuePairs.push([paramName,paramValue])})});return keyValuePairs.map(function(pair){return pair.join("=")}).join("&")};OAuth2.$inject=["$http","$window","$timeout","$q","SatellizerConfig","SatellizerPopup","SatellizerStorage"];return OAuth2}();var OAuth=function(){function OAuth($http,$window,$timeout,$q,SatellizerConfig,SatellizerPopup,SatellizerStorage,SatellizerShared,SatellizerOAuth1,SatellizerOAuth2){this.$http=$http;this.$window=$window;this.$timeout=$timeout;this.$q=$q;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.SatellizerStorage=SatellizerStorage;this.SatellizerShared=SatellizerShared;this.SatellizerOAuth1=SatellizerOAuth1;this.SatellizerOAuth2=SatellizerOAuth2}OAuth.prototype.authenticate=function(name,userData){var _this=this;return this.$q(function(resolve,reject){var provider=_this.SatellizerConfig.providers[name];var oauth=null;switch(provider.oauthType){case"1.0":oauth=new OAuth1(_this.$http,_this.$window,_this.SatellizerConfig,_this.SatellizerPopup);break;case"2.0":oauth=new OAuth2(_this.$http,_this.$window,_this.$timeout,_this.$q,_this.SatellizerConfig,_this.SatellizerPopup,_this.SatellizerStorage);break;default:return reject(new Error("Invalid OAuth Type"))}return oauth.init(provider,userData).then(function(response){if(provider.url){_this.SatellizerShared.setToken(response)}resolve(response)}).catch(function(error){reject(error)})})};OAuth.prototype.unlink=function(provider,httpOptions){if(httpOptions===void 0){httpOptions={}}httpOptions.url=httpOptions.url?httpOptions.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.unlinkUrl);httpOptions.data={provider:provider}||httpOptions.data;httpOptions.method=httpOptions.method||"POST";httpOptions.withCredentials=httpOptions.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(httpOptions)};OAuth.$inject=["$http","$window","$timeout","$q","SatellizerConfig","SatellizerPopup","SatellizerStorage","SatellizerShared","SatellizerOAuth1","SatellizerOAuth2"];return OAuth}();var Storage=function(){function Storage($window,SatellizerConfig){this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.memoryStore={}}Storage.prototype.get=function(key){try{return this.$window[this.SatellizerConfig.storageType].getItem(key)}catch(e){return this.memoryStore[key]}};Storage.prototype.set=function(key,value){try{this.$window[this.SatellizerConfig.storageType].setItem(key,value)}catch(e){this.memoryStore[key]=value}};Storage.prototype.remove=function(key){try{this.$window[this.SatellizerConfig.storageType].removeItem(key)}catch(e){delete this.memoryStore[key]}};Storage.$inject=["$window","SatellizerConfig"];return Storage}();var Interceptor=function(){function Interceptor(SatellizerConfig,SatellizerShared,SatellizerStorage){var _this=this;this.SatellizerConfig=SatellizerConfig;this.SatellizerShared=SatellizerShared;this.SatellizerStorage=SatellizerStorage;this.request=function(config){if(config["skipAuthorization"]){return config}if(_this.SatellizerShared.isAuthenticated()&&_this.SatellizerConfig.httpInterceptor()){var tokenName=_this.SatellizerConfig.tokenPrefix?[_this.SatellizerConfig.tokenPrefix,_this.SatellizerConfig.tokenName].join("_"):_this.SatellizerConfig.tokenName;var token=_this.SatellizerStorage.get(tokenName);if(_this.SatellizerConfig.tokenHeader&&_this.SatellizerConfig.tokenType){token=_this.SatellizerConfig.tokenType+" "+token}config.headers[_this.SatellizerConfig.tokenHeader]=token}return config}}Interceptor.Factory=function(SatellizerConfig,SatellizerShared,SatellizerStorage){return new Interceptor(SatellizerConfig,SatellizerShared,SatellizerStorage)};Interceptor.$inject=["SatellizerConfig","SatellizerShared","SatellizerStorage"];return Interceptor}();Interceptor.Factory.$inject=["SatellizerConfig","SatellizerShared","SatellizerStorage"];var HttpProviderConfig=function(){function HttpProviderConfig($httpProvider){this.$httpProvider=$httpProvider;$httpProvider.interceptors.push(Interceptor.Factory)}HttpProviderConfig.$inject=["$httpProvider"];return HttpProviderConfig}();angular.module("satellizer",[]).provider("$auth",["SatellizerConfig",function(SatellizerConfig){return new AuthProvider(SatellizerConfig)}]).constant("SatellizerConfig",Config.getConstant).service("SatellizerShared",Shared).service("SatellizerLocal",Local).service("SatellizerPopup",Popup).service("SatellizerOAuth",OAuth).service("SatellizerOAuth2",OAuth2).service("SatellizerOAuth1",OAuth1).service("SatellizerStorage",Storage).service("SatellizerInterceptor",Interceptor).config(["$httpProvider",function($httpProvider){return new HttpProviderConfig($httpProvider)}]);var ng1="satellizer";return ng1});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * State-based routing for AngularJS
 * @version v0.4.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return T(new(T(function(){},{prototype:a})),b)}function e(a){return S(arguments,function(b){b!==a&&S(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return S(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);d<c;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return T({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return S(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return S(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)h(c,d)==-1&&(b[d]=a[d]);return b}function n(a,b){var c=R(a),d=c?[]:{};return S(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=R(a)?[]:{};return S(a,function(a,d){c[d]=b(a,d)}),c}function p(a){return a.then(c,function(){})&&a}function q(a,b){var d=1,f=2,i={},j=[],k=i,l=T(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(t[c]!==f){if(s.push(c),t[c]===d)throw s.splice(0,h(s,c)),new Error("Cyclic dependency: "+s.join(" -> "));if(t[c]=d,P(a))r.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);S(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),r.push(c,a,e)}s.pop(),t[c]=f}}function o(a){return Q(a)&&a.then&&a.$$promises}if(!Q(i))throw new Error("'invocables' must be an object");var q=g(i||{}),r=[],s=[],t={};return S(i,n),i=s=t=null,function(d,f,g){function h(){--v||(w||e(u,f.$$values),s.$$values=u,s.$$promises=s.$$promises||!0,delete s.$$inheritedValues,n.resolve(u))}function i(a){s.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!N(s.$$failure))try{l.resolve(b.invoke(e,g,u)),l.promise.then(function(a){u[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;S(f,function(a){t.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,t[a].then(function(b){u[a]=b,--m||k()},j))}),m||k(),t[c]=p(l.promise)}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!Q(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),s=p(n.promise),t=s.$$promises={},u=T({},d),v=1+r.length/3,w=!1;if(p(s),N(f.$$failure))return i(f.$$failure),s;f.$$inheritedValues&&e(u,m(f.$$inheritedValues,q)),T(t,f.$$promises),f.$$values?(w=e(u,m(f.$$values,q)),s.$$inheritedValues=m(f.$$values,q),h()):(f.$$inheritedValues&&(s.$$inheritedValues=m(f.$$inheritedValues,q)),f.then(h,i));for(var x=0,y=r.length;x<y;x+=3)d.hasOwnProperty(r[x])?h():j(r[x],r[x+1],r[x+2]);return s}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function r(){var a=b.version.minor<3;this.shouldUnsafelyUseHttp=function(b){a=!!b},this.$get=["$http","$templateCache","$injector",function(b,c,d){return new s(b,c,d,a)}]}function s(a,b,c,d){this.fromConfig=function(a,b,c){return N(a.template)?this.fromString(a.template,b):N(a.templateUrl)?this.fromUrl(a.templateUrl,b):N(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return O(a)?a(b):a},this.fromUrl=function(e,f){return O(e)&&(e=e(f)),null==e?null:d?a.get(e,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data}):c.get("$templateRequest")(e)},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function t(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new W.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=W.type(h)||d(W.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=T({params:{}},Q(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new W.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function u(a){T(this,a)}function v(){function a(a){return null!=a?a.toString().replace(/(~|\/)/g,function(a){return{"~":"~~","/":"~2F"}[a]}):a}function e(a){return null!=a?a.toString().replace(/(~~|~2F)/g,function(a){return{"~~":"~","~2F":"/"}[a]}):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return O(a)||R(a)&&O(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],l.invoke(a.def))}}function k(a){T(this,a||{})}W=this;var l,m=!1,p=!0,q=!1,r={},s=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!N(a)||"string"==typeof a},pattern:/[^\/]*/},int:{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return a!==c&&null!==a&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};v.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return N(a)&&(m=a),m},this.strictMode=function(a){return N(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!N(a))return q;if(a!==!0&&a!==!1&&!P(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new t(a,T(f(),b))},this.isMatcher=function(a){if(!Q(a))return!1;var b=!0;return S(t.prototype,function(c,d){O(c)&&(b=b&&N(a[d])&&O(a[d]))}),b},this.type=function(a,b,c){if(!N(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new u(T({name:a},b)),c&&(w.push({name:a,def:c}),s||j()),this},S(x,function(a,b){r[b]=new u(T({name:b},a))}),r=d(r,{}),this.$get=["$injector",function(a){return l=a,s=!1,j(),S(x,function(a,b){r[b]||(r[b]=new u(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=Q(a)?g(a):[],c=h(b,"value")===-1&&h(b,"type")===-1&&h(b,"squash")===-1&&h(b,"array")===-1;return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?r[c.type]:c.type instanceof u?c.type:new u(c.type):"config"===e?r.any:r.string}function m(){var b={array:"search"===f&&"auto"},c=a.match(/\[\]$/)?{array:!0}:{};return T(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!N(c)||null==c)return q;if(c===!0||P(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function s(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=R(a.replace)?a.replace:[],P(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return h(g,a.from)===-1}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),N(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=s(e,y,z,A);T(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,T(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),S(b,function(b){S(g(b),function(b){h(a,b)===-1&&h(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return S(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return S(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function w(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return!N(d)||d}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return!!b&&(P(b)&&d.replace().url(b),!0)}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;e<g;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!O(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(P(a)){var b=a;a=function(){return b}}else if(!O(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=P(b);if(P(a)&&(a=d.compile(a)),!h&&!O(b)&&!R(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),T(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:P(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),T(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function x(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=P(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;i<j;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=A[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){B[a]||(B[a]=[]),B[a].push(b)}function q(a){for(var b=B[a]||[];b.length;)r(b.shift())}function r(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!P(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(A.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):P(b.parent)?b.parent:Q(b.parent)&&P(b.parent.name)?b.parent.name:"";if(e&&!A[e])return n(e,b.self);for(var f in D)O(D[f])&&(b[f]=D[f](b,D.$delegates[f]));return A[c]=b,!b[C]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){z.$current.navigable==b&&j(a,c)||z.transitionTo(b,a,{inherit:!0,location:!1})}]),q(c),b}function s(a){return a.indexOf("*")>-1}function t(a){for(var b=a.split("."),c=z.$current.name.split("."),d=0,e=b.length;d<e;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length==c.length&&c.join("")===b.join("")}function u(a,b){return P(a)&&!N(b)?D[a]:O(b)&&P(a)?(D[a]&&!D.$delegates[a]&&(D.$delegates[a]=D[a]),D[a]=b,this):this}function v(a,b){return Q(a)?b=a:b.name=a,r(b),this}function w(a,e,f,h,j,l,n,q,r){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return n.update(),E;if(!g.retry)return null;if(f.$retry)return n.update(),F;var h=z.transition=e.when(g.retry);return h.then(function(){return h!==z.transition?(a.$broadcast("$stateChangeCancel",b.to,b.toParams,c,d),B):(b.options.$retry=!0,z.transitionTo(b.to,b.toParams,b.options))},function(){return E}),n.update(),h}function v(a,c,d,g,i,l){function m(){var c=[];return S(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:l.notify})||""}],c.push(j.resolve(g,i.globals,i.resolve,a).then(function(c){if(O(d.controllerProvider)||R(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=j.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var w=new Error("transition superseded"),B=p(e.reject(w)),D=p(e.reject(new Error("transition prevented"))),E=p(e.reject(new Error("transition aborted"))),F=p(e.reject(new Error("transition failed")));return y.locals={resolve:null,globals:{$stateParams:{}}},z={params:{},current:y.self,$current:y,transition:null},z.reload=function(a){return z.transitionTo(z.current,l,{reload:a||!0,inherit:!1,notify:!0})},z.go=function(a,b,c){return z.transitionTo(a,b,T({inherit:!0,relative:z.$current},c))},z.transitionTo=function(b,c,f){c=c||{},f=T({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=z.$current,o=z.params,q=j.path,r=m(b,f.relative),s=c["#"];if(!N(r)){var t={to:b,toParams:c,options:f},A=u(t,j.self,o,f);if(A)return A;if(b=t.to,c=t.toParams,f=t.options,r=m(b,f.relative),!N(r)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(r[C])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(l,c||{},z.$current,r)),!r.params.$$validates(c))return F;c=r.params.$$values(c),b=r;var E=b.path,G=0,H=E[G],I=y.locals,J=[];if(f.reload){if(P(f.reload)||Q(f.reload)){if(Q(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var K=f.reload===!0?q[0]:m(f.reload);if(f.reload&&!K)throw new Error("No such reload state '"+(P(f.reload)?f.reload:f.reload.name)+"'");for(;H&&H===q[G]&&H!==K;)I=J[G]=H.locals,G++,H=E[G]}}else for(;H&&H===q[G]&&H.ownParams.$$equals(c,o);)I=J[G]=H.locals,G++,H=E[G];if(x(b,c,j,o,I,f))return s&&(c["#"]=s),z.params=c,U(z.params,l),U(k(b.params.$$keys(),l),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(n.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),n.update(!0)),z.transition=null,e.when(z.current);if(c=k(b.params.$$keys(),c||{}),s&&(c["#"]=s),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,o,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),null==z.transition&&n.update(),D;for(var L=e.when(I),M=G;M<E.length;M++,H=E[M])I=J[M]=d(I),L=v(H,c,H===b,L,I,f);var O=z.transition=L.then(function(){var d,e,g;if(z.transition!==O)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B;for(d=q.length-1;d>=G;d--)g=q[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=G;d<E.length;d++)e=E[d],e.locals=J[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.$current=b,z.current=b.self,z.params=c,U(z.params,l),z.transition=null,f.location&&b.navigable&&n.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,o),n.update(!0),z.current)}).then(null,function(d){return d===w?B:z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,o,d),g.defaultPrevented||n.update(),e.reject(d))});return p(O),O},z.is=function(a,b,d){d=T({relative:z.$current},d||{});var e=m(a,d.relative);return N(e)?z.$current===e&&(!b||g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)):c},z.includes=function(a,b,d){if(d=T({relative:z.$current},d||{}),P(a)&&s(a)){if(!t(a))return!1;a=z.$current.name}var e=m(a,d.relative);if(!N(e))return c;if(!N(z.$current.includes[e.name]))return!1;if(!b)return!0;for(var f=g(b),h=0;h<f.length;h++){var i=f[h],j=e.params[i];if(j&&!j.type.equals(l[i],b[i]))return!1}return g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)},z.href=function(a,b,d){d=T({lossy:!0,inherit:!0,absolute:!1,relative:z.$current},d||{});var e=m(a,d.relative);if(!N(e))return null;d.inherit&&(b=i(l,b||{},z.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?n.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},z.get=function(a,b){if(0===arguments.length)return o(g(A),function(a){return A[a].self});var c=m(a,b||z.$current);return c&&c.self?c.self:null},z}function x(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new W.ParamSet(f);return g.$$equals(b,c)}if(!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b)))return!0}var y,z,A={},B={},C="abstract",D={parent:function(a){if(N(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):y},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(P(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||y).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new W.ParamSet;return S(a.params||{},function(a,c){b[c]||(b[c]=new W.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?T(a.parent.params.$$new(),b):new W.ParamSet},views:function(a){var b={};return S(N(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?T({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};y=r({name:"",url:"^",views:null,abstract:!0}),y.navigable=null,this.decorator=u,this.state=v,this.$get=w,w.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function y(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=T(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function z(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function A(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(a){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=C(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function B(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return f.empty?f.empty():f[0].innerHTML=null,function(f,h,i){var j=d.$current,k=C(f,i,h,e),l=j&&j.locals[k];if(!l)return h.html(g),void a(h.contents())(f);h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),O(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}function C(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function D(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function E(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function F(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function G(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function H(a,b){return{relative:E(a)||b.$current,inherit:!0}}function I(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=D(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=F(e),l=g[1]||g[0],m=null;j.options=T(H(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=G(e,a,c,k,function(){return j}),e[e.on?"on":"bind"]("click",h),d.$on("$destroy",function(){e[e.off?"off":"unbind"]("click",h)}))}}}function J(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=F(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=G(d,a,b,i,function(){return m}),d[d.on?"on":"bind"]("click",h),c.$on("$destroy",function(){d[d.off?"off":"unbind"]("click",h)}))}}}function K(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,E(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);a!==-1&&p.splice(a,1)}}function h(a,c){if(!P(a))throw new Error("state should be a string");return Q(c)?a+V(c):(c=b.$eval(c),Q(c)?a+V(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(a){}o=o||c(e.uiSrefActive||"",!1)(b),Q(o)&&S(o,function(c,d){if(P(c)){var e=D(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(Q(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function L(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function M(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var N=b.isDefined,O=b.isFunction,P=b.isString,Q=b.isObject,R=b.isArray,S=b.forEach,T=b.extend,U=b.copy,V=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),q.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",q),b.module("ui.router.util").provider("$templateFactory",r);var W;t.prototype.concat=function(a,b){var c={caseInsensitive:W.caseInsensitive(),strict:W.strictMode(),squash:W.defaultSquashPolicy()};return new t(this.sourcePath+a+this.sourceSearch,T(c,b),this)},t.prototype.toString=function(){return this.source},t.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;e<j;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;e<i;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},t.prototype.parameters=function(a){return N(a)?this.params[a]||null:this.$$paramNames},t.prototype.validates=function(a){return this.params.$$validates(a)},t.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;f<i;f++){var k=f<h,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=!!p&&m.squash,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=R(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else P(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(R(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},u.prototype.is=function(a,b){return!0},u.prototype.encode=function(a,b){return a},u.prototype.decode=function(a,b){return a},u.prototype.equals=function(a,b){return a==b},u.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},u.prototype.pattern=/.*/,u.prototype.toString=function(){return"{Type:"+this.name+"}"},u.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},u.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return R(a)?a:N(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(R(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;
for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",v),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",w),x.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",x).run(["$injector",function(a){a.get("$state.runtime").autoinject&&a.get("$state")}]),y.$inject=[],b.module("ui.router.state").provider("$view",y),b.module("ui.router.state").provider("$uiViewScroll",z),A.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],B.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",A),b.module("ui.router.state").directive("uiView",B),I.$inject=["$state","$timeout"],J.$inject=["$state","$timeout"],K.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",I).directive("uiSrefActive",K).directive("uiSrefActiveEq",K).directive("uiState",J),L.$inject=["$state"],M.$inject=["$state"],b.module("ui.router.state").filter("isState",L).filter("includedByState",M)}(window,window.angular);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Accounting", []);

    __webpack_require__(23);
    __webpack_require__(22);
    __webpack_require__(24);
})();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Admin", []);

    __webpack_require__(25);
    __webpack_require__(26);
})();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('taternet').config(config);
    function config($mdThemingProvider, $authProvider) {
        materialConfig($mdThemingProvider);
        satellizerConfig($authProvider);
    }

    function materialConfig($mdThemingProvider) {
        console.log('MD theming');
        $mdThemingProvider.theme('default').primaryPalette('blue-grey', {
            'default': '500', // by default use shade 500 from the blue-grey palette for primary intentions
            'hue-1': '700', // use shade 700 for the <code>md-hue-1</code> class
            'hue-2': '800', // use shade 800 for the <code>md-hue-2</code> class
            'hue-3': 'A200' // use shade A200 for the <code>md-hue-3</code> class
        }).accentPalette('light-blue', {
            'default': '700' // use shade 200 for default, and keep all other shades the same
        });
    }

    function satellizerConfig($authProvider) {
        console.log("satellizerConfig ran");
        $authProvider.google({
            url: '/api/v1/employeelogin/social/jwt/google-oauth2/',
            hd: 'famoustate.com',
            prompt: 'select_account',
            clientId: '373420519079-h24np71la11of55ccqef6ne5q9hcvo9p.apps.googleusercontent.com',
            // redirectUri: window.location.origin + '/auth/google/',
            redirectUri: window.location.origin + '/',
            optionalUrlParams: ['prompt'],
            requiredUrlParams: ['scope', 'hd']
        });

        $authProvider.tokenType = 'JWT';
        $authProvider.tokenPrefix = 'satellizer_jwt';
        $authProvider.loginUrl = '/api/v1/contractorlogin/';
    }
})();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

    'use strict';

    angular.module('taternet')
    // remove spaces 
    .filter('nospace', function () {
        return function (value) {
            return !value ? '' : value.replace(/ /g, '');
        };
    })

    // replace uppercase to regular case
    .filter('humanizeDoc', function () {
        return function (doc) {
            if (!doc) return;
            if (doc.type === 'directive') {
                return doc.name.replace(/([A-Z])/g, function ($1) {
                    return '-' + $1.toLowerCase();
                });
            }

            return doc.label || doc.name;
        };
    });
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

  'use strict';

  angular.module("taternet").config(routesConfig);

  routesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

  function routesConfig($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/dashboard');

    var states = [{
      name: "index",
      url: '',
      abstract: true,
      views: {
        '': {
          templateUrl: "frontend/app/layout/shell/shell.html",
          controller: "ShellController",
          controllerAs: "shell"
        },
        'sidenav@index': {
          templateUrl: "frontend/app/layout/sidenav/sidenav.html",
          controller: "NavController",
          controllerAs: "nav"
        },
        'topnav@index': {
          templateUrl: "frontend/app/layout/topnav/topnav.html",
          controller: "TopNavController",
          controllerAs: "top"
        }
      }
    },
    /////////////////////////
    {
      name: "login",
      url: "/login",
      templateUrl: "frontend/app/admin/session/login.html",
      controller: "SessionController",
      controllerAs: "session"
    }, {
      name: "index.employees",
      url: "welcome",
      data: {
        roles: ['warehouse']
      },
      templateUrl: "frontend/app/dashboard/dashboard.html"
    }, {
      name: "index.installers",
      url: "installer/{id}",
      data: {
        roles: ['installer']
      },
      templateUrl: "frontend/app/installers/myinstalls.html",
      controller: "MyInstallsController",
      controllerAs: "install"
    }, {
      name: "index.games",
      url: "/games",
      data: {
        roles: ['warehouse']
      },
      templateUrl: "frontend/app/game/game.html",
      controller: "GameListController",
      controllerAs: "game"
    }, {
      name: "index.people",
      url: "/people",
      data: {
        roles: ['warehouse']
      },
      templateUrl: "frontend/app/people/people.html",
      controller: 'PeopleController',
      controllerAs: 'people'
    }, {
      name: "index.people.detail",
      url: "/{id}",
      data: {
        roles: ['warehouse']
      },
      templateUrl: "frontend/app/people/detail/peopleDetail.html",
      controller: 'PeopleDetailController',
      controllerAs: 'peopleDetail'
    }, {
      name: "index.ap",
      url: "/ap",
      abstract: true,
      template: '<ui-view></ui-view>'
    }, {
      name: "index.ap.installers",
      url: "/installers",
      data: {
        roles: ['warehouse', 'accounting_managers']
      },
      templateUrl: "frontend/app/accounting/ap/installers/installers.html",
      controller: 'APInstallersController',
      controllerAs: 'install'
    }, {
      name: "index.ap.installers.installer",
      url: "/{id}",
      data: {
        roles: ['warehouse', 'accounting_managers']
      },
      templateUrl: "frontend/app/accounting/ap/installers/detail/installersDetail.html",
      controller: 'APInstallersDetailController',
      controllerAs: 'installDetail'
    }, {
      name: "index.travelSheets",
      url: "/travelsheets",
      data: {
        roles: ['warehouse']
      },
      templateUrl: "frontend/app/transfers/transfers.html"
    }];

    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  }
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Game", []);

    __webpack_require__(28);
    __webpack_require__(27);
})();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Installers", []);

    __webpack_require__(29);
})();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Layout", []);

    __webpack_require__(30);
    __webpack_require__(33);
    __webpack_require__(32);
    __webpack_require__(31);
    __webpack_require__(34);
    __webpack_require__(35);
})();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("People", []);

    __webpack_require__(38);
    __webpack_require__(37);
    __webpack_require__(36);
})();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Services", []);

    __webpack_require__(39);
})();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Transfers", []);

    __webpack_require__(40);
    __webpack_require__(41);
})();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

!function(){"use strict";function b(){var b={bindToController:!0,controller:e,controllerAs:"barcodeCtrl",restrict:"AEC",template:'<img width="100%" height="100%" ng-if="barcodeCtrl.input" ng-src="{{barcodeCtrl.base64Barcode()}}" />',scope:{input:"@ngBarcodeInput",code:"@ngBarcodeCode",colorBarcode:"@ngBarcodeColor",colorBackground:"@ngBarcodeBackground"}};return b}function e(){function b(){l.code39.BMP={};for(var b in l.code39.plain){var e=l.code39.plain[b];l.code39.BMP[b]="";for(var w=0;9>w;w++){switch(e.charAt(w)){case"B":l.code39.BMP[b]+="\x00\x00\x00\x00\x00\x00\x00\x00\x00";break;case"b":l.code39.BMP[b]+="\x00\x00\x00";break;case"W":l.code39.BMP[b]+="";break;case"w":l.code39.BMP[b]+=""}l.code39.BMP[b]+=""}}return a()}function e(b){var e=!1;return b.length%2!=0||isNaN(parseInt(b))||(e=!0),e}function a(){var b="",a=i.code,w=i.input.toUpperCase(),n=c(i.colorBarcode,1),o=c(i.colorBackground,2),B=[n,o];switch(a){case"code39":for(var t="*"+w.trim()+"*",d=0;d<t.length;d++)b+=l.code39.BMP[t.charAt(d)];break;case"i25":var a=w.trim();if(!e(a))throw"Invalid input format";b=l.I25.plain.START,a.length%2==1&&(a="0"+a);for(var d=0;d<a.length;d+=2)for(var p=l.I25.plain[a.charAt(d)],x=l.I25.plain[a.charAt(d+1)].replace(/b/g,"w").replace(/B/g,"W"),W=0;5>W;W++)b+=p.charAt(W)+x.charAt(W);b+=l.I25.plain.END,b=b.replace(/w/g,""),b=b.replace(/W/g,""),b=b.replace(/b/g,"\x00\x00\x00"),b=b.replace(/B/g,"\x00\x00\x00\x00\x00\x00\x00\x00\x00");break;default:throw"Code "+a+" not implemented"}return r([b],B)}function w(b){var e="",a=0;do{var n=b.charCodeAt(a++),r=b.charCodeAt(a++),o=b.charCodeAt(a++),c=n>>2,B=(3&n)<<4|r>>4,i=(15&r)<<2|o>>6,l=63&o;isNaN(r)?i=l=64:isNaN(o)&&(l=64),e=e+w.keyStr.charAt(c)+w.keyStr.charAt(B)+w.keyStr.charAt(i)+w.keyStr.charAt(l)}while(a<b.length);return e}function n(b,e){if(0>b||0>e)throw"Negative numbers not allowed.";for(var a=1,w="",n=0;e>n;n++){if(0==b)o=0;else{var r=256*a,o=b%r;b-=o,o/=a,a=r}w+=String.fromCharCode(o)}if(0!=b)throw"Overflow, number too big for string length";return w}function r(b,e){var a="BMxxxx\x00\x00\x00\x00yyyy",r=b.length,o=r&&b[0].length,c=n(r,4),B=n(o,4),i=n(40,4),l=8,t=n(l,2),d=i+B+c+"\x00"+t+"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";if(24!=l){for(var p=[],x=0,W=0,h=0,u=0;256>u;u++)u<e.length&&(x=e[u][0],W=e[u][1],h=e[u][2]),p[u]=String.fromCharCode(h,W,x,0);p=p.join("")}var f;f=o%4==1?"\x00\x00\x00":o%4==2?"\x00\x00":o%4==3?"\x00":"";for(var g=[],s=0;r>s;s++)g[s]=b[r-s-1]+f;var v=a+d+p+g.join("");return v=v.replace(/yyyy/,n(a.length+d.length+p.length,4)),v=v.replace(/xxxx/,n(v.length,4)),"data:image/bmp;base64,"+w(v)}function o(b){var e=null,a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;b=b.replace(a,function(b,e,a,w){return e+e+a+a+w+w});var w=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);return e=w?[parseInt(w[1],16),parseInt(w[2],16),parseInt(w[3],16)]:[0,0,0]}function c(b,e){return b?B(b)?JSON.parse(b):o(b):1===e?[0,0,0]:[255,255,255]}function B(b){try{return JSON.parse(b)}catch(e){return!1}}var i=this,l={};l.code39={},l.code39.plain={},l.code39.plain[0]="bwbWBwBwb",l.code39.plain[1]="BwbWbwbwB",l.code39.plain[2]="bwBWbwbwB",l.code39.plain[3]="BwBWbwbwb",l.code39.plain[4]="bwbWBwbwB",l.code39.plain[5]="BwbWBwbwb",l.code39.plain[6]="bwBWBwbwb",l.code39.plain[7]="bwbWbwBwB",l.code39.plain[8]="BwbWbwBwb",l.code39.plain[9]="bwBWbwBwb",l.code39.plain.A="BwbwbWbwB",l.code39.plain.B="bwBwbWbwB",l.code39.plain.C="BwBwbWbwb",l.code39.plain.D="bwbwBWbwB",l.code39.plain.E="BwbwBWbwb",l.code39.plain.F="bwBwBWbwb",l.code39.plain.G="bwbwbWBwB",l.code39.plain.H="BwbwbWBwb",l.code39.plain.I="bwBwbWBwb",l.code39.plain.J="bwbwBWBwb",l.code39.plain.K="BwbwbwbWB",l.code39.plain.L="bwBwbwbWB",l.code39.plain.M="BwBwbwbWb",l.code39.plain.N="bwbwBwbWB",l.code39.plain.O="BwbwBwbWb",l.code39.plain.P="bwBwBwbWb",l.code39.plain.Q="bwbwbwBWB",l.code39.plain.R="BwbwbwBWb",l.code39.plain.S="bwBwbwBWb",l.code39.plain.T="bwbwBwBWb",l.code39.plain.U="BWbwbwbwB",l.code39.plain.V="bWBwbwbwB",l.code39.plain.W="BWBwbwbwb",l.code39.plain.X="bWbwBwbwB",l.code39.plain.Y="BWbwBwbwb",l.code39.plain.Z="bWBwBwbwb",l.code39.plain["-"]="bWbwbwBwB",l.code39.plain["."]="BWbwbwBwb",l.code39.plain[" "]="bWBwbwBwb",l.code39.plain["*"]="bWbwBwBwb",l.code39.plain.$="bWbWbWbwb",l.code39.plain["/"]="bWbWbwbWb",l.code39.plain["+"]="bWbwbWbWb",l.code39.plain["%"]="bwbWbWbWb",l.I25={},l.I25.plain={},l.I25.plain.START="wwwwwwwwwwbwbw",l.I25.plain.END="Bwbwwwwwwwwww",l.I25.plain[0]="bbBBb",l.I25.plain[1]="BbbbB",l.I25.plain[2]="bBbbB",l.I25.plain[3]="BBbbb",l.I25.plain[4]="bbBbB",l.I25.plain[5]="BbBbb",l.I25.plain[6]="bBBbb",l.I25.plain[7]="bbbBB",l.I25.plain[8]="BbbBb",l.I25.plain[9]="bBbBb",w.keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i.base64Barcode=b}angular.module("ngBarcode",[]).directive("ngBarcode",b)}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Accounting").controller("APInstallersDetailController", APInstallersDetailController);

    APInstallersDetailController.$inject = ['apinstallerservice', '$stateParams', '$timeout'];

    function APInstallersDetailController(apinstallerservice, $stateParams, $timeout) {
        var vm = this;
        // vm.onRowClick = onRowClick;
        vm.clicked = null;
        vm.vendor = {};

        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            columnMode: 'force',
            columns: [{
                name: "Order Number",
                prop: "order_number",
                width: 160,
                canAutoResize: false
            }, {
                name: "Model Number",
                prop: "item_id",
                width: 200
            }, {
                name: "Invoiced",
                prop: "invoiced",
                width: 110,
                canAutoResize: false
            }, {
                name: "Install Complete",
                prop: "installed",
                width: 110,
                canAutoResize: false
            }, {
                name: "Paid",
                prop: "paid",
                width: 110,
                canAutoResize: false
            }]
        };

        vm.orders = {
            order: 'NT12021234',
            model: 'INS-APPL INS DW',
            invoiced: true,
            installed: true,
            paid: false
        };
        activate();

        function activate() {
            console.log("installers Detail activated");
            return apinstallerservice.getVendorSales($stateParams.id).then(function (vendorDetails) {
                console.log(vendorDetails[0]);
                vm.sales = vendorDetails[0].installs;
            });
        }

        function onRowClick(row) {
            // console.log(row)
            if (vm.clicked === row) {
                vm.clicked = null;
                console.log(row);
            } else {
                vm.clicked = row;
                $timeout(function () {
                    vm.clicked = null;
                }, 300);
            }
        }
    }
})();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Accounting").controller("APInstallersController", APInstallersController);

    APInstallersController.$inject = ['apinstallerservice', '$timeout', '$state'];

    function APInstallersController(apinstallerservice, $timeout, $state) {
        var vm = this;
        vm.onRowClick = onRowClick;
        vm.clicked = null;
        vm.vendors = {};

        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            columnMode: 'force',
            columns: [{
                name: "Vendor ID",
                prop: "id",
                width: 150,
                canAutoResize: false
            }, {
                name: "Vendor Name",
                prop: "name",
                width: 200
            }]
        };

        activate();

        function activate() {
            console.log("installers activated");
            return apinstallerservice.getVendors('Installer').then(function (vendors) {
                // console.log(vendors)
                vm.vendors = vendors;
            });
        }

        function onRowClick(row) {
            // console.log(row)
            if (vm.clicked === row) {
                vm.clicked = null;
                console.log(row.id);
                $state.go('index.ap.installers.installer', { id: row.id });
            } else {
                vm.clicked = row;
                $timeout(function () {
                    vm.clicked = null;
                }, 300);
            }
        }
    }
})();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('Accounting').factory('apinstallerservice', apinstallerservice);

    apinstallerservice.$inject = ['$http'];

    function apinstallerservice($http) {
        return {
            getVendors: getVendors,
            getVendorSales: getVendorSales
        };

        var self = this;

        function getVendors(vendor_type, vendor_id) {
            var params = {};

            if (vendor_type) {
                params.vendor_type = vendor_type;
            }

            if (vendor_id) {
                params.vendor_id = vendor_id;
            }

            return $http({
                url: "api/v1/vendors/",
                method: "GET",
                params: params
            }).then(processComplete).catch(processFailure);

            function processComplete(response) {
                return response.data;
            }

            function processFailure(response) {
                console.log(response);
            }
        };

        function getVendorSales(vendor_id) {
            var params = {};
            params.vendor_id = vendor_id;

            return $http({
                url: "api/v1/invoices/",
                method: "GET",
                params: params
            }).then(processComplete).catch(processFailure);

            function processComplete(response) {
                return response.data;
            }

            function processFailure(response) {
                console.log("vendor Sales failed", response);
            }
        };
    }
})();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Admin").controller("SessionController", SessionController);

    SessionController.$inject = ['sessionservice', '$auth', '$http', '$state', '$timeout', '$mdDialog'];

    function SessionController(sessionservice, $auth, $http, $state, $timeout, $mdDialog) {
        var vm = this;

        vm.user = {};
        vm.serverErrors = {};

        vm.employeeLogin = employeeLogin;
        vm.contractorLogin = contractorLogin;
        vm.logout = logout;

        function employeeLogin(provider) {
            $auth.authenticate(provider).then(function (response) {
                console.log("social auth login success", response);
                $auth.setToken(response.data.token);
                sessionservice.setUserJWT(response.data.token).then(function () {
                    $state.go("index.employees");
                });
            }).catch(function (response) {
                console.log("error: SessionController.authenticate");
                console.log(response);
                loginError(response.data.error);
            });
        }

        function contractorLogin(form) {

            vm.user.username = vm.user.email;
            console.log(form);
            if (form.$valid) {
                $auth.login(vm.user).then(function (response) {
                    console.log("contractor login success: ", response);
                    $auth.setToken(response.data.token);
                    sessionservice.setUserJWT(response.data.token).then(function () {
                        return sessionservice.getUser().then(function (user) {
                            console.log("user", user);
                            $state.go("index.installers", { id: user.vendor_id });
                        });
                    });
                }).catch(function (response) {
                    console.log("contractor login failure:", response);
                    var serverResponse = response.data[Object.keys(response.data)[0]][0];
                    loginError(serverResponse);
                });
            }
        }

        function logout() {
            sessionservice.logout();
        };

        function loginError(error) {
            $mdDialog.show($mdDialog.alert().parent(angular.element(document.body)).clickOutsideToClose(true).title('Login Error').textContent(error).ariaLabel('Server Login Error').ok('OK!').targetEvent(angular.element(document.body)));
        }
    }
})();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('Admin').factory('sessionservice', sessionservice);

    sessionservice.$inject = ['$http', 'localStorageService', '$auth', '$q'];

    function sessionservice($http, localStorageService, $auth, $q) {
        return {
            setUser: setUser,
            setUserJWT: setUserJWT,
            getUser: getUser,
            logout: logout,
            getUserLocation: getUserLocation,
            isInRole: isInRole,
            isInAnyRole: isInAnyRole
        };

        var self = this;

        function getUser() {
            var user = localStorageService.get("currentUser");
            return $q.when(user);
        }

        function getUserLocation() {
            return "0010";
        }

        function setUserJWT() {
            var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!token) {
                token = $auth.getToken();
            }

            return $http.get('api/v1/user/').then(function (response) {
                console.log("setUserJWT response", response);
                setUser(response);
            });
        }

        function setUser(response) {

            var groups = [{ name: "warehouse" }, { name: "user_admins" }];

            var source;
            var user = {};
            if (response) {
                source = response.data;
            } else {
                source = {
                    'username': null,
                    'first_name': null,
                    'last_name': null,
                    'email': null,
                    'social_thumb': null,
                    'roles': [],
                    'groups': []
                };
            }
            user.username = source.username;
            user.first_name = source.first_name;
            user.last_name = source.last_name;
            user.email = source.email;
            user.thumb = source.social_thumb;
            user.roles = source.groups;
            user.groups = source.groups;
            user.vendor_id = source.vendor_id;

            console.log("user.groups", user.groups);
            if (user.groups.length === 0) {
                user.groups = ['warehouse', 'employees'];
                user.roles = user.groups;
            }
            localStorageService.set('currentUser', user);
        };

        function logout() {
            $auth.removeToken();
            setUser();
            console.log("username after logout", localStorageService.get('currentUser').email);
        };

        function isInRole(role) {
            var user = localStorageService.get("currentUser");
            if (!$auth.isAuthenticated() || !user.roles) return false;

            return user.roles.indexOf(role) != -1;
        }

        function isInAnyRole(roles) {

            var user = localStorageService.get("currentUser");

            if (!$auth.isAuthenticated() || !user.roles) return false;

            for (var i = 0; i < roles.length; i++) {
                if (isInRole(roles[i])) return true;
            }

            return false;
        }
    }
})();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('Game').factory('gamedataservice', gamedataservice);

    gamedataservice.$inject = ['$http'];

    function gamedataservice($http) {
        return {
            getGames: getGames,
            getGame: getGame,
            addGame: addGame
        };

        function getGames() {
            return $http.get("api/v1/games/").then(getGamesComplete).catch(getGamesFailed);

            function getGamesComplete(response) {
                return response.data;
            }

            function getGamesFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function getGame() {
            return $http.get("api/v1/games/:game_id/").then(getGameComplete).catch(getGameFailed);

            function getGameComplete(response) {
                return response.data;
            }

            function getGameFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function addGame(newGameObj) {
            console.log("newGameObj", newGameObj);
            return $http.post("api/v1/games/", newGameObj).then(getGameComplete).catch(getGameFailed);

            function getGameComplete(response) {
                return response.data;
            }

            function getGameFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Game").controller("GameListController", GameListController);

    GameListController.$inject = ['gamedataservice'];

    function GameListController(gamedataservice) {

        var vm = this;

        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            checkboxSelection: true,
            selectable: true,
            multiSelect: true,
            columns: [{
                name: "Title",
                prop: "title",
                width: 300,
                isCheckboxColumn: true,
                headerCheckbox: true
            }, {
                name: "Description",
                prop: "description",
                width: 300
            }, {}]
        };
        vm.data = [];
        vm.game = {};
        vm.selected = [];

        vm.addGame = addGame;
        vm.onSelect = onSelect;
        vm.onRowClick = onRowClick;

        function onSelect(row) {
            console.log('ROW SELECTED!', row);
        }

        function onRowClick(row) {
            console.log('ROW CLICKED', row);
        }

        activate();

        function activate() {
            return getGames().then(function () {
                // logger.info('Activated Users View');
            });
        }

        function getGames() {
            return gamedataservice.getGames().then(function (data) {
                vm.data = data;
                return vm.data;
            });
        }

        function addGame(game) {
            console.log(game);
            return gamedataservice.addGame(game).then(function (data) {
                console.log(data);
                // vm.data = data;
                getGames();
                return vm.data;
            });
        }
    }
})();

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Installers").controller("MyInstallsController", MyInstallsController);

    MyInstallsController.$inject = ['apinstallerservice', '$stateParams', '$timeout', '$mdDialog'];

    function MyInstallsController(apinstallerservice, $stateParams, $timeout, $mdDialog) {
        var vm = this;
        // vm.onRowClick = onRowClick;
        vm.clicked = null;
        vm.vendor = {};
        vm.selected = [];
        vm.onSelect = onSelect;

        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            checkboxSelection: true,
            selectable: true,
            multiSelect: true,
            columnMode: 'force',
            columns: [{
                name: "Invoice Number",
                prop: "invoice_number",
                width: 260,
                canAutoResize: false,
                isCheckboxColumn: true,
                headerCheckbox: true
            }, {
                name: "Model Number",
                prop: "model_number",
                width: 200
            }, {
                name: "Install Complete",
                prop: "installed",
                width: 150,
                canAutoResize: false
            }, {
                name: "Paid",
                prop: "paid",
                width: 80,
                canAutoResize: false
            }]
        };

        vm.orders = {
            order: 'NT12021234',
            model: 'INS-APPL INS DW',
            invoiced: true,
            installed: true,
            paid: false
        };
        activate();

        function activate() {
            console.log("installers Detail activated");
            return apinstallerservice.getVendorSales($stateParams.id).then(function (vendorDetails) {
                console.log(vendorDetails);
                vm.sales = vendorDetails;
            });
        }

        function onRowClick(row) {
            // console.log(row)
            if (vm.clicked === row) {
                vm.clicked = null;
                console.log(row);
            } else {
                vm.clicked = row;
                $timeout(function () {
                    vm.clicked = null;
                }, 300);
            }
        }

        function onSelect(rows) {
            console.log(rows);
        }
    }
})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Layout").controller("ShellController", ShellController);

    ShellController.$inject = ['$mdSidenav'];

    function ShellController($mdSidenav) {
        var vm = this;

        vm.toggleSideNav = toggleSideNav;

        function toggleSideNav() {
            console.log('toggleSidenav');
            $mdSidenav('left-menu').toggle();
        };
    }
})();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  angular.module('Layout').run(['$templateCache', function ($templateCache) {
    $templateCache.put('frontend/app/layout/sidenav/menu-link.tmpl.html');
  }]).directive('menuLink', function () {
    return {
      scope: {
        section: '='
      },
      templateUrl: 'frontend/app/layout/sidenav/menu-link.tmpl.html',
      link: function link($scope, $element) {
        var controller = $element.parent().controller();

        $scope.focusSection = function () {
          // set flag to be used later when
          // $locationChangeSuccess calls openPage()
          controller.toggleSideNav();
        };
      }
    };
  });
})();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

  'use strict';

  angular.module('Layout').run(['$templateCache', function ($templateCache) {
    $templateCache.put('frontend/app/layout/sidenav/sidenavMenu_toggle.tmpl.html');
  }]).directive('menuToggle', ['$timeout', function ($timeout) {
    return {
      scope: {
        section: '='
      },
      templateUrl: 'frontend/app/layout/sidenav/menu-toggle.tmpl.html',
      link: function link(scope, element) {
        var controller = element.parent().controller();

        scope.isOpen = function () {
          return controller.isOpen(scope.section);
        };
        scope.toggle = function () {
          controller.toggleOpen(scope.section);
        };

        var parentNode = element[0].parentNode.parentNode.parentNode;
        if (parentNode.classList.contains('parent-list-item')) {
          var heading = parentNode.querySelector('h2');
          element[0].firstChild.setAttribute('aria-describedby', heading.id);
        }
      }
    };
  }]);
})();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {

  'use strict';

  angular.module('Layout').factory('menuService', menuService);

  menuService.$inject = ['sessionservice', 'localStorageService'];

  function menuService(sessionservice, localStorageService) {

    var self = this;
    var sections = [];
    var user = localStorageService.get("currentUser");
    console.log('user', self.user);
    var corporate_manager = {};

    var installers1 = {
      name: 'My Installs',
      type: 'link',
      state: 'index.contractors'
    };

    var installers2 = {
      name: 'My Installs',
      type: 'link',
      state: 'index.contractors'
    };

    var installers = {
      name: 'My Installs',
      type: 'toggle',
      pages: [{
        name: 'Create an invoice',
        type: 'link',
        state: 'index.installers({id: ' + user.vendor_id + '})'
      }, {
        name: 'Invoice History',
        type: 'link',
        state: 'index.installers'
      }]

    };

    var accounting_ar = {
      name: 'Accounts Receivable',
      type: 'toggle',
      pages: [{
        name: 'People',
        type: 'link',
        state: 'index.people'
      }]
    };
    var accounting_ap = {
      name: 'Accounts Payable',
      type: 'toggle',
      pages: [{
        name: 'Installers',
        type: 'link',
        state: 'index.ap.installers'
      }]
    };

    var sales_manager = {};
    var sales = {};

    var warehouse_manager = {};
    var warehouse = {
      name: 'Warehouse',
      type: 'toggle',
      pages: [{
        name: 'Travel Sheets',
        type: 'link',
        state: 'index.travelSheets'
      }]
    };

    var useradmin = {
      name: 'Settings',
      type: 'toggle',
      pages: [{
        name: 'Games',
        type: 'link',
        state: 'index.games'
      }, {
        name: 'History',
        type: 'link',
        state: 'index.people'
      }]
    };

    var groups = [{ name: "warehouse", sections: [warehouse] }, { name: "user_admins", sections: [useradmin] }, { name: "accounting_managers", sections: [accounting_ap, accounting_ar] }, { name: "installers", sections: [installers] }];

    return {
      getSections: getSections,
      toggleSelectSection: toggleSelectSection,
      isSectionSelected: isSectionSelected
    };

    function getSections() {
      return sessionservice.getUser().then(function (user) {
        sections = [];
        for (var i = 0; i < groups.length; i++) {
          // console.log(user.groups.indexOf(groups[i].name) != -1)
          if (user.groups.indexOf(groups[i].name) != -1) {
            for (var j = 0; j < groups[i].sections.length; j++) {
              sections.push(groups[i].sections[j]);
            }
          }
        }
        return sections;
      });
    }

    function setSections() {
      // var sections = []
      sessionservice.getUser().then(function (user) {
        sections.push(warehouse);
        sections.push(useradmin);
        // console.log(sections)
        return sections;
      });
    }

    function toggleSelectSection(section) {
      self.openedSection = self.openedSection === section ? null : section;
      // console.log("menuService.toggleSelectSection:", self.openedSection);
    }

    function isSectionSelected(section) {
      return self.openedSection === section;
    }

    // function selectPage(section, page) {
    //     page && page.url && $state.go(page.url);
    //     self.currentSection = section;
    //     self.currentPage = page;
    // }

    // function sortByHumanName(a, b) {
    //   return (a.humanName < b.humanName) ? -1 :
    //     (a.humanName > b.humanName) ? 1 : 0;
    // }
  };
})();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Layout").controller("NavController", NavController);

    NavController.$inject = ['sessionservice', 'menuService', "$mdSidenav", '$mdMedia', '$state'];

    function NavController(sessionservice, menuService, $mdSidenav, $mdMedia, $state) {
        var vm = this;

        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.toggleSideNav = toggleSideNav;
        vm.menu = menuService;
        vm.goHome = goHome;

        activate();
        function activate() {
            return menuService.getSections().then(function (sections) {
                vm.menu.sections = sections;
                console.log("activate:", vm.menu.sections);
            });
        }

        vm.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        // console.log(vm.menu.sections)

        function toggleSideNav() {
            if (!$mdMedia('gt-sm')) {
                $mdSidenav('left-menu').toggle();
            }
        }

        function isOpen(section) {
            return menuService.isSectionSelected(section);
        }

        function goHome() {
            return sessionservice.getUser().then(function (user) {
                if (user.groups.indexOf("employees") !== -1) {
                    $state.go('index.employees');
                } else {
                    $state.go('index.installers');
                };
            });
        }

        function toggleOpen(section) {
            // console.log("toggle open", section)
            menuService.toggleSelectSection(section);
        }
    }
})();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Layout").controller("TopNavController", TopNavController);

    TopNavController.$inject = ['sessionservice', '$mdSidenav', '$state', '$timeout'];

    function TopNavController(sessionservice, $mdSidenav, $state, $timeout) {
        var vm = this;

        vm.logout = logout;
        vm.toggleSideNav = toggleSideNav;
        vm.user = {};

        activate();

        function activate() {
            $timeout(function () {
                return sessionservice.getUser().then(function (user) {
                    vm.user = user;
                });
                console.log("user at topnav controller", vm.user);
            }, 300);
        }

        function logout() {
            sessionservice.logout();
            vm.user = {};
            $state.go('login');
        }

        function toggleSideNav() {
            // console.log('toggleSidenav');
            $mdSidenav('left-menu').toggle();
        };
    }
})();

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("People").controller("PeopleDetailController", PeopleDetailController);

    PeopleDetailController.$inject = ['dataservice', '$stateParams'];

    function PeopleDetailController(dataservice, $stateParams) {
        var vm = this;

        vm.person = {};

        activate();

        function activate() {
            console.log($stateParams);
            return getPerson($stateParams.id).then(function (result) {
                if (result) {
                    console.log(result);
                }
            });
        }

        function getPerson(id) {
            return dataservice.getPerson(id).then(function (data) {
                console.log("get person", data);
                vm.person = data;
                return true;
            });
        }
    }
})();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("People").controller("PeopleController", PeopleController);

    PeopleController.$inject = ['dataservice', '$state'];

    function PeopleController(dataservice, $state) {
        var vm = this;

        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            selectable: true,
            columns: [{
                name: "Name",
                width: 300
            }, {
                name: "Gender"
            }, {
                name: "Company"
            }]
        };
        vm.data = [];
        vm.onRowClick = onRowClick;

        activate();

        function activate() {
            return getPeople().then(function () {
                // logger.info('Activated People View');
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.data = data;
                return vm.data;
            });
        }

        function onRowClick(row) {
            console.log('ROW CLICKED', row);
            $state.transitionTo('index.people.detail', { id: row.id });
        }
    }
})();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('People').factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        return {
            getPeople: getPeople,
            getPerson: getPerson
        };

        function getPeople() {
            return $http({
                url: 'frontend/assets/data/people.json',
                // url: 'https://cdn.rawgit.com/Swimlane/angular-data-table/master/demos/data/100.json',
                // skipAuthorization: true,
                method: 'GET'
            }).then(getPeopleComplete).catch(getPeopleFailed);

            function getPeopleComplete(response) {
                return response.data;
            }

            function getPeopleFailed(error) {
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        function getPerson(id) {
            function personMatchesParam(person) {
                return person.id == id;
            }

            return getPeople().then(function (people) {
                return people.find(personMatchesParam);
            });
        }
    }
})();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('Services').factory('routeAuthService', routeAuthService);

    routeAuthService.$inject = ['$rootScope', '$state', 'sessionservice', '$auth'];

    function routeAuthService($rootScope, $state, sessionservice, $auth) {
        return {
            authorize: authorize
        };

        var self = this;

        function authorize() {
            return sessionservice.getUser().then(function () {
                var isAuthenticated = $auth.isAuthenticated();
                console.log("routeAuth.authenticated", isAuthenticated);
                console.log("rootscoop toState roles: ", $rootScope.toState.data.roles);
                console.log("length of rootscope roles: ", $rootScope.toState.data.roles.length);
                console.log("sessionservice.isInAnyRole: ", !sessionservice.isInAnyRole($rootScope.toState.data.roles));
                if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !sessionservice.isInAnyRole($rootScope.toState.data.roles)) {
                    console.log("entered redirect stragey");
                    if (isAuthenticated) {
                        // user is signed in but not
                        // authorized for desired state
                        $state.go('accessdenied');
                    } else {
                        // user is not authenticated. Stow
                        // the state they wanted before you
                        // send them to the sign-in state, so
                        // you can return them when you're done
                        console.log("else");
                        $rootScope.returnToState = $rootScope.toState;
                        $rootScope.returnToStateParams = $rootScope.toStateParams;

                        // now, send them to the signin state
                        // so they can log in
                        $state.go('login');
                    }
                }
            });
        }
    }
})();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module("Transfers").controller("TransfersController", TransfersController);

    TransfersController.$inject = ['transferdataservice', '$filter', 'filterFilter', 'sessionservice', '$mdDialog', '$timeout', '$state'];

    function TransfersController(transferdataservice, $filter, filterFilter, sessionservice, $mdDialog, $timeout, $state) {

        var vm = this;

        //Page variables and functions
        vm.filterTransfers = filterTransfers;
        vm.transfers = undefined;
        vm.inLocationFilter = {};
        vm.toLocationFilter = {};
        vm.selected = [];
        vm.printList = [];
        vm.resetFilters = resetFilters;
        vm.showFilters = showFilters;
        vm.filterDisabled = true;
        //Data Table Setup
        vm.options = {
            rowHeight: 50,
            headerHeight: 50,
            footerHeight: false,
            scrollbarV: false,
            checkboxSelection: true,
            selectable: true,
            multiSelect: true,
            columnMode: 'force',
            columns: [{
                name: "Model Number",
                prop: "inventory_id.model_number",
                width: 220,
                canAutoResize: false,
                isCheckboxColumn: true,
                headerCheckbox: true
            }, {
                name: "Serial Number",
                prop: "inventory_id.serial_number",
                width: 200,
                canAutoResize: false
            }, {
                name: "from",
                prop: "inventory_id.location",
                width: 100,
                canAutoResize: false
            }, {
                name: "to",
                prop: "to_location",
                width: 100,
                canAutoResize: false
            }, {
                name: "Notes",
                prop: "notes",
                cellRenderer: function cellRenderer(scope, ele) {
                    var rowNumber = scope.$parent.ctrl.transfers.indexOf(scope.$row);
                    return "<md-input-container layout-fill md-no-float style=\"margin: 0px; height: 36px;\"><input type=\"text\" placeholder=\"Notes\" ng-model-options=\"{ updateOn: 'blur' }\" ng-model=\"ctrl.transfers[" + rowNumber + "].notes\"></md-input-container>";
                }
            }]
        };
        // vm.onSelect = onSelect;
        // vm.onRowClick = onRowClick;

        //Barcode Setup
        vm.barcodeBackground = [255, 255, 255];
        vm.barcodeColor = { r: 0, g: 0, b: 0 };

        vm.stores = [{ name: "Corporate", id: "00" }, { name: "North Tampa", id: "01" }, { name: "Brandon", id: "02" }, { name: "South Tampa", id: "03" }, { name: "Lakeland", id: "04" }, { name: "Winter Haven", id: "05" }, { name: "Oldsmar", id: "06" }, { name: "Wesley Chapel", id: "07" }, { name: "Distribution", id: "09" }, { name: "Largo", id: "11" }, { name: "Port Richey", id: "12" }, { name: "Spring Hill", id: "13" }];
        vm.stockClassifications = [{ name: "Floor Model", id: "01" }, { name: "Display", id: "02" }, { name: "Boxed", id: "03" }, { name: "Depot", id: "04" }, { name: "Return", id: "05" }, { name: "Lost", id: "06" }, { name: "Eval", id: "10" }, { name: "Depot Overstock", id: "12" }];

        //Print Setup
        vm.printDiv = printDiv;
        // vm.date = new Date().toISOString().slice(0,10).replace(/-/g,"");

        vm.baseLocation;

        //// functions
        activate();

        function activate() {
            var month = new Date().toISOString().slice(0, 10).replace(/-/g, "").slice(4, 6);
            var day = new Date().toISOString().slice(0, 10).replace(/-/g, "").slice(6, 8);
            var year = new Date().toISOString().slice(0, 10).replace(/-/g, "").slice(0, 4);

            // console.log(month, day, year);
            vm.date = month + "/" + day + "/" + year;
            // console.log(vm.date);
            return getTransfers(null, null, true, true).then(function () {
                vm.toLocationFilter = {
                    store: {
                        name: "",
                        id: ""
                    },
                    stockClassification: {
                        name: "",
                        id: ""
                    }
                };
                getTransfers();
            }).catch(function () {
                console.log("that's an error");
            });
        }

        function getTransfers() {
            var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var destination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var partial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var init = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            // console.log('transfer request begun')
            return transferdataservice.getTransfers(location, destination, init).then(function (response) {
                // console.log("Transfers: ", response.data);
                if (partial) {
                    vm.transfers = response.data;
                    vm.printList = response.data;
                } else {
                    vm.dataStore = response.data;
                    vm.filterDisabled = false;
                };
                return;
                // console.log("filtered", vm.transfersFilter)
                // return vm.transfers;
            }).catch(function (error) {
                console.log("error at transfers controller");
                console.log(error);
                $mdDialog.show($mdDialog.alert()
                // .clickOutsideToClose(true)
                .title('Your session has expired').textContent('Please log in again.').ariaLabel('Expired Session').ok("Got it!").targetEvent(document.window)).then(function () {
                    $state.go('login');
                });
                throw response;
            });
        }

        function filterTransfers() {
            // Set inLocationFilter Value
            // console.log("start of filter Transfers")
            // console.log(vm.inLocationFilter, vm.toLocationFilter)
            if (vm.inLocationFilter.store.id) {
                vm.inLocationFilter.value = vm.inLocationFilter.store.id;
                if (vm.inLocationFilter.stockClassification.id) {
                    vm.inLocationFilter.value = "" + vm.inLocationFilter.store.id + vm.inLocationFilter.stockClassification.id;
                }
            } else {
                vm.inLocationFilter.value = null;
            }

            // set toLocationFilter Value
            if (vm.toLocationFilter.store.id) {
                vm.toLocationFilter.value = vm.toLocationFilter.store.id;
                if (vm.toLocationFilter.stockClassification) {
                    // console.log(vm.toLocationFilter)
                    vm.toLocationFilter.value = "" + vm.toLocationFilter.store.id + vm.toLocationFilter.stockClassification.id;
                }
            } else {
                vm.toLocationFilter.value = null;
            }

            // Filter based on values
            var matchingTransfers = [];

            if (vm.inLocationFilter.value) {
                // console.log(vm.inLocationFilter.value)
                for (var i = 0; i < vm.dataStore.length; i++) {
                    if (vm.dataStore[i].inventory_id.location.substr(0, vm.inLocationFilter.value.length) == vm.inLocationFilter.value) {
                        matchingTransfers.push(vm.dataStore[i]);
                    }
                }
                vm.transfers = matchingTransfers;
            } else {
                vm.transfers = vm.dataStore;
            }
            matchingTransfers = [];

            if (vm.toLocationFilter.value) {
                // console.log(vm.toLocationFilter.value);
                for (var i = 0; i < vm.transfers.length; i++) {
                    if (vm.transfers[i].to_location.substr(0, vm.toLocationFilter.value.length) == vm.toLocationFilter.value) {
                        matchingTransfers.push(vm.transfers[i]);
                    }
                }
                vm.transfers = matchingTransfers;
            }

            // vm.transfers = filterFilter(vm.dataStore, { to_location: vm.toLocationFilter })
            //    vm.transfers = $filter('filter')(vm.dataStore, { inv_transfer_to_location: vm.toLocationFilter });
        }

        function resetFilters() {
            vm.transfers = vm.dataStore;
        }

        // function onSelect(row) {
        //     console.log('ROW SELECTED!', row);
        // }

        // function onRowClick(row) {
        //     console.log('ROW CLICKED', row);
        // }

        function printDiv(divName) {
            console.log("items selected: ", vm.selected.length);
            var wait = 0;
            if (vm.selected.length > 0) {
                wait = 50;
                // need to wait for angular render refresh... $timeout? some such nonsense
                // console.log("print only selected", vm.selected.length);
                vm.printList = [];
                vm.printList = vm.selected;
                // console.log("printList Length: ", vm.printList.length)
            } else {
                wait = 50;
                vm.printList = vm.transfers;
            }

            $timeout(function () {
                var printContents = document.getElementById(divName).innerHTML;
                var popupWin = window.open('', '_blank', 'width=800,height=600');
                popupWin.document.open();
                popupWin.document.write('<html>' + '<head>' + '<link rel="stylesheet" type="text/css" href="frontend/app/transfers/style.css" />' + '</head>' +
                // '<body onload="window.print()>'+
                '<body>' + '<script type="text/javascript">' + 'setTimeout(function () { window.print(); }, 500);' + 'window.onfocus = function () { setTimeout(function () { window.close(); }, 500); };' + '</script>' + printContents + '</body>' + '</html>');
                // popupWin.document.close();
                // popupWin.close();
            }, wait);
        }

        function showFilters(ev) {
            $mdDialog.show({
                controller: DialogController,
                controllerAs: 'dialog',
                templateUrl: 'frontend/app/transfers/filterDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            }).then(function (answer) {
                vm.status = 'You said the information was "' + answer + '".';
            }, function () {
                vm.status = 'You cancelled the dialog.';
            });
        };

        function DialogController($mdDialog) {
            var dialog = this;

            var inLocationId = extractID(vm.inLocationFilter);
            var toLocationId = extractID(vm.toLocationFilter);

            dialog.inLocationInput = inLocationId || null;
            dialog.toLocationInput = toLocationId || null;

            // console.log(inLocationId, toLocationId)


            function extractID(filter) {
                if (Object.keys(filter).length > 0) {

                    return filter.store.id + filter.stockClassification.id;
                }
            }

            function extractFilterObject(userInput, direction) {
                var filterObj = {
                    store: { name: null, id: null },
                    stockClassification: { name: null, id: null }
                };

                if (userInput) {

                    filterObj.store.id = userInput.substr(0, 2);
                    if (userInput.length > 1) {
                        filterObj.stockClassification.id = userInput.substr(2, 3);
                    };
                }
                if (filterObj.store.id) {
                    for (var i = 0; i < vm.stores.length; i++) {
                        if (filterObj.store.id === vm.stores[i].id) {
                            filterObj.store.name = vm.stores[i].name;
                        }
                    }
                }

                if (filterObj.stockClassification.id) {
                    for (var i = 0; i < vm.stockClassifications.length; i++) {
                        if (filterObj.stockClassification.id === vm.stockClassifications[i].id) {
                            filterObj.stockClassification.name = vm.stockClassifications[i].name;
                        }
                    }
                }

                if (direction === 'in') {
                    vm.inLocationFilter = filterObj;
                } else {
                    vm.toLocationFilter = filterObj;
                }
                // console.log("after extraction")
                // console.log(vm.inLocationFilter, vm.toLocationFilter);
            }

            dialog.cancel = function () {
                $mdDialog.cancel();
            };

            dialog.submit = function () {
                // console.log("in filter at submit", dialog.inLocationInput);
                // console.log("to filter at submit", dialog.toLocationInput);
                extractFilterObject(dialog.inLocationInput, "in");
                extractFilterObject(dialog.toLocationInput, "to");
                vm.filterTransfers();
                $mdDialog.hide();
            };
        }
    }
})();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    'use strict';

    angular.module('Transfers').factory('transferdataservice', transferdataservice);

    transferdataservice.$inject = ['$http'];

    function transferdataservice($http) {
        return {
            getTransfers: getTransfers
        };
        function getTransfers(location, destination, init) {
            console.log(location, destination);
            var params = {};
            if (location) {
                params.location = location;
            }
            if (destination) {
                params.destination = destination;
            }
            if (init) {
                params.init = init;
            }
            return $http({
                url: "api/v1/transfers/",
                method: "GET",
                params: params
            }).then(getTransfersComplete).catch(getTransfersFailed);

            function getTransfersComplete(response) {
                console.log("get transfers success: ", response);
                return response;
            }

            function getTransfersFailed(response, error, status) {
                console.log("Get Transfers Error: ", response);
                throw response;
                // logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }

        // function getGame() {
        //     return $http.get(_urlPrefixes.API + "games/:game_id/")
        //         .then(getGameComplete)
        //         .catch(getGameFailed);

        //     function getGameComplete(response) {
        //         return response.data;
        //     }

        //     function getGameFailed(error) {
        //         // logger.error('XHR Failed for getAvengers.' + error.data);
        //     }
        // }

        // function addGame(newGameObj) {
        //     console.log("newGameObj", newGameObj)
        //     return $http.post(_urlPrefixes.API + "games/", newGameObj)
        //         .then(getGameComplete)
        //         .catch(getGameFailed);

        //     function getGameComplete(response) {
        //         return response.data;
        //     }

        //     function getGameFailed(error) {
        //         // logger.error('XHR Failed for getAvengers.' + error.data);
        //     }
        // }
    }
})();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(42)
var ieee754 = __webpack_require__(44)
var isArray = __webpack_require__(45)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 44 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Angular Framework */
__webpack_require__(7);

/* Layout Framework */
__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(4);

/* Libs */
__webpack_require__(9);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(0);
__webpack_require__(3);
__webpack_require__(21);
__webpack_require__(5);

/* App Components */
__webpack_require__(11);
__webpack_require__(17);
__webpack_require__(15);
__webpack_require__(18);
__webpack_require__(20);
__webpack_require__(19);
__webpack_require__(10);
__webpack_require__(16);

/* App Dependencies */
angular.module("taternet", ["Admin", "Layout", "Game", "People", "Transfers", "Services", "Accounting", "Installers",
//////////////////
// Outside Libs //
//////////////////
"ngMessages", "satellizer", "ngMaterial", "ngResource", "ui.router", "data-table", "LocalStorageModule", "ngBarcode"]);

/* UI Router States */
__webpack_require__(14);

/* Extra Config */
__webpack_require__(12);

/* Interceptors */

__webpack_require__(13);

angular.module("taternet").run(runBlock);

runBlock.$inject = ['$rootScope', '$state', '$auth', 'sessionservice', 'routeAuthService'];

function runBlock($rootScope, $state, $auth, sessionservice, routeAuthService) {
    // console.log($auth.isAuthenticated());
    if ($auth.isAuthenticated()) {
        return sessionservice.getUser().then(function (user) {
            console.log("user: ", user);
            if (user.groups.indexOf("employees") > -1 || user.groups.length === 0) {
                console.log("user is employee");
                $state.go('index.employees');
            } else {
                // $state.go('index.employees');
                $state.go('index.installers', { id: user.vendor_id });
            }
        });
    } else {
        $state.go('login');
    }

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        var payload = $auth.getPayload();
        console.log("runBlock.stateChangeStart.payload", payload);
        console.log("runBlock.stateChangeStart.to ");
        if (toState.name != 'login') {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
            routeAuthService.authorize();
        }

        // var refreshToken = store.get('refreshToken');
        // if (token) {
        //   if (!jwtHelper.isTokenExpired(token)) {
        //     if (!auth.isAuthenticated) {
        //       auth.authenticate(store.get('profile'), token);


        //       //Store the status in the scope 
        //       $rootScope.isAuthenticated = auth.isAuthenticated
        //     }
        //   } else {
        //     if (refreshToken) {
        //       if (refreshingToken === null) {
        //         refreshingToken = auth.refreshIdToken(refreshToken).then(function(idToken) {
        //           store.set('token', idToken);
        //           auth.authenticate(store.get('profile'), idToken);
        //         }).finally(function() {
        //           refreshingToken = null;
        //         });
        //       }
        //       return refreshingToken;
        //     } else {
        //       $location.path('/login');
        //     }
        //   }
        // }
    });
}

// (function () {
//     'use strict';

//     angular.module('taternet')
//         .factory('authMiddleware', authMiddleware);

//     authMiddleware.$inject = ['$auth', '$state']

//     function authMiddleware($auth, $state) {

//         var authMiddleware = this;

//         //if user is not logged in re-direct to login route
//         authMiddleware.run = function(event){
//             if(authService.isLoggedIn() == false){
//                 event.preventDefault();
//                 console.error('You are not logged in, so you cant browse this');
//                 $state.go('login');
//             }
//         };

//         return {
//             run : authMiddleware.run
//         };
//     };

// })();

/***/ })
/******/ ]);