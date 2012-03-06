Ext.Loader.setConfig({
  enabled : true,
  paths   : {
    Demo: "app",
  }
});

Ext.application({
  name: "Demo",
  
  launch : function(){
    Ext.create("Ext.Component", {
      fullscreen: true,
      layout: "fit",
      html: "Hello World"
    });
  }
});


