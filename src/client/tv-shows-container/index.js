/**
 * Module Dependencies
 */

import $ from 'jquery'

var $tvShowsContainer = $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function (ev) {
  var $this = $(this);
  var id = $this.data("id")
  $.post("/vote/"+ id, function(data){
  	console.log(data);
  	$this.closest('.tv-show').toggleClass('liked')
  })
  
})

export default $tvShowsContainer