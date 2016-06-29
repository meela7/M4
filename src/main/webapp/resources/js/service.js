/**
 * @ M4 System
 * @File Name: service.js
 * @Description: Angular JS Services
 * 
 * @author Meilan Jiang
 * @since 2016.06.09
 * @version 1.0
 * 
 * Copyright(c) 2016 by CILAB All right reserved.
 */

var contextRoot = '/m4';

/**
 * Units
 */
naempApp.factory('EntityCollectionService', function($resource) {
	return $resource(contextRoot + '/entities', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewEntityService', function($resource) {
	return $resource(contextRoot + '/entities/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('EntityService', function($resource) {
	return $resource(contextRoot + '/entities/:id', {id: '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'			
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Sources
 */
naempApp.factory('SourceCollectionService', function($resource) {
	return $resource(contextRoot + '/sources', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewSourceService', function($resource) {
	return $resource(contextRoot + '/sources/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('SourceService', function($resource) {
	return $resource(contextRoot + '/sources/:id', {}, {

		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT',
			params : {
				id : '@id'
			}
		},
		remove : {
			method : 'DELETE',
			params : {
				id : '@id'
			}
		}
	})
});

/**
 * Sites
 */
naempApp.factory('SiteCollectionService', function($resource) {
	return $resource(contextRoot + '/sites', {}, {
		find : {
			method : 'GET',
			isArray : true
		},
		search : {
			method : 'POST',
			isArray : true
		}
	})
});
naempApp.factory('NewSiteService', function($resource) {
	return $resource(contextRoot + '/sites/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('SiteService', function($resource) {
	return $resource(contextRoot + '/sites/:id', {id : '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Rivers
 */
naempApp.factory('RiverCollectionService', function($resource) {
	return $resource(contextRoot + '/rivers', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewRiverService', function($resource) {
	return $resource(contextRoot + '/rivers/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('RiverService', function($resource) {
	return $resource(contextRoot + '/rivers/:id', {id : '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Fishes
 */
naempApp.factory('FishCollectionService', function($resource) {
	return $resource(contextRoot + '/fishes', {}, {
		find : {
			method : 'GET',
			cache : true,
			isArray : true
		}
	})
});
naempApp.factory('NewFishService', function($resource) {
	return $resource(contextRoot + '/fishes/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('FishService', function($resource) {
	return $resource(contextRoot + '/fishes/:id', {id : '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Methods
 */
naempApp.factory('MethodCollectionService', function($resource) {
	return $resource(contextRoot + '/methods', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewMethodService', function($resource) {
	return $resource(contextRoot + '/methods/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('MethodService', function($resource) {
	return $resource(contextRoot + '/methods/:id', {id: '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Instruments
 */
naempApp.factory('InstrumentCollectionService', function($resource) {
	return $resource(contextRoot + '/instruments', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewInstrumentService', function($resource) {
	return $resource(contextRoot + '/instruments/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('InstrumentService', function($resource) {
	return $resource(contextRoot + '/instruments/:id', {id: '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'			
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Predictions
 */
naempApp.factory('PredictionCollectionService', function($resource) {
	return $resource(contextRoot + '/predictions', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewPredictionService', function($resource) {
	return $resource(contextRoot + '/predictions/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('PredictionService', function($resource) {
	return $resource(contextRoot + '/predictions/:id', {id: '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'			
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Variables
 */
naempApp.factory('VariableCollectionService', function($resource) {
	return $resource(contextRoot + '/variables', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewVariableService', function($resource) {
	return $resource(contextRoot + '/variables/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('VariableService', function($resource) {
	return $resource(contextRoot + '/variables/:id', {id: '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * Units
 */
naempApp.factory('UnitCollectionService', function($resource) {
	return $resource(contextRoot + '/units', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewUnitService', function($resource) {
	return $resource(contextRoot + '/units/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('UnitService', function($resource) {
	return $resource(contextRoot + '/units/:id', {id: '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'			
		},
		remove : {
			method : 'DELETE'
		}
	})
});

/**
 * DataSets
 */
naempApp.factory('DataSetCollectionService', function($resource) {
	return $resource(contextRoot + '/dataSets', {}, {
		find : {
			method : 'GET',
			isArray : true
		}
	})
});
naempApp.factory('NewDataSetService', function($resource) {
	return $resource(contextRoot + '/dataSets/new', {}, {
		create : {
			method : 'POST'
		}
	})
});
naempApp.factory('DataSetService', function($resource) {
	return $resource(contextRoot + '/dataSets/:id', {id: '@id'}, {
		find : {
			method : 'GET',
			params : {
				id : '@id'
			}
		},
		update : {
			method : 'PUT'
		},
		remove : {
			method : 'DELETE'
		}
	})
});
