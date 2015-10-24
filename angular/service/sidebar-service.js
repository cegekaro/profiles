(function () {
    'use strict';

    angular
        .module('profiles')
        .factory('Sidebar', function () {
            var sidebarIsShown = false;

            function toggleSidebar() {
                sidebarIsShown = !sidebarIsShown;
            }

            return {
                isSidebarShown: function () {
                    return sidebarIsShown;
                },
                toggleSidebar: toggleSidebar
            };
        });

})();
