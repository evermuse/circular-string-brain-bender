'use strict';

function inSource( source, find ) {

  source = source.toLowerCase().concat(source.toLowerCase());

  if ( source.search(find) !== -1 ) {

    return true;

  }

}

inSource( 'Assignments', 'jfsdka;fsa' );