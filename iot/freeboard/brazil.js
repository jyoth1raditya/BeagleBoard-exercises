{
	"version": 1,
	"header_image": "",
	"allow_edit": true,
	"plugins": [],
	"panes": [
		{
			"title": "Wind",
			"width": 1,
			"row": {
				"3": 1
			},
			"col": {
				"3": 1
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "pointer",
					"settings": {
						"direction": "datasources[\"Weather\"].current_observation.wind_dergrees",
						"value_text": "datasources[\"Weather\"].current_observation.wind_dir"
					}
				},
				{
					"type": "text_widget",
					"settings": {
						"size": "regular",
						"value": "datasources[\"Weather\"].current_observation.wind_degrees \n+ \"° \"\n+ datasources[\"Weather\"].current_observation.wind_mph",
						"sparkline": false,
						"animate": true,
						"units": "mph"
					}
				}
			]
		},
		{
			"title": "Humidity",
			"width": 1,
			"row": {
				"3": 1
			},
			"col": {
				"3": 3
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "gauge",
					"settings": {
						"value": "datasources[\"Weather\"].current_observation.relative_humidity.replace(/%/,'')",
						"units": "%",
						"min_value": 0,
						"max_value": 100
					}
				}
			]
		},
		{
			"title": "Temperature",
			"width": 1,
			"row": {
				"3": 1
			},
			"col": {
				"3": 2
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "text_widget",
					"settings": {
						"title": "Current",
						"size": "big",
						"value": "datasources[\"Weather\"].current_observation.temp_f",
						"sparkline": true,
						"animate": true,
						"units": "&deg;F"
					}
				},
				{
					"type": "text_widget",
					"settings": {
						"title": "High",
						"size": "regular",
						"value": "datasources[\"Weather\"].forecast.simpleforecast.forecastday[0].high.fahrenheit",
						"animate": true,
						"units": "&deg;F"
					}
				},
				{
					"type": "text_widget",
					"settings": {
						"title": "Low",
						"size": "regular",
						"value": "datasources[\"Weather\"].forecast.simpleforecast.forecastday[0].low.fahrenheit",
						"animate": true,
						"units": "&deg;F"
					}
				}
			]
		},
		{
			"title": "Pressure",
			"width": 1,
			"row": {
				"3": 13
			},
			"col": {
				"3": 1
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "text_widget",
					"settings": {
						"size": "regular",
						"value": "datasources[\"Weather\"].current_observation.pressure_in + ' ' +\ndatasources[\"Weather\"].current_observation.pressure_trend",
						"sparkline": false,
						"animate": true,
						"units": "in"
					}
				}
			]
		},
		{
			"title": "Info",
			"width": 1,
			"row": {
				"3": 11
			},
			"col": {
				"3": 2
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "text_widget",
					"settings": {
						"title": "City",
						"size": "regular",
						"value": "datasources[\"Weather\"].current_observation.display_location.city",
						"animate": true
					}
				},
				{
					"type": "text_widget",
					"settings": {
						"title": "Conditions",
						"size": "regular",
						"value": "datasources[\"Weather\"].current_observation.weather",
						"animate": true
					}
				}
			]
		},
		{
			"width": 1,
			"row": {
				"3": 9
			},
			"col": {
				"3": 3
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "text_widget",
					"settings": {
						"title": "Sunrise",
						"size": "regular",
						"value": "datasources[\"Weather\"].sun_phase.sunrise.hour + ':' + \ndatasources[\"Weather\"].sun_phase.sunrise.minute",
						"animate": true
					}
				},
				{
					"type": "text_widget",
					"settings": {
						"title": "Sunset",
						"size": "regular",
						"value": "datasources[\"Weather\"].sun_phase.sunset.hour + ':' + \ndatasources[\"Weather\"].sun_phase.sunset.minute",
						"animate": true
					}
				}
			]
		},
		{
			"title": "Data Time",
			"width": 1,
			"row": {
				"3": 15
			},
			"col": {
				"3": 3
			},
			"col_width": 1,
			"widgets": [
				{
					"type": "text_widget",
					"settings": {
						"size": "regular",
						"value": "datasources[\"Weather\"].current_observation.observation_time.replace(/.*,/ ,'')",
						"animate": true
					}
				}
			]
		}
	],
	"datasources": [
		{
			"name": "Weather",
			"type": "JSON",
			"settings": {
				"url": "http://api.wunderground.com/api/ec7eb641373d9256/conditions/forecast/astronomy/q/IN/Brazil.json",
				"use_thingproxy": true,
				"refresh": 300,
				"method": "GET"
			}
		}
	],
	"columns": 3
}