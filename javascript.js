<script>

	var _intervalId;
	var _dataLoaded = false;

	var _attributeName_TotalType = "totalType";
	var _attributeName_RowTagId = "cfid";
	var _attributeName_ColumnTagId = "bfid";
	var _totalTag_IdEndingName = "Total";

	$( document ).ready( function() {

		jQuery( "#tabs" ).tabs({ collapsible : true });


		// Start App
		startApp();


		// If preiod is changed, restart the all the settings.
		$( '#selectedPeriodId' ).change( function()
		{
			if ( _intervalId !== undefined )
			{
				_dataLoaded = false;
				clearInterval( _intervalId );
			}

			startApp();
		});

	});


	function startApp()
	{
		// Note 1 - add group id as 'cfid' in each input tag.

		// Clear all the totals
		clearTotals();


		_intervalId = undefined;
		_dataLoaded = false;
				
		// Note 2. Run interval for detecting data loading 
		_intervalId = setInterval( function() 
		{
			//$( '#msgInfo' ).append( ' .' );
			//<span id="msgInfo"></span> <-- place right before the tab tag.


			// Note 3. If any non-empty value is found, 
			//		- Set Section 'KeyUp' calculation event handler
			//		- calculate total on all sections and stop the interval.
			if ( !_dataLoaded 
				&& ( $( 'input[' + _attributeName_RowTagId + ']' ).filter( checkValue_Input ).length > 0
					||  $( 'input[' + _attributeName_ColumnTagId + ']' ).filter( checkValue_Input ).length > 0 ) 
				)
			{
				_dataLoaded = true;
						
				setSectionEventsAll();

				sectionTotalCalcAll();
			
				clearInterval(_intervalId);
				
				_intervalId = undefined;
			}

		}, 500 );

	}

	// ----------------------------------
	// Functions

	function checkValue_Input()
	{
		return $( this ).val().length > 0;
	}

	function getInputIDTags( idTypeName, tagId )
	{
		return $( "input[" + idTypeName + "='" + tagId + "']" );
	}

	function getIntValue( input )
	{
		if ( input == '' )
		{
			return 0;
		}
		else
		{
			return parseInt( input );
		}
	}

	function setSectionEventsAll()
	{
		createKeyUpEvent_SectionTotalCalc( _attributeName_RowTagId );

		createKeyUpEvent_SectionTotalCalc( _attributeName_ColumnTagId );
	}

	function createKeyUpEvent_SectionTotalCalc( idTypeName )
	{
		$( 'input[' + idTypeName + ']' ).keyup( function()
		{
			var attrName = $( this ).attr( idTypeName );

			var inputTags = getInputIDTags( idTypeName, attrName );

			var totalTag = $( '#' + attrName + _totalTag_IdEndingName );

			totalTag.text( calcData( inputTags ) );			
		});
	}

	function sectionTotalCalcAll()
	{
		// Calculate Row/Column total ones
		sectionTotalCalc( $( "div[" + _attributeName_TotalType + "]" ) );
	}

	function sectionTotalCalc( ctrlTags )
	{
		ctrlTags.each( function()
		{
			var idTypeName = $( this ).attr( _attributeName_TotalType );
			var attrName = $( this ).attr( 'id' ).replace( _totalTag_IdEndingName, '' );

			var inputTags = getInputIDTags( idTypeName, attrName );

			$( this ).text( calcData( inputTags ) );
		});

	}

	function clearTotals()
	{
		$( "div[" + _attributeName_TotalType + "]" ).text( '' );
		//$( "div[totalType='column']" ).text( '' );
	}


	function setEvent( inputTag, totalTag )
	{
		inputTag.keyup( function()
		{
			totalTag.text( calcData( inputTag ) );
		});
	}

	function checkClassDataLoaded( inputTag )
	{
		var dataExists = false;

		inputTag.each( function() 
		{
			if( $( this ).val().length > 0 )
			{
				dataExists = true;

				return false;
			}
		});

		return dataExists;
	}

	function calcData( inputTag )
	{
		var total = 0;

		inputTag.each( function()
		{
			total = getIntValue( $( this ).val() ) + total;
			//console.log(total);
		});

		return total;
	}

	// Functions
	// ----------------------------------

