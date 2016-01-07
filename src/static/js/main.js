
//holds the data for the map, as it cannot be accessed via props
//does not have to be structured like this or contain these fields, this is just an example starting point
var globalmapdata = [
	{
		'lat': -34.397,
		'lng': 150.644,
		'zoom': 8,
		'markers': [
			{
				'lat': -34.397,
				'lng': 150.644,
				'content': 'Map 1, 1'
			},
			{
				'lat': -31.397,
				'lng': 130.644,
				'content': 'Map 1, 2'
			},
			{
				'lat': -32.397,
				'lng': 140.644,
				'content': 'Map 1, 3'
			}
		],
		'lines': [
			{
				'line': [
					{
						'lat': -35,
						'lng': 155
					},
					{
						'lat': -22,
						'lng': 128
					},
					{
						'lat': -33,
						'lng': 142
					}
				],
				'colour': '#FF0000',
				'opacity': 0.5,
				'stroke': 10
			},
			{
				'line': [
					{
						'lat': -40,
						'lng': 154
					},
					{
						'lat': -21,
						'lng': 125
					},
					{
						'lat': -36,
						'lng': 170
					}
				],
				'colour': '#0000FF',
				'opacity': 0.3,
				'stroke': 5
			}
		]
	},
	{
		'lat': -34.397,
		'lng': 150.644,
		'zoom': 8,
		'markers': [
			{
				'lat': 50,
				'lng': 40,
				'content': 'Map 2, 1'
			},
			{
				'lat': 55,
				'lng': 32,
				'content': 'Map 2, 2'
			}
		]
	},
	{
		'lat': -34.397,
		'lng': 150.644,
		'zoom': 8,
		'markers': [
			{
				'lat': 11,
				'lng': 19,
				'content': 'Map 3, 1'
			},
			{
				'lat': 14,
				'lng': 17,
				'content': 'Map 3, 2'
			},
			{
				'lat': 22,
				'lng': 11,
				'content': 'Map 3, 3'
			}
		]
	}
];

ReactDOM.render(
    <Map/>,
    document.getElementById('content')
);
