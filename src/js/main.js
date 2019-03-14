var developMode = false;

if(developMode){
	require.config({
		baseUrl : '../../Source'
	});
} else{
	require.config({
		  paths: {
				'Cesium': '../../Build/Cesium/Cesium',
				'Sensor': './Sensor'
		  },
		  shim: {
			  Cesium: {
				  exports: 'Cesium'
			  },
			  Sensor: {
				  exports: 'Sensor'
			  }
		  }
	});
}

if (typeof Cesium !== "undefined" && typeof Sensor !== "undefined") {
    onload(Cesium,CesiumHeatmap,echarts);
} else if (typeof require === "function") {
    require(["Cesium", 'Sensor'], onload);
}
