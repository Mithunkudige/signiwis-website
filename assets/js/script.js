$(document).ready(function () {

    $('.navbar-collapse .navbar-nav > li > a').click(function(){ 
          $('.collapse.show').removeClass('show').css('height', '0');
    });
         
    const hero = new Swiper('#hero', {
      direction: 'horizontal',
      loop: true,
      effect: 'fade',
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 5000,
      }
    });
  
  
    const swiper = new Swiper('#testimonial', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
  
    const clients = new Swiper('#clients', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40
            }
        }
    });
  
  
  
    $('#submit-form').click(function(e) {		
          var btn = $(this);
          
          var name = $('#fullname').val();
          var email = $('#emailId').val();
          var phone = $('#phone').val();
      var message = $('#message').val();
      var file = $('#attachment').val();
      $('#error').html("");
      
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(name == "") {
        $('#error').html("Please fill full name.");
              return false;
      }
      if(!regex.test(email)) {
        $('#error').html("Please enter valid email.");
        return false;
      }
      if(phone == "") {
        $('#error').html("Please fill phone no.");
              return false;
      }
      if(message == "") {
        $('#error').html("Please fill your message.");
              return false;
      }
      
      //btn.button('loading');
      $('#submit-form i').remove();
      btn.prop('disabled', true);
      btn.append('<i class="fas fa-circle-notch fa-spin"></i>');
  
      var m_data = new FormData();   
          m_data.append( 'fullname', name);
          m_data.append('email_address', email);
          m_data.append('phone', phone);
          m_data.append('message', message);
          m_data.append('file_attach', $('input[name=attachment]')[0].files[0]);
            
      $.ajax({
        url: '../../php/contact.php',
        type: 'POST',
        data: m_data,
        processData: false,
        contentType: false,
        dataType:'json',
        success: function(result) {
          $('#submit-form i').remove();
          btn.prop('disabled', false);
          btn.append('<i class="fas fa-chevron-right"></i>');
          if (result.trim() == "true") {
            $("#contactForm")[0].reset();            
          } else {
            alert('Please try again');
          }				 
        },
        error: function (e) {
          $('#submit-form i').remove();
          btn.prop('disabled', false);
          btn.append('<i class="fas fa-chevron-right"></i>');
          console.log(e.message);
          console.log(e);				
        }
      });			
                      
      });
  
  });
  
  const navbar = document.querySelector('.navbar');
  window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('nav-active');
    } else {
      if (window.innerWidth > 900) {
        navbar.classList.remove('nav-active');
      }        
    }
};

window.addEventListener('resize', function(event) {
  if (window.innerWidth < 900) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
}, true);
  

  
  AOS.init();
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 200);
          return false;
        }
      }
    });
  });
  
  function agreeCookie() {
      $('#sliding-popup').hide();
  }
  
  
  window.onload = () => {
    const d = new Date();
    let v = d.valueOf();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "career.xlsx?version="+v, true);
    xhr.responseType = "blob";
    xhr.onload = function(e) {
      var file = this.response;
      var reader = new FileReader();
      //For Browsers other than IE.
      if (reader.readAsBinaryString) {
          reader.onload = function(e) {
              ProcessExcel(e.target.result);
          };
          reader.readAsBinaryString(file);
      } else {
          //For IE Browser.
          reader.onload = function(e) {
              var data = "";
              var bytes = new Uint8Array(e.target.result);
              for (var i = 0; i < bytes.byteLength; i++) {
                  data += String.fromCharCode(bytes[i]);
              }
              ProcessExcel(data);
          };
          reader.readAsArrayBuffer(file);
      }
  };
  xhr.send();
  };
  
  
  function ProcessExcel(data) {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });
    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];
    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
    var list_output = '';
    for (var row = 0;row < excelRows.length;row++) {
      
        list_output += '<div class="col-md-4">'+
        '<div class="job-list">'+
        '<h5>' + excelRows[row].title + '</h5>'+
        '<div class="sub-header">Location: <span>' + excelRows[row].location + '</span></div>'+
        '<p class="mb-0">Exp : ' + excelRows[row].experience + '</p>' +
        '<p>Key skills: ' + excelRows[row].skills + '</p>' +
        '<button type="button" data-bs-toggle="modal" data-bs-target="#contactForm" class="btn btn-link p-0">Apply</button>'+
       '</div></div>';
         
    }
    var dvExcel = document.getElementById("job-data");
    dvExcel.innerHTML = list_output;
  };
  
  
   