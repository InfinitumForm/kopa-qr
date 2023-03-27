/*!
 * Kopa QR Code Control
 *
 * @author  Ivijan-Stefan Stipic
 * @url     https://infinitumform.com/
 */

;( function($){
	
	var dokan_loaded = false;
	
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
	
	// Fix product variants on Dokan
	.ajaxComplete(function(){
		if( !dokan_loaded ) {
			$('.dokan-product-variation-itmes input[name^="variable_post_id"]').each(function(){
				dokan_loaded = true;
				
				var $this = $(this),
					$container = $this.closest('.dokan-product-variation-itmes'),
					$content = $container.find('.dokan-variable-attributes .data');

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
						$content.find('.button.kopa-qr-copy-deep-link').remove();
					}
				});
			});
		}
	});
	
}( jQuery || window.jQuery ) );