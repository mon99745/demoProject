// // 회원가입에 대한 CRUD 해당하는 JS
'use strict';

let index = {
    //초기화
    init: function () {
        //회원가입
        //this를 바인딩하기 위해 화샬표 함수 사용
        $("#btn-save").on("click", () => {
            let form = document.querySelector("#needs-validation");
            if (form.checkValidity() == false) {
                console.log("회원가입 안됨")
            } else {
                this.save();
            }
        });

        //회원 정보 수정
        $("#btn-update").on("click", () => {
            let form = document.querySelector("#needs-validation");
            if (form.checkValidity() == false) {
                console.log("회원수정 안됨")
            } else {
                this.update();
            }
        });

    },

    //회원가입
    save: function() {
        let data = { //JavaScript Object
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val(),
            nickname: $("#nickname").val()
        }

        $.ajax({
            type: "POST", //Http method
            url: "/auth/api/v1/user", //추가 /auth
            data: JSON.stringify(data), //JSON으로 변환
            contentType: "application/json; charset=utf-8", //MIME 타입
            dataType: "json" //응답 데이터
        }).done(function(res) {
            alert("회원가입이 완료되었습니다.");
            location.href = "/";
        }).fail(function(err) {
            alert(JSON.stringify(err));
        });
    },

    //회원 정보 수정
    update: function () {
        let data = {
            id: $("#id").val(),
            password: $("#password").val(),
            nickname: $("#nickname").val()
        }

        $.ajax({
            type: "PUT",
            url: "/api/v1/user",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (res) {
            alert("회원수정이 완료되었습니다.");
            location.href = "/";
        }).fail(function (err) {
            alert(JSON.stringify(err));
        });
    }
}
index.init();