</script>

<script>

	var _intervalId;
	var _dataLoaded = false;

	var _attributeName_TotalType = "totalType";
	var _attributeName_RowTagId = "cfid";
	var _attributeName_ColumnTagId = "bfid";
	var _totalTag_IdEndingName = "Total";

	$( document ).ready( function() {

		jQuery( "#tabs" ).tabs({ collapsible : true });


		// Start App
		startApp();


		// If preiod is changed, restart the all the settings.
		$( '#selectedPeriodId' ).change( function()
		{
			if ( _intervalId !== undefined )
			{
				_dataLoaded = false;
				clearInterval( _intervalId );
			}

			startApp();
		});

	});


	function startApp()
	{
		// Note 1 - add group id as 'cfid' in each input tag.

		// Clear all the totals
		clearTotals();


		_intervalId = undefined;
		_dataLoaded = false;
				
		// Note 2. Run interval for detecting data loading 
		_intervalId = setInterval( function() 
		{
			//$( '#msgInfo' ).append( ' .' );
			//<span id="msgInfo"></span> <-- place right before the tab tag.


			// Note 3. If any non-empty value is found, 
			//		- Set Section 'KeyUp' calculation event handler
			//		- calculate total on all sections and stop the interval.
			if ( !_dataLoaded 
				&& ( $( 'input[' + _attributeName_RowTagId + ']' ).filter( checkValue_Input ).length > 0
					||  $( 'input[' + _attributeName_ColumnTagId + ']' ).filter( checkValue_Input ).length > 0 ) 
				)
			{
				_dataLoaded = true;
						
				setSectionEventsAll();

				sectionTotalCalcAll();
			
				clearInterval(_intervalId);
				
				_intervalId = undefined;
			}

		}, 500 );

	}

	// ----------------------------------
	// Functions

	function checkValue_Input()
	{
		return $( this ).val().length > 0;
	}

	function getInputIDTags( idTypeName, tagId )
	{
		return $( "input[" + idTypeName + "='" + tagId + "']" );
	}

	function getIntValue( input )
	{
		if ( input == '' )
		{
			return 0;
		}
		else
		{
			return parseInt( input );
		}
	}

	function setSectionEventsAll()
	{
		createKeyUpEvent_SectionTotalCalc( _attributeName_RowTagId );

		createKeyUpEvent_SectionTotalCalc( _attributeName_ColumnTagId );
	}

	function createKeyUpEvent_SectionTotalCalc( idTypeName )
	{
		$( 'input[' + idTypeName + ']' ).keyup( function()
		{
			var attrName = $( this ).attr( idTypeName );

			var inputTags = getInputIDTags( idTypeName, attrName );

			var totalTag = $( '#' + attrName + _totalTag_IdEndingName );

			totalTag.text( calcData( inputTags ) );			
		});
	}

	function sectionTotalCalcAll()
	{
		// Calculate Row/Column total ones
		sectionTotalCalc( $( "div[" + _attributeName_TotalType + "]" ) );
	}

	function sectionTotalCalc( ctrlTags )
	{
		ctrlTags.each( function()
		{
			var idTypeName = $( this ).attr( _attributeName_TotalType );
			var attrName = $( this ).attr( 'id' ).replace( _totalTag_IdEndingName, '' );

			var inputTags = getInputIDTags( idTypeName, attrName );

			$( this ).text( calcData( inputTags ) );
		});

	}

	function clearTotals()
	{
		$( "div[" + _attributeName_TotalType + "]" ).text( '' );
		//$( "div[totalType='column']" ).text( '' );
	}


	function setEvent( inputTag, totalTag )
	{
		inputTag.keyup( function()
		{
			totalTag.text( calcData( inputTag ) );
		});
	}

	function checkClassDataLoaded( inputTag )
	{
		var dataExists = false;

		inputTag.each( function() 
		{
			if( $( this ).val().length > 0 )
			{
				dataExists = true;

				return false;
			}
		});

		return dataExists;
	}

	function calcData( inputTag )
	{
		var total = 0;

		inputTag.each( function()
		{
			total = getIntValue( $( this ).val() ) + total;
			//console.log(total);
		});

		return total;
	}

	// Functions
	// ----------------------------------

</script>