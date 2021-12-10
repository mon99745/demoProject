function joinform_check() {
  //변수에 담아주기
  var uid = document.getElementById("uid");
  var pwd = document.getElementById("pwd");
  var repwd = document.getElementById("repwd");
  var uname = document.getElementById("uname");
  var unickname = document.getElementById("unickname");
  var ubirth = document.getElementById("ubirth");
  var uphone = document.getElementById("uphone");
  var email_id = document.getElementById("email_id");

if (uid.value == "") {
  Swal.fire({
    icon:'error',
    title:'아이디를 입력해주세요',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      uid.focus();
    }
  })
  return false;
};

if (uname.value == "") {
  Swal.fire({
    icon:'error',
    title:'이름을 입력해주세요',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      uname.focus();
    }
  })
  return false;
};

if (pwd.value == "") {
  Swal.fire({
    icon:'error',
    title:'비밀번호를 입력해주세요',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      pwd.focus();
    }
  })
  return false;
};
var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

if (!pwdCheck.test(pwd.value)) {
  Swal.fire({
    icon:'error',
    text:'영문자+숫자+특수문자 조합으로 8~25자리 입력해주세요.',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      pwd.focus();
    }
  })
  return false;
};


if (repwd.value !== pwd.value) {
  Swal.fire({
    icon:'error',
    title:'비밀번호가 일치하지 않습니다..',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      repwd.focus();
    }
  })
  return false;
};


if (unickname.value == "") {
  Swal.fire({
    icon:'error',
    title:'닉네임을 입력하세요.',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      unickname.focus();
    }
  })
  return false;
};

  
if (ubirth.value == "") {
  Swal.fire({
    icon:'error',
    title:'생년월일을 입력하세요.',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      ubirth.focus();
    }
  })
  return false;
};

if (email_id.value== "") {
  Swal.fire({
    icon:'error',
    title:'이메일 주소를 입력하세요.',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      email_id.focus();
    }
  })
  return false;
};
 
if (uphone.value== "") {
  Swal.fire({
    icon:'error',
    title:'전화번호를 입력하세요.',
    confirmButtonColor:'#000',

    onAfterClose:() =>{
      uphone.focus();
    }
  })
  return false;
};
  var reg = /^[0-9]+/g; //숫자만 입력하는 정규식

  if (!reg.test(uphone.value)) {
    Swal.fire({
      icon:'error',
      text:'전화번호는 숫자만 입력할 수 있습니다.',
      confirmButtonColor:'#000',
  
      onAfterClose:() =>{
        uphone.focus();
      }
    })
    return false;
  };


 


  //입력 값 전송
  document.join_form.submit(); //유효성 검사의 포인트   
}

//아이디 중복체크 팝업창(현재 공백문서)


//이메일 옵션 선택후 주소 자동 완성
function change_email() {
  var email_add = document.getElementById("email_add");
  var email_sel = document.getElementById("email_sel");

  //지금 골라진 옵션의 순서와 값 구하기
  var idx = email_sel.options.selectedIndex;
  var val = email_sel.options[idx].value;

  email_add.value = val;
}


