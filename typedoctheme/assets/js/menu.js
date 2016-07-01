/**
 * Contextual Menu Plugin
 */
(function ($) {
    $.fn.ContextualMenuCustom = function () {

        /** Go through each nav bar we've been given. */
        return this.each(function () {

            var $contextualMenu = $(this);

            $contextualMenu.find(".ms-ContextualMenu-link--hasMenu").each(function(i, e) {
                
                let a = $(e);

                a.closest("li.ms-ContextualMenu-item").hover(function(e) {
                    $(this).children('.ms-ContextualMenu:first').addClass('is-open');
                }, function(e) {
                    $(this).children('.ms-ContextualMenu:first').removeClass('is-open');
                });
            });




            // // Set selected states.
            // $contextualMenu.on('click', '.ms-ContextualMenu-link:not(.is-disabled)', function (event) {
            //     event.preventDefault();

            //     // Check if multiselect - set selected states
            //     if ($contextualMenu.hasClass('ms-ContextualMenu--multiselect')) {

            //         // If already selected, remove selection; if not, add selection
            //         if ($(this).hasClass('is-selected')) {
            //             $(this).removeClass('is-selected');
            //         }
            //         else {
            //             $(this).addClass('is-selected');
            //         }

            //     }
            //     // All other contextual menu variants
            //     else {

            //         // Deselect all of the items and close any menus.
            //         $('.ms-ContextualMenu-link')
            //             .removeClass('is-selected')
            //             .siblings('.ms-ContextualMenu')
            //             .removeClass('is-open');

            //         // Select this item.
            //         $(this).addClass('is-selected');

            //         // If this item has a menu, open it.
            //         if ($(this).hasClass('ms-ContextualMenu-link--hasMenu')) {
            //             $(this).siblings('.ms-ContextualMenu:first').addClass('is-open');

            //             // Open the menu without bubbling up the click event,
            //             // which can cause the menu to close.
            //             event.stopPropagation();
            //         }

            //     }


            // });

        });
    };
})(jQuery);