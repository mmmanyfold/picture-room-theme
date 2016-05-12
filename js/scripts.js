(function($) {
  "use strict";

  // active element in sidenav
  var $product_grid = $(".product-grid");
  if ($product_grid.length) {
    var path = window.location.pathname;
    $("#menutree a").each(function(i, a) {
      if (path == a.pathname) {
        $(a).parents("li").addClass("active");
      }
    });
  }

  // pagination on product grid
  var $old_paginator = $("#pagination");
  if ($old_paginator.length) {
    var $paginator = $(".pr-paginator");
    $paginator.removeClass("hidden");
    $(".total-pages", $paginator).html($(".page", $old_paginator).length);
    $(".current-page", $paginator).html($(".page.selected a").html());

    var links = [
      [$(".first", $old_paginator), $(".first-page", $paginator)],
      [$(".next", $old_paginator), $(".next-page", $paginator)],
      [$(".previous", $old_paginator), $(".prev-page", $paginator)],
      [$(".last", $old_paginator), $(".last-page", $paginator)]
    ];
    links.forEach(function(link) {
      if (!link[0].hasClass("hidden")) {
        link[1].removeClass("hidden").attr("href", $("a", link[0]).attr("href"));
      }
    });
  }

  // product variation select
  $(".product-detail select").addClass("form-control");
  $("option:contains(Variation)").html("Variation");

  // product images
  var $photos = $(".pr-photos");
  console.log($photos);
  if ($photos.length) {
    var images = [];
    $(".image", $photos).each(function(i, image) {
      var $image = $(image);
      var im = {
        image: $image.attr("data-image"),
        thumb: $image.attr("data-thumb"),
        alt: $image.attr("data-alt")
      };
      images.push(im);
    });
    if (images.length) {
      var data = {
        primary_image: images[0],
        total_images: images.length
      };
      if (images.length > 1) {
        data.images = images;
      }
      var $pr_photos = $(Mustache.render($("#product-carousel-template").html(), data));
      $photos.append($pr_photos);
    }

  }


})(jQuery);
