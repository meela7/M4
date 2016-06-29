/**
 * @ M4 System
 * @File Name: controller.js
 * @Description: Angular JS Controllers
 * 
 * @author Meilan Jiang
 * @since 2016.06.09
 * @version 1.0
 * 
 * Copyright(c) 2016 by CILAB All right reserved.
 */


/**
 * Entity
 */
naempApp.controller('EntityListCtrl',['$scope', 'EntityCollectionService', 'EntityService', '$location',
		function($scope, EntityCollectionService, EntityService, $location) {
	
		$scope.cancel = function() {
			$scope.search = "";
		}
		// callback for ng-click 'editEntity':
		$scope.editEntity = function(entityID) {
			$location.path('/entity-detail/' + entityID);
		};

		// callback for ng-click 'deleteEntity':
		$scope.deleteEntity = function(entity) {
			EntityService.remove({id:entity.entityID});
			$location.path('/entity-list');
		};
		// callback for ng-click 'createEntity':
		$scope.createEntity = function() {
			$location.path('/entity-creation');
		};
		$scope.entities = EntityCollectionService.find();

		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);

naempApp.controller('EntityDetailCtrl', [ '$scope', '$routeParams', 'EntityService', '$location',
		function($scope, $routeParams, EntityService, $location) {
			
		// callback for ng-click 'updateEntity':
		$scope.updateEntity = function(entity) {
			EntityService.update({id:entity.entityID}, entity);
			$location.path('/entity-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.entity = EntityService.find({
			id : $routeParams.id
		});
}]);

naempApp.controller('EntityCreationCtrl', [ '$scope', 'NewEntityService', '$location', 
        function($scope, NewEntityService, $location) {
		
		// callback for ng-click 'createNewEntity':
		$scope.createEntity = function(entity) {
			NewEntityService.create(entity);
			$location.path('/entity-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/** 
 * Source Controller
 */
naempApp.controller('SourceListCtrl',['$scope',	'SourceCollectionService', 'SourceService',	'$location',
		function($scope, SourceCollectionService, SourceService, $location) {

		$scope.cancel = function() {
			$scope.search = "";
		};
		// callback for ng-click 'editSource':
		$scope.editSource = function(sourceID) {
			$location.path('/source-detail/' + sourceID);
		};
		// callback for ng-click 'deleteSource':
		$scope.deleteSource = function(sourceID) {
			SourceService.remove(sourceID);
			$location.path('/source-list');
		};
		// callback for ng-click 'createSource':
		$scope.createSource = function() {
			$location.path('/source-creation');
		};
		$scope.sources = SourceCollectionService.find();
		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);
naempApp.controller('SourceDetailCtrl', [ '$scope', '$routeParams', 'SourceService', '$location',
		function($scope, $routeParams, SourceService, $location) {
		// callback for ng-click 'updateSource':
		$scope.updateSource = function(source) {
			SourceService.update({id:source.sourceID}, source);			
			$location.path('/source-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.source = SourceService.find({
			id : $routeParams.id
		});
}]);
naempApp.controller('SourceCreationCtrl', [ '$scope', 'NewSourceService', '$location', 
        function($scope, NewSourceService, $location) {
	
		// callback for ng-click 'createNewSource':
		$scope.createSource = function() {
			NewSourceService.create($scope.source);
			$location.path('/source-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * Site Controller
 */
naempApp.controller('SiteListCtrl', ['$scope', 'SiteCollectionService', 'SiteService', '$location',
        function($scope, SiteCollectionService, SiteService, $location) {

		// callback for ng-click 'editSite':
		$scope.editSite = function(siteID) {
			$location.path('/site-detail/' + siteID);
		};
		// callback for ng-click 'deleteSite':
		$scope.deleteSite = function(site) {
			SiteService.remove({id: site.siteID});
			$location.path('/site-list');
		};
		// callback for ng-click 'createSite':
		$scope.createSite = function() {
			$location.path('/site-creation');
		};
	
		$scope.cancel = function() {
			$scope.search = "";
		};
	
		$scope.sites = SiteCollectionService.find();
	
		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);

naempApp.controller('SiteDetailCtrl', [ '$scope', '$routeParams', 'SiteService', '$location',
		function($scope, $routeParams, SiteService, $location) {
	
		// callback for ng-click 'updateSite':
		$scope.updateSite = function(site) {
			SiteService.update({id: site.siteID}, site);
			$location.path('/site-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.site = SiteService.find({
			id : $routeParams.id
		});
}]);

naempApp.controller('SiteCreationCtrl', [ '$scope', 'NewSiteService', '$location', 
        function($scope, NewSiteService, $location) {
	
		// callback for ng-click 'createSite':
		$scope.createSite = function(site) {
			NewSiteService.create(site);
			$location.path('/site-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * River Controller
 */
naempApp.controller('RiverListCtrl', ['$scope',	'RiverCollectionService', 'RiverService', '$location',
		function($scope, RiverCollectionService, RiverService, 	$location) {

		// callback for ng-click 'editRiver':
		$scope.editRiver = function(riverID) {
			$location.path('/river-detail/' + riverID);
		};
		// callback for ng-click 'deleteRiver':
		$scope.deleteRiver = function(river) {
			RiverService.remove({id:river.riverID});
			$location.path('/river-list');
		};
		// callback for ng-click 'createRiver':
		$scope.createRiver = function(river) {
			$location.path('/river-creation');
		};
	
		$scope.cancel = function() {
			$scope.search = "";
		};
	
		$scope.rivers = RiverCollectionService.find();
	
		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
				$scope.maxSize = 10;
}]);

naempApp.controller('RiverDetailCtrl', [ '$scope', '$routeParams', 'RiverService', '$location',
		function($scope, $routeParams, RiverService, $location) {
	
		// callback for ng-click 'updateRiver':
		$scope.updateRiver = function(river) {
			RiverService.update({id:river.riverID}, river);
			$location.path('/river-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
	//		$location.path('/river-list');
			window.history.back();
		};
		$scope.river = RiverService.find({
			id : $routeParams.id
		});
	
}]);
naempApp.controller('RiverCreationCtrl', [ '$scope', 'NewRiverService', '$location', 
        function($scope, NewRiverService, $location) {

		// callback for ng-click 'createRiver':
		$scope.createRiver = function(river) {
			NewRiverService.create(river);
			$location.path('/river-list');
		};
		$scope.cancel = function() {
			$location.path('/river-list');
		};
	
}]);

/**
 * Fishes
 */
naempApp.controller('FishListCtrl',	['$scope', 'FishCollectionService', 'FishService', '$location',
		function($scope, FishCollectionService, FishService, $location) {
		
		$scope.cancel = function() {
			$scope.search = "";
		};
		// callback for ng-click 'editFish':
		$scope.editFish = function(fishID) {
			$location.path('/fish-detail/' + fishID);
		};
		// callback for ng-click 'deleteFish':
		$scope.deleteFish = function(fish) {
			FishService.remove({id:fish.entityID});
			$location.path('/fish-list');
		};
		// callback for ng-click 'createFish':
		$scope.createFish = function() {
			$location.path('/fish-creation');
		};
		$scope.fishes = FishCollectionService.find();
	
		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
				$scope.maxSize = 10;

}]);

naempApp.controller('FishDetailCtrl', [ '$scope', '$routeParams', 'FishService', '$location',
		function($scope, $routeParams, FishService, $location) {
	
		// callback for ng-click 'updateFish':
		$scope.updateFish = function(fish) {
			FishService.update({id:fish.entityID},fish);
			$location.path('/fish-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.fish = FishService.find({
			id : $routeParams.id
		});
}]);
naempApp.controller('FishCreationCtrl', [ '$scope', 'NewFishService', '$location', 
            function($scope, NewFishService, $location) {
			// callback for ng-click 'createNewFish':
			$scope.createFish = function(fish) {
				NewFishService.create(fish);
				$location.path('/fish-list');
			};
			$scope.cancel = function() {
				$location.path('/fish-list');
			};
		} ]);

/**
 * Methods
 */
naempApp.controller('MethodListCtrl', ['$scope', 'MethodCollectionService', 'MethodService', '$location',
		function($scope, MethodCollectionService, MethodService, $location) {
					
		$scope.cancel = function() {
			$scope.search = "";
		}
		// callback for ng-click 'editMethod':
		$scope.editMethod = function(methodID) {
			$location.path('/method-detail/' + methodID);
		};

		// callback for ng-click 'deleteMethod':
		$scope.deleteMethod = function(method) {
			MethodService.remove({id:method.methodID});
			$location.path('/method-list');
		};
		// callback for ng-click 'createMethod':
		$scope.createMethod = function() {
			$location.path('/method-creation');
		};
		$scope.methods = MethodCollectionService.find();

		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);

naempApp.controller('MethodDetailCtrl', [ '$scope', '$routeParams',	'MethodService', '$location',
		function($scope, $routeParams, MethodService, $location) {

		// callback for ng-click 'updateMethod':
		$scope.updateMethod = function(method) {
			MethodService.update({id:method.methodID}, method);
			$location.path('/method-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.method = MethodService.find({
			id : $routeParams.id
		});
}]);

naempApp.controller('MethodCreationCtrl', [ '$scope', 'NewMethodService', '$location', 
         function($scope, NewMethodService, $location) {
		
		// callback for ng-click 'createNewMethod':
		$scope.createMethod = function(method) {
			NewMethodService.create(method);
			$location.path('/method-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * Instruments
 */
naempApp.controller('InstrumentListCtrl',['$scope', 'InstrumentCollectionService', 'InstrumentService', '$location',
		function($scope, InstrumentCollectionService, InstrumentService, $location) {
	
		$scope.cancel = function() {
			$scope.search = "";
		}
		// callback for ng-click 'editInstrument':
		$scope.editInstrument = function(instrumentID) {
			$location.path('/instrument-detail/' + instrumentID);
		};

		// callback for ng-click 'deleteInstrument':
		$scope.deleteInstrument = function(instrument) {
			InstrumentService.remove({id:instrument.instrumentID});
			$location.path('/instrument-list');
		};
		// callback for ng-click 'createInstrument':
		$scope.createInstrument = function() {
			$location.path('/instrument-creation');
		};
		$scope.instruments = InstrumentCollectionService.find();

		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);

naempApp.controller('InstrumentDetailCtrl', [ '$scope', '$routeParams', 'InstrumentService', '$location',
		function($scope, $routeParams, InstrumentService, $location) {
			
		// callback for ng-click 'updateInstrument':
		$scope.updateInstrument = function(instrument) {
			InstrumentService.update({id:instrument.instrumentID}, instrument);
			$location.path('/instrument-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.instrument = InstrumentService.find({
			id : $routeParams.id
		});
}]);

naempApp.controller('InstrumentCreationCtrl', [ '$scope', 'NewInstrumentService', '$location', 
        function($scope, NewInstrumentService, $location) {
		
		// callback for ng-click 'createNewInstrument':
		$scope.createInstrument = function(instrument) {
			NewInstrumentService.create(instrument);
			$location.path('/instrument-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * Predictions
 */
naempApp.controller('PredictionListCtrl', ['$scope', 'PredictionCollectionService', 'PredictionService', '$location',
		function($scope, PredictionCollectionService, PredictionService, $location) {
					
		$scope.cancel = function() {
			$scope.search = "";
		}
		// callback for ng-click 'editPrediction':
		$scope.editPrediction = function(methodID) {
			$location.path('/prediction-detail/' + methodID);
		};

		// callback for ng-click 'deletePrediction':
		$scope.deletePrediction = function(prediction) {
			PredictionService.remove({id:prediction.methodID});
			$location.path('/prediction-list');
		};
		// callback for ng-click 'createPrediction':
		$scope.createPrediction = function() {
			$location.path('/prediction-creation');
		};
		$scope.predictions = PredictionCollectionService.find();

		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
				$scope.maxSize = 10;
}]);

naempApp.controller('PredictionDetailCtrl', [ '$scope', '$routeParams',	'PredictionService', '$location',
		function($scope, $routeParams, PredictionService, $location) {

		// callback for ng-click 'updatePrediction':
		$scope.updatePrediction = function(prediction) {
			PredictionService.update({id:prediction.methodID}, prediction);
			$location.path('/prediction-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.prediction = PredictionService.find({
			id : $routeParams.id
		});
}]);

naempApp.controller('PredictionCreationCtrl', [ '$scope', 'NewPredictionService', '$location', 
         function($scope, NewPredictionService, $location) {
		
		// callback for ng-click 'createNewPrediction':
		$scope.createPrediction = function(prediction) {
			NewPredictionService.create(prediction);
			$location.path('/prediction-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * Variables
 */
naempApp.controller('VariableListCtrl',['$scope', 'VariableCollectionService', 'VariableService', '$location',
		function($scope, VariableCollectionService, VariableService, $location) {
	
		$scope.cancel = function() {
			$scope.search = "";
		}
		// callback for ng-click 'editVariable':
		$scope.editVariable = function(variableID) {
			$location.path('/variable-detail/' + variableID);
		};

		// callback for ng-click 'deleteVariable':
		$scope.deleteVariable = function(variableID) {
			VariableService.remove({id:variableID});
			$location.path('/variable-list');
		};
		// callback for ng-click 'createVariable':
		$scope.createVariable = function() {
			$location.path('/variable-creation');
		};
		$scope.variables = VariableCollectionService.find();

		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);

naempApp.controller('VariableDetailCtrl', [ '$scope', '$routeParams', 'VariableService', 'UnitCollectionService', '$location',
		function($scope, $routeParams, VariableService, UnitCollectionService, $location) {

		// callback for ng-click 'updateVariable':
		$scope.updateVariable = function(variable) {
			VariableService.update({id:variable.variableID}, variable);
			$location.path('/variable-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.variable = VariableService.find({
			id : $routeParams.id
		});
		$scope.items = UnitCollectionService.find();
}]);

naempApp.controller('VariableCreationCtrl', [ '$scope', 'NewVariableService', 'UnitCollectionService','$location', 
        function($scope, NewVariableService, UnitCollectionService, $location) {
			
		$scope.units = UnitCollectionService.find();
			
		// callback for ng-click 'createNewFeature':
		$scope.createVariable = function(variable) {
			NewVariableService.create(variable);
			$location.path('/variable-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * Units
 */
naempApp.controller('UnitListCtrl',['$scope', 'UnitCollectionService', 'UnitService', '$location',
		function($scope, UnitCollectionService, UnitService, $location) {
	
		$scope.cancel = function() {
			$scope.search = "";
		}
		// callback for ng-click 'editUnit':
		$scope.editUnit = function(unitID) {
			$location.path('/unit-detail/' + unitID);
		};

		// callback for ng-click 'deleteUnit':
		$scope.deleteUnit = function(unit) {
			UnitService.remove({id:unit.unitID});
			$location.path('/unit-list');
		};
		// callback for ng-click 'createUnit':
		$scope.createUnit = function() {
			$location.path('/unit-creation');
		};
		$scope.units = UnitCollectionService.find();

		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);

naempApp.controller('UnitDetailCtrl', [ '$scope', '$routeParams', 'UnitService', '$location',
		function($scope, $routeParams, UnitService, $location) {
			
		// callback for ng-click 'updateUnit':
		$scope.updateUnit = function(unit) {
			UnitService.update({id:unit.unitID}, unit);
			$location.path('/unit-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.unit = UnitService.find({
			id : $routeParams.id
		});
}]);

naempApp.controller('UnitCreationCtrl', [ '$scope', 'NewUnitService', '$location', 
        function($scope, NewUnitService, $location) {
		
		// callback for ng-click 'createNewUnit':
		$scope.createUnit = function(unit) {
			NewUnitService.create(unit);
			$location.path('/unit-list');
		};
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * DataSets
 */
naempApp.controller('DataSetListCtrl', ['$scope', 'DataSetCollectionService', 'DataSetService', '$location',
		function($scope, DataSetCollectionService, DataSetService, $location) {
					
		$scope.cancel = function() {
			$scope.search = "";
		}
		// callback for ng-click 'editDataSet':
		$scope.editDataSet = function(dataSetID) {
			$location.path('/dataSet-detail/' + dataSetID);
		};

		// callback for ng-click 'deleteDataSet':
		$scope.deleteDataSet = function(dataSet) {
			DataSetService.remove({id:dataSet.dataSetID});
			$location.path('/dataSet-list');
		};
		// callback for ng-click 'createDataSet':
		$scope.createDataSet = function() {
			$location.path('/dataSet-creation');
		};
		$scope.dataSets = DataSetCollectionService.find();

		// panination
		$scope.currentPage = 1, $scope.numPerPage = 10,
		$scope.maxSize = 10;
}]);

naempApp.controller('DataSetDetailCtrl', [ '$scope', '$routeParams', 'DataSetService', 'SiteCollectionService', '$location',
		function($scope, $routeParams, DataSetService, SiteCollectionService, $location) {

		// callback for ng-click 'updateDataSet':
		$scope.updateDataSet = function(dataSet) {
			DataSetService.update({id:dataSet.dataSetID}, dataSet);
			$location.path('/dataSet-list');
		};
		// callback for ng-click 'cancel':
		$scope.cancel = function() {
			window.history.back();
		};
		$scope.dataSet = DataSetService.find({
			id : $routeParams.id
		});
		$scope.sites = SiteCollectionService.find();
}]);

naempApp.controller('DataSetCreationCtrl', [ '$scope', 'NewDataSetService','SiteCollectionService', 'VariableCollectionService',
                                             'EntityCollectionService', 'MethodCollectionService', 'SourceCollectionService', '$location', 
         function($scope, NewDataSetService, SiteCollectionService, VariableCollectionService, EntityCollectionService, 
        		 MethodCollectionService, SourceCollectionService, $location) {
		
		// callback for ng-click 'createNewDataSet':
		$scope.createDataSet = function(dataSet) {
			NewDataSetService.create(dataSet);
			$location.path('/dataSet-list');
		};
		
		$scope.sites = SiteCollectionService.find();
		$scope.variables = VariableCollectionService.find();
		$scope.entities = EntityCollectionService.find();
		$scope.methods = MethodCollectionService.find();
		$scope.sources = SourceCollectionService.find();
		
		$scope.cancel = function() {
			window.history.back();
		};
}]);

/**
 * Map Controllers
 */
naempApp.controller('SiteMapCtrl',['$scope', '$http',
		function($scope, $http) {

		var addressPointsToMarkers = function(points) {
			return points.map(function(ap) {
				
				return {
					layer : "site data",
					lat : ap.latitude,
					lng : ap.longitude
				};
			});
		};
	
		angular.extend($scope,{
			center : {
				lat : 37.517,
				lng : 126.894,
				zoom : 11
			},
			events : {
				map : {
					enable : ['moveend', 'popupopen' ],
					logic : 'emit'
				},
				marker : {
					enable : [],
					logic : 'emit'
				}
			},
			layers : {
				baselayers : {
					osm : {
						name : 'OpenStreetMap',
						type : 'xyz',
						url : 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					},
					cycle : {
						name : 'OpenCycleMap',
						type : 'xyz',
						url : 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
	
					}
				},
				overlays : {
					siteData : {
						name : 'siteData',
						type : 'markercluster',
						visible : true
					}
				}
			}
		});
		
		$http.get("sites").success(function(data) {
				
			var points = data.map(function(d) {
				return {
					layer : "siteData",
					lat : parseFloat(d.latitude),
					lng : parseFloat(d.longitude),
					message : '<div class="panel panel-default"><div class="panel-heading"> <h4>'
							+ d.siteName
							+ '</h4></div><div class="panel-body">'
							+ '<a href="#/site-detail/'
							+ d.siteID
							+ '" class="thumbnail"> <img src="'
							+ d.imageLink
							+ '" class="img-rounded" style="width:260px;height:180px"> <br/> </a></div>'
				};
			});
	
			console.log(points.length);
	
			angular.extend($scope, {
				markers : points
			});
		});
}]);
