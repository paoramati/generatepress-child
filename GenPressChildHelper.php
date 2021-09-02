<?php

use AISWP\Forms\AISCF7Constants as Constants;
use AISWP\Util\AISThemeHelperUtils;

final class GenPressChildHelper
{
	private const PREFIX = 'generatepress-child'; // add this to make unique, i.e. to prevent clases in case the same scripts are enqueued elsewhere

    /**
     * Add a stylesheet for this theme.
     * Stylesheet will be loaded with the given filename prefixed by the child theme prefix (e.g. ais-divi-child-ais-bootstrap)
     *
     * @param string $filename Filename of the stylesheet to be enqueued without file extention.
     * @return void
     */
	static function addChildStylesheet($filename, $depends = [])
	{
		wp_enqueue_style(self::PREFIX . $filename, trailingslashit( get_stylesheet_directory_uri() ) . 'css/' . $filename . '.css', $depends);
	}

    /**
     * Add a script for this theme.
     * Script will be loaded with the given filename prefixed by the child theme prefix (e.g. ais-divi-child-ais-bootstrap)
     *
     * @param string $filename Filename of the script to be enqueued without file extention.
     * @return void
     */
	static function addChildScript($filename, $depends = [], $defer = false)
	{
		wp_enqueue_script(self::PREFIX . $filename, trailingslashit( get_stylesheet_directory_uri() ) . 'js/' . $filename . '.js', $depends, false, $defer);
    }
    
    /**
     * Return true if the page being called is any of our known CF7 pages.
     *
     * @param array $params Optional array of parameters
     * @return boolean
     */
    static function isFormPage($params = [])
    {
        /* if (is_page(Constants::FORM_PAGE_CONTACT_US) || 
            is_page(Constants::FORM_PAGE_CREATE_TICKET) ||
            is_page(Constants::FORM_PAGE_MT_LEADS) ||
            is_page(Constants::FORM_PAGE_SU_SUBSCRIPTIONS) ||
            is_page(Constants::FORM_PAGE_SU_SUBSCRIPTIONS_2) ||
            is_page(Constants::FORM_PAGE_SU_SUBSCRIPTION) ||
            is_page(Constants::FORM_PAGE_SU_SUBSCRIPTION_2) ||
            static::isRoadshowPage()
        ) */
        if (AISThemeHelperUtils::isFormPage())
        {
            return true;
        }
        return false;
    }

    static function isPrimaryVersionPage()
    {
        return AISThemeHelperUtils::isPrimaryVersionPage();
    }

    /**
     * Return true if the current requested page is a known roadshow form page.
     *
     * @param array $params Optional array of parameters
     * @return boolean
     */
    private static function isRoadshowPage($params = []) 
    {
       /*  if (is_page(Constants::FORM_PAGE_ROADSHOW_AU) ||
            is_page(Constants::FORM_PAGE_ROADSHOW_NZ) ||
            is_page(Constants::FORM_PAGE_ROADSHOW_CA) ||
            is_page(Constants::FORM_PAGE_ROADSHOW_US) ||
            is_page(Constants::FORM_PAGE_ROADSHOW_UK)
        ) */
        if (AISThemeHelperUtils::isRoadshowPage())
        {
            return true;
        }
        return false;
    }

    /**
     * Return true if the current requested page is a known bookly form page.
     *
     * @param array $params Optional array of parameters
     * @return boolean
     */
    static function isBooklyPage($params = [])
    {
        /* if (is_page('book-a-demo') ||
            is_page('transform')
        ) */
        if (AISThemeHelperUtils::isBooklyPage())
        {
            return true; // this is a page with a bookly form
        }
        return false;
    }
}