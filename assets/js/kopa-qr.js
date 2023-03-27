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
	});
	
}( jQuery || window.jQuery ) );