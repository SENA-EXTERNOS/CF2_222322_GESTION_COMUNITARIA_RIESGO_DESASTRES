(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fde47172"],{"7db0":function(t,e,o){"use strict";var n=o("23e7"),i=o("b727").find,s=o("44d2"),c="find",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(c)},b6b4:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"zoom"},[o("div",{ref:"img",staticClass:"zoom__img",attrs:{id:"zoom-"+t.mainId},on:{mouseover:function(e){t.enter=!0},mouseleave:function(e){t.enter=!1},mousemove:function(e){return e.preventDefault(),t.move.apply(null,arguments)},touchstart:function(e){t.enter=!0},touchend:function(e){t.enter=!1},touchmove:function(e){return e.preventDefault(),t.move.apply(null,arguments)},click:t.onClick}},[o("img",{attrs:{src:t.bajaResolucion}})]),o("div",{ref:"zoom",staticClass:"zoom__lens",class:{show:t.enter},style:[t.lensObj,t.extraLensObj]},[o("img",{ref:"zoomImg",style:t.zoomObj,attrs:{src:t.altaResolucion}})]),t._t("default")],2)},i=[],s=(o("7db0"),o("d3b7"),o("c73e")),c={name:"Zoom",mixins:[s["a"]],props:{lente:{type:String,default:"150"},bajaResolucion:{type:String,default:""},altaResolucion:{type:String,default:""}},data:function(){return{zoomLevel:1,enter:!1,isClicked:!1,lensObj:{top:0,left:0},zoomObj:{top:0,left:0}}},computed:{extraLensObj:function(){return{width:this.lente+"px",height:this.lente+"px",transform:"scale(".concat(this.enter?this.zoomLevel:0,")")}}},watch:{enter:function(t){t||(this.zoomLevel=1)}},methods:{onClick:function(){this.isClicked||(this.isClicked=!0,document.addEventListener("click",this.clicks))},clicks:function(t){var e=this;t.path.find((function(t){return t.id=="zoom-".concat(e.mainId)}))?this.$refs.img.addEventListener("wheel",this.zoom):this.isClicked&&(document.removeEventListener("click",this.clicks),this.$refs.img.removeEventListener("wheel",this.zoom),this.isClicked=!1)},move:function(t){var e,o,n,i,s,c=this.$refs.zoom,l=this.$refs.zoomImg;if(t.touches){var r=t.target.getBoundingClientRect();e=t.touches[0].clientX-r.x,o=t.touches[0].clientY-r.y,n=1.1}else e=t.offsetX,o=t.offsetY,n=2;this.lensObj.top="".concat(o-c.offsetHeight/n,"px"),this.lensObj.left="".concat(e-c.offsetWidth/n,"px"),i=(e-t.srcElement.offsetLeft)/t.srcElement.offsetWidth,s=(o-t.srcElement.offsetTop)/t.srcElement.offsetHeight;var a=-i*l.offsetWidth+c.offsetWidth/2,f=-s*l.offsetHeight+c.offsetHeight/2;this.zoomObj.left="".concat(a,"px"),this.zoomObj.top="".concat(f,"px")},zoom:function(t){t.preventDefault(),t.deltaY>0?this.zoomLevel++:this.zoomLevel--,this.zoomLevel<1&&(this.zoomLevel=1),this.zoomLevel>5&&(this.zoomLevel=5)}}},l=c,r=o("2877"),a=Object(r["a"])(l,n,i,!1,null,null,null);e["default"]=a.exports},c73e:function(t,e,o){"use strict";e["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(Math.random()*10**10),selected:"0"}),methods:{getId(t){return t<0?null:"sl-"+this.mainId+t+1}}}}}]);
//# sourceMappingURL=chunk-fde47172.47ce4bd3.js.map