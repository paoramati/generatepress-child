<?php

include_once 'GenPressChildHelper.php'; // generatepress-child specific helper class. Mirrors accessit-divi-child helper class

add_action('wp_enqueue_scripts', 'generatepress_child_enqueue_styles');

function generatepress_child_enqueue_styles()
{
	$parentStyle = get_template_directory_uri() . '/style.css';
	wp_enqueue_style('parent-style', $parentStyle);

	// if (GenPressChildHelper::isFormPage()) {
	// 	addBootstrap();
	// 	addTypeAhead();
	// 	addCustom();
	// }
	// else if (GenPressChildHelper::isPrimaryVersionPage())
	// {
	// 	// include normal bootstrap + our form styles
	// 	GenPressChildHelper::addChildStylesheet('bootstrap');
	// 	GenPressChildHelper::addChildScript('bootstrap.bundle');
	// 	GenPressChildHelper::addChildStylesheet('ais-form-style');
	// }
	
}

function addBootstrap()
{
	// Bootstrap 4 css
	// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	// wp_enqueue_style('ais-bootstrap', get_stylesheet_directory_uri() . '/css/bootstrap.css');
	GenPressChildHelper::addChildStylesheet('bootstrap');

	// Bootstrap 4 js
	// <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	// wp_enqueue_script('ais-bootstrap-jquery', get_stylesheet_directory_uri() . '/js/jquery-3.4.1.min.js');
	// wp_enqueue_script('ais-bootstrap-bundle', get_stylesheet_directory_uri() . '/js/bootstrap.bundle.js');
	// Helper::addChildScript('jquery-3.4.1.min');
	// Helper::addChildScript('bootstrap.bundle');
}

function addTypeAhead()
{
	// wp_enqueue_style('ais-jquery-type-ahead-style', get_stylesheet_directory_uri() . '/css/jquery.typeahead.css');
	// wp_enqueue_script('ais-jquery-type-ahead', get_stylesheet_directory_uri() . '/js/jquery.typeahead.min.js');
	// Helper::addChildStylesheet('jquery.typeahead');
	// Helper::addChildScript('jquery.typeahead.min');
}

function addCustom()
{
		// BMP Custom extracted bootstrap 4
		// wp_enqueue_style( 'ais-custom-bootstrap', trailingslashit( get_stylesheet_directory_uri() ) . 'ais-bootstrap-custom.css');

		// BMP Form css based on bootstrap 4
		// wp_enqueue_style( 'ais-bootstrap-form-style', trailingslashit( get_stylesheet_directory_uri() ) . 'css/ais-form-style.css');
		GenPressChildHelper::addChildStylesheet('ais-form-style');
		// Helper::addChildScript('ais-scripts', ['jquery']);
		// Helper::addChildScript('ais-typeahead');

}