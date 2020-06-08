/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'embark-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-ic-cancel': '&#xe93d;',
		'icon-ic-facebook': '&#xe939;',
		'icon-ic-instagram': '&#xe93a;',
		'icon-ic-linkedin': '&#xe93b;',
		'icon-ic-twitter': '&#xe93c;',
		'icon-my_location-24px': '&#xe938;',
		'icon-camera-24px': '&#xe937;',
		'icon-pip-circle-24px': '&#xe936;',
		'icon-store-24px': '&#xe935;',
		'icon-search-24px': '&#xe934;',
		'icon-home': '&#xe900;',
		'icon-help_outline': '&#xe901;',
		'icon-info': '&#xe902;',
		'icon-cached-24px': '&#xe903;',
		'icon-clock': '&#xe904;',
		'icon-remove_circle': '&#xe914;',
		'icon-add_circle': '&#xe92c;',
		'icon-person_add': '&#xe92d;',
		'icon-truck': '&#xe92e;',
		'icon-directions': '&#xe92f;',
		'icon-trailhead': '&#xe930;',
		'icon-calendar': '&#xe931;',
		'icon-edit': '&#xe932;',
		'icon-seat': '&#xe933;',
		'icon-phone': '&#x1f4de;',
		'icon-add': '&#x1f53a;',
		'icon-close': '&#x10ffff;',
		'icon-subtract': '&#x1f53b;',
		'icon-attachment': '&#x1f4ce;',
		'icon-file_download': '&#xe905;',
		'icon-file_upload': '&#xe906;',
		'icon-apps': '&#xe907;',
		'icon-arrow_back': '&#xe908;',
		'icon-arrow_drop_down': '&#xe909;',
		'icon-arrow_drop_up': '&#xe90a;',
		'icon-arrow_forward': '&#xe90b;',
		'icon-check': '&#xe90c;',
		'icon-expand_less': '&#xe90d;',
		'icon-expand_more': '&#xe90e;',
		'icon-menu': '&#xe90f;',
		'icon-options': '&#xe910;',
		'icon-refresh': '&#xe911;',
		'icon-arrow_back_ios': '&#xe912;',
		'icon-arrow_forward_ios': '&#xe913;',
		'icon-notifications': '&#x1f514;',
		'icon-person': '&#xe915;',
		'icon-check_box': '&#xe916;',
		'icon-check_box_outline_blank': '&#xe917;',
		'icon-radio_button_checked': '&#xe918;',
		'icon-radio_button_unchecked': '&#xe919;',
		'icon-star': '&#xe91a;',
		'icon-star_outline': '&#xe91b;',
		'icon-build': '&#xe91c;',
		'icon-share': '&#xe91d;',
		'icon-time': '&#xe91e;',
		'icon-drag': '&#xe91f;',
		'icon-rider': '&#xe920;',
		'icon-error': '&#xe921;',
		'icon-warning': '&#xe922;',
		'icon-do_not_disturb': '&#xe923;',
		'icon-location_off': '&#xe924;',
		'icon-location': '&#xe925;',
		'icon-flag': '&#xe926;',
		'icon-vehicle-sxs': '&#xe927;',
		'icon-vehicle-snowmobile': '&#xe928;',
		'icon-vehicle-slingshot': '&#xe929;',
		'icon-vehicle-atv': '&#xe92a;',
		'icon-vehicle-motorcycle': '&#xe92b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
