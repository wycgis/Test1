define([
		'./RectangularSensor/RectangularSensorPrimitive',
		'./RectangularSensor/RectangularSensorGraphics',
		'./RectangularSensor/RectangularSensorVisualizer',
		'./ConicArcSensor/ConicArcSensorGeometry',
		'./ConicArcSensor/ConicArcSensorOutlineGeometry',
		'./ConicArcSensor/ConicArcSensorGraphics',
		'./ConicArcSensor/ConicArcSensorCollection',
		'Cesium'
		], function(
			RectangularSensorPrimitive,
			RectangularSensorGraphics,
			RectangularSensorVisualizer,
			ConicArcSensorGeometry,
			ConicArcSensorOutlineGeometry,
			ConicArcSensorGraphics,
			ConicArcSensorCollection,
			Cesium
			) {
		'use strict'

		Cesium.RectangularSensorPrimitive = RectangularSensorPrimitive;
		Cesium.RectangularSensorGraphics = RectangularSensorGraphics;
		Cesium.RectangularSensorVisualizer = RectangularSensorVisualizer;

		Cesium.ConicArcSensorGeometry = ConicArcSensorGeometry;
		Cesium.ConicArcSensorOutlineGeometry = ConicArcSensorOutlineGeometry;
		Cesium.ConicArcSensorGraphics = ConicArcSensorGraphics;
		Cesium.ConicArcSensorCollection = ConicArcSensorCollection;

		var DataSourceDisplay = Cesium.DataSourceDisplay;
		var originalDefaultVisualizersCallback = DataSourceDisplay.defaultVisualizersCallback;
		DataSourceDisplay.defaultVisualizersCallback = function (scene, entityCluster, dataSource) {
		    var entities = dataSource.entities;
		    var array = originalDefaultVisualizersCallback(scene, entityCluster, dataSource);
		    return array.concat([
		        new RectangularSensorVisualizer(scene, entities)
		    ]);
		};
});
