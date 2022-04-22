$(document).ready(function() {
  // ChecckUser
  function checkUser() {
    var i = 1;
    let mauKT = /^[a-zA-Z\-]+$/;
    if ($('#txtUser').val() == "") {
        $('#tbUser').html('Không để trống');
        return false;
    }
    if (!mauKT.test($('#txtUser').val())) {
        $('#tbUser').html('Không sử dụng số trong tên đăng nhập');
        return true;
    }
    $('#tbUser').html('');
    return true;
  }
  $('#txtUser').blur(checkUser);

  // checkpassword
  function checkPassword() {
    let mauKT = /(?=.*\d).{6,}/;
    if ($('#txtPassword').val() == "") {
        $('#tbMk').html('Không để trống');
        return false;
    }
    if (!mauKT.test($('#txtPassword').val())) {
        $('#tbMk').html('Phải có chữ, số có ít nhất 6 ký tự');
        return true;
    }
    $('#tbMk').html('');
    return true;
  }
  $('#txtPassword').blur(checkPassword);

  //checkXNPassword
  function checkXNPassword() {
    let mauKT = /(?=.*\d).{6,}/;
    if ($('#txtXNPassword').val() == "") {
        $('#tbXnmk').html('Không để trống');
        return false;
    }
    if ($('#txtXNPassword').val() != $('#txtPassword').val()) {
        $('#tbXnmk').html('Phải giống với ô mật khẩu');
        return true;
    }
    $('#tbXnmk').html('');
    return true;
  }
  $('#txtXNPassword').blur(checkXNPassword);

  // check email address
  function checkEmail() {
    let mauKT =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if ($('#txtEmail').val() == "") {
        $('#tbMail').html('Không để trống');
        return false;
    }
    if (!mauKT.test($('#txtEmail').val())) {
      $('#tbMail').html('Nhập email theo đinh dạng your@example.com');
      return true;
  }
    $('#tbMail').html('');
    return true;
  }
  $('#txtEmail').blur(checkEmail);

  // checkSDT
  function checkSDT() {
    var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
    if ($('#txtSDT').val() == "") {
        $('#tbSDT').html('Không để trống');
        return false;
    }
    if (!mauKT.test($('#txtSDT').val())) {
        $('#tbSDT').html('Theo dạng 0xxx-xxx-xxx trong đó x là số');
        return truw;
    }
    $('#tbSDT').html('');
    return true;
  }
  $('#txtSDT').blur(checkSDT);

  //check dk
  $('#btn-login').click(function () {
    if (!checkUser() || !checkPassword() || !checkXNPassword() || ! checkEmail() || !checkSDT()) {
      $('#thongbao').html('Vui lòng nhập đầy đủ thông tin');
    }
    var user = $('#txtUser').val();
    var email = $('#txtEmail').val();
    var sdt = $('#txtSDT').val();
    var them = "<br><br>" + "Username: " + user + "<br><br>"+ "Email: " + email + "<br><br>" + "Phone: " + sdt + "<br><br>";
    $('#info').append(them);
    $('.login-container').css('display', 'none');
    $('#info').css('display', 'block');
    return true;
  })
})