define(["backbone","./LayoutView","./cart-strip/ItemView","../cart/Service","./products/CollectionView","./products/Collection"],function(e,t,n,o,i,c){return e.Router.extend({initialize:function(e){this.container=e.container},routes:{products:"index"},index:function(){var e=new t;this.container.show(e);var r=new n({model:o.model}),a=new c;a.fetch();var s=new i({collection:a});e.cart.show(r),e.products.show(s)}})});