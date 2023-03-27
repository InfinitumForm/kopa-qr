/*!
 * Kopa QR Code Control
 *
 * @author  Ivijan-Stefan Stipic
 * @url     https://infinitumform.com/
 */

;( function($){
	
	$(document)
	
	// Display QR Code
	.on('click', '.woocommerce-loop-product-kopa-qr', function(e){
		e.preventDefault();
		
		var $this = $(this),
			$container = $this.closest('li.product'),
			$image = $container.find('.kopa-qr-code-link > img');
		
		$image.removeAttr('style').attr({
			'alt' : kopa_qr.label.qr_code,
			'decoding' : 'async'
		});
		
		$container.addClass('kopa-qr-active');
	})
	
	// Hide QR Code
	.on('click', '.kopa-qr-active .kopa-qr-close', function(e){
		e.preventDefault();
		
		var $this = $(this),
			$container = $this.closest('li.product');
		
		$container.removeClass('kopa-qr-active');
	})
	
	.ready(function(){
		$('.dokan-variable-attributes input[name^="variable_post_id"]').each(function(){
			var $this = $(this),
				$container = $this.closest('.dokan-variable-attributes'),
				$content = $this.find('.data');
				
			$.ajax({
				url: kopa_qr.ajaxurl,
				type: 'POST',
				data: {
					action: 'kopa_qr_dokan_variants',
					product_id: $this.val()
				}
			}).done(function (data) {
				if(data) {
					$content.append(data);
				}
			});
		});
	});
	
}( jQuery || window.jQuery ) );