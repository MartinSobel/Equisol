/**
* Template Name: KnightOne - v2.1.0
* Template URL: https://bootstrapmade.com/knight-simple-one-page-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

var arrLang = {
  'en': {
    'inicio': 'Home',
    'nosotros': 'About us',
    'servicios': 'Services',
    'areas': 'Business areas',
    'contacto': 'Contact',
    'repre': 'Representations',
    // 'about1': 'Equisol SA is a company from the Paraguayan market whose business area is related to the production and marketing of industrial gases and related equipment and technologies.',
    // 'about2': 'We provide specific solutions in the framework of modern technology. From plants, equipment and spare parts to already fractionated gases according to the needs of the customers.',
    // 'about3': 'We have the capacity to operate plants inside and outside the country, providing added knowledge due to our extensive experience in the field and our commitment to customers.',
    'ver': 'View services',
    'operacion': 'Operation and maintenance of industrial oxygen and nitrogen production plants',
    'reing': 'Process reengineering',
    'provisioning': 'Provision of engineering and turnkey plants',
    'industrial': 'Industrial automation',
    'consultoria': 'Consulting, training and education',
    'provisioneq': 'Provision of equipment and spare parts',
    'preguntas': 'Write us if you have any questions',
    'crio': 'Cryogenic Engineering',
    'crioInfo': 'We are specialists in the development of projects for industrial gases production, storage and distribution based in cryogenic technology. We cover all the range from feasibility studies (both technical and economical) to detailed engineering, construction and the start up of gas plants, tanks and installations.',
    'pla': 'Turnkey plants',
    'plaInfo': 'We develop (using third parties engineering or also our own’s) all the necessary stages for the construction and start-up of gas generation projects based either on cryogenic technology, membranes or PSA. We go through all the steps, from the purchase of equipment, suppliers’ contracting, construction management and performance of functional tests until the final qualification and delivery to the customer.',
    'equi': 'Equipment and spare parts',
    'equiInfo': 'Provision of equipment, parts and components for industrial gas applications. Through our suppliers we can offer solutions for the provision of most of the brands used in the sector. Our extensive knowledge of this industry and experience in international markets allows us also to offer alternatives for of products already discontinued and/or the improvement of existing facilities: compressors, chillers, analyzers, gas generators, instrumentation, cryogenic valves, gas meters, air dryers, distillation columns, turbines.',
    'tele': 'Remote metering, control and automation:',
    'teleInfo': 'Through our represented Airtronics we offer projects for the automation of industrial processes that cover the control and measurement of parameters both locally and remotely, from diverse sources and equipment which can be integrated into a single control and monitoring system. We work indistinctly with the main platforms (hardware and software) existing  on the market. We can either carry out projects from scratch or perform any upgrade in existing facilities based on a complete reengineering of the system.',
    'ozono': 'Ozone',
    'ozonoInfo': 'Ozone, a gas derived from oxygen, is a powerful disinfectant agent with very high bactericidal properties. It can be generated locally out from air and electrical energy. Its use reduces and even eliminates the use of chemical agents in the processes and does not leave any type of residue after application. EQUISOL SA develops specific applications for the use of ozone in different industries: ozonized ice, refrigerators, elimination of odors in wastewater. Water treatment, reduction of COD and BOD. Applications for beef and pork refrigerators. Poultry industry.',
    'alqui': 'Rental and sale of nitrogen and oxygen gas production equipment',
    'alquiInfo': 'In addition to cryogenic technology, we can offer plants that provide Nitrogen based in PSA and membrane technology for applications like: inerting and blanketing for hydrocarbon, food, cereal and pharmaceutical industries, both for sale and rent. We offer modular equipment able to supply purities and volumes according to the needs of each customer. Based in PSA technology we can offer oxygen generation plants for application in various areas: foundry, fish farming, effluent treatment and medical grade for hospital use.',
    'gases': 'Special gases',
  }
};

// Process translation
$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');
    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});

!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);